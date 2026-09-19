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
 * @summary Association_result
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Association-result  ::=  INTEGER
 *      {
 *      accepted (0),
 *      rejected-permanent (1),
 *      rejected-transient (2)
 *      }
 * ```
 */
export
type Association_result = INTEGER;

/**
 * @summary Association_result_accepted
 * @constant
 * @type {number}
 */
export
const Association_result_accepted: Association_result = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Association_result_accepted
 * @constant
 * @type {number}
 */
export
const accepted: Association_result = Association_result_accepted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Association_result_rejected_permanent
 * @constant
 * @type {number}
 */
export
const Association_result_rejected_permanent: Association_result = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Association_result_rejected_permanent
 * @constant
 * @type {number}
 */
export
const rejected_permanent: Association_result = Association_result_rejected_permanent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Association_result_rejected_transient
 * @constant
 * @type {number}
 */
export
const Association_result_rejected_transient: Association_result = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Association_result_rejected_transient
 * @constant
 * @type {number}
 */
export
const rejected_transient: Association_result = Association_result_rejected_transient; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_Association_result: $.ASN1Decoder<Association_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Association_result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Association_result (el: _Element): Association_result {
    if (!_cached_decoder_for_Association_result) { _cached_decoder_for_Association_result = $._decodeInteger; }
    return _cached_decoder_for_Association_result(el);
}

let _cached_encoder_for_Association_result: $.ASN1Encoder<Association_result> | null = null;

/**
 * @summary Encodes a(n) Association_result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Association_result, encoded as an ASN.1 Element.
 */
export
function _encode_Association_result (value: Association_result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Association_result) { _cached_encoder_for_Association_result = $._encodeInteger; }
    return _cached_encoder_for_Association_result(value, elGetter);
}


/* eslint-enable */
