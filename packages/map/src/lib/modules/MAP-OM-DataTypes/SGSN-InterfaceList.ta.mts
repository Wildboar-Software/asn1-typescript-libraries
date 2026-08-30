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
 * @summary SGSN_InterfaceList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGSN-InterfaceList  ::=  BIT STRING {
 *     gb (0),
 *     iu (1),
 *     gn (2),
 *     map-gr (3),
 *     map-gd (4),
 *     map-gf (5),
 *     gs (6),
 *     ge (7),
 *     s3 (8),
 *     s4 (9),
 *     s6d (10)} (SIZE (8..16))
 * ```
 */
export
type SGSN_InterfaceList = BIT_STRING;

/**
 * @summary SGSN_InterfaceList_gb
 * @constant
 */
export
const SGSN_InterfaceList_gb: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary gb
 * @constant
 */
export
const gb: number = SGSN_InterfaceList_gb; /* SHORT_NAMED_BIT */

/**
 * @summary SGSN_InterfaceList_iu
 * @constant
 */
export
const SGSN_InterfaceList_iu: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary iu
 * @constant
 */
export
const iu: number = SGSN_InterfaceList_iu; /* SHORT_NAMED_BIT */

/**
 * @summary SGSN_InterfaceList_gn
 * @constant
 */
export
const SGSN_InterfaceList_gn: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary gn
 * @constant
 */
export
const gn: number = SGSN_InterfaceList_gn; /* SHORT_NAMED_BIT */

/**
 * @summary SGSN_InterfaceList_map_gr
 * @constant
 */
export
const SGSN_InterfaceList_map_gr: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary map_gr
 * @constant
 */
export
const map_gr: number = SGSN_InterfaceList_map_gr; /* SHORT_NAMED_BIT */

/**
 * @summary SGSN_InterfaceList_map_gd
 * @constant
 */
export
const SGSN_InterfaceList_map_gd: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary map_gd
 * @constant
 */
export
const map_gd: number = SGSN_InterfaceList_map_gd; /* SHORT_NAMED_BIT */

/**
 * @summary SGSN_InterfaceList_map_gf
 * @constant
 */
export
const SGSN_InterfaceList_map_gf: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary map_gf
 * @constant
 */
export
const map_gf: number = SGSN_InterfaceList_map_gf; /* SHORT_NAMED_BIT */

/**
 * @summary SGSN_InterfaceList_gs
 * @constant
 */
export
const SGSN_InterfaceList_gs: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary gs
 * @constant
 */
export
const gs: number = SGSN_InterfaceList_gs; /* SHORT_NAMED_BIT */

/**
 * @summary SGSN_InterfaceList_ge
 * @constant
 */
export
const SGSN_InterfaceList_ge: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary ge
 * @constant
 */
export
const ge: number = SGSN_InterfaceList_ge; /* SHORT_NAMED_BIT */

/**
 * @summary SGSN_InterfaceList_s3
 * @constant
 */
export
const SGSN_InterfaceList_s3: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary s3
 * @constant
 */
export
const s3: number = SGSN_InterfaceList_s3; /* SHORT_NAMED_BIT */

/**
 * @summary SGSN_InterfaceList_s4
 * @constant
 */
export
const SGSN_InterfaceList_s4: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary s4
 * @constant
 */
export
const s4: number = SGSN_InterfaceList_s4; /* SHORT_NAMED_BIT */

/**
 * @summary SGSN_InterfaceList_s6d
 * @constant
 */
export
const SGSN_InterfaceList_s6d: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary s6d
 * @constant
 */
export
const s6d: number = SGSN_InterfaceList_s6d; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) SGSN_InterfaceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SGSN_InterfaceList = (el: _Element): SGSN_InterfaceList => {
    const value = $._decodeBitString(el);
    if (value.length < 8 || value.length > 16) {
        throw new ASN1SizeError("SGSN_InterfaceList violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) SGSN_InterfaceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SGSN_InterfaceList, encoded as an ASN.1 Element.
 */
export const _encode_SGSN_InterfaceList = $._encodeBitString;


/* eslint-enable */
