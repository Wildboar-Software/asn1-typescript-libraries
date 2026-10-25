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
const FeatureRequestIndicator: typeof _enum_for_FeatureRequestIndicator = _enum_for_FeatureRequestIndicator;

/**
 * @summary FeatureRequestIndicator_hold
 * @constant
 * @type {number}
 */
export
const FeatureRequestIndicator_hold: _enum_for_FeatureRequestIndicator.hold = FeatureRequestIndicator.hold; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hold
 * @constant
 * @type {number}
 */
export
const hold: _enum_for_FeatureRequestIndicator.hold = FeatureRequestIndicator.hold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FeatureRequestIndicator_retrieve
 * @constant
 * @type {number}
 */
export
const FeatureRequestIndicator_retrieve: _enum_for_FeatureRequestIndicator.retrieve = FeatureRequestIndicator.retrieve; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieve
 * @constant
 * @type {number}
 */
export
const retrieve: _enum_for_FeatureRequestIndicator.retrieve = FeatureRequestIndicator.retrieve; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FeatureRequestIndicator_featureActivation
 * @constant
 * @type {number}
 */
export
const FeatureRequestIndicator_featureActivation: _enum_for_FeatureRequestIndicator.featureActivation = FeatureRequestIndicator.featureActivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary featureActivation
 * @constant
 * @type {number}
 */
export
const featureActivation: _enum_for_FeatureRequestIndicator.featureActivation = FeatureRequestIndicator.featureActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FeatureRequestIndicator_spare1
 * @constant
 * @type {number}
 */
export
const FeatureRequestIndicator_spare1: _enum_for_FeatureRequestIndicator.spare1 = FeatureRequestIndicator.spare1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary spare1
 * @constant
 * @type {number}
 */
export
const spare1: _enum_for_FeatureRequestIndicator.spare1 = FeatureRequestIndicator.spare1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FeatureRequestIndicator_sparen
 * @constant
 * @type {number}
 */
export
const FeatureRequestIndicator_sparen: _enum_for_FeatureRequestIndicator.sparen = FeatureRequestIndicator.sparen; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sparen
 * @constant
 * @type {number}
 */
export
const sparen: _enum_for_FeatureRequestIndicator.sparen = FeatureRequestIndicator.sparen; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FeatureRequestIndicator: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_FeatureRequestIndicator: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
