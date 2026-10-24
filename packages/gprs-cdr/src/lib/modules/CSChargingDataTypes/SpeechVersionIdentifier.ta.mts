/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SpeechVersionIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpeechVersionIdentifier  ::=  OCTET STRING ( SIZE( 1 ) )
 * ```
 */
export
type SpeechVersionIdentifier = OCTET_STRING; // OctetStringType

export const _decode_SpeechVersionIdentifier = (el: _Element): SpeechVersionIdentifier => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("SpeechVersionIdentifier violates SIZE constraint");
    }
    return value;
};

export
const _encode_SpeechVersionIdentifier: $.ASN1Encoder<SpeechVersionIdentifier> = $._encodeOctetString;

/* eslint-enable */
