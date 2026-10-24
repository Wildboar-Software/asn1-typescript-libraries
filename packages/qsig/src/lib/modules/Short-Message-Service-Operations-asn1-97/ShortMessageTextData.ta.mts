/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ShortMessageTextData
 * @description
 *
 * Short Message text octets, size 0..140 (ECMA-325 §6.3.1, §E.1.3.4). IA5
 * holds at most 160 characters, octet coding at most 140 characters, ISO/IEC
 * 10646-1 at most 70 characters. Compressed text includes the GSM 03.42 header
 * and footer.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
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
