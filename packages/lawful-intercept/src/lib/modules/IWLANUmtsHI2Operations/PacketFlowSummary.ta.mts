/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
import { ReportInterval, _decode_ReportInterval, _encode_ReportInterval } from "../IWLANUmtsHI2Operations/ReportInterval.ta.mjs";
// export { ReportInterval, _decode_ReportInterval, _encode_ReportInterval } from "../IWLANUmtsHI2Operations/ReportInterval.ta.mjs";
import { type ReportReason, _decode_ReportReason, _encode_ReportReason, _enum_for_ReportReason } from "../IWLANUmtsHI2Operations/ReportReason.ta.mjs";
// export { ReportReason, _enum_for_ReportReason, ReportReason_timerExpired /* IMPORTED_LONG_ENUMERATION_ITEM */, timerExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportReason_countThresholdHit /* IMPORTED_LONG_ENUMERATION_ITEM */, countThresholdHit /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportReason_pDPComtextDeactivated /* IMPORTED_LONG_ENUMERATION_ITEM */, pDPComtextDeactivated /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportReason_pDPContextModification /* IMPORTED_LONG_ENUMERATION_ITEM */, pDPContextModification /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportReason_otherOrUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, otherOrUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReportReason, _encode_ReportReason } from "../IWLANUmtsHI2Operations/ReportReason.ta.mjs";


/**
 * @summary PacketFlowSummary
 * @description
 * 
 * Reporting information for one packet flow in a summary report.
 * 
 * 3GPP TS 33.108, table 8.10 and annex B.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PacketFlowSummary ::= SEQUENCE
 * {
 * 
 *     sourceIPAddress            [1] IPAddress,
 *     sourcePortNumber        [2] INTEGER (0..65535) OPTIONAL,    
 *     destinationIPAddress    [3] IPAddress,
 *     destinationPortNumber    [4] INTEGER (0..65535) OPTIONAL,
 *     transportProtocol        [5] INTEGER,
 *     -- For IPv4, report the "Protocol" field and for IPv6 report "Next Header" field.
 *     -- Assigned Internet Protocol Numbers can be found at
 *     -- http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xml
 *     flowLabel                [6] INTEGER OPTIONAL,
 *     summaryPeriod            [7] ReportInterval,
 *     packetCount                [8] INTEGER,
 *     sumOfPacketSizes        [9] INTEGER,
 *     packetDataSummaryReason    [10] ReportReason,
 * ...
 * }
 * ```
 * 
 * @class
 */
export
class PacketFlowSummary {
    /**
     * @summary `sourceIPAddress`.
     * @description
     * 
     * Source IP address of this packet flow. Mandatory (table 8.10).
     * 
     * 3GPP TS 33.108, table 8.2 and table 8.10.
     * @public
     * @readonly
     */
    readonly sourceIPAddress: IPAddress;
    /**
     * @summary `sourcePortNumber`.
     * @description
     * 
     * Source port of this packet flow. Conditional when the transport protocol
     * supports port numbers (table 8.10).
     * 
     * 3GPP TS 33.108, table 8.2 and table 8.10.
     * @public
     * @readonly
     */
    readonly sourcePortNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `destinationIPAddress`.
     * @description
     * 
     * Destination IP address of this packet flow. Mandatory (table 8.10).
     * 
     * 3GPP TS 33.108, table 8.2 and table 8.10.
     * @public
     * @readonly
     */
    readonly destinationIPAddress: IPAddress;
    /**
     * @summary `destinationPortNumber`.
     * @description
     * 
     * Destination port of this packet flow. Conditional when the transport
     * protocol supports port numbers (table 8.10).
     * 
     * 3GPP TS 33.108, table 8.2 and table 8.10.
     * @public
     * @readonly
     */
    readonly destinationPortNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `transportProtocol`.
     * @description
     * 
     * Transport protocol of this packet flow, for example TCP. For IPv4 report
     * the Protocol field; for IPv6 report the Next Header field. Mandatory
     * (table 8.10).
     * 
     * Assigned Internet Protocol Numbers are listed at
     * http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xml
     * 
     * 3GPP TS 33.108, table 8.2, table 8.10, and annex B.7.
     * @public
     * @readonly
     */
    readonly transportProtocol: INTEGER;
    /**
     * @summary `flowLabel`.
     * @description
     * 
     * IPv6 flow label for this packet flow (RFC 3697). Conditional, and only
     * for IPv6 (table 8.10).
     * 
     * 3GPP TS 33.108, table 8.2 and table 8.10.
     * @public
     * @readonly
     */
    readonly flowLabel: OPTIONAL<INTEGER>;
    /**
     * @summary `summaryPeriod`.
     * @description
     * 
     * Time span of the packets in this flow summary. Mandatory (table 8.10).
     * The span runs from detection of the first packet to detection of the last
     * packet in the reporting period.
     * 
     * 3GPP TS 33.108, table 8.2 and table 8.10.
     * @public
     * @readonly
     */
    readonly summaryPeriod: ReportInterval;
    /**
     * @summary `packetCount`.
     * @description
     * 
     * Number of packets detected for this flow. Mandatory (table 8.10).
     * 
     * 3GPP TS 33.108, table 8.2 and table 8.10.
     * @public
     * @readonly
     */
    readonly packetCount: INTEGER;
    /**
     * @summary `sumOfPacketSizes`.
     * @description
     * 
     * Sum of the Total Length fields of the IPv4 packets, or of the Payload
     * Length fields of the IPv6 packets, for this flow. Optional (table 8.10).
     * 
     * 3GPP TS 33.108, table 8.2 and table 8.10.
     * @public
     * @readonly
     */
    readonly sumOfPacketSizes: INTEGER;
    /**
     * @summary `packetDataSummaryReason`.
     * @description
     * 
     * Why this summary was sent to the LEMF. Mandatory (table 8.10): timeout,
     * count limit, or end of session.
     * 
     * 3GPP TS 33.108, table 8.2 and table 8.10.
     * @public
     * @readonly
     */
    readonly packetDataSummaryReason: ReportReason;
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
        sourceIPAddress: IPAddress,
        sourcePortNumber: OPTIONAL<INTEGER>,
        destinationIPAddress: IPAddress,
        destinationPortNumber: OPTIONAL<INTEGER>,
        transportProtocol: INTEGER,
        flowLabel: OPTIONAL<INTEGER>,
        summaryPeriod: ReportInterval,
        packetCount: INTEGER,
        sumOfPacketSizes: INTEGER,
        packetDataSummaryReason: ReportReason,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sourceIPAddress = sourceIPAddress;
        this.sourcePortNumber = sourcePortNumber;
        this.destinationIPAddress = destinationIPAddress;
        this.destinationPortNumber = destinationPortNumber;
        this.transportProtocol = transportProtocol;
        this.flowLabel = flowLabel;
        this.summaryPeriod = summaryPeriod;
        this.packetCount = packetCount;
        this.sumOfPacketSizes = sumOfPacketSizes;
        this.packetDataSummaryReason = packetDataSummaryReason;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PacketFlowSummary
     * @description
     * 
     * This takes an `object` and converts it to a `PacketFlowSummary`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PacketFlowSummary`.
     * @returns {PacketFlowSummary}
     */
    public static _from_object (_o: { [_K in keyof (PacketFlowSummary)]: (PacketFlowSummary)[_K] }): PacketFlowSummary {
        return new PacketFlowSummary(_o.sourceIPAddress, _o.sourcePortNumber, _o.destinationIPAddress, _o.destinationPortNumber, _o.transportProtocol, _o.flowLabel, _o.summaryPeriod, _o.packetCount, _o.sumOfPacketSizes, _o.packetDataSummaryReason, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `packetDataSummaryReason`
         * @public
         * @static
         */

    public static _enum_for_packetDataSummaryReason = _enum_for_ReportReason;
}

/**
 * @summary The Leading Root Component Types of PacketFlowSummary
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PacketFlowSummary: $.ComponentSpec[] = [
    new $.ComponentSpec("sourceIPAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sourcePortNumber", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("destinationIPAddress", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("destinationPortNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("transportProtocol", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("flowLabel", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("summaryPeriod", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("packetCount", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("sumOfPacketSizes", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("packetDataSummaryReason", false, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of PacketFlowSummary
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PacketFlowSummary: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PacketFlowSummary
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PacketFlowSummary: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PacketFlowSummary: $.ASN1Decoder<PacketFlowSummary> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PacketFlowSummary
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PacketFlowSummary (el: _Element): PacketFlowSummary {
    if (!_cached_decoder_for_PacketFlowSummary) { _cached_decoder_for_PacketFlowSummary = function (el: _Element): PacketFlowSummary {
    let sourceIPAddress!: IPAddress;
    let sourcePortNumber: OPTIONAL<INTEGER>;
    let destinationIPAddress!: IPAddress;
    let destinationPortNumber: OPTIONAL<INTEGER>;
    let transportProtocol!: INTEGER;
    let flowLabel: OPTIONAL<INTEGER>;
    let summaryPeriod!: ReportInterval;
    let packetCount!: INTEGER;
    let sumOfPacketSizes!: INTEGER;
    let packetDataSummaryReason!: ReportReason;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sourceIPAddress": (_el: _Element): void => { sourceIPAddress = $._decode_implicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "sourcePortNumber": (_el: _Element): void => {
            sourcePortNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof sourcePortNumber === "bigint" ? sourcePortNumber : BigInt(sourcePortNumber);
            if (_n < 0n || _n > 65535n) {
                throw new ASN1OverflowError("PacketFlowSummary.sourcePortNumber violates INTEGER range");
            }
        },
        "destinationIPAddress": (_el: _Element): void => { destinationIPAddress = $._decode_implicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "destinationPortNumber": (_el: _Element): void => {
            destinationPortNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof destinationPortNumber === "bigint" ? destinationPortNumber : BigInt(destinationPortNumber);
            if (_n < 0n || _n > 65535n) {
                throw new ASN1OverflowError("PacketFlowSummary.destinationPortNumber violates INTEGER range");
            }
        },
        "transportProtocol": (_el: _Element): void => { transportProtocol = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "flowLabel": (_el: _Element): void => { flowLabel = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "summaryPeriod": (_el: _Element): void => { summaryPeriod = $._decode_implicit<ReportInterval>(() => _decode_ReportInterval)(_el); },
        "packetCount": (_el: _Element): void => { packetCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sumOfPacketSizes": (_el: _Element): void => { sumOfPacketSizes = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "packetDataSummaryReason": (_el: _Element): void => { packetDataSummaryReason = $._decode_implicit<ReportReason>(() => _decode_ReportReason)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PacketFlowSummary,
        _extension_additions_list_spec_for_PacketFlowSummary,
        _root_component_type_list_2_spec_for_PacketFlowSummary,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PacketFlowSummary(
        sourceIPAddress,
        sourcePortNumber,
        destinationIPAddress,
        destinationPortNumber,
        transportProtocol,
        flowLabel,
        summaryPeriod,
        packetCount,
        sumOfPacketSizes,
        packetDataSummaryReason,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PacketFlowSummary(el);
}

let _cached_encoder_for_PacketFlowSummary: $.ASN1Encoder<PacketFlowSummary> | null = null;

/**
 * @summary Encodes a(n) PacketFlowSummary into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PacketFlowSummary, encoded as an ASN.1 Element.
 */
export
function _encode_PacketFlowSummary (value: PacketFlowSummary, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PacketFlowSummary) { _cached_encoder_for_PacketFlowSummary = function (value: PacketFlowSummary, elGetter: $.ASN1Encoder<PacketFlowSummary>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER)(value.sourceIPAddress, $.BER);
    if (value.sourcePortNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.sourcePortNumber, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_IPAddress, $.BER)(value.destinationIPAddress, $.BER);
    if (value.destinationPortNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.destinationPortNumber, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.transportProtocol, $.BER);
    if (value.flowLabel !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.flowLabel, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_ReportInterval, $.BER)(value.summaryPeriod, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.packetCount, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.sumOfPacketSizes, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => _encode_ReportReason, $.BER)(value.packetDataSummaryReason, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PacketFlowSummary(value, elGetter);
}


/* eslint-enable */
