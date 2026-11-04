/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Uint16
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Uint16  ::=  INTEGER (0..maxUint16)
 * ```
 */
export
type Uint16 = INTEGER;

export
const _decode_Uint16: $.ASN1Decoder<Uint16> = $._decodeInteger;

export
const _encode_Uint16: $.ASN1Encoder<Uint16> = $._encodeInteger;

/* eslint-enable */
