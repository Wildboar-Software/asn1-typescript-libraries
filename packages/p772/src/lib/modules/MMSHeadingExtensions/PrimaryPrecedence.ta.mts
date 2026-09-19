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
 * @summary PrimaryPrecedence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrimaryPrecedence  ::=  INTEGER {
 *   deferred(0), routine(1), priority(2), immediate(3), flash(4), override(5)
 *   -- these are used by some National systems XXX need to verify
 *   , ecp(16), critic(17), override-2(18)
 * }
 * ```
 */
export
type PrimaryPrecedence = INTEGER;

/**
 * @summary PrimaryPrecedence_deferred
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_deferred: PrimaryPrecedence = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_deferred
 * @constant
 * @type {number}
 */
export
const deferred: PrimaryPrecedence = PrimaryPrecedence_deferred; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_routine
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_routine: PrimaryPrecedence = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_routine
 * @constant
 * @type {number}
 */
export
const routine: PrimaryPrecedence = PrimaryPrecedence_routine; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_priority
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_priority: PrimaryPrecedence = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_priority
 * @constant
 * @type {number}
 */
export
const priority: PrimaryPrecedence = PrimaryPrecedence_priority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_immediate
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_immediate: PrimaryPrecedence = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_immediate
 * @constant
 * @type {number}
 */
export
const immediate: PrimaryPrecedence = PrimaryPrecedence_immediate; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_flash
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_flash: PrimaryPrecedence = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_flash
 * @constant
 * @type {number}
 */
export
const flash: PrimaryPrecedence = PrimaryPrecedence_flash; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_override
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_override: PrimaryPrecedence = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_override
 * @constant
 * @type {number}
 */
export
const override: PrimaryPrecedence = PrimaryPrecedence_override; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_ecp
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_ecp: PrimaryPrecedence = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_ecp
 * @constant
 * @type {number}
 */
export
const ecp: PrimaryPrecedence = PrimaryPrecedence_ecp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_critic
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_critic: PrimaryPrecedence = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_critic
 * @constant
 * @type {number}
 */
export
const critic: PrimaryPrecedence = PrimaryPrecedence_critic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_override_2
 * @constant
 * @type {number}
 */
export
const PrimaryPrecedence_override_2: PrimaryPrecedence = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrimaryPrecedence_override_2
 * @constant
 * @type {number}
 */
export
const override_2: PrimaryPrecedence = PrimaryPrecedence_override_2; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_PrimaryPrecedence: $.ASN1Decoder<PrimaryPrecedence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrimaryPrecedence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrimaryPrecedence (el: _Element): PrimaryPrecedence {
    if (!_cached_decoder_for_PrimaryPrecedence) { _cached_decoder_for_PrimaryPrecedence = $._decodeInteger; }
    return _cached_decoder_for_PrimaryPrecedence(el);
}

let _cached_encoder_for_PrimaryPrecedence: $.ASN1Encoder<PrimaryPrecedence> | null = null;

/**
 * @summary Encodes a(n) PrimaryPrecedence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrimaryPrecedence, encoded as an ASN.1 Element.
 */
export
function _encode_PrimaryPrecedence (value: PrimaryPrecedence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrimaryPrecedence) { _cached_encoder_for_PrimaryPrecedence = $._encodeInteger; }
    return _cached_encoder_for_PrimaryPrecedence(value, elGetter);
}


/* eslint-enable */
