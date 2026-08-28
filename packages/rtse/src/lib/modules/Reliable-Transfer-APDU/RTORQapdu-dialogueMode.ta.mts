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
 * @summary RTORQapdu_dialogueMode
 * @description
 *
 * Dialogue-mode of the application-association: `monologue` (only
 * one AE may send) or `twa` (two-way-alternate). Default of the
 * RTORQ field is `monologue`. ITU-T Rec. X.218 (03/93) §3.5.12,
 * §9.1.1.1; ITU-T Rec. X.228 (11/88) §7.1.4.3.
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
 * @description Only one application-entity may be the sender
 *     (ITU-T Rec. X.218 (03/93) §3.5.12).
 * @constant
 * @type {number}
 */
export const RTORQapdu_dialogueMode_monologue: RTORQapdu_dialogueMode = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RTORQapdu_dialogueMode_monologue
 * @description Alias of {@link RTORQapdu_dialogueMode_monologue}.
 * @constant
 * @type {number}
 */
export const monologue: RTORQapdu_dialogueMode = RTORQapdu_dialogueMode_monologue; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RTORQapdu_dialogueMode_twa
 * @description Two-way-alternate interaction (ITU-T Rec. X.218
 *     (03/93) §9.1.1.1).
 * @constant
 * @type {number}
 */
export const RTORQapdu_dialogueMode_twa: RTORQapdu_dialogueMode = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RTORQapdu_dialogueMode_twa
 * @description Alias of {@link RTORQapdu_dialogueMode_twa}.
 * @constant
 * @type {number}
 */
export const twa: RTORQapdu_dialogueMode = RTORQapdu_dialogueMode_twa; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_RTORQapdu_dialogueMode = $._decodeInteger;




export const _encode_RTORQapdu_dialogueMode = $._encodeInteger;


/* eslint-enable */
