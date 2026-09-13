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



export
enum _enum_for_FamilyGrouping {
    entryOnly = 1,
    compoundEntry = 2,
    strands = 3,
    multiStrand = 4,
}

/**
 * @summary FamilyGrouping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FamilyGrouping  ::=  ENUMERATED {
 *   entryOnly     (1),
 *   compoundEntry (2),
 *   strands       (3),
 *   multiStrand   (4),
 *   ... }
 * ```
 * 
 * @enum {number}
 */
export
type FamilyGrouping = _enum_for_FamilyGrouping | ENUMERATED;

/**
 * @summary FamilyGrouping_entryOnly
 * @constant
 * @type {number}
 */
export
const FamilyGrouping_entryOnly: FamilyGrouping = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary entryOnly
 * @constant
 * @type {number}
 */
export
const entryOnly: FamilyGrouping = FamilyGrouping_entryOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FamilyGrouping_compoundEntry
 * @constant
 * @type {number}
 */
export
const FamilyGrouping_compoundEntry: FamilyGrouping = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary compoundEntry
 * @constant
 * @type {number}
 */
export
const compoundEntry: FamilyGrouping = FamilyGrouping_compoundEntry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FamilyGrouping_strands
 * @constant
 * @type {number}
 */
export
const FamilyGrouping_strands: FamilyGrouping = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary strands
 * @constant
 * @type {number}
 */
export
const strands: FamilyGrouping = FamilyGrouping_strands; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FamilyGrouping_multiStrand
 * @constant
 * @type {number}
 */
export
const FamilyGrouping_multiStrand: FamilyGrouping = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiStrand
 * @constant
 * @type {number}
 */
export
const multiStrand: FamilyGrouping = FamilyGrouping_multiStrand; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_FamilyGrouping: $.ASN1Decoder<FamilyGrouping> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FamilyGrouping
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FamilyGrouping (el: _Element): FamilyGrouping {
    if (!_cached_decoder_for_FamilyGrouping) { _cached_decoder_for_FamilyGrouping = $._decodeEnumerated; }
    return _cached_decoder_for_FamilyGrouping(el);
}

let _cached_encoder_for_FamilyGrouping: $.ASN1Encoder<FamilyGrouping> | null = null;

/**
 * @summary Encodes a(n) FamilyGrouping into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FamilyGrouping, encoded as an ASN.1 Element.
 */
export
function _encode_FamilyGrouping (value: FamilyGrouping, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FamilyGrouping) { _cached_encoder_for_FamilyGrouping = $._encodeEnumerated; }
    return _cached_encoder_for_FamilyGrouping(value, elGetter);
}


/* eslint-enable */
