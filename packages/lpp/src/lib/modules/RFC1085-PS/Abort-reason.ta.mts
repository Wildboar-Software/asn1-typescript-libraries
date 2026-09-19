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
 * @summary Abort_reason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Abort-reason  ::=  INTEGER {
 *     unspecified                 (0),
 *     unrecognized-ppdu           (1),
 *     unexpected-ppdu             (2),
 *     unrecognized-ppdu-parameter (4),
 *     invalid-ppdu-parameter      (5),
 *     reference-mismatch          (9)
 * }
 * ```
 */
export
type Abort_reason = INTEGER;

/**
 * @summary Abort_reason_unspecified
 * @constant
 * @type {number}
 */
export
const Abort_reason_unspecified: Abort_reason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_unspecified
 * @constant
 * @type {number}
 */
export
const unspecified: Abort_reason = Abort_reason_unspecified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_unrecognized_ppdu
 * @constant
 * @type {number}
 */
export
const Abort_reason_unrecognized_ppdu: Abort_reason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_unrecognized_ppdu
 * @constant
 * @type {number}
 */
export
const unrecognized_ppdu: Abort_reason = Abort_reason_unrecognized_ppdu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_unexpected_ppdu
 * @constant
 * @type {number}
 */
export
const Abort_reason_unexpected_ppdu: Abort_reason = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_unexpected_ppdu
 * @constant
 * @type {number}
 */
export
const unexpected_ppdu: Abort_reason = Abort_reason_unexpected_ppdu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_unrecognized_ppdu_parameter
 * @constant
 * @type {number}
 */
export
const Abort_reason_unrecognized_ppdu_parameter: Abort_reason = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_unrecognized_ppdu_parameter
 * @constant
 * @type {number}
 */
export
const unrecognized_ppdu_parameter: Abort_reason = Abort_reason_unrecognized_ppdu_parameter; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_invalid_ppdu_parameter
 * @constant
 * @type {number}
 */
export
const Abort_reason_invalid_ppdu_parameter: Abort_reason = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_invalid_ppdu_parameter
 * @constant
 * @type {number}
 */
export
const invalid_ppdu_parameter: Abort_reason = Abort_reason_invalid_ppdu_parameter; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_reference_mismatch
 * @constant
 * @type {number}
 */
export
const Abort_reason_reference_mismatch: Abort_reason = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Abort_reason_reference_mismatch
 * @constant
 * @type {number}
 */
export
const reference_mismatch: Abort_reason = Abort_reason_reference_mismatch; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_Abort_reason: $.ASN1Decoder<Abort_reason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Abort_reason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Abort_reason (el: _Element): Abort_reason {
    if (!_cached_decoder_for_Abort_reason) { _cached_decoder_for_Abort_reason = $._decodeInteger; }
    return _cached_decoder_for_Abort_reason(el);
}

let _cached_encoder_for_Abort_reason: $.ASN1Encoder<Abort_reason> | null = null;

/**
 * @summary Encodes a(n) Abort_reason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Abort_reason, encoded as an ASN.1 Element.
 */
export
function _encode_Abort_reason (value: Abort_reason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Abort_reason) { _cached_encoder_for_Abort_reason = $._encodeInteger; }
    return _cached_encoder_for_Abort_reason(value, elGetter);
}


/* eslint-enable */
