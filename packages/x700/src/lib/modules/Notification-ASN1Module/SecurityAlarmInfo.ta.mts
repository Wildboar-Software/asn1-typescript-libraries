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
    SecurityAlarmCause,
    _decode_SecurityAlarmCause,
    _encode_SecurityAlarmCause,
} from '@wildboar/attribute-asn1module';
import {
    SecurityAlarmSeverity,
    _decode_SecurityAlarmSeverity,
    _encode_SecurityAlarmSeverity,
} from '@wildboar/attribute-asn1module';
import {
    SecurityAlarmDetector,
    _decode_SecurityAlarmDetector,
    _encode_SecurityAlarmDetector,
} from '@wildboar/attribute-asn1module';
import {
    ServiceUser,
    _decode_ServiceUser,
    _encode_ServiceUser,
} from '@wildboar/attribute-asn1module';
import {
    ServiceProvider,
    _decode_ServiceProvider,
    _encode_ServiceProvider,
} from '@wildboar/attribute-asn1module';
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
import {
    _enum_for_PerceivedSeverity,
} from '@wildboar/attribute-asn1module';

/**
 * @summary SecurityAlarmInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityAlarmInfo ::= SEQUENCE {
 *   securityAlarmCause       SecurityAlarmCause,
 *   securityAlarmSeverity    SecurityAlarmSeverity,
 *   securityAlarmDetector    SecurityAlarmDetector,
 *   serviceUser              ServiceUser,
 *   serviceProvider          ServiceProvider,
 *   notificationIdentifier   NotificationIdentifier OPTIONAL,
 *   correlatedNotifications  [1]  CorrelatedNotifications OPTIONAL,
 *   additionalText           AdditionalText OPTIONAL,
 *   additionalInformation    [2]  AdditionalInformation OPTIONAL
 * }
 * ```
 *
 */
export class SecurityAlarmInfo {
    constructor(
        /**
         * @summary `securityAlarmCause`.
         * @public
         * @readonly
         */
        readonly securityAlarmCause: SecurityAlarmCause,
        /**
         * @summary `securityAlarmSeverity`.
         * @public
         * @readonly
         */
        readonly securityAlarmSeverity: SecurityAlarmSeverity,
        /**
         * @summary `securityAlarmDetector`.
         * @public
         * @readonly
         */
        readonly securityAlarmDetector: SecurityAlarmDetector,
        /**
         * @summary `serviceUser`.
         * @public
         * @readonly
         */
        readonly serviceUser: ServiceUser,
        /**
         * @summary `serviceProvider`.
         * @public
         * @readonly
         */
        readonly serviceProvider: ServiceProvider,
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
     * @summary Restructures an object into a SecurityAlarmInfo
     * @description
     *
     * This takes an `object` and converts it to a `SecurityAlarmInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityAlarmInfo`.
     * @returns {SecurityAlarmInfo}
     */
    public static _from_object(
        _o: { [_K in keyof SecurityAlarmInfo]: SecurityAlarmInfo[_K] }
    ): SecurityAlarmInfo {
        return new SecurityAlarmInfo(
            _o.securityAlarmCause,
            _o.securityAlarmSeverity,
            _o.securityAlarmDetector,
            _o.serviceUser,
            _o.serviceProvider,
            _o.notificationIdentifier,
            _o.correlatedNotifications,
            _o.additionalText,
            _o.additionalInformation
        );
    }

    /**
     * @summary The enum used as the type of the component `securityAlarmSeverity`
     * @public
     * @static
     */

    public static _enum_for_securityAlarmSeverity = _enum_for_PerceivedSeverity;
}

/**
 * @summary The Leading Root Component Types of SecurityAlarmInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SecurityAlarmInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'securityAlarmCause',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'securityAlarmSeverity',
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        'securityAlarmDetector',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'serviceUser',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'serviceProvider',
        false,
        $.hasTag(_TagClass.universal, 16)
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
 * @summary The Trailing Root Component Types of SecurityAlarmInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SecurityAlarmInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SecurityAlarmInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SecurityAlarmInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_SecurityAlarmInfo: $.ASN1Decoder<SecurityAlarmInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityAlarmInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityAlarmInfo} The decoded data structure.
 */
export function _decode_SecurityAlarmInfo(el: _Element): SecurityAlarmInfo {
    if (!_cached_decoder_for_SecurityAlarmInfo) {
        _cached_decoder_for_SecurityAlarmInfo = function (
            el: _Element
        ): SecurityAlarmInfo {
            let securityAlarmCause!: SecurityAlarmCause;
            let securityAlarmSeverity!: SecurityAlarmSeverity;
            let securityAlarmDetector!: SecurityAlarmDetector;
            let serviceUser!: ServiceUser;
            let serviceProvider!: ServiceProvider;
            let notificationIdentifier: OPTIONAL<NotificationIdentifier>;
            let correlatedNotifications: OPTIONAL<CorrelatedNotifications>;
            let additionalText: OPTIONAL<AdditionalText>;
            let additionalInformation: OPTIONAL<AdditionalInformation>;
            const callbacks: $.DecodingMap = {
                securityAlarmCause: (_el: _Element): void => {
                    securityAlarmCause = _decode_SecurityAlarmCause(_el);
                },
                securityAlarmSeverity: (_el: _Element): void => {
                    securityAlarmSeverity = _decode_SecurityAlarmSeverity(_el);
                },
                securityAlarmDetector: (_el: _Element): void => {
                    securityAlarmDetector = _decode_SecurityAlarmDetector(_el);
                },
                serviceUser: (_el: _Element): void => {
                    serviceUser = _decode_ServiceUser(_el);
                },
                serviceProvider: (_el: _Element): void => {
                    serviceProvider = _decode_ServiceProvider(_el);
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
                _root_component_type_list_1_spec_for_SecurityAlarmInfo,
                _extension_additions_list_spec_for_SecurityAlarmInfo,
                _root_component_type_list_2_spec_for_SecurityAlarmInfo,
                undefined
            );
            return new SecurityAlarmInfo (
                securityAlarmCause,
                securityAlarmSeverity,
                securityAlarmDetector,
                serviceUser,
                serviceProvider,
                notificationIdentifier,
                correlatedNotifications,
                additionalText,
                additionalInformation
            );
        };
    }
    return _cached_decoder_for_SecurityAlarmInfo(el);
}

let _cached_encoder_for_SecurityAlarmInfo: $.ASN1Encoder<SecurityAlarmInfo> | null = null;

/**
 * @summary Encodes a(n) SecurityAlarmInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityAlarmInfo, encoded as an ASN.1 Element.
 */
export function _encode_SecurityAlarmInfo(
    value: SecurityAlarmInfo,
    elGetter: $.ASN1Encoder<SecurityAlarmInfo>
): _Element {
    if (!_cached_encoder_for_SecurityAlarmInfo) {
        _cached_encoder_for_SecurityAlarmInfo = function (
            value: SecurityAlarmInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SecurityAlarmCause(
                            value.securityAlarmCause,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_SecurityAlarmSeverity(
                            value.securityAlarmSeverity,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_SecurityAlarmDetector(
                            value.securityAlarmDetector,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ServiceUser(
                            value.serviceUser,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ServiceProvider(
                            value.serviceProvider,
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
    return _cached_encoder_for_SecurityAlarmInfo(value, elGetter);
}


/* eslint-enable */
