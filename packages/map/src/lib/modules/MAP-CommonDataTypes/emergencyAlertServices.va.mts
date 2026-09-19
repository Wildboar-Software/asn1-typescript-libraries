/* eslint-disable */
import { LCSServiceTypeID } from "../MAP-CommonDataTypes/LCSServiceTypeID.ta.mjs";


/**
 * @summary emergencyAlertServices
 * @description
 *
 * Standard LCS service type 1: emergency alert services. Integers 0-63 are
 * reserved for standard LCS service types. Values follow 3GPP TS 22.071. (3GPP
 * TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.11.15).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * emergencyAlertServices    LCSServiceTypeID ::= 1
 * ```
 * 
 * @constant
 */
export
const emergencyAlertServices: LCSServiceTypeID = 1;

/* eslint-enable */
