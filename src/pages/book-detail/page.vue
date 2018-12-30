<template>
    <!--<div style="padding: 40px 0;background-color: white; display: flex;justify-content: center;align-items: center">-->
        <!---->
    <!--</div>-->
    <d2-container style="display: flex;justify-content: center;align-items: center">
        <div style="display: flex;justify-content: center;align-items: center; width: 100%;padding-top: 40px">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="width: 40vw">
                <el-form-item label="书名" prop="bookName">
                    <el-input v-model="ruleForm.bookName"></el-input>
                </el-form-item>
                <el-form-item label="作者" prop="author">
                    <el-input v-model="ruleForm.author"></el-input>
                </el-form-item>
                <el-form-item label="ISBN" prop="isbn">
                    <el-input v-model="ruleForm.isbn"></el-input>
                </el-form-item>
                <el-form-item label="价格" prop="price">
                    <el-input v-model.number="ruleForm.price"></el-input>
                </el-form-item>
                <el-form-item label="出版商" prop="publish">
                    <el-input v-model="ruleForm.publish"></el-input>
                </el-form-item>
                <el-form-item label="简介" prop="description">
                    <el-input type="textarea"  :rows="4" v-model="ruleForm.description"></el-input>
                </el-form-item>
                <el-form-item style="text-align: center;">
                    <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
                    <el-button @click="">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </d2-container>
</template>
<script>
    import { updateBook } from '../../api/book';
    import { getBookById } from '../../api/book';
    export default {
        data() {
            return {
                ruleForm: {
                    id:'',
                    bookName:'',
                    author:'',
                    isbn:'',
                    publish:'',
                    description:'',
                    price:''
                },
                rules: {
                    bookName: [
                        {required: true, message: '请输入书名', trigger: 'blur' }
                    ],
                    author: [
                        {required: true, message: '请输入作者', trigger: 'blur' },
                    ],
                    isbn: [
                        {required: true, message: '请输入ISBN', trigger: 'blur' },
                    ],
                    publish: [
                        {required: true, message: '请输入出版时间', trigger: 'blur' },
                    ],
                    description: [
                        {message: '请输入简介', trigger: 'change' },
                    ],
                    price: [
                        {required: true, message: '请输入价格' },
                        {type: 'number', message:'价格为数值型'}
                    ]
                }
            };
        },
        created(){
            this.getBookDetail(this.$route.query.id)
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.updateBook(this.ruleForm)
                    } else {
                        this.messagePoint('请合法输入！', 'warning');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            updateBook(bookInfo){
                bookInfo.ISBN = bookInfo.isbn;
                console.log(bookInfo);
                updateBook(bookInfo).then(
                    res => {
                        console.log(res);
                        if(res.code === 200) {
                            this.messagePoint('修改成功！', 'success');
                            this.$router.push({
                                name:"book-book-info"
                            })
                        } else {
                            this.messagePoint(res.message, 'error')
                        }
                    }
                )
            },
            getBookDetail(id){
                getBookById(id).then(
                    res => {
                        if (res.code === 200) {
                            this.ruleForm = res.data
                        } else {
                            this.messagePoint('获取失败', "error")
                        }
                    },
                    err => {
                        console.log("book-detail --->", err);
                        this.messagePoint('获取失败', "error")
                    }
                )
            }
        }
    }
</script>