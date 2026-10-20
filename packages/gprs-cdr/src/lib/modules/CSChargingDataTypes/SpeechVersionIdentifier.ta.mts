/* eslint-disable */
import {
    OCTET_STRING
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

export
const _decode_SpeechVersionIdentifier: $.ASN1Decoder<SpeechVersionIdentifier> = $._decodeOctetString;

export
const _encode_SpeechVersionIdentifier: $.ASN1Encoder<SpeechVersionIdentifier> = $._encodeOctetString;

/* eslint-enable */
