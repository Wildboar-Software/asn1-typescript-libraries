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
    NameResolutionProcessingInfo,
    _decode_NameResolutionProcessingInfo,
    _encode_NameResolutionProcessingInfo,
} from '../MhsAcctAsn1Module/NameResolutionProcessingInfo.ta.js';
export {
    NameResolutionProcessingInfo,
    _decode_NameResolutionProcessingInfo,
    _encode_NameResolutionProcessingInfo,
} from '../MhsAcctAsn1Module/NameResolutionProcessingInfo.ta.js';
import {
    DLExpansionProcessingInfo,
    _decode_DLExpansionProcessingInfo,
    _encode_DLExpansionProcessingInfo,
} from '../MhsAcctAsn1Module/DLExpansionProcessingInfo.ta.js';
export {
    DLExpansionProcessingInfo,
    _decode_DLExpansionProcessingInfo,
    _encode_DLExpansionProcessingInfo,
} from '../MhsAcctAsn1Module/DLExpansionProcessingInfo.ta.js';
import {
    RedirectionProcessingInfo,
    _decode_RedirectionProcessingInfo,
    _encode_RedirectionProcessingInfo,
} from '../MhsAcctAsn1Module/RedirectionProcessingInfo.ta.js';
export {
    RedirectionProcessingInfo,
    _decode_RedirectionProcessingInfo,
    _encode_RedirectionProcessingInfo,
} from '../MhsAcctAsn1Module/RedirectionProcessingInfo.ta.js';
import {
    DeferralOfDeliveryProcessingInfo,
    _decode_DeferralOfDeliveryProcessingInfo,
    _encode_DeferralOfDeliveryProcessingInfo,
} from '../MhsAcctAsn1Module/DeferralOfDeliveryProcessingInfo.ta.js';
export {
    DeferralOfDeliveryProcessingInfo,
    _decode_DeferralOfDeliveryProcessingInfo,
    _encode_DeferralOfDeliveryProcessingInfo,
} from '../MhsAcctAsn1Module/DeferralOfDeliveryProcessingInfo.ta.js';
import {
    ConversionProcessingInfo,
    _decode_ConversionProcessingInfo,
    _encode_ConversionProcessingInfo,
} from '../MhsAcctAsn1Module/ConversionProcessingInfo.ta.js';
export {
    ConversionProcessingInfo,
    _decode_ConversionProcessingInfo,
    _encode_ConversionProcessingInfo,
} from '../MhsAcctAsn1Module/ConversionProcessingInfo.ta.js';
import {
    SecurityProcessingInfo,
    _decode_SecurityProcessingInfo,
    _encode_SecurityProcessingInfo,
} from '../MhsAcctAsn1Module/SecurityProcessingInfo.ta.js';
export {
    SecurityProcessingInfo,
    _decode_SecurityProcessingInfo,
    _encode_SecurityProcessingInfo,
} from '../MhsAcctAsn1Module/SecurityProcessingInfo.ta.js';

/* START_OF_SYMBOL_DEFINITION ProcessingDetail */
/**
 * @summary ProcessingDetail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessingDetail  ::=  CHOICE {
 *   name-resolution       [3]  NameResolutionProcessingInfo,
 *   dl-expansion          [4]  DLExpansionProcessingInfo,
 *   redirection           [5]  RedirectionProcessingInfo,
 *   deferred-delivery     [6]  DeferralOfDeliveryProcessingInfo,
 *   conversion            [7]  ConversionProcessingInfo,
 *   securityContextCheck  [8]  SecurityProcessingInfo
 * }
 * ```
 */
export type ProcessingDetail =
    | { name_resolution: NameResolutionProcessingInfo } /* CHOICE_ALT_ROOT */
    | { dl_expansion: DLExpansionProcessingInfo } /* CHOICE_ALT_ROOT */
    | { redirection: RedirectionProcessingInfo } /* CHOICE_ALT_ROOT */
    | {
          deferred_delivery: DeferralOfDeliveryProcessingInfo;
      } /* CHOICE_ALT_ROOT */
    | { conversion: ConversionProcessingInfo } /* CHOICE_ALT_ROOT */
    | { securityContextCheck: SecurityProcessingInfo } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ProcessingDetail */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProcessingDetail */
let _cached_decoder_for_ProcessingDetail: $.ASN1Decoder<ProcessingDetail> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProcessingDetail */

/* START_OF_SYMBOL_DEFINITION _decode_ProcessingDetail */
/**
 * @summary Decodes an ASN.1 element into a(n) ProcessingDetail
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProcessingDetail} The decoded data structure.
 */
export function _decode_ProcessingDetail(el: _Element) {
    if (!_cached_decoder_for_ProcessingDetail) {
        _cached_decoder_for_ProcessingDetail = $._decode_inextensible_choice<ProcessingDetail>(
            {
                'CONTEXT 3': [
                    'name_resolution',
                    $._decode_implicit<NameResolutionProcessingInfo>(
                        () => _decode_NameResolutionProcessingInfo
                    ),
                ],
                'CONTEXT 4': [
                    'dl_expansion',
                    $._decode_implicit<DLExpansionProcessingInfo>(
                        () => _decode_DLExpansionProcessingInfo
                    ),
                ],
                'CONTEXT 5': [
                    'redirection',
                    $._decode_implicit<RedirectionProcessingInfo>(
                        () => _decode_RedirectionProcessingInfo
                    ),
                ],
                'CONTEXT 6': [
                    'deferred_delivery',
                    $._decode_implicit<DeferralOfDeliveryProcessingInfo>(
                        () => _decode_DeferralOfDeliveryProcessingInfo
                    ),
                ],
                'CONTEXT 7': [
                    'conversion',
                    $._decode_implicit<ConversionProcessingInfo>(
                        () => _decode_ConversionProcessingInfo
                    ),
                ],
                'CONTEXT 8': [
                    'securityContextCheck',
                    $._decode_implicit<SecurityProcessingInfo>(
                        () => _decode_SecurityProcessingInfo
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ProcessingDetail(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProcessingDetail */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProcessingDetail */
let _cached_encoder_for_ProcessingDetail: $.ASN1Encoder<ProcessingDetail> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProcessingDetail */

/* START_OF_SYMBOL_DEFINITION _encode_ProcessingDetail */
/**
 * @summary Encodes a(n) ProcessingDetail into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProcessingDetail, encoded as an ASN.1 Element.
 */
export function _encode_ProcessingDetail(
    value: ProcessingDetail,
    elGetter: $.ASN1Encoder<ProcessingDetail>
) {
    if (!_cached_encoder_for_ProcessingDetail) {
        _cached_encoder_for_ProcessingDetail = $._encode_choice<ProcessingDetail>(
            {
                name_resolution: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_NameResolutionProcessingInfo,
                    $.BER
                ),
                dl_expansion: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_DLExpansionProcessingInfo,
                    $.BER
                ),
                redirection: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _encode_RedirectionProcessingInfo,
                    $.BER
                ),
                deferred_delivery: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => _encode_DeferralOfDeliveryProcessingInfo,
                    $.BER
                ),
                conversion: $._encode_implicit(
                    _TagClass.context,
                    7,
                    () => _encode_ConversionProcessingInfo,
                    $.BER
                ),
                securityContextCheck: $._encode_implicit(
                    _TagClass.context,
                    8,
                    () => _encode_SecurityProcessingInfo,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ProcessingDetail(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProcessingDetail */

/* eslint-enable */
