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
 * @summary AdditionalSubscriptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalSubscriptions  ::=  BIT STRING {
 *     privilegedUplinkRequest (0),
 *     emergencyUplinkRequest (1),
 *     emergencyReset (2)} (SIZE (3..8))
 * ```
 */
export
type AdditionalSubscriptions = BIT_STRING;

/**
 * @summary AdditionalSubscriptions_privilegedUplinkRequest
 * @constant
 */
export
const AdditionalSubscriptions_privilegedUplinkRequest: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privilegedUplinkRequest
 * @constant
 */
export
const privilegedUplinkRequest: number = AdditionalSubscriptions_privilegedUplinkRequest; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSubscriptions_emergencyUplinkRequest
 * @constant
 */
export
const AdditionalSubscriptions_emergencyUplinkRequest: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary emergencyUplinkRequest
 * @constant
 */
export
const emergencyUplinkRequest: number = AdditionalSubscriptions_emergencyUplinkRequest; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSubscriptions_emergencyReset
 * @constant
 */
export
const AdditionalSubscriptions_emergencyReset: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary emergencyReset
 * @constant
 */
export
const emergencyReset: number = AdditionalSubscriptions_emergencyReset; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalSubscriptions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AdditionalSubscriptions = (el: _Element): AdditionalSubscriptions => {
    const value = $._decodeBitString(el);
    if (value.length < 3 || value.length > 8) {
        throw new ASN1SizeError("AdditionalSubscriptions violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) AdditionalSubscriptions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalSubscriptions, encoded as an ASN.1 Element.
 */
export const _encode_AdditionalSubscriptions = $._encodeBitString;


/* eslint-enable */
