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
 * @summary PeriodLTE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodLTE  ::=  ENUMERATED {
 *     d1024ms (0),
 *     d1280ms (1),
 *     d2048ms (2),
 *     d2560ms (3),
 *     d5120ms (4),
 *     d10240ms (5),
 *     d1min (6)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PeriodLTE {
    d1024ms = 0,
    d1280ms = 1,
    d2048ms = 2,
    d2560ms = 3,
    d5120ms = 4,
    d10240ms = 5,
    d1min = 6,
}

/**
 * @summary PeriodLTE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodLTE  ::=  ENUMERATED {
 *     d1024ms (0),
 *     d1280ms (1),
 *     d2048ms (2),
 *     d2560ms (3),
 *     d5120ms (4),
 *     d10240ms (5),
 *     d1min (6)}
 * ```
 * 
 * @enum {number}
 */
export
type PeriodLTE = _enum_for_PeriodLTE;

/**
 * @summary PeriodLTE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodLTE  ::=  ENUMERATED {
 *     d1024ms (0),
 *     d1280ms (1),
 *     d2048ms (2),
 *     d2560ms (3),
 *     d5120ms (4),
 *     d10240ms (5),
 *     d1min (6)}
 * ```
 * 
 * @enum {number}
 */
export
const PeriodLTE = _enum_for_PeriodLTE;

/**
 * @summary PeriodLTE_d1024ms
 * @constant
 * @type {number}
 */
export
const PeriodLTE_d1024ms: PeriodLTE = PeriodLTE.d1024ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d1024ms
 * @constant
 * @type {number}
 */
export
const d1024ms: PeriodLTE = PeriodLTE.d1024ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodLTE_d1280ms
 * @constant
 * @type {number}
 */
export
const PeriodLTE_d1280ms: PeriodLTE = PeriodLTE.d1280ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d1280ms
 * @constant
 * @type {number}
 */
export
const d1280ms: PeriodLTE = PeriodLTE.d1280ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodLTE_d2048ms
 * @constant
 * @type {number}
 */
export
const PeriodLTE_d2048ms: PeriodLTE = PeriodLTE.d2048ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d2048ms
 * @constant
 * @type {number}
 */
export
const d2048ms: PeriodLTE = PeriodLTE.d2048ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodLTE_d2560ms
 * @constant
 * @type {number}
 */
export
const PeriodLTE_d2560ms: PeriodLTE = PeriodLTE.d2560ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d2560ms
 * @constant
 * @type {number}
 */
export
const d2560ms: PeriodLTE = PeriodLTE.d2560ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodLTE_d5120ms
 * @constant
 * @type {number}
 */
export
const PeriodLTE_d5120ms: PeriodLTE = PeriodLTE.d5120ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d5120ms
 * @constant
 * @type {number}
 */
export
const d5120ms: PeriodLTE = PeriodLTE.d5120ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodLTE_d10240ms
 * @constant
 * @type {number}
 */
export
const PeriodLTE_d10240ms: PeriodLTE = PeriodLTE.d10240ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d10240ms
 * @constant
 * @type {number}
 */
export
const d10240ms: PeriodLTE = PeriodLTE.d10240ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodLTE_d1min
 * @constant
 * @type {number}
 */
export
const PeriodLTE_d1min: PeriodLTE = PeriodLTE.d1min; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d1min
 * @constant
 * @type {number}
 */
export
const d1min: PeriodLTE = PeriodLTE.d1min; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PeriodLTE: $.ASN1Decoder<PeriodLTE> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PeriodLTE
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PeriodLTE (el: _Element): PeriodLTE {
    if (!_cached_decoder_for_PeriodLTE) { _cached_decoder_for_PeriodLTE = $._decodeEnumerated; }
    return _cached_decoder_for_PeriodLTE(el);
}

let _cached_encoder_for_PeriodLTE: $.ASN1Encoder<PeriodLTE> | null = null;

/**
 * @summary Encodes a(n) PeriodLTE into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeriodLTE, encoded as an ASN.1 Element.
 */
export
function _encode_PeriodLTE (value: PeriodLTE, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PeriodLTE) { _cached_encoder_for_PeriodLTE = $._encodeEnumerated; }
    return _cached_encoder_for_PeriodLTE(value, elGetter);
}


/* eslint-enable */
