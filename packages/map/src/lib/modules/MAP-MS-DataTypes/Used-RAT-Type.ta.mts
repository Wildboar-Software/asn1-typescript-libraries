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
enum _enum_for_Used_RAT_Type {
    utran = 0,
    geran = 1,
    gan = 2,
    i_hspa_evolution = 3,
    e_utran = 4,
    nb_iot = 5,
}

/**
 * @summary Used_RAT_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Used-RAT-Type ::=  ENUMERATED {
 *     utran  (0),
 *     geran  (1),
 *     gan    (2),
 *     i-hspa-evolution (3),
 *     e-utran    (4),
 *     ...,
 *     nb-iot    (5)}
 * ```
 * 
 * @enum {number}
 */
export
type Used_RAT_Type = _enum_for_Used_RAT_Type | ENUMERATED;

/**
 * @summary Used_RAT_Type_utran
 * @constant
 * @type {number}
 */
export
const Used_RAT_Type_utran: Used_RAT_Type = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary utran
 * @constant
 * @type {number}
 */
export
const utran: Used_RAT_Type = Used_RAT_Type_utran; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Used_RAT_Type_geran
 * @constant
 * @type {number}
 */
export
const Used_RAT_Type_geran: Used_RAT_Type = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary geran
 * @constant
 * @type {number}
 */
export
const geran: Used_RAT_Type = Used_RAT_Type_geran; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Used_RAT_Type_gan
 * @constant
 * @type {number}
 */
export
const Used_RAT_Type_gan: Used_RAT_Type = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gan
 * @constant
 * @type {number}
 */
export
const gan: Used_RAT_Type = Used_RAT_Type_gan; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Used_RAT_Type_i_hspa_evolution
 * @constant
 * @type {number}
 */
export
const Used_RAT_Type_i_hspa_evolution: Used_RAT_Type = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary i_hspa_evolution
 * @constant
 * @type {number}
 */
export
const i_hspa_evolution: Used_RAT_Type = Used_RAT_Type_i_hspa_evolution; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Used_RAT_Type_e_utran
 * @constant
 * @type {number}
 */
export
const Used_RAT_Type_e_utran: Used_RAT_Type = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_utran
 * @constant
 * @type {number}
 */
export
const e_utran: Used_RAT_Type = Used_RAT_Type_e_utran; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Used_RAT_Type_nb_iot
 * @constant
 * @type {number}
 */
export
const Used_RAT_Type_nb_iot: Used_RAT_Type = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nb_iot
 * @constant
 * @type {number}
 */
export
const nb_iot: Used_RAT_Type = Used_RAT_Type_nb_iot; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) Used_RAT_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Used_RAT_Type = $._decodeEnumerated;

/**
 * @summary Encodes a(n) Used_RAT_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Used_RAT_Type, encoded as an ASN.1 Element.
 */
export const _encode_Used_RAT_Type = $._encodeEnumerated;


/* eslint-enable */
