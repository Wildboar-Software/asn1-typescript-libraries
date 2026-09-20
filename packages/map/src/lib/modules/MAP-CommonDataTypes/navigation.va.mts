/* eslint-disable */
import { LCSServiceTypeID } from "../MAP-CommonDataTypes/LCSServiceTypeID.ta.mjs";


/**
 * @summary navigation
 * @description
 *
 * Standard LCS service type 8: navigation. Integers 0-63 are reserved for
 * standard LCS service types. Values follow 3GPP TS 22.071. This service type
 * is reserved for use in previous releases. (3GPP TS 29.002 V19.1.0 clauses
 * 17.7.8 and 7.6.11.15).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * navigation    LCSServiceTypeID ::= 8
 * ```
 * 
 * @constant
 */
export
const navigation: LCSServiceTypeID = 8;

/* eslint-enable */
