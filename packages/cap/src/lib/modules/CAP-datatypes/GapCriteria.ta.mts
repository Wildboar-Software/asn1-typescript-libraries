import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type BasicGapCriteria, _decode_BasicGapCriteria, _encode_BasicGapCriteria } from "./BasicGapCriteria.ta.mjs";
import { CompoundCriteria, _decode_CompoundCriteria, _encode_CompoundCriteria } from "./CompoundCriteria.ta.mjs";

/**
 * @summary GapCriteria
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GapCriteria {PARAMETERS-BOUND : bound}::= CHOICE {
 basicGapCriteria			BasicGapCriteria {bound},
 compoundGapCriteria			CompoundCriteria {bound}
 }
 * ```
 *
 */
export type GapCriteria =
{ basicGapCriteria: BasicGapCriteria }
    | { compoundGapCriteria: CompoundCriteria };

let _cached_decoder_for_GapCriteria: $.ASN1Decoder<GapCriteria> | null = null;
export function _decode_GapCriteria (el: _Element): GapCriteria {
    if (!_cached_decoder_for_GapCriteria) {
        _cached_decoder_for_GapCriteria = $._decode_inextensible_choice<GapCriteria>({
    "CONTEXT 0": [ "basicGapCriteria", _decode_BasicGapCriteria ],
    "CONTEXT 2": [ "basicGapCriteria", _decode_BasicGapCriteria ],
    "CONTEXT 29": [ "basicGapCriteria", _decode_BasicGapCriteria ],
    "CONTEXT 30": [ "basicGapCriteria", _decode_BasicGapCriteria ],
    "UNIVERSAL 16": [ "compoundGapCriteria", _decode_CompoundCriteria ]
        });
    }
    return _cached_decoder_for_GapCriteria(el);
}

let _cached_encoder_for_GapCriteria: $.ASN1Encoder<GapCriteria> | null = null;
export function _encode_GapCriteria (value: GapCriteria, elGetter: $.ASN1Encoder<GapCriteria>): _Element {
    if (!_cached_encoder_for_GapCriteria) {
        _cached_encoder_for_GapCriteria = $._encode_choice<GapCriteria>({
    "basicGapCriteria": _encode_BasicGapCriteria,
    "compoundGapCriteria": _encode_CompoundCriteria
        }, $.BER);
    }
    return _cached_encoder_for_GapCriteria(value, elGetter);
}
