/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { mIDMailboxAuth } from "../SS-MID-Operations-asn1-97/mIDMailboxAuth.oa.mjs";
import { mIDMailboxID } from "../SS-MID-Operations-asn1-97/mIDMailboxID.oa.mjs";

/**
 * @summary MID_Operations
 * @description
 *
 * Operations of SS-MID (ECMA-347 §7.3.1). Each invoke is
 * carried in a Facility information element (§7.3.2). The
 * NFE destination entity is `endPINX`. The interpretation
 * APDU is omitted or `rejectAnyUnrecognizedInvokePdu`.
 *
 * §7.2 requires the call-independent procedures of
 * ECMA-165. §7.5 does not repeat the connection rules of
 * §6.5. Timer expiry releases that connection unless it is
 * still required (§7.5.1.2.2, §7.5.2.2.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
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
