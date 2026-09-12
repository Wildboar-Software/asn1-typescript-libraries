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
import { ObjectClass_basicObjectClass, ObjectClass_basicObjectClass_namedVariable /* IMPORTED_LONG_NAMED_INTEGER */, namedVariable /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_scatteredAccess /* IMPORTED_LONG_NAMED_INTEGER */, scatteredAccess /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_namedVariableList /* IMPORTED_LONG_NAMED_INTEGER */, namedVariableList /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_namedType /* IMPORTED_LONG_NAMED_INTEGER */, namedType /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_semaphore /* IMPORTED_LONG_NAMED_INTEGER */, semaphore /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_eventCondition /* IMPORTED_LONG_NAMED_INTEGER */, eventCondition /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_eventAction /* IMPORTED_LONG_NAMED_INTEGER */, eventAction /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_eventEnrollment /* IMPORTED_LONG_NAMED_INTEGER */, eventEnrollment /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_journal /* IMPORTED_LONG_NAMED_INTEGER */, journal /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_domain /* IMPORTED_LONG_NAMED_INTEGER */, domain /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_programInvocation /* IMPORTED_LONG_NAMED_INTEGER */, programInvocation /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_operatorStation /* IMPORTED_LONG_NAMED_INTEGER */, operatorStation /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_dataExchange /* IMPORTED_LONG_NAMED_INTEGER */, dataExchange /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_accessControlList /* IMPORTED_LONG_NAMED_INTEGER */, accessControlList /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ObjectClass_basicObjectClass, _encode_ObjectClass_basicObjectClass } from "../ISO-9506-MMS-1/ObjectClass-basicObjectClass.ta.mjs";
// export { ObjectClass_basicObjectClass, ObjectClass_basicObjectClass_namedVariable /* IMPORTED_LONG_NAMED_INTEGER */, namedVariable /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_scatteredAccess /* IMPORTED_LONG_NAMED_INTEGER */, scatteredAccess /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_namedVariableList /* IMPORTED_LONG_NAMED_INTEGER */, namedVariableList /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_namedType /* IMPORTED_LONG_NAMED_INTEGER */, namedType /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_semaphore /* IMPORTED_LONG_NAMED_INTEGER */, semaphore /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_eventCondition /* IMPORTED_LONG_NAMED_INTEGER */, eventCondition /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_eventAction /* IMPORTED_LONG_NAMED_INTEGER */, eventAction /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_eventEnrollment /* IMPORTED_LONG_NAMED_INTEGER */, eventEnrollment /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_journal /* IMPORTED_LONG_NAMED_INTEGER */, journal /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_domain /* IMPORTED_LONG_NAMED_INTEGER */, domain /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_programInvocation /* IMPORTED_LONG_NAMED_INTEGER */, programInvocation /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_operatorStation /* IMPORTED_LONG_NAMED_INTEGER */, operatorStation /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_dataExchange /* IMPORTED_LONG_NAMED_INTEGER */, dataExchange /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_basicObjectClass_accessControlList /* IMPORTED_LONG_NAMED_INTEGER */, accessControlList /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ObjectClass_basicObjectClass, _encode_ObjectClass_basicObjectClass } from "../ISO-9506-MMS-1/ObjectClass-basicObjectClass.ta.mjs";
import { ObjectClass_csObjectClass, ObjectClass_csObjectClass_eventConditionList /* IMPORTED_LONG_NAMED_INTEGER */, eventConditionList /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_csObjectClass_unitControl /* IMPORTED_LONG_NAMED_INTEGER */, unitControl /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ObjectClass_csObjectClass, _encode_ObjectClass_csObjectClass } from "../ISO-9506-MMS-1/ObjectClass-csObjectClass.ta.mjs";
// export { ObjectClass_csObjectClass, ObjectClass_csObjectClass_eventConditionList /* IMPORTED_LONG_NAMED_INTEGER */, eventConditionList /* IMPORTED_SHORT_NAMED_INTEGER */, ObjectClass_csObjectClass_unitControl /* IMPORTED_LONG_NAMED_INTEGER */, unitControl /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ObjectClass_csObjectClass, _encode_ObjectClass_csObjectClass } from "../ISO-9506-MMS-1/ObjectClass-csObjectClass.ta.mjs";


/**
 * @summary ObjectClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectClass  ::=     CHOICE {
 *    basicObjectClass       [0] IMPLICIT INTEGER {
 *        namedVariable          (0)
 *              -- value 1 is reserved for definition in Annex E
 * ,      scatteredAccess        (1)
 * ,      namedVariableList      (2)
 * ,      namedType              (3)
 * ,      semaphore              (4),
 *        eventCondition         (5),
 *        eventAction            (6),
 *        eventEnrollment        (7),
 *        journal                (8),
 *        domain                 (9),
 *        programInvocation      (10),
 *        operatorStation        (11),
 *        dataExchange           (12),
 *    -- Shall not appear in minor version 1
 *        accessControlList      (13)
 *    -- Shall not appear in minor version 1 or 2
 *        } (0..13),
 *    ...
 * ,  csObjectClass          [1] IMPLICIT INTEGER {
 *        eventConditionList     (0),
 *        unitControl            (1) } (0..1)
 *    }
 * ```
 */
export
type ObjectClass =
    { basicObjectClass: ObjectClass_basicObjectClass } /* CHOICE_ALT_ROOT */
    | { csObjectClass: ObjectClass_csObjectClass } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ObjectClass: $.ASN1Decoder<ObjectClass> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObjectClass
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ObjectClass (el: _Element): ObjectClass {
    if (!_cached_decoder_for_ObjectClass) { _cached_decoder_for_ObjectClass = $._decode_extensible_choice<ObjectClass>({
    "CONTEXT 0": [ "basicObjectClass", $._decode_implicit<ObjectClass_basicObjectClass>(() => _decode_ObjectClass_basicObjectClass) ],
    "CONTEXT 1": [ "csObjectClass", $._decode_implicit<ObjectClass_csObjectClass>(() => _decode_ObjectClass_csObjectClass) ]
}); }
    return _cached_decoder_for_ObjectClass(el);
}

let _cached_encoder_for_ObjectClass: $.ASN1Encoder<ObjectClass> | null = null;

/**
 * @summary Encodes a(n) ObjectClass into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectClass, encoded as an ASN.1 Element.
 */
export
function _encode_ObjectClass (value: ObjectClass, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ObjectClass) { _cached_encoder_for_ObjectClass = $._encode_choice<ObjectClass>({
    "basicObjectClass": $._encode_implicit(_TagClass.context, 0, () => _encode_ObjectClass_basicObjectClass, $.BER),
    "csObjectClass": $._encode_implicit(_TagClass.context, 1, () => _encode_ObjectClass_csObjectClass, $.BER),
}, $.BER); }
    return _cached_encoder_for_ObjectClass(value, elGetter);
}


/* eslint-enable */
