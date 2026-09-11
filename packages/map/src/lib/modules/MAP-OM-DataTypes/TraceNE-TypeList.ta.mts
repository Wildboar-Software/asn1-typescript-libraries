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
 * @summary TraceNE_TypeList
 * @description
 *
 * NEs to be traced. SIZE (6..16). Other bits than listed shall be discarded
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.10.6 and 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceNE-TypeList  ::=  BIT STRING {
 *     msc-s (0),
 *     mgw (1),
 *     sgsn (2),
 *     ggsn (3),
 *     rnc (4),
 *     bm-sc (5) ,
 *     mme (6),
 *     sgw (7),
 *     pgw (8),
 *     eNB (9)} (SIZE (6..16))
 * ```
 */
export
type TraceNE_TypeList = BIT_STRING;

/**
 * @summary TraceNE_TypeList_msc_s
 * @description
 *
 * `msc-s (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 */
export
const TraceNE_TypeList_msc_s: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary msc_s
 * @description
 *
 * `msc-s (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 */
export
const msc_s: number = TraceNE_TypeList_msc_s; /* SHORT_NAMED_BIT */

/**
 * @summary TraceNE_TypeList_mgw
 * @description
 *
 * `mgw (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 */
export
const TraceNE_TypeList_mgw: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mgw
 * @description
 *
 * `mgw (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 */
export
const mgw: number = TraceNE_TypeList_mgw; /* SHORT_NAMED_BIT */

/**
 * @summary TraceNE_TypeList_sgsn
 * @description
 *
 * `sgsn (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 */
export
const TraceNE_TypeList_sgsn: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary sgsn
 * @description
 *
 * `sgsn (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 */
export
const sgsn: number = TraceNE_TypeList_sgsn; /* SHORT_NAMED_BIT */

/**
 * @summary TraceNE_TypeList_ggsn
 * @description
 *
 * `ggsn (3)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 */
export
const TraceNE_TypeList_ggsn: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ggsn
 * @description
 *
 * `ggsn (3)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 */
export
const ggsn: number = TraceNE_TypeList_ggsn; /* SHORT_NAMED_BIT */

/**
 * @summary TraceNE_TypeList_rnc
 * @description
 *
 * `rnc (4)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 */
export
const TraceNE_TypeList_rnc: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary rnc
 * @description
 *
 * `rnc (4)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 */
export
const rnc: number = TraceNE_TypeList_rnc; /* SHORT_NAMED_BIT */

/**
 * @summary TraceNE_TypeList_bm_sc
 * @description
 *
 * `bm-sc (5)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 */
export
const TraceNE_TypeList_bm_sc: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary bm_sc
 * @description
 *
 * `bm-sc (5)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 */
export
const bm_sc: number = TraceNE_TypeList_bm_sc; /* SHORT_NAMED_BIT */

/**
 * @summary TraceNE_TypeList_mme
 * @description
 *
 * `mme (6)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 */
export
const TraceNE_TypeList_mme: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary mme
 * @description
 *
 * `mme (6)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 */
export
const mme: number = TraceNE_TypeList_mme; /* SHORT_NAMED_BIT */

/**
 * @summary TraceNE_TypeList_sgw
 * @description
 *
 * `sgw (7)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 */
export
const TraceNE_TypeList_sgw: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary sgw
 * @description
 *
 * `sgw (7)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 */
export
const sgw: number = TraceNE_TypeList_sgw; /* SHORT_NAMED_BIT */

/**
 * @summary TraceNE_TypeList_pgw
 * @description
 *
 * `pgw (8)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 */
export
const TraceNE_TypeList_pgw: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary pgw
 * @description
 *
 * `pgw (8)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 */
export
const pgw: number = TraceNE_TypeList_pgw; /* SHORT_NAMED_BIT */

/**
 * @summary TraceNE_TypeList_eNB
 * @description
 *
 * `eNB (9)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 */
export
const TraceNE_TypeList_eNB: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary eNB
 * @description
 *
 * `eNB (9)` (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * @constant
 */
export
const eNB: number = TraceNE_TypeList_eNB; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) TraceNE_TypeList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TraceNE_TypeList = (el: _Element): TraceNE_TypeList => {
    const value = $._decodeBitString(el);
    if (value.length < 6 || value.length > 16) {
        throw new ASN1SizeError("TraceNE_TypeList violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) TraceNE_TypeList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceNE_TypeList, encoded as an ASN.1 Element.
 */
export const _encode_TraceNE_TypeList = $._encodeBitString;


/* eslint-enable */
