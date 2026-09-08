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
 * @summary SelectValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SelectValue  ::=  ENUMERATED
 * {    normal                 (0),
 *     leastCost             (1),
 *     emergency             (2),
 *     aCD                 (3),
 *     userDefined             (4) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SelectValue {
    normal = 0,
    leastCost = 1,
    emergency = 2,
    aCD = 3,
    userDefined = 4,
}

/**
 * @summary SelectValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SelectValue  ::=  ENUMERATED
 * {    normal                 (0),
 *     leastCost             (1),
 *     emergency             (2),
 *     aCD                 (3),
 *     userDefined             (4) }
 * ```
 * 
 * @enum {number}
 */
export
type SelectValue = _enum_for_SelectValue;

/**
 * @summary SelectValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SelectValue  ::=  ENUMERATED
 * {    normal                 (0),
 *     leastCost             (1),
 *     emergency             (2),
 *     aCD                 (3),
 *     userDefined             (4) }
 * ```
 * 
 * @enum {number}
 */
export
const SelectValue = _enum_for_SelectValue;

/**
 * @summary SelectValue_normal
 * @constant
 * @type {number}
 */
export
const SelectValue_normal: SelectValue = SelectValue.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal: SelectValue = SelectValue.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SelectValue_leastCost
 * @constant
 * @type {number}
 */
export
const SelectValue_leastCost: SelectValue = SelectValue.leastCost; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary leastCost
 * @constant
 * @type {number}
 */
export
const leastCost: SelectValue = SelectValue.leastCost; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SelectValue_emergency
 * @constant
 * @type {number}
 */
export
const SelectValue_emergency: SelectValue = SelectValue.emergency; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergency
 * @constant
 * @type {number}
 */
export
const emergency: SelectValue = SelectValue.emergency; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SelectValue_aCD
 * @constant
 * @type {number}
 */
export
const SelectValue_aCD: SelectValue = SelectValue.aCD; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aCD
 * @constant
 * @type {number}
 */
export
const aCD: SelectValue = SelectValue.aCD; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SelectValue_userDefined
 * @constant
 * @type {number}
 */
export
const SelectValue_userDefined: SelectValue = SelectValue.userDefined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userDefined
 * @constant
 * @type {number}
 */
export
const userDefined: SelectValue = SelectValue.userDefined; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SelectValue: $.ASN1Decoder<SelectValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SelectValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SelectValue (el: _Element): SelectValue {
    if (!_cached_decoder_for_SelectValue) { _cached_decoder_for_SelectValue = $._decodeEnumerated; }
    return _cached_decoder_for_SelectValue(el);
}

let _cached_encoder_for_SelectValue: $.ASN1Encoder<SelectValue> | null = null;

/**
 * @summary Encodes a(n) SelectValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SelectValue, encoded as an ASN.1 Element.
 */
export
function _encode_SelectValue (value: SelectValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SelectValue) { _cached_encoder_for_SelectValue = $._encodeEnumerated; }
    return _cached_encoder_for_SelectValue(value, elGetter);
}


/* eslint-enable */
