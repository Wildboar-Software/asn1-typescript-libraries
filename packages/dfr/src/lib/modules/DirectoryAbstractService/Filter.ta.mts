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
import { FilterItem, _decode_FilterItem, _encode_FilterItem } from "../DirectoryAbstractService/FilterItem.ta.mjs";
// export { FilterItem, _decode_FilterItem, _encode_FilterItem } from "../DirectoryAbstractService/FilterItem.ta.mjs";


// TODO: CHECK_RECURSIVE_DEFINITION
/**
 * @summary Filter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Filter  ::=  CHOICE {
 *   item  [0]  FilterItem,
 *   and   [1]  SET OF Filter,
 *   or    [2]  SET OF Filter,
 *   not   [3]  Filter,
 *   ... }
 * ```
 */
export
type Filter =
    { item: FilterItem } /* CHOICE_ALT_ROOT */
    | { and: Filter[] } /* CHOICE_ALT_ROOT */
    | { or: Filter[] } /* CHOICE_ALT_ROOT */
    | { not: Filter } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Filter: $.ASN1Decoder<Filter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Filter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Filter (el: _Element): Filter {
    if (!_cached_decoder_for_Filter) { _cached_decoder_for_Filter = $._decode_extensible_choice<Filter>({
    "CONTEXT 0": [ "item", $._decode_explicit<FilterItem>(() => _decode_FilterItem) ],
    "CONTEXT 1": [ "and", $._decode_implicit<Filter[]>(() => $._decodeSetOf<Filter>(() => _decode_Filter)) ],
    "CONTEXT 2": [ "or", $._decode_implicit<Filter[]>(() => $._decodeSetOf<Filter>(() => _decode_Filter)) ],
    "CONTEXT 3": [ "not", $._decode_explicit<Filter>(() => _decode_Filter) ]
}); }
    return _cached_decoder_for_Filter(el);
}

let _cached_encoder_for_Filter: $.ASN1Encoder<Filter> | null = null;

/**
 * @summary Encodes a(n) Filter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Filter, encoded as an ASN.1 Element.
 */
export
function _encode_Filter (value: Filter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Filter) { _cached_encoder_for_Filter = $._encode_choice<Filter>({
    "item": $._encode_explicit(_TagClass.context, 0, () => _encode_FilterItem, $.BER),
    "and": $._encode_implicit(_TagClass.context, 1, () => $._encodeSetOf<Filter>(() => _encode_Filter, $.BER), $.BER),
    "or": $._encode_implicit(_TagClass.context, 2, () => $._encodeSetOf<Filter>(() => _encode_Filter, $.BER), $.BER),
    "not": $._encode_explicit(_TagClass.context, 3, () => _encode_Filter, $.BER),
}, $.BER); }
    return _cached_encoder_for_Filter(value, elGetter);
}


/* eslint-enable */
