import React, { useState } from "react";
import { useEffect } from "react";
import MemberTable from "../components/MemberTable";
import axios from "axios";

function Members() {
    const [members, setMembers] = useState([]);

    // Simulate fetching data from an API
    const fetchData = async () => {
        axios.get('http://localhost:5000/api/getmembers')
            .then(response => {
                setMembers(response.data);
            })
            .catch(error => {
                console.error('Error fetching members:', error);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);

    return <MemberTable members={members} />;
}

export default Members;