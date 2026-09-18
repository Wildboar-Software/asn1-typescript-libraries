/* eslint-disable */
import {
    INTEGER,
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
 * @summary EXQcontent_exceptionType_stdException
 * @description
 *
 * Standard exception codes of VT-P-EXCEPTION-REQ. ISO/IEC
 * 9041-1:1997 §6.26.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EXQcontent-exceptionType-stdException ::= INTEGER {
 *     rioFull (0),
 *     tooManyFields (1),
 *     tooManyFieldElements (2),
 *     tooManyFERs (3),
 *     tooManyFEIs (4)
 * }
 * ```
 */
export
type EXQcontent_exceptionType_stdException = INTEGER;

/**
 * @summary EXQcontent_exceptionType_stdException_rioFull
 * @description
 * `"RIO or temporary buffer full"` (0). ISO/IEC 9041-1:1997
 * §6.26.
 * @constant
 * @type {number}
 */
export
const EXQcontent_exceptionType_stdException_rioFull: EXQcontent_exceptionType_stdException = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EXQcontent_exceptionType_stdException_rioFull
 * @description
 * `"RIO or temporary buffer full"` (0). ISO/IEC 9041-1:1997
 * §6.26.
 * @constant
 * @type {number}
 */
export
const rioFull: EXQcontent_exceptionType_stdException = EXQcontent_exceptionType_stdException_rioFull; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EXQcontent_exceptionType_stdException_tooManyFields
 * @description
 * `"too many fields"` (1). ISO/IEC 9041-1:1997 §6.26.
 * @constant
 * @type {number}
 */
export
const EXQcontent_exceptionType_stdException_tooManyFields: EXQcontent_exceptionType_stdException = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EXQcontent_exceptionType_stdException_tooManyFields
 * @description
 * `"too many fields"` (1). ISO/IEC 9041-1:1997 §6.26.
 * @constant
 * @type {number}
 */
export
const tooManyFields: EXQcontent_exceptionType_stdException = EXQcontent_exceptionType_stdException_tooManyFields; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EXQcontent_exceptionType_stdException_tooManyFieldElements
 * @description
 * `"too many field elements"` (2). ISO/IEC 9041-1:1997
 * §6.26.
 * @constant
 * @type {number}
 */
export
const EXQcontent_exceptionType_stdException_tooManyFieldElements: EXQcontent_exceptionType_stdException = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EXQcontent_exceptionType_stdException_tooManyFieldElements
 * @description
 * `"too many field elements"` (2). ISO/IEC 9041-1:1997
 * §6.26.
 * @constant
 * @type {number}
 */
export
const tooManyFieldElements: EXQcontent_exceptionType_stdException = EXQcontent_exceptionType_stdException_tooManyFieldElements; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EXQcontent_exceptionType_stdException_tooManyFERs
 * @description
 * `"too many FERs"` (3). ISO/IEC 9041-1:1997 §6.26.
 * @constant
 * @type {number}
 */
export
const EXQcontent_exceptionType_stdException_tooManyFERs: EXQcontent_exceptionType_stdException = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EXQcontent_exceptionType_stdException_tooManyFERs
 * @description
 * `"too many FERs"` (3). ISO/IEC 9041-1:1997 §6.26.
 * @constant
 * @type {number}
 */
export
const tooManyFERs: EXQcontent_exceptionType_stdException = EXQcontent_exceptionType_stdException_tooManyFERs; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EXQcontent_exceptionType_stdException_tooManyFEIs
 * @description
 * `"too many FEIs"` (4). ISO/IEC 9041-1:1997 §6.26.
 * @constant
 * @type {number}
 */
export
const EXQcontent_exceptionType_stdException_tooManyFEIs: EXQcontent_exceptionType_stdException = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EXQcontent_exceptionType_stdException_tooManyFEIs
 * @description
 * `"too many FEIs"` (4). ISO/IEC 9041-1:1997 §6.26.
 * @constant
 * @type {number}
 */
export
const tooManyFEIs: EXQcontent_exceptionType_stdException = EXQcontent_exceptionType_stdException_tooManyFEIs; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EXQcontent_exceptionType_stdException = $._decodeInteger;
export const _encode_EXQcontent_exceptionType_stdException = $._encodeInteger;


/* eslint-enable */
