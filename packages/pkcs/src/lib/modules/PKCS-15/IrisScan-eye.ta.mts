/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary IrisScan_eye
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IrisScan-eye ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_IrisScan_eye {
    left = 0,
    right = 1,
}


/**
 * @summary IrisScan_eye
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IrisScan-eye ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type IrisScan_eye = _enum_for_IrisScan_eye;


/**
 * @summary IrisScan_eye
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IrisScan-eye ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const IrisScan_eye = _enum_for_IrisScan_eye;


/**
 * @summary IrisScan_eye_left
 * @constant
 * @type {number}
 */
export const IrisScan_eye_left: IrisScan_eye =
    IrisScan_eye.left; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary left
 * @constant
 * @type {number}
 */
export const left: IrisScan_eye =
    IrisScan_eye.left; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary IrisScan_eye_right
 * @constant
 * @type {number}
 */
export const IrisScan_eye_right: IrisScan_eye =
    IrisScan_eye.right; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary right
 * @constant
 * @type {number}
 */
export const right: IrisScan_eye =
    IrisScan_eye.right; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_IrisScan_eye = $._decodeEnumerated;




export const _encode_IrisScan_eye = $._encodeEnumerated;


/* eslint-enable */
