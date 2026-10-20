/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Digits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Digits  ::= 
 *   OCTET STRING
 * ```
 */
export
type Digits = OCTET_STRING; // OctetStringType

export
const _decode_Digits: $.ASN1Decoder<Digits> = $._decodeOctetString;

export
const _encode_Digits: $.ASN1Encoder<Digits> = $._encodeOctetString;

/* eslint-enable */
