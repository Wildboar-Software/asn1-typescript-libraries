/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_Abort */
export enum _enum_for_Abort {
    mistypedPDU = 0,
    unboundRequest = 1,
    invalidPDU = 2,
    resourceLimitation = 3,
    connectionFailed = 4,
    invalidProtocol = 5,
    reasonNotSpecified = 6,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Abort */

/* START_OF_SYMBOL_DEFINITION Abort */
/**
 * @summary Abort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Abort  ::=  ENUMERATED {
 *   mistypedPDU         (0),
 *   unboundRequest      (1),
 *   invalidPDU          (2),
 *   resourceLimitation  (3),
 *   connectionFailed    (4),
 *   invalidProtocol     (5),
 *   reasonNotSpecified  (6),
 *   ...}
 * ```@enum {number}
 */
export type Abort = _enum_for_Abort | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION Abort */

/* START_OF_SYMBOL_DEFINITION Abort_mistypedPDU */
/**
 * @summary Abort_mistypedPDU
 * @constant
 * @type {number}
 */
export const Abort_mistypedPDU: Abort = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_mistypedPDU */

/* START_OF_SYMBOL_DEFINITION mistypedPDU */
/**
 * @summary mistypedPDU
 * @constant
 * @type {number}
 */
export const mistypedPDU: Abort = Abort_mistypedPDU; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION mistypedPDU */

/* START_OF_SYMBOL_DEFINITION Abort_unboundRequest */
/**
 * @summary Abort_unboundRequest
 * @constant
 * @type {number}
 */
export const Abort_unboundRequest: Abort = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_unboundRequest */

/* START_OF_SYMBOL_DEFINITION unboundRequest */
/**
 * @summary unboundRequest
 * @constant
 * @type {number}
 */
export const unboundRequest: Abort = Abort_unboundRequest; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unboundRequest */

/* START_OF_SYMBOL_DEFINITION Abort_invalidPDU */
/**
 * @summary Abort_invalidPDU
 * @constant
 * @type {number}
 */
export const Abort_invalidPDU: Abort = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_invalidPDU */

/* START_OF_SYMBOL_DEFINITION invalidPDU */
/**
 * @summary invalidPDU
 * @constant
 * @type {number}
 */
export const invalidPDU: Abort = Abort_invalidPDU; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidPDU */

/* START_OF_SYMBOL_DEFINITION Abort_resourceLimitation */
/**
 * @summary Abort_resourceLimitation
 * @constant
 * @type {number}
 */
export const Abort_resourceLimitation: Abort = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_resourceLimitation */

/* START_OF_SYMBOL_DEFINITION resourceLimitation */
/**
 * @summary resourceLimitation
 * @constant
 * @type {number}
 */
export const resourceLimitation: Abort = Abort_resourceLimitation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION resourceLimitation */

/* START_OF_SYMBOL_DEFINITION Abort_connectionFailed */
/**
 * @summary Abort_connectionFailed
 * @constant
 * @type {number}
 */
export const Abort_connectionFailed: Abort = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_connectionFailed */

/* START_OF_SYMBOL_DEFINITION connectionFailed */
/**
 * @summary connectionFailed
 * @constant
 * @type {number}
 */
export const connectionFailed: Abort = Abort_connectionFailed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION connectionFailed */

/* START_OF_SYMBOL_DEFINITION Abort_invalidProtocol */
/**
 * @summary Abort_invalidProtocol
 * @constant
 * @type {number}
 */
export const Abort_invalidProtocol: Abort = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_invalidProtocol */

/* START_OF_SYMBOL_DEFINITION invalidProtocol */
/**
 * @summary invalidProtocol
 * @constant
 * @type {number}
 */
export const invalidProtocol: Abort = Abort_invalidProtocol; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidProtocol */

/* START_OF_SYMBOL_DEFINITION Abort_reasonNotSpecified */
/**
 * @summary Abort_reasonNotSpecified
 * @constant
 * @type {number}
 */
export const Abort_reasonNotSpecified: Abort = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_reasonNotSpecified */

/* START_OF_SYMBOL_DEFINITION reasonNotSpecified */
/**
 * @summary reasonNotSpecified
 * @constant
 * @type {number}
 */
export const reasonNotSpecified: Abort = Abort_reasonNotSpecified; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION reasonNotSpecified */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Abort */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Abort */

/* START_OF_SYMBOL_DEFINITION _decode_Abort */
export const _decode_Abort = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_Abort */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Abort */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Abort */

/* START_OF_SYMBOL_DEFINITION _encode_Abort */
export const _encode_Abort = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_Abort */

/* eslint-enable */
