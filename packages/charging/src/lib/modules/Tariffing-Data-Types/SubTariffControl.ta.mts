/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { maxSubTariffControlLen } from "../Tariffing-Data-Types/maxSubTariffControlLen.va.mjs";
import { minSubTariffControlLen } from "../Tariffing-Data-Types/minSubTariffControlLen.va.mjs";



/**
 * @summary SubTariffControl
 * @description
 *
 * Whether a currency communication subtariff is periodic or a
 * single charge. Pulse-format minimum charges do not use this bit;
 * they use a {@link ChargeUnitTimeInterval} of zero instead
 * (clause 6.1.1.4 e).
 *
 * `oneTimeCharge` (bit 0):
 *
 * - `0`: periodic charge.
 * - `1`: one-time charge.
 *
 * A currency minimum communication charge is the first subtariff,
 * with its currency amount and duration, and this bit set. On an
 * immediate tariff change, a new one-time charge is applied only
 * when the change restarts charging (clause 6.3.2.1).
 *
 * [ES 201 296 V1.3.1, clauses 6.1.1.4 and 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubTariffControl  ::=  BIT STRING {oneTimeCharge (0)}
 * (SIZE(minSubTariffControlLen..maxSubTariffControlLen))
 * ```
 */
export
type SubTariffControl = BIT_STRING;

/**
 * Bit 0 of {@link SubTariffControl}.
 * `0` is a periodic charge. `1` is a one-time charge.
 * @summary SubTariffControl_oneTimeCharge
 * @constant
 */
export
const SubTariffControl_oneTimeCharge: number = 0; /* LONG_NAMED_BIT */

/**
 * Bit 0 of {@link SubTariffControl}.
 * `0` is a periodic charge. `1` is a one-time charge.
 * @summary oneTimeCharge
 * @constant
 */
export
const oneTimeCharge: number = SubTariffControl_oneTimeCharge; /* SHORT_NAMED_BIT */
export const _decode_SubTariffControl = (el: _Element): SubTariffControl => {
    const value = $._decodeBitString(el);
    if (value.length < Number(minSubTariffControlLen) || value.length > Number(maxSubTariffControlLen)) {
        throw new ASN1SizeError("SubTariffControl violates SIZE constraint");
    }
    return value;
};
export const _encode_SubTariffControl = $._encodeBitString;


/* eslint-enable */
