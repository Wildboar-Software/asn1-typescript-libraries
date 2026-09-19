/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { UMTLocationArea5G, _decode_UMTLocationArea5G, _encode_UMTLocationArea5G } from "../TS33128Payloads/UMTLocationArea5G.ta.mjs";
// export { UMTLocationArea5G, _decode_UMTLocationArea5G, _encode_UMTLocationArea5G } from "../TS33128Payloads/UMTLocationArea5G.ta.mjs";
import { StationaryIndication, _decode_StationaryIndication, _encode_StationaryIndication, _enum_for_StationaryIndication } from "../TS33128Payloads/StationaryIndication.ta.mjs";
// export { StationaryIndication, _enum_for_StationaryIndication, StationaryIndication_stationary /* IMPORTED_LONG_ENUMERATION_ITEM */, stationary /* IMPORTED_SHORT_ENUMERATION_ITEM */, StationaryIndication_mobile /* IMPORTED_LONG_ENUMERATION_ITEM */, mobile /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_StationaryIndication, _encode_StationaryIndication } from "../TS33128Payloads/StationaryIndication.ta.mjs";
import { ScheduledCommunicationTime, _decode_ScheduledCommunicationTime, _encode_ScheduledCommunicationTime } from "../TS33128Payloads/ScheduledCommunicationTime.ta.mjs";
// export { ScheduledCommunicationTime, _decode_ScheduledCommunicationTime, _encode_ScheduledCommunicationTime } from "../TS33128Payloads/ScheduledCommunicationTime.ta.mjs";
import { ScheduledCommunicationType, _decode_ScheduledCommunicationType, _encode_ScheduledCommunicationType, _enum_for_ScheduledCommunicationType } from "../TS33128Payloads/ScheduledCommunicationType.ta.mjs";
// export { ScheduledCommunicationType, _enum_for_ScheduledCommunicationType, ScheduledCommunicationType_downlinkOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, downlinkOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, ScheduledCommunicationType_uplinkOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, uplinkOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, ScheduledCommunicationType_bidirectional /* IMPORTED_LONG_ENUMERATION_ITEM */, bidirectional /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ScheduledCommunicationType, _encode_ScheduledCommunicationType } from "../TS33128Payloads/ScheduledCommunicationType.ta.mjs";
import { BatteryIndication, _decode_BatteryIndication, _encode_BatteryIndication, _enum_for_BatteryIndication } from "../TS33128Payloads/BatteryIndication.ta.mjs";
// export { BatteryIndication, _enum_for_BatteryIndication, BatteryIndication_batteryRecharge /* IMPORTED_LONG_ENUMERATION_ITEM */, batteryRecharge /* IMPORTED_SHORT_ENUMERATION_ITEM */, BatteryIndication_batteryReplace /* IMPORTED_LONG_ENUMERATION_ITEM */, batteryReplace /* IMPORTED_SHORT_ENUMERATION_ITEM */, BatteryIndication_batteryNoRecharge /* IMPORTED_LONG_ENUMERATION_ITEM */, batteryNoRecharge /* IMPORTED_SHORT_ENUMERATION_ITEM */, BatteryIndication_batteryNoReplace /* IMPORTED_LONG_ENUMERATION_ITEM */, batteryNoReplace /* IMPORTED_SHORT_ENUMERATION_ITEM */, BatteryIndication_noBattery /* IMPORTED_LONG_ENUMERATION_ITEM */, noBattery /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_BatteryIndication, _encode_BatteryIndication } from "../TS33128Payloads/BatteryIndication.ta.mjs";
import { TrafficProfile, _decode_TrafficProfile, _encode_TrafficProfile, _enum_for_TrafficProfile } from "../TS33128Payloads/TrafficProfile.ta.mjs";
// export { TrafficProfile, _enum_for_TrafficProfile, TrafficProfile_singleTransUL /* IMPORTED_LONG_ENUMERATION_ITEM */, singleTransUL /* IMPORTED_SHORT_ENUMERATION_ITEM */, TrafficProfile_singleTransDL /* IMPORTED_LONG_ENUMERATION_ITEM */, singleTransDL /* IMPORTED_SHORT_ENUMERATION_ITEM */, TrafficProfile_dualTransULFirst /* IMPORTED_LONG_ENUMERATION_ITEM */, dualTransULFirst /* IMPORTED_SHORT_ENUMERATION_ITEM */, TrafficProfile_dualTransDLFirst /* IMPORTED_LONG_ENUMERATION_ITEM */, dualTransDLFirst /* IMPORTED_SHORT_ENUMERATION_ITEM */, TrafficProfile_multiTrans /* IMPORTED_LONG_ENUMERATION_ITEM */, multiTrans /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TrafficProfile, _encode_TrafficProfile } from "../TS33128Payloads/TrafficProfile.ta.mjs";
import { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
// export { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";


/**
 * @summary NEFExpectedUEBehaviourUpdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFExpectedUEBehaviourUpdate ::= SEQUENCE
 * {
 *     gPSI                                  [1] GPSI,
 *     expectedUEMovingTrajectory            [2] SEQUENCE OF UMTLocationArea5G OPTIONAL,
 *     stationaryIndication                  [3] StationaryIndication OPTIONAL,
 *     communicationDurationTime             [4] INTEGER OPTIONAL,
 *     periodicTime                          [5] INTEGER OPTIONAL,
 *     scheduledCommunicationTime            [6] ScheduledCommunicationTime OPTIONAL,
 *     scheduledCommunicationType            [7] ScheduledCommunicationType OPTIONAL,
 *     batteryIndication                     [8] BatteryIndication OPTIONAL,
 *     trafficProfile                        [9] TrafficProfile OPTIONAL,
 *     expectedTimeAndDayOfWeekInTrajectory  [10] SEQUENCE OF UMTLocationArea5G OPTIONAL,
 *     aFID                                  [11] AFID,
 *     validityTime                          [12] Timestamp OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NEFExpectedUEBehaviourUpdate {
    constructor (
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: GPSI,
        /**
         * @summary `expectedUEMovingTrajectory`.
         * @public
         * @readonly
         */
        readonly expectedUEMovingTrajectory: OPTIONAL<UMTLocationArea5G[]>,
        /**
         * @summary `stationaryIndication`.
         * @public
         * @readonly
         */
        readonly stationaryIndication: OPTIONAL<StationaryIndication>,
        /**
         * @summary `communicationDurationTime`.
         * @public
         * @readonly
         */
        readonly communicationDurationTime: OPTIONAL<INTEGER>,
        /**
         * @summary `periodicTime`.
         * @public
         * @readonly
         */
        readonly periodicTime: OPTIONAL<INTEGER>,
        /**
         * @summary `scheduledCommunicationTime`.
         * @public
         * @readonly
         */
        readonly scheduledCommunicationTime: OPTIONAL<ScheduledCommunicationTime>,
        /**
         * @summary `scheduledCommunicationType`.
         * @public
         * @readonly
         */
        readonly scheduledCommunicationType: OPTIONAL<ScheduledCommunicationType>,
        /**
         * @summary `batteryIndication`.
         * @public
         * @readonly
         */
        readonly batteryIndication: OPTIONAL<BatteryIndication>,
        /**
         * @summary `trafficProfile`.
         * @public
         * @readonly
         */
        readonly trafficProfile: OPTIONAL<TrafficProfile>,
        /**
         * @summary `expectedTimeAndDayOfWeekInTrajectory`.
         * @public
         * @readonly
         */
        readonly expectedTimeAndDayOfWeekInTrajectory: OPTIONAL<UMTLocationArea5G[]>,
        /**
         * @summary `aFID`.
         * @public
         * @readonly
         */
        readonly aFID: AFID,
        /**
         * @summary `validityTime`.
         * @public
         * @readonly
         */
        readonly validityTime: OPTIONAL<Timestamp>
    ) {}

    /**
     * @summary Restructures an object into a NEFExpectedUEBehaviourUpdate
     * @description
     * 
     * This takes an `object` and converts it to a `NEFExpectedUEBehaviourUpdate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NEFExpectedUEBehaviourUpdate`.
     * @returns {NEFExpectedUEBehaviourUpdate}
     */
    public static _from_object (_o: { [_K in keyof (NEFExpectedUEBehaviourUpdate)]: (NEFExpectedUEBehaviourUpdate)[_K] }): NEFExpectedUEBehaviourUpdate {
        return new NEFExpectedUEBehaviourUpdate(_o.gPSI, _o.expectedUEMovingTrajectory, _o.stationaryIndication, _o.communicationDurationTime, _o.periodicTime, _o.scheduledCommunicationTime, _o.scheduledCommunicationType, _o.batteryIndication, _o.trafficProfile, _o.expectedTimeAndDayOfWeekInTrajectory, _o.aFID, _o.validityTime);
    }

        /**
         * @summary The enum used as the type of the component `stationaryIndication`
         * @public
         * @static
         */

    public static _enum_for_stationaryIndication = _enum_for_StationaryIndication;        /**
         * @summary The enum used as the type of the component `scheduledCommunicationType`
         * @public
         * @static
         */

    public static _enum_for_scheduledCommunicationType = _enum_for_ScheduledCommunicationType;        /**
         * @summary The enum used as the type of the component `batteryIndication`
         * @public
         * @static
         */

    public static _enum_for_batteryIndication = _enum_for_BatteryIndication;        /**
         * @summary The enum used as the type of the component `trafficProfile`
         * @public
         * @static
         */

    public static _enum_for_trafficProfile = _enum_for_TrafficProfile;
}

/**
 * @summary The Leading Root Component Types of NEFExpectedUEBehaviourUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NEFExpectedUEBehaviourUpdate: $.ComponentSpec[] = [
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("expectedUEMovingTrajectory", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("stationaryIndication", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("communicationDurationTime", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("periodicTime", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("scheduledCommunicationTime", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("scheduledCommunicationType", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("batteryIndication", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("trafficProfile", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("expectedTimeAndDayOfWeekInTrajectory", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("aFID", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("validityTime", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of NEFExpectedUEBehaviourUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NEFExpectedUEBehaviourUpdate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NEFExpectedUEBehaviourUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NEFExpectedUEBehaviourUpdate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NEFExpectedUEBehaviourUpdate: $.ASN1Decoder<NEFExpectedUEBehaviourUpdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEFExpectedUEBehaviourUpdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEFExpectedUEBehaviourUpdate (el: _Element): NEFExpectedUEBehaviourUpdate {
    if (!_cached_decoder_for_NEFExpectedUEBehaviourUpdate) { _cached_decoder_for_NEFExpectedUEBehaviourUpdate = function (el: _Element): NEFExpectedUEBehaviourUpdate {
    let gPSI!: GPSI;
    let expectedUEMovingTrajectory: OPTIONAL<UMTLocationArea5G[]>;
    let stationaryIndication: OPTIONAL<StationaryIndication>;
    let communicationDurationTime: OPTIONAL<INTEGER>;
    let periodicTime: OPTIONAL<INTEGER>;
    let scheduledCommunicationTime: OPTIONAL<ScheduledCommunicationTime>;
    let scheduledCommunicationType: OPTIONAL<ScheduledCommunicationType>;
    let batteryIndication: OPTIONAL<BatteryIndication>;
    let trafficProfile: OPTIONAL<TrafficProfile>;
    let expectedTimeAndDayOfWeekInTrajectory: OPTIONAL<UMTLocationArea5G[]>;
    let aFID!: AFID;
    let validityTime: OPTIONAL<Timestamp>;
    const callbacks: $.DecodingMap = {
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "expectedUEMovingTrajectory": (_el: _Element): void => { expectedUEMovingTrajectory = $._decode_implicit<UMTLocationArea5G[]>(() => $._decodeSequenceOf<UMTLocationArea5G>(() => _decode_UMTLocationArea5G))(_el); },
        "stationaryIndication": (_el: _Element): void => { stationaryIndication = $._decode_implicit<StationaryIndication>(() => _decode_StationaryIndication)(_el); },
        "communicationDurationTime": (_el: _Element): void => { communicationDurationTime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "periodicTime": (_el: _Element): void => { periodicTime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "scheduledCommunicationTime": (_el: _Element): void => { scheduledCommunicationTime = $._decode_implicit<ScheduledCommunicationTime>(() => _decode_ScheduledCommunicationTime)(_el); },
        "scheduledCommunicationType": (_el: _Element): void => { scheduledCommunicationType = $._decode_implicit<ScheduledCommunicationType>(() => _decode_ScheduledCommunicationType)(_el); },
        "batteryIndication": (_el: _Element): void => { batteryIndication = $._decode_implicit<BatteryIndication>(() => _decode_BatteryIndication)(_el); },
        "trafficProfile": (_el: _Element): void => { trafficProfile = $._decode_implicit<TrafficProfile>(() => _decode_TrafficProfile)(_el); },
        "expectedTimeAndDayOfWeekInTrajectory": (_el: _Element): void => { expectedTimeAndDayOfWeekInTrajectory = $._decode_implicit<UMTLocationArea5G[]>(() => $._decodeSequenceOf<UMTLocationArea5G>(() => _decode_UMTLocationArea5G))(_el); },
        "aFID": (_el: _Element): void => { aFID = $._decode_implicit<AFID>(() => _decode_AFID)(_el); },
        "validityTime": (_el: _Element): void => { validityTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NEFExpectedUEBehaviourUpdate,
        _extension_additions_list_spec_for_NEFExpectedUEBehaviourUpdate,
        _root_component_type_list_2_spec_for_NEFExpectedUEBehaviourUpdate,
        undefined,
    );
    return new NEFExpectedUEBehaviourUpdate(
        gPSI,
        expectedUEMovingTrajectory,
        stationaryIndication,
        communicationDurationTime,
        periodicTime,
        scheduledCommunicationTime,
        scheduledCommunicationType,
        batteryIndication,
        trafficProfile,
        expectedTimeAndDayOfWeekInTrajectory,
        aFID,
        validityTime
    );
}; }
    return _cached_decoder_for_NEFExpectedUEBehaviourUpdate(el);
}

let _cached_encoder_for_NEFExpectedUEBehaviourUpdate: $.ASN1Encoder<NEFExpectedUEBehaviourUpdate> | null = null;

/**
 * @summary Encodes a(n) NEFExpectedUEBehaviourUpdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEFExpectedUEBehaviourUpdate, encoded as an ASN.1 Element.
 */
export
function _encode_NEFExpectedUEBehaviourUpdate (value: NEFExpectedUEBehaviourUpdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEFExpectedUEBehaviourUpdate) { _cached_encoder_for_NEFExpectedUEBehaviourUpdate = function (value: NEFExpectedUEBehaviourUpdate, elGetter: $.ASN1Encoder<NEFExpectedUEBehaviourUpdate>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GPSI, $.BER)(value.gPSI, $.BER),
            /* IF_ABSENT  */ ((value.expectedUEMovingTrajectory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<UMTLocationArea5G>(() => _encode_UMTLocationArea5G, $.BER), $.BER)(value.expectedUEMovingTrajectory, $.BER)),
            /* IF_ABSENT  */ ((value.stationaryIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_StationaryIndication, $.BER)(value.stationaryIndication, $.BER)),
            /* IF_ABSENT  */ ((value.communicationDurationTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.communicationDurationTime, $.BER)),
            /* IF_ABSENT  */ ((value.periodicTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.periodicTime, $.BER)),
            /* IF_ABSENT  */ ((value.scheduledCommunicationTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ScheduledCommunicationTime, $.BER)(value.scheduledCommunicationTime, $.BER)),
            /* IF_ABSENT  */ ((value.scheduledCommunicationType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ScheduledCommunicationType, $.BER)(value.scheduledCommunicationType, $.BER)),
            /* IF_ABSENT  */ ((value.batteryIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_BatteryIndication, $.BER)(value.batteryIndication, $.BER)),
            /* IF_ABSENT  */ ((value.trafficProfile === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_TrafficProfile, $.BER)(value.trafficProfile, $.BER)),
            /* IF_ABSENT  */ ((value.expectedTimeAndDayOfWeekInTrajectory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<UMTLocationArea5G>(() => _encode_UMTLocationArea5G, $.BER), $.BER)(value.expectedTimeAndDayOfWeekInTrajectory, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => _encode_AFID, $.BER)(value.aFID, $.BER),
            /* IF_ABSENT  */ ((value.validityTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_Timestamp, $.BER)(value.validityTime, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NEFExpectedUEBehaviourUpdate(value, elGetter);
}


/* eslint-enable */
