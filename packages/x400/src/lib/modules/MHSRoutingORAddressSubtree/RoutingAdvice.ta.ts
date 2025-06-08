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
    TargetRoutingCollective,
    _decode_TargetRoutingCollective,
    _encode_TargetRoutingCollective,
} from '../MHSRoutingORAddressSubtree/TargetRoutingCollective.ta';
export {
    TargetRoutingCollective,
    _decode_TargetRoutingCollective,
    _encode_TargetRoutingCollective,
} from '../MHSRoutingORAddressSubtree/TargetRoutingCollective.ta';
import {
    NonDeliveryInformation,
    _decode_NonDeliveryInformation,
    _encode_NonDeliveryInformation,
} from '../MHSRoutingORAddressSubtree/NonDeliveryInformation.ta';
export {
    NonDeliveryInformation,
    _decode_NonDeliveryInformation,
    _encode_NonDeliveryInformation,
} from '../MHSRoutingORAddressSubtree/NonDeliveryInformation.ta';
import {
    AliasRedirection,
    _decode_AliasRedirection,
    _encode_AliasRedirection,
} from '../MHSRoutingORAddressSubtree/AliasRedirection.ta';
export {
    AliasRedirection,
    _decode_AliasRedirection,
    _encode_AliasRedirection,
} from '../MHSRoutingORAddressSubtree/AliasRedirection.ta';
import {
    DLExpansionInformation,
    _decode_DLExpansionInformation,
    _encode_DLExpansionInformation,
} from '../MHSRoutingORAddressSubtree/DLExpansionInformation.ta';
export {
    DLExpansionInformation,
    _decode_DLExpansionInformation,
    _encode_DLExpansionInformation,
} from '../MHSRoutingORAddressSubtree/DLExpansionInformation.ta';
import {
    DoubleEnvelopeInformation,
    _decode_DoubleEnvelopeInformation,
    _encode_DoubleEnvelopeInformation,
} from '../MHSRoutingORAddressSubtree/DoubleEnvelopeInformation.ta';
export {
    DoubleEnvelopeInformation,
    _decode_DoubleEnvelopeInformation,
    _encode_DoubleEnvelopeInformation,
} from '../MHSRoutingORAddressSubtree/DoubleEnvelopeInformation.ta';

/* START_OF_SYMBOL_DEFINITION RoutingAdvice */
/**
 * @summary RoutingAdvice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoutingAdvice  ::=  CHOICE {
 *   target-routing-collective    [0]  TargetRoutingCollective,
 *   non-delivery-information     [1]  NonDeliveryInformation,
 *   alias-redirection            [2]  AliasRedirection,
 *   dl-expansion-information     [3]  DLExpansionInformation,
 *   double-envelope-information  [4]  DoubleEnvelopeInformation,
 *   ...
 * }
 * ```
 */
export type RoutingAdvice =
    | {
          target_routing_collective: TargetRoutingCollective;
      } /* CHOICE_ALT_ROOT */
    | { non_delivery_information: NonDeliveryInformation } /* CHOICE_ALT_ROOT */
    | { alias_redirection: AliasRedirection } /* CHOICE_ALT_ROOT */
    | { dl_expansion_information: DLExpansionInformation } /* CHOICE_ALT_ROOT */
    | {
          double_envelope_information: DoubleEnvelopeInformation;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION RoutingAdvice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RoutingAdvice */
let _cached_decoder_for_RoutingAdvice: $.ASN1Decoder<RoutingAdvice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RoutingAdvice */

/* START_OF_SYMBOL_DEFINITION _decode_RoutingAdvice */
/**
 * @summary Decodes an ASN.1 element into a(n) RoutingAdvice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RoutingAdvice} The decoded data structure.
 */
export function _decode_RoutingAdvice(el: _Element) {
    if (!_cached_decoder_for_RoutingAdvice) {
        _cached_decoder_for_RoutingAdvice = $._decode_extensible_choice<RoutingAdvice>(
            {
                'CONTEXT 0': [
                    'target_routing_collective',
                    $._decode_implicit<TargetRoutingCollective>(
                        () => _decode_TargetRoutingCollective
                    ),
                ],
                'CONTEXT 1': [
                    'non_delivery_information',
                    $._decode_implicit<NonDeliveryInformation>(
                        () => _decode_NonDeliveryInformation
                    ),
                ],
                'CONTEXT 2': [
                    'alias_redirection',
                    $._decode_implicit<AliasRedirection>(
                        () => _decode_AliasRedirection
                    ),
                ],
                'CONTEXT 3': [
                    'dl_expansion_information',
                    $._decode_implicit<DLExpansionInformation>(
                        () => _decode_DLExpansionInformation
                    ),
                ],
                'CONTEXT 4': [
                    'double_envelope_information',
                    $._decode_implicit<DoubleEnvelopeInformation>(
                        () => _decode_DoubleEnvelopeInformation
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_RoutingAdvice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RoutingAdvice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RoutingAdvice */
let _cached_encoder_for_RoutingAdvice: $.ASN1Encoder<RoutingAdvice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RoutingAdvice */

/* START_OF_SYMBOL_DEFINITION _encode_RoutingAdvice */
/**
 * @summary Encodes a(n) RoutingAdvice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoutingAdvice, encoded as an ASN.1 Element.
 */
export function _encode_RoutingAdvice(
    value: RoutingAdvice,
    elGetter: $.ASN1Encoder<RoutingAdvice>
) {
    if (!_cached_encoder_for_RoutingAdvice) {
        _cached_encoder_for_RoutingAdvice = $._encode_choice<RoutingAdvice>(
            {
                target_routing_collective: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_TargetRoutingCollective,
                    $.BER
                ),
                non_delivery_information: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_NonDeliveryInformation,
                    $.BER
                ),
                alias_redirection: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_AliasRedirection,
                    $.BER
                ),
                dl_expansion_information: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_DLExpansionInformation,
                    $.BER
                ),
                double_envelope_information: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_DoubleEnvelopeInformation,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RoutingAdvice(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RoutingAdvice */

/* eslint-enable */
