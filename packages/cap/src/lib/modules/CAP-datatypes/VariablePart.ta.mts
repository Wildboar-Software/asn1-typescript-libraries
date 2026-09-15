import {
    INTEGER,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Digits, _decode_Digits, _encode_Digits } from "./Digits.ta.mjs";

/**
 * @summary VariablePart
 * @description
 *
 * Variable part of a message. `number` uses Generic Digits. Time is BCD HH:MM
 * (SIZE 2): hours then minutes, low nibble = most significant digit of each
 * pair. Date is BCD YYYYMMDD (SIZE 4). Price is BCD (SIZE 4): hundreds of
 * thousands down to hundredths. Digit packing in an octet follows
 * `TimeAndTimezone`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VariablePart {PARAMETERS-BOUND : bound} ::= CHOICE {
 *  integer				[0] Integer4,
 *  number				[1] Digits {bound},	
 *  time				[2] OCTET STRING (SIZE(2)),	
 *  date				[3] OCTET STRING (SIZE(4)),	
 *  price				[4] OCTET STRING (SIZE(4))
 *  }
 * ```
 *
 */
export type VariablePart =
{ integer: INTEGER }
    | { number: Digits }
    | { time: OCTET_STRING }
    | { date: OCTET_STRING }
    | { price: OCTET_STRING };

let _cached_decoder_for_VariablePart: $.ASN1Decoder<VariablePart> | null = null;
export function _decode_VariablePart (el: _Element): VariablePart {
    if (!_cached_decoder_for_VariablePart) {
        _cached_decoder_for_VariablePart = $._decode_inextensible_choice<VariablePart>({
    "CONTEXT 0": [ "integer", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "number", $._decode_implicit<Digits>(() => _decode_Digits) ],
    "CONTEXT 2": [ "time", $._decode_implicit<OCTET_STRING>(() => (el: _Element): OCTET_STRING => {
        const value = $._decodeOctetString(el);
        if (value.length !== 2) {
            throw new ASN1SizeError("VariablePart.time violates SIZE constraint");
        }
        return value;
    }) ],
    "CONTEXT 3": [ "date", $._decode_implicit<OCTET_STRING>(() => (el: _Element): OCTET_STRING => {
        const value = $._decodeOctetString(el);
        if (value.length !== 4) {
            throw new ASN1SizeError("VariablePart.date violates SIZE constraint");
        }
        return value;
    }) ],
    "CONTEXT 4": [ "price", $._decode_implicit<OCTET_STRING>(() => (el: _Element): OCTET_STRING => {
        const value = $._decodeOctetString(el);
        if (value.length !== 4) {
            throw new ASN1SizeError("VariablePart.price violates SIZE constraint");
        }
        return value;
    }) ]
        });
    }
    return _cached_decoder_for_VariablePart(el);
}

let _cached_encoder_for_VariablePart: $.ASN1Encoder<VariablePart> | null = null;
export function _encode_VariablePart (value: VariablePart, elGetter: $.ASN1Encoder<VariablePart>): _Element {
    if (!_cached_encoder_for_VariablePart) {
        _cached_encoder_for_VariablePart = $._encode_choice<VariablePart>({
    "integer": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "number": $._encode_implicit(_TagClass.context, 1, () => _encode_Digits, $.BER),
    "time": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
    "date": $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER),
    "price": $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_VariablePart(value, elGetter);
}
