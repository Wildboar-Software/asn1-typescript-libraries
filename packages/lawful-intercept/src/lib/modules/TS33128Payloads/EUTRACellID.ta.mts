/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EUTRACellID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUTRACellID  ::=  BIT STRING (SIZE(28))
 * ```
 */
export
type EUTRACellID = BIT_STRING;
export const _decode_EUTRACellID: $.ASN1Decoder<EUTRACellID> = (el: _Element): EUTRACellID => {
    const value = $._decodeBitString(el);
    if (value.length < 28 || value.length > 28) {
        throw new ASN1SizeError("EUTRACellID violates SIZE constraint");
    }
    return value;
};
export const _encode_EUTRACellID: $.ASN1Encoder<EUTRACellID> = $._encodeBitString;


/* eslint-enable */
