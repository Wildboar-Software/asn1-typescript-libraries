/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PulseUnits
 * @description
 *
 * Meter-pulse count, binary coded, range 0 to 255.
 *
 * For a communication subtariff these pulses are applied once per
 * {@link ChargeUnitTimeInterval}. The communication is free when the
 * value is zero. For a call-attempt or call-setup charge, zero means
 * that charge is not made; the same is true when the parameter is
 * absent. The currency value of one pulse is a bilateral matter and
 * is not in this module.
 *
 * [ES 201 296 V1.3.1, clauses 6.1 c, 6.1.1.4, 6.3.1.2, and 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PulseUnits  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type PulseUnits = OCTET_STRING; // OctetStringType
export const _decode_PulseUnits = (el: _Element): PulseUnits => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("PulseUnits violates SIZE constraint");
    }
    return value;
};
export const _encode_PulseUnits = $._encodeOctetString;


/* eslint-enable */
