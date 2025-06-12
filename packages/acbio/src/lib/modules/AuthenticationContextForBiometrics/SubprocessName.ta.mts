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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_SubprocessName */
export enum _enum_for_SubprocessName {
    data_capture = 1,
    intermediate_signal_processing = 2,
    final_signal_processing = 3,
    storage = 4,
    comparison = 5,
    decision = 6,
    sample_fusion = 7,
    feature_fusion = 8,
    score_fusion = 9,
    decision_fusion = 10,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SubprocessName */

/* START_OF_SYMBOL_DEFINITION SubprocessName */
/**
 * @summary SubprocessName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubprocessName  ::=  ENUMERATED {
 *     data-capture(1),
 *     intermediate-signal-processing(2),
 *     final-signal-processing(3),
 *     storage(4),
 *     comparison(5),
 *     decision(6),
 *     sample-fusion(7),
 *     feature-fusion(8),
 *     score-fusion(9),
 *     decision-fusion(10),
 *     ...}
 * ```@enum {number}
 */
export type SubprocessName = _enum_for_SubprocessName | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION SubprocessName */

/* START_OF_SYMBOL_DEFINITION SubprocessName_data_capture */
/**
 * @summary SubprocessName_data_capture
 * @constant
 * @type {number}
 */
export const SubprocessName_data_capture: SubprocessName = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubprocessName_data_capture */

/* START_OF_SYMBOL_DEFINITION data_capture */
/**
 * @summary data_capture
 * @constant
 * @type {number}
 */
export const data_capture: SubprocessName = SubprocessName_data_capture; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION data_capture */

/* START_OF_SYMBOL_DEFINITION SubprocessName_intermediate_signal_processing */
/**
 * @summary SubprocessName_intermediate_signal_processing
 * @constant
 * @type {number}
 */
export const SubprocessName_intermediate_signal_processing: SubprocessName = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubprocessName_intermediate_signal_processing */

/* START_OF_SYMBOL_DEFINITION intermediate_signal_processing */
/**
 * @summary intermediate_signal_processing
 * @constant
 * @type {number}
 */
export const intermediate_signal_processing: SubprocessName = SubprocessName_intermediate_signal_processing; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION intermediate_signal_processing */

/* START_OF_SYMBOL_DEFINITION SubprocessName_final_signal_processing */
/**
 * @summary SubprocessName_final_signal_processing
 * @constant
 * @type {number}
 */
export const SubprocessName_final_signal_processing: SubprocessName = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubprocessName_final_signal_processing */

/* START_OF_SYMBOL_DEFINITION final_signal_processing */
/**
 * @summary final_signal_processing
 * @constant
 * @type {number}
 */
export const final_signal_processing: SubprocessName = SubprocessName_final_signal_processing; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION final_signal_processing */

/* START_OF_SYMBOL_DEFINITION SubprocessName_storage */
/**
 * @summary SubprocessName_storage
 * @constant
 * @type {number}
 */
export const SubprocessName_storage: SubprocessName = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubprocessName_storage */

/* START_OF_SYMBOL_DEFINITION storage */
/**
 * @summary storage
 * @constant
 * @type {number}
 */
export const storage: SubprocessName = SubprocessName_storage; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION storage */

/* START_OF_SYMBOL_DEFINITION SubprocessName_comparison */
/**
 * @summary SubprocessName_comparison
 * @constant
 * @type {number}
 */
export const SubprocessName_comparison: SubprocessName = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubprocessName_comparison */

/* START_OF_SYMBOL_DEFINITION comparison */
/**
 * @summary comparison
 * @constant
 * @type {number}
 */
export const comparison: SubprocessName = SubprocessName_comparison; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION comparison */

/* START_OF_SYMBOL_DEFINITION SubprocessName_decision */
/**
 * @summary SubprocessName_decision
 * @constant
 * @type {number}
 */
export const SubprocessName_decision: SubprocessName = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubprocessName_decision */

/* START_OF_SYMBOL_DEFINITION decision */
/**
 * @summary decision
 * @constant
 * @type {number}
 */
export const decision: SubprocessName = SubprocessName_decision; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION decision */

/* START_OF_SYMBOL_DEFINITION SubprocessName_sample_fusion */
/**
 * @summary SubprocessName_sample_fusion
 * @constant
 * @type {number}
 */
export const SubprocessName_sample_fusion: SubprocessName = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubprocessName_sample_fusion */

/* START_OF_SYMBOL_DEFINITION sample_fusion */
/**
 * @summary sample_fusion
 * @constant
 * @type {number}
 */
export const sample_fusion: SubprocessName = SubprocessName_sample_fusion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sample_fusion */

/* START_OF_SYMBOL_DEFINITION SubprocessName_feature_fusion */
/**
 * @summary SubprocessName_feature_fusion
 * @constant
 * @type {number}
 */
export const SubprocessName_feature_fusion: SubprocessName = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubprocessName_feature_fusion */

/* START_OF_SYMBOL_DEFINITION feature_fusion */
/**
 * @summary feature_fusion
 * @constant
 * @type {number}
 */
export const feature_fusion: SubprocessName = SubprocessName_feature_fusion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION feature_fusion */

/* START_OF_SYMBOL_DEFINITION SubprocessName_score_fusion */
/**
 * @summary SubprocessName_score_fusion
 * @constant
 * @type {number}
 */
export const SubprocessName_score_fusion: SubprocessName = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubprocessName_score_fusion */

/* START_OF_SYMBOL_DEFINITION score_fusion */
/**
 * @summary score_fusion
 * @constant
 * @type {number}
 */
export const score_fusion: SubprocessName = SubprocessName_score_fusion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION score_fusion */

/* START_OF_SYMBOL_DEFINITION SubprocessName_decision_fusion */
/**
 * @summary SubprocessName_decision_fusion
 * @constant
 * @type {number}
 */
export const SubprocessName_decision_fusion: SubprocessName = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubprocessName_decision_fusion */

/* START_OF_SYMBOL_DEFINITION decision_fusion */
/**
 * @summary decision_fusion
 * @constant
 * @type {number}
 */
export const decision_fusion: SubprocessName = SubprocessName_decision_fusion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION decision_fusion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubprocessName */
let _cached_decoder_for_SubprocessName: $.ASN1Decoder<SubprocessName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubprocessName */

/* START_OF_SYMBOL_DEFINITION _decode_SubprocessName */
/**
 * @summary Decodes an ASN.1 element into a(n) SubprocessName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubprocessName} The decoded data structure.
 */
export function _decode_SubprocessName(el: _Element) {
    if (!_cached_decoder_for_SubprocessName) {
        _cached_decoder_for_SubprocessName = $._decodeEnumerated;
    }
    return _cached_decoder_for_SubprocessName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubprocessName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubprocessName */
let _cached_encoder_for_SubprocessName: $.ASN1Encoder<SubprocessName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubprocessName */

/* START_OF_SYMBOL_DEFINITION _encode_SubprocessName */
/**
 * @summary Encodes a(n) SubprocessName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubprocessName, encoded as an ASN.1 Element.
 */
export function _encode_SubprocessName(
    value: SubprocessName,
    elGetter: $.ASN1Encoder<SubprocessName>
) {
    if (!_cached_encoder_for_SubprocessName) {
        _cached_encoder_for_SubprocessName = $._encodeEnumerated;
    }
    return _cached_encoder_for_SubprocessName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubprocessName */

/* eslint-enable */
