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
 * @summary RejectPDU_rejectReason_confirmed_requestPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectPDU-rejectReason-confirmed-requestPDU ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type RejectPDU_rejectReason_confirmed_requestPDU = INTEGER;

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_other
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_other: RejectPDU_rejectReason_confirmed_requestPDU = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_other
 * @constant
 * @type {number}
 */
export
const other: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_service
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_service: RejectPDU_rejectReason_confirmed_requestPDU = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_service
 * @constant
 * @type {number}
 */
export
const unrecognized_service: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_service; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_modifier
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_modifier: RejectPDU_rejectReason_confirmed_requestPDU = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_modifier
 * @constant
 * @type {number}
 */
export
const unrecognized_modifier: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_modifier; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_invalid_invokeID
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_invalid_invokeID: RejectPDU_rejectReason_confirmed_requestPDU = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_invalid_invokeID
 * @constant
 * @type {number}
 */
export
const invalid_invokeID: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_invalid_invokeID; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_invalid_argument
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_invalid_argument: RejectPDU_rejectReason_confirmed_requestPDU = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_invalid_argument
 * @constant
 * @type {number}
 */
export
const invalid_argument: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_invalid_argument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_invalid_modifier
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_invalid_modifier: RejectPDU_rejectReason_confirmed_requestPDU = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_invalid_modifier
 * @constant
 * @type {number}
 */
export
const invalid_modifier: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_invalid_modifier; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_max_serv_outstanding_exceeded
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_max_serv_outstanding_exceeded: RejectPDU_rejectReason_confirmed_requestPDU = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_max_serv_outstanding_exceeded
 * @constant
 * @type {number}
 */
export
const max_serv_outstanding_exceeded: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_max_serv_outstanding_exceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_max_recursion_exceeded
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_max_recursion_exceeded: RejectPDU_rejectReason_confirmed_requestPDU = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_max_recursion_exceeded
 * @constant
 * @type {number}
 */
export
const max_recursion_exceeded: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_max_recursion_exceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_value_out_of_range
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_value_out_of_range: RejectPDU_rejectReason_confirmed_requestPDU = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_value_out_of_range
 * @constant
 * @type {number}
 */
export
const value_out_of_range: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_value_out_of_range; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_RejectPDU_rejectReason_confirmed_requestPDU: $.ASN1Decoder<RejectPDU_rejectReason_confirmed_requestPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RejectPDU_rejectReason_confirmed_requestPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RejectPDU_rejectReason_confirmed_requestPDU (el: _Element): RejectPDU_rejectReason_confirmed_requestPDU {
    if (!_cached_decoder_for_RejectPDU_rejectReason_confirmed_requestPDU) { _cached_decoder_for_RejectPDU_rejectReason_confirmed_requestPDU = $._decodeInteger; }
    return _cached_decoder_for_RejectPDU_rejectReason_confirmed_requestPDU(el);
}

let _cached_encoder_for_RejectPDU_rejectReason_confirmed_requestPDU: $.ASN1Encoder<RejectPDU_rejectReason_confirmed_requestPDU> | null = null;

/**
 * @summary Encodes a(n) RejectPDU_rejectReason_confirmed_requestPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RejectPDU_rejectReason_confirmed_requestPDU, encoded as an ASN.1 Element.
 */
export
function _encode_RejectPDU_rejectReason_confirmed_requestPDU (value: RejectPDU_rejectReason_confirmed_requestPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RejectPDU_rejectReason_confirmed_requestPDU) { _cached_encoder_for_RejectPDU_rejectReason_confirmed_requestPDU = $._encodeInteger; }
    return _cached_encoder_for_RejectPDU_rejectReason_confirmed_requestPDU(value, elGetter);
}


/* eslint-enable */
