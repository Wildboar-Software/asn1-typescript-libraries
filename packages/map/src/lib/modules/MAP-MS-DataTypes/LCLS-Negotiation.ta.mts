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
 * @summary LCLS_Negotiation
 * @description
 *
 * Requests MSC-B to indicate LCLS (3GPP TS 29.205 clause B.2.1.4). Allowed
 * combinations of bits 0 and 1 are in 3GPP TS 29.205. Bits 2-7 shall be ignored
 * if received and not understood. (3GPP TS 29.002 V19.1.0 clauses 7.6.5.22 and
 * 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCLS-Negotiation ::=  BIT STRING {
 *     permission-indicator-not-allowed-bit    (0),
 *     permission-indicator-spare-bit    (1)} (SIZE (2..8))
 * ```
 */
export
type LCLS_Negotiation = BIT_STRING;

/**
 * @summary LCLS_Negotiation_permission_indicator_not_allowed_bit
 * @description
 *
 * Permission-indicator not-allowed bit; combinations with bit 1 are in 3GPP TS
 * 29.205. (3GPP TS 29.002 V19.1.0 clauses 7.6.5.22 and 17.7.1)
 *
 * @constant
 */
export
const LCLS_Negotiation_permission_indicator_not_allowed_bit: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary permission_indicator_not_allowed_bit
 * @description
 *
 * Permission-indicator not-allowed bit; combinations with bit 1 are in 3GPP TS
 * 29.205. (3GPP TS 29.002 V19.1.0 clauses 7.6.5.22 and 17.7.1)
 *
 * @constant
 */
export
const permission_indicator_not_allowed_bit: number = LCLS_Negotiation_permission_indicator_not_allowed_bit; /* SHORT_NAMED_BIT */

/**
 * @summary LCLS_Negotiation_permission_indicator_spare_bit
 * @description
 *
 * Spare permission-indicator bit (3GPP TS 29.205). (3GPP TS 29.002 V19.1.0
 * clause 17.7.1)
 *
 * @constant
 */
export
const LCLS_Negotiation_permission_indicator_spare_bit: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary permission_indicator_spare_bit
 * @description
 *
 * Spare permission-indicator bit (3GPP TS 29.205). (3GPP TS 29.002 V19.1.0
 * clause 17.7.1)
 *
 * @constant
 */
export
const permission_indicator_spare_bit: number = LCLS_Negotiation_permission_indicator_spare_bit; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) LCLS_Negotiation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LCLS_Negotiation = (el: _Element): LCLS_Negotiation => {
    const value = $._decodeBitString(el);
    if (value.length < 2 || value.length > 8) {
        throw new ASN1SizeError("LCLS_Negotiation violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) LCLS_Negotiation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCLS_Negotiation, encoded as an ASN.1 Element.
 */
export const _encode_LCLS_Negotiation = $._encodeBitString;


/* eslint-enable */
