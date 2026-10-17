/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RATRestrictionInformation
 * @description
 * 
 * Indicates a list of RATs that are restricted. When used in EPS records, this
 * IE is encoded as specified in TS 36.413 [38] clause 9.2.1.22. When used in
 * 5GS records, this IE is encoded as specified in TS 38.413 [23] clause
 * 9.3.1.85.
 *
 * 3GPP TS 33.128, clause 8.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATRestrictionInformation  ::=  BIT STRING (SIZE(8, ...))
 * ```
 */
export
type RATRestrictionInformation = BIT_STRING;
export const _decode_RATRestrictionInformation: $.ASN1Decoder<RATRestrictionInformation> = $._decodeBitString;
export const _encode_RATRestrictionInformation: $.ASN1Encoder<RATRestrictionInformation> = $._encodeBitString;


/* eslint-enable */
