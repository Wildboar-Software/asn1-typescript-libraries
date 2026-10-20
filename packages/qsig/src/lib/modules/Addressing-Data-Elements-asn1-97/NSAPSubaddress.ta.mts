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
