import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ClubInfoEvent,
  ProposalCreated,
  ProposalInfoEvent
} from "../generated/Contract/Contract"

export function createClubInfoEventEvent(
  id: BigInt,
  name: string,
  memberCounter: BigInt,
  proposalCounter: BigInt,
  pool: BigInt,
  CID: string
): ClubInfoEvent {
  let clubInfoEventEvent = changetype<ClubInfoEvent>(newMockEvent())

  clubInfoEventEvent.parameters = new Array()

  clubInfoEventEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  clubInfoEventEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  clubInfoEventEvent.parameters.push(
    new ethereum.EventParam(
      "memberCounter",
      ethereum.Value.fromUnsignedBigInt(memberCounter)
    )
  )
  clubInfoEventEvent.parameters.push(
    new ethereum.EventParam(
      "proposalCounter",
      ethereum.Value.fromUnsignedBigInt(proposalCounter)
    )
  )
  clubInfoEventEvent.parameters.push(
    new ethereum.EventParam("pool", ethereum.Value.fromUnsignedBigInt(pool))
  )
  clubInfoEventEvent.parameters.push(
    new ethereum.EventParam("CID", ethereum.Value.fromString(CID))
  )

  return clubInfoEventEvent
}

export function createProposalCreatedEvent(
  clubId: BigInt,
  proposalId: BigInt,
  creator: Address,
  amount: BigInt,
  destination: Address,
  description: string,
  Cid: string
): ProposalCreated {
  let proposalCreatedEvent = changetype<ProposalCreated>(newMockEvent())

  proposalCreatedEvent.parameters = new Array()

  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam("clubId", ethereum.Value.fromUnsignedBigInt(clubId))
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "destination",
      ethereum.Value.fromAddress(destination)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam("Cid", ethereum.Value.fromString(Cid))
  )

  return proposalCreatedEvent
}

export function createProposalInfoEventEvent(
  clubId: BigInt,
  proposalId: BigInt,
  creator: Address,
  amount: BigInt,
  destination: Address,
  status: string,
  description: string,
  votesFor: BigInt,
  votesAgainst: BigInt,
  proposedAt: BigInt,
  proposalExpireAt: BigInt,
  Cid: string
): ProposalInfoEvent {
  let proposalInfoEventEvent = changetype<ProposalInfoEvent>(newMockEvent())

  proposalInfoEventEvent.parameters = new Array()

  proposalInfoEventEvent.parameters.push(
    new ethereum.EventParam("clubId", ethereum.Value.fromUnsignedBigInt(clubId))
  )
  proposalInfoEventEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  proposalInfoEventEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  proposalInfoEventEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  proposalInfoEventEvent.parameters.push(
    new ethereum.EventParam(
      "destination",
      ethereum.Value.fromAddress(destination)
    )
  )
  proposalInfoEventEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromString(status))
  )
  proposalInfoEventEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  proposalInfoEventEvent.parameters.push(
    new ethereum.EventParam(
      "votesFor",
      ethereum.Value.fromUnsignedBigInt(votesFor)
    )
  )
  proposalInfoEventEvent.parameters.push(
    new ethereum.EventParam(
      "votesAgainst",
      ethereum.Value.fromUnsignedBigInt(votesAgainst)
    )
  )
  proposalInfoEventEvent.parameters.push(
    new ethereum.EventParam(
      "proposedAt",
      ethereum.Value.fromUnsignedBigInt(proposedAt)
    )
  )
  proposalInfoEventEvent.parameters.push(
    new ethereum.EventParam(
      "proposalExpireAt",
      ethereum.Value.fromUnsignedBigInt(proposalExpireAt)
    )
  )
  proposalInfoEventEvent.parameters.push(
    new ethereum.EventParam("Cid", ethereum.Value.fromString(Cid))
  )

  return proposalInfoEventEvent
}
