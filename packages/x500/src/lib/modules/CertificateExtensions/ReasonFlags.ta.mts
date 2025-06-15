/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION ReasonFlags */
/**
 * @summary ReasonFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReasonFlags  ::=  BIT STRING {
 *   unused                (0),
 *   keyCompromise         (1),
 *   cACompromise          (2),
 *   affiliationChanged    (3),
 *   superseded            (4),
 *   cessationOfOperation  (5),
 *   certificateHold       (6),
 *   privilegeWithdrawn    (7),
 *   aACompromise          (8),
 *   weakAlgorithmOrKey    (9) }
 * ```
 */
export type ReasonFlags = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION ReasonFlags */

/* START_OF_SYMBOL_DEFINITION ReasonFlags_unused */
/**
 * @summary ReasonFlags_unused
 * @constant
 */
export const ReasonFlags_unused: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ReasonFlags_unused */

/* START_OF_SYMBOL_DEFINITION unused */
/**
 * @summary unused
 * @constant
 */
export const unused: number = ReasonFlags_unused; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION unused */

/* START_OF_SYMBOL_DEFINITION ReasonFlags_keyCompromise */
/**
 * @summary ReasonFlags_keyCompromise
 * @constant
 */
export const ReasonFlags_keyCompromise: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ReasonFlags_keyCompromise */

/* START_OF_SYMBOL_DEFINITION keyCompromise */
/**
 * @summary keyCompromise
 * @constant
 */
export const keyCompromise: number = ReasonFlags_keyCompromise; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION keyCompromise */

/* START_OF_SYMBOL_DEFINITION ReasonFlags_cACompromise */
/**
 * @summary ReasonFlags_cACompromise
 * @constant
 */
export const ReasonFlags_cACompromise: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ReasonFlags_cACompromise */

/* START_OF_SYMBOL_DEFINITION cACompromise */
/**
 * @summary cACompromise
 * @constant
 */
export const cACompromise: number = ReasonFlags_cACompromise; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION cACompromise */

/* START_OF_SYMBOL_DEFINITION ReasonFlags_affiliationChanged */
/**
 * @summary ReasonFlags_affiliationChanged
 * @constant
 */
export const ReasonFlags_affiliationChanged: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ReasonFlags_affiliationChanged */

/* START_OF_SYMBOL_DEFINITION affiliationChanged */
/**
 * @summary affiliationChanged
 * @constant
 */
export const affiliationChanged: number = ReasonFlags_affiliationChanged; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION affiliationChanged */

/* START_OF_SYMBOL_DEFINITION ReasonFlags_superseded */
/**
 * @summary ReasonFlags_superseded
 * @constant
 */
export const ReasonFlags_superseded: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ReasonFlags_superseded */

/* START_OF_SYMBOL_DEFINITION superseded */
/**
 * @summary superseded
 * @constant
 */
export const superseded: number = ReasonFlags_superseded; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION superseded */

/* START_OF_SYMBOL_DEFINITION ReasonFlags_cessationOfOperation */
/**
 * @summary ReasonFlags_cessationOfOperation
 * @constant
 */
export const ReasonFlags_cessationOfOperation: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ReasonFlags_cessationOfOperation */

/* START_OF_SYMBOL_DEFINITION cessationOfOperation */
/**
 * @summary cessationOfOperation
 * @constant
 */
export const cessationOfOperation: number = ReasonFlags_cessationOfOperation; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION cessationOfOperation */

/* START_OF_SYMBOL_DEFINITION ReasonFlags_certificateHold */
/**
 * @summary ReasonFlags_certificateHold
 * @constant
 */
export const ReasonFlags_certificateHold: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ReasonFlags_certificateHold */

/* START_OF_SYMBOL_DEFINITION certificateHold */
/**
 * @summary certificateHold
 * @constant
 */
export const certificateHold: number = ReasonFlags_certificateHold; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION certificateHold */

/* START_OF_SYMBOL_DEFINITION ReasonFlags_privilegeWithdrawn */
/**
 * @summary ReasonFlags_privilegeWithdrawn
 * @constant
 */
export const ReasonFlags_privilegeWithdrawn: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ReasonFlags_privilegeWithdrawn */

/* START_OF_SYMBOL_DEFINITION privilegeWithdrawn */
/**
 * @summary privilegeWithdrawn
 * @constant
 */
export const privilegeWithdrawn: number = ReasonFlags_privilegeWithdrawn; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION privilegeWithdrawn */

/* START_OF_SYMBOL_DEFINITION ReasonFlags_aACompromise */
/**
 * @summary ReasonFlags_aACompromise
 * @constant
 */
export const ReasonFlags_aACompromise: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ReasonFlags_aACompromise */

/* START_OF_SYMBOL_DEFINITION aACompromise */
/**
 * @summary aACompromise
 * @constant
 */
export const aACompromise: number = ReasonFlags_aACompromise; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION aACompromise */

/* START_OF_SYMBOL_DEFINITION ReasonFlags_weakAlgorithmOrKey */
/**
 * @summary ReasonFlags_weakAlgorithmOrKey
 * @constant
 */
export const ReasonFlags_weakAlgorithmOrKey: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ReasonFlags_weakAlgorithmOrKey */

/* START_OF_SYMBOL_DEFINITION weakAlgorithmOrKey */
/**
 * @summary weakAlgorithmOrKey
 * @constant
 */
export const weakAlgorithmOrKey: number = ReasonFlags_weakAlgorithmOrKey; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION weakAlgorithmOrKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReasonFlags */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReasonFlags */

/* START_OF_SYMBOL_DEFINITION _decode_ReasonFlags */
export const _decode_ReasonFlags = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_ReasonFlags */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReasonFlags */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReasonFlags */

/* START_OF_SYMBOL_DEFINITION _encode_ReasonFlags */
export const _encode_ReasonFlags = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_ReasonFlags */

/* eslint-enable */
