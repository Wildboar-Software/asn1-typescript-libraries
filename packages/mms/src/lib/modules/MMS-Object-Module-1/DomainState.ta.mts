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
 * @summary DomainState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DomainState  ::=  INTEGER {
 *     non-existent     (0),
 *     loading          (1),
 *     ready            (2),
 *     in-use           (3),
 *     complete         (4),
 *     incomplete       (5),
 *     d1               (7),
 *     d2               (8),
 *     d3               (9),
 *     d4               (10),
 *     d5               (11),
 *     d6               (12),
 *     d7               (13),
 *     d8               (14),
 *     d9               (15)
 * } (0..15)
 * ```
 */
export
type DomainState = INTEGER;

/**
 * @summary DomainState_non_existent
 * @constant
 * @type {number}
 */
export
const DomainState_non_existent: DomainState = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_non_existent
 * @constant
 * @type {number}
 */
export
const non_existent: DomainState = DomainState_non_existent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_loading
 * @constant
 * @type {number}
 */
export
const DomainState_loading: DomainState = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_loading
 * @constant
 * @type {number}
 */
export
const loading: DomainState = DomainState_loading; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_ready
 * @constant
 * @type {number}
 */
export
const DomainState_ready: DomainState = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_ready
 * @constant
 * @type {number}
 */
export
const ready: DomainState = DomainState_ready; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_in_use
 * @constant
 * @type {number}
 */
export
const DomainState_in_use: DomainState = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_in_use
 * @constant
 * @type {number}
 */
export
const in_use: DomainState = DomainState_in_use; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_complete
 * @constant
 * @type {number}
 */
export
const DomainState_complete: DomainState = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_complete
 * @constant
 * @type {number}
 */
export
const complete: DomainState = DomainState_complete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_incomplete
 * @constant
 * @type {number}
 */
export
const DomainState_incomplete: DomainState = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_incomplete
 * @constant
 * @type {number}
 */
export
const incomplete: DomainState = DomainState_incomplete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d1
 * @constant
 * @type {number}
 */
export
const DomainState_d1: DomainState = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d1
 * @constant
 * @type {number}
 */
export
const d1: DomainState = DomainState_d1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d2
 * @constant
 * @type {number}
 */
export
const DomainState_d2: DomainState = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d2
 * @constant
 * @type {number}
 */
export
const d2: DomainState = DomainState_d2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d3
 * @constant
 * @type {number}
 */
export
const DomainState_d3: DomainState = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d3
 * @constant
 * @type {number}
 */
export
const d3: DomainState = DomainState_d3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d4
 * @constant
 * @type {number}
 */
export
const DomainState_d4: DomainState = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d4
 * @constant
 * @type {number}
 */
export
const d4: DomainState = DomainState_d4; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d5
 * @constant
 * @type {number}
 */
export
const DomainState_d5: DomainState = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d5
 * @constant
 * @type {number}
 */
export
const d5: DomainState = DomainState_d5; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d6
 * @constant
 * @type {number}
 */
export
const DomainState_d6: DomainState = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d6
 * @constant
 * @type {number}
 */
export
const d6: DomainState = DomainState_d6; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d7
 * @constant
 * @type {number}
 */
export
const DomainState_d7: DomainState = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d7
 * @constant
 * @type {number}
 */
export
const d7: DomainState = DomainState_d7; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d8
 * @constant
 * @type {number}
 */
export
const DomainState_d8: DomainState = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d8
 * @constant
 * @type {number}
 */
export
const d8: DomainState = DomainState_d8; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d9
 * @constant
 * @type {number}
 */
export
const DomainState_d9: DomainState = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DomainState_d9
 * @constant
 * @type {number}
 */
export
const d9: DomainState = DomainState_d9; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DomainState = (el: _Element): DomainState => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 15) {
        throw new ASN1OverflowError("DomainState violates INTEGER range constraint");
    }
    return value;
};
export const _encode_DomainState = $._encodeInteger;


/* eslint-enable */
