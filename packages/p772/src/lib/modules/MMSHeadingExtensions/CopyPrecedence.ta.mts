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
 * @summary CopyPrecedence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CopyPrecedence  ::=  INTEGER {
 *   deferred(0), routine(1), priority(2), immediate(3), flash(4), override(5)
 *   -- these are used by some National systems XXX need to verify
 *   , ecp(16), critic(17), override-2(18)
 * }
 * ```
 */
export
type CopyPrecedence = INTEGER;

/**
 * @summary CopyPrecedence_deferred
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_deferred: CopyPrecedence = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_deferred
 * @constant
 * @type {number}
 */
export
const deferred: CopyPrecedence = CopyPrecedence_deferred; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_routine
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_routine: CopyPrecedence = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_routine
 * @constant
 * @type {number}
 */
export
const routine: CopyPrecedence = CopyPrecedence_routine; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_priority
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_priority: CopyPrecedence = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_priority
 * @constant
 * @type {number}
 */
export
const priority: CopyPrecedence = CopyPrecedence_priority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_immediate
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_immediate: CopyPrecedence = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_immediate
 * @constant
 * @type {number}
 */
export
const immediate: CopyPrecedence = CopyPrecedence_immediate; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_flash
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_flash: CopyPrecedence = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_flash
 * @constant
 * @type {number}
 */
export
const flash: CopyPrecedence = CopyPrecedence_flash; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_override
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_override: CopyPrecedence = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_override
 * @constant
 * @type {number}
 */
export
const override: CopyPrecedence = CopyPrecedence_override; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_ecp
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_ecp: CopyPrecedence = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_ecp
 * @constant
 * @type {number}
 */
export
const ecp: CopyPrecedence = CopyPrecedence_ecp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_critic
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_critic: CopyPrecedence = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_critic
 * @constant
 * @type {number}
 */
export
const critic: CopyPrecedence = CopyPrecedence_critic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_override_2
 * @constant
 * @type {number}
 */
export
const CopyPrecedence_override_2: CopyPrecedence = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CopyPrecedence_override_2
 * @constant
 * @type {number}
 */
export
const override_2: CopyPrecedence = CopyPrecedence_override_2; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_CopyPrecedence: $.ASN1Decoder<CopyPrecedence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CopyPrecedence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CopyPrecedence (el: _Element): CopyPrecedence {
    if (!_cached_decoder_for_CopyPrecedence) { _cached_decoder_for_CopyPrecedence = $._decodeInteger; }
    return _cached_decoder_for_CopyPrecedence(el);
}

let _cached_encoder_for_CopyPrecedence: $.ASN1Encoder<CopyPrecedence> | null = null;

/**
 * @summary Encodes a(n) CopyPrecedence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CopyPrecedence, encoded as an ASN.1 Element.
 */
export
function _encode_CopyPrecedence (value: CopyPrecedence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CopyPrecedence) { _cached_encoder_for_CopyPrecedence = $._encodeInteger; }
    return _cached_encoder_for_CopyPrecedence(value, elGetter);
}


/* eslint-enable */
