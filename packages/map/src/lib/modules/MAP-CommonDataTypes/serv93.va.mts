/* eslint-disable */
import { LCSServiceTypeID } from "../MAP-CommonDataTypes/LCSServiceTypeID.ta.mjs";


/**
 * @summary serv93
 * @description
 *
 * Non-standard LCS service type 93. Integers 64-127 are reserved for
 * non-standard LCS service types; 29.002 assigns the integer only. Values
 * follow 3GPP TS 22.071. (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.11.15).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serv93    LCSServiceTypeID ::= 93
 * ```
 * 
 * @constant
 */
export
const serv93: LCSServiceTypeID = 93;

/* eslint-enable */
