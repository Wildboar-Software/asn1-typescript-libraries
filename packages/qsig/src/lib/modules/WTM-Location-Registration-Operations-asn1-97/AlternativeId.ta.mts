/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AlternativeId
 * @description
 *
 * Identifier other than the PISN number (ECMA-302 §6.3.1). One to 20 octets. On
 * `pisnEnquiry` it can be a temporary identifier, for example a Network
 * Assigned Identity structure, or a fixed handset identifier. The octet
 * encoding is not specified.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-302/
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
