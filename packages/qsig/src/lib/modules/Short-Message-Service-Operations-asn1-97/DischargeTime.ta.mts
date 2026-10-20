/* eslint-disable */
import {
    GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DischargeTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DischargeTime  ::=  GeneralizedTime (SIZE(12..19))
 * ```
 */
export
type DischargeTime = GeneralizedTime; // GeneralizedTime

export
const _decode_DischargeTime: $.ASN1Decoder<DischargeTime> = $._decodeGeneralizedTime;

export
const _encode_DischargeTime: $.ASN1Encoder<DischargeTime> = $._encodeGeneralizedTime;

/* eslint-enable */
