/* eslint-disable */
import {
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Trigger, _decode_Trigger, _encode_Trigger } from "../CHFChargingDataTypes/Trigger.ta.mjs";
import { FiveGQoSInformation, _decode_FiveGQoSInformation, _encode_FiveGQoSInformation } from "../CHFChargingDataTypes/FiveGQoSInformation.ta.mjs";
import { PresenceReportingAreaInfo, _decode_PresenceReportingAreaInfo, _encode_PresenceReportingAreaInfo } from "../CHFChargingDataTypes/PresenceReportingAreaInfo.ta.mjs";
import { ServingNetworkFunctionID, _decode_ServingNetworkFunctionID, _encode_ServingNetworkFunctionID } from "../CHFChargingDataTypes/ServingNetworkFunctionID.ta.mjs";
import { type ThreeGPPPSDataOffStatus, _decode_ThreeGPPPSDataOffStatus, _encode_ThreeGPPPSDataOffStatus, _enum_for_ThreeGPPPSDataOffStatus } from "../CHFChargingDataTypes/ThreeGPPPSDataOffStatus.ta.mjs";


/**
 * @summary MultipleQFIContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MultipleQFIContainer ::= SEQUENCE {
 *    qosFlowId                   [0] IMPLICIT INTEGER OPTIONAL,
 *    triggers                    [1] IMPLICIT SEQUENCE  OF
 *       Trigger,
 *    triggerTimeStamp            [2] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    dataTotalVolume             [3] IMPLICIT INTEGER OPTIONAL,
 *    dataVolumeUplink            [4] IMPLICIT INTEGER OPTIONAL,
 *    dataVolumeDownlink          [5] IMPLICIT INTEGER OPTIONAL,
 *    localSequenceNumber         [6] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    timeOfFirstUsage            [8] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    timeOfLastUsage             [9] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    qoSInformation              [10] IMPLICIT FiveGQoSInformation OPTIONAL,
 *    userLocationInformation     [11] IMPLICIT OCTET STRING OPTIONAL,
 *    uETimeZone                  [12] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    presenceReportingAreaInfo   [13] IMPLICIT PresenceReportingAreaInfo OPTIONAL,
 *    rATType                     [14] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    reportTime                  [15] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    servingNetworkFunctionID    [16] IMPLICIT SEQUENCE  OF
 *       ServingNetworkFunctionID OPTIONAL,
 *    threeGPPPSDataOffStatus     [17] IMPLICIT ThreeGPPPSDataOffStatus OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MultipleQFIContainer {
    /**
     * @summary `qosFlowId`.
     * @public
     * @readonly
     */
    readonly qosFlowId: OPTIONAL<INTEGER>;
    /**
     * @summary `triggers`.
     * @public
     * @readonly
     */
    readonly triggers: Trigger[];
    /**
     * @summary `triggerTimeStamp`.
     * @description
     *
     * This field holds the timestamp of the trigger.
     *
     * 3GPP TS 32.298 V20.1.0 table 5.1.5.0.1.
     *
     * @public
     * @readonly
     */
    readonly triggerTimeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `dataTotalVolume`.
     * @public
     * @readonly
     */
    readonly dataTotalVolume: OPTIONAL<INTEGER>;
    /**
     * @summary `dataVolumeUplink`.
     * @public
     * @readonly
     */
    readonly dataVolumeUplink: OPTIONAL<INTEGER>;
    /**
     * @summary `dataVolumeDownlink`.
     * @public
     * @readonly
     */
    readonly dataVolumeDownlink: OPTIONAL<INTEGER>;
    /**
     * @summary `localSequenceNumber`.
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `timeOfFirstUsage`.
     * @public
     * @readonly
     */
    readonly timeOfFirstUsage: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `timeOfLastUsage`.
     * @public
     * @readonly
     */
    readonly timeOfLastUsage: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `qoSInformation`.
     * @public
     * @readonly
     */
    readonly qoSInformation: OPTIONAL<FiveGQoSInformation>;
    /**
     * @summary `userLocationInformation`.
     * @description
     *
     * This field contains the User Location as described in TS 29.571 [249].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.15.
     *
     * @public
     * @readonly
     */
    readonly userLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `uETimeZone`.
     * @public
     * @readonly
     */
    readonly uETimeZone: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `presenceReportingAreaInfo`.
     * @public
     * @readonly
     */
    readonly presenceReportingAreaInfo: OPTIONAL<PresenceReportingAreaInfo>;
    /**
     * @summary `rATType`.
     * @description
     *
     * This field contains the Radio Access Technology (RAT) type used, as
     * provided to CHF, it's based on the RatType specified in TS 29.571 [249]
     * with 3GPP RAT Type specified in TS 29.061 [216] added for backwards
     * compatibility.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.17.
     *
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `reportTime`.
     * @public
     * @readonly
     */
    readonly reportTime: OCTET_STRING;
    /**
     * @summary `servingNetworkFunctionID`.
     * @public
     * @readonly
     */
    readonly servingNetworkFunctionID: OPTIONAL<ServingNetworkFunctionID[]>;
    /**
     * @summary `threeGPPPSDataOffStatus`.
     * @public
     * @readonly
     */
    readonly threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>;

    constructor (
        qosFlowId: OPTIONAL<INTEGER>,
        triggers: Trigger[],
        triggerTimeStamp: OPTIONAL<OCTET_STRING>,
        dataTotalVolume: OPTIONAL<INTEGER>,
        dataVolumeUplink: OPTIONAL<INTEGER>,
        dataVolumeDownlink: OPTIONAL<INTEGER>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        timeOfFirstUsage: OPTIONAL<OCTET_STRING>,
        timeOfLastUsage: OPTIONAL<OCTET_STRING>,
        qoSInformation: OPTIONAL<FiveGQoSInformation>,
        userLocationInformation: OPTIONAL<OCTET_STRING>,
        uETimeZone: OPTIONAL<OCTET_STRING>,
        presenceReportingAreaInfo: OPTIONAL<PresenceReportingAreaInfo>,
        rATType: OPTIONAL<INTEGER>,
        reportTime: OCTET_STRING,
        servingNetworkFunctionID?: OPTIONAL<ServingNetworkFunctionID[]>,
        threeGPPPSDataOffStatus?: OPTIONAL<ThreeGPPPSDataOffStatus>
    ) {
        this.qosFlowId = qosFlowId;
        this.triggers = triggers;
        this.triggerTimeStamp = triggerTimeStamp;
        this.dataTotalVolume = dataTotalVolume;
        this.dataVolumeUplink = dataVolumeUplink;
        this.dataVolumeDownlink = dataVolumeDownlink;
        this.localSequenceNumber = localSequenceNumber;
        this.timeOfFirstUsage = timeOfFirstUsage;
        this.timeOfLastUsage = timeOfLastUsage;
        this.qoSInformation = qoSInformation;
        this.userLocationInformation = userLocationInformation;
        this.uETimeZone = uETimeZone;
        this.presenceReportingAreaInfo = presenceReportingAreaInfo;
        this.rATType = rATType;
        this.reportTime = reportTime;
        this.servingNetworkFunctionID = servingNetworkFunctionID;
        this.threeGPPPSDataOffStatus = threeGPPPSDataOffStatus;
    
        if (this.triggerTimeStamp !== undefined && (this.triggerTimeStamp.length !== 9)) {
            throw new ASN1SizeError("MultipleQFIContainer.triggerTimeStamp violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("MultipleQFIContainer.localSequenceNumber violates INTEGER range");
        }
        if (this.timeOfFirstUsage !== undefined && (this.timeOfFirstUsage.length !== 9)) {
            throw new ASN1SizeError("MultipleQFIContainer.timeOfFirstUsage violates SIZE constraint");
        }
        if (this.timeOfLastUsage !== undefined && (this.timeOfLastUsage.length !== 9)) {
            throw new ASN1SizeError("MultipleQFIContainer.timeOfLastUsage violates SIZE constraint");
        }
        if (this.uETimeZone !== undefined && (this.uETimeZone.length !== 2)) {
            throw new ASN1SizeError("MultipleQFIContainer.uETimeZone violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("MultipleQFIContainer.rATType violates INTEGER range");
        }
        if ((this.reportTime.length !== 9)) {
            throw new ASN1SizeError("MultipleQFIContainer.reportTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MultipleQFIContainer
     * @description
     * 
     * This takes an `object` and converts it to a `MultipleQFIContainer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MultipleQFIContainer`.
     * @returns {MultipleQFIContainer}
     */
    public static _from_object (_o: { [_K in keyof (MultipleQFIContainer)]: (MultipleQFIContainer)[_K] }): MultipleQFIContainer {
        return new MultipleQFIContainer(_o.qosFlowId, _o.triggers, _o.triggerTimeStamp, _o.dataTotalVolume, _o.dataVolumeUplink, _o.dataVolumeDownlink, _o.localSequenceNumber, _o.timeOfFirstUsage, _o.timeOfLastUsage, _o.qoSInformation, _o.userLocationInformation, _o.uETimeZone, _o.presenceReportingAreaInfo, _o.rATType, _o.reportTime, _o.servingNetworkFunctionID, _o.threeGPPPSDataOffStatus);
    }

        /**
         * @summary The enum used as the type of the component `threeGPPPSDataOffStatus`
         * @public
         * @static
         */

    public static _enum_for_threeGPPPSDataOffStatus = _enum_for_ThreeGPPPSDataOffStatus;
}

/**
 * @summary The Leading Root Component Types of MultipleQFIContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MultipleQFIContainer: $.ComponentSpec[] = [
    new $.ComponentSpec("qosFlowId", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("triggers", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("triggerTimeStamp", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dataTotalVolume", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("dataVolumeUplink", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("dataVolumeDownlink", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("timeOfFirstUsage", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("timeOfLastUsage", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("qoSInformation", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("uETimeZone", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("presenceReportingAreaInfo", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("reportTime", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("servingNetworkFunctionID", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("threeGPPPSDataOffStatus", true, $.hasTag(_TagClass.context, 17))
];

/**
 * @summary The Trailing Root Component Types of MultipleQFIContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MultipleQFIContainer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MultipleQFIContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MultipleQFIContainer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MultipleQFIContainer: $.ASN1Decoder<MultipleQFIContainer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MultipleQFIContainer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MultipleQFIContainer (el: _Element): MultipleQFIContainer {
    if (!_cached_decoder_for_MultipleQFIContainer) { _cached_decoder_for_MultipleQFIContainer = function (el: _Element): MultipleQFIContainer {
    let qosFlowId: OPTIONAL<INTEGER>;
    let triggers!: Trigger[];
    let triggerTimeStamp: OPTIONAL<OCTET_STRING>;
    let dataTotalVolume: OPTIONAL<INTEGER>;
    let dataVolumeUplink: OPTIONAL<INTEGER>;
    let dataVolumeDownlink: OPTIONAL<INTEGER>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let timeOfFirstUsage: OPTIONAL<OCTET_STRING>;
    let timeOfLastUsage: OPTIONAL<OCTET_STRING>;
    let qoSInformation: OPTIONAL<FiveGQoSInformation>;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let uETimeZone: OPTIONAL<OCTET_STRING>;
    let presenceReportingAreaInfo: OPTIONAL<PresenceReportingAreaInfo>;
    let rATType: OPTIONAL<INTEGER>;
    let reportTime!: OCTET_STRING;
    let servingNetworkFunctionID: OPTIONAL<ServingNetworkFunctionID[]>;
    let threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>;
    const callbacks: $.DecodingMap = {
        "qosFlowId": (_el: _Element): void => { qosFlowId = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "triggers": (_el: _Element): void => { triggers = $._decode_implicit<Trigger[]>(() => $._decodeSequenceOf<Trigger>(() => _decode_Trigger))(_el); },
        "triggerTimeStamp": (_el: _Element): void => { triggerTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "dataTotalVolume": (_el: _Element): void => { dataTotalVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolumeUplink": (_el: _Element): void => { dataVolumeUplink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolumeDownlink": (_el: _Element): void => { dataVolumeDownlink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "timeOfFirstUsage": (_el: _Element): void => { timeOfFirstUsage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "timeOfLastUsage": (_el: _Element): void => { timeOfLastUsage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "qoSInformation": (_el: _Element): void => { qoSInformation = $._decode_implicit<FiveGQoSInformation>(() => _decode_FiveGQoSInformation)(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "uETimeZone": (_el: _Element): void => { uETimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "presenceReportingAreaInfo": (_el: _Element): void => { presenceReportingAreaInfo = $._decode_implicit<PresenceReportingAreaInfo>(() => _decode_PresenceReportingAreaInfo)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "reportTime": (_el: _Element): void => { reportTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servingNetworkFunctionID": (_el: _Element): void => { servingNetworkFunctionID = $._decode_implicit<ServingNetworkFunctionID[]>(() => $._decodeSequenceOf<ServingNetworkFunctionID>(() => _decode_ServingNetworkFunctionID))(_el); },
        "threeGPPPSDataOffStatus": (_el: _Element): void => { threeGPPPSDataOffStatus = $._decode_implicit<ThreeGPPPSDataOffStatus>(() => _decode_ThreeGPPPSDataOffStatus)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MultipleQFIContainer,
        _extension_additions_list_spec_for_MultipleQFIContainer,
        _root_component_type_list_2_spec_for_MultipleQFIContainer,
        undefined,
    );
    return new MultipleQFIContainer(
        qosFlowId,
        triggers,
        triggerTimeStamp,
        dataTotalVolume,
        dataVolumeUplink,
        dataVolumeDownlink,
        localSequenceNumber,
        timeOfFirstUsage,
        timeOfLastUsage,
        qoSInformation,
        userLocationInformation,
        uETimeZone,
        presenceReportingAreaInfo,
        rATType,
        reportTime,
        servingNetworkFunctionID,
        threeGPPPSDataOffStatus
    );
}; }
    return _cached_decoder_for_MultipleQFIContainer(el);
}

let _cached_encoder_for_MultipleQFIContainer: $.ASN1Encoder<MultipleQFIContainer> | null = null;

/**
 * @summary Encodes a(n) MultipleQFIContainer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleQFIContainer, encoded as an ASN.1 Element.
 */
export
function _encode_MultipleQFIContainer (value: MultipleQFIContainer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MultipleQFIContainer) { _cached_encoder_for_MultipleQFIContainer = function (value: MultipleQFIContainer, _elGetter: $.ASN1Encoder<MultipleQFIContainer>): _Element {
    const _components: _Element[] = [];
    if (value.qosFlowId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.qosFlowId, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Trigger>(() => _encode_Trigger, $.BER), $.BER)(value.triggers, $.BER));
    if (value.triggerTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.triggerTimeStamp, $.BER));
    }
    if (value.dataTotalVolume !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.dataTotalVolume, $.BER));
    }
    if (value.dataVolumeUplink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.dataVolumeUplink, $.BER));
    }
    if (value.dataVolumeDownlink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.dataVolumeDownlink, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.timeOfFirstUsage !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.timeOfFirstUsage, $.BER));
    }
    if (value.timeOfLastUsage !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.timeOfLastUsage, $.BER));
    }
    if (value.qoSInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_FiveGQoSInformation, $.BER)(value.qoSInformation, $.BER));
    }
    if (value.userLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.userLocationInformation, $.BER));
    }
    if (value.uETimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.uETimeZone, $.BER));
    }
    if (value.presenceReportingAreaInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_PresenceReportingAreaInfo, $.BER)(value.presenceReportingAreaInfo, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => $._encodeOctetString, $.BER)(value.reportTime, $.BER));
    if (value.servingNetworkFunctionID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeSequenceOf<ServingNetworkFunctionID>(() => _encode_ServingNetworkFunctionID, $.BER), $.BER)(value.servingNetworkFunctionID, $.BER));
    }
    if (value.threeGPPPSDataOffStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_ThreeGPPPSDataOffStatus, $.BER)(value.threeGPPPSDataOffStatus, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MultipleQFIContainer(value, elGetter);
}


/* eslint-enable */
