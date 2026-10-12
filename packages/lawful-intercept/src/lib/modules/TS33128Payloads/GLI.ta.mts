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
export const _decode_GLI: $.ASN1Decoder<GLI> = (el: _Element): GLI => {
    const value = $._decodeOctetString(el);
    if (value.length > 150) {
        throw new ASN1SizeError("GLI violates SIZE constraint");
    }
    return value;
};
export const _encode_GLI: $.ASN1Encoder<GLI> = $._encodeOctetString;


/* eslint-enable */
