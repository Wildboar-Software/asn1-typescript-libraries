/* eslint-disable */
import {
    GeneralizedTime,
    ASN1Element as _Element,
    ASN1SizeError,
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
const _decode_DischargeTime = (el: _Element): DischargeTime => {
    if (el.value.length < 12 || el.value.length > 19) {
        throw new ASN1SizeError("DischargeTime violates SIZE constraint");
    }
    return $._decodeGeneralizedTime(el);
};

export
const _encode_DischargeTime: $.ASN1Encoder<DischargeTime> = $._encodeGeneralizedTime;

/* eslint-enable */
