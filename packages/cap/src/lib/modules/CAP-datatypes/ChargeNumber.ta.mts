import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import { type LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "./LocationNumber.ta.mjs";

/**
 * @summary ChargeNumber
 * @description
 *
 * Chargeable number for the call: odd/even, nature of address, numbering plan,
 * and address signals. Uses `LocationNumber` format (ITU-T Q.763 Location
 * Number). May be a third-party billed number.
 *
 * For North America, uniquely identifies the chargeable number toward a
 * long-distance carrier: ANSI T1.113-1995 Charge Number (1 octet NOA + 1 octet
 * numbering plan + up to 5 octets / 10 digits). Longer international numbers
 * are not supported by that ANSI encoding. (3GPP TS 29.078 V19.0.0 clause 5.1).
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
