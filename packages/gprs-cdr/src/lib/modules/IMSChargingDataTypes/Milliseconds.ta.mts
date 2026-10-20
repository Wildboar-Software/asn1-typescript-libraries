/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Milliseconds
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Milliseconds  ::=  INTEGER ( 0 .. 999 )
 * ```
 */
export
type Milliseconds = INTEGER;

export
const _decode_Milliseconds: $.ASN1Decoder<Milliseconds> = $._decodeInteger;

export
const _encode_Milliseconds: $.ASN1Encoder<Milliseconds> = $._encodeInteger;

/* eslint-enable */
