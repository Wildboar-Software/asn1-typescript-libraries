/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { IRI_Parameters_initiator, _decode_IRI_Parameters_initiator, _encode_IRI_Parameters_initiator, _enum_for_IRI_Parameters_initiator } from "../IWLANUmtsHI2Operations/IRI-Parameters-initiator.ta.mjs";
// export { IRI_Parameters_initiator, _enum_for_IRI_Parameters_initiator, IRI_Parameters_initiator_not_Available /* IMPORTED_LONG_ENUMERATION_ITEM */, not_Available /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_initiator_originating_Target /* IMPORTED_LONG_ENUMERATION_ITEM */, originating_Target /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_initiator_terminating_Target /* IMPORTED_LONG_ENUMERATION_ITEM */, terminating_Target /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IRI_Parameters_initiator, _encode_IRI_Parameters_initiator } from "../IWLANUmtsHI2Operations/IRI-Parameters-initiator.ta.mjs";
import { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../IWLANUmtsHI2Operations/PartyInformation.ta.mjs";
// export { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../IWLANUmtsHI2Operations/PartyInformation.ta.mjs";
import { National_Parameters, _decode_National_Parameters, _encode_National_Parameters } from "../HI2Operations/National-Parameters.ta.mjs";
// export { National_Parameters, _decode_National_Parameters, _encode_National_Parameters } from "../HI2Operations/National-Parameters.ta.mjs";
import { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
// export { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
import { I_WLANEvent, _decode_I_WLANEvent, _encode_I_WLANEvent, _enum_for_I_WLANEvent } from "../IWLANUmtsHI2Operations/I-WLANEvent.ta.mjs";
// export { I_WLANEvent, _enum_for_I_WLANEvent, I_WLANEvent_i_WLANAccessInitiation /* IMPORTED_LONG_ENUMERATION_ITEM */, i_WLANAccessInitiation /* IMPORTED_SHORT_ENUMERATION_ITEM */, I_WLANEvent_i_WLANAccessTermination /* IMPORTED_LONG_ENUMERATION_ITEM */, i_WLANAccessTermination /* IMPORTED_SHORT_ENUMERATION_ITEM */, I_WLANEvent_i_WLANTunnelEstablishment /* IMPORTED_LONG_ENUMERATION_ITEM */, i_WLANTunnelEstablishment /* IMPORTED_SHORT_ENUMERATION_ITEM */, I_WLANEvent_i_WLANTunnelDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, i_WLANTunnelDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, I_WLANEvent_startOfInterceptionCommunicationActive /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfInterceptionCommunicationActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, I_WLANEvent_packetDataHeaderInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, packetDataHeaderInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_I_WLANEvent, _encode_I_WLANEvent } from "../IWLANUmtsHI2Operations/I-WLANEvent.ta.mjs";
import { CorrelationNumber, _decode_CorrelationNumber, _encode_CorrelationNumber } from "../IWLANUmtsHI2Operations/CorrelationNumber.ta.mjs";
// export { CorrelationNumber, _decode_CorrelationNumber, _encode_CorrelationNumber } from "../IWLANUmtsHI2Operations/CorrelationNumber.ta.mjs";
import { I_WLANOperationErrorCode, _decode_I_WLANOperationErrorCode, _encode_I_WLANOperationErrorCode } from "../IWLANUmtsHI2Operations/I-WLANOperationErrorCode.ta.mjs";
// export { I_WLANOperationErrorCode, _decode_I_WLANOperationErrorCode, _encode_I_WLANOperationErrorCode } from "../IWLANUmtsHI2Operations/I-WLANOperationErrorCode.ta.mjs";
import { I_WLANinformation, _decode_I_WLANinformation, _encode_I_WLANinformation } from "../IWLANUmtsHI2Operations/I-WLANinformation.ta.mjs";
// export { I_WLANinformation, _decode_I_WLANinformation, _encode_I_WLANinformation } from "../IWLANUmtsHI2Operations/I-WLANinformation.ta.mjs";
import { VisitedPLMNID, _decode_VisitedPLMNID, _encode_VisitedPLMNID } from "../IWLANUmtsHI2Operations/VisitedPLMNID.ta.mjs";
// export { VisitedPLMNID, _decode_VisitedPLMNID, _encode_VisitedPLMNID } from "../IWLANUmtsHI2Operations/VisitedPLMNID.ta.mjs";
import { National_HI2_ASN1parameters, _decode_National_HI2_ASN1parameters, _encode_National_HI2_ASN1parameters } from "../HI2Operations/National-HI2-ASN1parameters.ta.mjs";
// export { National_HI2_ASN1parameters, _decode_National_HI2_ASN1parameters, _encode_National_HI2_ASN1parameters } from "../HI2Operations/National-HI2-ASN1parameters.ta.mjs";
import { PacketDataHeaderInformation, _decode_PacketDataHeaderInformation, _encode_PacketDataHeaderInformation } from "../IWLANUmtsHI2Operations/PacketDataHeaderInformation.ta.mjs";
// export { PacketDataHeaderInformation, _decode_PacketDataHeaderInformation, _encode_PacketDataHeaderInformation } from "../IWLANUmtsHI2Operations/PacketDataHeaderInformation.ta.mjs";


/**
 * @summary IRI_Parameters
 * @description
 * 
 * Parameters of one I-WLAN IRI record sent to the LEMF.
 * 
 * Stage 2 mandatory and conditional parameters are optional in the annex B.7
 * syntax. Stage 2 inclusion overrides that syntax (clause 8.5.1.1). The lawful
 * interception identifier is present in every record sent to the LEMF.
 * 
 * 3GPP TS 33.108, clause 8.5 and annex B.7.
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters ::= SEQUENCE
 * {
 *     hi2iwlanDomainId                [0]    OBJECT IDENTIFIER,  -- 3GPP HI2 WLAN domain
 *     lawfulInterceptionIdentifier    [2] LawfulInterceptionIdentifier,
 *         -- This identifier is associated to the target.
 *     timeStamp                [3] TimeStamp,
 *         -- date and time of the event triggering the report.
 *     initiator                 [4] ENUMERATED
 *     {
 *         not-Available        (0),
 *         originating-Target    (1),
 *             -- in case of I-WLAN, this indicates that the I-WLAN tunnel disconnect is WLAN UE
 *             -- requested.
 *         terminating-Target    (2),
 *             -- in case of I-WLAN, this indicates that the I-WLAN tunnel disconnect is network
 *             -- initiated.
 *     ...
 *     } OPTIONAL,
 * 
 *     partyInformation         [5] SET SIZE (1..10) OF PartyInformation OPTIONAL,
 *         -- This parameter provides the concerned party, the identiy(ies) of the party
 *         -- and all the information provided by the party.
 * 
 *     national-Parameters        [6] National-Parameters OPTIONAL,
 *     networkIdentifier        [7] Network-Identifier OPTIONAL,
 *     i-WLANevent                [8] I-WLANEvent    OPTIONAL,
 *     correlationNumber        [9] CorrelationNumber OPTIONAL,
 *     i-WLANOperationErrorCode[10] I-WLANOperationErrorCode     OPTIONAL,
 *     
 *     i-wLANinformation        [11] I-WLANinformation OPTIONAL,
 *     visitedPLMNID            [12] VisitedPLMNID     OPTIONAL,
 *     national-HI2-ASN1parameters    [255]    National-HI2-ASN1parameters    OPTIONAL,
 * ...,
 *     nSAPI                    [13] OCTET STRING (SIZE (1)) OPTIONAL,
 *     -- Include either Octet 2 of the NSAPI IE of 3GPP TS 24.008 [9]
 *     -- or Octet 2 of the NSAPI IE of 3GPP TS 29.060 [17].
 *      packetDataHeaderInformation        [14] PacketDataHeaderInformation    OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IRI_Parameters {
    /**
     * @summary `hi2iwlanDomainId`.
     * @description
     * 
     * 3GPP HI2 WLAN domain identifier. Carries `hi2wlanDomainId`: threeGPP(4),
     * hi2wlan(6), r16(16), version-1(1).
     * 
     * 3GPP TS 33.108, annex B.7.
     * @public
     * @readonly
     */
    readonly hi2iwlanDomainId: OBJECT_IDENTIFIER;
    /**
     * @summary `lawfulInterceptionIdentifier`.
     * @description
     * 
     * Identifier assigned to the target for this intercept, agreed between the
     * LEA and the operator. Alphanumeric. It may carry an authorization
     * reference and the date the authorization was issued. One value per target
     * identity, or one value for several identities of the same target. If
     * several LEAs intercept the same identity, each LEA has its own value.
     * 
     * Present in every record. Mandatory in the clause 8.5.1 records.
     * 
     * 3GPP TS 33.108, clause 8.1.2 and annex B.7.
     * @public
     * @readonly
     */
    readonly lawfulInterceptionIdentifier: LawfulInterceptionIdentifier;
    /**
     * @summary `timeStamp`.
     * @description
     * 
     * Date and time of the event that triggered the report, from the
     * intercepting node's clock (PDG or AAA server).
     * 
     * Event date and event time are mandatory in the clause 8.5.1 records.
     * 
     * 3GPP TS 33.108, clause 8.2.1, table 8.2, and annex B.7.
     * @public
     * @readonly
     */
    readonly timeStamp: TimeStamp;
    /**
     * @summary `initiator`.
     * @description
     * 
     * Whether the reported action was started by the WLAN UE or by the network,
     * when either side can start it.
     * 
     * Conditional on tunnel disconnect (tables 8.12 and 8.13):
     * target-initiated, network-initiated, or not available. The other clause
     * 8.5.1 records do not include it.
     * 
     * 3GPP TS 33.108, table 8.2 and annex B.7.
     * @public
     * @readonly
     */
    readonly initiator: OPTIONAL<IRI_Parameters_initiator>;
    /**
     * @summary `partyInformation`.
     * @description
     * 
     * The concerned party, its identities, and the information that party
     * provided. At most ten parties.
     * 
     * The identity group is conditional: provide at least one identity and the
     * others when available. Access and tunnel records list MSISDN, IMSI, and
     * NAI. The packet-data header REPORT and the PDG start-of-intercept Begin
     * list IMEI instead of NAI. This module has no IMEI component.
     * 
     * 3GPP TS 33.108, table 8.2 and annex B.7.
     * @public
     * @readonly
     */
    readonly partyInformation: OPTIONAL<PartyInformation[]>;
    /**
     * @summary `national_Parameters`.
     * @description
     * 
     * National parameters. Clause 8.5 allows the ICE or the DF2/MF to extend
     * the information set when a country requires it. TS 33.108 does not
     * further define the contents.
     * @public
     * @readonly
     */
    readonly national_Parameters: OPTIONAL<National_Parameters>;
    /**
     * @summary `networkIdentifier`.
     * @description
     * 
     * Operator identifier plus the PDG or AAA server address.
     * 
     * The operator identifier is mandatory and should be internationally
     * unique. The network-element identifier is optional; national regulations
     * may require it. Mandatory in the clause 8.5.1 records.
     * 
     * 3GPP TS 33.108, clause 8.1.3 and table 8.2.
     * @public
     * @readonly
     */
    readonly networkIdentifier: OPTIONAL<Network_Identifier>;
    /**
     * @summary `i_WLANevent`.
     * @description
     * 
     * Which I-WLAN event this record reports: access initiation, access
     * termination, tunnel establishment, tunnel disconnect, start of intercept
     * with communication active, or packet-data header information.
     * 
     * Conditional on the access and tunnel records. Mandatory on the
     * packet-data header REPORT (table 8.8, Packet Data Header Information
     * REPORT Record).
     * 
     * 3GPP TS 33.108, table 8.1 and table 8.2.
     * @public
     * @readonly
     */
    readonly i_WLANevent: OPTIONAL<I_WLANEvent>;
    /**
     * @summary `correlationNumber`.
     * @description
     * 
     * Unique per I-WLAN tunnel. Correlates CC with IRI at the PDG, and
     * correlates the IRI records of one tunnel at the PDG or the AAA server. At
     * least unique for each concurrent tunnel of a target in one node under one
     * lawful authorization.
     * 
     * Conditional on successful-tunnel Begin and on tunnel-disconnect End, so
     * CC and IRI can be correlated (AAA Begin correlates IRI only). Mandatory
     * on the packet-data header REPORT.
     * 
     * 3GPP TS 33.108, clause 8.1.4 and table 8.2.
     * @public
     * @readonly
     */
    readonly correlationNumber: OPTIONAL<CorrelationNumber>;
    /**
     * @summary `i_WLANOperationErrorCode`.
     * @description
     * 
     * Reason the access initiation failed, the tunnel establishment failed, or
     * the I-WLAN session ended.
     * 
     * Failed tunnel establishment is "Authentication failed" or "Authorization
     * failed". The tunnel-disconnect reason is for further study and is not a
     * column of the disconnect End records. TS 33.108 does not define how the
     * reason is encoded.
     * 
     * Conditional on failed access initiation (table 8.3), access termination
     * (table 8.4), and unsuccessful tunnel establishment (tables 8.5 and 8.6).
     * 
     * 3GPP TS 33.108, table 8.2 and annex B.7.
     * @public
     * @readonly
     */
    readonly i_WLANOperationErrorCode: OPTIONAL<I_WLANOperationErrorCode>;
    /**
     * @summary `i_wLANinformation`.
     * @description
     * 
     * WLAN operator, location, NAS address, UE MAC address, and session alive
     * time for the target. Annex B.7 also adds geographical coordinates and a
     * civic address, which clause 8 tables do not name.
     * 
     * 3GPP TS 33.108, table 8.2 and annex B.7.
     * @public
     * @readonly
     */
    readonly i_wLANinformation: OPTIONAL<I_WLANinformation>;
    /**
     * @summary `visitedPLMNID`.
     * @description
     * 
     * Visited PLMN that will terminate the target's communications or tunnel
     * them to the home PLMN.
     * 
     * Conditional when available on access initiation, unsuccessful AAA tunnel
     * setup, the AAA start-of-intercept REPORT, and the AAA start-of-intercept
     * Begin.
     * 
     * 3GPP TS 33.108, table 8.2. Annex B.7 says to carry the identifier defined
     * in TS 29.234 and does not define the encoding.
     * @public
     * @readonly
     */
    readonly visitedPLMNID: OPTIONAL<VisitedPLMNID>;
    /**
     * @summary `national_HI2_ASN1parameters`.
     * @description
     * 
     * National HI2 parameters. Clause 8.5 allows the information set to be
     * extended when a country requires it. TS 33.108 does not further define
     * the contents.
     * @public
     * @readonly
     */
    readonly national_HI2_ASN1parameters: OPTIONAL<National_HI2_ASN1parameters>;
    /**
     * @summary `nSAPI`.
     * @description
     * 
     * Octet 2 of the NSAPI information element from TS 24.008 or from TS
     * 29.060. It identifies a PDP context in the mobility-management context
     * given by the Tunnel Endpoint Identifier Control Plane.
     * 
     * Optional extra information, to distinguish sending mobile access networks
     * when the GGSN is used as part of the PDG (TS 23.234). Included on the
     * packet-data header REPORT and on the PDG Begin and End records. The
     * AAA-server records in clause 8.5.1 do not include it.
     * 
     * 3GPP TS 33.108, table 8.2 and annex B.7.
     * @public
     * @readonly
     */
    readonly nSAPI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `packetDataHeaderInformation`.
     * @description
     * 
     * Packet header information for active I-WLAN communications, either one
     * intercepted packet or a summary of a packet flow.
     * 
     * Mandatory on the packet-data header REPORT. Per-packet contents are table
     * 8.9; each summary flow is table 8.10. For IP fragments, a 6-tuple may
     * exist only on the first packet, and later fragments may not be reported.
     * 
     * 3GPP TS 33.108, clause 8.5.1.2 and table 8.8 (Packet Data Header
     * Information REPORT Record).
     * @public
     * @readonly
     */
    readonly packetDataHeaderInformation: OPTIONAL<PacketDataHeaderInformation>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of TS 33.108 does not define.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        hi2iwlanDomainId: OBJECT_IDENTIFIER,
        lawfulInterceptionIdentifier: LawfulInterceptionIdentifier,
        timeStamp: TimeStamp,
        initiator: OPTIONAL<IRI_Parameters_initiator>,
        partyInformation: OPTIONAL<PartyInformation[]>,
        national_Parameters: OPTIONAL<National_Parameters>,
        networkIdentifier: OPTIONAL<Network_Identifier>,
        i_WLANevent: OPTIONAL<I_WLANEvent>,
        correlationNumber: OPTIONAL<CorrelationNumber>,
        i_WLANOperationErrorCode: OPTIONAL<I_WLANOperationErrorCode>,
        i_wLANinformation: OPTIONAL<I_WLANinformation>,
        visitedPLMNID: OPTIONAL<VisitedPLMNID>,
        national_HI2_ASN1parameters: OPTIONAL<National_HI2_ASN1parameters>,
        nSAPI: OPTIONAL<OCTET_STRING>,
        packetDataHeaderInformation: OPTIONAL<PacketDataHeaderInformation>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.hi2iwlanDomainId = hi2iwlanDomainId;
        this.lawfulInterceptionIdentifier = lawfulInterceptionIdentifier;
        this.timeStamp = timeStamp;
        this.initiator = initiator;
        this.partyInformation = partyInformation;
        this.national_Parameters = national_Parameters;
        this.networkIdentifier = networkIdentifier;
        this.i_WLANevent = i_WLANevent;
        this.correlationNumber = correlationNumber;
        this.i_WLANOperationErrorCode = i_WLANOperationErrorCode;
        this.i_wLANinformation = i_wLANinformation;
        this.visitedPLMNID = visitedPLMNID;
        this.national_HI2_ASN1parameters = national_HI2_ASN1parameters;
        this.nSAPI = nSAPI;
        this.packetDataHeaderInformation = packetDataHeaderInformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IRI_Parameters
     * @description
     * 
     * This takes an `object` and converts it to a `IRI_Parameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IRI_Parameters`.
     * @returns {IRI_Parameters}
     */
    public static _from_object (_o: { [_K in keyof (IRI_Parameters)]: (IRI_Parameters)[_K] }): IRI_Parameters {
        return new IRI_Parameters(_o.hi2iwlanDomainId, _o.lawfulInterceptionIdentifier, _o.timeStamp, _o.initiator, _o.partyInformation, _o.national_Parameters, _o.networkIdentifier, _o.i_WLANevent, _o.correlationNumber, _o.i_WLANOperationErrorCode, _o.i_wLANinformation, _o.visitedPLMNID, _o.national_HI2_ASN1parameters, _o.nSAPI, _o.packetDataHeaderInformation, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `initiator`
         * @public
         * @static
         */

    public static _enum_for_initiator = _enum_for_IRI_Parameters_initiator;        /**
         * @summary The enum used as the type of the component `i_WLANevent`
         * @public
         * @static
         */

    public static _enum_for_i_WLANevent = _enum_for_I_WLANEvent;
}

/**
 * @summary The Leading Root Component Types of IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IRI_Parameters: $.ComponentSpec[] = [
    new $.ComponentSpec("hi2iwlanDomainId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lawfulInterceptionIdentifier", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("initiator", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("partyInformation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("national-Parameters", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("networkIdentifier", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("i-WLANevent", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("correlationNumber", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("i-WLANOperationErrorCode", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("i-wLANinformation", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("visitedPLMNID", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("national-HI2-ASN1parameters", true, $.hasTag(_TagClass.context, 255))
];

/**
 * @summary The Trailing Root Component Types of IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IRI_Parameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IRI_Parameters: $.ComponentSpec[] = [
    new $.ComponentSpec("nSAPI", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("packetDataHeaderInformation", true, $.hasTag(_TagClass.context, 14))
];

let _cached_decoder_for_IRI_Parameters: $.ASN1Decoder<IRI_Parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRI_Parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRI_Parameters (el: _Element): IRI_Parameters {
    if (!_cached_decoder_for_IRI_Parameters) { _cached_decoder_for_IRI_Parameters = function (el: _Element): IRI_Parameters {
    let hi2iwlanDomainId!: OBJECT_IDENTIFIER;
    let lawfulInterceptionIdentifier!: LawfulInterceptionIdentifier;
    let timeStamp!: TimeStamp;
    let initiator: OPTIONAL<IRI_Parameters_initiator>;
    let partyInformation: OPTIONAL<PartyInformation[]>;
    let national_Parameters: OPTIONAL<National_Parameters>;
    let networkIdentifier: OPTIONAL<Network_Identifier>;
    let i_WLANevent: OPTIONAL<I_WLANEvent>;
    let correlationNumber: OPTIONAL<CorrelationNumber>;
    let i_WLANOperationErrorCode: OPTIONAL<I_WLANOperationErrorCode>;
    let i_wLANinformation: OPTIONAL<I_WLANinformation>;
    let visitedPLMNID: OPTIONAL<VisitedPLMNID>;
    let national_HI2_ASN1parameters: OPTIONAL<National_HI2_ASN1parameters>;
    let nSAPI: OPTIONAL<OCTET_STRING>;
    let packetDataHeaderInformation: OPTIONAL<PacketDataHeaderInformation>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hi2iwlanDomainId": (_el: _Element): void => { hi2iwlanDomainId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "lawfulInterceptionIdentifier": (_el: _Element): void => { lawfulInterceptionIdentifier = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "initiator": (_el: _Element): void => { initiator = $._decode_implicit<IRI_Parameters_initiator>(() => _decode_IRI_Parameters_initiator)(_el); },
        "partyInformation": (_el: _Element): void => {
            partyInformation = $._decode_implicit<PartyInformation[]>(() => $._decodeSetOf<PartyInformation>(() => _decode_PartyInformation))(_el);
            if (partyInformation.length < 1 || partyInformation.length > 10) {
                throw new ASN1SizeError("IRI_Parameters.partyInformation violates SIZE constraint");
            }
        },
        "national-Parameters": (_el: _Element): void => { national_Parameters = $._decode_implicit<National_Parameters>(() => _decode_National_Parameters)(_el); },
        "networkIdentifier": (_el: _Element): void => { networkIdentifier = $._decode_implicit<Network_Identifier>(() => _decode_Network_Identifier)(_el); },
        "i-WLANevent": (_el: _Element): void => { i_WLANevent = $._decode_implicit<I_WLANEvent>(() => _decode_I_WLANEvent)(_el); },
        "correlationNumber": (_el: _Element): void => { correlationNumber = $._decode_implicit<CorrelationNumber>(() => _decode_CorrelationNumber)(_el); },
        "i-WLANOperationErrorCode": (_el: _Element): void => { i_WLANOperationErrorCode = $._decode_implicit<I_WLANOperationErrorCode>(() => _decode_I_WLANOperationErrorCode)(_el); },
        "i-wLANinformation": (_el: _Element): void => { i_wLANinformation = $._decode_implicit<I_WLANinformation>(() => _decode_I_WLANinformation)(_el); },
        "visitedPLMNID": (_el: _Element): void => { visitedPLMNID = $._decode_implicit<VisitedPLMNID>(() => _decode_VisitedPLMNID)(_el); },
        "national-HI2-ASN1parameters": (_el: _Element): void => { national_HI2_ASN1parameters = $._decode_implicit<National_HI2_ASN1parameters>(() => _decode_National_HI2_ASN1parameters)(_el); },
        "nSAPI": (_el: _Element): void => {
            nSAPI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (nSAPI.length < 1 || nSAPI.length > 1) {
                throw new ASN1SizeError("IRI_Parameters.nSAPI violates SIZE constraint");
            }
        },
        "packetDataHeaderInformation": (_el: _Element): void => { packetDataHeaderInformation = $._decode_explicit<PacketDataHeaderInformation>(() => _decode_PacketDataHeaderInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IRI_Parameters,
        _extension_additions_list_spec_for_IRI_Parameters,
        _root_component_type_list_2_spec_for_IRI_Parameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IRI_Parameters(
        hi2iwlanDomainId,
        lawfulInterceptionIdentifier,
        timeStamp,
        initiator,
        partyInformation,
        national_Parameters,
        networkIdentifier,
        i_WLANevent,
        correlationNumber,
        i_WLANOperationErrorCode,
        i_wLANinformation,
        visitedPLMNID,
        national_HI2_ASN1parameters,
        nSAPI,
        packetDataHeaderInformation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IRI_Parameters(el);
}

let _cached_encoder_for_IRI_Parameters: $.ASN1Encoder<IRI_Parameters> | null = null;

/**
 * @summary Encodes a(n) IRI_Parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRI_Parameters, encoded as an ASN.1 Element.
 */
export
function _encode_IRI_Parameters (value: IRI_Parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRI_Parameters) { _cached_encoder_for_IRI_Parameters = function (value: IRI_Parameters, elGetter: $.ASN1Encoder<IRI_Parameters>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(15 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.hi2iwlanDomainId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lawfulInterceptionIdentifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER);
    if (value.initiator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_IRI_Parameters_initiator, $.BER)(value.initiator, $.BER);
    }
    if (value.partyInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSetOf<PartyInformation>(() => _encode_PartyInformation, $.BER), $.BER)(value.partyInformation, $.BER);
    }
    if (value.national_Parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_National_Parameters, $.BER)(value.national_Parameters, $.BER);
    }
    if (value.networkIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_Network_Identifier, $.BER)(value.networkIdentifier, $.BER);
    }
    if (value.i_WLANevent !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_I_WLANEvent, $.BER)(value.i_WLANevent, $.BER);
    }
    if (value.correlationNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_CorrelationNumber, $.BER)(value.correlationNumber, $.BER);
    }
    if (value.i_WLANOperationErrorCode !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_I_WLANOperationErrorCode, $.BER)(value.i_WLANOperationErrorCode, $.BER);
    }
    if (value.i_wLANinformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_I_WLANinformation, $.BER)(value.i_wLANinformation, $.BER);
    }
    if (value.visitedPLMNID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_VisitedPLMNID, $.BER)(value.visitedPLMNID, $.BER);
    }
    if (value.national_HI2_ASN1parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 255, () => _encode_National_HI2_ASN1parameters, $.BER)(value.national_HI2_ASN1parameters, $.BER);
    }
    if (value.nSAPI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.nSAPI, $.BER);
    }
    if (value.packetDataHeaderInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 14, () => _encode_PacketDataHeaderInformation, $.BER)(value.packetDataHeaderInformation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IRI_Parameters(value, elGetter);
}


/* eslint-enable */
