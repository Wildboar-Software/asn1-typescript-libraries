/* eslint-disable */
import {
    GeneralizedTime,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AccessEventType, _decode_AccessEventType, _encode_AccessEventType, _enum_for_AccessEventType } from "../IPAccessPDU/AccessEventType.ta.mjs";
// export { AccessEventType, _enum_for_AccessEventType, AccessEventType_accessAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, accessAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_accessAccept /* IMPORTED_LONG_ENUMERATION_ITEM */, accessAccept /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_accessReject /* IMPORTED_LONG_ENUMERATION_ITEM */, accessReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_accessFailed /* IMPORTED_LONG_ENUMERATION_ITEM */, accessFailed /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_sessionStart /* IMPORTED_LONG_ENUMERATION_ITEM */, sessionStart /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_sessionEnd /* IMPORTED_LONG_ENUMERATION_ITEM */, sessionEnd /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_interimUpdate /* IMPORTED_LONG_ENUMERATION_ITEM */, interimUpdate /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_startOfInterceptionWithSessionActive /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptionWithSessionActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_accessEnd /* IMPORTED_LONG_ENUMERATION_ITEM */, accessEnd /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_endOfInterceptionWithSessionActive /* IMPORTED_LONG_ENUMERATION_ITEM */, endOfInterceptionWithSessionActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, AccessEventType_startOfInterceptionWithoutNetworkSession /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptionWithoutNetworkSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_endOfInterceptionWithoutNetworkSession /* IMPORTED_LONG_ENUMERATION_ITEM */, endOfInterceptionWithoutNetworkSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_sessionExpired /* IMPORTED_LONG_ENUMERATION_ITEM */, sessionExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessEventType, _encode_AccessEventType } from "../IPAccessPDU/AccessEventType.ta.mjs";
import { InternetAccessType, _decode_InternetAccessType, _encode_InternetAccessType, _enum_for_InternetAccessType } from "../IPAccessPDU/InternetAccessType.ta.mjs";
// export { InternetAccessType, _enum_for_InternetAccessType, InternetAccessType_undefined /* IMPORTED_LONG_ENUMERATION_ITEM */, InternetAccessType_dialUp /* IMPORTED_LONG_ENUMERATION_ITEM */, dialUp /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_xDSL /* IMPORTED_LONG_ENUMERATION_ITEM */, xDSL /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_cableModem /* IMPORTED_LONG_ENUMERATION_ITEM */, cableModem /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_lAN /* IMPORTED_LONG_ENUMERATION_ITEM */, lAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_wirelessLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelessLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_fTTx /* IMPORTED_LONG_ENUMERATION_ITEM */, fTTx /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_wIMAX_HIPERMAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wIMAX_HIPERMAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_satellite /* IMPORTED_LONG_ENUMERATION_ITEM */, satellite /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_wireless_other /* IMPORTED_LONG_ENUMERATION_ITEM */, wireless_other /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_InternetAccessType, _encode_InternetAccessType } from "../IPAccessPDU/InternetAccessType.ta.mjs";
import { IPVersion, _decode_IPVersion, _encode_IPVersion, _enum_for_IPVersion } from "../IPAccessPDU/IPVersion.ta.mjs";
// export { IPVersion, _enum_for_IPVersion, IPVersion_iPV4 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPV4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, IPVersion_iPV6 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPV6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, IPVersion_iPV4andV6 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPV4andV6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IPVersion, _encode_IPVersion } from "../IPAccessPDU/IPVersion.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../LI-PS-PDU/IPAddress.ta.mjs";
import { EndReason, _decode_EndReason, _encode_EndReason, _enum_for_EndReason } from "../IPAccessPDU/EndReason.ta.mjs";
// export { EndReason, _enum_for_EndReason, EndReason_undefined /* IMPORTED_LONG_ENUMERATION_ITEM */, EndReason_regularLogoff /* IMPORTED_LONG_ENUMERATION_ITEM */, regularLogoff /* IMPORTED_SHORT_ENUMERATION_ITEM */, EndReason_connectionLoss /* IMPORTED_LONG_ENUMERATION_ITEM */, connectionLoss /* IMPORTED_SHORT_ENUMERATION_ITEM */, EndReason_connectionTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, connectionTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EndReason_leaseExpired /* IMPORTED_LONG_ENUMERATION_ITEM */, leaseExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EndReason, _encode_EndReason } from "../IPAccessPDU/EndReason.ta.mjs";
import { IPIRIIDType, _decode_IPIRIIDType, _encode_IPIRIIDType } from "../IPAccessPDU/IPIRIIDType.ta.mjs";
// export { IPIRIIDType, _decode_IPIRIIDType, _encode_IPIRIIDType } from "../IPAccessPDU/IPIRIIDType.ta.mjs";
import { NationalIPIRIParameters, _decode_NationalIPIRIParameters, _encode_NationalIPIRIParameters } from "../IPAccessPDU/NationalIPIRIParameters.ta.mjs";
// export { NationalIPIRIParameters, _decode_NationalIPIRIParameters, _encode_NationalIPIRIParameters } from "../IPAccessPDU/NationalIPIRIParameters.ta.mjs";
import { AuthenticationType, _decode_AuthenticationType, _encode_AuthenticationType, _enum_for_AuthenticationType } from "../IPAccessPDU/AuthenticationType.ta.mjs";
// export { AuthenticationType, _enum_for_AuthenticationType, AuthenticationType_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, AuthenticationType_static /* IMPORTED_LONG_ENUMERATION_ITEM */, static_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, AuthenticationType_radiusAAA /* IMPORTED_LONG_ENUMERATION_ITEM */, radiusAAA /* IMPORTED_SHORT_ENUMERATION_ITEM */, AuthenticationType_dhcpAAA /* IMPORTED_LONG_ENUMERATION_ITEM */, dhcpAAA /* IMPORTED_SHORT_ENUMERATION_ITEM */, AuthenticationType_diameterAAA /* IMPORTED_LONG_ENUMERATION_ITEM */, diameterAAA /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AuthenticationType, _encode_AuthenticationType } from "../IPAccessPDU/AuthenticationType.ta.mjs";
import { OtherTargetIdentifiers, _decode_OtherTargetIdentifiers, _encode_OtherTargetIdentifiers } from "../IPAccessPDU/OtherTargetIdentifiers.ta.mjs";
// export { OtherTargetIdentifiers, _decode_OtherTargetIdentifiers, _encode_OtherTargetIdentifiers } from "../IPAccessPDU/OtherTargetIdentifiers.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../LI-PS-PDU/Location.ta.mjs";
import { FramedRoute, _decode_FramedRoute, _encode_FramedRoute } from "../IPAccessPDU/FramedRoute.ta.mjs";
import * as LI_PS_PDU from "../LI-PS-PDU/index.mjs";
// export { FramedRoute, _decode_FramedRoute, _encode_FramedRoute } from "../IPAccessPDU/FramedRoute.ta.mjs";


/**
 * @summary IPIRIContents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPIRIContents ::= SEQUENCE
 * {
 *     accessEventType         [0] AccessEventType,
 *     targetUsername          [1] OCTET STRING,
 *         -- in ASCII-characters
 *     internetAccessType      [2] InternetAccessType,
 *     iPVersion               [3] IPVersion,
 *     targetIPAddress         [4] LI-PS-PDU.IPAddress OPTIONAL,
 *         -- IP address may not be available in case of failed logon attempts.
 *         -- If it is available, it must be sent.
 *         -- This field will carry the first IPv4 or IPv6 target IP address with or without
 *         -- subnet. Use of this field is fully described in section 6.2.1.
 *     targetNetworkID         [5] UTF8String (SIZE (1..20)) OPTIONAL,
 *         -- Target network ID (e.g. MAC address, PSTN number)
 *     targetCPEID             [6] UTF8String (SIZE (1..128)) OPTIONAL,
 *         -- CPEID (e.g. Relay Agent info, computer name)
 *     targetLocation          [7] UTF8String (SIZE (1..64)) OPTIONAL,
 *         -- When internetAccessType is Wireless LAN, this field should contain a string which
 *         -- uniquely identifies the wireless accesspoint within the SvP domain
 *         -- New implementations are encouraged to use the location [24] parameter where possible.
 *     pOPPortNumber           [8] INTEGER (0..4294967295) OPTIONAL,
 *         -- The POP port number used by the target
 *     callBackNumber          [9] UTF8String (SIZE (1..20)) OPTIONAL,
 *         -- The number used to call-back the target
 *     startTime               [10] GeneralizedTime OPTIONAL,
 *         -- The start date-time of the session or lease
 *     endTime                 [11] GeneralizedTime OPTIONAL,
 *         -- The actual end date-time of the session or lease
 *     endReason               [12] EndReason OPTIONAL,
 *         -- The reason for the session to end
 *     octetsReceived          [13] INTEGER (0..18446744073709551615) OPTIONAL,
 *         -- The number of octets the target received
 *     octetsTransmitted       [14] INTEGER (0..18446744073709551615) OPTIONAL,
 *         -- The number of octets the target transmitted
 *     rawAAAData              [15] OCTET STRING OPTIONAL,
 *         -- Content of the raw AAA record
 *     ...,
 *     expectedEndTime         [16] GeneralizedTime OPTIONAL,
 *         -- The expected end date-time of the session or lease
 *     pOPPhoneNumber          [17] UTF8String (SIZE (1..20)) OPTIONAL,
 *         -- The phone number dialed by the target for dial-up
 *     pOPIdentifier           [18] IPIRIIDType OPTIONAL,
 *         -- The identifier or name of the POP
 *     pOPIPAddress            [19] LI-PS-PDU.IPAddress OPTIONAL,
 *         -- The IP address of the POP
 *     nationalIPIRIParameters [20] NationalIPIRIParameters OPTIONAL,
 *         -- National IP IRI Parameters
 *     additionalIPAddress     [21] LI-PS-PDU.IPAddress OPTIONAL,
 *         -- This field will carry the first IPv6 target IP address with or without prefix when the
 *         -- iPVersion parameter is set to iPV4andV6.
 *         -- Use of this field is fully described in section 6.2.1
 *     authenticationType      [22] AuthenticationType OPTIONAL,
 *         -- Field used to identify the authentication type to assist with LEMF data validation
 *     otherTargetIdentifiers  [23] SEQUENCE OF OtherTargetIdentifiers OPTIONAL,
 *         -- This parameter will carry the second and subsequent IPv4 or IPv6 target IP addresses
 *         -- It is used when multiple subnet/prefix ranges are assigned to a target service.
 *         -- Use of this field is fully described in section 6.2.1
 *     location                [24] LI-PS-PDU.Location OPTIONAL,
 *         -- The location associated with the target
 *     pOPPortID               [25] OCTET STRING OPTIONAL,
 *         -- This field will carry the NAS-Port-ID as defined in RFC 2869 [17]:
 *         -- This parameter shall be populated with the RADIUS value.
 *     framedRoutes            [26] SEQUENCE OF FramedRoute OPTIONAL
 *         -- It is used to list all the available Framed Route and Framed IPv6 Route information
 * 
 * 
 * }
 * ```
 * 
 * @class
 */
export
class IPIRIContents {
    /**
     * @summary `accessEventType`.
     * @public
     * @readonly
     */
    readonly accessEventType: AccessEventType;
    /**
     * @summary `targetUsername`.
     * @public
     * @readonly
     */
    readonly targetUsername: OCTET_STRING;
    /**
     * @summary `internetAccessType`.
     * @public
     * @readonly
     */
    readonly internetAccessType: InternetAccessType;
    /**
     * @summary `iPVersion`.
     * @public
     * @readonly
     */
    readonly iPVersion: IPVersion;
    /**
     * @summary `targetIPAddress`.
     * @public
     * @readonly
     */
    readonly targetIPAddress: OPTIONAL<LI_PS_PDU.IPAddress>;
    /**
     * @summary `targetNetworkID`.
     * @public
     * @readonly
     */
    readonly targetNetworkID: OPTIONAL<UTF8String>;
    /**
     * @summary `targetCPEID`.
     * @public
     * @readonly
     */
    readonly targetCPEID: OPTIONAL<UTF8String>;
    /**
     * @summary `targetLocation`.
     * @public
     * @readonly
     */
    readonly targetLocation: OPTIONAL<UTF8String>;
    /**
     * @summary `pOPPortNumber`.
     * @public
     * @readonly
     */
    readonly pOPPortNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `callBackNumber`.
     * @public
     * @readonly
     */
    readonly callBackNumber: OPTIONAL<UTF8String>;
    /**
     * @summary `startTime`.
     * @public
     * @readonly
     */
    readonly startTime: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `endTime`.
     * @public
     * @readonly
     */
    readonly endTime: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `endReason`.
     * @public
     * @readonly
     */
    readonly endReason: OPTIONAL<EndReason>;
    /**
     * @summary `octetsReceived`.
     * @public
     * @readonly
     */
    readonly octetsReceived: OPTIONAL<INTEGER>;
    /**
     * @summary `octetsTransmitted`.
     * @public
     * @readonly
     */
    readonly octetsTransmitted: OPTIONAL<INTEGER>;
    /**
     * @summary `rawAAAData`.
     * @public
     * @readonly
     */
    readonly rawAAAData: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `expectedEndTime`.
     * @public
     * @readonly
     */
    readonly expectedEndTime: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `pOPPhoneNumber`.
     * @public
     * @readonly
     */
    readonly pOPPhoneNumber: OPTIONAL<UTF8String>;
    /**
     * @summary `pOPIdentifier`.
     * @public
     * @readonly
     */
    readonly pOPIdentifier: OPTIONAL<IPIRIIDType>;
    /**
     * @summary `pOPIPAddress`.
     * @public
     * @readonly
     */
    readonly pOPIPAddress: OPTIONAL<LI_PS_PDU.IPAddress>;
    /**
     * @summary `nationalIPIRIParameters`.
     * @public
     * @readonly
     */
    readonly nationalIPIRIParameters: OPTIONAL<NationalIPIRIParameters>;
    /**
     * @summary `additionalIPAddress`.
     * @public
     * @readonly
     */
    readonly additionalIPAddress: OPTIONAL<LI_PS_PDU.IPAddress>;
    /**
     * @summary `authenticationType`.
     * @public
     * @readonly
     */
    readonly authenticationType: OPTIONAL<AuthenticationType>;
    /**
     * @summary `otherTargetIdentifiers`.
     * @public
     * @readonly
     */
    readonly otherTargetIdentifiers: OPTIONAL<OtherTargetIdentifiers[]>;
    /**
     * @summary `location`.
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<LI_PS_PDU.Location>;
    /**
     * @summary `pOPPortID`.
     * @public
     * @readonly
     */
    readonly pOPPortID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `framedRoutes`.
     * @public
     * @readonly
     */
    readonly framedRoutes: OPTIONAL<FramedRoute[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        accessEventType: AccessEventType,
        targetUsername: OCTET_STRING,
        internetAccessType: InternetAccessType,
        iPVersion: IPVersion,
        targetIPAddress: OPTIONAL<LI_PS_PDU.IPAddress>,
        targetNetworkID: OPTIONAL<UTF8String>,
        targetCPEID: OPTIONAL<UTF8String>,
        targetLocation: OPTIONAL<UTF8String>,
        pOPPortNumber: OPTIONAL<INTEGER>,
        callBackNumber: OPTIONAL<UTF8String>,
        startTime: OPTIONAL<GeneralizedTime>,
        endTime: OPTIONAL<GeneralizedTime>,
        endReason: OPTIONAL<EndReason>,
        octetsReceived: OPTIONAL<INTEGER>,
        octetsTransmitted: OPTIONAL<INTEGER>,
        rawAAAData: OPTIONAL<OCTET_STRING>,
        expectedEndTime: OPTIONAL<GeneralizedTime>,
        pOPPhoneNumber: OPTIONAL<UTF8String>,
        pOPIdentifier: OPTIONAL<IPIRIIDType>,
        pOPIPAddress: OPTIONAL<LI_PS_PDU.IPAddress>,
        nationalIPIRIParameters: OPTIONAL<NationalIPIRIParameters>,
        additionalIPAddress: OPTIONAL<LI_PS_PDU.IPAddress>,
        authenticationType: OPTIONAL<AuthenticationType>,
        otherTargetIdentifiers: OPTIONAL<OtherTargetIdentifiers[]>,
        location: OPTIONAL<LI_PS_PDU.Location>,
        pOPPortID: OPTIONAL<OCTET_STRING>,
        framedRoutes: OPTIONAL<FramedRoute[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.accessEventType = accessEventType;
        this.targetUsername = targetUsername;
        this.internetAccessType = internetAccessType;
        this.iPVersion = iPVersion;
        this.targetIPAddress = targetIPAddress;
        this.targetNetworkID = targetNetworkID;
        this.targetCPEID = targetCPEID;
        this.targetLocation = targetLocation;
        this.pOPPortNumber = pOPPortNumber;
        this.callBackNumber = callBackNumber;
        this.startTime = startTime;
        this.endTime = endTime;
        this.endReason = endReason;
        this.octetsReceived = octetsReceived;
        this.octetsTransmitted = octetsTransmitted;
        this.rawAAAData = rawAAAData;
        this.expectedEndTime = expectedEndTime;
        this.pOPPhoneNumber = pOPPhoneNumber;
        this.pOPIdentifier = pOPIdentifier;
        this.pOPIPAddress = pOPIPAddress;
        this.nationalIPIRIParameters = nationalIPIRIParameters;
        this.additionalIPAddress = additionalIPAddress;
        this.authenticationType = authenticationType;
        this.otherTargetIdentifiers = otherTargetIdentifiers;
        this.location = location;
        this.pOPPortID = pOPPortID;
        this.framedRoutes = framedRoutes;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IPIRIContents
     * @description
     * 
     * This takes an `object` and converts it to a `IPIRIContents`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPIRIContents`.
     * @returns {IPIRIContents}
     */
    public static _from_object (_o: { [_K in keyof (IPIRIContents)]: (IPIRIContents)[_K] }): IPIRIContents {
        return new IPIRIContents(_o.accessEventType, _o.targetUsername, _o.internetAccessType, _o.iPVersion, _o.targetIPAddress, _o.targetNetworkID, _o.targetCPEID, _o.targetLocation, _o.pOPPortNumber, _o.callBackNumber, _o.startTime, _o.endTime, _o.endReason, _o.octetsReceived, _o.octetsTransmitted, _o.rawAAAData, _o.expectedEndTime, _o.pOPPhoneNumber, _o.pOPIdentifier, _o.pOPIPAddress, _o.nationalIPIRIParameters, _o.additionalIPAddress, _o.authenticationType, _o.otherTargetIdentifiers, _o.location, _o.pOPPortID, _o.framedRoutes, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `accessEventType`
         * @public
         * @static
         */

    public static _enum_for_accessEventType = _enum_for_AccessEventType;        /**
         * @summary The enum used as the type of the component `internetAccessType`
         * @public
         * @static
         */

    public static _enum_for_internetAccessType = _enum_for_InternetAccessType;        /**
         * @summary The enum used as the type of the component `iPVersion`
         * @public
         * @static
         */

    public static _enum_for_iPVersion = _enum_for_IPVersion;        /**
         * @summary The enum used as the type of the component `endReason`
         * @public
         * @static
         */

    public static _enum_for_endReason = _enum_for_EndReason;        /**
         * @summary The enum used as the type of the component `authenticationType`
         * @public
         * @static
         */

    public static _enum_for_authenticationType = _enum_for_AuthenticationType;
}

/**
 * @summary The Leading Root Component Types of IPIRIContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPIRIContents: $.ComponentSpec[] = [
    new $.ComponentSpec("accessEventType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("targetUsername", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("internetAccessType", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iPVersion", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("targetIPAddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("targetNetworkID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("targetCPEID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("targetLocation", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("pOPPortNumber", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("callBackNumber", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("endTime", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("endReason", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("octetsReceived", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("octetsTransmitted", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("rawAAAData", true, $.hasTag(_TagClass.context, 15))
];

/**
 * @summary The Trailing Root Component Types of IPIRIContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPIRIContents: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPIRIContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPIRIContents: $.ComponentSpec[] = [
    new $.ComponentSpec("expectedEndTime", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("pOPPhoneNumber", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("pOPIdentifier", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("pOPIPAddress", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("nationalIPIRIParameters", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("additionalIPAddress", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("authenticationType", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("otherTargetIdentifiers", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("pOPPortID", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("framedRoutes", true, $.hasTag(_TagClass.context, 26))
];

let _cached_decoder_for_IPIRIContents: $.ASN1Decoder<IPIRIContents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPIRIContents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPIRIContents (el: _Element): IPIRIContents {
    if (!_cached_decoder_for_IPIRIContents) { _cached_decoder_for_IPIRIContents = function (el: _Element): IPIRIContents {
    let accessEventType!: AccessEventType;
    let targetUsername!: OCTET_STRING;
    let internetAccessType!: InternetAccessType;
    let iPVersion!: IPVersion;
    let targetIPAddress: OPTIONAL<LI_PS_PDU.IPAddress>;
    let targetNetworkID: OPTIONAL<UTF8String>;
    let targetCPEID: OPTIONAL<UTF8String>;
    let targetLocation: OPTIONAL<UTF8String>;
    let pOPPortNumber: OPTIONAL<INTEGER>;
    let callBackNumber: OPTIONAL<UTF8String>;
    let startTime: OPTIONAL<GeneralizedTime>;
    let endTime: OPTIONAL<GeneralizedTime>;
    let endReason: OPTIONAL<EndReason>;
    let octetsReceived: OPTIONAL<INTEGER>;
    let octetsTransmitted: OPTIONAL<INTEGER>;
    let rawAAAData: OPTIONAL<OCTET_STRING>;
    let expectedEndTime: OPTIONAL<GeneralizedTime>;
    let pOPPhoneNumber: OPTIONAL<UTF8String>;
    let pOPIdentifier: OPTIONAL<IPIRIIDType>;
    let pOPIPAddress: OPTIONAL<LI_PS_PDU.IPAddress>;
    let nationalIPIRIParameters: OPTIONAL<NationalIPIRIParameters>;
    let additionalIPAddress: OPTIONAL<LI_PS_PDU.IPAddress>;
    let authenticationType: OPTIONAL<AuthenticationType>;
    let otherTargetIdentifiers: OPTIONAL<OtherTargetIdentifiers[]>;
    let location: OPTIONAL<LI_PS_PDU.Location>;
    let pOPPortID: OPTIONAL<OCTET_STRING>;
    let framedRoutes: OPTIONAL<FramedRoute[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "accessEventType": (_el: _Element): void => { accessEventType = $._decode_implicit<AccessEventType>(() => _decode_AccessEventType)(_el); },
        "targetUsername": (_el: _Element): void => { targetUsername = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "internetAccessType": (_el: _Element): void => { internetAccessType = $._decode_implicit<InternetAccessType>(() => _decode_InternetAccessType)(_el); },
        "iPVersion": (_el: _Element): void => { iPVersion = $._decode_implicit<IPVersion>(() => _decode_IPVersion)(_el); },
        "targetIPAddress": (_el: _Element): void => { targetIPAddress = $._decode_implicit<LI_PS_PDU.IPAddress>(() => LI_PS_PDU._decode_IPAddress)(_el); },
        "targetNetworkID": (_el: _Element): void => {
            targetNetworkID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el);
            if (targetNetworkID.length < 1 || targetNetworkID.length > 20) {
                throw new ASN1SizeError("IPIRIContents.targetNetworkID violates SIZE constraint");
            }
        },
        "targetCPEID": (_el: _Element): void => {
            targetCPEID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el);
            if (targetCPEID.length < 1 || targetCPEID.length > 128) {
                throw new ASN1SizeError("IPIRIContents.targetCPEID violates SIZE constraint");
            }
        },
        "targetLocation": (_el: _Element): void => {
            targetLocation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el);
            if (targetLocation.length < 1 || targetLocation.length > 64) {
                throw new ASN1SizeError("IPIRIContents.targetLocation violates SIZE constraint");
            }
        },
        "pOPPortNumber": (_el: _Element): void => {
            pOPPortNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof pOPPortNumber === "bigint" ? pOPPortNumber : BigInt(pOPPortNumber);
            if (_n < 0n || _n > 4294967295n) {
                throw new ASN1OverflowError("IPIRIContents.pOPPortNumber violates INTEGER range");
            }
        },
        "callBackNumber": (_el: _Element): void => {
            callBackNumber = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el);
            if (callBackNumber.length < 1 || callBackNumber.length > 20) {
                throw new ASN1SizeError("IPIRIContents.callBackNumber violates SIZE constraint");
            }
        },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "endTime": (_el: _Element): void => { endTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "endReason": (_el: _Element): void => { endReason = $._decode_implicit<EndReason>(() => _decode_EndReason)(_el); },
        "octetsReceived": (_el: _Element): void => {
            octetsReceived = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof octetsReceived === "bigint" ? octetsReceived : BigInt(octetsReceived);
            if (_n < 0n || _n > 18446744073709551615n) {
                throw new ASN1OverflowError("IPIRIContents.octetsReceived violates INTEGER range");
            }
        },
        "octetsTransmitted": (_el: _Element): void => {
            octetsTransmitted = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof octetsTransmitted === "bigint" ? octetsTransmitted : BigInt(octetsTransmitted);
            if (_n < 0n || _n > 18446744073709551615n) {
                throw new ASN1OverflowError("IPIRIContents.octetsTransmitted violates INTEGER range");
            }
        },
        "rawAAAData": (_el: _Element): void => { rawAAAData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "expectedEndTime": (_el: _Element): void => { expectedEndTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "pOPPhoneNumber": (_el: _Element): void => {
            pOPPhoneNumber = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el);
            if (pOPPhoneNumber.length < 1 || pOPPhoneNumber.length > 20) {
                throw new ASN1SizeError("IPIRIContents.pOPPhoneNumber violates SIZE constraint");
            }
        },
        "pOPIdentifier": (_el: _Element): void => { pOPIdentifier = $._decode_explicit<IPIRIIDType>(() => _decode_IPIRIIDType)(_el); },
        "pOPIPAddress": (_el: _Element): void => { pOPIPAddress = $._decode_implicit<LI_PS_PDU.IPAddress>(() => LI_PS_PDU._decode_IPAddress)(_el); },
        "nationalIPIRIParameters": (_el: _Element): void => { nationalIPIRIParameters = $._decode_implicit<NationalIPIRIParameters>(() => _decode_NationalIPIRIParameters)(_el); },
        "additionalIPAddress": (_el: _Element): void => { additionalIPAddress = $._decode_implicit<LI_PS_PDU.IPAddress>(() => LI_PS_PDU._decode_IPAddress)(_el); },
        "authenticationType": (_el: _Element): void => { authenticationType = $._decode_implicit<AuthenticationType>(() => _decode_AuthenticationType)(_el); },
        "otherTargetIdentifiers": (_el: _Element): void => { otherTargetIdentifiers = $._decode_implicit<OtherTargetIdentifiers[]>(() => $._decodeSequenceOf<OtherTargetIdentifiers>(() => _decode_OtherTargetIdentifiers))(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<LI_PS_PDU.Location>(() => LI_PS_PDU._decode_Location)(_el); },
        "pOPPortID": (_el: _Element): void => { pOPPortID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "framedRoutes": (_el: _Element): void => { framedRoutes = $._decode_implicit<FramedRoute[]>(() => $._decodeSequenceOf<FramedRoute>(() => _decode_FramedRoute))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IPIRIContents,
        _extension_additions_list_spec_for_IPIRIContents,
        _root_component_type_list_2_spec_for_IPIRIContents,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IPIRIContents(
        accessEventType,
        targetUsername,
        internetAccessType,
        iPVersion,
        targetIPAddress,
        targetNetworkID,
        targetCPEID,
        targetLocation,
        pOPPortNumber,
        callBackNumber,
        startTime,
        endTime,
        endReason,
        octetsReceived,
        octetsTransmitted,
        rawAAAData,
        expectedEndTime,
        pOPPhoneNumber,
        pOPIdentifier,
        pOPIPAddress,
        nationalIPIRIParameters,
        additionalIPAddress,
        authenticationType,
        otherTargetIdentifiers,
        location,
        pOPPortID,
        framedRoutes,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IPIRIContents(el);
}

let _cached_encoder_for_IPIRIContents: $.ASN1Encoder<IPIRIContents> | null = null;

/**
 * @summary Encodes a(n) IPIRIContents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPIRIContents, encoded as an ASN.1 Element.
 */
export
function _encode_IPIRIContents (value: IPIRIContents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPIRIContents) { _cached_encoder_for_IPIRIContents = function (value: IPIRIContents, elGetter: $.ASN1Encoder<IPIRIContents>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(27 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AccessEventType, $.BER)(value.accessEventType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.targetUsername, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternetAccessType, $.BER)(value.internetAccessType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_IPVersion, $.BER)(value.iPVersion, $.BER);
    if (value.targetIPAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => LI_PS_PDU._encode_IPAddress, $.BER)(value.targetIPAddress, $.BER);
    }
    if (value.targetNetworkID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.targetNetworkID, $.BER);
    }
    if (value.targetCPEID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.targetCPEID, $.BER);
    }
    if (value.targetLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeUTF8String, $.BER)(value.targetLocation, $.BER);
    }
    if (value.pOPPortNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.pOPPortNumber, $.BER);
    }
    if (value.callBackNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeUTF8String, $.BER)(value.callBackNumber, $.BER);
    }
    if (value.startTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeGeneralizedTime, $.BER)(value.startTime, $.BER);
    }
    if (value.endTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeGeneralizedTime, $.BER)(value.endTime, $.BER);
    }
    if (value.endReason !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_EndReason, $.BER)(value.endReason, $.BER);
    }
    if (value.octetsReceived !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.octetsReceived, $.BER);
    }
    if (value.octetsTransmitted !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.octetsTransmitted, $.BER);
    }
    if (value.rawAAAData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeOctetString, $.BER)(value.rawAAAData, $.BER);
    }
    if (value.expectedEndTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeGeneralizedTime, $.BER)(value.expectedEndTime, $.BER);
    }
    if (value.pOPPhoneNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeUTF8String, $.BER)(value.pOPPhoneNumber, $.BER);
    }
    if (value.pOPIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 18, () => _encode_IPIRIIDType, $.BER)(value.pOPIdentifier, $.BER);
    }
    if (value.pOPIPAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => LI_PS_PDU._encode_IPAddress, $.BER)(value.pOPIPAddress, $.BER);
    }
    if (value.nationalIPIRIParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_NationalIPIRIParameters, $.BER)(value.nationalIPIRIParameters, $.BER);
    }
    if (value.additionalIPAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => LI_PS_PDU._encode_IPAddress, $.BER)(value.additionalIPAddress, $.BER);
    }
    if (value.authenticationType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_AuthenticationType, $.BER)(value.authenticationType, $.BER);
    }
    if (value.otherTargetIdentifiers !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeSequenceOf<OtherTargetIdentifiers>(() => _encode_OtherTargetIdentifiers, $.BER), $.BER)(value.otherTargetIdentifiers, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => LI_PS_PDU._encode_Location, $.BER)(value.location, $.BER);
    }
    if (value.pOPPortID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeOctetString, $.BER)(value.pOPPortID, $.BER);
    }
    if (value.framedRoutes !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeSequenceOf<FramedRoute>(() => _encode_FramedRoute, $.BER), $.BER)(value.framedRoutes, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IPIRIContents(value, elGetter);
}


/* eslint-enable */
