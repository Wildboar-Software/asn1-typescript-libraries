/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary NSAPSubaddress
 * @description
 *
 * An NSAP subaddress specified according to ITU-T X.213 (ECMA-165 Annex B Table
 * B.1). Table B.1 allows 1 to 20 octets and notes that some networks limit the
 * value, for example to 4 octets. ECMA-155 §10 says an NSAP subaddress conforms
 * to ISO/IEC 8348 and that a PINX does not alter it in a pure PISN (§10.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NSAPSubaddress  ::=  OCTET STRING (SIZE(1..20))
 * ```
 */
export
type NSAPSubaddress = OCTET_STRING; // OctetStringType

export
const _decode_NSAPSubaddress = (el: _Element): NSAPSubaddress => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 20) {
        throw new ASN1SizeError("NSAPSubaddress violates SIZE constraint");
    }
    return value;
};

export
const _encode_NSAPSubaddress: $.ASN1Encoder<NSAPSubaddress> = $._encodeOctetString;

/* eslint-enable */
