import { INTEGER } from "@wildboar/asn1";

/**
 * @summary numOfInfoItems
 * @description
 *
 * SIZE upper bound (4) for `RequestedInformationList` and
 * `RequestedInformationTypeList`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * numOfInfoItems INTEGER ::= 4
 * ```
 *
 */
export const numOfInfoItems: INTEGER = 4;
