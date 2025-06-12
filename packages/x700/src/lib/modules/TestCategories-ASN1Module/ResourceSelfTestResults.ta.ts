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
import {
    IntermediateResponse,
    _enum_for_IntermediateResponse,
    IntermediateResponse_inProgress /* IMPORTED_LONG_ENUMERATION_ITEM */,
    inProgress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    IntermediateResponse_delayedMeasurement /* IMPORTED_LONG_ENUMERATION_ITEM */,
    delayedMeasurement /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    IntermediateResponse_interruptedMeasurement /* IMPORTED_LONG_ENUMERATION_ITEM */,
    interruptedMeasurement /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    IntermediateResponse_repeatLater /* IMPORTED_LONG_ENUMERATION_ITEM */,
    repeatLater /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    IntermediateResponse_noAcknowledgement /* IMPORTED_LONG_ENUMERATION_ITEM */,
    noAcknowledgement /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_IntermediateResponse,
    _encode_IntermediateResponse,
} from '../TestCategories-ASN1Module/IntermediateResponse.ta.js';
export {
    IntermediateResponse,
    _enum_for_IntermediateResponse,
    IntermediateResponse_inProgress /* IMPORTED_LONG_ENUMERATION_ITEM */,
    inProgress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    IntermediateResponse_delayedMeasurement /* IMPORTED_LONG_ENUMERATION_ITEM */,
    delayedMeasurement /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    IntermediateResponse_interruptedMeasurement /* IMPORTED_LONG_ENUMERATION_ITEM */,
    interruptedMeasurement /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    IntermediateResponse_repeatLater /* IMPORTED_LONG_ENUMERATION_ITEM */,
    repeatLater /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    IntermediateResponse_noAcknowledgement /* IMPORTED_LONG_ENUMERATION_ITEM */,
    noAcknowledgement /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_IntermediateResponse,
    _encode_IntermediateResponse,
} from '../TestCategories-ASN1Module/IntermediateResponse.ta.js';
import {
    ResourceSelfTestResults_nonIntermediate,
    _decode_ResourceSelfTestResults_nonIntermediate,
    _encode_ResourceSelfTestResults_nonIntermediate,
} from '../TestCategories-ASN1Module/ResourceSelfTestResults-nonIntermediate.ta.js';
export {
    ResourceSelfTestResults_nonIntermediate,
    _decode_ResourceSelfTestResults_nonIntermediate,
    _encode_ResourceSelfTestResults_nonIntermediate,
} from '../TestCategories-ASN1Module/ResourceSelfTestResults-nonIntermediate.ta.js';

/* START_OF_SYMBOL_DEFINITION ResourceSelfTestResults */
/**
 * @summary ResourceSelfTestResults
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResourceSelfTestResults  ::=  CHOICE {
 *   intermediateResponse  IntermediateResponse,
 *   nonIntermediate
 *     SEQUENCE {phases         SET OF INTEGER,
 *               iteration      [0]  INTEGER,
 *               timeoutPeriod  [1]  TimeoutPeriod,
 *               finalResponse  PrintableString OPTIONAL}
 * }
 * ```
 */
export type ResourceSelfTestResults =
    | { intermediateResponse: IntermediateResponse } /* CHOICE_ALT_ROOT */
    | {
          nonIntermediate: ResourceSelfTestResults_nonIntermediate;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ResourceSelfTestResults */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResourceSelfTestResults */
let _cached_decoder_for_ResourceSelfTestResults: $.ASN1Decoder<ResourceSelfTestResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResourceSelfTestResults */

/* START_OF_SYMBOL_DEFINITION _decode_ResourceSelfTestResults */
/**
 * @summary Decodes an ASN.1 element into a(n) ResourceSelfTestResults
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResourceSelfTestResults} The decoded data structure.
 */
export function _decode_ResourceSelfTestResults(el: _Element) {
    if (!_cached_decoder_for_ResourceSelfTestResults) {
        _cached_decoder_for_ResourceSelfTestResults = $._decode_inextensible_choice<ResourceSelfTestResults>(
            {
                'UNIVERSAL 10': [
                    'intermediateResponse',
                    _decode_IntermediateResponse,
                ],
                'UNIVERSAL 16': [
                    'nonIntermediate',
                    _decode_ResourceSelfTestResults_nonIntermediate,
                ],
            }
        );
    }
    return _cached_decoder_for_ResourceSelfTestResults(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResourceSelfTestResults */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResourceSelfTestResults */
let _cached_encoder_for_ResourceSelfTestResults: $.ASN1Encoder<ResourceSelfTestResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResourceSelfTestResults */

/* START_OF_SYMBOL_DEFINITION _encode_ResourceSelfTestResults */
/**
 * @summary Encodes a(n) ResourceSelfTestResults into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceSelfTestResults, encoded as an ASN.1 Element.
 */
export function _encode_ResourceSelfTestResults(
    value: ResourceSelfTestResults,
    elGetter: $.ASN1Encoder<ResourceSelfTestResults>
) {
    if (!_cached_encoder_for_ResourceSelfTestResults) {
        _cached_encoder_for_ResourceSelfTestResults = $._encode_choice<ResourceSelfTestResults>(
            {
                intermediateResponse: _encode_IntermediateResponse,
                nonIntermediate: _encode_ResourceSelfTestResults_nonIntermediate,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ResourceSelfTestResults(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResourceSelfTestResults */

/* eslint-enable */
