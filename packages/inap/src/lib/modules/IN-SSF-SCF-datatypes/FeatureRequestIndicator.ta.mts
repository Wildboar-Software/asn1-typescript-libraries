/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FeatureRequestIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FeatureRequestIndicator  ::=  ENUMERATED {
 *   hold(0), retrieve(1), featureActivation(2), spare1(3), sparen(127)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FeatureRequestIndicator {
    hold = 0,
    retrieve = 1,
    featureActivation = 2,
    spare1 = 3,
    sparen = 127,
}

/**
 * @summary FeatureRequestIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FeatureRequestIndicator  ::=  ENUMERATED {
 *   hold(0), retrieve(1), featureActivation(2), spare1(3), sparen(127)}
 * ```
 * 
 * @enum {number}
 */
export
type FeatureRequestIndicator = _enum_for_FeatureRequestIndicator;

/**
 * @summary FeatureRequestIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FeatureRequestIndicator  ::=  ENUMERATED {
 *   hold(0), retrieve(1), featureActivation(2), spare1(3), sparen(127)}
 * ```
 * 
 * @enum {number}
 */
export
const FeatureRequestIndicator = _enum_for_FeatureRequestIndicator;

/**
 * @summary FeatureRequestIndicator_hold
 * @constant
 * @type {number}
 */
export
const FeatureRequestIndicator_hold = FeatureRequestIndicator.hold satisfies FeatureRequestIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hold
 * @constant
 * @type {number}
 */
export
const hold = FeatureRequestIndicator.hold satisfies FeatureRequestIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FeatureRequestIndicator_retrieve
 * @constant
 * @type {number}
 */
export
const FeatureRequestIndicator_retrieve = FeatureRequestIndicator.retrieve satisfies FeatureRequestIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieve
 * @constant
 * @type {number}
 */
export
const retrieve = FeatureRequestIndicator.retrieve satisfies FeatureRequestIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FeatureRequestIndicator_featureActivation
 * @constant
 * @type {number}
 */
export
const FeatureRequestIndicator_featureActivation = FeatureRequestIndicator.featureActivation satisfies FeatureRequestIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary featureActivation
 * @constant
 * @type {number}
 */
export
const featureActivation = FeatureRequestIndicator.featureActivation satisfies FeatureRequestIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FeatureRequestIndicator_spare1
 * @constant
 * @type {number}
 */
export
const FeatureRequestIndicator_spare1 = FeatureRequestIndicator.spare1 satisfies FeatureRequestIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary spare1
 * @constant
 * @type {number}
 */
export
const spare1 = FeatureRequestIndicator.spare1 satisfies FeatureRequestIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FeatureRequestIndicator_sparen
 * @constant
 * @type {number}
 */
export
const FeatureRequestIndicator_sparen = FeatureRequestIndicator.sparen satisfies FeatureRequestIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sparen
 * @constant
 * @type {number}
 */
export
const sparen = FeatureRequestIndicator.sparen satisfies FeatureRequestIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_FeatureRequestIndicator(el: _Element): FeatureRequestIndicator {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case FeatureRequestIndicator.hold: return FeatureRequestIndicator.hold;
        case FeatureRequestIndicator.retrieve: return FeatureRequestIndicator.retrieve;
        case FeatureRequestIndicator.featureActivation: return FeatureRequestIndicator.featureActivation;
        case FeatureRequestIndicator.spare1: return FeatureRequestIndicator.spare1;
        case FeatureRequestIndicator.sparen: return FeatureRequestIndicator.sparen;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for FeatureRequestIndicator.",
                el,
            );
    }
}

export
const _encode_FeatureRequestIndicator: $.ASN1Encoder<FeatureRequestIndicator> = $._encodeEnumerated as $.ASN1Encoder<FeatureRequestIndicator>;

/* eslint-enable */
