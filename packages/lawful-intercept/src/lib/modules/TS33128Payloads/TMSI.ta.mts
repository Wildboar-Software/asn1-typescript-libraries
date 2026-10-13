/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TMSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TMSI  ::=  OCTET STRING (SIZE(4))
 * ```
 */
export
type TMSI = OCTET_STRING; // OctetStringType
export const _decode_TMSI: $.ASN1Decoder<TMSI> = (el: _Element): TMSI => {
    const value = $._decodeOctetString(el);
    if (value.length < 4 || value.length > 4) {
        throw new ASN1SizeError("TMSI violates SIZE constraint");
    }
    return value;
};
export const _encode_TMSI: $.ASN1Encoder<TMSI> = $._encodeOctetString;


/* eslint-enable */
