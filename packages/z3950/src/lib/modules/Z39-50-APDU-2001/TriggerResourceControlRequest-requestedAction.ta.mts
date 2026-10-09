/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TriggerResourceControlRequest_requestedAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerResourceControlRequest-requestedAction ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type TriggerResourceControlRequest_requestedAction = INTEGER;

/**
 * @summary TriggerResourceControlRequest_requestedAction_resourceReport
 * @constant
 * @type {number}
 */
export
const TriggerResourceControlRequest_requestedAction_resourceReport: TriggerResourceControlRequest_requestedAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TriggerResourceControlRequest_requestedAction_resourceReport
 * @constant
 * @type {number}
 */
export
const resourceReport: TriggerResourceControlRequest_requestedAction = TriggerResourceControlRequest_requestedAction_resourceReport; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TriggerResourceControlRequest_requestedAction_resourceControl
 * @constant
 * @type {number}
 */
export
const TriggerResourceControlRequest_requestedAction_resourceControl: TriggerResourceControlRequest_requestedAction = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TriggerResourceControlRequest_requestedAction_resourceControl
 * @constant
 * @type {number}
 */
export
const resourceControl: TriggerResourceControlRequest_requestedAction = TriggerResourceControlRequest_requestedAction_resourceControl; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TriggerResourceControlRequest_requestedAction_cancel
 * @constant
 * @type {number}
 */
export
const TriggerResourceControlRequest_requestedAction_cancel: TriggerResourceControlRequest_requestedAction = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TriggerResourceControlRequest_requestedAction_cancel
 * @constant
 * @type {number}
 */
export
const cancel: TriggerResourceControlRequest_requestedAction = TriggerResourceControlRequest_requestedAction_cancel; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_TriggerResourceControlRequest_requestedAction = $._decodeInteger;
export const _encode_TriggerResourceControlRequest_requestedAction = $._encodeInteger;


/* eslint-enable */
