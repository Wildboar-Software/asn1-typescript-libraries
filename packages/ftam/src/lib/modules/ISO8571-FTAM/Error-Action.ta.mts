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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Error_Action
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Error-Action  ::=  INTEGER {terminate(0), continue(1)}
 * ```
 */
export type Error_Action = INTEGER;


/**
 * @summary Error_Action_terminate
 * @constant
 * @type {number}
 */
export const Error_Action_terminate: Error_Action = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Error_Action_terminate
 * @constant
 * @type {number}
 */
export const terminate: Error_Action = Error_Action_terminate; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Error_Action_continue_
 * @constant
 * @type {number}
 */
export const Error_Action_continue_: Error_Action = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Error_Action_continue_
 * @constant
 * @type {number}
 */
export const continue_: Error_Action = Error_Action_continue_; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Error_Action = $._decodeInteger;




export const _encode_Error_Action = $._encodeInteger;


/* eslint-enable */
