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
    ServiceReportCause,
    _decode_ServiceReportCause,
    _encode_ServiceReportCause,
} from '../SecurityAuditTrail-ASN1Module/ServiceReportCause.ta.mjs';
export {
    ServiceReportCause,
    _decode_ServiceReportCause,
    _encode_ServiceReportCause,
} from '../SecurityAuditTrail-ASN1Module/ServiceReportCause.ta.mjs';
import {
    NotificationIdentifier,
    _decode_NotificationIdentifier,
    _encode_NotificationIdentifier,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/NotificationIdentifier.ta.mjs';
export {
    NotificationIdentifier,
    _decode_NotificationIdentifier,
    _encode_NotificationIdentifier,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/NotificationIdentifier.ta.mjs';
import {
    CorrelatedNotifications,
    _decode_CorrelatedNotifications,
    _encode_CorrelatedNotifications,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/CorrelatedNotifications.ta.mjs';
export {
    CorrelatedNotifications,
    _decode_CorrelatedNotifications,
    _encode_CorrelatedNotifications,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/CorrelatedNotifications.ta.mjs';
import {
    AdditionalText,
    _decode_AdditionalText,
    _encode_AdditionalText,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalText.ta.mjs';
export {
    AdditionalText,
    _decode_AdditionalText,
    _encode_AdditionalText,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalText.ta.mjs';
import {
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalInformation.ta.mjs';
export {
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalInformation.ta.mjs';

/* START_OF_SYMBOL_DEFINITION SecurityAuditInfo */
/**
 * @summary SecurityAuditInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityAuditInfo ::= SEQUENCE {
 *   serviceReportCause       ServiceReportCause OPTIONAL,
 *   notificationIdentifier   NotificationIdentifier OPTIONAL,
 *   correlatedNotifications  [1] IMPLICIT CorrelatedNotifications OPTIONAL,
 *   additionalText           AdditionalText OPTIONAL,
 *   additionalInformation    [2] IMPLICIT AdditionalInformation OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SecurityAuditInfo {
    constructor(
        /**
         * @summary `serviceReportCause`.
         * @public
         * @readonly
         */
        readonly serviceReportCause: OPTIONAL<ServiceReportCause>,
        /**
         * @summary `notificationIdentifier`.
         * @public
         * @readonly
         */
        readonly notificationIdentifier: OPTIONAL<NotificationIdentifier>,
        /**
         * @summary `correlatedNotifications`.
         * @public
         * @readonly
         */
        readonly correlatedNotifications: OPTIONAL<CorrelatedNotifications>,
        /**
         * @summary `additionalText`.
         * @public
         * @readonly
         */
        readonly additionalText: OPTIONAL<AdditionalText>,
        /**
         * @summary `additionalInformation`.
         * @public
         * @readonly
         */
        readonly additionalInformation: OPTIONAL<AdditionalInformation>
    ) {}

    /**
     * @summary Restructures an object into a SecurityAuditInfo
     * @description
     *
     * This takes an `object` and converts it to a `SecurityAuditInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityAuditInfo`.
     * @returns {SecurityAuditInfo}
     */
    public static _from_object(
        _o: { [_K in keyof SecurityAuditInfo]: SecurityAuditInfo[_K] }
    ): SecurityAuditInfo {
        return new SecurityAuditInfo(
            _o.serviceReportCause,
            _o.notificationIdentifier,
            _o.correlatedNotifications,
            _o.additionalText,
            _o.additionalInformation
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SecurityAuditInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SecurityAuditInfo */
/**
 * @summary The Leading Root Component Types of SecurityAuditInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SecurityAuditInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'serviceReportCause',
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'notificationIdentifier',
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'correlatedNotifications',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalText',
        true,
        $.hasTag(_TagClass.universal, 25),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalInformation',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SecurityAuditInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SecurityAuditInfo */
/**
 * @summary The Trailing Root Component Types of SecurityAuditInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SecurityAuditInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SecurityAuditInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SecurityAuditInfo */
/**
 * @summary The Extension Addition Component Types of SecurityAuditInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SecurityAuditInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SecurityAuditInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityAuditInfo */
let _cached_decoder_for_SecurityAuditInfo: $.ASN1Decoder<SecurityAuditInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityAuditInfo */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityAuditInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityAuditInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityAuditInfo} The decoded data structure.
 */
export function _decode_SecurityAuditInfo(el: _Element) {
    if (!_cached_decoder_for_SecurityAuditInfo) {
        _cached_decoder_for_SecurityAuditInfo = function (
            el: _Element
        ): SecurityAuditInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let serviceReportCause: OPTIONAL<ServiceReportCause>;
            let notificationIdentifier: OPTIONAL<NotificationIdentifier>;
            let correlatedNotifications: OPTIONAL<CorrelatedNotifications>;
            let additionalText: OPTIONAL<AdditionalText>;
            let additionalInformation: OPTIONAL<AdditionalInformation>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                serviceReportCause: (_el: _Element): void => {
                    serviceReportCause = _decode_ServiceReportCause(_el);
                },
                notificationIdentifier: (_el: _Element): void => {
                    notificationIdentifier = _decode_NotificationIdentifier(
                        _el
                    );
                },
                correlatedNotifications: (_el: _Element): void => {
                    correlatedNotifications = $._decode_implicit<CorrelatedNotifications>(
                        () => _decode_CorrelatedNotifications
                    )(_el);
                },
                additionalText: (_el: _Element): void => {
                    additionalText = _decode_AdditionalText(_el);
                },
                additionalInformation: (_el: _Element): void => {
                    additionalInformation = $._decode_implicit<AdditionalInformation>(
                        () => _decode_AdditionalInformation
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SecurityAuditInfo,
                _extension_additions_list_spec_for_SecurityAuditInfo,
                _root_component_type_list_2_spec_for_SecurityAuditInfo,
                undefined
            );
            return new SecurityAuditInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                serviceReportCause,
                notificationIdentifier,
                correlatedNotifications,
                additionalText,
                additionalInformation
            );
        };
    }
    return _cached_decoder_for_SecurityAuditInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityAuditInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityAuditInfo */
let _cached_encoder_for_SecurityAuditInfo: $.ASN1Encoder<SecurityAuditInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityAuditInfo */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityAuditInfo */
/**
 * @summary Encodes a(n) SecurityAuditInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityAuditInfo, encoded as an ASN.1 Element.
 */
export function _encode_SecurityAuditInfo(
    value: SecurityAuditInfo,
    elGetter: $.ASN1Encoder<SecurityAuditInfo>
) {
    if (!_cached_encoder_for_SecurityAuditInfo) {
        _cached_encoder_for_SecurityAuditInfo = function (
            value: SecurityAuditInfo,
            elGetter: $.ASN1Encoder<SecurityAuditInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.serviceReportCause === undefined
                            ? undefined
                            : _encode_ServiceReportCause(
                                  value.serviceReportCause,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.notificationIdentifier ===
                        undefined
                            ? undefined
                            : _encode_NotificationIdentifier(
                                  value.notificationIdentifier,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.correlatedNotifications ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_CorrelatedNotifications,
                                  $.BER
                              )(value.correlatedNotifications, $.BER),
                        /* IF_ABSENT  */ value.additionalText === undefined
                            ? undefined
                            : _encode_AdditionalText(
                                  value.additionalText,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.additionalInformation ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_AdditionalInformation,
                                  $.BER
                              )(value.additionalInformation, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SecurityAuditInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityAuditInfo */

/* eslint-enable */
