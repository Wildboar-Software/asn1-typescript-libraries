import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary TariffSwitchInterval
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TariffSwitchInterval ::= INTEGER (1 .. 86400)
 * ```
 *
 */
export type TariffSwitchInterval = INTEGER;
export const _decode_TariffSwitchInterval = $._decodeInteger;
export const _encode_TariffSwitchInterval = $._encodeInteger;
