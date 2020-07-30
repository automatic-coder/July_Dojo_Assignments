/*
    Objects - Data Structure
    key:value pair
    dictionary
    map
    hashtable
    hashmap
*/

var obj = {
    'name': 'jim',
    'age':30,
    'siblings': {
        'brothers': [{
            'name':'michael',
            'age': 30
        },{
            'name': 'kevin',
            'age': 45
        },{
            'name': 'oscar',
            'age': 34
        }],
        'sisters':[{
            'name': 'angela',
            'age':50
        },{
            'name': 'pam',
            'age':34
        }]
    }
}

console.log(obj['siblings']['brothers'][2]['name'])
console.log(obj['siblings']['brothers'][2]['age'])
console.log(obj['siblings']['brothers'][2])


