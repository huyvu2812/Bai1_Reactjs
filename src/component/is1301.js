import React, { Component } from 'react';


class StudentClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            index: '',
            student: []
        }
    }

    componentDidMount() {
        this.refs.id.focus();
    }

    btnSAdd = (event) => {
        event.preventDefault();

        let student = this.state.student;
        let id = this.refs.id.value;
        let sname = this.refs.sname.value;
        let sclass = this.refs.sclass.value;
        let phone = this.refs.phone.value;
        let email = this.refs.email.value;

        if (this.state.num === 0) {
            let data = {
                id, sname, sclass, phone, email
            }
            student.push(data);
        }

        else {
            let index = this.state.index;
            student[index].id = id;
            student[index].sname = sname;
            student[index].sclass = sclass;
            student[index].phone = phone;
            student[index].email = email;
        }

        this.setState({
            student: student,
            num: 0
        });

        this.refs.myForm.reset();
        this.refs.id.focus();
    }

    btnRemove = (i) => {
        let student = this.state.student;
        student.splice(i, 1);
        this.setState({
            student: student
        });

        this.refs.myForm.reset();
        this.refs.id.focus();
    }

    btnEdit = (i) => {
        let data = this.state.student[i];
        this.refs.id.value = data.id;
        this.refs.sname.value = data.sname;
        this.refs.sclass.value = data.sclass;
        this.refs.phone.value = data.phone;
        this.refs.email.value = data.email;

        this.setState({
            num: 1,
            index: i
        });


    }

    render() {
        let student = this.state.student;
        return (
            <div className="App">
                <h1 align="center">Add new Student</h1>
                <table className="table table-bordered table-hover">
                    <tfoot>
                        <tr>
                            <th>
                                <form ref="myForm" className="studentForm">
                                    <label>ID:</label>
                                    <input type="text" ref="id" className="txt" />
                                    <label>Full Name:</label>
                                    <input type="text" ref="sname" className="txt" />
                                    <label>Class:</label>
                                    <input type="text" ref="sclass" className="txt" />
                                    <label>Phone:</label>
                                    <input type="text" ref="phone" className="txt" />
                                    <label>Email:</label>
                                    <input type="text" ref="email" className="txt" />
                                    <br />
                                    <br />
                                    <button onClick={(event) => this.btnSAdd(event)} className="btnAdd">ADD qua list bên kia </button>
                                </form>
                            </th>
                            <th>
                                <h3 align="center">List Student</h3>
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>STUDENT ID</th>
                                            <th>FULL NAME</th>
                                            <th>CLASS</th>
                                            <th>Phone Number</th>
                                            <th>Email</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {student.map((data, i) =>
                                            <tr key={i} >
                                                <td>
                                                    {i + 1}
                                                </td>
                                                <td>
                                                    {data.id}
                                                </td>
                                                <td>
                                                    {data.sname}
                                                </td>
                                                <td>
                                                    {data.sclass}
                                                </td>
                                                <td>
                                                    {data.phone}
                                                </td>
                                                <td>
                                                    {data.email}
                                                </td>
                                                <td>
                                                    <button onClick={() => this.btnEdit(i)} className="btnUpdate">Sửa </button>
                                                    <button onClick={() => this.btnRemove(i)} className="btnDelete">Xóa </button>
                                                </td>

                                            </tr>)}
                                    </tbody>

                                </table>

                            </th>
                        </tr>
                    </tfoot>
                </table>

            </div>

        );
    }
}

export default StudentClass;
