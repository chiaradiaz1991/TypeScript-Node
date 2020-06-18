
import * as mongoose from 'mongoose';
import { StudentSchema } from '../models/student';
import { Request, Response } from 'express';

const StudentMongooseModel = mongoose.model('Studen', StudentSchema); // base on the StudentSchema class

export class StudentController {
  public addNewStudent(req: Request, res: Response) {
    let newStudent = new StudentMongooseModel(req.body);

    newStudent.save((err, data) => {
      if (err) {
        res.send(err);
      }
      res.json(data);
    });
  }

  public getStudents(req: Request, res: Response) {
    StudentMongooseModel.find({}, (err, data) => {
      if (err) {
        res.send(err)
      }
      res.json(data)
    });
  }

  public getStudentsById(req: Request, res: Response) {
    StudentMongooseModel.findById(req.params.studentId, (err, data) => {
      if (err) {
        res.send(err)
      }
      res.json(data)
    });
  }

  public updateStudents(req: Request, res: Response) {
    StudentMongooseModel.findOneAndUpdate({ _id: req.params.studentId }, req.body, { new: true },
      (err, data) => {
        if (err) {
          res.send(err)
        }
        res.json(data)
      }
    )
  };

  public deleteStudent(req: Request, res: Response) {
    StudentMongooseModel.findOneAndRemove({ _id: req.params.studentId }, (err, data) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted student' });
    });
  };

  public generateDummyData(req: Request, res: Response) {
    var data = [
      {
        "FirsName": "Juana",
        "LastName": "De Arco",
        "School": "one School",
        "StartDate": new Date("2012-03-03T08:00:00"),
      },
      {
        "FirsName": "Lucía",
        "LastName": "Mar",
        "School": "two School",
        "StartDate": new Date("2012-03-03T08:00:00"),
      },
      {
        "FirsName": "Love",
        "LastName": "O",
        "School": "three School",
        "StartDate": new Date("2012-03-03T08:00:00"),
      },
      {
        "FirsName": "John",
        "LastName": "Kala",
        "School": "four School",
        "StartDate": new Date("2012-03-03T08:00:00"),
      }
    ];

    StudentMongooseModel.collection.insert(data, function (err, docs) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "succesfully generated 4 examples" })
    });
  }
}
