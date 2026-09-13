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
 * @summary InterServerAccessProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterServerAccessProblem  ::=  ENUMERATED {
 *     referent-store-not-found        (1),    -- bad store identification
 *     referent-store-unreachable      (2),    -- no port to reach it
 *     referent-store-unavailable      (3),    -- temporarily
 *     referent-store-security-problem (4)     -- access rights
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_InterServerAccessProblem {
    referent_store_not_found = 1,
    referent_store_unreachable = 2,
    referent_store_unavailable = 3,
    referent_store_security_problem = 4,
}

/**
 * @summary InterServerAccessProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterServerAccessProblem  ::=  ENUMERATED {
 *     referent-store-not-found        (1),    -- bad store identification
 *     referent-store-unreachable      (2),    -- no port to reach it
 *     referent-store-unavailable      (3),    -- temporarily
 *     referent-store-security-problem (4)     -- access rights
 * }
 * ```
 * 
 * @enum {number}
 */
export
type InterServerAccessProblem = _enum_for_InterServerAccessProblem;

/**
 * @summary InterServerAccessProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterServerAccessProblem  ::=  ENUMERATED {
 *     referent-store-not-found        (1),    -- bad store identification
 *     referent-store-unreachable      (2),    -- no port to reach it
 *     referent-store-unavailable      (3),    -- temporarily
 *     referent-store-security-problem (4)     -- access rights
 * }
 * ```
 * 
 * @enum {number}
 */
export
const InterServerAccessProblem = _enum_for_InterServerAccessProblem;

/**
 * @summary InterServerAccessProblem_referent_store_not_found
 * @constant
 * @type {number}
 */
export
const InterServerAccessProblem_referent_store_not_found: InterServerAccessProblem = InterServerAccessProblem.referent_store_not_found; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary referent_store_not_found
 * @constant
 * @type {number}
 */
export
const referent_store_not_found: InterServerAccessProblem = InterServerAccessProblem.referent_store_not_found; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterServerAccessProblem_referent_store_unreachable
 * @constant
 * @type {number}
 */
export
const InterServerAccessProblem_referent_store_unreachable: InterServerAccessProblem = InterServerAccessProblem.referent_store_unreachable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary referent_store_unreachable
 * @constant
 * @type {number}
 */
export
const referent_store_unreachable: InterServerAccessProblem = InterServerAccessProblem.referent_store_unreachable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterServerAccessProblem_referent_store_unavailable
 * @constant
 * @type {number}
 */
export
const InterServerAccessProblem_referent_store_unavailable: InterServerAccessProblem = InterServerAccessProblem.referent_store_unavailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary referent_store_unavailable
 * @constant
 * @type {number}
 */
export
const referent_store_unavailable: InterServerAccessProblem = InterServerAccessProblem.referent_store_unavailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterServerAccessProblem_referent_store_security_problem
 * @constant
 * @type {number}
 */
export
const InterServerAccessProblem_referent_store_security_problem: InterServerAccessProblem = InterServerAccessProblem.referent_store_security_problem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary referent_store_security_problem
 * @constant
 * @type {number}
 */
export
const referent_store_security_problem: InterServerAccessProblem = InterServerAccessProblem.referent_store_security_problem; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_InterServerAccessProblem: $.ASN1Decoder<InterServerAccessProblem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InterServerAccessProblem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InterServerAccessProblem (el: _Element): InterServerAccessProblem {
    if (!_cached_decoder_for_InterServerAccessProblem) { _cached_decoder_for_InterServerAccessProblem = $._decodeEnumerated; }
    return _cached_decoder_for_InterServerAccessProblem(el);
}

let _cached_encoder_for_InterServerAccessProblem: $.ASN1Encoder<InterServerAccessProblem> | null = null;

/**
 * @summary Encodes a(n) InterServerAccessProblem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InterServerAccessProblem, encoded as an ASN.1 Element.
 */
export
function _encode_InterServerAccessProblem (value: InterServerAccessProblem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InterServerAccessProblem) { _cached_encoder_for_InterServerAccessProblem = $._encodeEnumerated; }
    return _cached_encoder_for_InterServerAccessProblem(value, elGetter);
}


/* eslint-enable */
