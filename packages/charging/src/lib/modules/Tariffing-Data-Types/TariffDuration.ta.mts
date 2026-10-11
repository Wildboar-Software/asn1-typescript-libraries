/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TariffDuration
 * @description
 *
 * How long one communication subtariff stays in force, in seconds.
 * `0` is unlimited. `1` is one second. `36000` is 10 hours.
 *
 * Except for the last subtariff, each one in a sequence shall have
 * a limited duration. The last may be unlimited. When this timer
 * expires, the next subtariff in the sequence is applied. If there
 * is no next subtariff, {@link TariffCurrencyFormat} or
 * {@link TariffPulseFormat} `tariffControlIndicators` say whether
 * the sequence is applied again.
 *
 * [ES 201 296 V1.3.1, clauses 6.3.1.4 and 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffDuration  ::=  INTEGER (0..36000)
 * ```
 */
export
type TariffDuration = INTEGER;
export const _decode_TariffDuration = (el: _Element): TariffDuration => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 36000) {
        throw new ASN1OverflowError("TariffDuration violates INTEGER range");
    }
    return value;
};
export const _encode_TariffDuration = $._encodeInteger;


/* eslint-enable */
