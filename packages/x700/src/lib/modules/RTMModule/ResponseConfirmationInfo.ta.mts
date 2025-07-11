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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';
import {
    GroupObjects,
    _decode_GroupObjects,
    _encode_GroupObjects,
} from '@wildboar/attribute-asn1module';
import {
    RequestIdentifier,
    _decode_RequestIdentifier,
    _encode_RequestIdentifier,
} from '../RTMModule/RequestIdentifier.ta.mjs';
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
    ResponseTime,
    _decode_ResponseTime,
    _encode_ResponseTime,
} from '../RTMModule/ResponseTime.ta.mjs';
import {
    Integer,
    _decode_Integer,
    _encode_Integer,
} from '../MetricModule/Integer.ta.mjs';
import {
    ResponseSync,
    _enum_for_ResponseSync,
    _decode_ResponseSync,
    _encode_ResponseSync,
} from '../RTMModule/ResponseSync.ta.mjs';
import {
    TimePeriod,
    _decode_TimePeriod,
    _encode_TimePeriod,
} from '../MetricModule/TimePeriod.ta.mjs';
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
 * @summary ResponseConfirmationInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseConfirmationInfo ::= SEQUENCE {
 *   responseMonitor             ObjectInstance,
 *   responseRequester           ObjectInstance,
 *   responseConfirmationObject  ObjectInstance,
 *   routeList                   GroupObjects,
 *   requestIdentifier           RequestIdentifier,
 *   notificationIdentifier      [1]  NotificationIdentifier OPTIONAL,
 *   correlatedNotifications     [2]  CorrelatedNotifications OPTIONAL,
 *   responseTime                [3]  ResponseTime,
 *   maximumResponseTimeError    [4]  ResponseTime OPTIONAL,
 *   responseRequestLength       [5]  Integer OPTIONAL,
 *   responseLength              [6]  Integer OPTIONAL,
 *   responseSync                ResponseSync,
 *   responseDelayTime           [7]  TimePeriod OPTIONAL,
 *   responseTimeout             [8]  TimePeriod OPTIONAL,
 *   additionalText              [9]  AdditionalText OPTIONAL,
 *   additionalInformation       [10]  AdditionalInformation OPTIONAL
 * }
 * ```
 *
 */
export class ResponseConfirmationInfo {
    constructor(
        /**
         * @summary `responseMonitor`.
         * @public
         * @readonly
         */
        readonly responseMonitor: ObjectInstance,
        /**
         * @summary `responseRequester`.
         * @public
         * @readonly
         */
        readonly responseRequester: ObjectInstance,
        /**
         * @summary `responseConfirmationObject`.
         * @public
         * @readonly
         */
        readonly responseConfirmationObject: ObjectInstance,
        /**
         * @summary `routeList`.
         * @public
         * @readonly
         */
        readonly routeList: GroupObjects,
        /**
         * @summary `requestIdentifier`.
         * @public
         * @readonly
         */
        readonly requestIdentifier: RequestIdentifier,
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
         * @summary `responseTime`.
         * @public
         * @readonly
         */
        readonly responseTime: ResponseTime,
        /**
         * @summary `maximumResponseTimeError`.
         * @public
         * @readonly
         */
        readonly maximumResponseTimeError: OPTIONAL<ResponseTime>,
        /**
         * @summary `responseRequestLength`.
         * @public
         * @readonly
         */
        readonly responseRequestLength: OPTIONAL<Integer>,
        /**
         * @summary `responseLength`.
         * @public
         * @readonly
         */
        readonly responseLength: OPTIONAL<Integer>,
        /**
         * @summary `responseSync`.
         * @public
         * @readonly
         */
        readonly responseSync: ResponseSync,
        /**
         * @summary `responseDelayTime`.
         * @public
         * @readonly
         */
        readonly responseDelayTime: OPTIONAL<TimePeriod>,
        /**
         * @summary `responseTimeout`.
         * @public
         * @readonly
         */
        readonly responseTimeout: OPTIONAL<TimePeriod>,
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
     * @summary Restructures an object into a ResponseConfirmationInfo
     * @description
     *
     * This takes an `object` and converts it to a `ResponseConfirmationInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResponseConfirmationInfo`.
     * @returns {ResponseConfirmationInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof ResponseConfirmationInfo]: ResponseConfirmationInfo[_K];
        }
    ): ResponseConfirmationInfo {
        return new ResponseConfirmationInfo(
            _o.responseMonitor,
            _o.responseRequester,
            _o.responseConfirmationObject,
            _o.routeList,
            _o.requestIdentifier,
            _o.notificationIdentifier,
            _o.correlatedNotifications,
            _o.responseTime,
            _o.maximumResponseTimeError,
            _o.responseRequestLength,
            _o.responseLength,
            _o.responseSync,
            _o.responseDelayTime,
            _o.responseTimeout,
            _o.additionalText,
            _o.additionalInformation
        );
    }

    /**
     * @summary The enum used as the type of the component `responseSync`
     * @public
     * @static
     */

    public static _enum_for_responseSync = _enum_for_ResponseSync;
}

/**
 * @summary The Leading Root Component Types of ResponseConfirmationInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ResponseConfirmationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'responseMonitor',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'responseRequester',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'responseConfirmationObject',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'routeList',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'requestIdentifier',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'notificationIdentifier',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'correlatedNotifications',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'responseTime',
        false,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'maximumResponseTimeError',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'responseRequestLength',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        'responseLength',
        true,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        'responseSync',
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        'responseDelayTime',
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        'responseTimeout',
        true,
        $.hasTag(_TagClass.context, 8)
    ),
    new $.ComponentSpec(
        'additionalText',
        true,
        $.hasTag(_TagClass.context, 9)
    ),
    new $.ComponentSpec(
        'additionalInformation',
        true,
        $.hasTag(_TagClass.context, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of ResponseConfirmationInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ResponseConfirmationInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ResponseConfirmationInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ResponseConfirmationInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_ResponseConfirmationInfo: $.ASN1Decoder<ResponseConfirmationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResponseConfirmationInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponseConfirmationInfo} The decoded data structure.
 */
export function _decode_ResponseConfirmationInfo(el: _Element): ResponseConfirmationInfo {
    if (!_cached_decoder_for_ResponseConfirmationInfo) {
        _cached_decoder_for_ResponseConfirmationInfo = function (
            el: _Element
        ): ResponseConfirmationInfo {
            let responseMonitor!: ObjectInstance;
            let responseRequester!: ObjectInstance;
            let responseConfirmationObject!: ObjectInstance;
            let routeList!: GroupObjects;
            let requestIdentifier!: RequestIdentifier;
            let notificationIdentifier: OPTIONAL<NotificationIdentifier>;
            let correlatedNotifications: OPTIONAL<CorrelatedNotifications>;
            let responseTime!: ResponseTime;
            let maximumResponseTimeError: OPTIONAL<ResponseTime>;
            let responseRequestLength: OPTIONAL<Integer>;
            let responseLength: OPTIONAL<Integer>;
            let responseSync!: ResponseSync;
            let responseDelayTime: OPTIONAL<TimePeriod>;
            let responseTimeout: OPTIONAL<TimePeriod>;
            let additionalText: OPTIONAL<AdditionalText>;
            let additionalInformation: OPTIONAL<AdditionalInformation>;
            const callbacks: $.DecodingMap = {
                responseMonitor: (_el: _Element): void => {
                    responseMonitor = _decode_ObjectInstance(_el);
                },
                responseRequester: (_el: _Element): void => {
                    responseRequester = _decode_ObjectInstance(_el);
                },
                responseConfirmationObject: (_el: _Element): void => {
                    responseConfirmationObject = _decode_ObjectInstance(_el);
                },
                routeList: (_el: _Element): void => {
                    routeList = _decode_GroupObjects(_el);
                },
                requestIdentifier: (_el: _Element): void => {
                    requestIdentifier = _decode_RequestIdentifier(_el);
                },
                notificationIdentifier: (_el: _Element): void => {
                    notificationIdentifier = $._decode_implicit<NotificationIdentifier>(
                        () => _decode_NotificationIdentifier
                    )(_el);
                },
                correlatedNotifications: (_el: _Element): void => {
                    correlatedNotifications = $._decode_implicit<CorrelatedNotifications>(
                        () => _decode_CorrelatedNotifications
                    )(_el);
                },
                responseTime: (_el: _Element): void => {
                    responseTime = $._decode_explicit<ResponseTime>(
                        () => _decode_ResponseTime
                    )(_el);
                },
                maximumResponseTimeError: (_el: _Element): void => {
                    maximumResponseTimeError = $._decode_explicit<ResponseTime>(
                        () => _decode_ResponseTime
                    )(_el);
                },
                responseRequestLength: (_el: _Element): void => {
                    responseRequestLength = $._decode_implicit<Integer>(
                        () => _decode_Integer
                    )(_el);
                },
                responseLength: (_el: _Element): void => {
                    responseLength = $._decode_implicit<Integer>(
                        () => _decode_Integer
                    )(_el);
                },
                responseSync: (_el: _Element): void => {
                    responseSync = _decode_ResponseSync(_el);
                },
                responseDelayTime: (_el: _Element): void => {
                    responseDelayTime = $._decode_explicit<TimePeriod>(
                        () => _decode_TimePeriod
                    )(_el);
                },
                responseTimeout: (_el: _Element): void => {
                    responseTimeout = $._decode_explicit<TimePeriod>(
                        () => _decode_TimePeriod
                    )(_el);
                },
                additionalText: (_el: _Element): void => {
                    additionalText = $._decode_implicit<AdditionalText>(
                        () => _decode_AdditionalText
                    )(_el);
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
                _root_component_type_list_1_spec_for_ResponseConfirmationInfo,
                _extension_additions_list_spec_for_ResponseConfirmationInfo,
                _root_component_type_list_2_spec_for_ResponseConfirmationInfo,
                undefined
            );
            return new ResponseConfirmationInfo (
                responseMonitor,
                responseRequester,
                responseConfirmationObject,
                routeList,
                requestIdentifier,
                notificationIdentifier,
                correlatedNotifications,
                responseTime,
                maximumResponseTimeError,
                responseRequestLength,
                responseLength,
                responseSync,
                responseDelayTime,
                responseTimeout,
                additionalText,
                additionalInformation
            );
        };
    }
    return _cached_decoder_for_ResponseConfirmationInfo(el);
}

let _cached_encoder_for_ResponseConfirmationInfo: $.ASN1Encoder<ResponseConfirmationInfo> | null = null;

/**
 * @summary Encodes a(n) ResponseConfirmationInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponseConfirmationInfo, encoded as an ASN.1 Element.
 */
export function _encode_ResponseConfirmationInfo(
    value: ResponseConfirmationInfo,
    elGetter: $.ASN1Encoder<ResponseConfirmationInfo>
): _Element {
    if (!_cached_encoder_for_ResponseConfirmationInfo) {
        _cached_encoder_for_ResponseConfirmationInfo = function (
            value: ResponseConfirmationInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.responseMonitor,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.responseRequester,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.responseConfirmationObject,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_GroupObjects(
                            value.routeList,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_RequestIdentifier(
                            value.requestIdentifier,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.notificationIdentifier ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_NotificationIdentifier,
                                  $.BER
                              )(value.notificationIdentifier, $.BER),
                        /* IF_ABSENT  */ value.correlatedNotifications ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_CorrelatedNotifications,
                                  $.BER
                              )(value.correlatedNotifications, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            3,
                            () => _encode_ResponseTime,
                            $.BER
                        )(value.responseTime, $.BER),
                        /* IF_ABSENT  */ value.maximumResponseTimeError ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_ResponseTime,
                                  $.BER
                              )(value.maximumResponseTimeError, $.BER),
                        /* IF_ABSENT  */ value.responseRequestLength ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_Integer,
                                  $.BER
                              )(value.responseRequestLength, $.BER),
                        /* IF_ABSENT  */ value.responseLength === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_Integer,
                                  $.BER
                              )(value.responseLength, $.BER),
                        /* REQUIRED   */ _encode_ResponseSync(
                            value.responseSync,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.responseDelayTime === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  7,
                                  () => _encode_TimePeriod,
                                  $.BER
                              )(value.responseDelayTime, $.BER),
                        /* IF_ABSENT  */ value.responseTimeout === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  8,
                                  () => _encode_TimePeriod,
                                  $.BER
                              )(value.responseTimeout, $.BER),
                        /* IF_ABSENT  */ value.additionalText === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  9,
                                  () => _encode_AdditionalText,
                                  $.BER
                              )(value.additionalText, $.BER),
                        /* IF_ABSENT  */ value.additionalInformation ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  10,
                                  () => _encode_AdditionalInformation,
                                  $.BER
                              )(value.additionalInformation, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ResponseConfirmationInfo(value, elGetter);
}


/* eslint-enable */
