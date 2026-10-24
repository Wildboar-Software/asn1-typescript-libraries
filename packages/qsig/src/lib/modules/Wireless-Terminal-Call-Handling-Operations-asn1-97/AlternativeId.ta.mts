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
 * An identifier, other than the PISN number, which identifies the WTMI user
 * uniquely (ECMA-304 §4.2.1, §6.3.1). The standard does not define the octet
 * contents.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-304/
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
