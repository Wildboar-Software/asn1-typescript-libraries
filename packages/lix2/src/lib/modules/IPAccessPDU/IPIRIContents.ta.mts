/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AccessEventType, _enum_for_AccessEventType, AccessEventType_accessAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, accessAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_accessAccept /* IMPORTED_LONG_ENUMERATION_ITEM */, accessAccept /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_accessReject /* IMPORTED_LONG_ENUMERATION_ITEM */, accessReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_accessFailed /* IMPORTED_LONG_ENUMERATION_ITEM */, accessFailed /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_sessionStart /* IMPORTED_LONG_ENUMERATION_ITEM */, sessionStart /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_sessionEnd /* IMPORTED_LONG_ENUMERATION_ITEM */, sessionEnd /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_interimUpdate /* IMPORTED_LONG_ENUMERATION_ITEM */, interimUpdate /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_startOfInterceptionWithSessionActive /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptionWithSessionActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_accessEnd /* IMPORTED_LONG_ENUMERATION_ITEM */, accessEnd /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_endOfInterceptionWithSessionActive /* IMPORTED_LONG_ENUMERATION_ITEM */, endOfInterceptionWithSessionActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_AccessEventType, _encode_AccessEventType } from "../IPAccessPDU/AccessEventType.ta.mjs";
// export { AccessEventType, _enum_for_AccessEventType, AccessEventType_accessAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, accessAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_accessAccept /* IMPORTED_LONG_ENUMERATION_ITEM */, accessAccept /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_accessReject /* IMPORTED_LONG_ENUMERATION_ITEM */, accessReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_accessFailed /* IMPORTED_LONG_ENUMERATION_ITEM */, accessFailed /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_sessionStart /* IMPORTED_LONG_ENUMERATION_ITEM */, sessionStart /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_sessionEnd /* IMPORTED_LONG_ENUMERATION_ITEM */, sessionEnd /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_interimUpdate /* IMPORTED_LONG_ENUMERATION_ITEM */, interimUpdate /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_startOfInterceptionWithSessionActive /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptionWithSessionActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_accessEnd /* IMPORTED_LONG_ENUMERATION_ITEM */, accessEnd /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_endOfInterceptionWithSessionActive /* IMPORTED_LONG_ENUMERATION_ITEM */, endOfInterceptionWithSessionActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessEventType_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_AccessEventType, _encode_AccessEventType } from "../IPAccessPDU/AccessEventType.ta.mjs";
import { InternetAccessType, _enum_for_InternetAccessType, InternetAccessType_undefined /* IMPORTED_LONG_ENUMERATION_ITEM */, InternetAccessType_dialUp /* IMPORTED_LONG_ENUMERATION_ITEM */, dialUp /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_xDSL /* IMPORTED_LONG_ENUMERATION_ITEM */, xDSL /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_cableModem /* IMPORTED_LONG_ENUMERATION_ITEM */, cableModem /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_lAN /* IMPORTED_LONG_ENUMERATION_ITEM */, lAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_wirelessLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelessLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_fTTx /* IMPORTED_LONG_ENUMERATION_ITEM */, fTTx /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_wIMAX_HIPERMAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wIMAX_HIPERMAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_satellite /* IMPORTED_LONG_ENUMERATION_ITEM */, satellite /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_wireless_other /* IMPORTED_LONG_ENUMERATION_ITEM */, wireless_other /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_InternetAccessType, _encode_InternetAccessType } from "../IPAccessPDU/InternetAccessType.ta.mjs";
// export { InternetAccessType, _enum_for_InternetAccessType, InternetAccessType_undefined /* IMPORTED_LONG_ENUMERATION_ITEM */, InternetAccessType_dialUp /* IMPORTED_LONG_ENUMERATION_ITEM */, dialUp /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_xDSL /* IMPORTED_LONG_ENUMERATION_ITEM */, xDSL /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_cableModem /* IMPORTED_LONG_ENUMERATION_ITEM */, cableModem /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_lAN /* IMPORTED_LONG_ENUMERATION_ITEM */, lAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_wirelessLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelessLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_fTTx /* IMPORTED_LONG_ENUMERATION_ITEM */, fTTx /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_wIMAX_HIPERMAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wIMAX_HIPERMAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_satellite /* IMPORTED_LONG_ENUMERATION_ITEM */, satellite /* IMPORTED_SHORT_ENUMERATION_ITEM */, InternetAccessType_wireless_other /* IMPORTED_LONG_ENUMERATION_ITEM */, wireless_other /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_InternetAccessType, _encode_InternetAccessType } from "../IPAccessPDU/InternetAccessType.ta.mjs";
import { IPVersion, _enum_for_IPVersion, IPVersion_iPV4 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPV4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, IPVersion_iPV6 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPV6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, IPVersion_iPV4andV6 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPV4andV6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IPVersion, _encode_IPVersion } from "../IPAccessPDU/IPVersion.ta.mjs";
// export { IPVersion, _enum_for_IPVersion, IPVersion_iPV4 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPV4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, IPVersion_iPV6 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPV6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, IPVersion_iPV4andV6 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPV4andV6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IPVersion, _encode_IPVersion } from "../IPAccessPDU/IPVersion.ta.mjs";
import { EndReason, _enum_for_EndReason, EndReason_undefined /* IMPORTED_LONG_ENUMERATION_ITEM */, EndReason_regularLogoff /* IMPORTED_LONG_ENUMERATION_ITEM */, regularLogoff /* IMPORTED_SHORT_ENUMERATION_ITEM */, EndReason_connectionLoss /* IMPORTED_LONG_ENUMERATION_ITEM */, connectionLoss /* IMPORTED_SHORT_ENUMERATION_ITEM */, EndReason_connectionTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, connectionTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EndReason_leaseExpired /* IMPORTED_LONG_ENUMERATION_ITEM */, leaseExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EndReason, _encode_EndReason } from "../IPAccessPDU/EndReason.ta.mjs";
// export { EndReason, _enum_for_EndReason, EndReason_undefined /* IMPORTED_LONG_ENUMERATION_ITEM */, EndReason_regularLogoff /* IMPORTED_LONG_ENUMERATION_ITEM */, regularLogoff /* IMPORTED_SHORT_ENUMERATION_ITEM */, EndReason_connectionLoss /* IMPORTED_LONG_ENUMERATION_ITEM */, connectionLoss /* IMPORTED_SHORT_ENUMERATION_ITEM */, EndReason_connectionTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, connectionTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EndReason_leaseExpired /* IMPORTED_LONG_ENUMERATION_ITEM */, leaseExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EndReason, _encode_EndReason } from "../IPAccessPDU/EndReason.ta.mjs";
import { IPIRIIDType, _decode_IPIRIIDType, _encode_IPIRIIDType } from "../IPAccessPDU/IPIRIIDType.ta.mjs";
// export { IPIRIIDType, _decode_IPIRIIDType, _encode_IPIRIIDType } from "../IPAccessPDU/IPIRIIDType.ta.mjs";
import { NationalIPIRIParameters, _decode_NationalIPIRIParameters, _encode_NationalIPIRIParameters } from "../IPAccessPDU/NationalIPIRIParameters.ta.mjs";
// export { NationalIPIRIParameters, _decode_NationalIPIRIParameters, _encode_NationalIPIRIParameters } from "../IPAccessPDU/NationalIPIRIParameters.ta.mjs";
import { AuthenticationType, _enum_for_AuthenticationType, AuthenticationType_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, AuthenticationType_static /* IMPORTED_LONG_ENUMERATION_ITEM */, static_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, AuthenticationType_radiusAAA /* IMPORTED_LONG_ENUMERATION_ITEM */, radiusAAA /* IMPORTED_SHORT_ENUMERATION_ITEM */, AuthenticationType_dhcpAAA /* IMPORTED_LONG_ENUMERATION_ITEM */, dhcpAAA /* IMPORTED_SHORT_ENUMERATION_ITEM */, AuthenticationType_diameterAAA /* IMPORTED_LONG_ENUMERATION_ITEM */, diameterAAA /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AuthenticationType, _encode_AuthenticationType } from "../IPAccessPDU/AuthenticationType.ta.mjs";
// export { AuthenticationType, _enum_for_AuthenticationType, AuthenticationType_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, AuthenticationType_static /* IMPORTED_LONG_ENUMERATION_ITEM */, static_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, AuthenticationType_radiusAAA /* IMPORTED_LONG_ENUMERATION_ITEM */, radiusAAA /* IMPORTED_SHORT_ENUMERATION_ITEM */, AuthenticationType_dhcpAAA /* IMPORTED_LONG_ENUMERATION_ITEM */, dhcpAAA /* IMPORTED_SHORT_ENUMERATION_ITEM */, AuthenticationType_diameterAAA /* IMPORTED_LONG_ENUMERATION_ITEM */, diameterAAA /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AuthenticationType, _encode_AuthenticationType } from "../IPAccessPDU/AuthenticationType.ta.mjs";
import { OtherTargetIdentifiers, _decode_OtherTargetIdentifiers, _encode_OtherTargetIdentifiers } from "../IPAccessPDU/OtherTargetIdentifiers.ta.mjs";
// export { OtherTargetIdentifiers, _decode_OtherTargetIdentifiers, _encode_OtherTargetIdentifiers } from "../IPAccessPDU/OtherTargetIdentifiers.ta.mjs";
import { FramedRoute, _decode_FramedRoute, _encode_FramedRoute } from "../IPAccessPDU/FramedRoute.ta.mjs";
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
 *     targetIPAddress         [4] IPAddress OPTIONAL,
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
 *     pOPIPAddress            [19] IPAddress OPTIONAL,
 *         -- The IP address of the POP
 *     nationalIPIRIParameters [20] NationalIPIRIParameters OPTIONAL,
 *         -- National IP IRI Parameters
 *     additionalIPAddress     [21] IPAddress OPTIONAL,
 *         -- This field will carry the first IPv6 target IP address with or without prefix when the
 *         -- iPVersion parameter is set to iPV4andV6.
 *         -- Use of this field is fully described in section 6.2.1
 *     authenticationType      [22] AuthenticationType OPTIONAL,
 *         -- Field used to identify the authentication type to assist with LEMF data validation
 *     otherTargetIdentifiers  [23] SEQUENCE OF OtherTargetIdentifiers OPTIONAL,
 *         -- This parameter will carry the second and subsequent IPv4 or IPv6 target IP addresses
 *         -- It is used when multiple subnet/prefix ranges are assigned to a target service.
 *         -- Use of this field is fully described in section 6.2.1
 * --    location                [24] LI-PS-PDU.Location OPTIONAL,
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
    constructor (
        /**
         * @summary `accessEventType`.
         * @public
         * @readonly
         */
        readonly accessEventType: AccessEventType,
        /**
         * @summary `targetUsername`.
         * @public
         * @readonly
         */
        readonly targetUsername: OCTET_STRING,
        /**
         * @summary `internetAccessType`.
         * @public
         * @readonly
         */
        readonly internetAccessType: InternetAccessType,
        /**
         * @summary `iPVersion`.
         * @public
         * @readonly
         */
        readonly iPVersion: IPVersion,
        /**
         * @summary `targetIPAddress`.
         * @public
         * @readonly
         */
        readonly targetIPAddress: OPTIONAL<IPAddress>,
        /**
         * @summary `targetNetworkID`.
         * @public
         * @readonly
         */
        readonly targetNetworkID: OPTIONAL<UTF8String>,
        /**
         * @summary `targetCPEID`.
         * @public
         * @readonly
         */
        readonly targetCPEID: OPTIONAL<UTF8String>,
        /**
         * @summary `targetLocation`.
         * @public
         * @readonly
         */
        readonly targetLocation: OPTIONAL<UTF8String>,
        /**
         * @summary `pOPPortNumber`.
         * @public
         * @readonly
         */
        readonly pOPPortNumber: OPTIONAL<INTEGER>,
        /**
         * @summary `callBackNumber`.
         * @public
         * @readonly
         */
        readonly callBackNumber: OPTIONAL<UTF8String>,
        /**
         * @summary `startTime`.
         * @public
         * @readonly
         */
        readonly startTime: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `endTime`.
         * @public
         * @readonly
         */
        readonly endTime: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `endReason`.
         * @public
         * @readonly
         */
        readonly endReason: OPTIONAL<EndReason>,
        /**
         * @summary `octetsReceived`.
         * @public
         * @readonly
         */
        readonly octetsReceived: OPTIONAL<INTEGER>,
        /**
         * @summary `octetsTransmitted`.
         * @public
         * @readonly
         */
        readonly octetsTransmitted: OPTIONAL<INTEGER>,
        /**
         * @summary `rawAAAData`.
         * @public
         * @readonly
         */
        readonly rawAAAData: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `expectedEndTime`.
         * @public
         * @readonly
         */
        readonly expectedEndTime: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `pOPPhoneNumber`.
         * @public
         * @readonly
         */
        readonly pOPPhoneNumber: OPTIONAL<UTF8String>,
        /**
         * @summary `pOPIdentifier`.
         * @public
         * @readonly
         */
        readonly pOPIdentifier: OPTIONAL<IPIRIIDType>,
        /**
         * @summary `pOPIPAddress`.
         * @public
         * @readonly
         */
        readonly pOPIPAddress: OPTIONAL<IPAddress>,
        /**
         * @summary `nationalIPIRIParameters`.
         * @public
         * @readonly
         */
        readonly nationalIPIRIParameters: OPTIONAL<NationalIPIRIParameters>,
        /**
         * @summary `additionalIPAddress`.
         * @public
         * @readonly
         */
        readonly additionalIPAddress: OPTIONAL<IPAddress>,
        /**
         * @summary `authenticationType`.
         * @public
         * @readonly
         */
        readonly authenticationType: OPTIONAL<AuthenticationType>,
        /**
         * @summary `otherTargetIdentifiers`.
         * @public
         * @readonly
         */
        readonly otherTargetIdentifiers: OPTIONAL<OtherTargetIdentifiers[]>,
        /**
         * @summary `pOPPortID`.
         * @public
         * @readonly
         */
        readonly pOPPortID: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `framedRoutes`.
         * @public
         * @readonly
         */
        readonly framedRoutes: OPTIONAL<FramedRoute[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

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
        return new IPIRIContents(_o.accessEventType, _o.targetUsername, _o.internetAccessType, _o.iPVersion, _o.targetIPAddress, _o.targetNetworkID, _o.targetCPEID, _o.targetLocation, _o.pOPPortNumber, _o.callBackNumber, _o.startTime, _o.endTime, _o.endReason, _o.octetsReceived, _o.octetsTransmitted, _o.rawAAAData, _o.expectedEndTime, _o.pOPPhoneNumber, _o.pOPIdentifier, _o.pOPIPAddress, _o.nationalIPIRIParameters, _o.additionalIPAddress, _o.authenticationType, _o.otherTargetIdentifiers, _o.pOPPortID, _o.framedRoutes, _o._unrecognizedExtensionsList);
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
    /* FIXME: targetIPAddress COULD_NOT_RESOLVE_TYPE_DEF */,
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
    /* FIXME: pOPIPAddress COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("nationalIPIRIParameters", true, $.hasTag(_TagClass.context, 20)),
    /* FIXME: additionalIPAddress COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("authenticationType", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("otherTargetIdentifiers", true, $.hasTag(_TagClass.context, 23)),
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
    let targetIPAddress: OPTIONAL<IPAddress>;
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
    let pOPIPAddress: OPTIONAL<IPAddress>;
    let nationalIPIRIParameters: OPTIONAL<NationalIPIRIParameters>;
    let additionalIPAddress: OPTIONAL<IPAddress>;
    let authenticationType: OPTIONAL<AuthenticationType>;
    let otherTargetIdentifiers: OPTIONAL<OtherTargetIdentifiers[]>;
    let pOPPortID: OPTIONAL<OCTET_STRING>;
    let framedRoutes: OPTIONAL<FramedRoute[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "accessEventType": (_el: _Element): void => { accessEventType = $._decode_implicit<AccessEventType>(() => _decode_AccessEventType)(_el); },
        "targetUsername": (_el: _Element): void => { targetUsername = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "internetAccessType": (_el: _Element): void => { internetAccessType = $._decode_implicit<InternetAccessType>(() => _decode_InternetAccessType)(_el); },
        "iPVersion": (_el: _Element): void => { iPVersion = $._decode_implicit<IPVersion>(() => _decode_IPVersion)(_el); },
        "targetIPAddress": (_el: _Element): void => { targetIPAddress = $._decode_implicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "targetNetworkID": (_el: _Element): void => { targetNetworkID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "targetCPEID": (_el: _Element): void => { targetCPEID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "targetLocation": (_el: _Element): void => { targetLocation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pOPPortNumber": (_el: _Element): void => { pOPPortNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "callBackNumber": (_el: _Element): void => { callBackNumber = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "endTime": (_el: _Element): void => { endTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "endReason": (_el: _Element): void => { endReason = $._decode_implicit<EndReason>(() => _decode_EndReason)(_el); },
        "octetsReceived": (_el: _Element): void => { octetsReceived = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "octetsTransmitted": (_el: _Element): void => { octetsTransmitted = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "rawAAAData": (_el: _Element): void => { rawAAAData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "expectedEndTime": (_el: _Element): void => { expectedEndTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "pOPPhoneNumber": (_el: _Element): void => { pOPPhoneNumber = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pOPIdentifier": (_el: _Element): void => { pOPIdentifier = $._decode_explicit<IPIRIIDType>(() => _decode_IPIRIIDType)(_el); },
        "pOPIPAddress": (_el: _Element): void => { pOPIPAddress = $._decode_implicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "nationalIPIRIParameters": (_el: _Element): void => { nationalIPIRIParameters = $._decode_implicit<NationalIPIRIParameters>(() => _decode_NationalIPIRIParameters)(_el); },
        "additionalIPAddress": (_el: _Element): void => { additionalIPAddress = $._decode_implicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "authenticationType": (_el: _Element): void => { authenticationType = $._decode_implicit<AuthenticationType>(() => _decode_AuthenticationType)(_el); },
        "otherTargetIdentifiers": (_el: _Element): void => { otherTargetIdentifiers = $._decode_implicit<OtherTargetIdentifiers[]>(() => $._decodeSequenceOf<OtherTargetIdentifiers>(() => _decode_OtherTargetIdentifiers))(_el); },
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AccessEventType, $.BER)(value.accessEventType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.targetUsername, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternetAccessType, $.BER)(value.internetAccessType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_IPVersion, $.BER)(value.iPVersion, $.BER),
            /* IF_ABSENT  */ ((value.targetIPAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_IPAddress, $.BER)(value.targetIPAddress, $.BER)),
            /* IF_ABSENT  */ ((value.targetNetworkID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.targetNetworkID, $.BER)),
            /* IF_ABSENT  */ ((value.targetCPEID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.targetCPEID, $.BER)),
            /* IF_ABSENT  */ ((value.targetLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeUTF8String, $.BER)(value.targetLocation, $.BER)),
            /* IF_ABSENT  */ ((value.pOPPortNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.pOPPortNumber, $.BER)),
            /* IF_ABSENT  */ ((value.callBackNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeUTF8String, $.BER)(value.callBackNumber, $.BER)),
            /* IF_ABSENT  */ ((value.startTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeGeneralizedTime, $.BER)(value.startTime, $.BER)),
            /* IF_ABSENT  */ ((value.endTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeGeneralizedTime, $.BER)(value.endTime, $.BER)),
            /* IF_ABSENT  */ ((value.endReason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_EndReason, $.BER)(value.endReason, $.BER)),
            /* IF_ABSENT  */ ((value.octetsReceived === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.octetsReceived, $.BER)),
            /* IF_ABSENT  */ ((value.octetsTransmitted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.octetsTransmitted, $.BER)),
            /* IF_ABSENT  */ ((value.rawAAAData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => $._encodeOctetString, $.BER)(value.rawAAAData, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.expectedEndTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => $._encodeGeneralizedTime, $.BER)(value.expectedEndTime, $.BER)),
            /* IF_ABSENT  */ ((value.pOPPhoneNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeUTF8String, $.BER)(value.pOPPhoneNumber, $.BER)),
            /* IF_ABSENT  */ ((value.pOPIdentifier === undefined) ? undefined : $._encode_explicit(_TagClass.context, 18, () => _encode_IPIRIIDType, $.BER)(value.pOPIdentifier, $.BER)),
            /* IF_ABSENT  */ ((value.pOPIPAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_IPAddress, $.BER)(value.pOPIPAddress, $.BER)),
            /* IF_ABSENT  */ ((value.nationalIPIRIParameters === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_NationalIPIRIParameters, $.BER)(value.nationalIPIRIParameters, $.BER)),
            /* IF_ABSENT  */ ((value.additionalIPAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_IPAddress, $.BER)(value.additionalIPAddress, $.BER)),
            /* IF_ABSENT  */ ((value.authenticationType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_AuthenticationType, $.BER)(value.authenticationType, $.BER)),
            /* IF_ABSENT  */ ((value.otherTargetIdentifiers === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => $._encodeSequenceOf<OtherTargetIdentifiers>(() => _encode_OtherTargetIdentifiers, $.BER), $.BER)(value.otherTargetIdentifiers, $.BER)),
            /* IF_ABSENT  */ ((value.pOPPortID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => $._encodeOctetString, $.BER)(value.pOPPortID, $.BER)),
            /* IF_ABSENT  */ ((value.framedRoutes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => $._encodeSequenceOf<FramedRoute>(() => _encode_FramedRoute, $.BER), $.BER)(value.framedRoutes, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IPIRIContents(value, elGetter);
}


/* eslint-enable */
