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
 * @summary Actions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Actions  ::=  BIT STRING {
 *   owner-report(0), originator-on-previous-dl(1), secure-dl-operation(2)
 * }
 * ```
 */
export type Actions = BIT_STRING;

/**
 * @summary Actions_owner_report
 * @constant
 */
export const Actions_owner_report: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary owner_report
 * @constant
 */
export const owner_report: number = Actions_owner_report; /* SHORT_NAMED_BIT */

/**
 * @summary Actions_originator_on_previous_dl
 * @constant
 */
export const Actions_originator_on_previous_dl: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary originator_on_previous_dl
 * @constant
 */
export const originator_on_previous_dl: number = Actions_originator_on_previous_dl; /* SHORT_NAMED_BIT */

/**
 * @summary Actions_secure_dl_operation
 * @constant
 */
export const Actions_secure_dl_operation: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary secure_dl_operation
 * @constant
 */
export const secure_dl_operation: number = Actions_secure_dl_operation; /* SHORT_NAMED_BIT */


export const _decode_Actions = $._decodeBitString;


export const _encode_Actions = $._encodeBitString;


/* eslint-enable */
