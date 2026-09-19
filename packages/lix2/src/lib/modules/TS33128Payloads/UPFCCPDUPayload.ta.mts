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
 * @summary UPFCCPDUPayload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UPFCCPDUPayload  ::=  CHOICE
 * {
 *     uPFIPCC           [1] OCTET STRING,
 *     uPFEthernetCC     [2] OCTET STRING,
 *     uPFUnstructuredCC [3] OCTET STRING
 * }
 * ```
 */
export
type UPFCCPDUPayload =
    { uPFIPCC: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { uPFEthernetCC: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { uPFUnstructuredCC: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UPFCCPDUPayload: $.ASN1Decoder<UPFCCPDUPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UPFCCPDUPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UPFCCPDUPayload (el: _Element): UPFCCPDUPayload {
    if (!_cached_decoder_for_UPFCCPDUPayload) { _cached_decoder_for_UPFCCPDUPayload = $._decode_inextensible_choice<UPFCCPDUPayload>({
    "CONTEXT 1": [ "uPFIPCC", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "uPFEthernetCC", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 3": [ "uPFUnstructuredCC", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_UPFCCPDUPayload(el);
}

let _cached_encoder_for_UPFCCPDUPayload: $.ASN1Encoder<UPFCCPDUPayload> | null = null;

/**
 * @summary Encodes a(n) UPFCCPDUPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UPFCCPDUPayload, encoded as an ASN.1 Element.
 */
export
function _encode_UPFCCPDUPayload (value: UPFCCPDUPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UPFCCPDUPayload) { _cached_encoder_for_UPFCCPDUPayload = $._encode_choice<UPFCCPDUPayload>({
    "uPFIPCC": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "uPFEthernetCC": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
    "uPFUnstructuredCC": $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_UPFCCPDUPayload(value, elGetter);
}


/* eslint-enable */
