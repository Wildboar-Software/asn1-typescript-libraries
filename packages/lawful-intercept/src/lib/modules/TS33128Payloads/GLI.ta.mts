/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GLI
 * @description
 * 
 * Global Line Identifier uniquely identifying the line connecting the 5G-BRG or
 * FN-BRG to the 5GS. See TS 23.003 [19] clause 28.16.4.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
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
