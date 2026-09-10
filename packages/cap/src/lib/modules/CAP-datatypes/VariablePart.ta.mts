import {
    INTEGER,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Digits, _decode_Digits, _encode_Digits } from "./Digits.ta.mjs";

/**
 * @summary VariablePart
 * @description
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
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * numOfInfoItems INTEGER ::= 4
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
    "CONTEXT 2": [ "time", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 3": [ "date", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 4": [ "price", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
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
