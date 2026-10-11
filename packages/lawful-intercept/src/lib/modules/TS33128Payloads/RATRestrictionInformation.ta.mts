/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RATRestrictionInformation
 * @description
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
