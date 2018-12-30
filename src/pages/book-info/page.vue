<template>

    <d2-container>
        <div style="text-align: center;">
            <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                <el-table-column
                        prop="bookName"
                        label="书名"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="author"
                        label="作者"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="isbn"
                        label="ISBN"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="price"
                        label="价格"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="publish"
                        label="出版社"
                        width="250">
                </el-table-column>
                <el-table-column
                        prop="description"
                        label="简介"
                        width="350">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleView(scope.$index, scope.row)">查看</el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="total"
                    style="margin-top: 40px"
                    @current-change="handleCurrentChange"
                    :page-size="9"
                    :current-page.sync="currentPage">
            </el-pagination>
        </div>
    </d2-container>
</template>

<script>
    import { getAllBook } from '../../api/book';
    import { deleteBook } from '../../api/book';
    export default {
        data() {
            return {
                pageSize:2,
                total:0,
                currentPage:1,
                tableData: []
            }
        },
        created(){
          this.getAllBook(1)
        },
        methods:{
            getAllBook(page){
                getAllBook(page).then(
                    res => {
                        this.tableData = res.data.books;
                        this.total = res.data.total
                    }
                )
            },
            handleCurrentChange(value){
                this.getAllBook(value)
            },
            handleView(index, row){
                console.log(row);
                this.$router.replace({
                    name:"book-book-detail",
                    query:{
                        id:row.id
                    }
                })
            },
            handleDelete(index, row){
                this.$confirm('此操作将永久删除  ' + row.bookName +', 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.deleteBook(index, row.id)
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            deleteBook(index,id){
                deleteBook(id).then(
                    res => {
                        console.log(res);
                        this.tableData.splice(index, 1);
                        this.messagePoint('删除成功', 'success')
                    }
                )
            }
        }
    }
</script>