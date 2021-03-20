import React, { Component } from 'react'
import axios from 'axios'
import ShowStudents from './ShowStudents'

class Main extends Component {
    constructor()   {
        super()
        this.state = {
            students : []
        };
    }

    async componentDidMount()  {
        try {
            console.log('component did mount triggered!');
            const response = await axios.get('/student')
            console.log('response-->', response)
            const students = response.data
            console.log('students -->', students)
            this.setState(
                {students : students}
            )
        } catch (err) {
            console.log(err);
        }
    }
    
    render()    {
        const { students } = this.state;
        // console.log('students-->', students)

        return (
            <div id="main">
                <div id="students-container">
                    <h1>Students</h1>
                    <table>
                        <thead>
                            <tr>
                            <th>Names:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            {students.length ? <ShowStudents students={students} /> : <span>...loading</span>}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Main