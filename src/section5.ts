class Department {
    constructor(
        private readonly id:string,
        public  name:string , 
        private employess: string[] = [],
    ){}
    
    addEmployee(employee:string){
        this.employess.push(employee)
    }
    printEmployessList(){
        console.log(this.employess)
    }
    describe(){
        console.log( this.name);
    }
}

class ITDepartment extends Department{
    admins: string[]
    constructor(id:string , admins: string[]){
        super(id,'IT')
        this.admins = admins
    }
}
class AccountingDepartment extends Department{
    constructor( id:string ,public reports: string[] = []){
        super(id,'Accounting')
    }
    addReport(report:string){
        this.reports.push(report)
    }
    showReports(){
        console.log(this.addReport)
    }
}


const f2e = new ITDepartment('t1',['archie'])
const accounting = new AccountingDepartment('d1')

// f2e.addEmployee('archie')
// f2e.addEmployee('max')
// f2e.printEmployessList()
// f2e.employess[2] = 'stan'
// f2e.name = "other"
// f2e.printEmployessList()
accounting.addReport('test1')
accounting.addEmployee('archie1111')
accounting.addEmployee('max2222')
accounting.addReport('test2')
accounting.addReport('test3')
console.log(accounting)
accounting.printEmployessList()

