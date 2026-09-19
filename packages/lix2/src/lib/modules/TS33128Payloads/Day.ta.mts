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
 * @summary Day
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Day  ::=  ENUMERATED
 * {
 *     monday(1),
 *     tuesday(2),
 *     wednesday(3),
 *     thursday(4),
 *     friday(5),
 *     saturday(6),
 *     sunday(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Day {
    monday = 1,
    tuesday = 2,
    wednesday = 3,
    thursday = 4,
    friday = 5,
    saturday = 6,
    sunday = 7,
}

/**
 * @summary Day
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Day  ::=  ENUMERATED
 * {
 *     monday(1),
 *     tuesday(2),
 *     wednesday(3),
 *     thursday(4),
 *     friday(5),
 *     saturday(6),
 *     sunday(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Day = _enum_for_Day;

/**
 * @summary Day
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Day  ::=  ENUMERATED
 * {
 *     monday(1),
 *     tuesday(2),
 *     wednesday(3),
 *     thursday(4),
 *     friday(5),
 *     saturday(6),
 *     sunday(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Day = _enum_for_Day;

/**
 * @summary Day_monday
 * @constant
 * @type {number}
 */
export
const Day_monday: Day = Day.monday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monday
 * @constant
 * @type {number}
 */
export
const monday: Day = Day.monday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Day_tuesday
 * @constant
 * @type {number}
 */
export
const Day_tuesday: Day = Day.tuesday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tuesday
 * @constant
 * @type {number}
 */
export
const tuesday: Day = Day.tuesday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Day_wednesday
 * @constant
 * @type {number}
 */
export
const Day_wednesday: Day = Day.wednesday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wednesday
 * @constant
 * @type {number}
 */
export
const wednesday: Day = Day.wednesday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Day_thursday
 * @constant
 * @type {number}
 */
export
const Day_thursday: Day = Day.thursday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary thursday
 * @constant
 * @type {number}
 */
export
const thursday: Day = Day.thursday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Day_friday
 * @constant
 * @type {number}
 */
export
const Day_friday: Day = Day.friday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary friday
 * @constant
 * @type {number}
 */
export
const friday: Day = Day.friday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Day_saturday
 * @constant
 * @type {number}
 */
export
const Day_saturday: Day = Day.saturday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary saturday
 * @constant
 * @type {number}
 */
export
const saturday: Day = Day.saturday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Day_sunday
 * @constant
 * @type {number}
 */
export
const Day_sunday: Day = Day.sunday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sunday
 * @constant
 * @type {number}
 */
export
const sunday: Day = Day.sunday; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Day: $.ASN1Decoder<Day> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Day
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Day (el: _Element): Day {
    if (!_cached_decoder_for_Day) { _cached_decoder_for_Day = $._decodeEnumerated; }
    return _cached_decoder_for_Day(el);
}

let _cached_encoder_for_Day: $.ASN1Encoder<Day> | null = null;

/**
 * @summary Encodes a(n) Day into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Day, encoded as an ASN.1 Element.
 */
export
function _encode_Day (value: Day, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Day) { _cached_encoder_for_Day = $._encodeEnumerated; }
    return _cached_encoder_for_Day(value, elGetter);
}


/* eslint-enable */
