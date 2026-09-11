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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UtranBaroPressureMeas
 * @description
 *
 * INTEGER (30000..115000) barometric pressure as in 3GPP TS 25.413 (3GPP TS
 * 29.002 V19.1.0 clauses 7.6.11.11F and 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UtranBaroPressureMeas  ::=  INTEGER (30000..115000)
 * ```
 */
export
type UtranBaroPressureMeas = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) UtranBaroPressureMeas
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UtranBaroPressureMeas = (el: _Element): UtranBaroPressureMeas => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 30000 || n > 115000) {
        throw new ASN1OverflowError("UtranBaroPressureMeas violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) UtranBaroPressureMeas into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UtranBaroPressureMeas, encoded as an ASN.1 Element.
 */
export const _encode_UtranBaroPressureMeas = $._encodeInteger;


/* eslint-enable */
