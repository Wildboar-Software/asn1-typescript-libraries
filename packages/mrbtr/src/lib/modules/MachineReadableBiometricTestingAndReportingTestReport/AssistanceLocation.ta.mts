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
 * @summary AssistanceLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssistanceLocation  ::=  ENUMERATED {
 *     separate-from-transaction       (1),
 *     interactively-with-transaction  (2),
 *     after-failure                   (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AssistanceLocation {
    separate_from_transaction = 1,
    interactively_with_transaction = 2,
    after_failure = 3,
}

/**
 * @summary AssistanceLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssistanceLocation  ::=  ENUMERATED {
 *     separate-from-transaction       (1),
 *     interactively-with-transaction  (2),
 *     after-failure                   (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AssistanceLocation = _enum_for_AssistanceLocation;

/**
 * @summary AssistanceLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssistanceLocation  ::=  ENUMERATED {
 *     separate-from-transaction       (1),
 *     interactively-with-transaction  (2),
 *     after-failure                   (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AssistanceLocation = _enum_for_AssistanceLocation;

/**
 * @summary AssistanceLocation_separate_from_transaction
 * @constant
 * @type {number}
 */
export
const AssistanceLocation_separate_from_transaction: AssistanceLocation = AssistanceLocation.separate_from_transaction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary separate_from_transaction
 * @constant
 * @type {number}
 */
export
const separate_from_transaction: AssistanceLocation = AssistanceLocation.separate_from_transaction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AssistanceLocation_interactively_with_transaction
 * @constant
 * @type {number}
 */
export
const AssistanceLocation_interactively_with_transaction: AssistanceLocation = AssistanceLocation.interactively_with_transaction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interactively_with_transaction
 * @constant
 * @type {number}
 */
export
const interactively_with_transaction: AssistanceLocation = AssistanceLocation.interactively_with_transaction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AssistanceLocation_after_failure
 * @constant
 * @type {number}
 */
export
const AssistanceLocation_after_failure: AssistanceLocation = AssistanceLocation.after_failure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary after_failure
 * @constant
 * @type {number}
 */
export
const after_failure: AssistanceLocation = AssistanceLocation.after_failure; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AssistanceLocation: $.ASN1Decoder<AssistanceLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssistanceLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AssistanceLocation (el: _Element): AssistanceLocation {
    if (!_cached_decoder_for_AssistanceLocation) { _cached_decoder_for_AssistanceLocation = $._decodeEnumerated; }
    return _cached_decoder_for_AssistanceLocation(el);
}

let _cached_encoder_for_AssistanceLocation: $.ASN1Encoder<AssistanceLocation> | null = null;

/**
 * @summary Encodes a(n) AssistanceLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssistanceLocation, encoded as an ASN.1 Element.
 */
export
function _encode_AssistanceLocation (value: AssistanceLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AssistanceLocation) { _cached_encoder_for_AssistanceLocation = $._encodeEnumerated; }
    return _cached_encoder_for_AssistanceLocation(value, elGetter);
}


/* eslint-enable */
