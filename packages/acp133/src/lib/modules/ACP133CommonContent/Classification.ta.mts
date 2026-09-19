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
 * @summary Classification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Classification  ::=  ENUMERATED {
 *     unmarked(0),
 *     unclassified(1),
 *     restricted(2),
 *     confidential(3),
 *     secret(4),
 *     top-secret(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Classification {
    unmarked = 0,
    unclassified = 1,
    restricted = 2,
    confidential = 3,
    secret = 4,
    top_secret = 5,
}

/**
 * @summary Classification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Classification  ::=  ENUMERATED {
 *     unmarked(0),
 *     unclassified(1),
 *     restricted(2),
 *     confidential(3),
 *     secret(4),
 *     top-secret(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Classification = _enum_for_Classification;

/**
 * @summary Classification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Classification  ::=  ENUMERATED {
 *     unmarked(0),
 *     unclassified(1),
 *     restricted(2),
 *     confidential(3),
 *     secret(4),
 *     top-secret(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Classification = _enum_for_Classification;

/**
 * @summary Classification_unmarked
 * @constant
 * @type {number}
 */
export
const Classification_unmarked: Classification = Classification.unmarked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unmarked
 * @constant
 * @type {number}
 */
export
const unmarked: Classification = Classification.unmarked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Classification_unclassified
 * @constant
 * @type {number}
 */
export
const Classification_unclassified: Classification = Classification.unclassified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unclassified
 * @constant
 * @type {number}
 */
export
const unclassified: Classification = Classification.unclassified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Classification_restricted
 * @constant
 * @type {number}
 */
export
const Classification_restricted: Classification = Classification.restricted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary restricted
 * @constant
 * @type {number}
 */
export
const restricted: Classification = Classification.restricted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Classification_confidential
 * @constant
 * @type {number}
 */
export
const Classification_confidential: Classification = Classification.confidential; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confidential
 * @constant
 * @type {number}
 */
export
const confidential: Classification = Classification.confidential; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Classification_secret
 * @constant
 * @type {number}
 */
export
const Classification_secret: Classification = Classification.secret; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary secret
 * @constant
 * @type {number}
 */
export
const secret: Classification = Classification.secret; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Classification_top_secret
 * @constant
 * @type {number}
 */
export
const Classification_top_secret: Classification = Classification.top_secret; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary top_secret
 * @constant
 * @type {number}
 */
export
const top_secret: Classification = Classification.top_secret; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Classification: $.ASN1Decoder<Classification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Classification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Classification (el: _Element): Classification {
    if (!_cached_decoder_for_Classification) { _cached_decoder_for_Classification = $._decodeEnumerated; }
    return _cached_decoder_for_Classification(el);
}

let _cached_encoder_for_Classification: $.ASN1Encoder<Classification> | null = null;

/**
 * @summary Encodes a(n) Classification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Classification, encoded as an ASN.1 Element.
 */
export
function _encode_Classification (value: Classification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Classification) { _cached_encoder_for_Classification = $._encodeEnumerated; }
    return _cached_encoder_for_Classification(value, elGetter);
}


/* eslint-enable */
