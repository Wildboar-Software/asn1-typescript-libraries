import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import { type LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "./LocationNumber.ta.mjs";

/**
 * @summary ChargeNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChargeNumber {PARAMETERS-BOUND : bound} ::= LocationNumber {bound}
 * ```
 *
 */
export type ChargeNumber = LocationNumber;
export const _decode_ChargeNumber = _decode_LocationNumber;
export const _encode_ChargeNumber = _encode_LocationNumber;
