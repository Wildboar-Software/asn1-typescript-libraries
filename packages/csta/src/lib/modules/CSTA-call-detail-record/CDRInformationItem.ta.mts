/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    OCTET_STRING,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { TimeInfo, _decode_TimeInfo, _encode_TimeInfo } from "../CSTA-security/TimeInfo.ta.mjs";

import { CallingDeviceID, _decode_CallingDeviceID, _encode_CallingDeviceID } from "../CSTA-device-identifiers/CallingDeviceID.ta.mjs";

import { CalledDeviceID, _decode_CalledDeviceID, _encode_CalledDeviceID } from "../CSTA-device-identifiers/CalledDeviceID.ta.mjs";

import { AssociatedCallingDeviceID, _decode_AssociatedCallingDeviceID, _encode_AssociatedCallingDeviceID } from "../CSTA-device-identifiers/AssociatedCallingDeviceID.ta.mjs";

import { AssociatedCalledDeviceID, _decode_AssociatedCalledDeviceID, _encode_AssociatedCalledDeviceID } from "../CSTA-device-identifiers/AssociatedCalledDeviceID.ta.mjs";

import { NetworkCallingDeviceID, _decode_NetworkCallingDeviceID, _encode_NetworkCallingDeviceID } from "../CSTA-device-identifiers/NetworkCallingDeviceID.ta.mjs";

import { NetworkCalledDeviceID, _decode_NetworkCalledDeviceID, _encode_NetworkCalledDeviceID } from "../CSTA-device-identifiers/NetworkCalledDeviceID.ta.mjs";

import { CallCharacteristics, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";

import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";

import { ChargedDevice, _decode_ChargedDevice, _encode_ChargedDevice } from "../CSTA-call-detail-record/ChargedDevice.ta.mjs";

import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { NodeNumber, _decode_NodeNumber, _encode_NodeNumber } from "../CSTA-call-detail-record/NodeNumber.ta.mjs";

import {
    BillingID,
    _enum_for_BillingID,
    _decode_BillingID,
    _encode_BillingID
} from "../CSTA-call-detail-record/BillingID.ta.mjs";

import { ChargingInfo, _decode_ChargingInfo, _encode_ChargingInfo } from "../CSTA-charge-info/ChargingInfo.ta.mjs";

import { SupplServiceInfo, _decode_SupplServiceInfo, _encode_SupplServiceInfo } from "../CSTA-call-detail-record/SupplServiceInfo.ta.mjs";

import {
    ReasonForTerm,
    _enum_for_ReasonForTerm,
    _decode_ReasonForTerm,
    _encode_ReasonForTerm
} from "../CSTA-call-detail-record/ReasonForTerm.ta.mjs";

import { AuthCode, _decode_AuthCode, _encode_AuthCode } from "../CSTA-device-feature-types/AuthCode.ta.mjs";

import { AccountInfo, _decode_AccountInfo, _encode_AccountInfo } from "../CSTA-device-feature-types/AccountInfo.ta.mjs";

import {
    DeviceCategory,
    _enum_for_DeviceCategory,
    _decode_DeviceCategory,
    _encode_DeviceCategory
} from "../CSTA-capability-exchange/DeviceCategory.ta.mjs";

import {
    NamedDeviceTypes,
    _enum_for_NamedDeviceTypes,
    _decode_NamedDeviceTypes,
    _encode_NamedDeviceTypes
} from "../CSTA-capability-exchange/NamedDeviceTypes.ta.mjs";

import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";



/**
 * @summary CDRInformationItem
 * @description
 *
 * One call-detail record: parties, media, charged device, connection times,
 * billing, charging, supplementary services, and termination reason. Used for
 * charging and statistics. ECMA-269 §27.1.2.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRInformationItem ::= SEQUENCE
 * {     recordNumber             INTEGER (1..128)                 OPTIONAL,
 *     recordCreationTime         TimeInfo,
 *     callingDevice             CallingDeviceID                 OPTIONAL,
 *     calledDevice             CalledDeviceID                     OPTIONAL,
 *     associatedCallingDevice     AssociatedCallingDeviceID             OPTIONAL,
 *     associatedCalledDevice         AssociatedCalledDeviceID             OPTIONAL,
 *     networkCallingDevice         NetworkCallingDeviceID                 OPTIONAL,
 *     networkCalledDevice         NetworkCalledDeviceID                 OPTIONAL,
 *     callCharacteristics         [ 0] IMPLICIT     CallCharacteristics         OPTIONAL,
 *     mediaCallCharacteristics     [ 1] IMPLICIT     MediaCallCharacteristics     OPTIONAL,
 *     chargedDevice             [ 2] ChargedDevice                 OPTIONAL,
 *     recordedCall             ConnectionID                     OPTIONAL,
 *     nodeNumber             [ 3] IMPLICIT     NodeNumber             OPTIONAL,
 *     tariffTable             [ 4] IMPLICIT     INTEGER             OPTIONAL,
 *     connectionStart         [ 5] IMPLICIT     TimeInfo             OPTIONAL,
 *     connectionEnd             [ 6] IMPLICIT     TimeInfo             OPTIONAL,
 *     connectionDuration         [ 7] IMPLICIT     INTEGER             OPTIONAL,
 *     accessCode             [ 8] IMPLICIT     OCTET STRING             OPTIONAL,
 *     carrier             [ 9] IMPLICIT     INTEGER             OPTIONAL,
 *     selectedRoute             [10] IMPLICIT     INTEGER             OPTIONAL,
 *     billingID             [11] IMPLICIT     BillingID             OPTIONAL,
 *     chargingInfo             [12] IMPLICIT     ChargingInfo             OPTIONAL,
 *     supplServiceInfo         [13] IMPLICIT     SupplServiceInfo         OPTIONAL,
 *     reasonForTerm             [14] IMPLICIT     ReasonForTerm             OPTIONAL,
 *     authCode             [15] IMPLICIT     AuthCode             OPTIONAL,
 *     accountInfo             [16] IMPLICIT     AccountInfo             OPTIONAL,
 *     deviceCategory             [17] IMPLICIT     DeviceCategory             OPTIONAL,
 *     namedDeviceTypes         [18] IMPLICIT     NamedDeviceTypes         OPTIONAL,
 *     operatorDevice             [19] DeviceID                     OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CDRInformationItem {
    constructor (
        /**
         * @summary `recordNumber`.
         * @description
         *
         * Record number when more than one record is sent (1..128). ECMA-269
         * §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly recordNumber: OPTIONAL<INTEGER>,
        /**
         * @summary `recordCreationTime`.
         * @description
         *
         * Time the CDR was created. ECMA-269 §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly recordCreationTime: TimeInfo,
        /**
         * @summary `callingDevice`.
         * @description
         *
         * Calling device. ECMA-269 §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly callingDevice: OPTIONAL<CallingDeviceID>,
        /**
         * @summary `calledDevice`.
         * @description
         *
         * Called device. ECMA-269 §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly calledDevice: OPTIONAL<CalledDeviceID>,
        /**
         * @summary `associatedCallingDevice`.
         * @description
         *
         * Network Interface Device associated with the calling device. ECMA-269
         * §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly associatedCallingDevice: OPTIONAL<AssociatedCallingDeviceID>,
        /**
         * @summary `associatedCalledDevice`.
         * @description
         *
         * Network Interface Device associated with the called device. ECMA-269
         * §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly associatedCalledDevice: OPTIONAL<AssociatedCalledDeviceID>,
        /**
         * @summary `networkCallingDevice`.
         * @description
         *
         * Calling device as provided by the network. ECMA-269 §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly networkCallingDevice: OPTIONAL<NetworkCallingDeviceID>,
        /**
         * @summary `networkCalledDevice`.
         * @description
         *
         * Called device as provided by the network. ECMA-269 §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly networkCalledDevice: OPTIONAL<NetworkCalledDeviceID>,
        /**
         * @summary `callCharacteristics`.
         * @description
         *
         * High-level call characteristics (e.g. ACD). ECMA-269 §27.1.2,
         * §12.2.4.
         *
         * @public
         * @readonly
         */
        readonly callCharacteristics: OPTIONAL<CallCharacteristics>,
        /**
         * @summary `mediaCallCharacteristics`.
         * @description
         *
         * Media class of the call. ECMA-269 §27.1.2, §12.2.20.
         *
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
        /**
         * @summary `chargedDevice`.
         * @description
         *
         * Attendant or non-attendant charged device. ECMA-269 §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly chargedDevice: OPTIONAL<ChargedDevice>,
        /**
         * @summary `recordedCall`.
         * @description
         *
         * Call for which details are recorded. ECMA-269 §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly recordedCall: OPTIONAL<ConnectionID>,
        /**
         * @summary `nodeNumber`.
         * @description
         *
         * Originating node in a switching network (area0–2). ECMA-269 §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly nodeNumber: OPTIONAL<NodeNumber>,
        /**
         * @summary `tariffTable`.
         * @description
         *
         * Tariff table for the network type (PSTN, ISDN, etc.). ECMA-269
         * §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly tariffTable: OPTIONAL<INTEGER>,
        /**
         * @summary `connectionStart`.
         * @description
         *
         * Date and time the connection was created. ECMA-269 §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly connectionStart: OPTIONAL<TimeInfo>,
        /**
         * @summary `connectionEnd`.
         * @description
         *
         * Date and time the connection ended. ECMA-269 §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly connectionEnd: OPTIONAL<TimeInfo>,
        /**
         * @summary `connectionDuration`.
         * @description
         *
         * Connection duration in tenths of a second. ECMA-269 §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly connectionDuration: OPTIONAL<INTEGER>,
        /**
         * @summary `accessCode`.
         * @description
         *
         * Dialled access number (e.g. business vs private external). ECMA-269
         * §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly accessCode: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `carrier`.
         * @description
         *
         * Network that was used. ECMA-269 §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly carrier: OPTIONAL<INTEGER>,
        /**
         * @summary `selectedRoute`.
         * @description
         *
         * Route that was used. ECMA-269 §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly selectedRoute: OPTIONAL<INTEGER>,
        /**
         * @summary `billingID`.
         * @description
         *
         * Type of charging (normal, reverse, credit card, etc.). ECMA-269
         * §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly billingID: OPTIONAL<BillingID>,
        /**
         * @summary `chargingInfo`.
         * @description
         *
         * Charging or currency units charged to a device. ECMA-269 §27.1.2,
         * §12.2.7.
         *
         * @public
         * @readonly
         */
        readonly chargingInfo: OPTIONAL<ChargingInfo>,
        /**
         * @summary `supplServiceInfo`.
         * @description
         *
         * Supplementary services used; multiple bits may be set. ECMA-269
         * §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly supplServiceInfo: OPTIONAL<SupplServiceInfo>,
        /**
         * @summary `reasonForTerm`.
         * @description
         *
         * Why the connection terminated. ECMA-269 §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly reasonForTerm: OPTIONAL<ReasonForTerm>,
        /**
         * @summary `authCode`.
         * @description
         *
         * Authorization code used to authorize the call. ECMA-269 §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly authCode: OPTIONAL<AuthCode>,
        /**
         * @summary `accountInfo`.
         * @description
         *
         * Account code used for the call. ECMA-269 §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly accountInfo: OPTIONAL<AccountInfo>,
        /**
         * @summary `deviceCategory`.
         * @description
         *
         * Category of the charged device (station, ACD, etc.). ECMA-269
         * §27.1.2.
         *
         * @public
         * @readonly
         */
        readonly deviceCategory: OPTIONAL<DeviceCategory>,
        /**
         * @summary `namedDeviceTypes`.
         * @description
         *
         * Named device type of the charged device. ECMA-269 §27.1.2; ECMA-285
         * §9.11.
         *
         * @public
         * @readonly
         */
        readonly namedDeviceTypes: OPTIONAL<NamedDeviceTypes>,
        /**
         * @summary `operatorDevice`.
         * @description
         *
         * Operator/attendant device. ECMA-285 §9.11.
         *
         * @public
         * @readonly
         */
        readonly operatorDevice: OPTIONAL<DeviceID>
    ) {}

    /**
     * @summary Restructures an object into a CDRInformationItem
     * @description
     * 
     * This takes an `object` and converts it to a `CDRInformationItem`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CDRInformationItem`.
     * @returns {CDRInformationItem}
     */
    public static _from_object (_o: { [_K in keyof (CDRInformationItem)]: (CDRInformationItem)[_K] }): CDRInformationItem {
        return new CDRInformationItem(_o.recordNumber, _o.recordCreationTime, _o.callingDevice, _o.calledDevice, _o.associatedCallingDevice, _o.associatedCalledDevice, _o.networkCallingDevice, _o.networkCalledDevice, _o.callCharacteristics, _o.mediaCallCharacteristics, _o.chargedDevice, _o.recordedCall, _o.nodeNumber, _o.tariffTable, _o.connectionStart, _o.connectionEnd, _o.connectionDuration, _o.accessCode, _o.carrier, _o.selectedRoute, _o.billingID, _o.chargingInfo, _o.supplServiceInfo, _o.reasonForTerm, _o.authCode, _o.accountInfo, _o.deviceCategory, _o.namedDeviceTypes, _o.operatorDevice);
    }

        /**
         * @summary The enum used as the type of the component `billingID`
         * @public
         * @static
         */

    public static _enum_for_billingID = _enum_for_BillingID;        /**
         * @summary The enum used as the type of the component `reasonForTerm`
         * @public
         * @static
         */

    public static _enum_for_reasonForTerm = _enum_for_ReasonForTerm;        /**
         * @summary The enum used as the type of the component `deviceCategory`
         * @public
         * @static
         */

    public static _enum_for_deviceCategory = _enum_for_DeviceCategory;        /**
         * @summary The enum used as the type of the component `namedDeviceTypes`
         * @public
         * @static
         */

    public static _enum_for_namedDeviceTypes = _enum_for_NamedDeviceTypes;
}

/**
 * @summary The Leading Root Component Types of CDRInformationItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CDRInformationItem: $.ComponentSpec[] = [
    new $.ComponentSpec("recordNumber", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("recordCreationTime", false, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("callingDevice", true, $.hasTag(_TagClass.application, 1)),
    new $.ComponentSpec("calledDevice", true, $.hasTag(_TagClass.application, 2)),
    new $.ComponentSpec("associatedCallingDevice", true, $.hasTag(_TagClass.application, 5)),
    new $.ComponentSpec("associatedCalledDevice", true, $.hasTag(_TagClass.application, 6)),
    new $.ComponentSpec("networkCallingDevice", true, $.hasTag(_TagClass.application, 7)),
    new $.ComponentSpec("networkCalledDevice", true, $.hasTag(_TagClass.application, 8)),
    new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("chargedDevice", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("recordedCall", true, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("nodeNumber", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("tariffTable", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("connectionStart", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("connectionEnd", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("connectionDuration", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("accessCode", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("selectedRoute", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("billingID", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("chargingInfo", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("supplServiceInfo", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("reasonForTerm", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("authCode", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("accountInfo", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("deviceCategory", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("namedDeviceTypes", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("operatorDevice", true, $.hasTag(_TagClass.context, 19))
];

/**
 * @summary The Trailing Root Component Types of CDRInformationItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CDRInformationItem: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CDRInformationItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CDRInformationItem: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CDRInformationItem: $.ASN1Decoder<CDRInformationItem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CDRInformationItem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CDRInformationItem (el: _Element): CDRInformationItem {
    if (!_cached_decoder_for_CDRInformationItem) { _cached_decoder_for_CDRInformationItem = function (el: _Element): CDRInformationItem {
    let recordNumber: OPTIONAL<INTEGER>;
    let recordCreationTime!: TimeInfo;
    let callingDevice: OPTIONAL<CallingDeviceID>;
    let calledDevice: OPTIONAL<CalledDeviceID>;
    let associatedCallingDevice: OPTIONAL<AssociatedCallingDeviceID>;
    let associatedCalledDevice: OPTIONAL<AssociatedCalledDeviceID>;
    let networkCallingDevice: OPTIONAL<NetworkCallingDeviceID>;
    let networkCalledDevice: OPTIONAL<NetworkCalledDeviceID>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let chargedDevice: OPTIONAL<ChargedDevice>;
    let recordedCall: OPTIONAL<ConnectionID>;
    let nodeNumber: OPTIONAL<NodeNumber>;
    let tariffTable: OPTIONAL<INTEGER>;
    let connectionStart: OPTIONAL<TimeInfo>;
    let connectionEnd: OPTIONAL<TimeInfo>;
    let connectionDuration: OPTIONAL<INTEGER>;
    let accessCode: OPTIONAL<OCTET_STRING>;
    let carrier: OPTIONAL<INTEGER>;
    let selectedRoute: OPTIONAL<INTEGER>;
    let billingID: OPTIONAL<BillingID>;
    let chargingInfo: OPTIONAL<ChargingInfo>;
    let supplServiceInfo: OPTIONAL<SupplServiceInfo>;
    let reasonForTerm: OPTIONAL<ReasonForTerm>;
    let authCode: OPTIONAL<AuthCode>;
    let accountInfo: OPTIONAL<AccountInfo>;
    let deviceCategory: OPTIONAL<DeviceCategory>;
    let namedDeviceTypes: OPTIONAL<NamedDeviceTypes>;
    let operatorDevice: OPTIONAL<DeviceID>;
    const callbacks: $.DecodingMap = {
        "recordNumber": (_el: _Element): void => { recordNumber = $._decodeInteger(_el); },
        "recordCreationTime": (_el: _Element): void => { recordCreationTime = _decode_TimeInfo(_el); },
        "callingDevice": (_el: _Element): void => { callingDevice = _decode_CallingDeviceID(_el); },
        "calledDevice": (_el: _Element): void => { calledDevice = _decode_CalledDeviceID(_el); },
        "associatedCallingDevice": (_el: _Element): void => { associatedCallingDevice = _decode_AssociatedCallingDeviceID(_el); },
        "associatedCalledDevice": (_el: _Element): void => { associatedCalledDevice = _decode_AssociatedCalledDeviceID(_el); },
        "networkCallingDevice": (_el: _Element): void => { networkCallingDevice = _decode_NetworkCallingDeviceID(_el); },
        "networkCalledDevice": (_el: _Element): void => { networkCalledDevice = _decode_NetworkCalledDeviceID(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "chargedDevice": (_el: _Element): void => { chargedDevice = $._decode_explicit<ChargedDevice>(() => _decode_ChargedDevice)(_el); },
        "recordedCall": (_el: _Element): void => { recordedCall = _decode_ConnectionID(_el); },
        "nodeNumber": (_el: _Element): void => { nodeNumber = $._decode_implicit<NodeNumber>(() => _decode_NodeNumber)(_el); },
        "tariffTable": (_el: _Element): void => { tariffTable = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "connectionStart": (_el: _Element): void => { connectionStart = $._decode_implicit<TimeInfo>(() => _decode_TimeInfo)(_el); },
        "connectionEnd": (_el: _Element): void => { connectionEnd = $._decode_implicit<TimeInfo>(() => _decode_TimeInfo)(_el); },
        "connectionDuration": (_el: _Element): void => { connectionDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "accessCode": (_el: _Element): void => { accessCode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "selectedRoute": (_el: _Element): void => { selectedRoute = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "billingID": (_el: _Element): void => { billingID = $._decode_implicit<BillingID>(() => _decode_BillingID)(_el); },
        "chargingInfo": (_el: _Element): void => { chargingInfo = $._decode_implicit<ChargingInfo>(() => _decode_ChargingInfo)(_el); },
        "supplServiceInfo": (_el: _Element): void => { supplServiceInfo = $._decode_implicit<SupplServiceInfo>(() => _decode_SupplServiceInfo)(_el); },
        "reasonForTerm": (_el: _Element): void => { reasonForTerm = $._decode_implicit<ReasonForTerm>(() => _decode_ReasonForTerm)(_el); },
        "authCode": (_el: _Element): void => { authCode = $._decode_implicit<AuthCode>(() => _decode_AuthCode)(_el); },
        "accountInfo": (_el: _Element): void => { accountInfo = $._decode_implicit<AccountInfo>(() => _decode_AccountInfo)(_el); },
        "deviceCategory": (_el: _Element): void => { deviceCategory = $._decode_implicit<DeviceCategory>(() => _decode_DeviceCategory)(_el); },
        "namedDeviceTypes": (_el: _Element): void => { namedDeviceTypes = $._decode_implicit<NamedDeviceTypes>(() => _decode_NamedDeviceTypes)(_el); },
        "operatorDevice": (_el: _Element): void => { operatorDevice = $._decode_explicit<DeviceID>(() => _decode_DeviceID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CDRInformationItem,
        _extension_additions_list_spec_for_CDRInformationItem,
        _root_component_type_list_2_spec_for_CDRInformationItem,
        undefined,
    );
    return new CDRInformationItem(
        recordNumber,
        recordCreationTime,
        callingDevice,
        calledDevice,
        associatedCallingDevice,
        associatedCalledDevice,
        networkCallingDevice,
        networkCalledDevice,
        callCharacteristics,
        mediaCallCharacteristics,
        chargedDevice,
        recordedCall,
        nodeNumber,
        tariffTable,
        connectionStart,
        connectionEnd,
        connectionDuration,
        accessCode,
        carrier,
        selectedRoute,
        billingID,
        chargingInfo,
        supplServiceInfo,
        reasonForTerm,
        authCode,
        accountInfo,
        deviceCategory,
        namedDeviceTypes,
        operatorDevice
    );
}; }
    return _cached_decoder_for_CDRInformationItem(el);
}

let _cached_encoder_for_CDRInformationItem: $.ASN1Encoder<CDRInformationItem> | null = null;

/**
 * @summary Encodes a(n) CDRInformationItem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CDRInformationItem, encoded as an ASN.1 Element.
 */
export
function _encode_CDRInformationItem (value: CDRInformationItem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CDRInformationItem) { _cached_encoder_for_CDRInformationItem = function (value: CDRInformationItem, elGetter: $.ASN1Encoder<CDRInformationItem>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.recordNumber === undefined) ? undefined : $._encodeInteger(value.recordNumber, $.BER)),
            /* REQUIRED   */ _encode_TimeInfo(value.recordCreationTime, $.BER),
            /* IF_ABSENT  */ ((value.callingDevice === undefined) ? undefined : _encode_CallingDeviceID(value.callingDevice, $.BER)),
            /* IF_ABSENT  */ ((value.calledDevice === undefined) ? undefined : _encode_CalledDeviceID(value.calledDevice, $.BER)),
            /* IF_ABSENT  */ ((value.associatedCallingDevice === undefined) ? undefined : _encode_AssociatedCallingDeviceID(value.associatedCallingDevice, $.BER)),
            /* IF_ABSENT  */ ((value.associatedCalledDevice === undefined) ? undefined : _encode_AssociatedCalledDeviceID(value.associatedCalledDevice, $.BER)),
            /* IF_ABSENT  */ ((value.networkCallingDevice === undefined) ? undefined : _encode_NetworkCallingDeviceID(value.networkCallingDevice, $.BER)),
            /* IF_ABSENT  */ ((value.networkCalledDevice === undefined) ? undefined : _encode_NetworkCalledDeviceID(value.networkCalledDevice, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.chargedDevice === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_ChargedDevice, $.BER)(value.chargedDevice, $.BER)),
            /* IF_ABSENT  */ ((value.recordedCall === undefined) ? undefined : _encode_ConnectionID(value.recordedCall, $.BER)),
            /* IF_ABSENT  */ ((value.nodeNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_NodeNumber, $.BER)(value.nodeNumber, $.BER)),
            /* IF_ABSENT  */ ((value.tariffTable === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.tariffTable, $.BER)),
            /* IF_ABSENT  */ ((value.connectionStart === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_TimeInfo, $.BER)(value.connectionStart, $.BER)),
            /* IF_ABSENT  */ ((value.connectionEnd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_TimeInfo, $.BER)(value.connectionEnd, $.BER)),
            /* IF_ABSENT  */ ((value.connectionDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.connectionDuration, $.BER)),
            /* IF_ABSENT  */ ((value.accessCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.accessCode, $.BER)),
            /* IF_ABSENT  */ ((value.carrier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.carrier, $.BER)),
            /* IF_ABSENT  */ ((value.selectedRoute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.selectedRoute, $.BER)),
            /* IF_ABSENT  */ ((value.billingID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_BillingID, $.BER)(value.billingID, $.BER)),
            /* IF_ABSENT  */ ((value.chargingInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_ChargingInfo, $.BER)(value.chargingInfo, $.BER)),
            /* IF_ABSENT  */ ((value.supplServiceInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_SupplServiceInfo, $.BER)(value.supplServiceInfo, $.BER)),
            /* IF_ABSENT  */ ((value.reasonForTerm === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_ReasonForTerm, $.BER)(value.reasonForTerm, $.BER)),
            /* IF_ABSENT  */ ((value.authCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_AuthCode, $.BER)(value.authCode, $.BER)),
            /* IF_ABSENT  */ ((value.accountInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_AccountInfo, $.BER)(value.accountInfo, $.BER)),
            /* IF_ABSENT  */ ((value.deviceCategory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_DeviceCategory, $.BER)(value.deviceCategory, $.BER)),
            /* IF_ABSENT  */ ((value.namedDeviceTypes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_NamedDeviceTypes, $.BER)(value.namedDeviceTypes, $.BER)),
            /* IF_ABSENT  */ ((value.operatorDevice === undefined) ? undefined : $._encode_explicit(_TagClass.context, 19, () => _encode_DeviceID, $.BER)(value.operatorDevice, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CDRInformationItem(value, elGetter);
}


/* eslint-enable */
