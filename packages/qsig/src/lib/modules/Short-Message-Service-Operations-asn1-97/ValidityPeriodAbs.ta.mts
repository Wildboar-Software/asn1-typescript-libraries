/* eslint-disable */
import {
    GeneralizedTime,
    ASN1Element as _Element,
    ASN1SizeError,
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
const _decode_ValidityPeriodAbs = (el: _Element): ValidityPeriodAbs => {
    if (el.value.length < 12 || el.value.length > 19) {
        throw new ASN1SizeError("ValidityPeriodAbs violates SIZE constraint");
    }
    return $._decodeGeneralizedTime(el);
};

export
const _encode_ValidityPeriodAbs: $.ASN1Encoder<ValidityPeriodAbs> = $._encodeGeneralizedTime;

/* eslint-enable */
