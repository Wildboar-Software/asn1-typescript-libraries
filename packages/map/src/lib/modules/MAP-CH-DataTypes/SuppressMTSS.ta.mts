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
 * @summary SuppressMTSS
 * @description
 *
 * BIT STRING suppressCUG (0), suppressCCBS (1). Other bits discarded. Use and
 * presence as in 3GPP TS 23.078 (3GPP TS 29.002 V19.1.0 clauses 10.1.3 and
 * 17.7.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuppressMTSS  ::=  BIT STRING {
 *     suppressCUG    (0),
 *     suppressCCBS    (1) } (SIZE (2..16))
 * ```
 */
export
type SuppressMTSS = BIT_STRING;

/**
 * @summary SuppressMTSS_suppressCUG
 * @description
 *
 * `suppressCUG (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 */
export
const SuppressMTSS_suppressCUG: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary suppressCUG
 * @description
 *
 * `suppressCUG (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 */
export
const suppressCUG: number = SuppressMTSS_suppressCUG; /* SHORT_NAMED_BIT */

/**
 * @summary SuppressMTSS_suppressCCBS
 * @description
 *
 * `suppressCCBS (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 */
export
const SuppressMTSS_suppressCCBS: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary suppressCCBS
 * @description
 *
 * `suppressCCBS (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 */
export
const suppressCCBS: number = SuppressMTSS_suppressCCBS; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) SuppressMTSS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SuppressMTSS = (el: _Element): SuppressMTSS => {
    const value = $._decodeBitString(el);
    if (value.length < 2 || value.length > 16) {
        throw new ASN1SizeError("SuppressMTSS violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) SuppressMTSS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuppressMTSS, encoded as an ASN.1 Element.
 */
export const _encode_SuppressMTSS = $._encodeBitString;


/* eslint-enable */
