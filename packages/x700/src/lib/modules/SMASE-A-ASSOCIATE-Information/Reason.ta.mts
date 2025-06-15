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

/* START_OF_SYMBOL_DEFINITION Reason */
/**
 * @summary Reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Reason  ::=  INTEGER {
 *   smfusNotSupported(0),
 *   -- one or more of the requested SMFUs are not supported
 *   smfuCombinationNotSupported(1),
 *   -- the individual SMFUs are supported, but not
 *   -- in this proposed combination on a single association
 *   smfusRequiredNotAvailable(2),
 *   -- one or more required SMFUs have been negotiated away
 *   smfuNegotiationRefused(3)
 *   -- responder refuses to negotiate SMFUs
 *   -- without explicitly stating why
 *   }
 * ```
 */
export type Reason = INTEGER;
/* END_OF_SYMBOL_DEFINITION Reason */

/* START_OF_SYMBOL_DEFINITION Reason_smfusNotSupported */
/**
 * @summary Reason_smfusNotSupported
 * @constant
 * @type {number}
 */
export const Reason_smfusNotSupported: Reason = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Reason_smfusNotSupported */

/* START_OF_SYMBOL_DEFINITION smfusNotSupported */
/**
 * @summary Reason_smfusNotSupported
 * @constant
 * @type {number}
 */
export const smfusNotSupported: Reason = Reason_smfusNotSupported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION smfusNotSupported */

/* START_OF_SYMBOL_DEFINITION Reason_smfuCombinationNotSupported */
/**
 * @summary Reason_smfuCombinationNotSupported
 * @constant
 * @type {number}
 */
export const Reason_smfuCombinationNotSupported: Reason = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Reason_smfuCombinationNotSupported */

/* START_OF_SYMBOL_DEFINITION smfuCombinationNotSupported */
/**
 * @summary Reason_smfuCombinationNotSupported
 * @constant
 * @type {number}
 */
export const smfuCombinationNotSupported: Reason = Reason_smfuCombinationNotSupported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION smfuCombinationNotSupported */

/* START_OF_SYMBOL_DEFINITION Reason_smfusRequiredNotAvailable */
/**
 * @summary Reason_smfusRequiredNotAvailable
 * @constant
 * @type {number}
 */
export const Reason_smfusRequiredNotAvailable: Reason = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Reason_smfusRequiredNotAvailable */

/* START_OF_SYMBOL_DEFINITION smfusRequiredNotAvailable */
/**
 * @summary Reason_smfusRequiredNotAvailable
 * @constant
 * @type {number}
 */
export const smfusRequiredNotAvailable: Reason = Reason_smfusRequiredNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION smfusRequiredNotAvailable */

/* START_OF_SYMBOL_DEFINITION Reason_smfuNegotiationRefused */
/**
 * @summary Reason_smfuNegotiationRefused
 * @constant
 * @type {number}
 */
export const Reason_smfuNegotiationRefused: Reason = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Reason_smfuNegotiationRefused */

/* START_OF_SYMBOL_DEFINITION smfuNegotiationRefused */
/**
 * @summary Reason_smfuNegotiationRefused
 * @constant
 * @type {number}
 */
export const smfuNegotiationRefused: Reason = Reason_smfuNegotiationRefused; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION smfuNegotiationRefused */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Reason */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Reason */

/* START_OF_SYMBOL_DEFINITION _decode_Reason */
export const _decode_Reason = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Reason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Reason */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Reason */

/* START_OF_SYMBOL_DEFINITION _encode_Reason */
export const _encode_Reason = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Reason */

/* eslint-enable */
