import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary TariffSwitchInterval
 * @description
 *
 * Tariff switch interval in 1 second units (1..86400). (3GPP TS 29.078 V19.0.0
 * clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TariffSwitchInterval ::= INTEGER (1 .. 86400)
 * ```
 *
 */
export type TariffSwitchInterval = INTEGER;
export const _decode_TariffSwitchInterval = (el: _Element): TariffSwitchInterval => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 1n || value > 86400n) : (value < 1 || value > 86400))) {
        throw new ASN1OverflowError("TariffSwitchInterval violates INTEGER constraint");
    }
    return value;
};
export const _encode_TariffSwitchInterval = $._encodeInteger;
