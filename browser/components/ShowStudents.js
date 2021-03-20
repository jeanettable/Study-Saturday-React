import React, { Component } from 'react'

const ShowStudents = (props) => {
    const { students } = props
    console.log('ss props-->', students)
    
    return(
        <div className="names-container">
        {students.map( (student) => {
            return (
                <tr key={student.id}> <td>
                    {student.firstName + ' ' + student.lastName}
                    </td> 
                </tr>
            )
        })}
        </div>
    );
}

export default ShowStudents
