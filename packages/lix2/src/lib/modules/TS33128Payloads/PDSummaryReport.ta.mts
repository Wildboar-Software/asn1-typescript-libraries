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
import { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
// export { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
import { PDSRSummaryTrigger, _enum_for_PDSRSummaryTrigger, PDSRSummaryTrigger_timerExpiry /* IMPORTED_LONG_ENUMERATION_ITEM */, timerExpiry /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDSRSummaryTrigger_packetCount /* IMPORTED_LONG_ENUMERATION_ITEM */, packetCount /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDSRSummaryTrigger_byteCount /* IMPORTED_LONG_ENUMERATION_ITEM */, byteCount /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDSRSummaryTrigger_startOfFlow /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfFlow /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDSRSummaryTrigger_endOfFlow /* IMPORTED_LONG_ENUMERATION_ITEM */, endOfFlow /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PDSRSummaryTrigger, _encode_PDSRSummaryTrigger } from "../TS33128Payloads/PDSRSummaryTrigger.ta.mjs";
// export { PDSRSummaryTrigger, _enum_for_PDSRSummaryTrigger, PDSRSummaryTrigger_timerExpiry /* IMPORTED_LONG_ENUMERATION_ITEM */, timerExpiry /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDSRSummaryTrigger_packetCount /* IMPORTED_LONG_ENUMERATION_ITEM */, packetCount /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDSRSummaryTrigger_byteCount /* IMPORTED_LONG_ENUMERATION_ITEM */, byteCount /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDSRSummaryTrigger_startOfFlow /* IMPORTED_LONG_ENUMERATION_ITEM */, startOfFlow /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDSRSummaryTrigger_endOfFlow /* IMPORTED_LONG_ENUMERATION_ITEM */, endOfFlow /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PDSRSummaryTrigger, _encode_PDSRSummaryTrigger } from "../TS33128Payloads/PDSRSummaryTrigger.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";


/**
 * @summary PDSummaryReport
 * @description
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
 *     useSessionTrigger           [14] BOOLEAN
 * }
 * ```
 * 
 * @class
 */
export
class PDSummaryReport {
    constructor (
        /**
         * @summary `pDUSessionID`.
         * @public
         * @readonly
         */
        readonly pDUSessionID: PDUSessionID,
        /**
         * @summary `sourceIPAddress`.
         * @public
         * @readonly
         */
        readonly sourceIPAddress: IPAddress,
        /**
         * @summary `sourcePort`.
         * @public
         * @readonly
         */
        readonly sourcePort: OPTIONAL<PortNumber>,
        /**
         * @summary `destinationIPAddress`.
         * @public
         * @readonly
         */
        readonly destinationIPAddress: IPAddress,
        /**
         * @summary `destinationPort`.
         * @public
         * @readonly
         */
        readonly destinationPort: OPTIONAL<PortNumber>,
        /**
         * @summary `nextLayerProtocol`.
         * @public
         * @readonly
         */
        readonly nextLayerProtocol: NextLayerProtocol,
        /**
         * @summary `iPv6flowLabel`.
         * @public
         * @readonly
         */
        readonly iPv6flowLabel: OPTIONAL<IPv6FlowLabel>,
        /**
         * @summary `direction`.
         * @public
         * @readonly
         */
        readonly direction: Direction,
        /**
         * @summary `pDSRSummaryTrigger`.
         * @public
         * @readonly
         */
        readonly pDSRSummaryTrigger: PDSRSummaryTrigger,
        /**
         * @summary `firstPacketTimestamp`.
         * @public
         * @readonly
         */
        readonly firstPacketTimestamp: Timestamp,
        /**
         * @summary `lastPacketTimestamp`.
         * @public
         * @readonly
         */
        readonly lastPacketTimestamp: Timestamp,
        /**
         * @summary `packetCount`.
         * @public
         * @readonly
         */
        readonly packetCount: INTEGER,
        /**
         * @summary `byteCount`.
         * @public
         * @readonly
         */
        readonly byteCount: INTEGER,
        /**
         * @summary `useSessionTrigger`.
         * @public
         * @readonly
         */
        readonly useSessionTrigger: BOOLEAN
    ) {}

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
        return new PDSummaryReport(_o.pDUSessionID, _o.sourceIPAddress, _o.sourcePort, _o.destinationIPAddress, _o.destinationPort, _o.nextLayerProtocol, _o.iPv6flowLabel, _o.direction, _o.pDSRSummaryTrigger, _o.firstPacketTimestamp, _o.lastPacketTimestamp, _o.packetCount, _o.byteCount, _o.useSessionTrigger);
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
    new $.ComponentSpec("useSessionTrigger", false, $.hasTag(_TagClass.context, 14))
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
    let useSessionTrigger!: BOOLEAN;
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
        undefined,
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
        useSessionTrigger
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_IPAddress, $.BER)(value.sourceIPAddress, $.BER),
            /* IF_ABSENT  */ ((value.sourcePort === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_PortNumber, $.BER)(value.sourcePort, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_IPAddress, $.BER)(value.destinationIPAddress, $.BER),
            /* IF_ABSENT  */ ((value.destinationPort === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_PortNumber, $.BER)(value.destinationPort, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_NextLayerProtocol, $.BER)(value.nextLayerProtocol, $.BER),
            /* IF_ABSENT  */ ((value.iPv6flowLabel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_IPv6FlowLabel, $.BER)(value.iPv6flowLabel, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_Direction, $.BER)(value.direction, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_PDSRSummaryTrigger, $.BER)(value.pDSRSummaryTrigger, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => _encode_Timestamp, $.BER)(value.firstPacketTimestamp, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => _encode_Timestamp, $.BER)(value.lastPacketTimestamp, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER)(value.packetCount, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.byteCount, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => $._encodeBoolean, $.BER)(value.useSessionTrigger, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PDSummaryReport(value, elGetter);
}


/* eslint-enable */
