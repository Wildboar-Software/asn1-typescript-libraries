/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallIdentifier  ::=  INTEGER(1..2147483647)
 * ```
 */
export
type CallIdentifier = INTEGER;

export
const _decode_CallIdentifier: $.ASN1Decoder<CallIdentifier> = $._decodeInteger;

export
const _encode_CallIdentifier: $.ASN1Encoder<CallIdentifier> = $._encodeInteger;

/* eslint-enable */
