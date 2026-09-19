/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { PeriodicCommunicationIndicator, _decode_PeriodicCommunicationIndicator, _encode_PeriodicCommunicationIndicator, _enum_for_PeriodicCommunicationIndicator } from "../TS33128Payloads/PeriodicCommunicationIndicator.ta.mjs";
// export { PeriodicCommunicationIndicator, _enum_for_PeriodicCommunicationIndicator, PeriodicCommunicationIndicator_periodic /* IMPORTED_LONG_ENUMERATION_ITEM */, periodic /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodicCommunicationIndicator_nonPeriodic /* IMPORTED_LONG_ENUMERATION_ITEM */, nonPeriodic /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PeriodicCommunicationIndicator, _encode_PeriodicCommunicationIndicator } from "../TS33128Payloads/PeriodicCommunicationIndicator.ta.mjs";
import { ScheduledCommunicationTime, _decode_ScheduledCommunicationTime, _encode_ScheduledCommunicationTime } from "../TS33128Payloads/ScheduledCommunicationTime.ta.mjs";
// export { ScheduledCommunicationTime, _decode_ScheduledCommunicationTime, _encode_ScheduledCommunicationTime } from "../TS33128Payloads/ScheduledCommunicationTime.ta.mjs";
import { ScheduledCommunicationType, _decode_ScheduledCommunicationType, _encode_ScheduledCommunicationType, _enum_for_ScheduledCommunicationType } from "../TS33128Payloads/ScheduledCommunicationType.ta.mjs";
// export { ScheduledCommunicationType, _enum_for_ScheduledCommunicationType, ScheduledCommunicationType_downlinkOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, downlinkOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, ScheduledCommunicationType_uplinkOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, uplinkOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, ScheduledCommunicationType_bidirectional /* IMPORTED_LONG_ENUMERATION_ITEM */, bidirectional /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ScheduledCommunicationType, _encode_ScheduledCommunicationType } from "../TS33128Payloads/ScheduledCommunicationType.ta.mjs";
import { StationaryIndication, _decode_StationaryIndication, _encode_StationaryIndication, _enum_for_StationaryIndication } from "../TS33128Payloads/StationaryIndication.ta.mjs";
// export { StationaryIndication, _enum_for_StationaryIndication, StationaryIndication_stationary /* IMPORTED_LONG_ENUMERATION_ITEM */, stationary /* IMPORTED_SHORT_ENUMERATION_ITEM */, StationaryIndication_mobile /* IMPORTED_LONG_ENUMERATION_ITEM */, mobile /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_StationaryIndication, _encode_StationaryIndication } from "../TS33128Payloads/StationaryIndication.ta.mjs";
import { BatteryIndication, _decode_BatteryIndication, _encode_BatteryIndication, _enum_for_BatteryIndication } from "../TS33128Payloads/BatteryIndication.ta.mjs";
// export { BatteryIndication, _enum_for_BatteryIndication, BatteryIndication_batteryRecharge /* IMPORTED_LONG_ENUMERATION_ITEM */, batteryRecharge /* IMPORTED_SHORT_ENUMERATION_ITEM */, BatteryIndication_batteryReplace /* IMPORTED_LONG_ENUMERATION_ITEM */, batteryReplace /* IMPORTED_SHORT_ENUMERATION_ITEM */, BatteryIndication_batteryNoRecharge /* IMPORTED_LONG_ENUMERATION_ITEM */, batteryNoRecharge /* IMPORTED_SHORT_ENUMERATION_ITEM */, BatteryIndication_batteryNoReplace /* IMPORTED_LONG_ENUMERATION_ITEM */, batteryNoReplace /* IMPORTED_SHORT_ENUMERATION_ITEM */, BatteryIndication_noBattery /* IMPORTED_LONG_ENUMERATION_ITEM */, noBattery /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_BatteryIndication, _encode_BatteryIndication } from "../TS33128Payloads/BatteryIndication.ta.mjs";
import { TrafficProfile, _decode_TrafficProfile, _encode_TrafficProfile, _enum_for_TrafficProfile } from "../TS33128Payloads/TrafficProfile.ta.mjs";
// export { TrafficProfile, _enum_for_TrafficProfile, TrafficProfile_singleTransUL /* IMPORTED_LONG_ENUMERATION_ITEM */, singleTransUL /* IMPORTED_SHORT_ENUMERATION_ITEM */, TrafficProfile_singleTransDL /* IMPORTED_LONG_ENUMERATION_ITEM */, singleTransDL /* IMPORTED_SHORT_ENUMERATION_ITEM */, TrafficProfile_dualTransULFirst /* IMPORTED_LONG_ENUMERATION_ITEM */, dualTransULFirst /* IMPORTED_SHORT_ENUMERATION_ITEM */, TrafficProfile_dualTransDLFirst /* IMPORTED_LONG_ENUMERATION_ITEM */, dualTransDLFirst /* IMPORTED_SHORT_ENUMERATION_ITEM */, TrafficProfile_multiTrans /* IMPORTED_LONG_ENUMERATION_ITEM */, multiTrans /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TrafficProfile, _encode_TrafficProfile } from "../TS33128Payloads/TrafficProfile.ta.mjs";
import { UMTLocationArea5G, _decode_UMTLocationArea5G, _encode_UMTLocationArea5G } from "../TS33128Payloads/UMTLocationArea5G.ta.mjs";
// export { UMTLocationArea5G, _decode_UMTLocationArea5G, _encode_UMTLocationArea5G } from "../TS33128Payloads/UMTLocationArea5G.ta.mjs";
import { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
// export { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";


/**
 * @summary SCEFCommunicationPatternUpdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFCommunicationPatternUpdate ::= SEQUENCE
 * {
 *     mSISDN                                [1] MSISDN OPTIONAL,
 *     externalIdentifier                    [2] NAI OPTIONAL,
 *     periodicCommunicationIndicator        [3] PeriodicCommunicationIndicator OPTIONAL,
 *     communicationDurationTime             [4] INTEGER OPTIONAL,
 *     periodicTime                          [5] INTEGER OPTIONAL,
 *     scheduledCommunicationTime            [6] ScheduledCommunicationTime OPTIONAL,
 *     scheduledCommunicationType            [7] ScheduledCommunicationType OPTIONAL,
 *     stationaryIndication                  [8] StationaryIndication OPTIONAL,
 *     batteryIndication                     [9] BatteryIndication OPTIONAL,
 *     trafficProfile                        [10] TrafficProfile OPTIONAL,
 *     expectedUEMovingTrajectory            [11] SEQUENCE OF UMTLocationArea5G OPTIONAL,
 *     sCSASID                               [13] SCSASID,
 *     validityTime                          [14] Timestamp OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SCEFCommunicationPatternUpdate {
    constructor (
        /**
         * @summary `mSISDN`.
         * @public
         * @readonly
         */
        readonly mSISDN: OPTIONAL<MSISDN>,
        /**
         * @summary `externalIdentifier`.
         * @public
         * @readonly
         */
        readonly externalIdentifier: OPTIONAL<NAI>,
        /**
         * @summary `periodicCommunicationIndicator`.
         * @public
         * @readonly
         */
        readonly periodicCommunicationIndicator: OPTIONAL<PeriodicCommunicationIndicator>,
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
         * @summary `stationaryIndication`.
         * @public
         * @readonly
         */
        readonly stationaryIndication: OPTIONAL<StationaryIndication>,
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
         * @summary `expectedUEMovingTrajectory`.
         * @public
         * @readonly
         */
        readonly expectedUEMovingTrajectory: OPTIONAL<UMTLocationArea5G[]>,
        /**
         * @summary `sCSASID`.
         * @public
         * @readonly
         */
        readonly sCSASID: SCSASID,
        /**
         * @summary `validityTime`.
         * @public
         * @readonly
         */
        readonly validityTime: OPTIONAL<Timestamp>
    ) {}

    /**
     * @summary Restructures an object into a SCEFCommunicationPatternUpdate
     * @description
     * 
     * This takes an `object` and converts it to a `SCEFCommunicationPatternUpdate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCEFCommunicationPatternUpdate`.
     * @returns {SCEFCommunicationPatternUpdate}
     */
    public static _from_object (_o: { [_K in keyof (SCEFCommunicationPatternUpdate)]: (SCEFCommunicationPatternUpdate)[_K] }): SCEFCommunicationPatternUpdate {
        return new SCEFCommunicationPatternUpdate(_o.mSISDN, _o.externalIdentifier, _o.periodicCommunicationIndicator, _o.communicationDurationTime, _o.periodicTime, _o.scheduledCommunicationTime, _o.scheduledCommunicationType, _o.stationaryIndication, _o.batteryIndication, _o.trafficProfile, _o.expectedUEMovingTrajectory, _o.sCSASID, _o.validityTime);
    }

        /**
         * @summary The enum used as the type of the component `periodicCommunicationIndicator`
         * @public
         * @static
         */

    public static _enum_for_periodicCommunicationIndicator = _enum_for_PeriodicCommunicationIndicator;        /**
         * @summary The enum used as the type of the component `scheduledCommunicationType`
         * @public
         * @static
         */

    public static _enum_for_scheduledCommunicationType = _enum_for_ScheduledCommunicationType;        /**
         * @summary The enum used as the type of the component `stationaryIndication`
         * @public
         * @static
         */

    public static _enum_for_stationaryIndication = _enum_for_StationaryIndication;        /**
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
 * @summary The Leading Root Component Types of SCEFCommunicationPatternUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCEFCommunicationPatternUpdate: $.ComponentSpec[] = [
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("externalIdentifier", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("periodicCommunicationIndicator", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("communicationDurationTime", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("periodicTime", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("scheduledCommunicationTime", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("scheduledCommunicationType", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("stationaryIndication", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("batteryIndication", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("trafficProfile", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("expectedUEMovingTrajectory", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("sCSASID", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("validityTime", true, $.hasTag(_TagClass.context, 14))
];

/**
 * @summary The Trailing Root Component Types of SCEFCommunicationPatternUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCEFCommunicationPatternUpdate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCEFCommunicationPatternUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCEFCommunicationPatternUpdate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCEFCommunicationPatternUpdate: $.ASN1Decoder<SCEFCommunicationPatternUpdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCEFCommunicationPatternUpdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCEFCommunicationPatternUpdate (el: _Element): SCEFCommunicationPatternUpdate {
    if (!_cached_decoder_for_SCEFCommunicationPatternUpdate) { _cached_decoder_for_SCEFCommunicationPatternUpdate = function (el: _Element): SCEFCommunicationPatternUpdate {
    let mSISDN: OPTIONAL<MSISDN>;
    let externalIdentifier: OPTIONAL<NAI>;
    let periodicCommunicationIndicator: OPTIONAL<PeriodicCommunicationIndicator>;
    let communicationDurationTime: OPTIONAL<INTEGER>;
    let periodicTime: OPTIONAL<INTEGER>;
    let scheduledCommunicationTime: OPTIONAL<ScheduledCommunicationTime>;
    let scheduledCommunicationType: OPTIONAL<ScheduledCommunicationType>;
    let stationaryIndication: OPTIONAL<StationaryIndication>;
    let batteryIndication: OPTIONAL<BatteryIndication>;
    let trafficProfile: OPTIONAL<TrafficProfile>;
    let expectedUEMovingTrajectory: OPTIONAL<UMTLocationArea5G[]>;
    let sCSASID!: SCSASID;
    let validityTime: OPTIONAL<Timestamp>;
    const callbacks: $.DecodingMap = {
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "externalIdentifier": (_el: _Element): void => { externalIdentifier = $._decode_implicit<NAI>(() => _decode_NAI)(_el); },
        "periodicCommunicationIndicator": (_el: _Element): void => { periodicCommunicationIndicator = $._decode_implicit<PeriodicCommunicationIndicator>(() => _decode_PeriodicCommunicationIndicator)(_el); },
        "communicationDurationTime": (_el: _Element): void => { communicationDurationTime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "periodicTime": (_el: _Element): void => { periodicTime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "scheduledCommunicationTime": (_el: _Element): void => { scheduledCommunicationTime = $._decode_implicit<ScheduledCommunicationTime>(() => _decode_ScheduledCommunicationTime)(_el); },
        "scheduledCommunicationType": (_el: _Element): void => { scheduledCommunicationType = $._decode_implicit<ScheduledCommunicationType>(() => _decode_ScheduledCommunicationType)(_el); },
        "stationaryIndication": (_el: _Element): void => { stationaryIndication = $._decode_implicit<StationaryIndication>(() => _decode_StationaryIndication)(_el); },
        "batteryIndication": (_el: _Element): void => { batteryIndication = $._decode_implicit<BatteryIndication>(() => _decode_BatteryIndication)(_el); },
        "trafficProfile": (_el: _Element): void => { trafficProfile = $._decode_implicit<TrafficProfile>(() => _decode_TrafficProfile)(_el); },
        "expectedUEMovingTrajectory": (_el: _Element): void => { expectedUEMovingTrajectory = $._decode_implicit<UMTLocationArea5G[]>(() => $._decodeSequenceOf<UMTLocationArea5G>(() => _decode_UMTLocationArea5G))(_el); },
        "sCSASID": (_el: _Element): void => { sCSASID = $._decode_implicit<SCSASID>(() => _decode_SCSASID)(_el); },
        "validityTime": (_el: _Element): void => { validityTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SCEFCommunicationPatternUpdate,
        _extension_additions_list_spec_for_SCEFCommunicationPatternUpdate,
        _root_component_type_list_2_spec_for_SCEFCommunicationPatternUpdate,
        undefined,
    );
    return new SCEFCommunicationPatternUpdate(
        mSISDN,
        externalIdentifier,
        periodicCommunicationIndicator,
        communicationDurationTime,
        periodicTime,
        scheduledCommunicationTime,
        scheduledCommunicationType,
        stationaryIndication,
        batteryIndication,
        trafficProfile,
        expectedUEMovingTrajectory,
        sCSASID,
        validityTime
    );
}; }
    return _cached_decoder_for_SCEFCommunicationPatternUpdate(el);
}

let _cached_encoder_for_SCEFCommunicationPatternUpdate: $.ASN1Encoder<SCEFCommunicationPatternUpdate> | null = null;

/**
 * @summary Encodes a(n) SCEFCommunicationPatternUpdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCEFCommunicationPatternUpdate, encoded as an ASN.1 Element.
 */
export
function _encode_SCEFCommunicationPatternUpdate (value: SCEFCommunicationPatternUpdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCEFCommunicationPatternUpdate) { _cached_encoder_for_SCEFCommunicationPatternUpdate = function (value: SCEFCommunicationPatternUpdate, elGetter: $.ASN1Encoder<SCEFCommunicationPatternUpdate>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.mSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.externalIdentifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_NAI, $.BER)(value.externalIdentifier, $.BER)),
            /* IF_ABSENT  */ ((value.periodicCommunicationIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_PeriodicCommunicationIndicator, $.BER)(value.periodicCommunicationIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.communicationDurationTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.communicationDurationTime, $.BER)),
            /* IF_ABSENT  */ ((value.periodicTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.periodicTime, $.BER)),
            /* IF_ABSENT  */ ((value.scheduledCommunicationTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ScheduledCommunicationTime, $.BER)(value.scheduledCommunicationTime, $.BER)),
            /* IF_ABSENT  */ ((value.scheduledCommunicationType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ScheduledCommunicationType, $.BER)(value.scheduledCommunicationType, $.BER)),
            /* IF_ABSENT  */ ((value.stationaryIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_StationaryIndication, $.BER)(value.stationaryIndication, $.BER)),
            /* IF_ABSENT  */ ((value.batteryIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_BatteryIndication, $.BER)(value.batteryIndication, $.BER)),
            /* IF_ABSENT  */ ((value.trafficProfile === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_TrafficProfile, $.BER)(value.trafficProfile, $.BER)),
            /* IF_ABSENT  */ ((value.expectedUEMovingTrajectory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeSequenceOf<UMTLocationArea5G>(() => _encode_UMTLocationArea5G, $.BER), $.BER)(value.expectedUEMovingTrajectory, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => _encode_SCSASID, $.BER)(value.sCSASID, $.BER),
            /* IF_ABSENT  */ ((value.validityTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_Timestamp, $.BER)(value.validityTime, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SCEFCommunicationPatternUpdate(value, elGetter);
}


/* eslint-enable */
