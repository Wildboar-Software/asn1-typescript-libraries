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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
import { AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange, _decode_AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange, _encode_AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange } from "../ISO-9506-MMS-1/AlternateAccessSelection-selectAlternateAccess-accessSelection-indexRange.ta.mjs";
// export { AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange, _decode_AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange, _encode_AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange } from "../ISO-9506-MMS-1/AlternateAccessSelection-selectAlternateAccess-accessSelection-indexRange.ta.mjs";


/**
 * @summary AlternateAccessSelection_selectAlternateAccess_accessSelection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternateAccessSelection-selectAlternateAccess-accessSelection ::= CHOICE {
 *     component [0] IMPLICIT Identifier,
 *     component [0] IMPLICIT NULL,
 *     index [1] IMPLICIT Unsigned32,
 *     indexRange [2] IMPLICIT SEQUENCE {
 *         lowIndex [0] IMPLICIT Unsigned32,
 *         numberOfElements [1] IMPLICIT Unsigned32
 *     },
 *     index [1] IMPLICIT NULL,
 *     indexRange [2] IMPLICIT NULL,
 *     allElements [3] IMPLICIT NULL
 * }
 * ```
 */
export
type AlternateAccessSelection_selectAlternateAccess_accessSelection =
    { component: Identifier } /* CHOICE_ALT_ROOT */
    | { component: NULL } /* CHOICE_ALT_ROOT */
    | { index: Unsigned32 } /* CHOICE_ALT_ROOT */
    | { indexRange: AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange } /* CHOICE_ALT_ROOT */
    | { index: NULL } /* CHOICE_ALT_ROOT */
    | { indexRange: NULL } /* CHOICE_ALT_ROOT */
    | { allElements: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AlternateAccessSelection_selectAlternateAccess_accessSelection: $.ASN1Decoder<AlternateAccessSelection_selectAlternateAccess_accessSelection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlternateAccessSelection_selectAlternateAccess_accessSelection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlternateAccessSelection_selectAlternateAccess_accessSelection (el: _Element): AlternateAccessSelection_selectAlternateAccess_accessSelection {
    if (!_cached_decoder_for_AlternateAccessSelection_selectAlternateAccess_accessSelection) { _cached_decoder_for_AlternateAccessSelection_selectAlternateAccess_accessSelection = $._decode_inextensible_choice<AlternateAccessSelection_selectAlternateAccess_accessSelection>({
    "CONTEXT 0": [ "component", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 0": [ "component", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "index", $._decode_implicit<Unsigned32>(() => _decode_Unsigned32) ],
    "CONTEXT 2": [ "indexRange", $._decode_implicit<AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange>(() => _decode_AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange) ],
    "CONTEXT 1": [ "index", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "indexRange", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "allElements", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_AlternateAccessSelection_selectAlternateAccess_accessSelection(el);
}

let _cached_encoder_for_AlternateAccessSelection_selectAlternateAccess_accessSelection: $.ASN1Encoder<AlternateAccessSelection_selectAlternateAccess_accessSelection> | null = null;

/**
 * @summary Encodes a(n) AlternateAccessSelection_selectAlternateAccess_accessSelection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlternateAccessSelection_selectAlternateAccess_accessSelection, encoded as an ASN.1 Element.
 */
export
function _encode_AlternateAccessSelection_selectAlternateAccess_accessSelection (value: AlternateAccessSelection_selectAlternateAccess_accessSelection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlternateAccessSelection_selectAlternateAccess_accessSelection) { _cached_encoder_for_AlternateAccessSelection_selectAlternateAccess_accessSelection = $._encode_choice<AlternateAccessSelection_selectAlternateAccess_accessSelection>({
    "component": $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER),
    "component": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "index": $._encode_implicit(_TagClass.context, 1, () => _encode_Unsigned32, $.BER),
    "indexRange": $._encode_implicit(_TagClass.context, 2, () => _encode_AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange, $.BER),
    "index": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "indexRange": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "allElements": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_AlternateAccessSelection_selectAlternateAccess_accessSelection(value, elGetter);
}


/* eslint-enable */
