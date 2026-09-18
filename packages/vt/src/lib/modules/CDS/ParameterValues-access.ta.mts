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
 * Selected DO-access: `wavar`(0), `waci`(1), or `waca`(2) only. A
 * display object cannot have a combined access-rule. ISO/IEC
 * 9040:1997 §8, §9; ISO/IEC 9041-1:1997 §12.3.3.
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
 * @description
 *
 * WAVAR: current owner of the WAVAR token. S-mode single DO is
 * always WAVAR; A-mode has no WAVAR. ISO/IEC 9040:1997 §8, §9.
 * @constant
 * @type {number}
 */
export
const ParameterValues_access_wavar: ParameterValues_access = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary wavar
 * @description
 *
 * WAVAR: current owner of the WAVAR token. S-mode single DO is
 * always WAVAR; A-mode has no WAVAR. ISO/IEC 9040:1997 §8, §9.
 * @constant
 * @type {number}
 */
export
const wavar: ParameterValues_access = ParameterValues_access_wavar; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_access_waci
 * @description
 *
 * WACI: initiator of the VT-association. A-mode initiator DO uses
 * this. ISO/IEC 9040:1997 §8, §9.
 * @constant
 * @type {number}
 */
export
const ParameterValues_access_waci: ParameterValues_access = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary waci
 * @description
 *
 * WACI: initiator of the VT-association. A-mode initiator DO uses
 * this. ISO/IEC 9040:1997 §8, §9.
 * @constant
 * @type {number}
 */
export
const waci: ParameterValues_access = ParameterValues_access_waci; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_access_waca
 * @description
 *
 * WACA: acceptor of the VT-association. A-mode acceptor DO uses
 * this. ISO/IEC 9040:1997 §8, §9.
 * @constant
 * @type {number}
 */
export
const ParameterValues_access_waca: ParameterValues_access = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary waca
 * @description
 *
 * WACA: acceptor of the VT-association. A-mode acceptor DO uses
 * this. ISO/IEC 9040:1997 §8, §9.
 * @constant
 * @type {number}
 */
export
const waca: ParameterValues_access = ParameterValues_access_waca; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ParameterValues_access = $._decodeInteger;
export const _encode_ParameterValues_access = $._encodeInteger;


/* eslint-enable */
