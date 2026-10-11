/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSUERadioCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSUERadioCapability  ::=  OCTET STRING
 * ```
 */
export
type EPSUERadioCapability = OCTET_STRING; // OctetStringType

export const _decode_EPSUERadioCapability: $.ASN1Decoder<EPSUERadioCapability> = $._decodeOctetString;

export const _encode_EPSUERadioCapability: $.ASN1Encoder<EPSUERadioCapability> = $._encodeOctetString;


/* eslint-enable */
