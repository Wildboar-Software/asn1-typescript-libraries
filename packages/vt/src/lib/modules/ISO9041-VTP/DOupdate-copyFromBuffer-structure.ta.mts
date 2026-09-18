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
 * @summary DOupdate_copyFromBuffer_structure
 * @description
 *
 * COPY-FROM-BUFFER `structure`. `none`(0), `x`(1), `xAndy`(2).
 * Absence of the field implies `none`.
 * ISO/IEC 9040:1997 §19.4.1.10.3; ISO/IEC 9041-1:1997 §12.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DOupdate-copyFromBuffer-structure ::= INTEGER { none (0), x (1), xAndy (2) }
 * ```
 */
export
type DOupdate_copyFromBuffer_structure = INTEGER;

/**
 * @summary DOupdate_copyFromBuffer_structure_none
 * @description
 *
 * `"none"`(0). Absence of `structure` implies this value.
 * ISO/IEC 9040:1997 §19.4.1.10.3.
 *
 * @constant
 * @type {number}
 */
export
const DOupdate_copyFromBuffer_structure_none: DOupdate_copyFromBuffer_structure = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DOupdate_copyFromBuffer_structure_none
 * @description
 *
 * `"none"`(0). Absence of `structure` implies this value.
 * ISO/IEC 9040:1997 §19.4.1.10.3.
 *
 * @constant
 * @type {number}
 */
export
const none: DOupdate_copyFromBuffer_structure = DOupdate_copyFromBuffer_structure_none; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DOupdate_copyFromBuffer_structure_x
 * @description
 *
 * `"x"`(1). ISO/IEC 9040:1997 §19.4.1.10.3.
 *
 * @constant
 * @type {number}
 */
export
const DOupdate_copyFromBuffer_structure_x: DOupdate_copyFromBuffer_structure = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DOupdate_copyFromBuffer_structure_x
 * @description
 *
 * `"x"`(1). ISO/IEC 9040:1997 §19.4.1.10.3.
 *
 * @constant
 * @type {number}
 */
export
const x: DOupdate_copyFromBuffer_structure = DOupdate_copyFromBuffer_structure_x; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DOupdate_copyFromBuffer_structure_xAndy
 * @description
 *
 * `"x and y"`(2). ISO/IEC 9040:1997 §19.4.1.10.3.
 *
 * @constant
 * @type {number}
 */
export
const DOupdate_copyFromBuffer_structure_xAndy: DOupdate_copyFromBuffer_structure = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DOupdate_copyFromBuffer_structure_xAndy
 * @description
 *
 * `"x and y"`(2). ISO/IEC 9040:1997 §19.4.1.10.3.
 *
 * @constant
 * @type {number}
 */
export
const xAndy: DOupdate_copyFromBuffer_structure = DOupdate_copyFromBuffer_structure_xAndy; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DOupdate_copyFromBuffer_structure = $._decodeInteger;
export const _encode_DOupdate_copyFromBuffer_structure = $._encodeInteger;


/* eslint-enable */
