var chai = require('chai')
var chaiHttp = require('chai-http')
var server = require('../bin/start.js')
//Assertion Style
var should = chai.should()

chai.use(chaiHttp)

describe ('users',()=>{
    /**
     * Test the GET route
     */
    describe("GET /api/user", ()=>{
        it('should GET all the users',(done)=>{
            chai.request('http://localhost:8000')
                .get('/api/user')
                .end((err,res)=>{
                    res.should.have.status(200)
                    res.body.should.contain.an('object')
                    //res.body.length.should.be.eq(5)
                    //res.body.should.be.a('object')
                    //res.body.should.have.deep.property('user1.id')
                   // res.body.should.have.deep.property('user1.id').eq('1')
                    done();
            })
        })
        it('should not GET all the users',(done)=>{
            chai.request('http://localhost:8000')
                .get('/api/users')
                .end((err,res)=>{
                    res.should.have.status(404)
                   // res.text.should.be.eq("The URL passed does not exist")
                    done();
            })
        })
    })
    
    describe("POST /api/user", ()=>{
        it('should POST all the users',(done)=>{          
            chai.request('http://localhost:8000')
                .post('/api/user')
                .end((err,res)=>{
                    res.should.have.status(200)
                    res.body.should.have.a('object')
                    //res.body.should.have.property('Testuser.id').eq(10)
                    done();
            })
        })    
        it('should not POST all the users',(done)=>{            
            chai.request('http://localhost:8000')
                .post('/api/user/1')
                .end((err,res)=>{
                    res.should.have.status(404)
                    //res.text.should.be.eq("The URl provided does not exist")
                    done();
            })
        })
    })   
    describe("PUT /api/user/:id", ()=>{
        it('should update the user',(done)=>{
            const userId = 10
            
            chai.request('http://localhost:8000')
                .put("/api/user/" + userId)
                .send('')
                .end((err,res)=>{
                    res.should.have.status(200)
                    res.body.should.have.a('object')
                    //res.body.should.have.property('user'+taskId+'.id').eq(10)
                done();
            })
        })
        it('should not update the user',(done)=>{
            const userId = 10            
            chai.request('http://localhost:8000')
                .put("/api/users/" + userId)
                .send('')
                .end((err,res)=>{
                    res.should.have.status(404)
                    //res.text.should.be.eq("The URl provided does not exist")
                done();
            })
        })
    })
    describe("PATCH /api/user/:id", ()=>{
        it('should PATCH the users',(done)=>{
            const userId = 10
            const task={
                "user10": {
                    "name" : "TestMocha"
                }
            }
            
            chai.request('http://localhost:8000')
                .patch("/api/user/" + userId)
                .send(task)
                .end((err,res)=>{
                    res.should.have.status(200)
                    res.body.should.have.a('object')
                    //res.body.should.deep.include('user10')
                    done();
            })
        })
        it('should not PATCH the users',(done)=>{
            const userId = 100
            const task={
                "user10": {
                    "name" : "TestMocha"
                }
            }
            
            chai.request('http://localhost:8000')
                .patch("/api/user/" + userId)
                .send(task)
                .end((err,res)=>{
                    res.should.have.status(404)
                    //res.text.should.be.eq("The User ID provided does not exist")
                    done();
            })
        })

    })
    describe("DELETE /api/user/:id", ()=>{
        it('should Delete the user',(done)=>{
            const userId = 2            
            chai.request('http://localhost:8000')
                .delete("/api/user/" + userId)
                .end((err,res)=>{
                    res.should.have.status(200)
                    done();
            })
        })

        it('should not Delete the user',(done)=>{
            const userId = 145            
            chai.request('http://localhost:8000')
                .delete("/api/user/" + userId)
                .end((err,res)=>{
                    res.should.have.status(400)
                   // res.text.should.be.eq("The User ID provided does not exist")
                    done();
            })
        })
    })
})