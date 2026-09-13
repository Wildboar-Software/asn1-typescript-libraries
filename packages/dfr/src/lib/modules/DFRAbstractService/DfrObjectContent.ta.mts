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
import { DfrDocumentContent, _decode_DfrDocumentContent, _encode_DfrDocumentContent } from "../DFRAbstractService/DfrDocumentContent.ta.mjs";
// export { DfrDocumentContent, _decode_DfrDocumentContent, _encode_DfrDocumentContent } from "../DFRAbstractService/DfrDocumentContent.ta.mjs";
import { DfrGroupContent, _decode_DfrGroupContent, _encode_DfrGroupContent } from "../DFRAbstractService/DfrGroupContent.ta.mjs";
// export { DfrGroupContent, _decode_DfrGroupContent, _encode_DfrGroupContent } from "../DFRAbstractService/DfrGroupContent.ta.mjs";
import { DfrReferenceContent, _decode_DfrReferenceContent, _encode_DfrReferenceContent } from "../DFRAbstractService/DfrReferenceContent.ta.mjs";
// export { DfrReferenceContent, _decode_DfrReferenceContent, _encode_DfrReferenceContent } from "../DFRAbstractService/DfrReferenceContent.ta.mjs";
import { DfrSearchResultListContent, _decode_DfrSearchResultListContent, _encode_DfrSearchResultListContent } from "../DFRAbstractService/DfrSearchResultListContent.ta.mjs";
// export { DfrSearchResultListContent, _decode_DfrSearchResultListContent, _encode_DfrSearchResultListContent } from "../DFRAbstractService/DfrSearchResultListContent.ta.mjs";


/**
 * @summary DfrObjectContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrObjectContent  ::=  CHOICE {
 *       document-content                             [0] DfrDocumentContent,
 *       root-group-content                           [1] DfrGroupContent,
 *       proper-group-content                         [2] DfrGroupContent,
 *       reference-content                            [3] DfrReferenceContent,
 *       search-result-list-content                   [4] DfrSearchResultListContent
 * }
 * ```
 */
export
type DfrObjectContent =
    { document_content: DfrDocumentContent } /* CHOICE_ALT_ROOT */
    | { root_group_content: DfrGroupContent } /* CHOICE_ALT_ROOT */
    | { proper_group_content: DfrGroupContent } /* CHOICE_ALT_ROOT */
    | { reference_content: DfrReferenceContent } /* CHOICE_ALT_ROOT */
    | { search_result_list_content: DfrSearchResultListContent } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DfrObjectContent: $.ASN1Decoder<DfrObjectContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DfrObjectContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DfrObjectContent (el: _Element): DfrObjectContent {
    if (!_cached_decoder_for_DfrObjectContent) { _cached_decoder_for_DfrObjectContent = $._decode_inextensible_choice<DfrObjectContent>({
    "CONTEXT 0": [ "document_content", $._decode_implicit<DfrDocumentContent>(() => _decode_DfrDocumentContent) ],
    "CONTEXT 1": [ "root_group_content", $._decode_implicit<DfrGroupContent>(() => _decode_DfrGroupContent) ],
    "CONTEXT 2": [ "proper_group_content", $._decode_implicit<DfrGroupContent>(() => _decode_DfrGroupContent) ],
    "CONTEXT 3": [ "reference_content", $._decode_implicit<DfrReferenceContent>(() => _decode_DfrReferenceContent) ],
    "CONTEXT 4": [ "search_result_list_content", $._decode_explicit<DfrSearchResultListContent>(() => _decode_DfrSearchResultListContent) ]
}); }
    return _cached_decoder_for_DfrObjectContent(el);
}

let _cached_encoder_for_DfrObjectContent: $.ASN1Encoder<DfrObjectContent> | null = null;

/**
 * @summary Encodes a(n) DfrObjectContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DfrObjectContent, encoded as an ASN.1 Element.
 */
export
function _encode_DfrObjectContent (value: DfrObjectContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DfrObjectContent) { _cached_encoder_for_DfrObjectContent = $._encode_choice<DfrObjectContent>({
    "document_content": $._encode_implicit(_TagClass.context, 0, () => _encode_DfrDocumentContent, $.BER),
    "root_group_content": $._encode_implicit(_TagClass.context, 1, () => _encode_DfrGroupContent, $.BER),
    "proper_group_content": $._encode_implicit(_TagClass.context, 2, () => _encode_DfrGroupContent, $.BER),
    "reference_content": $._encode_implicit(_TagClass.context, 3, () => _encode_DfrReferenceContent, $.BER),
    "search_result_list_content": $._encode_explicit(_TagClass.context, 4, () => _encode_DfrSearchResultListContent, $.BER),
}, $.BER); }
    return _cached_encoder_for_DfrObjectContent(value, elGetter);
}


/* eslint-enable */
