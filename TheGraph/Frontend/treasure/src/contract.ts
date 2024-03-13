import {
  ClubCreated as ClubCreatedEvent,
  ClubInfoEvent as ClubInfoEventEvent,
  ProposalCreated as ProposalCreatedEvent
} from "../generated/Contract/Contract"
import {
  ClubCreated,
  ClubInfoEvent,
  ProposalCreated
} from "../generated/schema"

export function handleClubCreated(event: ClubCreatedEvent): void {
  let entity = new ClubCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.clubId = event.params.clubId
  entity.name = event.params.name
  entity.CID = event.params.CID
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClubInfoEvent(event: ClubInfoEventEvent): void {
  let entity = new ClubInfoEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Contract_id = event.params.id
  entity.name = event.params.name
  entity.memberCounter = event.params.memberCounter
  entity.proposalCounter = event.params.proposalCounter
  entity.pool = event.params.pool
  entity.CID = event.params.CID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProposalCreated(event: ProposalCreatedEvent): void {
  let entity = new ProposalCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.clubId = event.params.clubId
  entity.proposalId = event.params.proposalId
  entity.creator = event.params.creator
  entity.amount = event.params.amount
  entity.destination = event.params.destination
  entity.description = event.params.description
  entity.Cid = event.params.Cid

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
