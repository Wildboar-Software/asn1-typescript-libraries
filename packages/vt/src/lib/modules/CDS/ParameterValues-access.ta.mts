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
 * @summary ParameterValues_access
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues-access ::= INTEGER { wavar (0), waci (1), waca (2) }
 * ```
 */
export
type ParameterValues_access = INTEGER;

/**
 * @summary ParameterValues_access_wavar
 * @constant
 * @type {number}
 */
export
const ParameterValues_access_wavar: ParameterValues_access = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_access_wavar
 * @constant
 * @type {number}
 */
export
const wavar: ParameterValues_access = ParameterValues_access_wavar; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_access_waci
 * @constant
 * @type {number}
 */
export
const ParameterValues_access_waci: ParameterValues_access = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_access_waci
 * @constant
 * @type {number}
 */
export
const waci: ParameterValues_access = ParameterValues_access_waci; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_access_waca
 * @constant
 * @type {number}
 */
export
const ParameterValues_access_waca: ParameterValues_access = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_access_waca
 * @constant
 * @type {number}
 */
export
const waca: ParameterValues_access = ParameterValues_access_waca; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ParameterValues_access = $._decodeInteger;
export const _encode_ParameterValues_access = $._encodeInteger;


/* eslint-enable */
