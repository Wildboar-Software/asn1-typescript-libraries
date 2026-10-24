/* eslint-disable */
import {
    type BOOLEAN,
    type INTEGER,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
import { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";
// export { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";
import { NextLayerProtocol, _decode_NextLayerProtocol, _encode_NextLayerProtocol } from "../TS33128Payloads/NextLayerProtocol.ta.mjs";
// export { NextLayerProtocol, _decode_NextLayerProtocol, _encode_NextLayerProtocol } from "../TS33128Payloads/NextLayerProtocol.ta.mjs";
import { IPv6FlowLabel, _decode_IPv6FlowLabel, _encode_IPv6FlowLabel } from "../TS33128Payloads/IPv6FlowLabel.ta.mjs";
// export { IPv6FlowLabel, _decode_IPv6FlowLabel, _encode_IPv6FlowLabel } from "../TS33128Payloads/IPv6FlowLabel.ta.mjs";
import { Direction, _decode_Direction, _encode_Direction, _enum_for_Direction } from "../TS33128Payloads/Direction.ta.mjs";
// export { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
import { PDSRSummaryTrigger, _decode_PDSRSummaryTrigger, _encode_PDSRSummaryTrigger, _enum_for_PDSRSummaryTrigger } from "../TS33128Payloads/PDSRSummaryTrigger.ta.mjs";
// export { PDSRSummaryTrigger, _enum_for_PDSRSummaryTrigger, PDSRSummaryTrigger_timerExpiry /* IMPORTED_LONG_ENUMERATION_ITEM */, timerExpiry /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDSRSummaryTrigger_packetCount /* IMPORTED_LONG_ENUMERATION_ITEM */, packetCount /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDSRSummaryTrigger_byteCount /* IMPORTED_LONG_ENUMERATION_ITEM */, byteCount /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDSRSummaryTrigger_startOfFlow /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfFlow /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDSRSummaryTrigger_endOfFlow /* IMPORTED_LONG_ENUMERATION_ITEM */, endOfFlow /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PDSRSummaryTrigger, _encode_PDSRSummaryTrigger } from "../TS33128Payloads/PDSRSummaryTrigger.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";


/**
 * @summary PDSummaryReport
 * @description
 * 
 * As of version 19.0.0 of the present document the PDSummaryReport record has
 * been deprecated in favour of the IPPR record as defined in clause 6.2.3.9.5.
 *
 * If the summary form of the packet header reporting, i.e. PDSR, is used, the
 * LI function responsible for generating the xIRI extracts the information
 * shown in table 6.2.3.9.4-1 from each packet and aggregates it in summaries
 * according to the pDSRType field defined in the PDHRReportingExtensions
 * parameters of the ActivateTask message used to provision the LI function. In
 * addition, the current summary is sent when the LI function responsible for
 * generating the xIRI receives a DeactivateTask message for the Task that
 * generated the PDSR regardless of whether the trigger in the pDSRType field of
 * the ActivateTask message was met. In this case, the pDSRSummaryTrigger field
 * of the PDSR record shall be set to endOfFlow.
 *
 * A PDSR shall be generated each time a flow (Source IP, Source Port,
 * Destination IP, Destination Port, Next Level Protocol, Direction) starts or
 * ends.
 *
 * If the useSessionTriggers flag (see table 6.2.3.9.2-2) is absent or set to
 * false and the provisioned pDSRTriggerType is:
 *
 * - Packet count, a PDSR shall be generated whenever the number of packets
 *   detected as a part of the flow reaches the provisioned trigger value.
 *
 * - Byte count, a PDSR shall be generated whenever the value for the cumulative
 *   byte size across all packets belonging to the flow reaches the provisioned
 *   trigger value.
 *
 * - Timer expiry, a separate timer should be used for each flow. A PDSR shall
 *   be generated for a flow whenever the timer for that flow expires.
 *
 * If the useSessionTriggers flag (see table 6.2.3.9.2-2) is set to true and the
 * provisioned pDSRTriggerType is:
 *
 * - Packet count, a PDSR shall be generated for each open flow whenever the
 *   number of packets sent and received in the PDU Session/PDN Connection is
 *   reaches the provisioned trigger value.
 *
 * - Byte count, a PDSR shall be generated for each open flow whenever the value
 *   for the cumulative byte size across all packets belonging to the PDU
 *   Session/PDN Connection is reaches the provisioned trigger value.
 *
 * - Timer expiry, a single timer should be used for each PDU Session/PDN
 *   Connection. A PDSR shall be generated for each open flow whenever the timer
 *   expires.
 *
 * NOTE 1: This is a placeholder value used to fill the pDUSessionID field,
 * given that the UPF does not receive the PDU Session ID used for the session
 * by the SMF, so this information is not available at the UPF. The PDU Session
 * ID can be retrieved by the LEMF from the IRIs generated by the IRI-POI at the
 * SMF and delivered by the MDF2.
 *
 * NOTE 2: The parameter useSessionTrigger was incorrectly introduced in version
 * 18.1.0 of the present document (ASN.1 OID r18(18) version1(1)) as a mandatory
 * parameter and was not corrected before the creation of version 19.0.0 of the
 * present document. It should have been OPTIONAL and was corrected in version
 * 19.8.0 of the present document (ASN.1 OID r19(19) version8(8)).
 *
 * Table 6.2.3.7-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 6.2.3.9.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDSummaryReport ::= SEQUENCE
 * {
 *     pDUSessionID                [1] PDUSessionID,
 *     sourceIPAddress             [2] IPAddress,
 *     sourcePort                  [3] PortNumber OPTIONAL,
 *     destinationIPAddress        [4] IPAddress,
 *     destinationPort             [5] PortNumber OPTIONAL,
 *     nextLayerProtocol           [6] NextLayerProtocol,
 *     iPv6flowLabel               [7] IPv6FlowLabel OPTIONAL,
 *     direction                   [8] Direction,
 *     pDSRSummaryTrigger          [9] PDSRSummaryTrigger,
 *     firstPacketTimestamp        [10] Timestamp,
 *     lastPacketTimestamp         [11] Timestamp,
 *     packetCount                 [12] INTEGER,
 *     byteCount                   [13] INTEGER,
 *     useSessionTrigger           [14] BOOLEAN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PDSummaryReport {
    /**
     * @summary `pDUSessionID`.
     * @description
     *
     * The PDU Session ID value 255 shall be used; the receiver shall ignore the
     * parameter (see NOTE 1). NOTE 1: This is a placeholder value used to fill
     * the pDUSessionID field, given that the UPF does not receive the PDU
     * Session ID used for the session by the SMF, so this information is not
     * available at the UPF. The PDU Session ID can be retrieved by the LEMF
     * from the IRIs generated by the IRI-POI at the SMF and delivered by the
     * MDF2.
     *
     * 3GPP TS 33.128, clause 6.2.3.9.4.
     *
     * @public
     * @readonly
     */
    readonly pDUSessionID: PDUSessionID;
    /**
     * @summary `sourceIPAddress`.
     * @description
     *
     * Shall contain the source address of the packet from the 32-bit "Source
     * Address" field in IPv4, as defined in IETF RFC 791 [34], or from the
     * 128-bit "Source Address" field in IPv6, as defined in IETF RFC 8200
     * [167].
     *
     * 3GPP TS 33.128, clause 6.2.3.9.4.
     *
     * @public
     * @readonly
     */
    readonly sourceIPAddress: IPAddress;
    /**
     * @summary `sourcePort`.
     * @description
     *
     * Shall contain the "Source Port" number that indicates an application or
     * service running on top of the transport, if the "Protocol" IP field (see
     * the nextLayerProtocol field below in this table) is one of: a)
     * Transmission Control Protocol (TCP), IP "Protocol" field decimal "6"; see
     * IETF RFC 793 [28]. b) User Datagram Protocol (UDP), IP "Protocol" field
     * decimal "17"; see IETF RFC 768 [29]. c) Datagram Congestion Control
     * Protocol (DCCP), IP "Protocol" field decimal "33"; see IETF RFC 4340
     * [30]. d) Stream Control Transmission Protocol (SCTP), IP "Protocol" field
     * decimal "132"; Stream Control Transmission Protocol [31]. For further
     * details on Layer four protocols, see IANA [32].
     *
     * 3GPP TS 33.128, clause 6.2.3.9.4.
     *
     * @public
     * @readonly
     */
    readonly sourcePort: OPTIONAL<PortNumber>;
    /**
     * @summary `destinationIPAddress`.
     * @description
     *
     * Shall contain the destination address of the packet from the 32-bit
     * "Destination Address" field in IPv4, as defined in IETF RFC 791 [34], or
     * from the 128-bit "Destination Address" field, as defined in IETF RFC 8200
     * [167].
     *
     * 3GPP TS 33.128, clause 6.2.3.9.4.
     *
     * @public
     * @readonly
     */
    readonly destinationIPAddress: IPAddress;
    /**
     * @summary `destinationPort`.
     * @description
     *
     * Shall contain the "Destination Port" number that indicates an application
     * or service running on top of the transport, if the "Protocol" IP field
     * (see the nextLayerProtocol field below in this table) is one of: a)
     * Transmission Control Protocol (TCP), IP "Protocol" field decimal "6"; see
     * IETF RFC 793 [28]. b) User Datagram Protocol (UDP), IP "Protocol" field
     * decimal "17"; see IETF RFC 768 [29]. c) Datagram Congestion Control
     * Protocol (DCCP), IP "Protocol" field decimal "33"; see IETF RFC 4340
     * [30]. d) Stream Control Transmission Protocol (SCTP), IP "Protocol" field
     * decimal "132"; Stream Control Transmission Protocol [31]. For further
     * details on Layer four protocols, see IANA [32].
     *
     * 3GPP TS 33.128, clause 6.2.3.9.4.
     *
     * @public
     * @readonly
     */
    readonly destinationPort: OPTIONAL<PortNumber>;
    /**
     * @summary `nextLayerProtocol`.
     * @description
     *
     * Shall contain the contents of the IP "Protocol" field as defined in IETF
     * RFC 791 [34] (bits 72..79 in the IP header), and is one of the assigned
     * Internet protocol numbers defined in IANA [32].
     *
     * 3GPP TS 33.128, clause 6.2.3.9.4.
     *
     * @public
     * @readonly
     */
    readonly nextLayerProtocol: NextLayerProtocol;
    /**
     * @summary `iPv6flowLabel`.
     * @description
     *
     * If the IP addresses in the report are IPv6, this field shall contain the
     * 20-bit IPv6 "Flow Label" as defined in IPv6 IETF RFC 8200 [167] and the
     * IPV6 Flow Label Specification IETF RFC 6437 [33].
     *
     * 3GPP TS 33.128, clause 6.2.3.9.4.
     *
     * @public
     * @readonly
     */
    readonly iPv6flowLabel: OPTIONAL<IPv6FlowLabel>;
    /**
     * @summary `direction`.
     * @description
     *
     * Shall contain the direction of the intercepted packet, and it indicates
     * either "from target" or "to target".
     *
     * 3GPP TS 33.128, clause 6.2.3.9.4.
     *
     * @public
     * @readonly
     */
    readonly direction: Direction;
    /**
     * @summary `pDSRSummaryTrigger`.
     * @description
     *
     * Shall contain the trigger that caused the summary report to be generated,
     * which is one of the following: a) timer expiry. b) packet count. c) byte
     * count. d) start of a flow. e) end of a flow.
     *
     * 3GPP TS 33.128, clause 6.2.3.9.4.
     *
     * @public
     * @readonly
     */
    readonly pDSRSummaryTrigger: PDSRSummaryTrigger;
    /**
     * @summary `firstPacketTimestamp`.
     * @description
     *
     * Shall contain the timestamp that represents the time that the IRI-POI in
     * the UPF detected the first packet in the set represented by this summary.
     *
     * 3GPP TS 33.128, clause 6.2.3.9.4.
     *
     * @public
     * @readonly
     */
    readonly firstPacketTimestamp: Timestamp;
    /**
     * @summary `lastPacketTimestamp`.
     * @description
     *
     * Shall contain the timestamp that represents the time that the IRI-POI in
     * the UPF detected the last packet in the set represented by this summary.
     *
     * 3GPP TS 33.128, clause 6.2.3.9.4.
     *
     * @public
     * @readonly
     */
    readonly lastPacketTimestamp: Timestamp;
    /**
     * @summary `packetCount`.
     * @description
     *
     * Shall contain the number of packets detected during the creation of this
     * summary.
     *
     * 3GPP TS 33.128, clause 6.2.3.9.4.
     *
     * @public
     * @readonly
     */
    readonly packetCount: INTEGER;
    /**
     * @summary `byteCount`.
     * @description
     *
     * Shall contain the number of bytes summed across all packets that belong
     * to this summary. For IPv4 it is the sum of the "Total Length" fields
     * across all packets in the summary as defined in Internet Protocol IETF
     * RFC 791 [34], while for IPv6 it is the sum of the "Payload Length" fields
     * across all packets in the summary as defined in Internet Protocol,
     * Version 6 (IPv6) Specification, IETF RFC 8200 [167].
     *
     * 3GPP TS 33.128, clause 6.2.3.9.4.
     *
     * @public
     * @readonly
     */
    readonly byteCount: INTEGER;
    /**
     * @summary `useSessionTrigger`.
     * @description
     *
     * Shall be present and set to true if the trigger that caused the summary
     * report to be generated was applied to the Session. If the trigger that
     * caused the summary report to be generated was applied per flow, this
     * parameter may be omitted but shall be set to false if present. See NOTE
     * 2. NOTE 2: The parameter useSessionTrigger was incorrectly introduced in
     * version 18.1.0 of the present document (ASN.1 OID r18(18) version1(1)) as
     * a mandatory parameter and was not corrected before the creation of
     * version 19.0.0 of the present document. It should have been OPTIONAL and
     * was corrected in version 19.8.0 of the present document (ASN.1 OID
     * r19(19) version8(8)).
     *
     * 3GPP TS 33.128, clause 6.2.3.9.4.
     *
     * @public
     * @readonly
     */
    readonly useSessionTrigger: OPTIONAL<BOOLEAN>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pDUSessionID: PDUSessionID,
        sourceIPAddress: IPAddress,
        sourcePort: OPTIONAL<PortNumber>,
        destinationIPAddress: IPAddress,
        destinationPort: OPTIONAL<PortNumber>,
        nextLayerProtocol: NextLayerProtocol,
        iPv6flowLabel: OPTIONAL<IPv6FlowLabel>,
        direction: Direction,
        pDSRSummaryTrigger: PDSRSummaryTrigger,
        firstPacketTimestamp: Timestamp,
        lastPacketTimestamp: Timestamp,
        packetCount: INTEGER,
        byteCount: INTEGER,
        useSessionTrigger?: OPTIONAL<BOOLEAN>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pDUSessionID = pDUSessionID;
        this.sourceIPAddress = sourceIPAddress;
        this.sourcePort = sourcePort;
        this.destinationIPAddress = destinationIPAddress;
        this.destinationPort = destinationPort;
        this.nextLayerProtocol = nextLayerProtocol;
        this.iPv6flowLabel = iPv6flowLabel;
        this.direction = direction;
        this.pDSRSummaryTrigger = pDSRSummaryTrigger;
        this.firstPacketTimestamp = firstPacketTimestamp;
        this.lastPacketTimestamp = lastPacketTimestamp;
        this.packetCount = packetCount;
        this.byteCount = byteCount;
        this.useSessionTrigger = useSessionTrigger;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PDSummaryReport
     * @description
     * 
     * This takes an `object` and converts it to a `PDSummaryReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDSummaryReport`.
     * @returns {PDSummaryReport}
     */
    public static _from_object (_o: { [_K in keyof (PDSummaryReport)]: (PDSummaryReport)[_K] }): PDSummaryReport {
        return new PDSummaryReport(_o.pDUSessionID, _o.sourceIPAddress, _o.sourcePort, _o.destinationIPAddress, _o.destinationPort, _o.nextLayerProtocol, _o.iPv6flowLabel, _o.direction, _o.pDSRSummaryTrigger, _o.firstPacketTimestamp, _o.lastPacketTimestamp, _o.packetCount, _o.byteCount, _o.useSessionTrigger, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_Direction;        /**
         * @summary The enum used as the type of the component `pDSRSummaryTrigger`
         * @public
         * @static
         */

    public static _enum_for_pDSRSummaryTrigger = _enum_for_PDSRSummaryTrigger;
}

/**
 * @summary The Leading Root Component Types of PDSummaryReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PDSummaryReport: $.ComponentSpec[] = [
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sourceIPAddress", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sourcePort", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("destinationIPAddress", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("destinationPort", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("nextLayerProtocol", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("iPv6flowLabel", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("pDSRSummaryTrigger", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("firstPacketTimestamp", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("lastPacketTimestamp", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("packetCount", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("byteCount", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("useSessionTrigger", true, $.hasTag(_TagClass.context, 14))
];

/**
 * @summary The Trailing Root Component Types of PDSummaryReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PDSummaryReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PDSummaryReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PDSummaryReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PDSummaryReport: $.ASN1Decoder<PDSummaryReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDSummaryReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDSummaryReport (el: _Element): PDSummaryReport {
    if (!_cached_decoder_for_PDSummaryReport) { _cached_decoder_for_PDSummaryReport = function (el: _Element): PDSummaryReport {
    let pDUSessionID!: PDUSessionID;
    let sourceIPAddress!: IPAddress;
    let sourcePort: OPTIONAL<PortNumber>;
    let destinationIPAddress!: IPAddress;
    let destinationPort: OPTIONAL<PortNumber>;
    let nextLayerProtocol!: NextLayerProtocol;
    let iPv6flowLabel: OPTIONAL<IPv6FlowLabel>;
    let direction!: Direction;
    let pDSRSummaryTrigger!: PDSRSummaryTrigger;
    let firstPacketTimestamp!: Timestamp;
    let lastPacketTimestamp!: Timestamp;
    let packetCount!: INTEGER;
    let byteCount!: INTEGER;
    let useSessionTrigger: OPTIONAL<BOOLEAN>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "sourceIPAddress": (_el: _Element): void => { sourceIPAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "sourcePort": (_el: _Element): void => { sourcePort = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(_el); },
        "destinationIPAddress": (_el: _Element): void => { destinationIPAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "destinationPort": (_el: _Element): void => { destinationPort = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(_el); },
        "nextLayerProtocol": (_el: _Element): void => { nextLayerProtocol = $._decode_implicit<NextLayerProtocol>(() => _decode_NextLayerProtocol)(_el); },
        "iPv6flowLabel": (_el: _Element): void => { iPv6flowLabel = $._decode_implicit<IPv6FlowLabel>(() => _decode_IPv6FlowLabel)(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "pDSRSummaryTrigger": (_el: _Element): void => { pDSRSummaryTrigger = $._decode_implicit<PDSRSummaryTrigger>(() => _decode_PDSRSummaryTrigger)(_el); },
        "firstPacketTimestamp": (_el: _Element): void => { firstPacketTimestamp = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "lastPacketTimestamp": (_el: _Element): void => { lastPacketTimestamp = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "packetCount": (_el: _Element): void => { packetCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "byteCount": (_el: _Element): void => { byteCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "useSessionTrigger": (_el: _Element): void => { useSessionTrigger = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PDSummaryReport,
        _extension_additions_list_spec_for_PDSummaryReport,
        _root_component_type_list_2_spec_for_PDSummaryReport,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PDSummaryReport(
        pDUSessionID,
        sourceIPAddress,
        sourcePort,
        destinationIPAddress,
        destinationPort,
        nextLayerProtocol,
        iPv6flowLabel,
        direction,
        pDSRSummaryTrigger,
        firstPacketTimestamp,
        lastPacketTimestamp,
        packetCount,
        byteCount,
        useSessionTrigger,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PDSummaryReport(el);
}

let _cached_encoder_for_PDSummaryReport: $.ASN1Encoder<PDSummaryReport> | null = null;

/**
 * @summary Encodes a(n) PDSummaryReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDSummaryReport, encoded as an ASN.1 Element.
 */
export
function _encode_PDSummaryReport (value: PDSummaryReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDSummaryReport) { _cached_encoder_for_PDSummaryReport = function (value: PDSummaryReport, elGetter: $.ASN1Encoder<PDSummaryReport>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(14 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_IPAddress, $.BER)(value.sourceIPAddress, $.BER);
    if (value.sourcePort !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_PortNumber, $.BER)(value.sourcePort, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_IPAddress, $.BER)(value.destinationIPAddress, $.BER);
    if (value.destinationPort !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_PortNumber, $.BER)(value.destinationPort, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_NextLayerProtocol, $.BER)(value.nextLayerProtocol, $.BER);
    if (value.iPv6flowLabel !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_IPv6FlowLabel, $.BER)(value.iPv6flowLabel, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_Direction, $.BER)(value.direction, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_PDSRSummaryTrigger, $.BER)(value.pDSRSummaryTrigger, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => _encode_Timestamp, $.BER)(value.firstPacketTimestamp, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => _encode_Timestamp, $.BER)(value.lastPacketTimestamp, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER)(value.packetCount, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.byteCount, $.BER);
    if (value.useSessionTrigger !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeBoolean, $.BER)(value.useSessionTrigger, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PDSummaryReport(value, elGetter);
}


/* eslint-enable */
