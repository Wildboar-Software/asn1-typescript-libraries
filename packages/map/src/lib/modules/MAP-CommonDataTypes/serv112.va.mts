/* eslint-disable */
import { LCSServiceTypeID } from "../MAP-CommonDataTypes/LCSServiceTypeID.ta.mjs";


/**
 * @summary serv112
 * @description
 *
 * Non-standard LCS service type 112. Integers 64-127 are reserved for
 * non-standard LCS service types; 29.002 assigns the integer only. Values
 * follow 3GPP TS 22.071. (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.11.15).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serv112    LCSServiceTypeID ::= 112
 * ```
 * 
 * @constant
 */
export
const serv112: LCSServiceTypeID = 112;

/* eslint-enable */
