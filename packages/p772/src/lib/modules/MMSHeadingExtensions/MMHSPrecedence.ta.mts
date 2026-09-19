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
 * @summary MMHSPrecedence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMHSPrecedence  ::=  INTEGER {
 *   deferred(0), routine(1), priority(2), immediate(3), flash(4), override(5)
 *   -- these are used by some National systems XXX need to verify
 *   , ecp(16), critic(17), override-2(18)
 * }
 * ```
 */
export
type MMHSPrecedence = INTEGER;

/**
 * @summary MMHSPrecedence_deferred
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_deferred: MMHSPrecedence = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_deferred
 * @constant
 * @type {number}
 */
export
const deferred: MMHSPrecedence = MMHSPrecedence_deferred; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_routine
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_routine: MMHSPrecedence = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_routine
 * @constant
 * @type {number}
 */
export
const routine: MMHSPrecedence = MMHSPrecedence_routine; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_priority
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_priority: MMHSPrecedence = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_priority
 * @constant
 * @type {number}
 */
export
const priority: MMHSPrecedence = MMHSPrecedence_priority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_immediate
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_immediate: MMHSPrecedence = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_immediate
 * @constant
 * @type {number}
 */
export
const immediate: MMHSPrecedence = MMHSPrecedence_immediate; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_flash
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_flash: MMHSPrecedence = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_flash
 * @constant
 * @type {number}
 */
export
const flash: MMHSPrecedence = MMHSPrecedence_flash; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_override
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_override: MMHSPrecedence = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_override
 * @constant
 * @type {number}
 */
export
const override: MMHSPrecedence = MMHSPrecedence_override; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_ecp
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_ecp: MMHSPrecedence = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_ecp
 * @constant
 * @type {number}
 */
export
const ecp: MMHSPrecedence = MMHSPrecedence_ecp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_critic
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_critic: MMHSPrecedence = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_critic
 * @constant
 * @type {number}
 */
export
const critic: MMHSPrecedence = MMHSPrecedence_critic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_override_2
 * @constant
 * @type {number}
 */
export
const MMHSPrecedence_override_2: MMHSPrecedence = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MMHSPrecedence_override_2
 * @constant
 * @type {number}
 */
export
const override_2: MMHSPrecedence = MMHSPrecedence_override_2; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_MMHSPrecedence: $.ASN1Decoder<MMHSPrecedence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMHSPrecedence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMHSPrecedence (el: _Element): MMHSPrecedence {
    if (!_cached_decoder_for_MMHSPrecedence) { _cached_decoder_for_MMHSPrecedence = $._decodeInteger; }
    return _cached_decoder_for_MMHSPrecedence(el);
}

let _cached_encoder_for_MMHSPrecedence: $.ASN1Encoder<MMHSPrecedence> | null = null;

/**
 * @summary Encodes a(n) MMHSPrecedence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMHSPrecedence, encoded as an ASN.1 Element.
 */
export
function _encode_MMHSPrecedence (value: MMHSPrecedence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMHSPrecedence) { _cached_encoder_for_MMHSPrecedence = $._encodeInteger; }
    return _cached_encoder_for_MMHSPrecedence(value, elGetter);
}


/* eslint-enable */
