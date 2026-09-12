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
import { VariableSpecification, _decode_VariableSpecification, _encode_VariableSpecification } from "../ISO-9506-MMS-1/VariableSpecification.ta.mjs";
// export { VariableSpecification, _decode_VariableSpecification, _encode_VariableSpecification } from "../ISO-9506-MMS-1/VariableSpecification.ta.mjs";


/**
 * @summary GetEventConditionAttributes_Response_monitoredVariable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEventConditionAttributes-Response-monitoredVariable ::= CHOICE {
 *     variableReference [0] VariableSpecification,
 *     undefined [1] IMPLICIT NULL
 * }
 * ```
 */
export
type GetEventConditionAttributes_Response_monitoredVariable =
    { variableReference: VariableSpecification } /* CHOICE_ALT_ROOT */
    | { undefined: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GetEventConditionAttributes_Response_monitoredVariable: $.ASN1Decoder<GetEventConditionAttributes_Response_monitoredVariable> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetEventConditionAttributes_Response_monitoredVariable
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetEventConditionAttributes_Response_monitoredVariable (el: _Element): GetEventConditionAttributes_Response_monitoredVariable {
    if (!_cached_decoder_for_GetEventConditionAttributes_Response_monitoredVariable) { _cached_decoder_for_GetEventConditionAttributes_Response_monitoredVariable = $._decode_inextensible_choice<GetEventConditionAttributes_Response_monitoredVariable>({
    "CONTEXT 0": [ "variableReference", $._decode_explicit<VariableSpecification>(() => _decode_VariableSpecification) ],
    "CONTEXT 1": [ "undefined", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_GetEventConditionAttributes_Response_monitoredVariable(el);
}

let _cached_encoder_for_GetEventConditionAttributes_Response_monitoredVariable: $.ASN1Encoder<GetEventConditionAttributes_Response_monitoredVariable> | null = null;

/**
 * @summary Encodes a(n) GetEventConditionAttributes_Response_monitoredVariable into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetEventConditionAttributes_Response_monitoredVariable, encoded as an ASN.1 Element.
 */
export
function _encode_GetEventConditionAttributes_Response_monitoredVariable (value: GetEventConditionAttributes_Response_monitoredVariable, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetEventConditionAttributes_Response_monitoredVariable) { _cached_encoder_for_GetEventConditionAttributes_Response_monitoredVariable = $._encode_choice<GetEventConditionAttributes_Response_monitoredVariable>({
    "variableReference": $._encode_explicit(_TagClass.context, 0, () => _encode_VariableSpecification, $.BER),
    "undefined": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_GetEventConditionAttributes_Response_monitoredVariable(value, elGetter);
}


/* eslint-enable */
