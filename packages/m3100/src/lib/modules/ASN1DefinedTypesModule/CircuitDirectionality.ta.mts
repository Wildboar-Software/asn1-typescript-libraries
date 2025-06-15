/* eslint-disable */
import {
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

/* START_OF_SYMBOL_DEFINITION _enum_for_CircuitDirectionality */
/**
 * @summary CircuitDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitDirectionality  ::=  ENUMERATED {onewayOut(0), onewayIn(1), twoway(2)}
 * ```@enum {number}
 */
export enum _enum_for_CircuitDirectionality {
    onewayOut = 0,
    onewayIn = 1,
    twoway = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CircuitDirectionality */

/* START_OF_SYMBOL_DEFINITION CircuitDirectionality */
/**
 * @summary CircuitDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitDirectionality  ::=  ENUMERATED {onewayOut(0), onewayIn(1), twoway(2)}
 * ```@enum {number}
 */
export type CircuitDirectionality = _enum_for_CircuitDirectionality;
/* END_OF_SYMBOL_DEFINITION CircuitDirectionality */

/* START_OF_SYMBOL_DEFINITION CircuitDirectionality */
/**
 * @summary CircuitDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitDirectionality  ::=  ENUMERATED {onewayOut(0), onewayIn(1), twoway(2)}
 * ```@enum {number}
 */
export const CircuitDirectionality = _enum_for_CircuitDirectionality;
/* END_OF_SYMBOL_DEFINITION CircuitDirectionality */

/* START_OF_SYMBOL_DEFINITION CircuitDirectionality_onewayOut */
/**
 * @summary CircuitDirectionality_onewayOut
 * @constant
 * @type {number}
 */
export const CircuitDirectionality_onewayOut: CircuitDirectionality =
    CircuitDirectionality.onewayOut; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CircuitDirectionality_onewayOut */

/* START_OF_SYMBOL_DEFINITION onewayOut */
/**
 * @summary onewayOut
 * @constant
 * @type {number}
 */
export const onewayOut: CircuitDirectionality =
    CircuitDirectionality.onewayOut; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION onewayOut */

/* START_OF_SYMBOL_DEFINITION CircuitDirectionality_onewayIn */
/**
 * @summary CircuitDirectionality_onewayIn
 * @constant
 * @type {number}
 */
export const CircuitDirectionality_onewayIn: CircuitDirectionality =
    CircuitDirectionality.onewayIn; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CircuitDirectionality_onewayIn */

/* START_OF_SYMBOL_DEFINITION onewayIn */
/**
 * @summary onewayIn
 * @constant
 * @type {number}
 */
export const onewayIn: CircuitDirectionality =
    CircuitDirectionality.onewayIn; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION onewayIn */

/* START_OF_SYMBOL_DEFINITION CircuitDirectionality_twoway */
/**
 * @summary CircuitDirectionality_twoway
 * @constant
 * @type {number}
 */
export const CircuitDirectionality_twoway: CircuitDirectionality =
    CircuitDirectionality.twoway; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CircuitDirectionality_twoway */

/* START_OF_SYMBOL_DEFINITION twoway */
/**
 * @summary twoway
 * @constant
 * @type {number}
 */
export const twoway: CircuitDirectionality =
    CircuitDirectionality.twoway; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION twoway */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CircuitDirectionality */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CircuitDirectionality */

/* START_OF_SYMBOL_DEFINITION _decode_CircuitDirectionality */
export const _decode_CircuitDirectionality = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_CircuitDirectionality */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CircuitDirectionality */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CircuitDirectionality */

/* START_OF_SYMBOL_DEFINITION _encode_CircuitDirectionality */
export const _encode_CircuitDirectionality = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_CircuitDirectionality */

/* eslint-enable */
