/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LawfulInterceptionIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LawfulInterceptionIdentifier  ::=  OCTET STRING (SIZE (1..25))
 * ```
 */
export
type LawfulInterceptionIdentifier = OCTET_STRING; // OctetStringType

export function _decode_LawfulInterceptionIdentifier (el: _Element): LawfulInterceptionIdentifier {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 25) {
        throw new ASN1SizeError("LawfulInterceptionIdentifier violates the SIZE constraint");
    }
    return value;
}

export const _encode_LawfulInterceptionIdentifier: $.ASN1Encoder<LawfulInterceptionIdentifier> = $._encodeOctetString;


/* eslint-enable */
