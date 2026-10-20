/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Classmark
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Classmark   ::=  OCTET STRING
 * ```
 */
export
type Classmark = OCTET_STRING; // OctetStringType

export
const _decode_Classmark: $.ASN1Decoder<Classmark> = $._decodeOctetString;

export
const _encode_Classmark: $.ASN1Encoder<Classmark> = $._encodeOctetString;

/* eslint-enable */
