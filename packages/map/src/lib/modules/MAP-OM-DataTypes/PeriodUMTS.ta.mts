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
 * @summary PeriodUMTS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodUMTS  ::=  ENUMERATED {
 *     d250ms (0),
 *     d500ms (1),
 *     d1000ms (2),
 *     d2000ms (3),
 *     d3000ms (4),
 *     d4000ms (5),
 *     d6000ms (6),
 *     d8000ms (7),
 *     d12000ms (8),
 *     d16000ms (9),
 *     d20000ms (10),
 *     d24000ms (11),
 *     d28000ms (12),
 *     d32000ms (13),
 *     d64000ms (14)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PeriodUMTS {
    d250ms = 0,
    d500ms = 1,
    d1000ms = 2,
    d2000ms = 3,
    d3000ms = 4,
    d4000ms = 5,
    d6000ms = 6,
    d8000ms = 7,
    d12000ms = 8,
    d16000ms = 9,
    d20000ms = 10,
    d24000ms = 11,
    d28000ms = 12,
    d32000ms = 13,
    d64000ms = 14,
}

/**
 * @summary PeriodUMTS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodUMTS  ::=  ENUMERATED {
 *     d250ms (0),
 *     d500ms (1),
 *     d1000ms (2),
 *     d2000ms (3),
 *     d3000ms (4),
 *     d4000ms (5),
 *     d6000ms (6),
 *     d8000ms (7),
 *     d12000ms (8),
 *     d16000ms (9),
 *     d20000ms (10),
 *     d24000ms (11),
 *     d28000ms (12),
 *     d32000ms (13),
 *     d64000ms (14)}
 * ```
 * 
 * @enum {number}
 */
export
type PeriodUMTS = _enum_for_PeriodUMTS;

/**
 * @summary PeriodUMTS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodUMTS  ::=  ENUMERATED {
 *     d250ms (0),
 *     d500ms (1),
 *     d1000ms (2),
 *     d2000ms (3),
 *     d3000ms (4),
 *     d4000ms (5),
 *     d6000ms (6),
 *     d8000ms (7),
 *     d12000ms (8),
 *     d16000ms (9),
 *     d20000ms (10),
 *     d24000ms (11),
 *     d28000ms (12),
 *     d32000ms (13),
 *     d64000ms (14)}
 * ```
 * 
 * @enum {number}
 */
export
const PeriodUMTS = _enum_for_PeriodUMTS;

/**
 * @summary PeriodUMTS_d250ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d250ms: PeriodUMTS = PeriodUMTS.d250ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d250ms
 * @constant
 * @type {number}
 */
export
const d250ms: PeriodUMTS = PeriodUMTS.d250ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d500ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d500ms: PeriodUMTS = PeriodUMTS.d500ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d500ms
 * @constant
 * @type {number}
 */
export
const d500ms: PeriodUMTS = PeriodUMTS.d500ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d1000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d1000ms: PeriodUMTS = PeriodUMTS.d1000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d1000ms
 * @constant
 * @type {number}
 */
export
const d1000ms: PeriodUMTS = PeriodUMTS.d1000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d2000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d2000ms: PeriodUMTS = PeriodUMTS.d2000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d2000ms
 * @constant
 * @type {number}
 */
export
const d2000ms: PeriodUMTS = PeriodUMTS.d2000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d3000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d3000ms: PeriodUMTS = PeriodUMTS.d3000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d3000ms
 * @constant
 * @type {number}
 */
export
const d3000ms: PeriodUMTS = PeriodUMTS.d3000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d4000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d4000ms: PeriodUMTS = PeriodUMTS.d4000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d4000ms
 * @constant
 * @type {number}
 */
export
const d4000ms: PeriodUMTS = PeriodUMTS.d4000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d6000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d6000ms: PeriodUMTS = PeriodUMTS.d6000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d6000ms
 * @constant
 * @type {number}
 */
export
const d6000ms: PeriodUMTS = PeriodUMTS.d6000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d8000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d8000ms: PeriodUMTS = PeriodUMTS.d8000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d8000ms
 * @constant
 * @type {number}
 */
export
const d8000ms: PeriodUMTS = PeriodUMTS.d8000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d12000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d12000ms: PeriodUMTS = PeriodUMTS.d12000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d12000ms
 * @constant
 * @type {number}
 */
export
const d12000ms: PeriodUMTS = PeriodUMTS.d12000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d16000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d16000ms: PeriodUMTS = PeriodUMTS.d16000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d16000ms
 * @constant
 * @type {number}
 */
export
const d16000ms: PeriodUMTS = PeriodUMTS.d16000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d20000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d20000ms: PeriodUMTS = PeriodUMTS.d20000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d20000ms
 * @constant
 * @type {number}
 */
export
const d20000ms: PeriodUMTS = PeriodUMTS.d20000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d24000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d24000ms: PeriodUMTS = PeriodUMTS.d24000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d24000ms
 * @constant
 * @type {number}
 */
export
const d24000ms: PeriodUMTS = PeriodUMTS.d24000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d28000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d28000ms: PeriodUMTS = PeriodUMTS.d28000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d28000ms
 * @constant
 * @type {number}
 */
export
const d28000ms: PeriodUMTS = PeriodUMTS.d28000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d32000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d32000ms: PeriodUMTS = PeriodUMTS.d32000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d32000ms
 * @constant
 * @type {number}
 */
export
const d32000ms: PeriodUMTS = PeriodUMTS.d32000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PeriodUMTS_d64000ms
 * @constant
 * @type {number}
 */
export
const PeriodUMTS_d64000ms: PeriodUMTS = PeriodUMTS.d64000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d64000ms
 * @constant
 * @type {number}
 */
export
const d64000ms: PeriodUMTS = PeriodUMTS.d64000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PeriodUMTS: $.ASN1Decoder<PeriodUMTS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PeriodUMTS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PeriodUMTS (el: _Element): PeriodUMTS {
    if (!_cached_decoder_for_PeriodUMTS) { _cached_decoder_for_PeriodUMTS = $._decodeEnumerated; }
    return _cached_decoder_for_PeriodUMTS(el);
}

let _cached_encoder_for_PeriodUMTS: $.ASN1Encoder<PeriodUMTS> | null = null;

/**
 * @summary Encodes a(n) PeriodUMTS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeriodUMTS, encoded as an ASN.1 Element.
 */
export
function _encode_PeriodUMTS (value: PeriodUMTS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PeriodUMTS) { _cached_encoder_for_PeriodUMTS = $._encodeEnumerated; }
    return _cached_encoder_for_PeriodUMTS(value, elGetter);
}


/* eslint-enable */
