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



/**
 * @summary IPv4Information
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPv4Information ::= SEQUENCE
 * {
 *     headerLength            [0] OCTET STRING OPTIONAL,
 *     typeOfService           [1] OCTET STRING OPTIONAL,
 *     totalLength             [2] OCTET STRING (SIZE (2))OPTIONAL,
 *     identification          [3] OCTET STRING (SIZE (2))OPTIONAL,
 *     fragment                [4] OCTET STRING (SIZE (2))OPTIONAL,
 *     ttl                     [5] OCTET STRING OPTIONAL,
 *     protocol                [6] OCTET STRING OPTIONAL,
 *     headerChecksum          [7] OCTET STRING (SIZE (2))OPTIONAL,
 *     source                  [8] OCTET STRING (SIZE (4)),
 *     destination             [9] OCTET STRING (SIZE (4)),
 *     options                 [10] OCTET STRING (SIZE (0..40))OPTIONAL
 * }
 * 
 * IPv6Information ::= SEQUENCE
 * {
 *     trafficClass            [0] OCTET STRING OPTIONAL,
 *     flowLabel               [1] OCTET STRING (SIZE (20))OPTIONAL,
 *     payloadLength           [2] OCTET STRING (SIZE (4))OPTIONAL,
 *     nextHeader              [3] OCTET STRING OPTIONAL,
 *     hopLimit                [4] OCTET STRING OPTIONAL,
 *     source                  [5] OCTET STRING (SIZE (16)),
 *     destination             [6] OCTET STRING (SIZE (16))
 * }
 * 
 * TCPInformation ::= SEQUENCE
 * {
 *     sourcePort          [0] OCTET STRING (SIZE (2))OPTIONAL,
 *     destinationPort     [1] OCTET STRING (SIZE (2))OPTIONAL,
 *     sequenceNumber      [2] OCTET STRING (SIZE (4))OPTIONAL,
 *     ackNumber           [3] OCTET STRING (SIZE (4))OPTIONAL,
 *     dataOffset          [4] BIT STRING (SIZE (4))OPTIONAL,
 *         -- First 4 bits
 *     controlBits         [5] BIT STRING (SIZE (6))OPTIONAL,
 *         -- Last 6 bits
 *     windowSize          [6] OCTET STRING (SIZE (2))OPTIONAL,
 *     checkSum            [7] OCTET STRING (SIZE (2))OPTIONAL,
 *     urgentPointer       [8] OCTET STRING (SIZE (2))OPTIONAL,
 *     options             [9] OCTET STRING (SIZE (0..40))OPTIONAL
 * }
 * 
 * UDPInformation ::= SEQUENCE
 * {
 *     sourcePort          [0] OCTET STRING (SIZE (2))OPTIONAL,
 *     destinationPort     [1] OCTET STRING (SIZE (2))OPTIONAL,
 *     length              [2] OCTET STRING (SIZE (2))OPTIONAL,
 *     checkSum            [3] OCTET STRING (SIZE (2))OPTIONAL
 * }
 * 
 * PDSRInformation::= SEQUENCE
 * {
 *     summaryTrigger          [0] PDSRSummaryTriggerIPaccess,
 *     firstPacketTimestamp    [1] GeneralizedTime,
 *     lastPacketTimestamp     [2] GeneralizedTime,
 *     packetCount             [3] INTEGER,
 *     byteCount               [4] INTEGER,
 *     ...
 * }
 * 
 * PDSRSummaryTriggerIPaccess ::= ENUMERATED
 * {
 *     startOfFlow(0),
 *     timerExpiry(1),
 *     packetCount(2),
 *     byteCount(3),
 *     endOfFlow(4),
 *     ...
 * }
 * 
 * -- ===================================================
 * -- Intercept-related information for IP Packet Reports
 * -- ===================================================
 * 
 * IPIRIPacketReport ::= SEQUENCE
 * {
 *     iPIRIPacketReportObjId [0] RELATIVE-OID,
 *     report                 [1] PacketReport,
 *     ...
 * }
 * 
 * PacketReport ::= CHOICE
 * {
 *     header  [1] PacketReportHeader,
 *     summary [2] PacketReportSummary,
 *     ...
 * }
 * 
 * PacketReportHeader ::= SEQUENCE
 * {
 *     header [1] OCTET STRING,
 *     ...
 * }
 * 
 * PacketReportSummary ::= SEQUENCE
 * {
 *     header         [1] OCTET STRING,
 *     indications    [2] PacketReportIndications,
 *     trigger        [3] PacketReportTrigger,
 *     packetCount    [4] INTEGER OPTIONAL,
 *     byteCount      [5] INTEGER OPTIONAL,
 *     firstTimestamp [6] GeneralizedTime OPTIONAL,
 *     lastTimestamp  [7] GeneralizedTime OPTIONAL,
 *     ...
 * }
 * 
 * PacketReportTrigger ::= ENUMERATED
 * {
 *     flowStart(1),
 *     flowEnd(2),
 *     flowTimeout(3),
 *     flowTimerExpiration(4),
 *     flowPacketCount(5),
 *     flowByteCount(6),
 *     sessionTimerExpiration(7),
 *     sessionPacketCount(8),
 *     sessionByteCount(9),
 *     reportEnd(10),
 *     ...
 * }
 * 
 * PacketReportIndications ::= BIT STRING
 * {
 *     zeroedIPv4TotalLength(0),
 *     zeroedIPv4Flags(1),
 *     zeroedIPv4TimeToLive(2),
 *     zeroedIPv4HeaderChecksum(3),
 *     zeroedIPv6PayloadLength(4),
 *     removedIPv6ExtensionHeaders(5),
 *     zeroedTCPSequenceNumber(6),
 *     zeroedTCPAcknowledgementNumber(7),
 *     zeroedTCPFlags(8),
 *     zeroedTCPWindowSize(9),
 *     zeroedTCPChecksum(10),
 *     zeroedUDPLength(11),
 *     zeroedUDPChecksum(12)
 * }
 * 
 * END -- end of IPAccessPDU
 * ```
 * 
 * @class
 */
export
class IPv4Information {
    constructor (
        /**
         * @summary `headerLength`.
         * @public
         * @readonly
         */
        readonly headerLength: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `typeOfService`.
         * @public
         * @readonly
         */
        readonly typeOfService: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `totalLength`.
         * @public
         * @readonly
         */
        readonly totalLength: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a IPv4Information
     * @description
     * 
     * This takes an `object` and converts it to a `IPv4Information`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPv4Information`.
     * @returns {IPv4Information}
     */
    public static _from_object (_o: { [_K in keyof (IPv4Information)]: (IPv4Information)[_K] }): IPv4Information {
        return new IPv4Information(_o.headerLength, _o.typeOfService, _o.totalLength);
    }


}

/**
 * @summary The Leading Root Component Types of IPv4Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPv4Information: $.ComponentSpec[] = [
    new $.ComponentSpec("headerLength", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("typeOfService", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("totalLength", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IPv4Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPv4Information: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPv4Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPv4Information: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IPv4Information: $.ASN1Decoder<IPv4Information> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPv4Information
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPv4Information (el: _Element): IPv4Information {
    if (!_cached_decoder_for_IPv4Information) { _cached_decoder_for_IPv4Information = function (el: _Element): IPv4Information {
    let headerLength: OPTIONAL<OCTET_STRING>;
    let typeOfService: OPTIONAL<OCTET_STRING>;
    let totalLength!: OCTET_STRING;
    const callbacks: $.DecodingMap = {
        "headerLength": (_el: _Element): void => { headerLength = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "typeOfService": (_el: _Element): void => { typeOfService = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "totalLength": (_el: _Element): void => { totalLength = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IPv4Information,
        _extension_additions_list_spec_for_IPv4Information,
        _root_component_type_list_2_spec_for_IPv4Information,
        undefined,
    );
    return new IPv4Information(
        headerLength,
        typeOfService,
        totalLength
    );
}; }
    return _cached_decoder_for_IPv4Information(el);
}

let _cached_encoder_for_IPv4Information: $.ASN1Encoder<IPv4Information> | null = null;

/**
 * @summary Encodes a(n) IPv4Information into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPv4Information, encoded as an ASN.1 Element.
 */
export
function _encode_IPv4Information (value: IPv4Information, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPv4Information) { _cached_encoder_for_IPv4Information = function (value: IPv4Information, elGetter: $.ASN1Encoder<IPv4Information>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.headerLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.headerLength, $.BER)),
            /* IF_ABSENT  */ ((value.typeOfService === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.typeOfService, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.totalLength, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IPv4Information(value, elGetter);
}


/* eslint-enable */
