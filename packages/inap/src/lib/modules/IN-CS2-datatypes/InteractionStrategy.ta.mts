/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
const InteractionStrategy = _enum_for_InteractionStrategy;

/**
 * @summary InteractionStrategy_stopOnError
 * @constant
 * @type {number}
 */
export
const InteractionStrategy_stopOnError = InteractionStrategy.stopOnError satisfies InteractionStrategy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary stopOnError
 * @constant
 * @type {number}
 */
export
const stopOnError = InteractionStrategy.stopOnError satisfies InteractionStrategy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InteractionStrategy_bestEffort
 * @constant
 * @type {number}
 */
export
const InteractionStrategy_bestEffort = InteractionStrategy.bestEffort satisfies InteractionStrategy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bestEffort
 * @constant
 * @type {number}
 */
export
const bestEffort = InteractionStrategy.bestEffort satisfies InteractionStrategy; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_InteractionStrategy(el: _Element): InteractionStrategy {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case InteractionStrategy.stopOnError: return InteractionStrategy.stopOnError;
        case InteractionStrategy.bestEffort: return InteractionStrategy.bestEffort;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for InteractionStrategy.",
                el,
            );
    }
}

export
const _encode_InteractionStrategy: $.ASN1Encoder<InteractionStrategy> = $._encodeEnumerated as $.ASN1Encoder<InteractionStrategy>;

/* eslint-enable */
