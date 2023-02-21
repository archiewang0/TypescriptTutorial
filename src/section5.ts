class Department {
    constructor(
        private readonly id:string,
        public  name:string , 
        protected employess: string[] = [],
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
    private lastReport: string;
    
    get mostRecentReport(){
        if (this.lastReport){
            return this.lastReport
        } else {
            throw new Error('沒有近期的報告')
        }
    }
    set mostRecentReport(val:string){
        if(!val){
            throw new Error('請輸入有效的字串')
        }
        this.addReport(val)
    }

    constructor( id:string ,public reports: string[] = []){
        super(id,'Accounting')
        this.lastReport = reports[0]
    }
    addEmployee(employee: string): void {
        if (employee === 'archie'){
            return;
        }
        this.employess.push(employee)
    }
    addReport(report:string){
        this.reports.push(report)
        this.lastReport = report
    }
    showReports(){
        console.log(this.addReport)
    }
}


const f2e = new ITDepartment('t1',['archie'])
const accounting = new AccountingDepartment('d1')
accounting.mostRecentReport = 'setReport'
console.log(accounting.mostRecentReport)

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
// accounting.employess = ['new']
console.log(accounting)
accounting.printEmployessList()

