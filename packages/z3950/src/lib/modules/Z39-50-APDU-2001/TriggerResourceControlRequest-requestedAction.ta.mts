/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TriggerResourceControlRequest_requestedAction
 * @description
 * 
 * Action the client asks for during an active operation (ANSI/NISO Z39.50-2003
 * §3.2.6.2.1). The server is not obliged to take it.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerResourceControlRequest-requestedAction ::= INTEGER {
 *     resourceReport (1),
 *     resourceControl (2),
 *     cancel (3)
 * }
 * ```
 */
export
type TriggerResourceControlRequest_requestedAction = INTEGER;

/**
 * @summary TriggerResourceControlRequest_requestedAction_resourceReport
 * @description
 * 
 * Ask the server to send a Resource-control request with response-required off
 * (ANSI/NISO Z39.50-2003 §3.2.6.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const TriggerResourceControlRequest_requestedAction_resourceReport: TriggerResourceControlRequest_requestedAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TriggerResourceControlRequest_requestedAction_resourceReport
 * @description
 * 
 * Short name for
 * `TriggerResourceControlRequest_requestedAction_resourceReport`. Request a
 * report and no response (§3.2.6.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const resourceReport: TriggerResourceControlRequest_requestedAction = TriggerResourceControlRequest_requestedAction_resourceReport; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TriggerResourceControlRequest_requestedAction_resourceControl
 * @description
 * 
 * Ask the server to send a Resource-control request with response-required on
 * (ANSI/NISO Z39.50-2003 §3.2.6.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const TriggerResourceControlRequest_requestedAction_resourceControl: TriggerResourceControlRequest_requestedAction = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TriggerResourceControlRequest_requestedAction_resourceControl
 * @description
 * 
 * Short name for
 * `TriggerResourceControlRequest_requestedAction_resourceControl`. Request full
 * resource control (§3.2.6.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const resourceControl: TriggerResourceControlRequest_requestedAction = TriggerResourceControlRequest_requestedAction_resourceControl; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TriggerResourceControlRequest_requestedAction_cancel
 * @description
 * 
 * Ask the server to terminate the operation (ANSI/NISO Z39.50-2003 §3.2.6.2.1).
 * If the server honors this, the terminating response indicates termination at
 * client request.
 * 
 * @constant
 * @type {number}
 */
export
const TriggerResourceControlRequest_requestedAction_cancel: TriggerResourceControlRequest_requestedAction = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TriggerResourceControlRequest_requestedAction_cancel
 * @description
 * 
 * Short name for `TriggerResourceControlRequest_requestedAction_cancel`. Ask to
 * terminate the operation (§3.2.6.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const cancel: TriggerResourceControlRequest_requestedAction = TriggerResourceControlRequest_requestedAction_cancel; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_TriggerResourceControlRequest_requestedAction: $.ASN1Decoder<TriggerResourceControlRequest_requestedAction> = $._decodeInteger;
export const _encode_TriggerResourceControlRequest_requestedAction: $.ASN1Encoder<TriggerResourceControlRequest_requestedAction> = $._encodeInteger;


/* eslint-enable */
