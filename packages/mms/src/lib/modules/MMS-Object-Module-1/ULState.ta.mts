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
 * @summary ULState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ULState  ::=  INTEGER {
 *     non-existent                  (0),
 *     uploading                     (1),
 *     uploaded                      (2),
 *     u1                            (3),
 *     u2                            (4),
 *     u3                            (5),
 *     u4                            (6)
 * } (0..6)
 * ```
 */
export
type ULState = INTEGER;

/**
 * @summary ULState_non_existent
 * @constant
 * @type {number}
 */
export
const ULState_non_existent: ULState = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_non_existent
 * @constant
 * @type {number}
 */
export
const non_existent: ULState = ULState_non_existent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_uploading
 * @constant
 * @type {number}
 */
export
const ULState_uploading: ULState = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_uploading
 * @constant
 * @type {number}
 */
export
const uploading: ULState = ULState_uploading; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_uploaded
 * @constant
 * @type {number}
 */
export
const ULState_uploaded: ULState = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_uploaded
 * @constant
 * @type {number}
 */
export
const uploaded: ULState = ULState_uploaded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_u1
 * @constant
 * @type {number}
 */
export
const ULState_u1: ULState = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_u1
 * @constant
 * @type {number}
 */
export
const u1: ULState = ULState_u1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_u2
 * @constant
 * @type {number}
 */
export
const ULState_u2: ULState = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_u2
 * @constant
 * @type {number}
 */
export
const u2: ULState = ULState_u2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_u3
 * @constant
 * @type {number}
 */
export
const ULState_u3: ULState = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_u3
 * @constant
 * @type {number}
 */
export
const u3: ULState = ULState_u3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_u4
 * @constant
 * @type {number}
 */
export
const ULState_u4: ULState = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_u4
 * @constant
 * @type {number}
 */
export
const u4: ULState = ULState_u4; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ULState: $.ASN1Decoder<ULState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ULState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ULState (el: _Element): ULState {
    if (!_cached_decoder_for_ULState) { _cached_decoder_for_ULState = $._decodeInteger; }
    return _cached_decoder_for_ULState(el);
}

let _cached_encoder_for_ULState: $.ASN1Encoder<ULState> | null = null;

/**
 * @summary Encodes a(n) ULState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ULState, encoded as an ASN.1 Element.
 */
export
function _encode_ULState (value: ULState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ULState) { _cached_encoder_for_ULState = $._encodeInteger; }
    return _cached_encoder_for_ULState(value, elGetter);
}


/* eslint-enable */
