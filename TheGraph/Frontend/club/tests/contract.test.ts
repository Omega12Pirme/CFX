import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ClubInfoEvent } from "../generated/schema"
import { ClubInfoEvent as ClubInfoEventEvent } from "../generated/Contract/Contract"
import { handleClubInfoEvent } from "../src/contract"
import { createClubInfoEventEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let name = "Example string value"
    let memberCounter = BigInt.fromI32(234)
    let proposalCounter = BigInt.fromI32(234)
    let pool = BigInt.fromI32(234)
    let CID = "Example string value"
    let newClubInfoEventEvent = createClubInfoEventEvent(
      id,
      name,
      memberCounter,
      proposalCounter,
      pool,
      CID
    )
    handleClubInfoEvent(newClubInfoEventEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ClubInfoEvent created and stored", () => {
    assert.entityCount("ClubInfoEvent", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ClubInfoEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "ClubInfoEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "memberCounter",
      "234"
    )
    assert.fieldEquals(
      "ClubInfoEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "proposalCounter",
      "234"
    )
    assert.fieldEquals(
      "ClubInfoEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "pool",
      "234"
    )
    assert.fieldEquals(
      "ClubInfoEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "CID",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
