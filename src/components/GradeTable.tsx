import { Fragment } from "react";
import {Table,Card,Alert} from "antd"



const GradeTable = (props : any) => {
      const columns = [
        {
          title: 'Subject',
          dataIndex: 'sub',
          key: 'sub',
        },
        {
          title: 'Subject Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Credit',
          dataIndex: 'credit',
          key: 'credit',
        },{
            title: 'Grade',
            dataIndex: 'grade',
            key: 'grade',
          },
      ];

      const totalColumns = [
          {title : "This Semester",
          children : [
              {title : "Registered",
              dataIndex : "registered",
              key : "registered"
            },{
                title:"Earned",
                dataIndex : "earned",
                key:"earned"
            },{
                title:"Accumulated",
                dataIndex : "ca",
                key : "ca"
            },{
                title : "GP",
                dataIndex : "gp",
                key : "gp"
            },{
                title : "GPA",
                dataIndex : "gpa",
                key : "gpa"
            }
                  ]
        }

      ]

      const accColumns = [        {
        title : "Cumulative to this semester",
        children : [
            {title : "Registered",
            dataIndex : "c_registered",
            key : "c_registered"
          },{
              title:"Earned",
              dataIndex : "c_earned",
              key:"c_earned"
          },{
              title:"Accumulated",
              dataIndex : "c_ca",
              key : "c_ca"
          },{
              title : "GP",
              dataIndex : "c_gp",
              key : "c_gp"
          },{
            title : "GPAX",
            dataIndex : "c_gpax",
            key : "c_gpax"
        }
                ]
    }]
      const testTotal = [{
          registered : "17",
          earned : "17",
          ca : "17",
          gp : "17",
          gpa : "2.38"

      }]

      const accTotal = [{
        c_registered : "17",
        c_earned : "17",
        c_ca : "17",
        c_gp : "17",
        gpax : "2.38"

    }]
    return(
        <Fragment>
            <Alert message="Student Status : Normal" type="success" />
            <Alert message={"Grade Status : ".concat(props.gradeState !== "na" ? "Normal" : "Not Calculated") } 
            
            type={props.gradeState !== "na" ? "success" : "warning"} />
            
            <Table dataSource={props.grade} columns={columns} pagination={{hideOnSinglePage : true}}/>
            <Table dataSource={props.acc["sem"]} columns ={totalColumns} pagination = {{hideOnSinglePage : true}}/>
            <Table dataSource = {props.acc["acc"]} columns = {accColumns} pagination = {{hideOnSinglePage : true}}/>
        </Fragment>
    )
}

export default GradeTable;