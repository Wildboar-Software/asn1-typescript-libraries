/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { mIDMailboxAuth } from "../SS-MID-Operations-asn1-97/mIDMailboxAuth.oa.mjs";
import { mIDMailboxID } from "../SS-MID-Operations-asn1-97/mIDMailboxID.oa.mjs";

/**
 * @summary MID_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MID-Operations OPERATION ::= { mIDMailboxAuth | mIDMailboxID }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const MID_Operations: (OPERATION)[] = [ mIDMailboxAuth, mIDMailboxID, ];

/* eslint-enable */
