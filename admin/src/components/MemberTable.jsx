import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MemberTable = ({ members }) => {
    return (
        <div className="container mt-4">
            <h3 className="text-center mb-4">Gym Members List</h3>
            <table className="table table-bordered table-striped table-hover text-center align-middle">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Plan</th>
                    </tr>
                </thead>
                <tbody>
                    {members && members.length > 0 ? (
                        members.map((member, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{member.email}</td>
                                <td>{member.phone}</td>
                                <td>{member.age}</td>
                                <td>{member.plan}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-muted">
                                No members found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MemberTable;