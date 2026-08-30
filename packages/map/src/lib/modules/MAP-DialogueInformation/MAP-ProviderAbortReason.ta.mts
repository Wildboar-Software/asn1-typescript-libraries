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
 * @summary MAP_ProviderAbortReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MAP-ProviderAbortReason  ::=  ENUMERATED {
 *     abnormalDialogue  (0),
 *     invalidPDU  (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MAP_ProviderAbortReason {
    abnormalDialogue = 0,
    invalidPDU = 1,
}

/**
 * @summary MAP_ProviderAbortReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MAP-ProviderAbortReason  ::=  ENUMERATED {
 *     abnormalDialogue  (0),
 *     invalidPDU  (1)}
 * ```
 * 
 * @enum {number}
 */
export
type MAP_ProviderAbortReason = _enum_for_MAP_ProviderAbortReason;

/**
 * @summary MAP_ProviderAbortReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MAP-ProviderAbortReason  ::=  ENUMERATED {
 *     abnormalDialogue  (0),
 *     invalidPDU  (1)}
 * ```
 * 
 * @enum {number}
 */
export
const MAP_ProviderAbortReason = _enum_for_MAP_ProviderAbortReason;

/**
 * @summary MAP_ProviderAbortReason_abnormalDialogue
 * @constant
 * @type {number}
 */
export
const MAP_ProviderAbortReason_abnormalDialogue: MAP_ProviderAbortReason = MAP_ProviderAbortReason.abnormalDialogue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abnormalDialogue
 * @constant
 * @type {number}
 */
export
const abnormalDialogue: MAP_ProviderAbortReason = MAP_ProviderAbortReason.abnormalDialogue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MAP_ProviderAbortReason_invalidPDU
 * @constant
 * @type {number}
 */
export
const MAP_ProviderAbortReason_invalidPDU: MAP_ProviderAbortReason = MAP_ProviderAbortReason.invalidPDU; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidPDU
 * @constant
 * @type {number}
 */
export
const invalidPDU: MAP_ProviderAbortReason = MAP_ProviderAbortReason.invalidPDU; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) MAP_ProviderAbortReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MAP_ProviderAbortReason = $._decodeEnumerated;

/**
 * @summary Encodes a(n) MAP_ProviderAbortReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MAP_ProviderAbortReason, encoded as an ASN.1 Element.
 */
export const _encode_MAP_ProviderAbortReason = $._encodeEnumerated;


/* eslint-enable */
