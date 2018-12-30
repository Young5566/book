<template>
    <d2-container>
        <div style="padding-top: 80px; display: flex;justify-content: center;align-items: center;width: 100%">
            <el-form :model="formInfo" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"
                     style="width: 40vw">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="formInfo.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="formInfo.password" placeholder="请输入新密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitUsername('ruleForm')">修改用户名</el-button>
                    <el-button type="primary" @click="submitPassword('ruleForm')">修改密码</el-button>
                </el-form-item>
            </el-form>
        </div>
    </d2-container>
</template>
<script>
    import {mapState} from 'vuex'
    import {updateLibrarian} from "../../api/librarian";
    import util from '@/libs/util.js'

    export default {
        data() {
            return {
                formInfo: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'},
                        {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'change'},
                        {min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur'}
                    ]
                }
            };
        },
        computed: {
            ...mapState('d2admin/user', [
                'info'
            ])
        },
        mounted() {
            console.log(util.cookies.get('username'));
            this.formInfo.username = util.cookies.get('username')
        },
        methods: {
            submitUsername(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.updateLibrarian({
                            id: util.cookies.get('uuid'),
                            username: this.formInfo.username
                        })
                    } else {
                        this.messagePoint('请合法输入！', 'warning');
                        return false;
                    }
                });
            },
            submitPassword(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$prompt('请输入验证密码', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消'
                        }).then(({value}) => {
                            if (value === this.formInfo.password) {
                                this.updateLibrarian({
                                    id: util.cookies.get('uuid'),
                                    username:this.formInfo.password
                                })
                            } else {
                                this.messagePoint('两次输入的密码不一致', 'warning')
                            }
                        }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: '取消输入'
                            });
                        });
                    } else {
                        this.messagePoint('请合法输入！', 'warning');
                        return false;
                    }
                });
            },
            updateLibrarian(formInfo) {
                updateLibrarian(formInfo).then(
                    res => {
                        this.info.name = this.formInfo.username;
                        this.messagePoint('修改成功', 'success')
                    },
                    error => {
                        console.log('updateLibrarian ---->', error)
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>