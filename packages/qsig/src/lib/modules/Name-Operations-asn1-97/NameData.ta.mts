/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NameData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameData  ::=  OCTET STRING (SIZE(1..50))
 * ```
 */
export
type NameData = OCTET_STRING; // OctetStringType

export
const _decode_NameData = (el: _Element): NameData => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 50) {
        throw new ASN1SizeError("NameData violates SIZE constraint");
    }
    return value;
};

export
const _encode_NameData: $.ASN1Encoder<NameData> = $._encodeOctetString;

/* eslint-enable */
