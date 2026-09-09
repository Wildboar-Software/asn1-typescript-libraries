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
 * @summary LIPA_Permission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LIPA-Permission  ::=  ENUMERATED {
 *     lipaProhibited  (0),
 *     lipaOnly  (1),
 *     lipaConditional  (2)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LIPA_Permission {
    lipaProhibited = 0,
    lipaOnly = 1,
    lipaConditional = 2,
}

/**
 * @summary LIPA_Permission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LIPA-Permission  ::=  ENUMERATED {
 *     lipaProhibited  (0),
 *     lipaOnly  (1),
 *     lipaConditional  (2)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type LIPA_Permission = _enum_for_LIPA_Permission;

/**
 * @summary LIPA_Permission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LIPA-Permission  ::=  ENUMERATED {
 *     lipaProhibited  (0),
 *     lipaOnly  (1),
 *     lipaConditional  (2)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const LIPA_Permission = _enum_for_LIPA_Permission;

/**
 * @summary LIPA_Permission_lipaProhibited
 * @constant
 * @type {number}
 */
export
const LIPA_Permission_lipaProhibited: LIPA_Permission = LIPA_Permission.lipaProhibited; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lipaProhibited
 * @constant
 * @type {number}
 */
export
const lipaProhibited: LIPA_Permission = LIPA_Permission.lipaProhibited; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LIPA_Permission_lipaOnly
 * @constant
 * @type {number}
 */
export
const LIPA_Permission_lipaOnly: LIPA_Permission = LIPA_Permission.lipaOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lipaOnly
 * @constant
 * @type {number}
 */
export
const lipaOnly: LIPA_Permission = LIPA_Permission.lipaOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LIPA_Permission_lipaConditional
 * @constant
 * @type {number}
 */
export
const LIPA_Permission_lipaConditional: LIPA_Permission = LIPA_Permission.lipaConditional; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lipaConditional
 * @constant
 * @type {number}
 */
export
const lipaConditional: LIPA_Permission = LIPA_Permission.lipaConditional; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_LIPA_Permission: $.ASN1Decoder<LIPA_Permission> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LIPA_Permission
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LIPA_Permission (el: _Element): LIPA_Permission {
    if (!_cached_decoder_for_LIPA_Permission) { _cached_decoder_for_LIPA_Permission = $._decodeEnumerated; }
    return _cached_decoder_for_LIPA_Permission(el);
}

let _cached_encoder_for_LIPA_Permission: $.ASN1Encoder<LIPA_Permission> | null = null;

/**
 * @summary Encodes a(n) LIPA_Permission into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LIPA_Permission, encoded as an ASN.1 Element.
 */
export
function _encode_LIPA_Permission (value: LIPA_Permission, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LIPA_Permission) { _cached_encoder_for_LIPA_Permission = $._encodeEnumerated; }
    return _cached_encoder_for_LIPA_Permission(value, elGetter);
}


/* eslint-enable */
