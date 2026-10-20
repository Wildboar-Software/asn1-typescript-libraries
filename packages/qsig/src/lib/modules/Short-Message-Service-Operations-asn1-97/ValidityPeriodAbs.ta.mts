/* eslint-disable */
import {
    GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ValidityPeriodAbs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ValidityPeriodAbs  ::=  GeneralizedTime (SIZE(12..19))
 * ```
 */
export
type ValidityPeriodAbs = GeneralizedTime; // GeneralizedTime

export
const _decode_ValidityPeriodAbs: $.ASN1Decoder<ValidityPeriodAbs> = $._decodeGeneralizedTime;

export
const _encode_ValidityPeriodAbs: $.ASN1Encoder<ValidityPeriodAbs> = $._encodeGeneralizedTime;

/* eslint-enable */
