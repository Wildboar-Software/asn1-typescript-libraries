/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GLI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GLI  ::=  OCTET STRING (SIZE(0..150))
 * ```
 */
export
type GLI = OCTET_STRING; // OctetStringType

export function _decode_GLI (el: _Element): GLI {
    const value = $._decodeOctetString(el);
    if (value.length < 0 || value.length > 150) {
        throw new ASN1SizeError("GLI violates the SIZE constraint");
    }
    return value;
}

export const _encode_GLI: $.ASN1Encoder<GLI> = $._encodeOctetString;


/* eslint-enable */
