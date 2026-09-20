/* eslint-disable */
import { LCSServiceTypeID } from "../MAP-CommonDataTypes/LCSServiceTypeID.ta.mjs";


/**
 * @summary personTracking
 * @description
 *
 * Standard LCS service type 2: person tracking. Integers 0-63 are reserved for
 * standard LCS service types. Values follow 3GPP TS 22.071. (3GPP TS 29.002
 * V19.1.0 clauses 17.7.8 and 7.6.11.15).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * personTracking    LCSServiceTypeID ::= 2
 * ```
 * 
 * @constant
 */
export
const personTracking: LCSServiceTypeID = 2;

/* eslint-enable */
