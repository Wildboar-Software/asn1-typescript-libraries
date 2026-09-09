import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "./CalledPartyNumber.ta.mjs";

/**
 * @summary DestinationRoutingAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DestinationRoutingAddress {PARAMETERS-BOUND : bound} ::= SEQUENCE SIZE(1) OF
 CalledPartyNumber {bound}
 * ```
 *
 */
export type DestinationRoutingAddress = CalledPartyNumber[];
export const _decode_DestinationRoutingAddress = $._decodeSequenceOf<CalledPartyNumber>(() => _decode_CalledPartyNumber);
export const _encode_DestinationRoutingAddress = $._encodeSequenceOf<CalledPartyNumber>(() => _encode_CalledPartyNumber, $.BER);
