"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name, employess) {
        if (employess === void 0) { employess = []; }
        this.id = id;
        this.name = name;
        this.employess = employess;
    }
    Department.prototype.addEmployee = function (employee) {
        this.employess.push(employee);
    };
    Department.prototype.printEmployessList = function () {
        console.log(this.employess);
    };
    Department.prototype.describe = function () {
        console.log(this.name);
    };
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        if (reports === void 0) { reports = []; }
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            else {
                throw new Error('沒有近期的報告');
            }
        },
        set: function (val) {
            if (!val) {
                throw new Error('請輸入有效的字串');
            }
            this.addReport(val);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addEmployee = function (employee) {
        if (employee === 'archie') {
            return;
        }
        this.employess.push(employee);
    };
    AccountingDepartment.prototype.addReport = function (report) {
        this.reports.push(report);
        this.lastReport = report;
    };
    AccountingDepartment.prototype.showReports = function () {
        console.log(this.addReport);
    };
    return AccountingDepartment;
}(Department));
var f2e = new ITDepartment('t1', ['archie']);
var accounting = new AccountingDepartment('d1');
accounting.mostRecentReport = 'setReport';
console.log(accounting.mostRecentReport);
// f2e.addEmployee('archie')
// f2e.addEmployee('max')
// f2e.printEmployessList()
// f2e.employess[2] = 'stan'
// f2e.name = "other"
// f2e.printEmployessList()
accounting.addReport('test1');
accounting.addEmployee('archie1111');
accounting.addEmployee('max2222');
accounting.addReport('test2');
accounting.addReport('test3');
// accounting.employess = ['new']
console.log(accounting);
accounting.printEmployessList();
