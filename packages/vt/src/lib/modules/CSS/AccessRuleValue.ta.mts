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
 * @summary AccessRuleValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessRuleValue  ::=  INTEGER {
 *     wavar           (0),
 *     waci            (1),
 *     waca            (2),
 *     nsac            (3),
 *     wavar-and-waci  (4),
 *     wavar-and-waca  (5),
 *     no-access       (6)
 * }
 * ```
 */
export
type AccessRuleValue = INTEGER;

/**
 * @summary AccessRuleValue_wavar
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_wavar: AccessRuleValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_wavar
 * @constant
 * @type {number}
 */
export
const wavar: AccessRuleValue = AccessRuleValue_wavar; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_waci
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_waci: AccessRuleValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_waci
 * @constant
 * @type {number}
 */
export
const waci: AccessRuleValue = AccessRuleValue_waci; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_waca
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_waca: AccessRuleValue = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_waca
 * @constant
 * @type {number}
 */
export
const waca: AccessRuleValue = AccessRuleValue_waca; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_nsac
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_nsac: AccessRuleValue = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_nsac
 * @constant
 * @type {number}
 */
export
const nsac: AccessRuleValue = AccessRuleValue_nsac; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_wavar_and_waci
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_wavar_and_waci: AccessRuleValue = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_wavar_and_waci
 * @constant
 * @type {number}
 */
export
const wavar_and_waci: AccessRuleValue = AccessRuleValue_wavar_and_waci; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_wavar_and_waca
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_wavar_and_waca: AccessRuleValue = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_wavar_and_waca
 * @constant
 * @type {number}
 */
export
const wavar_and_waca: AccessRuleValue = AccessRuleValue_wavar_and_waca; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_no_access
 * @constant
 * @type {number}
 */
export
const AccessRuleValue_no_access: AccessRuleValue = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AccessRuleValue_no_access
 * @constant
 * @type {number}
 */
export
const no_access: AccessRuleValue = AccessRuleValue_no_access; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_AccessRuleValue: $.ASN1Decoder<AccessRuleValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessRuleValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessRuleValue (el: _Element): AccessRuleValue {
    if (!_cached_decoder_for_AccessRuleValue) { _cached_decoder_for_AccessRuleValue = $._decodeInteger; }
    return _cached_decoder_for_AccessRuleValue(el);
}

let _cached_encoder_for_AccessRuleValue: $.ASN1Encoder<AccessRuleValue> | null = null;

/**
 * @summary Encodes a(n) AccessRuleValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessRuleValue, encoded as an ASN.1 Element.
 */
export
function _encode_AccessRuleValue (value: AccessRuleValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessRuleValue) { _cached_encoder_for_AccessRuleValue = $._encodeInteger; }
    return _cached_encoder_for_AccessRuleValue(value, elGetter);
}


/* eslint-enable */
