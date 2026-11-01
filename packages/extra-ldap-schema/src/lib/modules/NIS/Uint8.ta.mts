/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Uint8
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Uint8   ::=  INTEGER (0..maxUint8)
 * ```
 */
export
type Uint8 = INTEGER;

export
const _decode_Uint8: $.ASN1Decoder<Uint8> = $._decodeInteger;

export
const _encode_Uint8: $.ASN1Encoder<Uint8> = $._encodeInteger;

/* eslint-enable */
