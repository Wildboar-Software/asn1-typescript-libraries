/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ServiceReportCause,
    _decode_ServiceReportCause,
    _encode_ServiceReportCause,
} from '../SecurityAuditTrail-ASN1Module/ServiceReportCause.ta.mjs';
import {
    NotificationIdentifier,
    _decode_NotificationIdentifier,
    _encode_NotificationIdentifier,
} from '@wildboar/attribute-asn1module';
import {
    CorrelatedNotifications,
    _decode_CorrelatedNotifications,
    _encode_CorrelatedNotifications,
} from '@wildboar/attribute-asn1module';
import {
    AdditionalText,
    _decode_AdditionalText,
    _encode_AdditionalText,
} from '@wildboar/attribute-asn1module';
import {
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '@wildboar/attribute-asn1module';

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
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'notificationIdentifier',
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        'correlatedNotifications',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'additionalText',
        true,
        $.hasTag(_TagClass.universal, 25)
    ),
    new $.ComponentSpec(
        'additionalInformation',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of SecurityAuditInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SecurityAuditInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SecurityAuditInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SecurityAuditInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_SecurityAuditInfo: $.ASN1Decoder<SecurityAuditInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SecurityAuditInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityAuditInfo} The decoded data structure.
 */
export function _decode_SecurityAuditInfo(el: _Element): SecurityAuditInfo {
    if (!_cached_decoder_for_SecurityAuditInfo) {
        _cached_decoder_for_SecurityAuditInfo = function (
            el: _Element
        ): SecurityAuditInfo {
            let serviceReportCause: OPTIONAL<ServiceReportCause>;
            let notificationIdentifier: OPTIONAL<NotificationIdentifier>;
            let correlatedNotifications: OPTIONAL<CorrelatedNotifications>;
            let additionalText: OPTIONAL<AdditionalText>;
            let additionalInformation: OPTIONAL<AdditionalInformation>;
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
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SecurityAuditInfo,
                _extension_additions_list_spec_for_SecurityAuditInfo,
                _root_component_type_list_2_spec_for_SecurityAuditInfo,
                undefined
            );
            return new SecurityAuditInfo (
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


let _cached_encoder_for_SecurityAuditInfo: $.ASN1Encoder<SecurityAuditInfo> | null = null;


/**
 * @summary Encodes a(n) SecurityAuditInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityAuditInfo, encoded as an ASN.1 Element.
 */
export function _encode_SecurityAuditInfo(
    value: SecurityAuditInfo,
    elGetter: $.ASN1Encoder<SecurityAuditInfo>
): _Element {
    if (!_cached_encoder_for_SecurityAuditInfo) {
        _cached_encoder_for_SecurityAuditInfo = function (
            value: SecurityAuditInfo        ): _Element {
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


/* eslint-enable */
