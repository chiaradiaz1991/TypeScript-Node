
import { Request, Response } from 'express';
import { StudentController } from '../controllers/studentController';

export class Routes {

  studenController: StudentController = new StudentController();

  public routes(app: any): void {
    app.route('/')
      .get((req: Request, res: Response) => {
        res.status(200).send('Hello World');
      });


    // get all students
    app.route('/api/students')
      .get(this.studenController.getStudents);

    // create new student
    app.route('/api/students')
      .post(this.studenController.addNewStudent);

    // get a student by id
    app.route('/api/students/:studentId')
      .get(this.studenController.getStudentsById);

    // update a student 
    app.route('/api/students/:studentId')
      .put(this.studenController.updateStudents);

    // delete a student
    app.route('/api/students/:studentId')
      .delete(this.studenController.deleteStudent);

    // generate data
    app.route('/api/data')
      .get(this.studenController.generateDummyData);
  }
}