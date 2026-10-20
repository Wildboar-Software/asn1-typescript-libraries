/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RATType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATType     ::=  INTEGER ( 0 .. 255 )
 * ```
 */
export
type RATType = INTEGER;

export
const _decode_RATType: $.ASN1Decoder<RATType> = $._decodeInteger;

export
const _encode_RATType: $.ASN1Encoder<RATType> = $._encodeInteger;

/* eslint-enable */
