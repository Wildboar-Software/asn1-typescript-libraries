import {
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "./CalledPartyNumber.ta.mjs";

/**
 * @summary DestinationRoutingAddress
 * @description
 *
 * Called Party Number. SEQUENCE SIZE(1) OF `CalledPartyNumber`.
 * (3GPP TS 29.078 V19.0.0 clause 5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DestinationRoutingAddress {PARAMETERS-BOUND : bound} ::= SEQUENCE SIZE(1) OF
 *  CalledPartyNumber {bound}
 * ```
 *
 */
export type DestinationRoutingAddress = CalledPartyNumber[];
export const _decode_DestinationRoutingAddress = (el: _Element): DestinationRoutingAddress => {
    const value = $._decodeSequenceOf<CalledPartyNumber>(() => _decode_CalledPartyNumber)(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("DestinationRoutingAddress violates SIZE constraint");
    }
    return value;
};
export const _encode_DestinationRoutingAddress = $._encodeSequenceOf<CalledPartyNumber>(() => _encode_CalledPartyNumber, $.BER);
