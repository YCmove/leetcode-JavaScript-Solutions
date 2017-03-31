'use strict'

// write protoype 

var Person = function (info) {

    var name = info.name || ''
    var phone = info.phone || ''

    this.getName = function () {
        return name
    }

    this.getPhone = function () {
        return phone
    }
}

// answer:

Person.prototype.getDetail = function () {
    return this.getName() + ' ' + this.getPhone()
}

var boyinfo = {
    name: 'John Doe',
    phone: 123123
}

var boy = new Person(boyinfo)

console.log(boy.getDetail())