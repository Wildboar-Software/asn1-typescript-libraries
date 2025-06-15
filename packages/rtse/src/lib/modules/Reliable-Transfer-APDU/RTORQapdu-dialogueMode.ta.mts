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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary RTORQapdu_dialogueMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RTORQapdu-dialogueMode ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type RTORQapdu_dialogueMode = INTEGER;


/**
 * @summary RTORQapdu_dialogueMode_monologue
 * @constant
 * @type {number}
 */
export const RTORQapdu_dialogueMode_monologue: RTORQapdu_dialogueMode = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RTORQapdu_dialogueMode_monologue
 * @constant
 * @type {number}
 */
export const monologue: RTORQapdu_dialogueMode = RTORQapdu_dialogueMode_monologue; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RTORQapdu_dialogueMode_twa
 * @constant
 * @type {number}
 */
export const RTORQapdu_dialogueMode_twa: RTORQapdu_dialogueMode = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RTORQapdu_dialogueMode_twa
 * @constant
 * @type {number}
 */
export const twa: RTORQapdu_dialogueMode = RTORQapdu_dialogueMode_twa; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_RTORQapdu_dialogueMode = $._decodeInteger;




export const _encode_RTORQapdu_dialogueMode = $._encodeInteger;


/* eslint-enable */
