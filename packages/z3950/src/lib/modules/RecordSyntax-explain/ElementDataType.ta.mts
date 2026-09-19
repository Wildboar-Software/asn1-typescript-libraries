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
import { PrimitiveDataType, PrimitiveDataType_octetString /* IMPORTED_LONG_NAMED_INTEGER */, octetString /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_numeric /* IMPORTED_LONG_NAMED_INTEGER */, numeric /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_date /* IMPORTED_LONG_NAMED_INTEGER */, date /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_external /* IMPORTED_LONG_NAMED_INTEGER */, external /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_string /* IMPORTED_LONG_NAMED_INTEGER */, string_ /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_trueOrFalse /* IMPORTED_LONG_NAMED_INTEGER */, trueOrFalse /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_oid /* IMPORTED_LONG_NAMED_INTEGER */, oid /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_intUnit /* IMPORTED_LONG_NAMED_INTEGER */, intUnit /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_empty /* IMPORTED_LONG_NAMED_INTEGER */, empty /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_noneOfTheAbove /* IMPORTED_LONG_NAMED_INTEGER */, noneOfTheAbove /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_PrimitiveDataType, _encode_PrimitiveDataType } from "../RecordSyntax-explain/PrimitiveDataType.ta.mjs";
// export { PrimitiveDataType, PrimitiveDataType_octetString /* IMPORTED_LONG_NAMED_INTEGER */, octetString /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_numeric /* IMPORTED_LONG_NAMED_INTEGER */, numeric /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_date /* IMPORTED_LONG_NAMED_INTEGER */, date /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_external /* IMPORTED_LONG_NAMED_INTEGER */, external /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_string /* IMPORTED_LONG_NAMED_INTEGER */, string_ /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_trueOrFalse /* IMPORTED_LONG_NAMED_INTEGER */, trueOrFalse /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_oid /* IMPORTED_LONG_NAMED_INTEGER */, oid /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_intUnit /* IMPORTED_LONG_NAMED_INTEGER */, intUnit /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_empty /* IMPORTED_LONG_NAMED_INTEGER */, empty /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_noneOfTheAbove /* IMPORTED_LONG_NAMED_INTEGER */, noneOfTheAbove /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_PrimitiveDataType, _encode_PrimitiveDataType } from "../RecordSyntax-explain/PrimitiveDataType.ta.mjs";
import { ElementInfo, _decode_ElementInfo, _encode_ElementInfo } from "../RecordSyntax-explain/ElementInfo.ta.mjs";
// export { ElementInfo, _decode_ElementInfo, _encode_ElementInfo } from "../RecordSyntax-explain/ElementInfo.ta.mjs";


/**
 * @summary ElementDataType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementDataType  ::=  CHOICE{
 *          primitive    [0] IMPLICIT PrimitiveDataType,
 *          structured   [1] IMPLICIT SEQUENCE OF ElementInfo}
 * ```
 */
export
type ElementDataType =
    { primitive: PrimitiveDataType } /* CHOICE_ALT_ROOT */
    | { structured: ElementInfo[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ElementDataType: $.ASN1Decoder<ElementDataType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElementDataType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElementDataType (el: _Element): ElementDataType {
    if (!_cached_decoder_for_ElementDataType) { _cached_decoder_for_ElementDataType = $._decode_inextensible_choice<ElementDataType>({
    "CONTEXT 0": [ "primitive", $._decode_implicit<PrimitiveDataType>(() => _decode_PrimitiveDataType) ],
    "CONTEXT 1": [ "structured", $._decode_implicit<ElementInfo[]>(() => $._decodeSequenceOf<ElementInfo>(() => _decode_ElementInfo)) ]
}); }
    return _cached_decoder_for_ElementDataType(el);
}

let _cached_encoder_for_ElementDataType: $.ASN1Encoder<ElementDataType> | null = null;

/**
 * @summary Encodes a(n) ElementDataType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementDataType, encoded as an ASN.1 Element.
 */
export
function _encode_ElementDataType (value: ElementDataType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElementDataType) { _cached_encoder_for_ElementDataType = $._encode_choice<ElementDataType>({
    "primitive": $._encode_implicit(_TagClass.context, 0, () => _encode_PrimitiveDataType, $.BER),
    "structured": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ElementInfo>(() => _encode_ElementInfo, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_ElementDataType(value, elGetter);
}


/* eslint-enable */
