/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type BasicGapCriteria, _decode_BasicGapCriteria, _encode_BasicGapCriteria } from "../IN-SSF-SCF-datatypes/BasicGapCriteria.ta.mjs";
// export { BasicGapCriteria, _decode_BasicGapCriteria, _encode_BasicGapCriteria } from "../IN-SSF-SCF-datatypes/BasicGapCriteria.ta.mjs";
import { CompoundCriteria, _decode_CompoundCriteria, _encode_CompoundCriteria } from "../IN-SSF-SCF-datatypes/CompoundCriteria.ta.mjs";
// export { CompoundCriteria, _decode_CompoundCriteria, _encode_CompoundCriteria } from "../IN-SSF-SCF-datatypes/CompoundCriteria.ta.mjs";


/**
 * @summary GapCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GapCriteria  ::=  CHOICE {
 *   basicGapCriteria     BasicGapCriteria,
 *   compoundCapCriteria  CompoundCriteria
 * }
 * ```
 */
export
type GapCriteria =
    { basicGapCriteria: BasicGapCriteria } /* CHOICE_ALT_ROOT */
    | { compoundCapCriteria: CompoundCriteria } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GapCriteria: $.ASN1Decoder<GapCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GapCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GapCriteria (el: _Element): GapCriteria {
    if (!_cached_decoder_for_GapCriteria) { _cached_decoder_for_GapCriteria = $._decode_inextensible_choice<GapCriteria>({
    "CONTEXT 0": [ "basicGapCriteria", _decode_BasicGapCriteria ],
    "CONTEXT 2": [ "basicGapCriteria", _decode_BasicGapCriteria ],
    "CONTEXT 3": [ "basicGapCriteria", _decode_BasicGapCriteria ],
    "CONTEXT 29": [ "basicGapCriteria", _decode_BasicGapCriteria ],
    "CONTEXT 30": [ "basicGapCriteria", _decode_BasicGapCriteria ],
    "UNIVERSAL 16": [ "compoundCapCriteria", _decode_CompoundCriteria ]
}); }
    return _cached_decoder_for_GapCriteria(el);
}

let _cached_encoder_for_GapCriteria: $.ASN1Encoder<GapCriteria> | null = null;

/**
 * @summary Encodes a(n) GapCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GapCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_GapCriteria (value: GapCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GapCriteria) { _cached_encoder_for_GapCriteria = $._encode_choice<GapCriteria>({
    "basicGapCriteria": _encode_BasicGapCriteria,
    "compoundCapCriteria": _encode_CompoundCriteria,
}, $.BER); }
    return _cached_encoder_for_GapCriteria(value, elGetter);
}


/* eslint-enable */
