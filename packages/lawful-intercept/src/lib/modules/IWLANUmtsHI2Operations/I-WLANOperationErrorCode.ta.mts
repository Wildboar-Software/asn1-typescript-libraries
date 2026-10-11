/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary I_WLANOperationErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * I-WLANOperationErrorCode  ::=  OCTET STRING
 * ```
 */
export
type I_WLANOperationErrorCode = OCTET_STRING; // OctetStringType

export const _decode_I_WLANOperationErrorCode: $.ASN1Decoder<I_WLANOperationErrorCode> = $._decodeOctetString;

export const _encode_I_WLANOperationErrorCode: $.ASN1Encoder<I_WLANOperationErrorCode> = $._encodeOctetString;


/* eslint-enable */
