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
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from '@wildboar/attribute-asn1module';
import {
    SpecificProblems,
    _decode_SpecificProblems,
    _encode_SpecificProblems,
} from '@wildboar/attribute-asn1module';
import {
    PerceivedSeverity,
    _enum_for_PerceivedSeverity,
    _decode_PerceivedSeverity,
    _encode_PerceivedSeverity,
} from '@wildboar/attribute-asn1module';
import {
    BackedUpStatus,
    _decode_BackedUpStatus,
    _encode_BackedUpStatus,
} from '@wildboar/attribute-asn1module';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';
import {
    TrendIndication,
    _enum_for_TrendIndication,
    _decode_TrendIndication,
    _encode_TrendIndication,
} from '@wildboar/attribute-asn1module';
import {
    ThresholdInfo,
    _decode_ThresholdInfo,
    _encode_ThresholdInfo,
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
    AttributeValueChangeDefinition,
    _decode_AttributeValueChangeDefinition,
    _encode_AttributeValueChangeDefinition,
} from '@wildboar/attribute-asn1module';
import {
    MonitoredAttributes,
    _decode_MonitoredAttributes,
    _encode_MonitoredAttributes,
} from '@wildboar/attribute-asn1module';
import {
    ProposedRepairActions,
    _decode_ProposedRepairActions,
    _encode_ProposedRepairActions,
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
 * @summary AlarmInfo
 * @description
 *
 * Event information for the five DMI alarm notifications
 * (`communicationsAlarm`, `environmentalAlarm`, `equipmentAlarm`,
 * `processingErrorAlarm`, `qualityofServiceAlarm`). Carried as CMIS
 * M-EVENT-REPORT event information and stored in `alarmRecord`.
 * Alarm types (X.733 §8.1.1): communications (procedures that
 * convey information); QoS (service degradation); processing
 * error (software/processing fault); equipment (equipment
 * fault); environmental (enclosure condition). ITU-T Rec.
 * X.721 (02/92)
 * [§13.2](https://www.itu.int/rec/T-REC-X.721-199202-I)–§13.4,
 * §13.10–§13.11, §14.3. Parameters: ITU-T Rec. X.733 (02/92)
 * [§8.1.2](https://www.itu.int/rec/T-REC-X.733-199202-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmInfo ::= SEQUENCE {
 *   probableCause            ProbableCause,
 *   specificProblems         [1]  SpecificProblems OPTIONAL,
 *   perceivedSeverity        PerceivedSeverity,
 *   backedUpStatus           BackedUpStatus OPTIONAL,
 *   backUpObject             [2]  ObjectInstance OPTIONAL,
 *   trendIndication          [3]  TrendIndication OPTIONAL,
 *   thresholdInfo            [4]  ThresholdInfo OPTIONAL,
 *   notificationIdentifier   [5]  NotificationIdentifier OPTIONAL,
 *   correlatedNotifications  [6]  CorrelatedNotifications OPTIONAL,
 *   stateChangeDefinition    [7]  AttributeValueChangeDefinition OPTIONAL,
 *   monitoredAttributes      [8]  MonitoredAttributes OPTIONAL,
 *   proposedRepairActions    [9]  ProposedRepairActions OPTIONAL,
 *   additionalText           AdditionalText OPTIONAL,
 *   additionalInformation    [10]  AdditionalInformation OPTIONAL
 * }
 * ```
 *
 */
export class AlarmInfo {
    constructor(
        /**
         * @summary `probableCause`.
         * @description
         *
         * Further qualification of the alarm cause. The object-class
         * behaviour shall name the values used. Prefer the most
         * specific registered cause. In the systems management
         * application context, standard causes are object
         * identifiers registered in X.721. ITU-T Rec. X.733
         * (02/92) §8.1.2.1.
         * @public
         * @readonly
         */
        readonly probableCause: ProbableCause,
        /**
         * @summary `specificProblems`.
         * @description
         *
         * Optional refinements of `probableCause`: a set of
         * identifiers chosen by the object-class definer. In the
         * systems management context, only object identifiers.
         * ITU-T Rec. X.733 (02/92) §8.1.2.2.
         * @public
         * @readonly
         */
        readonly specificProblems: OPTIONAL<SpecificProblems>,
        /**
         * @summary `perceivedSeverity`.
         * @description
         *
         * How the object's capability is perceived to be affected.
         * `cleared` clears prior alarms of the same alarm type,
         * probable cause, and specific problems (if given); X.733
         * does not require reporting of clearing. `indeterminate`
         * if severity cannot be determined. Service-affecting,
         * most to least severe: `critical` (immediate restore),
         * `major` (urgent restore), `minor` (non-service-affecting
         * fault), `warning` (impending fault). ITU-T Rec. X.733
         * (02/92) §8.1.2.3.
         * @public
         * @readonly
         */
        readonly perceivedSeverity: PerceivedSeverity,
        /**
         * @summary `backedUpStatus`.
         * @description
         *
         * When present, whether the emitting object has been
         * backed up so user service was not disrupted. `true` =
         * backed up; `false` = not. ITU-T Rec. X.733 (02/92)
         * §8.1.2.4.
         * @public
         * @readonly
         */
        readonly backedUpStatus?: OPTIONAL<BackedUpStatus>,
        /**
         * @summary `backUpObject`.
         * @description
         *
         * Object instance providing back-up service. Present when
         * `backedUpStatus` is present and `true`; absent when
         * `backedUpStatus` is `false` or omitted (X.721 Cor.2
         * table after AlarmInfo). Same value as the X.732
         * back-up-object relationship attribute when the alarm is
         * emitted. ITU-T Rec. X.733 (02/92) §8.1.2.5; X.721
         * (02/92)/Cor.2 (10/96) item 120.
         * @public
         * @readonly
         */
        readonly backUpObject?: OPTIONAL<ObjectInstance>,
        /**
         * @summary `trendIndication`.
         * @description
         *
         * Severity trend vs outstanding (uncleared) alarms on the
         * same object: `moreSevere`, `noChange`, or `lessSevere`.
         * Shall be absent if there are no outstanding alarms;
         * absence does not imply that. ITU-T Rec. X.733 (02/92)
         * §8.1.2.6.
         * @public
         * @readonly
         */
        readonly trendIndication?: OPTIONAL<TrendIndication>,
        /**
         * @summary `thresholdInfo`.
         * @description
         *
         * Present when the alarm is a threshold crossing: triggered
         * threshold id, observed value, threshold level (gauge:
         * crossed value plus hysteresis; counter: threshold only),
         * and arm time. ITU-T Rec. X.733 (02/92) §8.1.2.7.
         * @public
         * @readonly
         */
        readonly thresholdInfo?: OPTIONAL<ThresholdInfo>,
        /**
         * @summary `notificationIdentifier`.
         * @description
         *
         * Identifier that later notifications may cite in
         * `correlatedNotifications`. Unique among this object's
         * notifications for as long as correlation matters; may
         * be reused once correlation is no longer required.
         * ITU-T Rec. X.733 (02/92) §8.1.2.8.
         * @public
         * @readonly
         */
        readonly notificationIdentifier?: OPTIONAL<NotificationIdentifier>,
        /**
         * @summary `correlatedNotifications`.
         * @description
         *
         * Notification identifiers (and source instance if not
         * this object) of notifications correlated with this
         * one. The correlation algorithm is not specified.
         * ITU-T Rec. X.733 (02/92) §8.1.2.9.
         * @public
         * @readonly
         */
        readonly correlatedNotifications?: OPTIONAL<CorrelatedNotifications>,
        /**
         * @summary `stateChangeDefinition`.
         * @description
         *
         * State transition associated with the alarm (X.731). If
         * the class includes state-change notifications, it shall
         * also emit that notification. ITU-T Rec. X.733 (02/92)
         * §8.1.2.10.
         * @public
         * @readonly
         */
        readonly stateChangeDefinition?: OPTIONAL<AttributeValueChangeDefinition>,
        /**
         * @summary `monitoredAttributes`.
         * @description
         *
         * Attribute identifiers and values of interest at the
         * time of the alarm, as specified by the object-class
         * definer. ITU-T Rec. X.733 (02/92) §8.1.2.11.
         * @public
         * @readonly
         */
        readonly monitoredAttributes?: OPTIONAL<MonitoredAttributes>,
        /**
         * @summary `proposedRepairActions`.
         * @description
         *
         * Suggested solutions when the cause is known (for
         * example switch in standby, retry, replace media). In
         * the systems management context, object identifiers.
         * ITU-T Rec. X.733 (02/92) §8.1.2.12.
         * @public
         * @readonly
         */
        readonly proposedRepairActions?: OPTIONAL<ProposedRepairActions>,
        /**
         * @summary `additionalText`.
         * @description
         *
         * Free-form text; understanding it is not required to
         * interpret the notification. Format and meaning are not
         * specified and are not subject to OSI Management
         * conformance. ITU-T Rec. X.733 (02/92) §8.1.2.13.
         * @public
         * @readonly
         */
        readonly additionalText?: OPTIONAL<AdditionalText>,
        /**
         * @summary `additionalInformation`.
         * @description
         *
         * Extra structures, each with a registered identifier,
         * a significance flag (`true` if the receiver must parse
         * the information for full understanding), and the
         * information. An indication is still issued if not
         * fully understood. ITU-T Rec. X.733 (02/92) §8.1.2.14.
         * @public
         * @readonly
         */
        readonly additionalInformation?: OPTIONAL<AdditionalInformation>
    ) {}

    /**
     * @summary Restructures an object into a AlarmInfo
     * @description
     *
     * This takes an `object` and converts it to a `AlarmInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlarmInfo`.
     * @returns {AlarmInfo}
     */
    public static _from_object(
        _o: { [_K in keyof AlarmInfo]: AlarmInfo[_K] }
    ): AlarmInfo {
        return new AlarmInfo(
            _o.probableCause,
            _o.specificProblems,
            _o.perceivedSeverity,
            _o.backedUpStatus,
            _o.backUpObject,
            _o.trendIndication,
            _o.thresholdInfo,
            _o.notificationIdentifier,
            _o.correlatedNotifications,
            _o.stateChangeDefinition,
            _o.monitoredAttributes,
            _o.proposedRepairActions,
            _o.additionalText,
            _o.additionalInformation
        );
    }

    /**
     * @summary The enum used as the type of the component `perceivedSeverity`
     * @public
     * @static
     */

    public static _enum_for_perceivedSeverity = _enum_for_PerceivedSeverity;
    /**
     * @summary The enum used as the type of the component `trendIndication`
     * @public
     * @static
     */

    public static _enum_for_trendIndication = _enum_for_TrendIndication;
}

/**
 * @summary The Leading Root Component Types of AlarmInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AlarmInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'probableCause',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'specificProblems',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'perceivedSeverity',
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        'backedUpStatus',
        true,
        $.hasTag(_TagClass.universal, 1)
    ),
    new $.ComponentSpec(
        'backUpObject',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'trendIndication',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'thresholdInfo',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'notificationIdentifier',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        'correlatedNotifications',
        true,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        'stateChangeDefinition',
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        'monitoredAttributes',
        true,
        $.hasTag(_TagClass.context, 8)
    ),
    new $.ComponentSpec(
        'proposedRepairActions',
        true,
        $.hasTag(_TagClass.context, 9)
    ),
    new $.ComponentSpec(
        'additionalText',
        true,
        $.hasTag(_TagClass.universal, 25)
    ),
    new $.ComponentSpec(
        'additionalInformation',
        true,
        $.hasTag(_TagClass.context, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of AlarmInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AlarmInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AlarmInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AlarmInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_AlarmInfo: $.ASN1Decoder<AlarmInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlarmInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlarmInfo} The decoded data structure.
 */
export function _decode_AlarmInfo(el: _Element): AlarmInfo {
    if (!_cached_decoder_for_AlarmInfo) {
        _cached_decoder_for_AlarmInfo = function (el: _Element): AlarmInfo {
            let probableCause!: ProbableCause;
            let specificProblems: OPTIONAL<SpecificProblems>;
            let perceivedSeverity!: PerceivedSeverity;
            let backedUpStatus: OPTIONAL<BackedUpStatus>;
            let backUpObject: OPTIONAL<ObjectInstance>;
            let trendIndication: OPTIONAL<TrendIndication>;
            let thresholdInfo: OPTIONAL<ThresholdInfo>;
            let notificationIdentifier: OPTIONAL<NotificationIdentifier>;
            let correlatedNotifications: OPTIONAL<CorrelatedNotifications>;
            let stateChangeDefinition: OPTIONAL<AttributeValueChangeDefinition>;
            let monitoredAttributes: OPTIONAL<MonitoredAttributes>;
            let proposedRepairActions: OPTIONAL<ProposedRepairActions>;
            let additionalText: OPTIONAL<AdditionalText>;
            let additionalInformation: OPTIONAL<AdditionalInformation>;
            const callbacks: $.DecodingMap = {
                probableCause: (_el: _Element): void => {
                    probableCause = _decode_ProbableCause(_el);
                },
                specificProblems: (_el: _Element): void => {
                    specificProblems = $._decode_implicit<SpecificProblems>(
                        () => _decode_SpecificProblems
                    )(_el);
                },
                perceivedSeverity: (_el: _Element): void => {
                    perceivedSeverity = _decode_PerceivedSeverity(_el);
                },
                backedUpStatus: (_el: _Element): void => {
                    backedUpStatus = _decode_BackedUpStatus(_el);
                },
                backUpObject: (_el: _Element): void => {
                    backUpObject = $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    )(_el);
                },
                trendIndication: (_el: _Element): void => {
                    trendIndication = $._decode_implicit<TrendIndication>(
                        () => _decode_TrendIndication
                    )(_el);
                },
                thresholdInfo: (_el: _Element): void => {
                    thresholdInfo = $._decode_implicit<ThresholdInfo>(
                        () => _decode_ThresholdInfo
                    )(_el);
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
                stateChangeDefinition: (_el: _Element): void => {
                    stateChangeDefinition = $._decode_implicit<AttributeValueChangeDefinition>(
                        () => _decode_AttributeValueChangeDefinition
                    )(_el);
                },
                monitoredAttributes: (_el: _Element): void => {
                    monitoredAttributes = $._decode_implicit<MonitoredAttributes>(
                        () => _decode_MonitoredAttributes
                    )(_el);
                },
                proposedRepairActions: (_el: _Element): void => {
                    proposedRepairActions = $._decode_implicit<ProposedRepairActions>(
                        () => _decode_ProposedRepairActions
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
                _root_component_type_list_1_spec_for_AlarmInfo,
                _extension_additions_list_spec_for_AlarmInfo,
                _root_component_type_list_2_spec_for_AlarmInfo,
                undefined
            );
            return new AlarmInfo (
                probableCause,
                specificProblems,
                perceivedSeverity,
                backedUpStatus,
                backUpObject,
                trendIndication,
                thresholdInfo,
                notificationIdentifier,
                correlatedNotifications,
                stateChangeDefinition,
                monitoredAttributes,
                proposedRepairActions,
                additionalText,
                additionalInformation
            );
        };
    }
    return _cached_decoder_for_AlarmInfo(el);
}

let _cached_encoder_for_AlarmInfo: $.ASN1Encoder<AlarmInfo> | null = null;

/**
 * @summary Encodes a(n) AlarmInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmInfo, encoded as an ASN.1 Element.
 */
export function _encode_AlarmInfo(
    value: AlarmInfo,
    elGetter: $.ASN1Encoder<AlarmInfo>
): _Element {
    if (!_cached_encoder_for_AlarmInfo) {
        _cached_encoder_for_AlarmInfo = function (
            value: AlarmInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ProbableCause(
                            value.probableCause,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.specificProblems === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_SpecificProblems,
                                  $.BER
                              )(value.specificProblems, $.BER),
                        /* REQUIRED   */ _encode_PerceivedSeverity(
                            value.perceivedSeverity,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.backedUpStatus === undefined
                            ? undefined
                            : _encode_BackedUpStatus(
                                  value.backedUpStatus,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.backUpObject === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ObjectInstance,
                                  $.BER
                              )(value.backUpObject, $.BER),
                        /* IF_ABSENT  */ value.trendIndication === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_TrendIndication,
                                  $.BER
                              )(value.trendIndication, $.BER),
                        /* IF_ABSENT  */ value.thresholdInfo === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_ThresholdInfo,
                                  $.BER
                              )(value.thresholdInfo, $.BER),
                        /* IF_ABSENT  */ value.notificationIdentifier ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_NotificationIdentifier,
                                  $.BER
                              )(value.notificationIdentifier, $.BER),
                        /* IF_ABSENT  */ value.correlatedNotifications ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_CorrelatedNotifications,
                                  $.BER
                              )(value.correlatedNotifications, $.BER),
                        /* IF_ABSENT  */ value.stateChangeDefinition ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  7,
                                  () => _encode_AttributeValueChangeDefinition,
                                  $.BER
                              )(value.stateChangeDefinition, $.BER),
                        /* IF_ABSENT  */ value.monitoredAttributes === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  8,
                                  () => _encode_MonitoredAttributes,
                                  $.BER
                              )(value.monitoredAttributes, $.BER),
                        /* IF_ABSENT  */ value.proposedRepairActions ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  9,
                                  () => _encode_ProposedRepairActions,
                                  $.BER
                              )(value.proposedRepairActions, $.BER),
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
    return _cached_encoder_for_AlarmInfo(value, elGetter);
}


/* eslint-enable */
