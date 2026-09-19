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
 * @summary SessionDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionDirection  ::=  ENUMERATED
 * {
 *     fromTarget(1),
 *     toTarget(2),
 *     combined(3),
 *     indeterminate(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SessionDirection {
    fromTarget = 1,
    toTarget = 2,
    combined = 3,
    indeterminate = 4,
}

/**
 * @summary SessionDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionDirection  ::=  ENUMERATED
 * {
 *     fromTarget(1),
 *     toTarget(2),
 *     combined(3),
 *     indeterminate(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SessionDirection = _enum_for_SessionDirection;

/**
 * @summary SessionDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionDirection  ::=  ENUMERATED
 * {
 *     fromTarget(1),
 *     toTarget(2),
 *     combined(3),
 *     indeterminate(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SessionDirection = _enum_for_SessionDirection;

/**
 * @summary SessionDirection_fromTarget
 * @constant
 * @type {number}
 */
export
const SessionDirection_fromTarget: SessionDirection = SessionDirection.fromTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @constant
 * @type {number}
 */
export
const fromTarget: SessionDirection = SessionDirection.fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SessionDirection_toTarget
 * @constant
 * @type {number}
 */
export
const SessionDirection_toTarget: SessionDirection = SessionDirection.toTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @constant
 * @type {number}
 */
export
const toTarget: SessionDirection = SessionDirection.toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SessionDirection_combined
 * @constant
 * @type {number}
 */
export
const SessionDirection_combined: SessionDirection = SessionDirection.combined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary combined
 * @constant
 * @type {number}
 */
export
const combined: SessionDirection = SessionDirection.combined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SessionDirection_indeterminate
 * @constant
 * @type {number}
 */
export
const SessionDirection_indeterminate: SessionDirection = SessionDirection.indeterminate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary indeterminate
 * @constant
 * @type {number}
 */
export
const indeterminate: SessionDirection = SessionDirection.indeterminate; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SessionDirection: $.ASN1Decoder<SessionDirection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SessionDirection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SessionDirection (el: _Element): SessionDirection {
    if (!_cached_decoder_for_SessionDirection) { _cached_decoder_for_SessionDirection = $._decodeEnumerated; }
    return _cached_decoder_for_SessionDirection(el);
}

let _cached_encoder_for_SessionDirection: $.ASN1Encoder<SessionDirection> | null = null;

/**
 * @summary Encodes a(n) SessionDirection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SessionDirection, encoded as an ASN.1 Element.
 */
export
function _encode_SessionDirection (value: SessionDirection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SessionDirection) { _cached_encoder_for_SessionDirection = $._encodeEnumerated; }
    return _cached_encoder_for_SessionDirection(value, elGetter);
}


/* eslint-enable */
