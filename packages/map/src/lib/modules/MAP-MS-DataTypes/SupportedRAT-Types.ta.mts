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
 * @summary SupportedRAT_Types
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedRAT-Types ::=  BIT STRING {
 *     utran  (0),
 *     geran  (1),
 *     gan    (2),
 *     i-hspa-evolution (3),
 *     e-utran    (4),
 *     nb-iot    (5)} (SIZE (2..8))
 * ```
 */
export
type SupportedRAT_Types = BIT_STRING;

/**
 * @summary SupportedRAT_Types_utran
 * @constant
 */
export
const SupportedRAT_Types_utran: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary utran
 * @constant
 */
export
const utran: number = SupportedRAT_Types_utran; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedRAT_Types_geran
 * @constant
 */
export
const SupportedRAT_Types_geran: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary geran
 * @constant
 */
export
const geran: number = SupportedRAT_Types_geran; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedRAT_Types_gan
 * @constant
 */
export
const SupportedRAT_Types_gan: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary gan
 * @constant
 */
export
const gan: number = SupportedRAT_Types_gan; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedRAT_Types_i_hspa_evolution
 * @constant
 */
export
const SupportedRAT_Types_i_hspa_evolution: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary i_hspa_evolution
 * @constant
 */
export
const i_hspa_evolution: number = SupportedRAT_Types_i_hspa_evolution; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedRAT_Types_e_utran
 * @constant
 */
export
const SupportedRAT_Types_e_utran: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary e_utran
 * @constant
 */
export
const e_utran: number = SupportedRAT_Types_e_utran; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedRAT_Types_nb_iot
 * @constant
 */
export
const SupportedRAT_Types_nb_iot: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary nb_iot
 * @constant
 */
export
const nb_iot: number = SupportedRAT_Types_nb_iot; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SupportedRAT_Types: $.ASN1Decoder<SupportedRAT_Types> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedRAT_Types
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SupportedRAT_Types (el: _Element): SupportedRAT_Types {
    if (!_cached_decoder_for_SupportedRAT_Types) { _cached_decoder_for_SupportedRAT_Types = $._decodeBitString; }
    return _cached_decoder_for_SupportedRAT_Types(el);
}

let _cached_encoder_for_SupportedRAT_Types: $.ASN1Encoder<SupportedRAT_Types> | null = null;

/**
 * @summary Encodes a(n) SupportedRAT_Types into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedRAT_Types, encoded as an ASN.1 Element.
 */
export
function _encode_SupportedRAT_Types (value: SupportedRAT_Types, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SupportedRAT_Types) { _cached_encoder_for_SupportedRAT_Types = $._encodeBitString; }
    return _cached_encoder_for_SupportedRAT_Types(value, elGetter);
}


/* eslint-enable */
