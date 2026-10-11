/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReRegRequiredIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReRegRequiredIndicator  ::=  ENUMERATED
 * {
 *     reRegistrationRequired(1),
 *     reRegistrationNotRequired(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReRegRequiredIndicator {
    reRegistrationRequired = 1,
    reRegistrationNotRequired = 2,
}

/**
 * @summary ReRegRequiredIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReRegRequiredIndicator  ::=  ENUMERATED
 * {
 *     reRegistrationRequired(1),
 *     reRegistrationNotRequired(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ReRegRequiredIndicator = _enum_for_ReRegRequiredIndicator;

/**
 * @summary ReRegRequiredIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReRegRequiredIndicator  ::=  ENUMERATED
 * {
 *     reRegistrationRequired(1),
 *     reRegistrationNotRequired(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ReRegRequiredIndicator = _enum_for_ReRegRequiredIndicator;

/**
 * @summary ReRegRequiredIndicator_reRegistrationRequired
 * @constant
 * @type {number}
 */
export
const ReRegRequiredIndicator_reRegistrationRequired: ReRegRequiredIndicator = ReRegRequiredIndicator.reRegistrationRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reRegistrationRequired
 * @constant
 * @type {number}
 */
export
const reRegistrationRequired: ReRegRequiredIndicator = ReRegRequiredIndicator.reRegistrationRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReRegRequiredIndicator_reRegistrationNotRequired
 * @constant
 * @type {number}
 */
export
const ReRegRequiredIndicator_reRegistrationNotRequired: ReRegRequiredIndicator = ReRegRequiredIndicator.reRegistrationNotRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reRegistrationNotRequired
 * @constant
 * @type {number}
 */
export
const reRegistrationNotRequired: ReRegRequiredIndicator = ReRegRequiredIndicator.reRegistrationNotRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_ReRegRequiredIndicator: $.ASN1Decoder<ReRegRequiredIndicator> = $._decodeEnumerated;

export const _encode_ReRegRequiredIndicator: $.ASN1Encoder<ReRegRequiredIndicator> = $._encodeEnumerated;


/* eslint-enable */
