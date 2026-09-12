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
 * @summary RejectPDU_rejectReason_pdu_error
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectPDU-rejectReason-pdu-error ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type RejectPDU_rejectReason_pdu_error = INTEGER;

/**
 * @summary RejectPDU_rejectReason_pdu_error_unknown_pdu_type
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_pdu_error_unknown_pdu_type: RejectPDU_rejectReason_pdu_error = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_pdu_error_unknown_pdu_type
 * @constant
 * @type {number}
 */
export
const unknown_pdu_type: RejectPDU_rejectReason_pdu_error = RejectPDU_rejectReason_pdu_error_unknown_pdu_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_pdu_error_invalid_pdu
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_pdu_error_invalid_pdu: RejectPDU_rejectReason_pdu_error = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_pdu_error_invalid_pdu
 * @constant
 * @type {number}
 */
export
const invalid_pdu: RejectPDU_rejectReason_pdu_error = RejectPDU_rejectReason_pdu_error_invalid_pdu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_pdu_error_illegal_acse_mapping
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_pdu_error_illegal_acse_mapping: RejectPDU_rejectReason_pdu_error = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_pdu_error_illegal_acse_mapping
 * @constant
 * @type {number}
 */
export
const illegal_acse_mapping: RejectPDU_rejectReason_pdu_error = RejectPDU_rejectReason_pdu_error_illegal_acse_mapping; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_RejectPDU_rejectReason_pdu_error: $.ASN1Decoder<RejectPDU_rejectReason_pdu_error> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RejectPDU_rejectReason_pdu_error
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RejectPDU_rejectReason_pdu_error (el: _Element): RejectPDU_rejectReason_pdu_error {
    if (!_cached_decoder_for_RejectPDU_rejectReason_pdu_error) { _cached_decoder_for_RejectPDU_rejectReason_pdu_error = $._decodeInteger; }
    return _cached_decoder_for_RejectPDU_rejectReason_pdu_error(el);
}

let _cached_encoder_for_RejectPDU_rejectReason_pdu_error: $.ASN1Encoder<RejectPDU_rejectReason_pdu_error> | null = null;

/**
 * @summary Encodes a(n) RejectPDU_rejectReason_pdu_error into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RejectPDU_rejectReason_pdu_error, encoded as an ASN.1 Element.
 */
export
function _encode_RejectPDU_rejectReason_pdu_error (value: RejectPDU_rejectReason_pdu_error, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RejectPDU_rejectReason_pdu_error) { _cached_encoder_for_RejectPDU_rejectReason_pdu_error = $._encodeInteger; }
    return _cached_encoder_for_RejectPDU_rejectReason_pdu_error(value, elGetter);
}


/* eslint-enable */
