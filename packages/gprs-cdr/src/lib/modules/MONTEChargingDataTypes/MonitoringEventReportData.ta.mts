/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MonitoringType, _decode_MonitoringType, _encode_MonitoringType, _enum_for_MonitoringType } from "../MONTEChargingDataTypes/MonitoringType.ta.mjs";
import { ReachabilityType, _decode_ReachabilityType, _encode_ReachabilityType, _enum_for_ReachabilityType } from "../MONTEChargingDataTypes/ReachabilityType.ta.mjs";
import { EPSLocationInfo, _decode_EPSLocationInfo, _encode_EPSLocationInfo } from "../MONTEChargingDataTypes/EPSLocationInfo.ta.mjs";
import { CommunicationFailureInfo, _decode_CommunicationFailureInfo, _encode_CommunicationFailureInfo } from "../MONTEChargingDataTypes/CommunicationFailureInfo.ta.mjs";
import { NumberOfUEPerLocationReport, _decode_NumberOfUEPerLocationReport, _encode_NumberOfUEPerLocationReport } from "../MONTEChargingDataTypes/NumberOfUEPerLocationReport.ta.mjs";


/**
 * @summary MonitoringEventReportData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitoringEventReportData ::= SEQUENCE {
 *    eventTimestamp                      [0] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    sCEFReferenceID                     [1] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    sCEFID                              [2] IMPLICIT OCTET STRING OPTIONAL,
 *    monitoringEventReportNumber         [3] IMPLICIT INTEGER OPTIONAL,
 *    chargeablePartyIdentifier           [4] IMPLICIT UTF8String OPTIONAL,
 *    monitoredUser                       [5] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    monitoringType                      [6] IMPLICIT MonitoringType OPTIONAL,
 *    reachabilityInformation             [7] IMPLICIT ReachabilityType OPTIONAL,
 *    reportedLocation                    [8] IMPLICIT EPSLocationInfo OPTIONAL,
 *    communicationFailureInformation     [9] IMPLICIT SEQUENCE  OF
 *       CommunicationFailureInfo OPTIONAL,
 *    listOfNumberOfUEPerLocationReport   [10] IMPLICIT SEQUENCE  OF
 *       NumberOfUEPerLocationReport OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MonitoringEventReportData {
    /**
     * @summary `eventTimestamp`.
     * @public
     * @readonly
     */
    readonly eventTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sCEFReferenceID`.
     * @public
     * @readonly
     */
    readonly sCEFReferenceID: OPTIONAL<INTEGER>;
    /**
     * @summary `sCEFID`.
     * @public
     * @readonly
     */
    readonly sCEFID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `monitoringEventReportNumber`.
     * @public
     * @readonly
     */
    readonly monitoringEventReportNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `chargeablePartyIdentifier`.
     * @public
     * @readonly
     */
    readonly chargeablePartyIdentifier: OPTIONAL<UTF8String>;
    /**
     * @summary `monitoredUser`.
     * @public
     * @readonly
     */
    readonly monitoredUser: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `monitoringType`.
     * @public
     * @readonly
     */
    readonly monitoringType: OPTIONAL<MonitoringType>;
    /**
     * @summary `reachabilityInformation`.
     * @public
     * @readonly
     */
    readonly reachabilityInformation: OPTIONAL<ReachabilityType>;
    /**
     * @summary `reportedLocation`.
     * @public
     * @readonly
     */
    readonly reportedLocation: OPTIONAL<EPSLocationInfo>;
    /**
     * @summary `communicationFailureInformation`.
     * @public
     * @readonly
     */
    readonly communicationFailureInformation: OPTIONAL<CommunicationFailureInfo[]>;
    /**
     * @summary `listOfNumberOfUEPerLocationReport`.
     * @public
     * @readonly
     */
    readonly listOfNumberOfUEPerLocationReport: OPTIONAL<NumberOfUEPerLocationReport[]>;

    constructor (
        eventTimestamp: OPTIONAL<OCTET_STRING>,
        sCEFReferenceID: OPTIONAL<INTEGER>,
        sCEFID: OPTIONAL<OCTET_STRING>,
        monitoringEventReportNumber: OPTIONAL<INTEGER>,
        chargeablePartyIdentifier: OPTIONAL<UTF8String>,
        monitoredUser: OPTIONAL<OCTET_STRING>,
        monitoringType: OPTIONAL<MonitoringType>,
        reachabilityInformation: OPTIONAL<ReachabilityType>,
        reportedLocation: OPTIONAL<EPSLocationInfo>,
        communicationFailureInformation: OPTIONAL<CommunicationFailureInfo[]>,
        listOfNumberOfUEPerLocationReport: OPTIONAL<NumberOfUEPerLocationReport[]>
    ) {
        this.eventTimestamp = eventTimestamp;
        this.sCEFReferenceID = sCEFReferenceID;
        this.sCEFID = sCEFID;
        this.monitoringEventReportNumber = monitoringEventReportNumber;
        this.chargeablePartyIdentifier = chargeablePartyIdentifier;
        this.monitoredUser = monitoredUser;
        this.monitoringType = monitoringType;
        this.reachabilityInformation = reachabilityInformation;
        this.reportedLocation = reportedLocation;
        this.communicationFailureInformation = communicationFailureInformation;
        this.listOfNumberOfUEPerLocationReport = listOfNumberOfUEPerLocationReport;
    
        if (this.eventTimestamp !== undefined && (this.eventTimestamp.length !== 9)) {
            throw new ASN1SizeError("MonitoringEventReportData.eventTimestamp violates SIZE constraint");
        }
        if (this.sCEFReferenceID !== undefined && ((typeof this.sCEFReferenceID === "bigint" ? Number(this.sCEFReferenceID) : this.sCEFReferenceID) < 0 || (typeof this.sCEFReferenceID === "bigint" ? Number(this.sCEFReferenceID) : this.sCEFReferenceID) > 4294967295)) {
            throw new ASN1OverflowError("MonitoringEventReportData.sCEFReferenceID violates INTEGER range");
        }
        if (this.monitoredUser !== undefined && (this.monitoredUser.length < 3 || this.monitoredUser.length > 8)) {
            throw new ASN1SizeError("MonitoringEventReportData.monitoredUser violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MonitoringEventReportData
     * @description
     * 
     * This takes an `object` and converts it to a `MonitoringEventReportData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MonitoringEventReportData`.
     * @returns {MonitoringEventReportData}
     */
    public static _from_object (_o: { [_K in keyof (MonitoringEventReportData)]: (MonitoringEventReportData)[_K] }): MonitoringEventReportData {
        return new MonitoringEventReportData(_o.eventTimestamp, _o.sCEFReferenceID, _o.sCEFID, _o.monitoringEventReportNumber, _o.chargeablePartyIdentifier, _o.monitoredUser, _o.monitoringType, _o.reachabilityInformation, _o.reportedLocation, _o.communicationFailureInformation, _o.listOfNumberOfUEPerLocationReport);
    }

        /**
         * @summary The enum used as the type of the component `monitoringType`
         * @public
         * @static
         */

    public static _enum_for_monitoringType = _enum_for_MonitoringType;        /**
         * @summary The enum used as the type of the component `reachabilityInformation`
         * @public
         * @static
         */

    public static _enum_for_reachabilityInformation = _enum_for_ReachabilityType;
}

/**
 * @summary The Leading Root Component Types of MonitoringEventReportData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MonitoringEventReportData: $.ComponentSpec[] = [
    new $.ComponentSpec("eventTimestamp", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sCEFReferenceID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sCEFID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("monitoringEventReportNumber", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("chargeablePartyIdentifier", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("monitoredUser", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("monitoringType", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("reachabilityInformation", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("reportedLocation", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("communicationFailureInformation", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("listOfNumberOfUEPerLocationReport", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of MonitoringEventReportData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MonitoringEventReportData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MonitoringEventReportData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MonitoringEventReportData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MonitoringEventReportData: $.ASN1Decoder<MonitoringEventReportData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitoringEventReportData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitoringEventReportData (el: _Element): MonitoringEventReportData {
    if (!_cached_decoder_for_MonitoringEventReportData) { _cached_decoder_for_MonitoringEventReportData = function (el: _Element): MonitoringEventReportData {
    let eventTimestamp: OPTIONAL<OCTET_STRING>;
    let sCEFReferenceID: OPTIONAL<INTEGER>;
    let sCEFID: OPTIONAL<OCTET_STRING>;
    let monitoringEventReportNumber: OPTIONAL<INTEGER>;
    let chargeablePartyIdentifier: OPTIONAL<UTF8String>;
    let monitoredUser: OPTIONAL<OCTET_STRING>;
    let monitoringType: OPTIONAL<MonitoringType>;
    let reachabilityInformation: OPTIONAL<ReachabilityType>;
    let reportedLocation: OPTIONAL<EPSLocationInfo>;
    let communicationFailureInformation: OPTIONAL<CommunicationFailureInfo[]>;
    let listOfNumberOfUEPerLocationReport: OPTIONAL<NumberOfUEPerLocationReport[]>;
    const callbacks: $.DecodingMap = {
        "eventTimestamp": (_el: _Element): void => { eventTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sCEFReferenceID": (_el: _Element): void => { sCEFReferenceID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sCEFID": (_el: _Element): void => { sCEFID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "monitoringEventReportNumber": (_el: _Element): void => { monitoringEventReportNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "chargeablePartyIdentifier": (_el: _Element): void => { chargeablePartyIdentifier = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "monitoredUser": (_el: _Element): void => { monitoredUser = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "monitoringType": (_el: _Element): void => { monitoringType = $._decode_implicit<MonitoringType>(() => _decode_MonitoringType)(_el); },
        "reachabilityInformation": (_el: _Element): void => { reachabilityInformation = $._decode_implicit<ReachabilityType>(() => _decode_ReachabilityType)(_el); },
        "reportedLocation": (_el: _Element): void => { reportedLocation = $._decode_implicit<EPSLocationInfo>(() => _decode_EPSLocationInfo)(_el); },
        "communicationFailureInformation": (_el: _Element): void => { communicationFailureInformation = $._decode_implicit<CommunicationFailureInfo[]>(() => $._decodeSequenceOf<CommunicationFailureInfo>(() => _decode_CommunicationFailureInfo))(_el); },
        "listOfNumberOfUEPerLocationReport": (_el: _Element): void => { listOfNumberOfUEPerLocationReport = $._decode_implicit<NumberOfUEPerLocationReport[]>(() => $._decodeSequenceOf<NumberOfUEPerLocationReport>(() => _decode_NumberOfUEPerLocationReport))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MonitoringEventReportData,
        _extension_additions_list_spec_for_MonitoringEventReportData,
        _root_component_type_list_2_spec_for_MonitoringEventReportData,
        undefined,
    );
    return new MonitoringEventReportData(
        eventTimestamp,
        sCEFReferenceID,
        sCEFID,
        monitoringEventReportNumber,
        chargeablePartyIdentifier,
        monitoredUser,
        monitoringType,
        reachabilityInformation,
        reportedLocation,
        communicationFailureInformation,
        listOfNumberOfUEPerLocationReport
    );
}; }
    return _cached_decoder_for_MonitoringEventReportData(el);
}

let _cached_encoder_for_MonitoringEventReportData: $.ASN1Encoder<MonitoringEventReportData> | null = null;

/**
 * @summary Encodes a(n) MonitoringEventReportData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitoringEventReportData, encoded as an ASN.1 Element.
 */
export
function _encode_MonitoringEventReportData (value: MonitoringEventReportData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitoringEventReportData) { _cached_encoder_for_MonitoringEventReportData = function (value: MonitoringEventReportData, _elGetter: $.ASN1Encoder<MonitoringEventReportData>): _Element {
    const _components: _Element[] = [];
    if (value.eventTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.eventTimestamp, $.BER));
    }
    if (value.sCEFReferenceID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.sCEFReferenceID, $.BER));
    }
    if (value.sCEFID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.sCEFID, $.BER));
    }
    if (value.monitoringEventReportNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.monitoringEventReportNumber, $.BER));
    }
    if (value.chargeablePartyIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeUTF8String, $.BER)(value.chargeablePartyIdentifier, $.BER));
    }
    if (value.monitoredUser !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.monitoredUser, $.BER));
    }
    if (value.monitoringType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_MonitoringType, $.BER)(value.monitoringType, $.BER));
    }
    if (value.reachabilityInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_ReachabilityType, $.BER)(value.reachabilityInformation, $.BER));
    }
    if (value.reportedLocation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_EPSLocationInfo, $.BER)(value.reportedLocation, $.BER));
    }
    if (value.communicationFailureInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<CommunicationFailureInfo>(() => _encode_CommunicationFailureInfo, $.BER), $.BER)(value.communicationFailureInformation, $.BER));
    }
    if (value.listOfNumberOfUEPerLocationReport !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<NumberOfUEPerLocationReport>(() => _encode_NumberOfUEPerLocationReport, $.BER), $.BER)(value.listOfNumberOfUEPerLocationReport, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MonitoringEventReportData(value, elGetter);
}


/* eslint-enable */
