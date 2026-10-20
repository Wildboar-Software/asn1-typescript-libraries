/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChangeCondition, _decode_ChangeCondition, _encode_ChangeCondition, _enum_for_ChangeCondition } from "../GPRSChargingDataTypes/ChangeCondition.ta.mjs";
// export { ChangeCondition, _enum_for_ChangeCondition, ChangeCondition_qoSChange /* IMPORTED_LONG_ENUMERATION_ITEM */, qoSChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_tariffTime /* IMPORTED_LONG_ENUMERATION_ITEM */, tariffTime /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_recordClosure /* IMPORTED_LONG_ENUMERATION_ITEM */, recordClosure /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_cGI_SAICHange /* IMPORTED_LONG_ENUMERATION_ITEM */, cGI_SAICHange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_rAIChange /* IMPORTED_LONG_ENUMERATION_ITEM */, rAIChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_dT_Establishment /* IMPORTED_LONG_ENUMERATION_ITEM */, dT_Establishment /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_dT_Removal /* IMPORTED_LONG_ENUMERATION_ITEM */, dT_Removal /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_eCGIChange /* IMPORTED_LONG_ENUMERATION_ITEM */, eCGIChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_tAIChange /* IMPORTED_LONG_ENUMERATION_ITEM */, tAIChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_userLocationChange /* IMPORTED_LONG_ENUMERATION_ITEM */, userLocationChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_userCSGInformationChange /* IMPORTED_LONG_ENUMERATION_ITEM */, userCSGInformationChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_presenceInPRAChange /* IMPORTED_LONG_ENUMERATION_ITEM */, presenceInPRAChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_removalOfAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, removalOfAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_unusabilityOfAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, unusabilityOfAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_indirectChangeCondition /* IMPORTED_LONG_ENUMERATION_ITEM */, indirectChangeCondition /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_userPlaneToUEChange /* IMPORTED_LONG_ENUMERATION_ITEM */, userPlaneToUEChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_servingPLMNRateControlChange /* IMPORTED_LONG_ENUMERATION_ITEM */, servingPLMNRateControlChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_threeGPPPSDataOffStatusChange /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPPSDataOffStatusChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_aPNRateControlChange /* IMPORTED_LONG_ENUMERATION_ITEM */, aPNRateControlChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ChangeCondition, _encode_ChangeCondition } from "../GPRSChargingDataTypes/ChangeCondition.ta.mjs";
import { EPCQoSInformation, _decode_EPCQoSInformation, _encode_EPCQoSInformation } from "../GPRSChargingDataTypes/EPCQoSInformation.ta.mjs";
// export { EPCQoSInformation, _decode_EPCQoSInformation, _encode_EPCQoSInformation } from "../GPRSChargingDataTypes/EPCQoSInformation.ta.mjs";
import { PresenceReportingAreaStatus, _decode_PresenceReportingAreaStatus, _encode_PresenceReportingAreaStatus, _enum_for_PresenceReportingAreaStatus } from "../GPRSChargingDataTypes/PresenceReportingAreaStatus.ta.mjs";
// export { PresenceReportingAreaStatus, _enum_for_PresenceReportingAreaStatus, PresenceReportingAreaStatus_insideArea /* IMPORTED_LONG_ENUMERATION_ITEM */, insideArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceReportingAreaStatus_outsideArea /* IMPORTED_LONG_ENUMERATION_ITEM */, outsideArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceReportingAreaStatus_inactive /* IMPORTED_LONG_ENUMERATION_ITEM */, PresenceReportingAreaStatus_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PresenceReportingAreaStatus, _encode_PresenceReportingAreaStatus } from "../GPRSChargingDataTypes/PresenceReportingAreaStatus.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../GPRSChargingDataTypes/UserCSGInformation.ta.mjs";
// export { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../GPRSChargingDataTypes/UserCSGInformation.ta.mjs";
import { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../GPRSChargingDataTypes/Diagnostics.ta.mjs";
// export { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../GPRSChargingDataTypes/Diagnostics.ta.mjs";
import { EnhancedDiagnostics, _decode_EnhancedDiagnostics, _encode_EnhancedDiagnostics } from "../GPRSChargingDataTypes/EnhancedDiagnostics.ta.mjs";
// export { EnhancedDiagnostics, _decode_EnhancedDiagnostics, _encode_EnhancedDiagnostics } from "../GPRSChargingDataTypes/EnhancedDiagnostics.ta.mjs";
import { UWANUserLocationInfo, _decode_UWANUserLocationInfo, _encode_UWANUserLocationInfo } from "../GPRSChargingDataTypes/UWANUserLocationInfo.ta.mjs";
// export { UWANUserLocationInfo, _decode_UWANUserLocationInfo, _encode_UWANUserLocationInfo } from "../GPRSChargingDataTypes/UWANUserLocationInfo.ta.mjs";
import { RelatedChangeOfCharCondition, _decode_RelatedChangeOfCharCondition, _encode_RelatedChangeOfCharCondition } from "../GPRSChargingDataTypes/RelatedChangeOfCharCondition.ta.mjs";
// export { RelatedChangeOfCharCondition, _decode_RelatedChangeOfCharCondition, _encode_RelatedChangeOfCharCondition } from "../GPRSChargingDataTypes/RelatedChangeOfCharCondition.ta.mjs";
import { ServingPLMNRateControl, _decode_ServingPLMNRateControl, _encode_ServingPLMNRateControl } from "../GPRSChargingDataTypes/ServingPLMNRateControl.ta.mjs";
// export { ServingPLMNRateControl, _decode_ServingPLMNRateControl, _encode_ServingPLMNRateControl } from "../GPRSChargingDataTypes/ServingPLMNRateControl.ta.mjs";
import { ThreeGPPPSDataOffStatus, _decode_ThreeGPPPSDataOffStatus, _encode_ThreeGPPPSDataOffStatus, _enum_for_ThreeGPPPSDataOffStatus } from "../GPRSChargingDataTypes/ThreeGPPPSDataOffStatus.ta.mjs";
// export { ThreeGPPPSDataOffStatus, _enum_for_ThreeGPPPSDataOffStatus, ThreeGPPPSDataOffStatus_active /* IMPORTED_LONG_ENUMERATION_ITEM */, active /* IMPORTED_SHORT_ENUMERATION_ITEM */, ThreeGPPPSDataOffStatus_inactive /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_ThreeGPPPSDataOffStatus, _encode_ThreeGPPPSDataOffStatus } from "../GPRSChargingDataTypes/ThreeGPPPSDataOffStatus.ta.mjs";
import { PresenceReportingAreaInfo, _decode_PresenceReportingAreaInfo, _encode_PresenceReportingAreaInfo } from "../GPRSChargingDataTypes/PresenceReportingAreaInfo.ta.mjs";
// export { PresenceReportingAreaInfo, _decode_PresenceReportingAreaInfo, _encode_PresenceReportingAreaInfo } from "../GPRSChargingDataTypes/PresenceReportingAreaInfo.ta.mjs";
import { APNRateControl, _decode_APNRateControl, _encode_APNRateControl } from "../GPRSChargingDataTypes/APNRateControl.ta.mjs";
// export { APNRateControl, _decode_APNRateControl, _encode_APNRateControl } from "../GPRSChargingDataTypes/APNRateControl.ta.mjs";


/**
 * @summary ChangeOfCharCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeOfCharCondition ::= SEQUENCE {
 *    qosRequested                             [1] IMPLICIT OCTET STRING ( SIZE( 4 .. 255 ) ) OPTIONAL,
 *    qosNegotiated                            [2] IMPLICIT OCTET STRING ( SIZE( 4 .. 255 ) ) OPTIONAL,
 *    dataVolumeGPRSUplink                     [3] IMPLICIT INTEGER OPTIONAL,
 *    dataVolumeGPRSDownlink                   [4] IMPLICIT INTEGER OPTIONAL,
 *    changeCondition                          [5] IMPLICIT ChangeCondition,
 *    changeTime                               [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    userLocationInformation                  [8] IMPLICIT OCTET STRING OPTIONAL,
 *    ePCQoSInformation                        [9] IMPLICIT EPCQoSInformation OPTIONAL,
 *    chargingID                               [10] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    presenceReportingAreaStatus              [11] IMPLICIT PresenceReportingAreaStatus OPTIONAL,
 *    userCSGInformation                       [12] IMPLICIT UserCSGInformation OPTIONAL,
 *    diagnostics                              [13] Diagnostics OPTIONAL,
 *    enhancedDiagnostics                      [14] IMPLICIT EnhancedDiagnostics OPTIONAL,
 *    rATType                                  [15] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    accessAvailabilityChangeReason           [16] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    uWANUserLocationInformation              [17] IMPLICIT UWANUserLocationInfo OPTIONAL,
 *    relatedChangeOfCharCondition             [18] IMPLICIT RelatedChangeOfCharCondition OPTIONAL,
 *    cPCIoTEPSOptimisationIndicator           [19] IMPLICIT BOOLEAN OPTIONAL,
 *    servingPLMNRateControl                   [20] IMPLICIT ServingPLMNRateControl OPTIONAL,
 *    threeGPPPSDataOffStatus                  [21] IMPLICIT ThreeGPPPSDataOffStatus OPTIONAL,
 *    listOfPresenceReportingAreaInformation   [22] IMPLICIT SEQUENCE  OF
 *       PresenceReportingAreaInfo OPTIONAL,
 *    aPNRateControl                           [23] IMPLICIT APNRateControl OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ChangeOfCharCondition {
    /**
     * @summary `qosRequested`.
     * @public
     * @readonly
     */
    readonly qosRequested: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `qosNegotiated`.
     * @public
     * @readonly
     */
    readonly qosNegotiated: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `dataVolumeGPRSUplink`.
     * @public
     * @readonly
     */
    readonly dataVolumeGPRSUplink: OPTIONAL<INTEGER>;
    /**
     * @summary `dataVolumeGPRSDownlink`.
     * @public
     * @readonly
     */
    readonly dataVolumeGPRSDownlink: OPTIONAL<INTEGER>;
    /**
     * @summary `changeCondition`.
     * @public
     * @readonly
     */
    readonly changeCondition: ChangeCondition;
    /**
     * @summary `changeTime`.
     * @public
     * @readonly
     */
    readonly changeTime: OCTET_STRING;
    /**
     * @summary `userLocationInformation`.
     * @public
     * @readonly
     */
    readonly userLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `ePCQoSInformation`.
     * @public
     * @readonly
     */
    readonly ePCQoSInformation: OPTIONAL<EPCQoSInformation>;
    /**
     * @summary `chargingID`.
     * @public
     * @readonly
     */
    readonly chargingID: OPTIONAL<INTEGER>;
    /**
     * @summary `presenceReportingAreaStatus`.
     * @public
     * @readonly
     */
    readonly presenceReportingAreaStatus: OPTIONAL<PresenceReportingAreaStatus>;
    /**
     * @summary `userCSGInformation`.
     * @public
     * @readonly
     */
    readonly userCSGInformation: OPTIONAL<UserCSGInformation>;
    /**
     * @summary `diagnostics`.
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<Diagnostics>;
    /**
     * @summary `enhancedDiagnostics`.
     * @public
     * @readonly
     */
    readonly enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>;
    /**
     * @summary `rATType`.
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `accessAvailabilityChangeReason`.
     * @public
     * @readonly
     */
    readonly accessAvailabilityChangeReason: OPTIONAL<INTEGER>;
    /**
     * @summary `uWANUserLocationInformation`.
     * @public
     * @readonly
     */
    readonly uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;
    /**
     * @summary `relatedChangeOfCharCondition`.
     * @public
     * @readonly
     */
    readonly relatedChangeOfCharCondition: OPTIONAL<RelatedChangeOfCharCondition>;
    /**
     * @summary `cPCIoTEPSOptimisationIndicator`.
     * @public
     * @readonly
     */
    readonly cPCIoTEPSOptimisationIndicator: OPTIONAL<BOOLEAN>;
    /**
     * @summary `servingPLMNRateControl`.
     * @public
     * @readonly
     */
    readonly servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>;
    /**
     * @summary `threeGPPPSDataOffStatus`.
     * @public
     * @readonly
     */
    readonly threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>;
    /**
     * @summary `listOfPresenceReportingAreaInformation`.
     * @public
     * @readonly
     */
    readonly listOfPresenceReportingAreaInformation: OPTIONAL<PresenceReportingAreaInfo[]>;
    /**
     * @summary `aPNRateControl`.
     * @public
     * @readonly
     */
    readonly aPNRateControl: OPTIONAL<APNRateControl>;

    constructor (
        qosRequested: OPTIONAL<OCTET_STRING>,
        qosNegotiated: OPTIONAL<OCTET_STRING>,
        dataVolumeGPRSUplink: OPTIONAL<INTEGER>,
        dataVolumeGPRSDownlink: OPTIONAL<INTEGER>,
        changeCondition: ChangeCondition,
        changeTime: OCTET_STRING,
        userLocationInformation: OPTIONAL<OCTET_STRING>,
        ePCQoSInformation: OPTIONAL<EPCQoSInformation>,
        chargingID: OPTIONAL<INTEGER>,
        presenceReportingAreaStatus: OPTIONAL<PresenceReportingAreaStatus>,
        userCSGInformation: OPTIONAL<UserCSGInformation>,
        diagnostics: OPTIONAL<Diagnostics>,
        enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>,
        rATType: OPTIONAL<INTEGER>,
        accessAvailabilityChangeReason: OPTIONAL<INTEGER>,
        uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>,
        relatedChangeOfCharCondition: OPTIONAL<RelatedChangeOfCharCondition>,
        cPCIoTEPSOptimisationIndicator: OPTIONAL<BOOLEAN>,
        servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>,
        threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>,
        listOfPresenceReportingAreaInformation: OPTIONAL<PresenceReportingAreaInfo[]>,
        aPNRateControl: OPTIONAL<APNRateControl>
    ) {
        this.qosRequested = qosRequested;
        this.qosNegotiated = qosNegotiated;
        this.dataVolumeGPRSUplink = dataVolumeGPRSUplink;
        this.dataVolumeGPRSDownlink = dataVolumeGPRSDownlink;
        this.changeCondition = changeCondition;
        this.changeTime = changeTime;
        this.userLocationInformation = userLocationInformation;
        this.ePCQoSInformation = ePCQoSInformation;
        this.chargingID = chargingID;
        this.presenceReportingAreaStatus = presenceReportingAreaStatus;
        this.userCSGInformation = userCSGInformation;
        this.diagnostics = diagnostics;
        this.enhancedDiagnostics = enhancedDiagnostics;
        this.rATType = rATType;
        this.accessAvailabilityChangeReason = accessAvailabilityChangeReason;
        this.uWANUserLocationInformation = uWANUserLocationInformation;
        this.relatedChangeOfCharCondition = relatedChangeOfCharCondition;
        this.cPCIoTEPSOptimisationIndicator = cPCIoTEPSOptimisationIndicator;
        this.servingPLMNRateControl = servingPLMNRateControl;
        this.threeGPPPSDataOffStatus = threeGPPPSDataOffStatus;
        this.listOfPresenceReportingAreaInformation = listOfPresenceReportingAreaInformation;
        this.aPNRateControl = aPNRateControl;
    }

    /**
     * @summary Restructures an object into a ChangeOfCharCondition
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeOfCharCondition`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeOfCharCondition`.
     * @returns {ChangeOfCharCondition}
     */
    public static _from_object (_o: { [_K in keyof (ChangeOfCharCondition)]: (ChangeOfCharCondition)[_K] }): ChangeOfCharCondition {
        return new ChangeOfCharCondition(_o.qosRequested, _o.qosNegotiated, _o.dataVolumeGPRSUplink, _o.dataVolumeGPRSDownlink, _o.changeCondition, _o.changeTime, _o.userLocationInformation, _o.ePCQoSInformation, _o.chargingID, _o.presenceReportingAreaStatus, _o.userCSGInformation, _o.diagnostics, _o.enhancedDiagnostics, _o.rATType, _o.accessAvailabilityChangeReason, _o.uWANUserLocationInformation, _o.relatedChangeOfCharCondition, _o.cPCIoTEPSOptimisationIndicator, _o.servingPLMNRateControl, _o.threeGPPPSDataOffStatus, _o.listOfPresenceReportingAreaInformation, _o.aPNRateControl);
    }

        /**
         * @summary The enum used as the type of the component `changeCondition`
         * @public
         * @static
         */

    public static _enum_for_changeCondition = _enum_for_ChangeCondition;        /**
         * @summary The enum used as the type of the component `presenceReportingAreaStatus`
         * @public
         * @static
         */

    public static _enum_for_presenceReportingAreaStatus = _enum_for_PresenceReportingAreaStatus;        /**
         * @summary The enum used as the type of the component `threeGPPPSDataOffStatus`
         * @public
         * @static
         */

    public static _enum_for_threeGPPPSDataOffStatus = _enum_for_ThreeGPPPSDataOffStatus;
}

/**
 * @summary The Leading Root Component Types of ChangeOfCharCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeOfCharCondition: $.ComponentSpec[] = [
    new $.ComponentSpec("qosRequested", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("qosNegotiated", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dataVolumeGPRSUplink", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("dataVolumeGPRSDownlink", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("changeCondition", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("changeTime", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("ePCQoSInformation", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("chargingID", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("presenceReportingAreaStatus", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("enhancedDiagnostics", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("accessAvailabilityChangeReason", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("uWANUserLocationInformation", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("relatedChangeOfCharCondition", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("cPCIoTEPSOptimisationIndicator", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("servingPLMNRateControl", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("threeGPPPSDataOffStatus", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("listOfPresenceReportingAreaInformation", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("aPNRateControl", true, $.hasTag(_TagClass.context, 23))
];

/**
 * @summary The Trailing Root Component Types of ChangeOfCharCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeOfCharCondition: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeOfCharCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeOfCharCondition: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeOfCharCondition: $.ASN1Decoder<ChangeOfCharCondition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeOfCharCondition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeOfCharCondition (el: _Element): ChangeOfCharCondition {
    if (!_cached_decoder_for_ChangeOfCharCondition) { _cached_decoder_for_ChangeOfCharCondition = function (el: _Element): ChangeOfCharCondition {
    let qosRequested: OPTIONAL<OCTET_STRING>;
    let qosNegotiated: OPTIONAL<OCTET_STRING>;
    let dataVolumeGPRSUplink: OPTIONAL<INTEGER>;
    let dataVolumeGPRSDownlink: OPTIONAL<INTEGER>;
    let changeCondition!: ChangeCondition;
    let changeTime!: OCTET_STRING;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let ePCQoSInformation: OPTIONAL<EPCQoSInformation>;
    let chargingID: OPTIONAL<INTEGER>;
    let presenceReportingAreaStatus: OPTIONAL<PresenceReportingAreaStatus>;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    let diagnostics: OPTIONAL<Diagnostics>;
    let enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>;
    let rATType: OPTIONAL<INTEGER>;
    let accessAvailabilityChangeReason: OPTIONAL<INTEGER>;
    let uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;
    let relatedChangeOfCharCondition: OPTIONAL<RelatedChangeOfCharCondition>;
    let cPCIoTEPSOptimisationIndicator: OPTIONAL<BOOLEAN>;
    let servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>;
    let threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>;
    let listOfPresenceReportingAreaInformation: OPTIONAL<PresenceReportingAreaInfo[]>;
    let aPNRateControl: OPTIONAL<APNRateControl>;
    const callbacks: $.DecodingMap = {
        "qosRequested": (_el: _Element): void => { qosRequested = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "qosNegotiated": (_el: _Element): void => { qosNegotiated = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "dataVolumeGPRSUplink": (_el: _Element): void => { dataVolumeGPRSUplink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolumeGPRSDownlink": (_el: _Element): void => { dataVolumeGPRSDownlink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "changeCondition": (_el: _Element): void => { changeCondition = $._decode_implicit<ChangeCondition>(() => _decode_ChangeCondition)(_el); },
        "changeTime": (_el: _Element): void => { changeTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "ePCQoSInformation": (_el: _Element): void => { ePCQoSInformation = $._decode_implicit<EPCQoSInformation>(() => _decode_EPCQoSInformation)(_el); },
        "chargingID": (_el: _Element): void => { chargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "presenceReportingAreaStatus": (_el: _Element): void => { presenceReportingAreaStatus = $._decode_implicit<PresenceReportingAreaStatus>(() => _decode_PresenceReportingAreaStatus)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "enhancedDiagnostics": (_el: _Element): void => { enhancedDiagnostics = $._decode_implicit<EnhancedDiagnostics>(() => _decode_EnhancedDiagnostics)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "accessAvailabilityChangeReason": (_el: _Element): void => { accessAvailabilityChangeReason = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "uWANUserLocationInformation": (_el: _Element): void => { uWANUserLocationInformation = $._decode_implicit<UWANUserLocationInfo>(() => _decode_UWANUserLocationInfo)(_el); },
        "relatedChangeOfCharCondition": (_el: _Element): void => { relatedChangeOfCharCondition = $._decode_implicit<RelatedChangeOfCharCondition>(() => _decode_RelatedChangeOfCharCondition)(_el); },
        "cPCIoTEPSOptimisationIndicator": (_el: _Element): void => { cPCIoTEPSOptimisationIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "servingPLMNRateControl": (_el: _Element): void => { servingPLMNRateControl = $._decode_implicit<ServingPLMNRateControl>(() => _decode_ServingPLMNRateControl)(_el); },
        "threeGPPPSDataOffStatus": (_el: _Element): void => { threeGPPPSDataOffStatus = $._decode_implicit<ThreeGPPPSDataOffStatus>(() => _decode_ThreeGPPPSDataOffStatus)(_el); },
        "listOfPresenceReportingAreaInformation": (_el: _Element): void => { listOfPresenceReportingAreaInformation = $._decode_implicit<PresenceReportingAreaInfo[]>(() => $._decodeSequenceOf<PresenceReportingAreaInfo>(() => _decode_PresenceReportingAreaInfo))(_el); },
        "aPNRateControl": (_el: _Element): void => { aPNRateControl = $._decode_implicit<APNRateControl>(() => _decode_APNRateControl)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChangeOfCharCondition,
        _extension_additions_list_spec_for_ChangeOfCharCondition,
        _root_component_type_list_2_spec_for_ChangeOfCharCondition,
        undefined,
    );
    return new ChangeOfCharCondition(
        qosRequested,
        qosNegotiated,
        dataVolumeGPRSUplink,
        dataVolumeGPRSDownlink,
        changeCondition,
        changeTime,
        userLocationInformation,
        ePCQoSInformation,
        chargingID,
        presenceReportingAreaStatus,
        userCSGInformation,
        diagnostics,
        enhancedDiagnostics,
        rATType,
        accessAvailabilityChangeReason,
        uWANUserLocationInformation,
        relatedChangeOfCharCondition,
        cPCIoTEPSOptimisationIndicator,
        servingPLMNRateControl,
        threeGPPPSDataOffStatus,
        listOfPresenceReportingAreaInformation,
        aPNRateControl
    );
}; }
    return _cached_decoder_for_ChangeOfCharCondition(el);
}

let _cached_encoder_for_ChangeOfCharCondition: $.ASN1Encoder<ChangeOfCharCondition> | null = null;

/**
 * @summary Encodes a(n) ChangeOfCharCondition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeOfCharCondition, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeOfCharCondition (value: ChangeOfCharCondition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeOfCharCondition) { _cached_encoder_for_ChangeOfCharCondition = function (value: ChangeOfCharCondition, elGetter: $.ASN1Encoder<ChangeOfCharCondition>): _Element {
    const _components: _Element[] = [];
    if (value.qosRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.qosRequested, $.BER));
    }
    if (value.qosNegotiated !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.qosNegotiated, $.BER));
    }
    if (value.dataVolumeGPRSUplink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.dataVolumeGPRSUplink, $.BER));
    }
    if (value.dataVolumeGPRSDownlink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.dataVolumeGPRSDownlink, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_ChangeCondition, $.BER)(value.changeCondition, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.changeTime, $.BER));
    if (value.userLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.userLocationInformation, $.BER));
    }
    if (value.ePCQoSInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_EPCQoSInformation, $.BER)(value.ePCQoSInformation, $.BER));
    }
    if (value.chargingID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.chargingID, $.BER));
    }
    if (value.presenceReportingAreaStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_PresenceReportingAreaStatus, $.BER)(value.presenceReportingAreaStatus, $.BER));
    }
    if (value.userCSGInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER));
    }
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 13, () => _encode_Diagnostics, $.BER)(value.diagnostics, $.BER));
    }
    if (value.enhancedDiagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_EnhancedDiagnostics, $.BER)(value.enhancedDiagnostics, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.accessAvailabilityChangeReason !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER)(value.accessAvailabilityChangeReason, $.BER));
    }
    if (value.uWANUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_UWANUserLocationInfo, $.BER)(value.uWANUserLocationInformation, $.BER));
    }
    if (value.relatedChangeOfCharCondition !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_RelatedChangeOfCharCondition, $.BER)(value.relatedChangeOfCharCondition, $.BER));
    }
    if (value.cPCIoTEPSOptimisationIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeBoolean, $.BER)(value.cPCIoTEPSOptimisationIndicator, $.BER));
    }
    if (value.servingPLMNRateControl !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_ServingPLMNRateControl, $.BER)(value.servingPLMNRateControl, $.BER));
    }
    if (value.threeGPPPSDataOffStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_ThreeGPPPSDataOffStatus, $.BER)(value.threeGPPPSDataOffStatus, $.BER));
    }
    if (value.listOfPresenceReportingAreaInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeSequenceOf<PresenceReportingAreaInfo>(() => _encode_PresenceReportingAreaInfo, $.BER), $.BER)(value.listOfPresenceReportingAreaInformation, $.BER));
    }
    if (value.aPNRateControl !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => _encode_APNRateControl, $.BER)(value.aPNRateControl, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ChangeOfCharCondition(value, elGetter);
}


/* eslint-enable */
