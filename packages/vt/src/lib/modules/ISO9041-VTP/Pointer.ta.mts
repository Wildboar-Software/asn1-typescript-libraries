/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ExplicitPointer, _encode_ExplicitPointer, ExplicitPointer } from "../G/ExplicitPointer.ta.mjs";
// export { ExplicitPointer, _decode_ExplicitPointer, _encode_ExplicitPointer } from "../G/ExplicitPointer.ta.mjs";


/**
 * @summary Pointer
 * @description
 *
 * POINTER-ABSOLUTE target. `xc,yc,zc` are the current pointer;
 * `xm,ym,zm` are the update-window upper bounds.
 * ISO/IEC 9040:1997 §19.1.1.4; §19.1.2.5 when blocks are in use.
 *
 * - `current`: current pointer.
 * - `start`: start of the addressable extent (extent start).
 * - `startX`: x:=1, keep y,z — `(1, yc, zc)`.
 * - `startY`: y:=1 — `(xc, 1, zc)`.
 * - `end`: end of the update-window (extent end).
 * - `endX` / `endY`: end of X / Y in the current higher-dimension
 *   array.
 * - `coords`: explicit `G.ExplicitPointer`.
 * - `startB` / `endB`: start-b / end-b when blocks are in use
 *   (ISO/IEC 9040:1997 §19.1.2.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Pointer  ::=  CHOICE {
 *     current [0] IMPLICIT NULL,
 *     start   [1] IMPLICIT NULL,
 *     startX  [2] IMPLICIT NULL,
 *     startY  [3] IMPLICIT NULL,
 *     end     [4] IMPLICIT NULL,
 *     endX    [5] IMPLICIT NULL,
 *     endY    [6] IMPLICIT NULL,
 *     coords  [7] IMPLICIT G.ExplicitPointer,
 *     startB  [8] IMPLICIT NULL,
 *     endB    [9] IMPLICIT NULL
 * }
 * ```
 */
export
type Pointer =
    { current: NULL } /* CHOICE_ALT_ROOT */
    | { start: NULL } /* CHOICE_ALT_ROOT */
    | { startX: NULL } /* CHOICE_ALT_ROOT */
    | { startY: NULL } /* CHOICE_ALT_ROOT */
    | { end: NULL } /* CHOICE_ALT_ROOT */
    | { endX: NULL } /* CHOICE_ALT_ROOT */
    | { endY: NULL } /* CHOICE_ALT_ROOT */
    | { coords: ExplicitPointer } /* CHOICE_ALT_ROOT */
    | { startB: NULL } /* CHOICE_ALT_ROOT */
    | { endB: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Pointer: $.ASN1Decoder<Pointer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Pointer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Pointer (el: _Element): Pointer {
    if (!_cached_decoder_for_Pointer) { _cached_decoder_for_Pointer = $._decode_inextensible_choice<Pointer>({
    "CONTEXT 0": [ "current", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "start", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "startX", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "startY", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "end", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 5": [ "endX", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 6": [ "endY", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 7": [ "coords", $._decode_implicit<ExplicitPointer>(() => _decode_ExplicitPointer) ],
    "CONTEXT 8": [ "startB", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 9": [ "endB", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_Pointer(el);
}

let _cached_encoder_for_Pointer: $.ASN1Encoder<Pointer> | null = null;

/**
 * @summary Encodes a(n) Pointer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Pointer, encoded as an ASN.1 Element.
 */
export
function _encode_Pointer (value: Pointer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Pointer) { _cached_encoder_for_Pointer = $._encode_choice<Pointer>({
    "current": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "start": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "startX": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "startY": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "end": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
    "endX": $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER),
    "endY": $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER),
    "coords": $._encode_implicit(_TagClass.context, 7, () => _encode_ExplicitPointer, $.BER),
    "startB": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
    "endB": $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_Pointer(value, elGetter);
}


/* eslint-enable */
