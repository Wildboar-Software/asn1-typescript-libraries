/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION ClassList */
/**
 * @summary ClassList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClassList  ::=  BIT STRING {
 *   unmarked      (0),
 *   unclassified  (1),
 *   restricted    (2),
 *   confidential  (3),
 *   secret        (4),
 *   topSecret     (5)}
 * ```
 */
export type ClassList = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION ClassList */

/* START_OF_SYMBOL_DEFINITION ClassList_unmarked */
/**
 * @summary ClassList_unmarked
 * @constant
 */
export const ClassList_unmarked: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ClassList_unmarked */

/* START_OF_SYMBOL_DEFINITION unmarked */
/**
 * @summary unmarked
 * @constant
 */
export const unmarked: number = ClassList_unmarked; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION unmarked */

/* START_OF_SYMBOL_DEFINITION ClassList_unclassified */
/**
 * @summary ClassList_unclassified
 * @constant
 */
export const ClassList_unclassified: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ClassList_unclassified */

/* START_OF_SYMBOL_DEFINITION unclassified */
/**
 * @summary unclassified
 * @constant
 */
export const unclassified: number = ClassList_unclassified; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION unclassified */

/* START_OF_SYMBOL_DEFINITION ClassList_restricted */
/**
 * @summary ClassList_restricted
 * @constant
 */
export const ClassList_restricted: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ClassList_restricted */

/* START_OF_SYMBOL_DEFINITION restricted */
/**
 * @summary restricted
 * @constant
 */
export const restricted: number = ClassList_restricted; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION restricted */

/* START_OF_SYMBOL_DEFINITION ClassList_confidential */
/**
 * @summary ClassList_confidential
 * @constant
 */
export const ClassList_confidential: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ClassList_confidential */

/* START_OF_SYMBOL_DEFINITION confidential */
/**
 * @summary confidential
 * @constant
 */
export const confidential: number = ClassList_confidential; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION confidential */

/* START_OF_SYMBOL_DEFINITION ClassList_secret */
/**
 * @summary ClassList_secret
 * @constant
 */
export const ClassList_secret: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ClassList_secret */

/* START_OF_SYMBOL_DEFINITION secret */
/**
 * @summary secret
 * @constant
 */
export const secret: number = ClassList_secret; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION secret */

/* START_OF_SYMBOL_DEFINITION ClassList_topSecret */
/**
 * @summary ClassList_topSecret
 * @constant
 */
export const ClassList_topSecret: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ClassList_topSecret */

/* START_OF_SYMBOL_DEFINITION topSecret */
/**
 * @summary topSecret
 * @constant
 */
export const topSecret: number = ClassList_topSecret; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION topSecret */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ClassList */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ClassList */

/* START_OF_SYMBOL_DEFINITION _decode_ClassList */
export const _decode_ClassList = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_ClassList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ClassList */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ClassList */

/* START_OF_SYMBOL_DEFINITION _encode_ClassList */
export const _encode_ClassList = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_ClassList */

/* eslint-enable */
