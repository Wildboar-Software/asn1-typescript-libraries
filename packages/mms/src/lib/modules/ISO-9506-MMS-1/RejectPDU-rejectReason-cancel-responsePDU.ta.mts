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
 * @summary RejectPDU_rejectReason_cancel_responsePDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectPDU-rejectReason-cancel-responsePDU ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type RejectPDU_rejectReason_cancel_responsePDU = INTEGER;

/**
 * @summary RejectPDU_rejectReason_cancel_responsePDU_other
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_cancel_responsePDU_other: RejectPDU_rejectReason_cancel_responsePDU = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_cancel_responsePDU_other
 * @constant
 * @type {number}
 */
export
const other: RejectPDU_rejectReason_cancel_responsePDU = RejectPDU_rejectReason_cancel_responsePDU_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_cancel_responsePDU_invalid_invokeID
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_cancel_responsePDU_invalid_invokeID: RejectPDU_rejectReason_cancel_responsePDU = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_cancel_responsePDU_invalid_invokeID
 * @constant
 * @type {number}
 */
export
const invalid_invokeID: RejectPDU_rejectReason_cancel_responsePDU = RejectPDU_rejectReason_cancel_responsePDU_invalid_invokeID; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_RejectPDU_rejectReason_cancel_responsePDU: $.ASN1Decoder<RejectPDU_rejectReason_cancel_responsePDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RejectPDU_rejectReason_cancel_responsePDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RejectPDU_rejectReason_cancel_responsePDU (el: _Element): RejectPDU_rejectReason_cancel_responsePDU {
    if (!_cached_decoder_for_RejectPDU_rejectReason_cancel_responsePDU) { _cached_decoder_for_RejectPDU_rejectReason_cancel_responsePDU = $._decodeInteger; }
    return _cached_decoder_for_RejectPDU_rejectReason_cancel_responsePDU(el);
}

let _cached_encoder_for_RejectPDU_rejectReason_cancel_responsePDU: $.ASN1Encoder<RejectPDU_rejectReason_cancel_responsePDU> | null = null;

/**
 * @summary Encodes a(n) RejectPDU_rejectReason_cancel_responsePDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RejectPDU_rejectReason_cancel_responsePDU, encoded as an ASN.1 Element.
 */
export
function _encode_RejectPDU_rejectReason_cancel_responsePDU (value: RejectPDU_rejectReason_cancel_responsePDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RejectPDU_rejectReason_cancel_responsePDU) { _cached_encoder_for_RejectPDU_rejectReason_cancel_responsePDU = $._encodeInteger; }
    return _cached_encoder_for_RejectPDU_rejectReason_cancel_responsePDU(value, elGetter);
}


/* eslint-enable */
