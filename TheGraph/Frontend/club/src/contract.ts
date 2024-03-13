import {
  ClubInfoEvent as ClubInfoEventEvent,
  ProposalCreated as ProposalCreatedEvent,
  ProposalInfoEvent as ProposalInfoEventEvent
} from "../generated/Contract/Contract"
import {
  ClubInfoEvent,
  ProposalCreated,
  ProposalInfoEvent
} from "../generated/schema"

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

export function handleProposalInfoEvent(event: ProposalInfoEventEvent): void {
  let entity = new ProposalInfoEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.clubId = event.params.clubId
  entity.proposalId = event.params.proposalId
  entity.creator = event.params.creator
  entity.amount = event.params.amount
  entity.destination = event.params.destination
  entity.status = event.params.status
  entity.description = event.params.description
  entity.votesFor = event.params.votesFor
  entity.votesAgainst = event.params.votesAgainst
  entity.proposedAt = event.params.proposedAt
  entity.proposalExpireAt = event.params.proposalExpireAt
  entity.Cid = event.params.Cid

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
