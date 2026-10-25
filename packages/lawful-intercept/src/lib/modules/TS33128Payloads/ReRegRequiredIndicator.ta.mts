/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReRegRequiredIndicator
 * @description
 * 
 * Indicates whether UE re-registration is required in the DEREGISTRATION
 * REQUEST message, if available, see TS 24.501 [13] clause 9.1.3.20.1.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Indicates whether UE re-registration is required in the DEREGISTRATION
 * REQUEST message, if available, see TS 24.501 [13] clause 9.1.3.20.1.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Indicates whether UE re-registration is required in the DEREGISTRATION
 * REQUEST message, if available, see TS 24.501 [13] clause 9.1.3.20.1.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const ReRegRequiredIndicator: typeof _enum_for_ReRegRequiredIndicator = _enum_for_ReRegRequiredIndicator;

/**
 * @summary ReRegRequiredIndicator_reRegistrationRequired
 * @constant
 * @type {number}
 */
export
const ReRegRequiredIndicator_reRegistrationRequired: _enum_for_ReRegRequiredIndicator.reRegistrationRequired = ReRegRequiredIndicator.reRegistrationRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reRegistrationRequired
 * @constant
 * @type {number}
 */
export
const reRegistrationRequired: _enum_for_ReRegRequiredIndicator.reRegistrationRequired = ReRegRequiredIndicator.reRegistrationRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReRegRequiredIndicator_reRegistrationNotRequired
 * @constant
 * @type {number}
 */
export
const ReRegRequiredIndicator_reRegistrationNotRequired: _enum_for_ReRegRequiredIndicator.reRegistrationNotRequired = ReRegRequiredIndicator.reRegistrationNotRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reRegistrationNotRequired
 * @constant
 * @type {number}
 */
export
const reRegistrationNotRequired: _enum_for_ReRegRequiredIndicator.reRegistrationNotRequired = ReRegRequiredIndicator.reRegistrationNotRequired; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ReRegRequiredIndicator: $.ASN1Decoder<ReRegRequiredIndicator> = $._decodeEnumerated;
export const _encode_ReRegRequiredIndicator: $.ASN1Encoder<ReRegRequiredIndicator> = $._encodeEnumerated;


/* eslint-enable */
