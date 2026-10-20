/* eslint-disable */
import {
    GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Time
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Time  ::=  GeneralizedTime
 * ```
 */
export
type Time = GeneralizedTime; // GeneralizedTime

export
const _decode_Time: $.ASN1Decoder<Time> = $._decodeGeneralizedTime;

export
const _encode_Time: $.ASN1Encoder<Time> = $._encodeGeneralizedTime;

/* eslint-enable */
