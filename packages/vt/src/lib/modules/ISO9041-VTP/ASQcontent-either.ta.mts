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
 * @summary ASQcontent_either
 * @description
 *
 * Mode selected when VT-mode is `"either-A"` or `"either-S"`.
 * S-mode: one DO, WAVAR token. A-mode: two DOs (WACI
 * initiator / WACA acceptor), no WAVAR. ISO/IEC 9040:1997
 * §8. ISO/IEC 9041-1:1997 §6.2, §12.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASQcontent-either ::= INTEGER { a-mode (0), s-mode (1) }
 * ```
 */
export
type ASQcontent_either = INTEGER;

/**
 * @summary ASQcontent_either_a_mode
 * @description
 * A-mode (0). Two DOs (WACI initiator / WACA acceptor), no
 * WAVAR. ISO/IEC 9040:1997 §8.
 * @constant
 * @type {number}
 */
export
const ASQcontent_either_a_mode: ASQcontent_either = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASQcontent_either_a_mode
 * @description
 * A-mode (0). Two DOs (WACI initiator / WACA acceptor), no
 * WAVAR. ISO/IEC 9040:1997 §8.
 * @constant
 * @type {number}
 */
export
const a_mode: ASQcontent_either = ASQcontent_either_a_mode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ASQcontent_either_s_mode
 * @description
 * S-mode (1). One DO, WAVAR token. ISO/IEC 9040:1997 §8.
 * @constant
 * @type {number}
 */
export
const ASQcontent_either_s_mode: ASQcontent_either = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASQcontent_either_s_mode
 * @description
 * S-mode (1). One DO, WAVAR token. ISO/IEC 9040:1997 §8.
 * @constant
 * @type {number}
 */
export
const s_mode: ASQcontent_either = ASQcontent_either_s_mode; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ASQcontent_either = $._decodeInteger;
export const _encode_ASQcontent_either = $._encodeInteger;


/* eslint-enable */
