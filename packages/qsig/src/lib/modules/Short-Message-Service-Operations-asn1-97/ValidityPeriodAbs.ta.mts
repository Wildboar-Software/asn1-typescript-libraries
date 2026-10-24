/* eslint-disable */
import {
    GeneralizedTime,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ValidityPeriodAbs
 * @description
 *
 * Absolute end of the Validity Period (ECMA-325 §E.1.2.2). ISO 8601
 * GeneralizedTime, size 12..19. After this time the Service Centre deletes the
 * Short Message.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
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
