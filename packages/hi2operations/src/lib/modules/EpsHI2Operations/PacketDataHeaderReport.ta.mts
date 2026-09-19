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
import { PacketDataHeaderMapped, _decode_PacketDataHeaderMapped, _encode_PacketDataHeaderMapped } from "../EpsHI2Operations/PacketDataHeaderMapped.ta.mjs";
// export { PacketDataHeaderMapped, _decode_PacketDataHeaderMapped, _encode_PacketDataHeaderMapped } from "../EpsHI2Operations/PacketDataHeaderMapped.ta.mjs";
import { PacketDataHeaderCopy, _decode_PacketDataHeaderCopy, _encode_PacketDataHeaderCopy } from "../EpsHI2Operations/PacketDataHeaderCopy.ta.mjs";
// export { PacketDataHeaderCopy, _decode_PacketDataHeaderCopy, _encode_PacketDataHeaderCopy } from "../EpsHI2Operations/PacketDataHeaderCopy.ta.mjs";


/**
 * @summary PacketDataHeaderReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PacketDataHeaderReport  ::=  CHOICE
 * {
 *  packetDataHeaderMapped [1] PacketDataHeaderMapped,
 *  packetDataHeaderCopy [2] PacketDataHeaderCopy,
 * ...
 * }
 * ```
 */
export
type PacketDataHeaderReport =
    { packetDataHeaderMapped: PacketDataHeaderMapped } /* CHOICE_ALT_ROOT */
    | { packetDataHeaderCopy: PacketDataHeaderCopy } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_PacketDataHeaderReport: $.ASN1Decoder<PacketDataHeaderReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PacketDataHeaderReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PacketDataHeaderReport (el: _Element): PacketDataHeaderReport {
    if (!_cached_decoder_for_PacketDataHeaderReport) { _cached_decoder_for_PacketDataHeaderReport = $._decode_extensible_choice<PacketDataHeaderReport>({
    "CONTEXT 1": [ "packetDataHeaderMapped", $._decode_implicit<PacketDataHeaderMapped>(() => _decode_PacketDataHeaderMapped) ],
    "CONTEXT 2": [ "packetDataHeaderCopy", $._decode_implicit<PacketDataHeaderCopy>(() => _decode_PacketDataHeaderCopy) ]
}); }
    return _cached_decoder_for_PacketDataHeaderReport(el);
}

let _cached_encoder_for_PacketDataHeaderReport: $.ASN1Encoder<PacketDataHeaderReport> | null = null;

/**
 * @summary Encodes a(n) PacketDataHeaderReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PacketDataHeaderReport, encoded as an ASN.1 Element.
 */
export
function _encode_PacketDataHeaderReport (value: PacketDataHeaderReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PacketDataHeaderReport) { _cached_encoder_for_PacketDataHeaderReport = $._encode_choice<PacketDataHeaderReport>({
    "packetDataHeaderMapped": $._encode_implicit(_TagClass.context, 1, () => _encode_PacketDataHeaderMapped, $.BER),
    "packetDataHeaderCopy": $._encode_implicit(_TagClass.context, 2, () => _encode_PacketDataHeaderCopy, $.BER),
}, $.BER); }
    return _cached_encoder_for_PacketDataHeaderReport(value, elGetter);
}


/* eslint-enable */
