/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureCause  ::=  INTEGER (0..255)
 * ```
 */
export
type FailureCause = INTEGER;

export
const _decode_FailureCause: $.ASN1Decoder<FailureCause> = $._decodeInteger;

export
const _encode_FailureCause: $.ASN1Encoder<FailureCause> = $._encodeInteger;

/* eslint-enable */
