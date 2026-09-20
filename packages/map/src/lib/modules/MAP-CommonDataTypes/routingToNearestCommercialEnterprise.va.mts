/* eslint-disable */
import { LCSServiceTypeID } from "../MAP-CommonDataTypes/LCSServiceTypeID.ta.mjs";


/**
 * @summary routingToNearestCommercialEnterprise
 * @description
 *
 * Standard LCS service type 7: routing to nearest commercial enterprise.
 * Integers 0-63 are reserved for standard LCS service types. Values follow 3GPP
 * TS 22.071. (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.11.15).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * routingToNearestCommercialEnterprise    LCSServiceTypeID ::= 7
 * ```
 * 
 * @constant
 */
export
const routingToNearestCommercialEnterprise: LCSServiceTypeID = 7;

/* eslint-enable */
