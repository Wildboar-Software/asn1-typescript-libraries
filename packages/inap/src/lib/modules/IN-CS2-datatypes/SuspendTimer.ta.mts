/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SuspendTimer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuspendTimer  ::=  INTEGER(0..120)
 * ```
 */
export
type SuspendTimer = INTEGER;

export
const _decode_SuspendTimer: $.ASN1Decoder<SuspendTimer> = $._decodeInteger;

export
const _encode_SuspendTimer: $.ASN1Encoder<SuspendTimer> = $._encodeInteger;

/* eslint-enable */
