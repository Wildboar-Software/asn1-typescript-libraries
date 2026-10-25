/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AlternativeId
 * @description
 *
 * An identifier, other than the PISN number, that uniquely identifies the PUM
 * user (ECMA-282 §4.4, §6.3.1). One to 20 octets. The octet encoding is not
 * specified. A PINX that lacks a PISN number may send `pisnEnquiry` to a
 * Directory PINX to translate this identifier (§6.8.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternativeId  ::=  OCTET STRING (SIZE(1..20))
 * ```
 */
export
type AlternativeId = OCTET_STRING; // OctetStringType

export
const _decode_AlternativeId = (el: _Element): AlternativeId => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 20) {
        throw new ASN1SizeError("AlternativeId violates SIZE constraint");
    }
    return value;
};

export
const _encode_AlternativeId: $.ASN1Encoder<AlternativeId> = $._encodeOctetString;

/* eslint-enable */
