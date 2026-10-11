/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargeUnitTimeInterval
 * @description
 *
 * How often meter pulses of a communication subtariff are applied.
 * Binary integer, range 0 to 35997. Clause 9 places the least
 * significant bit in the least significant bit of the first octet
 * and the most significant bit in the most significant bit of the
 * last octet.
 *
 * - `0`: no periodic metering.
 * - `1`: 200 ms.
 * - then steps of 50 ms (`2` is 250 ms).
 * - `35997`: 30 minutes.
 *
 * Every other value is spare. A pulse-format minimum communication
 * charge uses `0` on the first subtariff, together with the pulse
 * count and the duration of that minimum (clause 6.1.1.4 e).
 *
 * [ES 201 296 V1.3.1, clause 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargeUnitTimeInterval  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type ChargeUnitTimeInterval = OCTET_STRING; // OctetStringType
export const _decode_ChargeUnitTimeInterval = (el: _Element): ChargeUnitTimeInterval => {
    const value = $._decodeOctetString(el);
    if (value.length !== 2) {
        throw new ASN1SizeError("ChargeUnitTimeInterval violates SIZE constraint");
    }
    return value;
};
export const _encode_ChargeUnitTimeInterval = $._encodeOctetString;


/* eslint-enable */
