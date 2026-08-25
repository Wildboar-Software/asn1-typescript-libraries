/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary OtherActions
 * @description
 *
 * Recorded on current `trace-information` / `internal-trace-information` (ITU-T X.411
 * (1999), §12 and §14). If the other bit is already indicated, a new trace element is
 * created rather than overwriting.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherActions  ::=  BIT STRING {redirected(0), dl-operation(1)
 * }(SIZE (0..ub-bit-options))
 * ```
 */
export type OtherActions = BIT_STRING;

/**
 * @summary OtherActions_redirected
 * @description
 *
 * Indicated when the message is redirected. If `dl-operation` is already indicated on the
 * current trace element, a new trace element is created.
 *
 * @constant
 */
export const OtherActions_redirected: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary redirected
 * @description
 *
 * Indicated when the message is redirected. If `dl-operation` is already indicated on the
 * current trace element, a new trace element is created.
 *
 * @constant
 */
export const redirected: number = OtherActions_redirected; /* SHORT_NAMED_BIT */

/**
 * @summary OtherActions_dl_operation
 * @description
 *
 * Indicated when DL expansion occurs. If `redirected` is already indicated on the current
 * trace element, a new trace element is created.
 *
 * @constant
 */
export const OtherActions_dl_operation: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary dl_operation
 * @description
 *
 * Indicated when DL expansion occurs. If `redirected` is already indicated on the current
 * trace element, a new trace element is created.
 *
 * @constant
 */
export const dl_operation: number = OtherActions_dl_operation; /* SHORT_NAMED_BIT */


export const _decode_OtherActions = $._decodeBitString;


export const _encode_OtherActions = $._encodeBitString;


/* eslint-enable */
