function skillMember() {
    var member = {
        name: 'John',
        age: 30,
        calculateBirthYear: function() {
            return 2019 - this.age;
        }
    };
    console.log(member.calculateBirthYear());
}