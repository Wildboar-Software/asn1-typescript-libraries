/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Precedence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Precedence  ::=  INTEGER(0..255)
 * ```
 */
export
type Precedence = INTEGER;

export
const _decode_Precedence: $.ASN1Decoder<Precedence> = $._decodeInteger;

export
const _encode_Precedence: $.ASN1Encoder<Precedence> = $._encodeInteger;

/* eslint-enable */
