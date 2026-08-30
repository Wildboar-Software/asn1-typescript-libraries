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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary ReportInterval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportInterval  ::=  ENUMERATED {
 *     umts250ms (0),
 *     umts500ms (1),
 *     umts1000ms (2),
 *     umts2000ms (3),
 *     umts3000ms (4),
 *     umts4000ms (5),
 *     umts6000ms (6),
 *     umts8000ms (7),
 *     umts12000ms (8),
 *     umts16000ms (9),
 *     umts20000ms (10),
 *     umts24000ms (11),
 *     umts28000ms (12),
 *     umts32000ms (13),
 *     umts64000ms (14),
 *     lte120ms (15),
 *     lte240ms (16),
 *     lte480ms (17),
 *     lte640ms (18),
 *     lte1024ms (19),
 *     lte2048ms (20),
 *     lte5120ms (21),
 *     lte10240ms (22),
 *     lte1min (23),
 *     lte6min (24),
 *     lte12min (25),
 *     lte30min (26),
 *     lte60min (27)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReportInterval {
    umts250ms = 0,
    umts500ms = 1,
    umts1000ms = 2,
    umts2000ms = 3,
    umts3000ms = 4,
    umts4000ms = 5,
    umts6000ms = 6,
    umts8000ms = 7,
    umts12000ms = 8,
    umts16000ms = 9,
    umts20000ms = 10,
    umts24000ms = 11,
    umts28000ms = 12,
    umts32000ms = 13,
    umts64000ms = 14,
    lte120ms = 15,
    lte240ms = 16,
    lte480ms = 17,
    lte640ms = 18,
    lte1024ms = 19,
    lte2048ms = 20,
    lte5120ms = 21,
    lte10240ms = 22,
    lte1min = 23,
    lte6min = 24,
    lte12min = 25,
    lte30min = 26,
    lte60min = 27,
}

/**
 * @summary ReportInterval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportInterval  ::=  ENUMERATED {
 *     umts250ms (0),
 *     umts500ms (1),
 *     umts1000ms (2),
 *     umts2000ms (3),
 *     umts3000ms (4),
 *     umts4000ms (5),
 *     umts6000ms (6),
 *     umts8000ms (7),
 *     umts12000ms (8),
 *     umts16000ms (9),
 *     umts20000ms (10),
 *     umts24000ms (11),
 *     umts28000ms (12),
 *     umts32000ms (13),
 *     umts64000ms (14),
 *     lte120ms (15),
 *     lte240ms (16),
 *     lte480ms (17),
 *     lte640ms (18),
 *     lte1024ms (19),
 *     lte2048ms (20),
 *     lte5120ms (21),
 *     lte10240ms (22),
 *     lte1min (23),
 *     lte6min (24),
 *     lte12min (25),
 *     lte30min (26),
 *     lte60min (27)}
 * ```
 * 
 * @enum {number}
 */
export
type ReportInterval = _enum_for_ReportInterval;

/**
 * @summary ReportInterval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportInterval  ::=  ENUMERATED {
 *     umts250ms (0),
 *     umts500ms (1),
 *     umts1000ms (2),
 *     umts2000ms (3),
 *     umts3000ms (4),
 *     umts4000ms (5),
 *     umts6000ms (6),
 *     umts8000ms (7),
 *     umts12000ms (8),
 *     umts16000ms (9),
 *     umts20000ms (10),
 *     umts24000ms (11),
 *     umts28000ms (12),
 *     umts32000ms (13),
 *     umts64000ms (14),
 *     lte120ms (15),
 *     lte240ms (16),
 *     lte480ms (17),
 *     lte640ms (18),
 *     lte1024ms (19),
 *     lte2048ms (20),
 *     lte5120ms (21),
 *     lte10240ms (22),
 *     lte1min (23),
 *     lte6min (24),
 *     lte12min (25),
 *     lte30min (26),
 *     lte60min (27)}
 * ```
 * 
 * @enum {number}
 */
export
const ReportInterval = _enum_for_ReportInterval;

/**
 * @summary ReportInterval_umts250ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_umts250ms: ReportInterval = ReportInterval.umts250ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary umts250ms
 * @constant
 * @type {number}
 */
export
const umts250ms: ReportInterval = ReportInterval.umts250ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_umts500ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_umts500ms: ReportInterval = ReportInterval.umts500ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary umts500ms
 * @constant
 * @type {number}
 */
export
const umts500ms: ReportInterval = ReportInterval.umts500ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_umts1000ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_umts1000ms: ReportInterval = ReportInterval.umts1000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary umts1000ms
 * @constant
 * @type {number}
 */
export
const umts1000ms: ReportInterval = ReportInterval.umts1000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_umts2000ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_umts2000ms: ReportInterval = ReportInterval.umts2000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary umts2000ms
 * @constant
 * @type {number}
 */
export
const umts2000ms: ReportInterval = ReportInterval.umts2000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_umts3000ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_umts3000ms: ReportInterval = ReportInterval.umts3000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary umts3000ms
 * @constant
 * @type {number}
 */
export
const umts3000ms: ReportInterval = ReportInterval.umts3000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_umts4000ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_umts4000ms: ReportInterval = ReportInterval.umts4000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary umts4000ms
 * @constant
 * @type {number}
 */
export
const umts4000ms: ReportInterval = ReportInterval.umts4000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_umts6000ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_umts6000ms: ReportInterval = ReportInterval.umts6000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary umts6000ms
 * @constant
 * @type {number}
 */
export
const umts6000ms: ReportInterval = ReportInterval.umts6000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_umts8000ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_umts8000ms: ReportInterval = ReportInterval.umts8000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary umts8000ms
 * @constant
 * @type {number}
 */
export
const umts8000ms: ReportInterval = ReportInterval.umts8000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_umts12000ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_umts12000ms: ReportInterval = ReportInterval.umts12000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary umts12000ms
 * @constant
 * @type {number}
 */
export
const umts12000ms: ReportInterval = ReportInterval.umts12000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_umts16000ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_umts16000ms: ReportInterval = ReportInterval.umts16000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary umts16000ms
 * @constant
 * @type {number}
 */
export
const umts16000ms: ReportInterval = ReportInterval.umts16000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_umts20000ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_umts20000ms: ReportInterval = ReportInterval.umts20000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary umts20000ms
 * @constant
 * @type {number}
 */
export
const umts20000ms: ReportInterval = ReportInterval.umts20000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_umts24000ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_umts24000ms: ReportInterval = ReportInterval.umts24000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary umts24000ms
 * @constant
 * @type {number}
 */
export
const umts24000ms: ReportInterval = ReportInterval.umts24000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_umts28000ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_umts28000ms: ReportInterval = ReportInterval.umts28000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary umts28000ms
 * @constant
 * @type {number}
 */
export
const umts28000ms: ReportInterval = ReportInterval.umts28000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_umts32000ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_umts32000ms: ReportInterval = ReportInterval.umts32000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary umts32000ms
 * @constant
 * @type {number}
 */
export
const umts32000ms: ReportInterval = ReportInterval.umts32000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_umts64000ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_umts64000ms: ReportInterval = ReportInterval.umts64000ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary umts64000ms
 * @constant
 * @type {number}
 */
export
const umts64000ms: ReportInterval = ReportInterval.umts64000ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_lte120ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_lte120ms: ReportInterval = ReportInterval.lte120ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lte120ms
 * @constant
 * @type {number}
 */
export
const lte120ms: ReportInterval = ReportInterval.lte120ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_lte240ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_lte240ms: ReportInterval = ReportInterval.lte240ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lte240ms
 * @constant
 * @type {number}
 */
export
const lte240ms: ReportInterval = ReportInterval.lte240ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_lte480ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_lte480ms: ReportInterval = ReportInterval.lte480ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lte480ms
 * @constant
 * @type {number}
 */
export
const lte480ms: ReportInterval = ReportInterval.lte480ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_lte640ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_lte640ms: ReportInterval = ReportInterval.lte640ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lte640ms
 * @constant
 * @type {number}
 */
export
const lte640ms: ReportInterval = ReportInterval.lte640ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_lte1024ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_lte1024ms: ReportInterval = ReportInterval.lte1024ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lte1024ms
 * @constant
 * @type {number}
 */
export
const lte1024ms: ReportInterval = ReportInterval.lte1024ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_lte2048ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_lte2048ms: ReportInterval = ReportInterval.lte2048ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lte2048ms
 * @constant
 * @type {number}
 */
export
const lte2048ms: ReportInterval = ReportInterval.lte2048ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_lte5120ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_lte5120ms: ReportInterval = ReportInterval.lte5120ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lte5120ms
 * @constant
 * @type {number}
 */
export
const lte5120ms: ReportInterval = ReportInterval.lte5120ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_lte10240ms
 * @constant
 * @type {number}
 */
export
const ReportInterval_lte10240ms: ReportInterval = ReportInterval.lte10240ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lte10240ms
 * @constant
 * @type {number}
 */
export
const lte10240ms: ReportInterval = ReportInterval.lte10240ms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_lte1min
 * @constant
 * @type {number}
 */
export
const ReportInterval_lte1min: ReportInterval = ReportInterval.lte1min; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lte1min
 * @constant
 * @type {number}
 */
export
const lte1min: ReportInterval = ReportInterval.lte1min; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_lte6min
 * @constant
 * @type {number}
 */
export
const ReportInterval_lte6min: ReportInterval = ReportInterval.lte6min; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lte6min
 * @constant
 * @type {number}
 */
export
const lte6min: ReportInterval = ReportInterval.lte6min; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_lte12min
 * @constant
 * @type {number}
 */
export
const ReportInterval_lte12min: ReportInterval = ReportInterval.lte12min; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lte12min
 * @constant
 * @type {number}
 */
export
const lte12min: ReportInterval = ReportInterval.lte12min; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_lte30min
 * @constant
 * @type {number}
 */
export
const ReportInterval_lte30min: ReportInterval = ReportInterval.lte30min; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lte30min
 * @constant
 * @type {number}
 */
export
const lte30min: ReportInterval = ReportInterval.lte30min; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportInterval_lte60min
 * @constant
 * @type {number}
 */
export
const ReportInterval_lte60min: ReportInterval = ReportInterval.lte60min; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lte60min
 * @constant
 * @type {number}
 */
export
const lte60min: ReportInterval = ReportInterval.lte60min; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ReportInterval: $.ASN1Decoder<ReportInterval> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportInterval
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportInterval (el: _Element): ReportInterval {
    if (!_cached_decoder_for_ReportInterval) { _cached_decoder_for_ReportInterval = $._decodeEnumerated; }
    return _cached_decoder_for_ReportInterval(el);
}

let _cached_encoder_for_ReportInterval: $.ASN1Encoder<ReportInterval> | null = null;

/**
 * @summary Encodes a(n) ReportInterval into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportInterval, encoded as an ASN.1 Element.
 */
export
function _encode_ReportInterval (value: ReportInterval, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportInterval) { _cached_encoder_for_ReportInterval = $._encodeEnumerated; }
    return _cached_encoder_for_ReportInterval(value, elGetter);
}


/* eslint-enable */
