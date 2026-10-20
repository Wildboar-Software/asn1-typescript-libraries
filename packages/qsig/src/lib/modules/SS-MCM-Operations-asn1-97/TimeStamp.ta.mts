/* eslint-disable */
import {
    GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeStamp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeStamp  ::=  GeneralizedTime (SIZE(12..19))
 * ```
 */
export
type TimeStamp = GeneralizedTime; // GeneralizedTime

export
const _decode_TimeStamp: $.ASN1Decoder<TimeStamp> = $._decodeGeneralizedTime;

export
const _encode_TimeStamp: $.ASN1Encoder<TimeStamp> = $._encodeGeneralizedTime;

/* eslint-enable */
