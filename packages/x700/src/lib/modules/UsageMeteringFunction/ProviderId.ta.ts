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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
import {
    ServiceSpecificId,
    _decode_ServiceSpecificId,
    _encode_ServiceSpecificId,
} from '../UsageMeteringFunction/ServiceSpecificId.ta';
export {
    ServiceSpecificId,
    _decode_ServiceSpecificId,
    _encode_ServiceSpecificId,
} from '../UsageMeteringFunction/ServiceSpecificId.ta';

/* START_OF_SYMBOL_DEFINITION ProviderId */
/**
 * @summary ProviderId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProviderId  ::=  CHOICE {
 *   objectReference  [1]  ObjectInstance,
 *   textualName      [2]  GraphicString,
 *   serviceSpecific  [3]  ServiceSpecificId,
 *   unknown          [4]  NULL
 * }
 * ```
 */
export type ProviderId =
    | { objectReference: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { textualName: GraphicString } /* CHOICE_ALT_ROOT */
    | { serviceSpecific: ServiceSpecificId } /* CHOICE_ALT_ROOT */
    | { unknown: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ProviderId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProviderId */
let _cached_decoder_for_ProviderId: $.ASN1Decoder<ProviderId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProviderId */

/* START_OF_SYMBOL_DEFINITION _decode_ProviderId */
/**
 * @summary Decodes an ASN.1 element into a(n) ProviderId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProviderId} The decoded data structure.
 */
export function _decode_ProviderId(el: _Element) {
    if (!_cached_decoder_for_ProviderId) {
        _cached_decoder_for_ProviderId = $._decode_inextensible_choice<ProviderId>(
            {
                'CONTEXT 1': [
                    'objectReference',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
                'CONTEXT 2': [
                    'textualName',
                    $._decode_implicit<GraphicString>(
                        () => $._decodeGraphicString
                    ),
                ],
                'CONTEXT 3': [
                    'serviceSpecific',
                    $._decode_implicit<ServiceSpecificId>(
                        () => _decode_ServiceSpecificId
                    ),
                ],
                'CONTEXT 4': [
                    'unknown',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
            }
        );
    }
    return _cached_decoder_for_ProviderId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProviderId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProviderId */
let _cached_encoder_for_ProviderId: $.ASN1Encoder<ProviderId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProviderId */

/* START_OF_SYMBOL_DEFINITION _encode_ProviderId */
/**
 * @summary Encodes a(n) ProviderId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProviderId, encoded as an ASN.1 Element.
 */
export function _encode_ProviderId(
    value: ProviderId,
    elGetter: $.ASN1Encoder<ProviderId>
) {
    if (!_cached_encoder_for_ProviderId) {
        _cached_encoder_for_ProviderId = $._encode_choice<ProviderId>(
            {
                objectReference: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                textualName: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => $._encodeGraphicString,
                    $.BER
                ),
                serviceSpecific: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_ServiceSpecificId,
                    $.BER
                ),
                unknown: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => $._encodeNull,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ProviderId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProviderId */

/* eslint-enable */
