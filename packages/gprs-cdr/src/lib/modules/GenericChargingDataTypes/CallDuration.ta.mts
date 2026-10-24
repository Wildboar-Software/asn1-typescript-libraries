/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallDuration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallDuration  ::=  INTEGER
 * ```
 */
export
type CallDuration = INTEGER;

export
const _decode_CallDuration: $.ASN1Decoder<CallDuration> = $._decodeInteger;

export
const _encode_CallDuration: $.ASN1Encoder<CallDuration> = $._encodeInteger;

/* eslint-enable */
