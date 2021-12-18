// Write your tests here
const request = require("supertest");
const server = require("./server");
const database = require("../data/dbConfig");

beforeAll(async () => {
  await database.migrate.rollback()
  await database.migrate.latest()
})

afterAll(async () => {
  await database.destroy()
})

describe("sanity tests", () => {
  test("tests are working", () => {
    expect(true).toBe(true)
  })
})

// [POST] -- register endpoint
describe("[POST] /api/auth/register", () => {

  const newUser = {
    username: "Bryce",
    password: "Slader"
  }

  let res
  beforeAll(async() => {
      res = await request(server).post("/api/auth/register").send(newUser)
  })

  it("res status 201 on success", async () => {
    expect(res.status).toBe(201)
  })

  it("returns user with hashed password on success", async () => {
    expect(res.body.username).toBe(newUser.username)
    expect(res.body.password).not.toBe(newUser.password)
  })
})

// [POST] -- login endpoint
describe("[POST] /api/auth/login", () => {

  const loginUser = {
    username: "Bryce",
    password: "Slader"
  }

  let res
  beforeAll(async() => {
      res = await request(server).post("/api/auth/login").send(loginUser)
  })

  it("res status 200 on success", async () => {
    expect(res.status).toBe(200)
  })

  it("returns response on success", async () => {
    expect(res.body.message).toContain(`Welcome, ${loginUser.username}`)
  })
})

// [GET] -- jokes endpoint
describe("[GET] /api/jokes/", () => {

  it("rejects access if no token", async () => {
    let res = await request(server).get("/api/jokes")
    expect(res.body.message).toBe("token required")
  })

  it("returns jokes if token", async () => {

    const loginUser = {
      username: "Bryce",
      password: "Slader"
    }
  
    let login = await request(server).post("/api/auth/login").send(loginUser)
    let token = login.body.token
    let res = await request(server).get("/api/jokes")
      .set("Authorization", token)

    expect(res.body).toHaveLength(3)
  })
})