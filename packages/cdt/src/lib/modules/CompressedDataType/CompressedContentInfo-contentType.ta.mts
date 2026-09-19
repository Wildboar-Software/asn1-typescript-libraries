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
import { ContentType_ShortForm, ContentType_ShortForm_unidentified /* IMPORTED_LONG_NAMED_INTEGER */, unidentified /* IMPORTED_SHORT_NAMED_INTEGER */, ContentType_ShortForm_external /* IMPORTED_LONG_NAMED_INTEGER */, external /* IMPORTED_SHORT_NAMED_INTEGER */, ContentType_ShortForm_p1 /* IMPORTED_LONG_NAMED_INTEGER */, p1 /* IMPORTED_SHORT_NAMED_INTEGER */, ContentType_ShortForm_p3 /* IMPORTED_LONG_NAMED_INTEGER */, p3 /* IMPORTED_SHORT_NAMED_INTEGER */, ContentType_ShortForm_p7 /* IMPORTED_LONG_NAMED_INTEGER */, p7 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ContentType_ShortForm, _encode_ContentType_ShortForm } from "../CompressedDataType/ContentType-ShortForm.ta.mjs";
// export { ContentType_ShortForm, ContentType_ShortForm_unidentified /* IMPORTED_LONG_NAMED_INTEGER */, unidentified /* IMPORTED_SHORT_NAMED_INTEGER */, ContentType_ShortForm_external /* IMPORTED_LONG_NAMED_INTEGER */, external /* IMPORTED_SHORT_NAMED_INTEGER */, ContentType_ShortForm_p1 /* IMPORTED_LONG_NAMED_INTEGER */, p1 /* IMPORTED_SHORT_NAMED_INTEGER */, ContentType_ShortForm_p3 /* IMPORTED_LONG_NAMED_INTEGER */, p3 /* IMPORTED_SHORT_NAMED_INTEGER */, ContentType_ShortForm_p7 /* IMPORTED_LONG_NAMED_INTEGER */, p7 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ContentType_ShortForm, _encode_ContentType_ShortForm } from "../CompressedDataType/ContentType-ShortForm.ta.mjs";


/**
 * @summary CompressedContentInfo_contentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompressedContentInfo-contentType ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CompressedContentInfo_contentType =
    { contentType_ShortForm: ContentType_ShortForm } /* CHOICE_ALT_ROOT */
    | { contentType_OID: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CompressedContentInfo_contentType: $.ASN1Decoder<CompressedContentInfo_contentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompressedContentInfo_contentType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompressedContentInfo_contentType (el: _Element): CompressedContentInfo_contentType {
    if (!_cached_decoder_for_CompressedContentInfo_contentType) { _cached_decoder_for_CompressedContentInfo_contentType = $._decode_inextensible_choice<CompressedContentInfo_contentType>({
    "CONTEXT 0": [ "contentType_ShortForm", $._decode_implicit<ContentType_ShortForm>(() => _decode_ContentType_ShortForm) ],
    "CONTEXT 1": [ "contentType_OID", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ]
}); }
    return _cached_decoder_for_CompressedContentInfo_contentType(el);
}

let _cached_encoder_for_CompressedContentInfo_contentType: $.ASN1Encoder<CompressedContentInfo_contentType> | null = null;

/**
 * @summary Encodes a(n) CompressedContentInfo_contentType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompressedContentInfo_contentType, encoded as an ASN.1 Element.
 */
export
function _encode_CompressedContentInfo_contentType (value: CompressedContentInfo_contentType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompressedContentInfo_contentType) { _cached_encoder_for_CompressedContentInfo_contentType = $._encode_choice<CompressedContentInfo_contentType>({
    "contentType_ShortForm": $._encode_implicit(_TagClass.context, 0, () => _encode_ContentType_ShortForm, $.BER),
    "contentType_OID": $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER),
}, $.BER); }
    return _cached_encoder_for_CompressedContentInfo_contentType(value, elGetter);
}


/* eslint-enable */
