/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MUSIMUERequestType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MUSIMUERequestType  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type MUSIMUERequestType = OCTET_STRING; // OctetStringType

export const _decode_MUSIMUERequestType: $.ASN1Decoder<MUSIMUERequestType> = $._decodeOctetString;

export const _encode_MUSIMUERequestType: $.ASN1Encoder<MUSIMUERequestType> = $._encodeOctetString;


/* eslint-enable */
