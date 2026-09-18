/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * COupdate-objectUpdate ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
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
    | /* FIXME: other CHOICE_ALT_ROOT */;

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
    "// FIXME: COULD_NOT_COMPILE_TYPE_DECODER": [ "other", undefined ]
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
    "other": $._encode_implicit(_TagClass.context, 11, () => $._encodeAny, $.BER),
}, $.BER); }
    return _cached_encoder_for_COupdate_objectUpdate(value, elGetter);
}


/* eslint-enable */
