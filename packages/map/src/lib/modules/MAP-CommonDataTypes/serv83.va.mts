/* eslint-disable */
import { LCSServiceTypeID } from "../MAP-CommonDataTypes/LCSServiceTypeID.ta.mjs";


/**
 * @summary serv83
 * @description
 *
 * Non-standard LCS service type 83. Integers 64-127 are reserved for
 * non-standard LCS service types; 29.002 assigns the integer only. Values
 * follow 3GPP TS 22.071. (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.11.15).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serv83    LCSServiceTypeID ::= 83
 * ```
 * 
 * @constant
 */
export
const serv83: LCSServiceTypeID = 83;

/* eslint-enable */
