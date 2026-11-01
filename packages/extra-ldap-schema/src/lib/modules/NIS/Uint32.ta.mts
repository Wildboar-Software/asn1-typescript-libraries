/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Uint32
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Uint32  ::=  INTEGER (0..maxUint32)
 * ```
 */
export
type Uint32 = INTEGER;

export
const _decode_Uint32: $.ASN1Decoder<Uint32> = $._decodeInteger;

export
const _encode_Uint32: $.ASN1Encoder<Uint32> = $._encodeInteger;

/* eslint-enable */
