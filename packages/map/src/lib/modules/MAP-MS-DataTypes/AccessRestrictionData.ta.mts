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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessRestrictionData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessRestrictionData  ::=  BIT STRING {
 *     utranNotAllowed (0),
 *     geranNotAllowed (1),
 *     ganNotAllowed   (2),
 *     i-hspa-evolutionNotAllowed (3),
 *     wb-e-utranNotAllowed (4),
 *     ho-toNon3GPP-AccessNotAllowed (5),
 *     nb-iotNotAllowed (6),
 *     enhancedCoverageNotAllowed (7) } (SIZE (2..8))
 * ```
 */
export
type AccessRestrictionData = BIT_STRING;

/**
 * @summary AccessRestrictionData_utranNotAllowed
 * @constant
 */
export
const AccessRestrictionData_utranNotAllowed: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary utranNotAllowed
 * @constant
 */
export
const utranNotAllowed: number = AccessRestrictionData_utranNotAllowed; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRestrictionData_geranNotAllowed
 * @constant
 */
export
const AccessRestrictionData_geranNotAllowed: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary geranNotAllowed
 * @constant
 */
export
const geranNotAllowed: number = AccessRestrictionData_geranNotAllowed; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRestrictionData_ganNotAllowed
 * @constant
 */
export
const AccessRestrictionData_ganNotAllowed: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ganNotAllowed
 * @constant
 */
export
const ganNotAllowed: number = AccessRestrictionData_ganNotAllowed; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRestrictionData_i_hspa_evolutionNotAllowed
 * @constant
 */
export
const AccessRestrictionData_i_hspa_evolutionNotAllowed: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary i_hspa_evolutionNotAllowed
 * @constant
 */
export
const i_hspa_evolutionNotAllowed: number = AccessRestrictionData_i_hspa_evolutionNotAllowed; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRestrictionData_wb_e_utranNotAllowed
 * @constant
 */
export
const AccessRestrictionData_wb_e_utranNotAllowed: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary wb_e_utranNotAllowed
 * @constant
 */
export
const wb_e_utranNotAllowed: number = AccessRestrictionData_wb_e_utranNotAllowed; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRestrictionData_ho_toNon3GPP_AccessNotAllowed
 * @constant
 */
export
const AccessRestrictionData_ho_toNon3GPP_AccessNotAllowed: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary ho_toNon3GPP_AccessNotAllowed
 * @constant
 */
export
const ho_toNon3GPP_AccessNotAllowed: number = AccessRestrictionData_ho_toNon3GPP_AccessNotAllowed; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRestrictionData_nb_iotNotAllowed
 * @constant
 */
export
const AccessRestrictionData_nb_iotNotAllowed: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary nb_iotNotAllowed
 * @constant
 */
export
const nb_iotNotAllowed: number = AccessRestrictionData_nb_iotNotAllowed; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRestrictionData_enhancedCoverageNotAllowed
 * @constant
 */
export
const AccessRestrictionData_enhancedCoverageNotAllowed: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary enhancedCoverageNotAllowed
 * @constant
 */
export
const enhancedCoverageNotAllowed: number = AccessRestrictionData_enhancedCoverageNotAllowed; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) AccessRestrictionData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AccessRestrictionData = (el: _Element): AccessRestrictionData => {
    const value = $._decodeBitString(el);
    if (value.length < 2 || value.length > 8) {
        throw new ASN1SizeError("AccessRestrictionData violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) AccessRestrictionData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessRestrictionData, encoded as an ASN.1 Element.
 */
export const _encode_AccessRestrictionData = $._encodeBitString;


/* eslint-enable */
