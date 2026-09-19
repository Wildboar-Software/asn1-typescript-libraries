/* eslint-disable */
import {
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
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
import { COupdate_objectUpdate_booleanUpdate, _decode_COupdate_objectUpdate_booleanUpdate, _encode_COupdate_objectUpdate_booleanUpdate } from "../G/COupdate-objectUpdate-booleanUpdate.ta.mjs";
// export { COupdate_objectUpdate_booleanUpdate, _decode_COupdate_objectUpdate_booleanUpdate, _encode_COupdate_objectUpdate_booleanUpdate } from "../G/COupdate-objectUpdate-booleanUpdate.ta.mjs";
import { COupdate_objectUpdate_multiElement_Item, _decode_COupdate_objectUpdate_multiElement_Item, _encode_COupdate_objectUpdate_multiElement_Item } from "../G/COupdate-objectUpdate-multiElement-Item.ta.mjs";
// export { COupdate_objectUpdate_multiElement_Item, _decode_COupdate_objectUpdate_multiElement_Item, _encode_COupdate_objectUpdate_multiElement_Item } from "../G/COupdate-objectUpdate-multiElement-Item.ta.mjs";
import { CCOupdate, _decode_CCOupdate, _encode_CCOupdate } from "../G/CCOupdate.ta.mjs";
// export { CCOupdate, _decode_CCOupdate, _encode_CCOupdate } from "../G/CCOupdate.ta.mjs";
import { FDCOupdate, _decode_FDCOupdate, _encode_FDCOupdate } from "../G/FDCOupdate.ta.mjs";
// export { FDCOupdate, _decode_FDCOupdate, _encode_FDCOupdate } from "../G/FDCOupdate.ta.mjs";
import { FEICOupdate, _decode_FEICOupdate, _encode_FEICOupdate } from "../G/FEICOupdate.ta.mjs";
// export { FEICOupdate, _decode_FEICOupdate, _encode_FEICOupdate } from "../G/FEICOupdate.ta.mjs";
import { FEPCOupdate, _decode_FEPCOupdate, _encode_FEPCOupdate } from "../G/FEPCOupdate.ta.mjs";
// export { FEPCOupdate, _decode_FEPCOupdate, _encode_FEPCOupdate } from "../G/FEPCOupdate.ta.mjs";
import { RIOupdate, _decode_RIOupdate, _encode_RIOupdate } from "../G/RIOupdate.ta.mjs";
// export { RIOupdate, _decode_RIOupdate, _encode_RIOupdate } from "../G/RIOupdate.ta.mjs";


/**
 * @summary COupdate_objectUpdate
 * @description
 *
 * Control-object update payload. Choice depends on CO-structure
 * (ISO/IEC 9041-1:1997 §12.2):
 * - CO-structure = 1: only `characterUpdate` [0] or `bitStringUpdate`
 *   [4].
 * - CO-structure > 1: `cco` [6] if CO-type-identifier is
 *   `vt-b-sco-cco`; otherwise `multiElement` [5] (Structured COs FU).
 * - CO-structure = non-parametric: type-id selects `fdco` /
 *   `feico` / `fepco` / `rio` / registered / private (`other` ANY).
 *
 * `characterUpdate` [0]: character content.
 * `booleanUpdate` [1]: bitmask; omitted `mask` ⇒ all-ones of the
 * same length; a 1-bit in `mask` means use the corresponding
 * `values` bit.
 * `symbolicUpdate` [2] / `integerUpdate` [3] / `bitStringUpdate`
 * [4]: parametric element updates.
 * `multiElement` [5]: per-element id + update (Structured COs).
 * `cco` [6], `fdco` [7], `feico` [8], `fepco` [9], `rio` [10]:
 * standard non-parametric COs.
 * `other` [11]: private type agreed outside ISO/IEC 9041.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * COupdate-objectUpdate ::= CHOICE {
 *     characterUpdate     [0] IMPLICIT OCTET STRING,
 *     booleanUpdate       [1] IMPLICIT SEQUENCE {
 *         values  [0] IMPLICIT BIT STRING,
 *         mask    [1] IMPLICIT BIT STRING OPTIONAL
 *     },
 *     -- If mask is omitted, a bit string with the same length as "values" and
 *     -- a content of all ones is assumed. When mask is present a one bit means
 *     -- that the corresponding bit in value is to be used.
 *     symbolicUpdate      [2] IMPLICIT INTEGER,
 *     integerUpdate       [3] IMPLICIT INTEGER,
 *     bitStringUpdate     [4] IMPLICIT BIT STRING,
 *     multiElement        [5] IMPLICIT SEQUENCE OF SEQUENCE {
 *         identifier INTEGER,
 *         update CHOICE {
 *             characterUpdate [0] IMPLICIT OCTET STRING,
 *             booleanUpdate   [1] IMPLICIT SEQUENCE {
 *                 values  [0] IMPLICIT BIT STRING,
 *                 mask    [1] IMPLICIT BIT STRING OPTIONAL
 *             }, -- See note under mask in G.COUpdate
 *             symbolicUpdate  [2] IMPLICIT INTEGER,
 *             integerUpdate   [3] IMPLICIT INTEGER,
 *             bitStringUpdate [4] IMPLICIT BIT STRING
 *         }
 *     },
 *     cco                 [6]  IMPLICIT CCOupdate,
 *     fdco                [7]  IMPLICIT FDCOupdate,
 *     feico               [8]  IMPLICIT FEICOupdate,
 *     fepco               [9]  IMPLICIT FEPCOupdate,
 *     rio                 [10] IMPLICIT RIOupdate,
 *     other               [11] ANY
 * }
 * ```
 */
export
type COupdate_objectUpdate =
    { characterUpdate: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { booleanUpdate: COupdate_objectUpdate_booleanUpdate } /* CHOICE_ALT_ROOT */
    | { symbolicUpdate: INTEGER } /* CHOICE_ALT_ROOT */
    | { integerUpdate: INTEGER } /* CHOICE_ALT_ROOT */
    | { bitStringUpdate: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { multiElement: COupdate_objectUpdate_multiElement_Item[] } /* CHOICE_ALT_ROOT */
    | { cco: CCOupdate } /* CHOICE_ALT_ROOT */
    | { fdco: FDCOupdate } /* CHOICE_ALT_ROOT */
    | { feico: FEICOupdate } /* CHOICE_ALT_ROOT */
    | { fepco: FEPCOupdate } /* CHOICE_ALT_ROOT */
    | { rio: RIOupdate } /* CHOICE_ALT_ROOT */
    | { other: _Element } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_COupdate_objectUpdate: $.ASN1Decoder<COupdate_objectUpdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) COupdate_objectUpdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_COupdate_objectUpdate (el: _Element): COupdate_objectUpdate {
    if (!_cached_decoder_for_COupdate_objectUpdate) { _cached_decoder_for_COupdate_objectUpdate = $._decode_inextensible_choice<COupdate_objectUpdate>({
    "CONTEXT 0": [ "characterUpdate", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "booleanUpdate", $._decode_implicit<COupdate_objectUpdate_booleanUpdate>(() => _decode_COupdate_objectUpdate_booleanUpdate) ],
    "CONTEXT 2": [ "symbolicUpdate", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 3": [ "integerUpdate", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 4": [ "bitStringUpdate", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ],
    "CONTEXT 5": [ "multiElement", $._decode_implicit<COupdate_objectUpdate_multiElement_Item[]>(() => $._decodeSequenceOf<COupdate_objectUpdate_multiElement_Item>(() => _decode_COupdate_objectUpdate_multiElement_Item)) ],
    "CONTEXT 6": [ "cco", $._decode_implicit<CCOupdate>(() => _decode_CCOupdate) ],
    "CONTEXT 7": [ "fdco", $._decode_implicit<FDCOupdate>(() => _decode_FDCOupdate) ],
    "CONTEXT 8": [ "feico", $._decode_implicit<FEICOupdate>(() => _decode_FEICOupdate) ],
    "CONTEXT 9": [ "fepco", $._decode_implicit<FEPCOupdate>(() => _decode_FEPCOupdate) ],
    "CONTEXT 10": [ "rio", $._decode_implicit<RIOupdate>(() => _decode_RIOupdate) ],
    "CONTEXT 11": [ "other", $._decode_explicit<_Element>(() => $._decodeAny) ]
}); }
    return _cached_decoder_for_COupdate_objectUpdate(el);
}

let _cached_encoder_for_COupdate_objectUpdate: $.ASN1Encoder<COupdate_objectUpdate> | null = null;

/**
 * @summary Encodes a(n) COupdate_objectUpdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The COupdate_objectUpdate, encoded as an ASN.1 Element.
 */
export
function _encode_COupdate_objectUpdate (value: COupdate_objectUpdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_COupdate_objectUpdate) { _cached_encoder_for_COupdate_objectUpdate = $._encode_choice<COupdate_objectUpdate>({
    "characterUpdate": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "booleanUpdate": $._encode_implicit(_TagClass.context, 1, () => _encode_COupdate_objectUpdate_booleanUpdate, $.BER),
    "symbolicUpdate": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "integerUpdate": $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER),
    "bitStringUpdate": $._encode_implicit(_TagClass.context, 4, () => $._encodeBitString, $.BER),
    "multiElement": $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<COupdate_objectUpdate_multiElement_Item>(() => _encode_COupdate_objectUpdate_multiElement_Item, $.BER), $.BER),
    "cco": $._encode_implicit(_TagClass.context, 6, () => _encode_CCOupdate, $.BER),
    "fdco": $._encode_implicit(_TagClass.context, 7, () => _encode_FDCOupdate, $.BER),
    "feico": $._encode_implicit(_TagClass.context, 8, () => _encode_FEICOupdate, $.BER),
    "fepco": $._encode_implicit(_TagClass.context, 9, () => _encode_FEPCOupdate, $.BER),
    "rio": $._encode_implicit(_TagClass.context, 10, () => _encode_RIOupdate, $.BER),
    "other": $._encode_explicit(_TagClass.context, 11, () => $._encodeAny, $.BER),
}, $.BER); }
    return _cached_encoder_for_COupdate_objectUpdate(value, elGetter);
}


/* eslint-enable */
