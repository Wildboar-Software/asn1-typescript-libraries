/* eslint-disable */
import {
    type BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PublicKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicKey  ::=  BIT STRING
 * ```
 */
export
type PublicKey = BIT_STRING;

export
const _decode_PublicKey: $.ASN1Decoder<PublicKey> = $._decodeBitString;

export
const _encode_PublicKey: $.ASN1Encoder<PublicKey> = $._encodeBitString;

/* eslint-enable */
