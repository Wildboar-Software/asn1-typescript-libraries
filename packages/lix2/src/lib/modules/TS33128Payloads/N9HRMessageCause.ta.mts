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
 * @summary N9HRMessageCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * N9HRMessageCause  ::=  ENUMERATED
 * {
 *     pDUSessionEstablished(1),
 *     pDUSessionModified(2),
 *     pDUSessionReleased(3),
 *     updatedLocationAvailable(4),
 *     sMFChanged(5),
 *     other(6),
 *     hRLIEnabled(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_N9HRMessageCause {
    pDUSessionEstablished = 1,
    pDUSessionModified = 2,
    pDUSessionReleased = 3,
    updatedLocationAvailable = 4,
    sMFChanged = 5,
    other = 6,
    hRLIEnabled = 7,
}

/**
 * @summary N9HRMessageCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * N9HRMessageCause  ::=  ENUMERATED
 * {
 *     pDUSessionEstablished(1),
 *     pDUSessionModified(2),
 *     pDUSessionReleased(3),
 *     updatedLocationAvailable(4),
 *     sMFChanged(5),
 *     other(6),
 *     hRLIEnabled(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type N9HRMessageCause = _enum_for_N9HRMessageCause;

/**
 * @summary N9HRMessageCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * N9HRMessageCause  ::=  ENUMERATED
 * {
 *     pDUSessionEstablished(1),
 *     pDUSessionModified(2),
 *     pDUSessionReleased(3),
 *     updatedLocationAvailable(4),
 *     sMFChanged(5),
 *     other(6),
 *     hRLIEnabled(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const N9HRMessageCause = _enum_for_N9HRMessageCause;

/**
 * @summary N9HRMessageCause_pDUSessionEstablished
 * @constant
 * @type {number}
 */
export
const N9HRMessageCause_pDUSessionEstablished: N9HRMessageCause = N9HRMessageCause.pDUSessionEstablished; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionEstablished
 * @constant
 * @type {number}
 */
export
const pDUSessionEstablished: N9HRMessageCause = N9HRMessageCause.pDUSessionEstablished; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary N9HRMessageCause_pDUSessionModified
 * @constant
 * @type {number}
 */
export
const N9HRMessageCause_pDUSessionModified: N9HRMessageCause = N9HRMessageCause.pDUSessionModified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionModified
 * @constant
 * @type {number}
 */
export
const pDUSessionModified: N9HRMessageCause = N9HRMessageCause.pDUSessionModified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary N9HRMessageCause_pDUSessionReleased
 * @constant
 * @type {number}
 */
export
const N9HRMessageCause_pDUSessionReleased: N9HRMessageCause = N9HRMessageCause.pDUSessionReleased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionReleased
 * @constant
 * @type {number}
 */
export
const pDUSessionReleased: N9HRMessageCause = N9HRMessageCause.pDUSessionReleased; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary N9HRMessageCause_updatedLocationAvailable
 * @constant
 * @type {number}
 */
export
const N9HRMessageCause_updatedLocationAvailable: N9HRMessageCause = N9HRMessageCause.updatedLocationAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updatedLocationAvailable
 * @constant
 * @type {number}
 */
export
const updatedLocationAvailable: N9HRMessageCause = N9HRMessageCause.updatedLocationAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary N9HRMessageCause_sMFChanged
 * @constant
 * @type {number}
 */
export
const N9HRMessageCause_sMFChanged: N9HRMessageCause = N9HRMessageCause.sMFChanged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMFChanged
 * @constant
 * @type {number}
 */
export
const sMFChanged: N9HRMessageCause = N9HRMessageCause.sMFChanged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary N9HRMessageCause_other
 * @constant
 * @type {number}
 */
export
const N9HRMessageCause_other: N9HRMessageCause = N9HRMessageCause.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: N9HRMessageCause = N9HRMessageCause.other; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary N9HRMessageCause_hRLIEnabled
 * @constant
 * @type {number}
 */
export
const N9HRMessageCause_hRLIEnabled: N9HRMessageCause = N9HRMessageCause.hRLIEnabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hRLIEnabled
 * @constant
 * @type {number}
 */
export
const hRLIEnabled: N9HRMessageCause = N9HRMessageCause.hRLIEnabled; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_N9HRMessageCause: $.ASN1Decoder<N9HRMessageCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) N9HRMessageCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_N9HRMessageCause (el: _Element): N9HRMessageCause {
    if (!_cached_decoder_for_N9HRMessageCause) { _cached_decoder_for_N9HRMessageCause = $._decodeEnumerated; }
    return _cached_decoder_for_N9HRMessageCause(el);
}

let _cached_encoder_for_N9HRMessageCause: $.ASN1Encoder<N9HRMessageCause> | null = null;

/**
 * @summary Encodes a(n) N9HRMessageCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The N9HRMessageCause, encoded as an ASN.1 Element.
 */
export
function _encode_N9HRMessageCause (value: N9HRMessageCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_N9HRMessageCause) { _cached_encoder_for_N9HRMessageCause = $._encodeEnumerated; }
    return _cached_encoder_for_N9HRMessageCause(value, elGetter);
}


/* eslint-enable */
