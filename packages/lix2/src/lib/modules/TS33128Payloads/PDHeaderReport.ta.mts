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


/**
 * @summary PDHeaderReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDHeaderReport ::= SEQUENCE
 * {
 *     pDUSessionID                [1] PDUSessionID,
 *     sourceIPAddress             [2] IPAddress,
 *     sourcePort                  [3] PortNumber OPTIONAL,
 *     destinationIPAddress        [4] IPAddress,
 *     destinationPort             [5] PortNumber OPTIONAL,
 *     nextLayerProtocol           [6] NextLayerProtocol,
 *     iPv6flowLabel               [7] IPv6FlowLabel OPTIONAL,
 *     direction                   [8] Direction,
 *     packetSize                  [9] INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class PDHeaderReport {
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
         * @summary `packetSize`.
         * @public
         * @readonly
         */
        readonly packetSize: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a PDHeaderReport
     * @description
     * 
     * This takes an `object` and converts it to a `PDHeaderReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDHeaderReport`.
     * @returns {PDHeaderReport}
     */
    public static _from_object (_o: { [_K in keyof (PDHeaderReport)]: (PDHeaderReport)[_K] }): PDHeaderReport {
        return new PDHeaderReport(_o.pDUSessionID, _o.sourceIPAddress, _o.sourcePort, _o.destinationIPAddress, _o.destinationPort, _o.nextLayerProtocol, _o.iPv6flowLabel, _o.direction, _o.packetSize);
    }

        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_Direction;
}

/**
 * @summary The Leading Root Component Types of PDHeaderReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PDHeaderReport: $.ComponentSpec[] = [
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sourceIPAddress", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sourcePort", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("destinationIPAddress", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("destinationPort", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("nextLayerProtocol", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("iPv6flowLabel", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("packetSize", false, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of PDHeaderReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PDHeaderReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PDHeaderReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PDHeaderReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PDHeaderReport: $.ASN1Decoder<PDHeaderReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDHeaderReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDHeaderReport (el: _Element): PDHeaderReport {
    if (!_cached_decoder_for_PDHeaderReport) { _cached_decoder_for_PDHeaderReport = function (el: _Element): PDHeaderReport {
    let pDUSessionID!: PDUSessionID;
    let sourceIPAddress!: IPAddress;
    let sourcePort: OPTIONAL<PortNumber>;
    let destinationIPAddress!: IPAddress;
    let destinationPort: OPTIONAL<PortNumber>;
    let nextLayerProtocol!: NextLayerProtocol;
    let iPv6flowLabel: OPTIONAL<IPv6FlowLabel>;
    let direction!: Direction;
    let packetSize!: INTEGER;
    const callbacks: $.DecodingMap = {
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "sourceIPAddress": (_el: _Element): void => { sourceIPAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "sourcePort": (_el: _Element): void => { sourcePort = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(_el); },
        "destinationIPAddress": (_el: _Element): void => { destinationIPAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "destinationPort": (_el: _Element): void => { destinationPort = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(_el); },
        "nextLayerProtocol": (_el: _Element): void => { nextLayerProtocol = $._decode_implicit<NextLayerProtocol>(() => _decode_NextLayerProtocol)(_el); },
        "iPv6flowLabel": (_el: _Element): void => { iPv6flowLabel = $._decode_implicit<IPv6FlowLabel>(() => _decode_IPv6FlowLabel)(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "packetSize": (_el: _Element): void => { packetSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PDHeaderReport,
        _extension_additions_list_spec_for_PDHeaderReport,
        _root_component_type_list_2_spec_for_PDHeaderReport,
        undefined,
    );
    return new PDHeaderReport(
        pDUSessionID,
        sourceIPAddress,
        sourcePort,
        destinationIPAddress,
        destinationPort,
        nextLayerProtocol,
        iPv6flowLabel,
        direction,
        packetSize
    );
}; }
    return _cached_decoder_for_PDHeaderReport(el);
}

let _cached_encoder_for_PDHeaderReport: $.ASN1Encoder<PDHeaderReport> | null = null;

/**
 * @summary Encodes a(n) PDHeaderReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDHeaderReport, encoded as an ASN.1 Element.
 */
export
function _encode_PDHeaderReport (value: PDHeaderReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDHeaderReport) { _cached_encoder_for_PDHeaderReport = function (value: PDHeaderReport, elGetter: $.ASN1Encoder<PDHeaderReport>): _Element {
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
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.packetSize, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PDHeaderReport(value, elGetter);
}


/* eslint-enable */
