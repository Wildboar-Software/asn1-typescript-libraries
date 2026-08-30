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
 * @summary SIPTO_Permission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPTO-Permission  ::=  ENUMERATED {
 *     siptoAboveRanAllowed  (0),
 *     siptoAboveRanNotAllowed  (1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SIPTO_Permission {
    siptoAboveRanAllowed = 0,
    siptoAboveRanNotAllowed = 1,
}

/**
 * @summary SIPTO_Permission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPTO-Permission  ::=  ENUMERATED {
 *     siptoAboveRanAllowed  (0),
 *     siptoAboveRanNotAllowed  (1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type SIPTO_Permission = _enum_for_SIPTO_Permission;

/**
 * @summary SIPTO_Permission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPTO-Permission  ::=  ENUMERATED {
 *     siptoAboveRanAllowed  (0),
 *     siptoAboveRanNotAllowed  (1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const SIPTO_Permission = _enum_for_SIPTO_Permission;

/**
 * @summary SIPTO_Permission_siptoAboveRanAllowed
 * @constant
 * @type {number}
 */
export
const SIPTO_Permission_siptoAboveRanAllowed: SIPTO_Permission = SIPTO_Permission.siptoAboveRanAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary siptoAboveRanAllowed
 * @constant
 * @type {number}
 */
export
const siptoAboveRanAllowed: SIPTO_Permission = SIPTO_Permission.siptoAboveRanAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SIPTO_Permission_siptoAboveRanNotAllowed
 * @constant
 * @type {number}
 */
export
const SIPTO_Permission_siptoAboveRanNotAllowed: SIPTO_Permission = SIPTO_Permission.siptoAboveRanNotAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary siptoAboveRanNotAllowed
 * @constant
 * @type {number}
 */
export
const siptoAboveRanNotAllowed: SIPTO_Permission = SIPTO_Permission.siptoAboveRanNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SIPTO_Permission: $.ASN1Decoder<SIPTO_Permission> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SIPTO_Permission
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SIPTO_Permission (el: _Element): SIPTO_Permission {
    if (!_cached_decoder_for_SIPTO_Permission) { _cached_decoder_for_SIPTO_Permission = $._decodeEnumerated; }
    return _cached_decoder_for_SIPTO_Permission(el);
}

let _cached_encoder_for_SIPTO_Permission: $.ASN1Encoder<SIPTO_Permission> | null = null;

/**
 * @summary Encodes a(n) SIPTO_Permission into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIPTO_Permission, encoded as an ASN.1 Element.
 */
export
function _encode_SIPTO_Permission (value: SIPTO_Permission, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SIPTO_Permission) { _cached_encoder_for_SIPTO_Permission = $._encodeEnumerated; }
    return _cached_encoder_for_SIPTO_Permission(value, elGetter);
}


/* eslint-enable */
