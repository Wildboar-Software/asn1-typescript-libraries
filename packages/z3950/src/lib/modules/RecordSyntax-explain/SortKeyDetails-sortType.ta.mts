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
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary SortKeyDetails_sortType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortKeyDetails-sortType ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SortKeyDetails_sortType =
    { character: NULL } /* CHOICE_ALT_ROOT */
    | { numeric: NULL } /* CHOICE_ALT_ROOT */
    | { structured: HumanString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SortKeyDetails_sortType: $.ASN1Decoder<SortKeyDetails_sortType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SortKeyDetails_sortType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SortKeyDetails_sortType (el: _Element): SortKeyDetails_sortType {
    if (!_cached_decoder_for_SortKeyDetails_sortType) { _cached_decoder_for_SortKeyDetails_sortType = $._decode_inextensible_choice<SortKeyDetails_sortType>({
    "CONTEXT 0": [ "character", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "numeric", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "structured", $._decode_implicit<HumanString>(() => _decode_HumanString) ]
}); }
    return _cached_decoder_for_SortKeyDetails_sortType(el);
}

let _cached_encoder_for_SortKeyDetails_sortType: $.ASN1Encoder<SortKeyDetails_sortType> | null = null;

/**
 * @summary Encodes a(n) SortKeyDetails_sortType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortKeyDetails_sortType, encoded as an ASN.1 Element.
 */
export
function _encode_SortKeyDetails_sortType (value: SortKeyDetails_sortType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SortKeyDetails_sortType) { _cached_encoder_for_SortKeyDetails_sortType = $._encode_choice<SortKeyDetails_sortType>({
    "character": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "numeric": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "structured": $._encode_implicit(_TagClass.context, 2, () => _encode_HumanString, $.BER),
}, $.BER); }
    return _cached_encoder_for_SortKeyDetails_sortType(value, elGetter);
}


/* eslint-enable */
