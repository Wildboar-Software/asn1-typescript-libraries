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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary BioAPI_BIR_SUBTYPE_MASK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BIR-SUBTYPE-MASK  ::=  BIT STRING {
 *   left(0), right(1), left-thumb(2), left-pointerfinger(3),
 *   left-middlefinger(4), left-ringfinger(5), left-littlefinger(6),
 *   right-thumb(7), right-pointerfinger(8), right-middlefinger(9),
 *   right-ringfinger(10), right-littlefinger(11), left-vein-palm(12),
 *   left-vein-backofhand(13), left-vein-wrist(14), right-vein-palm(15),
 *   right-vein-backofhand(16), right-vein-wrist(17)}(SIZE (32))
 * ```
 */
export type BioAPI_BIR_SUBTYPE_MASK = BIT_STRING;


/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_left
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_left: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary left
 * @constant
 */
export const left: number = BioAPI_BIR_SUBTYPE_MASK_left; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_right
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_right: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary right
 * @constant
 */
export const right: number = BioAPI_BIR_SUBTYPE_MASK_right; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_left_thumb
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_left_thumb: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary left_thumb
 * @constant
 */
export const left_thumb: number = BioAPI_BIR_SUBTYPE_MASK_left_thumb; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_left_pointerfinger
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_left_pointerfinger: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary left_pointerfinger
 * @constant
 */
export const left_pointerfinger: number = BioAPI_BIR_SUBTYPE_MASK_left_pointerfinger; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_left_middlefinger
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_left_middlefinger: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary left_middlefinger
 * @constant
 */
export const left_middlefinger: number = BioAPI_BIR_SUBTYPE_MASK_left_middlefinger; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_left_ringfinger
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_left_ringfinger: number = 5; /* LONG_NAMED_BIT */


/**
 * @summary left_ringfinger
 * @constant
 */
export const left_ringfinger: number = BioAPI_BIR_SUBTYPE_MASK_left_ringfinger; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_left_littlefinger
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_left_littlefinger: number = 6; /* LONG_NAMED_BIT */


/**
 * @summary left_littlefinger
 * @constant
 */
export const left_littlefinger: number = BioAPI_BIR_SUBTYPE_MASK_left_littlefinger; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_right_thumb
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_right_thumb: number = 7; /* LONG_NAMED_BIT */


/**
 * @summary right_thumb
 * @constant
 */
export const right_thumb: number = BioAPI_BIR_SUBTYPE_MASK_right_thumb; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_right_pointerfinger
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_right_pointerfinger: number = 8; /* LONG_NAMED_BIT */


/**
 * @summary right_pointerfinger
 * @constant
 */
export const right_pointerfinger: number = BioAPI_BIR_SUBTYPE_MASK_right_pointerfinger; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_right_middlefinger
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_right_middlefinger: number = 9; /* LONG_NAMED_BIT */


/**
 * @summary right_middlefinger
 * @constant
 */
export const right_middlefinger: number = BioAPI_BIR_SUBTYPE_MASK_right_middlefinger; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_right_ringfinger
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_right_ringfinger: number = 10; /* LONG_NAMED_BIT */


/**
 * @summary right_ringfinger
 * @constant
 */
export const right_ringfinger: number = BioAPI_BIR_SUBTYPE_MASK_right_ringfinger; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_right_littlefinger
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_right_littlefinger: number = 11; /* LONG_NAMED_BIT */


/**
 * @summary right_littlefinger
 * @constant
 */
export const right_littlefinger: number = BioAPI_BIR_SUBTYPE_MASK_right_littlefinger; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_left_vein_palm
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_left_vein_palm: number = 12; /* LONG_NAMED_BIT */


/**
 * @summary left_vein_palm
 * @constant
 */
export const left_vein_palm: number = BioAPI_BIR_SUBTYPE_MASK_left_vein_palm; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_left_vein_backofhand
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_left_vein_backofhand: number = 13; /* LONG_NAMED_BIT */


/**
 * @summary left_vein_backofhand
 * @constant
 */
export const left_vein_backofhand: number = BioAPI_BIR_SUBTYPE_MASK_left_vein_backofhand; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_left_vein_wrist
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_left_vein_wrist: number = 14; /* LONG_NAMED_BIT */


/**
 * @summary left_vein_wrist
 * @constant
 */
export const left_vein_wrist: number = BioAPI_BIR_SUBTYPE_MASK_left_vein_wrist; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_right_vein_palm
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_right_vein_palm: number = 15; /* LONG_NAMED_BIT */


/**
 * @summary right_vein_palm
 * @constant
 */
export const right_vein_palm: number = BioAPI_BIR_SUBTYPE_MASK_right_vein_palm; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_right_vein_backofhand
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_right_vein_backofhand: number = 16; /* LONG_NAMED_BIT */


/**
 * @summary right_vein_backofhand
 * @constant
 */
export const right_vein_backofhand: number = BioAPI_BIR_SUBTYPE_MASK_right_vein_backofhand; /* SHORT_NAMED_BIT */


/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_right_vein_wrist
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_right_vein_wrist: number = 17; /* LONG_NAMED_BIT */


/**
 * @summary right_vein_wrist
 * @constant
 */
export const right_vein_wrist: number = BioAPI_BIR_SUBTYPE_MASK_right_vein_wrist; /* SHORT_NAMED_BIT */




export const _decode_BioAPI_BIR_SUBTYPE_MASK = $._decodeBitString;




export const _encode_BioAPI_BIR_SUBTYPE_MASK = $._encodeBitString;


/* eslint-enable */
