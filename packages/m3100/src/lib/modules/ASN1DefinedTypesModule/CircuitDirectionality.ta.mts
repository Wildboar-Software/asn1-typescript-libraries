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


/**
 * @summary CircuitDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitDirectionality  ::=  ENUMERATED {onewayOut(0), onewayIn(1), twoway(2)}
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_CircuitDirectionality {
    onewayOut = 0,
    onewayIn = 1,
    twoway = 2,
}


/**
 * @summary CircuitDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitDirectionality  ::=  ENUMERATED {onewayOut(0), onewayIn(1), twoway(2)}
 * ```
 * 
 * @enum {number}
 */
export type CircuitDirectionality = _enum_for_CircuitDirectionality;


/**
 * @summary CircuitDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitDirectionality  ::=  ENUMERATED {onewayOut(0), onewayIn(1), twoway(2)}
 * ```
 * 
 * @enum {number}
 */
export const CircuitDirectionality = _enum_for_CircuitDirectionality;


/**
 * @summary CircuitDirectionality_onewayOut
 * @constant
 * @type {number}
 */
export const CircuitDirectionality_onewayOut: CircuitDirectionality =
    CircuitDirectionality.onewayOut; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary onewayOut
 * @constant
 * @type {number}
 */
export const onewayOut: CircuitDirectionality =
    CircuitDirectionality.onewayOut; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CircuitDirectionality_onewayIn
 * @constant
 * @type {number}
 */
export const CircuitDirectionality_onewayIn: CircuitDirectionality =
    CircuitDirectionality.onewayIn; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary onewayIn
 * @constant
 * @type {number}
 */
export const onewayIn: CircuitDirectionality =
    CircuitDirectionality.onewayIn; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CircuitDirectionality_twoway
 * @constant
 * @type {number}
 */
export const CircuitDirectionality_twoway: CircuitDirectionality =
    CircuitDirectionality.twoway; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary twoway
 * @constant
 * @type {number}
 */
export const twoway: CircuitDirectionality =
    CircuitDirectionality.twoway; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_CircuitDirectionality = $._decodeEnumerated;




export const _encode_CircuitDirectionality = $._encodeEnumerated;


/* eslint-enable */
