/* eslint-disable */
import {
    NULL,
    PrintableString,
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
import { AttrId_graphicCharacterRepertoire, _decode_AttrId_graphicCharacterRepertoire, _encode_AttrId_graphicCharacterRepertoire } from "../ISO9041-VTP/AttrId-graphicCharacterRepertoire.ta.mjs";
// export { AttrId_graphicCharacterRepertoire, AttrId_graphicCharacterRepertoire_null /* IMPORTED_LONG_NAMED_INTEGER */, _decode_AttrId_graphicCharacterRepertoire, _encode_AttrId_graphicCharacterRepertoire } from "../ISO9041-VTP/AttrId-graphicCharacterRepertoire.ta.mjs";
import { AttrId_foregroundColour, _decode_AttrId_foregroundColour, _encode_AttrId_foregroundColour } from "../ISO9041-VTP/AttrId-foregroundColour.ta.mjs";
// export { AttrId_foregroundColour, AttrId_foregroundColour_null /* IMPORTED_LONG_NAMED_INTEGER */, _decode_AttrId_foregroundColour, _encode_AttrId_foregroundColour } from "../ISO9041-VTP/AttrId-foregroundColour.ta.mjs";
import { AttrId_backgroundColour, _decode_AttrId_backgroundColour, _encode_AttrId_backgroundColour } from "../ISO9041-VTP/AttrId-backgroundColour.ta.mjs";
// export { AttrId_backgroundColour, AttrId_backgroundColour_null /* IMPORTED_LONG_NAMED_INTEGER */, _decode_AttrId_backgroundColour, _encode_AttrId_backgroundColour } from "../ISO9041-VTP/AttrId-backgroundColour.ta.mjs";
import { AttrId_font, _decode_AttrId_font, _encode_AttrId_font } from "../ISO9041-VTP/AttrId-font.ta.mjs";
// export { AttrId_font, AttrId_font_null /* IMPORTED_LONG_NAMED_INTEGER */, _decode_AttrId_font, _encode_AttrId_font } from "../ISO9041-VTP/AttrId-font.ta.mjs";


/**
 * @summary AttrId
 * @description
 *
 * ATTRIBUTE id and value together. INTEGER values other than 0
 * identify a 1-based position in the corresponding assignment
 * VTE-parameter list (1 = first). 0 = `"null"`.
 * ISO/IEC 9040:1997 §13.2, §19.4.1.3; ISO/IEC 9041-1:1997 §12.1.
 *
 * - `graphicCharacterRepertoire` / `foregroundColour` /
 *   `backgroundColour`: INTEGER `{ null(0) }`; 1..capability.
 * - `font`: INTEGER `{ null(0) }`; integer ≥ 1, must be valid for
 *   the element's repertoire.
 * - `emphasis`: PrintableString of subattributes
 *   (ISO/IEC 9040:1997 B.17).
 * - `fevGrCharRep` / `fevForCol` / `fevBakCol` / `fevEmph` /
 *   `fevFont` (tags 5–9): attribute-value
 *   `"field-explicit-value"` (use the FDR's attribute).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttrId  ::=  CHOICE {
 *     graphicCharacterRepertoire  [0] IMPLICIT INTEGER { null (0) },
 *     foregroundColour            [1] IMPLICIT INTEGER { null (0) },
 *     backgroundColour            [2] IMPLICIT INTEGER { null (0) },
 *     emphasis                    [3] IMPLICIT PrintableString,
 *     font                        [4] IMPLICIT INTEGER { null (0) },
 *     -- Values for the INTEGERs other than zero identify a position in the
 *     -- appropriate list of assignment VTE-parameters and signify the value of
 *     -- the parameter in that position; value 1 identifies the first parameter.
 *     fevGrCharRep                [5] IMPLICIT NULL,
 *     fevForCol                   [6] IMPLICIT NULL,
 *     fevBakCol                   [7] IMPLICIT NULL,
 *     fevEmph                     [8] IMPLICIT NULL,
 *     fevFont                     [9] IMPLICIT NULL
 * }
 * ```
 */
export
type AttrId =
    { graphicCharacterRepertoire: AttrId_graphicCharacterRepertoire } /* CHOICE_ALT_ROOT */
    | { foregroundColour: AttrId_foregroundColour } /* CHOICE_ALT_ROOT */
    | { backgroundColour: AttrId_backgroundColour } /* CHOICE_ALT_ROOT */
    | { emphasis: PrintableString } /* CHOICE_ALT_ROOT */
    | { font: AttrId_font } /* CHOICE_ALT_ROOT */
    | { fevGrCharRep: NULL } /* CHOICE_ALT_ROOT */
    | { fevForCol: NULL } /* CHOICE_ALT_ROOT */
    | { fevBakCol: NULL } /* CHOICE_ALT_ROOT */
    | { fevEmph: NULL } /* CHOICE_ALT_ROOT */
    | { fevFont: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AttrId: $.ASN1Decoder<AttrId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttrId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttrId (el: _Element): AttrId {
    if (!_cached_decoder_for_AttrId) { _cached_decoder_for_AttrId = $._decode_inextensible_choice<AttrId>({
    "CONTEXT 0": [ "graphicCharacterRepertoire", $._decode_implicit<AttrId_graphicCharacterRepertoire>(() => _decode_AttrId_graphicCharacterRepertoire) ],
    "CONTEXT 1": [ "foregroundColour", $._decode_implicit<AttrId_foregroundColour>(() => _decode_AttrId_foregroundColour) ],
    "CONTEXT 2": [ "backgroundColour", $._decode_implicit<AttrId_backgroundColour>(() => _decode_AttrId_backgroundColour) ],
    "CONTEXT 3": [ "emphasis", $._decode_implicit<PrintableString>(() => $._decodePrintableString) ],
    "CONTEXT 4": [ "font", $._decode_implicit<AttrId_font>(() => _decode_AttrId_font) ],
    "CONTEXT 5": [ "fevGrCharRep", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 6": [ "fevForCol", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 7": [ "fevBakCol", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 8": [ "fevEmph", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 9": [ "fevFont", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_AttrId(el);
}

let _cached_encoder_for_AttrId: $.ASN1Encoder<AttrId> | null = null;

/**
 * @summary Encodes a(n) AttrId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttrId, encoded as an ASN.1 Element.
 */
export
function _encode_AttrId (value: AttrId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttrId) { _cached_encoder_for_AttrId = $._encode_choice<AttrId>({
    "graphicCharacterRepertoire": $._encode_implicit(_TagClass.context, 0, () => _encode_AttrId_graphicCharacterRepertoire, $.BER),
    "foregroundColour": $._encode_implicit(_TagClass.context, 1, () => _encode_AttrId_foregroundColour, $.BER),
    "backgroundColour": $._encode_implicit(_TagClass.context, 2, () => _encode_AttrId_backgroundColour, $.BER),
    "emphasis": $._encode_implicit(_TagClass.context, 3, () => $._encodePrintableString, $.BER),
    "font": $._encode_implicit(_TagClass.context, 4, () => _encode_AttrId_font, $.BER),
    "fevGrCharRep": $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER),
    "fevForCol": $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER),
    "fevBakCol": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
    "fevEmph": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
    "fevFont": $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_AttrId(value, elGetter);
}


/* eslint-enable */
