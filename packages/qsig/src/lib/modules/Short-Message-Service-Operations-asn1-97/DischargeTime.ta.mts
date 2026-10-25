/* eslint-disable */
import {
    type GeneralizedTime,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DischargeTime
 * @description
 *
 * Time at which a previously submitted Short Message was delivered, delivery
 * was attempted, or the Service Centre disposed of it (ECMA-325 §E.7.3). ISO
 * 8601 GeneralizedTime, size 12..19 (§6.3.1). For a completed transaction this
 * is the completion time. While the Service Centre is still trying, it is the
 * last attempt. For a permanent or temporary error with no further attempts,
 * it is the last attempt or the disposal time, following `status`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
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
