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
 * @summary RejectPDU_rejectReason_confirmed_errorPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectPDU-rejectReason-confirmed-errorPDU ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type RejectPDU_rejectReason_confirmed_errorPDU = INTEGER;

/**
 * @summary RejectPDU_rejectReason_confirmed_errorPDU_other
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_errorPDU_other: RejectPDU_rejectReason_confirmed_errorPDU = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_errorPDU_other
 * @constant
 * @type {number}
 */
export
const other: RejectPDU_rejectReason_confirmed_errorPDU = RejectPDU_rejectReason_confirmed_errorPDU_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_errorPDU_unrecognized_service
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_errorPDU_unrecognized_service: RejectPDU_rejectReason_confirmed_errorPDU = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_errorPDU_unrecognized_service
 * @constant
 * @type {number}
 */
export
const unrecognized_service: RejectPDU_rejectReason_confirmed_errorPDU = RejectPDU_rejectReason_confirmed_errorPDU_unrecognized_service; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_errorPDU_invalid_invokeID
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_errorPDU_invalid_invokeID: RejectPDU_rejectReason_confirmed_errorPDU = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_errorPDU_invalid_invokeID
 * @constant
 * @type {number}
 */
export
const invalid_invokeID: RejectPDU_rejectReason_confirmed_errorPDU = RejectPDU_rejectReason_confirmed_errorPDU_invalid_invokeID; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_errorPDU_invalid_serviceError
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_errorPDU_invalid_serviceError: RejectPDU_rejectReason_confirmed_errorPDU = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_errorPDU_invalid_serviceError
 * @constant
 * @type {number}
 */
export
const invalid_serviceError: RejectPDU_rejectReason_confirmed_errorPDU = RejectPDU_rejectReason_confirmed_errorPDU_invalid_serviceError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_errorPDU_value_out_of_range
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_errorPDU_value_out_of_range: RejectPDU_rejectReason_confirmed_errorPDU = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_errorPDU_value_out_of_range
 * @constant
 * @type {number}
 */
export
const value_out_of_range: RejectPDU_rejectReason_confirmed_errorPDU = RejectPDU_rejectReason_confirmed_errorPDU_value_out_of_range; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_RejectPDU_rejectReason_confirmed_errorPDU: $.ASN1Decoder<RejectPDU_rejectReason_confirmed_errorPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RejectPDU_rejectReason_confirmed_errorPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RejectPDU_rejectReason_confirmed_errorPDU (el: _Element): RejectPDU_rejectReason_confirmed_errorPDU {
    if (!_cached_decoder_for_RejectPDU_rejectReason_confirmed_errorPDU) { _cached_decoder_for_RejectPDU_rejectReason_confirmed_errorPDU = $._decodeInteger; }
    return _cached_decoder_for_RejectPDU_rejectReason_confirmed_errorPDU(el);
}

let _cached_encoder_for_RejectPDU_rejectReason_confirmed_errorPDU: $.ASN1Encoder<RejectPDU_rejectReason_confirmed_errorPDU> | null = null;

/**
 * @summary Encodes a(n) RejectPDU_rejectReason_confirmed_errorPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RejectPDU_rejectReason_confirmed_errorPDU, encoded as an ASN.1 Element.
 */
export
function _encode_RejectPDU_rejectReason_confirmed_errorPDU (value: RejectPDU_rejectReason_confirmed_errorPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RejectPDU_rejectReason_confirmed_errorPDU) { _cached_encoder_for_RejectPDU_rejectReason_confirmed_errorPDU = $._encodeInteger; }
    return _cached_encoder_for_RejectPDU_rejectReason_confirmed_errorPDU(value, elGetter);
}


/* eslint-enable */
