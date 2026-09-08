/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ObjectClass,
    _decode_ObjectClass,
    _encode_ObjectClass,
} from "../CMIP-1/ObjectClass.ta.mjs";
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from "../CMIP-1/ObjectInstance.ta.mjs";
import {
    EventTime,
    _decode_EventTime,
    _encode_EventTime,
} from "../Attribute-ASN1Module/EventTime.ta.mjs";
import {
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from "../CMIP-1/EventTypeId.ta.mjs";
import {
    AdditionalInformation,
    AdditionalText,
    AttributeValueChangeDefinition,
    BackedUpStatus,
    CorrelatedNotifications,
    MonitoredAttributes,
    NotificationIdentifier,
    PerceivedSeverity,
    _enum_for_PerceivedSeverity,
    ProbableCause,
    ProposedRepairActions,
    SpecificProblems,
    ThresholdInfo,
    TrendIndication,
    _enum_for_TrendIndication,
    _decode_AdditionalInformation,
    _decode_AdditionalText,
    _decode_AttributeValueChangeDefinition,
    _decode_BackedUpStatus,
    _decode_CorrelatedNotifications,
    _decode_MonitoredAttributes,
    _decode_NotificationIdentifier,
    _decode_PerceivedSeverity,
    _decode_ProbableCause,
    _decode_ProposedRepairActions,
    _decode_SpecificProblems,
    _decode_ThresholdInfo,
    _decode_TrendIndication,
    _encode_AdditionalInformation,
    _encode_AdditionalText,
    _encode_AttributeValueChangeDefinition,
    _encode_BackedUpStatus,
    _encode_CorrelatedNotifications,
    _encode_MonitoredAttributes,
    _encode_NotificationIdentifier,
    _encode_PerceivedSeverity,
    _encode_ProbableCause,
    _encode_ProposedRepairActions,
    _encode_SpecificProblems,
    _encode_ThresholdInfo,
    _encode_TrendIndication,
} from "@wildboar/attribute-asn1module";

/**
 * @summary AlarmSynchronizationData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmSynchronizationData ::= SEQUENCE {
 *   alarmManagedObjectClass     ObjectClass,
 *   alarmManagedObjectInstance  ObjectInstance,
 *   eventTime                   EventTime OPTIONAL,
 *   eventType                   EventTypeId,
 *   COMPONENTS OF AlarmInfo
 * }
 * ```
 *
 * `COMPONENTS OF AlarmInfo` inlines the X.721 alarm-info fields
 * (`probableCause` through `additionalInformation`).
 *
 * @class
 */
export class AlarmSynchronizationData {
    constructor(
        readonly alarmManagedObjectClass: ObjectClass,
        readonly alarmManagedObjectInstance: ObjectInstance,
        readonly eventTime: OPTIONAL<EventTime>,
        readonly eventType: EventTypeId,
        readonly probableCause: ProbableCause,
        readonly specificProblems: OPTIONAL<SpecificProblems>,
        readonly perceivedSeverity: PerceivedSeverity,
        readonly backedUpStatus: OPTIONAL<BackedUpStatus>,
        readonly backUpObject: OPTIONAL<ObjectInstance>,
        readonly trendIndication: OPTIONAL<TrendIndication>,
        readonly thresholdInfo: OPTIONAL<ThresholdInfo>,
        readonly notificationIdentifier: OPTIONAL<NotificationIdentifier>,
        readonly correlatedNotifications: OPTIONAL<CorrelatedNotifications>,
        readonly stateChangeDefinition: OPTIONAL<AttributeValueChangeDefinition>,
        readonly monitoredAttributes: OPTIONAL<MonitoredAttributes>,
        readonly proposedRepairActions: OPTIONAL<ProposedRepairActions>,
        readonly additionalText: OPTIONAL<AdditionalText>,
        readonly additionalInformation: OPTIONAL<AdditionalInformation>
    ) {}

    public static _from_object(
        _o: { [_K in keyof AlarmSynchronizationData]: AlarmSynchronizationData[_K] }
    ): AlarmSynchronizationData {
        return new AlarmSynchronizationData(
            _o.alarmManagedObjectClass,
            _o.alarmManagedObjectInstance,
            _o.eventTime,
            _o.eventType,
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

    public static _enum_for_perceivedSeverity = _enum_for_PerceivedSeverity;
    public static _enum_for_trendIndication = _enum_for_TrendIndication;
}

export const _root_component_type_list_1_spec_for_AlarmSynchronizationData: $.ComponentSpec[] = [
    new $.ComponentSpec("alarmManagedObjectClass", false, $.hasAnyTag),
    new $.ComponentSpec("alarmManagedObjectInstance", false, $.hasAnyTag),
    new $.ComponentSpec("eventTime", true, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("eventType", false, $.hasAnyTag),
    new $.ComponentSpec("probableCause", false, $.hasAnyTag),
    new $.ComponentSpec("specificProblems", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("perceivedSeverity", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("backedUpStatus", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("backUpObject", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("trendIndication", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("thresholdInfo", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("notificationIdentifier", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("correlatedNotifications", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("stateChangeDefinition", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("monitoredAttributes", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("proposedRepairActions", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("additionalText", true, $.hasTag(_TagClass.universal, 25)),
    new $.ComponentSpec("additionalInformation", true, $.hasTag(_TagClass.context, 10)),
];

export const _root_component_type_list_2_spec_for_AlarmSynchronizationData: $.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AlarmSynchronizationData: $.ComponentSpec[] = [];

let _cached_decoder_for_AlarmSynchronizationData: $.ASN1Decoder<AlarmSynchronizationData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlarmSynchronizationData
 */
export function _decode_AlarmSynchronizationData(el: _Element): AlarmSynchronizationData {
    if (!_cached_decoder_for_AlarmSynchronizationData) {
        _cached_decoder_for_AlarmSynchronizationData = function (
            el: _Element
        ): AlarmSynchronizationData {
            let alarmManagedObjectClass!: ObjectClass;
            let alarmManagedObjectInstance!: ObjectInstance;
            let eventTime: OPTIONAL<EventTime>;
            let eventType!: EventTypeId;
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
                alarmManagedObjectClass: (_el: _Element): void => {
                    alarmManagedObjectClass = _decode_ObjectClass(_el);
                },
                alarmManagedObjectInstance: (_el: _Element): void => {
                    alarmManagedObjectInstance = _decode_ObjectInstance(_el);
                },
                eventTime: (_el: _Element): void => {
                    eventTime = _decode_EventTime(_el);
                },
                eventType: (_el: _Element): void => {
                    eventType = _decode_EventTypeId(_el);
                },
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
                _root_component_type_list_1_spec_for_AlarmSynchronizationData,
                _extension_additions_list_spec_for_AlarmSynchronizationData,
                _root_component_type_list_2_spec_for_AlarmSynchronizationData,
                undefined
            );
            return new AlarmSynchronizationData(
                alarmManagedObjectClass,
                alarmManagedObjectInstance,
                eventTime,
                eventType,
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
    return _cached_decoder_for_AlarmSynchronizationData(el);
}

let _cached_encoder_for_AlarmSynchronizationData: $.ASN1Encoder<AlarmSynchronizationData> | null = null;

/**
 * @summary Encodes a(n) AlarmSynchronizationData into an ASN.1 Element.
 */
export function _encode_AlarmSynchronizationData(
    value: AlarmSynchronizationData,
    elGetter: $.ASN1Encoder<AlarmSynchronizationData>
): _Element {
    if (!_cached_encoder_for_AlarmSynchronizationData) {
        _cached_encoder_for_AlarmSynchronizationData = function (
            value: AlarmSynchronizationData
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        _encode_ObjectClass(value.alarmManagedObjectClass, $.BER),
                        _encode_ObjectInstance(value.alarmManagedObjectInstance, $.BER),
                        value.eventTime === undefined
                            ? undefined
                            : _encode_EventTime(value.eventTime, $.BER),
                        _encode_EventTypeId(value.eventType, $.BER),
                        _encode_ProbableCause(value.probableCause, $.BER),
                        value.specificProblems === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_SpecificProblems,
                                  $.BER
                              )(value.specificProblems, $.BER),
                        _encode_PerceivedSeverity(value.perceivedSeverity, $.BER),
                        value.backedUpStatus === undefined
                            ? undefined
                            : _encode_BackedUpStatus(value.backedUpStatus, $.BER),
                        value.backUpObject === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ObjectInstance,
                                  $.BER
                              )(value.backUpObject, $.BER),
                        value.trendIndication === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_TrendIndication,
                                  $.BER
                              )(value.trendIndication, $.BER),
                        value.thresholdInfo === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_ThresholdInfo,
                                  $.BER
                              )(value.thresholdInfo, $.BER),
                        value.notificationIdentifier === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_NotificationIdentifier,
                                  $.BER
                              )(value.notificationIdentifier, $.BER),
                        value.correlatedNotifications === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_CorrelatedNotifications,
                                  $.BER
                              )(value.correlatedNotifications, $.BER),
                        value.stateChangeDefinition === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  7,
                                  () => _encode_AttributeValueChangeDefinition,
                                  $.BER
                              )(value.stateChangeDefinition, $.BER),
                        value.monitoredAttributes === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  8,
                                  () => _encode_MonitoredAttributes,
                                  $.BER
                              )(value.monitoredAttributes, $.BER),
                        value.proposedRepairActions === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  9,
                                  () => _encode_ProposedRepairActions,
                                  $.BER
                              )(value.proposedRepairActions, $.BER),
                        value.additionalText === undefined
                            ? undefined
                            : _encode_AdditionalText(value.additionalText, $.BER),
                        value.additionalInformation === undefined
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
    return _cached_encoder_for_AlarmSynchronizationData(value, elGetter);
}

/* eslint-enable */
