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
import { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
// export { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";


/**
 * @summary SearchArgument_search_mode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchArgument-search-mode ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SearchArgument_search_mode =
    { continue_: DfrEntryName } /* CHOICE_ALT_ROOT */
    | { update: DfrEntryName } /* CHOICE_ALT_ROOT */
    | { new_search_stored: DfrEntryName } /* CHOICE_ALT_ROOT */
    | { non_stored_search: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SearchArgument_search_mode: $.ASN1Decoder<SearchArgument_search_mode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchArgument_search_mode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchArgument_search_mode (el: _Element): SearchArgument_search_mode {
    if (!_cached_decoder_for_SearchArgument_search_mode) { _cached_decoder_for_SearchArgument_search_mode = $._decode_inextensible_choice<SearchArgument_search_mode>({
    "CONTEXT 0": [ "continue_", $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName) ],
    "CONTEXT 1": [ "update", $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName) ],
    "CONTEXT 2": [ "new_search_stored", $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName) ],
    "CONTEXT 3": [ "non_stored_search", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_SearchArgument_search_mode(el);
}

let _cached_encoder_for_SearchArgument_search_mode: $.ASN1Encoder<SearchArgument_search_mode> | null = null;

/**
 * @summary Encodes a(n) SearchArgument_search_mode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchArgument_search_mode, encoded as an ASN.1 Element.
 */
export
function _encode_SearchArgument_search_mode (value: SearchArgument_search_mode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchArgument_search_mode) { _cached_encoder_for_SearchArgument_search_mode = $._encode_choice<SearchArgument_search_mode>({
    "continue_": $._encode_explicit(_TagClass.context, 0, () => _encode_DfrEntryName, $.BER),
    "update": $._encode_explicit(_TagClass.context, 1, () => _encode_DfrEntryName, $.BER),
    "new_search_stored": $._encode_explicit(_TagClass.context, 2, () => _encode_DfrEntryName, $.BER),
    "non_stored_search": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_SearchArgument_search_mode(value, elGetter);
}


/* eslint-enable */
