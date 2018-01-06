const expect = require('expect');

const {generateMessage} = require('./message');

describe('Message generation test',()=>{
    it('should have fields',()=>{
        var from = 'Yousof';
        var text = 'Hello Mr!';
        var message= generateMessage(from,text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            text,
        });
    })
});