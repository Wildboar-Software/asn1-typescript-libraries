/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InteractionStrategy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InteractionStrategy  ::=  ENUMERATED {stopOnError(1), bestEffort(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_InteractionStrategy {
    stopOnError = 1,
    bestEffort = 2,
}

/**
 * @summary InteractionStrategy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InteractionStrategy  ::=  ENUMERATED {stopOnError(1), bestEffort(2)}
 * ```
 * 
 * @enum {number}
 */
export
type InteractionStrategy = _enum_for_InteractionStrategy;

/**
 * @summary InteractionStrategy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InteractionStrategy  ::=  ENUMERATED {stopOnError(1), bestEffort(2)}
 * ```
 * 
 * @enum {number}
 */
export
const InteractionStrategy: typeof _enum_for_InteractionStrategy = _enum_for_InteractionStrategy;

/**
 * @summary InteractionStrategy_stopOnError
 * @constant
 * @type {number}
 */
export
const InteractionStrategy_stopOnError: _enum_for_InteractionStrategy.stopOnError = InteractionStrategy.stopOnError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary stopOnError
 * @constant
 * @type {number}
 */
export
const stopOnError: _enum_for_InteractionStrategy.stopOnError = InteractionStrategy.stopOnError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InteractionStrategy_bestEffort
 * @constant
 * @type {number}
 */
export
const InteractionStrategy_bestEffort: _enum_for_InteractionStrategy.bestEffort = InteractionStrategy.bestEffort; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bestEffort
 * @constant
 * @type {number}
 */
export
const bestEffort: _enum_for_InteractionStrategy.bestEffort = InteractionStrategy.bestEffort; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_InteractionStrategy: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_InteractionStrategy: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
