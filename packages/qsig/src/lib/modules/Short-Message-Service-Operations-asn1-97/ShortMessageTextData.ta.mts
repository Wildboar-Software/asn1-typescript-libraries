/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ShortMessageTextData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ShortMessageTextData  ::=  OCTET STRING (SIZE(0..140))
 * ```
 */
export
type ShortMessageTextData = OCTET_STRING; // OctetStringType

export
const _decode_ShortMessageTextData = (el: _Element): ShortMessageTextData => {
    const value = $._decodeOctetString(el);
    if (value.length < 0 || value.length > 140) {
        throw new ASN1SizeError("ShortMessageTextData violates SIZE constraint");
    }
    return value;
};

export
const _encode_ShortMessageTextData: $.ASN1Encoder<ShortMessageTextData> = $._encodeOctetString;

/* eslint-enable */
