/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { recallAlerting } from "../Recall-Operations-asn1-97/recallAlerting.oa.mjs";
import { recallAnswered } from "../Recall-Operations-asn1-97/recallAnswered.oa.mjs";

/**
 * @summary Recall_Operations
 * @description
 *
 * Recall notifications (ECMA-214 §6.3.1): `recallAlerting` and
 * `recallAnswered`, both sent from the Served User PINX to the Primary PINX and
 * both unconfirmed. The NFE destination is `endPINX` and the Interpretation
 * APDU discards an unrecognised invoke (§6.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-214/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Recall-Operations OPERATION ::= { recallAlerting | recallAnswered }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const Recall_Operations: (OPERATION)[] = [ recallAlerting, recallAnswered, ];

/* eslint-enable */
