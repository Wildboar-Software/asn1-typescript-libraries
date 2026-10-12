/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GPRSOperationErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRSOperationErrorCode  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type GPRSOperationErrorCode = OCTET_STRING; // OctetStringType
export const _decode_GPRSOperationErrorCode: $.ASN1Decoder<GPRSOperationErrorCode> = (el: _Element): GPRSOperationErrorCode => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 2) {
        throw new ASN1SizeError("GPRSOperationErrorCode violates SIZE constraint");
    }
    return value;
};
export const _encode_GPRSOperationErrorCode: $.ASN1Encoder<GPRSOperationErrorCode> = $._encodeOctetString;


/* eslint-enable */
