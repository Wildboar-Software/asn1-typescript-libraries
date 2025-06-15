/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION SecurityClassification */
/**
 * @summary SecurityClassification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityClassification  ::=  INTEGER {
 *   unmarked      (0),
 *   unclassified  (1),
 *   restricted    (2),
 *   confidential  (3),
 *   secret        (4),
 *   top-secret    (5)}
 * ```
 */
export type SecurityClassification = INTEGER;
/* END_OF_SYMBOL_DEFINITION SecurityClassification */

/* START_OF_SYMBOL_DEFINITION SecurityClassification_unmarked */
/**
 * @summary SecurityClassification_unmarked
 * @constant
 * @type {number}
 */
export const SecurityClassification_unmarked: SecurityClassification = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityClassification_unmarked */

/* START_OF_SYMBOL_DEFINITION unmarked */
/**
 * @summary SecurityClassification_unmarked
 * @constant
 * @type {number}
 */
export const unmarked: SecurityClassification = SecurityClassification_unmarked; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unmarked */

/* START_OF_SYMBOL_DEFINITION SecurityClassification_unclassified */
/**
 * @summary SecurityClassification_unclassified
 * @constant
 * @type {number}
 */
export const SecurityClassification_unclassified: SecurityClassification = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityClassification_unclassified */

/* START_OF_SYMBOL_DEFINITION unclassified */
/**
 * @summary SecurityClassification_unclassified
 * @constant
 * @type {number}
 */
export const unclassified: SecurityClassification = SecurityClassification_unclassified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unclassified */

/* START_OF_SYMBOL_DEFINITION SecurityClassification_restricted */
/**
 * @summary SecurityClassification_restricted
 * @constant
 * @type {number}
 */
export const SecurityClassification_restricted: SecurityClassification = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityClassification_restricted */

/* START_OF_SYMBOL_DEFINITION restricted */
/**
 * @summary SecurityClassification_restricted
 * @constant
 * @type {number}
 */
export const restricted: SecurityClassification = SecurityClassification_restricted; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION restricted */

/* START_OF_SYMBOL_DEFINITION SecurityClassification_confidential */
/**
 * @summary SecurityClassification_confidential
 * @constant
 * @type {number}
 */
export const SecurityClassification_confidential: SecurityClassification = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityClassification_confidential */

/* START_OF_SYMBOL_DEFINITION confidential */
/**
 * @summary SecurityClassification_confidential
 * @constant
 * @type {number}
 */
export const confidential: SecurityClassification = SecurityClassification_confidential; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION confidential */

/* START_OF_SYMBOL_DEFINITION SecurityClassification_secret */
/**
 * @summary SecurityClassification_secret
 * @constant
 * @type {number}
 */
export const SecurityClassification_secret: SecurityClassification = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityClassification_secret */

/* START_OF_SYMBOL_DEFINITION secret */
/**
 * @summary SecurityClassification_secret
 * @constant
 * @type {number}
 */
export const secret: SecurityClassification = SecurityClassification_secret; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION secret */

/* START_OF_SYMBOL_DEFINITION SecurityClassification_top_secret */
/**
 * @summary SecurityClassification_top_secret
 * @constant
 * @type {number}
 */
export const SecurityClassification_top_secret: SecurityClassification = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityClassification_top_secret */

/* START_OF_SYMBOL_DEFINITION top_secret */
/**
 * @summary SecurityClassification_top_secret
 * @constant
 * @type {number}
 */
export const top_secret: SecurityClassification = SecurityClassification_top_secret; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION top_secret */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityClassification */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityClassification */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityClassification */
export const _decode_SecurityClassification = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_SecurityClassification */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityClassification */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityClassification */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityClassification */
export const _encode_SecurityClassification = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_SecurityClassification */

/* eslint-enable */
