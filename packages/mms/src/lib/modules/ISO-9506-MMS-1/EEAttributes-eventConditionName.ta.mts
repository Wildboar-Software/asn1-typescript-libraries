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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";


/**
 * @summary EEAttributes_eventConditionName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EEAttributes-eventConditionName ::= CHOICE {
 *     eventCondition [0] ObjectName,
 *     undefined [1] IMPLICIT NULL
 * }
 * ```
 */
export
type EEAttributes_eventConditionName =
    { eventCondition: ObjectName } /* CHOICE_ALT_ROOT */
    | { undefined: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EEAttributes_eventConditionName: $.ASN1Decoder<EEAttributes_eventConditionName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EEAttributes_eventConditionName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EEAttributes_eventConditionName (el: _Element): EEAttributes_eventConditionName {
    if (!_cached_decoder_for_EEAttributes_eventConditionName) { _cached_decoder_for_EEAttributes_eventConditionName = $._decode_inextensible_choice<EEAttributes_eventConditionName>({
    "CONTEXT 0": [ "eventCondition", $._decode_explicit<ObjectName>(() => _decode_ObjectName) ],
    "CONTEXT 1": [ "undefined", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_EEAttributes_eventConditionName(el);
}

let _cached_encoder_for_EEAttributes_eventConditionName: $.ASN1Encoder<EEAttributes_eventConditionName> | null = null;

/**
 * @summary Encodes a(n) EEAttributes_eventConditionName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EEAttributes_eventConditionName, encoded as an ASN.1 Element.
 */
export
function _encode_EEAttributes_eventConditionName (value: EEAttributes_eventConditionName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EEAttributes_eventConditionName) { _cached_encoder_for_EEAttributes_eventConditionName = $._encode_choice<EEAttributes_eventConditionName>({
    "eventCondition": $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER),
    "undefined": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_EEAttributes_eventConditionName(value, elGetter);
}


/* eslint-enable */
