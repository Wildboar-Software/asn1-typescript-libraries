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
 * @summary NamedDay_intNamedDays
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NamedDay-intNamedDays ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NamedDay_intNamedDays {
    sunday = 1,
    monday = 2,
    tuesday = 3,
    wednesday = 4,
    thursday = 5,
    friday = 6,
    saturday = 7,
}

/**
 * @summary NamedDay_intNamedDays
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NamedDay-intNamedDays ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type NamedDay_intNamedDays = _enum_for_NamedDay_intNamedDays;

/**
 * @summary NamedDay_intNamedDays
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NamedDay-intNamedDays ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const NamedDay_intNamedDays = _enum_for_NamedDay_intNamedDays;

/**
 * @summary NamedDay_intNamedDays_sunday
 * @constant
 * @type {number}
 */
export
const NamedDay_intNamedDays_sunday: NamedDay_intNamedDays = NamedDay_intNamedDays.sunday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sunday
 * @constant
 * @type {number}
 */
export
const sunday: NamedDay_intNamedDays = NamedDay_intNamedDays.sunday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDay_intNamedDays_monday
 * @constant
 * @type {number}
 */
export
const NamedDay_intNamedDays_monday: NamedDay_intNamedDays = NamedDay_intNamedDays.monday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monday
 * @constant
 * @type {number}
 */
export
const monday: NamedDay_intNamedDays = NamedDay_intNamedDays.monday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDay_intNamedDays_tuesday
 * @constant
 * @type {number}
 */
export
const NamedDay_intNamedDays_tuesday: NamedDay_intNamedDays = NamedDay_intNamedDays.tuesday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tuesday
 * @constant
 * @type {number}
 */
export
const tuesday: NamedDay_intNamedDays = NamedDay_intNamedDays.tuesday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDay_intNamedDays_wednesday
 * @constant
 * @type {number}
 */
export
const NamedDay_intNamedDays_wednesday: NamedDay_intNamedDays = NamedDay_intNamedDays.wednesday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wednesday
 * @constant
 * @type {number}
 */
export
const wednesday: NamedDay_intNamedDays = NamedDay_intNamedDays.wednesday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDay_intNamedDays_thursday
 * @constant
 * @type {number}
 */
export
const NamedDay_intNamedDays_thursday: NamedDay_intNamedDays = NamedDay_intNamedDays.thursday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary thursday
 * @constant
 * @type {number}
 */
export
const thursday: NamedDay_intNamedDays = NamedDay_intNamedDays.thursday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDay_intNamedDays_friday
 * @constant
 * @type {number}
 */
export
const NamedDay_intNamedDays_friday: NamedDay_intNamedDays = NamedDay_intNamedDays.friday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary friday
 * @constant
 * @type {number}
 */
export
const friday: NamedDay_intNamedDays = NamedDay_intNamedDays.friday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDay_intNamedDays_saturday
 * @constant
 * @type {number}
 */
export
const NamedDay_intNamedDays_saturday: NamedDay_intNamedDays = NamedDay_intNamedDays.saturday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary saturday
 * @constant
 * @type {number}
 */
export
const saturday: NamedDay_intNamedDays = NamedDay_intNamedDays.saturday; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NamedDay_intNamedDays: $.ASN1Decoder<NamedDay_intNamedDays> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NamedDay_intNamedDays
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NamedDay_intNamedDays (el: _Element): NamedDay_intNamedDays {
    if (!_cached_decoder_for_NamedDay_intNamedDays) { _cached_decoder_for_NamedDay_intNamedDays = $._decodeEnumerated; }
    return _cached_decoder_for_NamedDay_intNamedDays(el);
}

let _cached_encoder_for_NamedDay_intNamedDays: $.ASN1Encoder<NamedDay_intNamedDays> | null = null;

/**
 * @summary Encodes a(n) NamedDay_intNamedDays into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NamedDay_intNamedDays, encoded as an ASN.1 Element.
 */
export
function _encode_NamedDay_intNamedDays (value: NamedDay_intNamedDays, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NamedDay_intNamedDays) { _cached_encoder_for_NamedDay_intNamedDays = $._encodeEnumerated; }
    return _cached_encoder_for_NamedDay_intNamedDays(value, elGetter);
}


/* eslint-enable */
