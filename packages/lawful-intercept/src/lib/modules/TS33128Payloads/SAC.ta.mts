/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SAC  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type SAC = OCTET_STRING; // OctetStringType
export const _decode_SAC: $.ASN1Decoder<SAC> = $._decodeOctetString;
export const _encode_SAC: $.ASN1Encoder<SAC> = $._encodeOctetString;


/* eslint-enable */
