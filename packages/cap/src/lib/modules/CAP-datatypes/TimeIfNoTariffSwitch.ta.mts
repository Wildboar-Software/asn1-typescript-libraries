import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary TimeIfNoTariffSwitch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeIfNoTariffSwitch ::= INTEGER(0..864000)
 * ```
 *
 */
export type TimeIfNoTariffSwitch = INTEGER;
export const _decode_TimeIfNoTariffSwitch = (el: _Element): TimeIfNoTariffSwitch => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 864000n) : (value < 0 || value > 864000))) {
        throw new ASN1OverflowError("TimeIfNoTariffSwitch violates INTEGER constraint");
    }
    return value;
};
export const _encode_TimeIfNoTariffSwitch = $._encodeInteger;
