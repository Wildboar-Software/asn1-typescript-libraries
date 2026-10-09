/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Acp127NotificationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Acp127NotificationType  ::=  BIT STRING {
 *   acp127-nn(0), -- negative notification
 *   acp127-pn(1), -- positive notification
 *   acp127-tn(2)}
 * ```
 */
export
type Acp127NotificationType = BIT_STRING;

/**
 * @summary Acp127NotificationType_acp127_nn
 * @constant
 */
export
const Acp127NotificationType_acp127_nn: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary acp127_nn
 * @constant
 */
export
const acp127_nn: number = Acp127NotificationType_acp127_nn; /* SHORT_NAMED_BIT */

/**
 * @summary Acp127NotificationType_acp127_pn
 * @constant
 */
export
const Acp127NotificationType_acp127_pn: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary acp127_pn
 * @constant
 */
export
const acp127_pn: number = Acp127NotificationType_acp127_pn; /* SHORT_NAMED_BIT */

/**
 * @summary Acp127NotificationType_acp127_tn
 * @constant
 */
export
const Acp127NotificationType_acp127_tn: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary acp127_tn
 * @constant
 */
export
const acp127_tn: number = Acp127NotificationType_acp127_tn; /* SHORT_NAMED_BIT */
export const _decode_Acp127NotificationType = $._decodeBitString;
export const _encode_Acp127NotificationType = $._encodeBitString;


/* eslint-enable */
