/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Integrity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Integrity  ::=  BIT STRING
 * ```
 */
export
type Integrity = BIT_STRING;

export
const _decode_Integrity: $.ASN1Decoder<Integrity> = $._decodeBitString;

export
const _encode_Integrity: $.ASN1Encoder<Integrity> = $._encodeBitString;

/* eslint-enable */
