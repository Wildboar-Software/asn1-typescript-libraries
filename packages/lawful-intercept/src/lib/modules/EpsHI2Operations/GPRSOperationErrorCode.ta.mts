/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GPRSOperationErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRSOperationErrorCode  ::=  OCTET STRING
 * ```
 */
export
type GPRSOperationErrorCode = OCTET_STRING; // OctetStringType
export const _decode_GPRSOperationErrorCode: $.ASN1Decoder<GPRSOperationErrorCode> = $._decodeOctetString;
export const _encode_GPRSOperationErrorCode: $.ASN1Encoder<GPRSOperationErrorCode> = $._encodeOctetString;


/* eslint-enable */
