/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SubscribedResourceAvailabilityErrors
 * @description
 *
 * The request could not be fulfilled because a required resource must be
 * purchased or contracted by the client (ECMA-269 §9.3.1, §12.2.14.5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscribedResourceAvailabilityErrors  ::=  ENUMERATED
 * {    generic                     ( 1),
 *     objectMonitorLimitExceeded             ( 2),
 *     trunkLimitExceeded                 ( 3),
 *     outstandingReqLimitExceeded             ( 4),
 *     objectRegistrationLimitExceeded         ( 5) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SubscribedResourceAvailabilityErrors {
    generic = 1,
    objectMonitorLimitExceeded = 2,
    trunkLimitExceeded = 3,
    outstandingReqLimitExceeded = 4,
    objectRegistrationLimitExceeded = 5,
}

/**
 * @summary SubscribedResourceAvailabilityErrors
 * @description
 *
 * The request could not be fulfilled because a required resource must be
 * purchased or contracted by the client (ECMA-269 §9.3.1, §12.2.14.5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscribedResourceAvailabilityErrors  ::=  ENUMERATED
 * {    generic                     ( 1),
 *     objectMonitorLimitExceeded             ( 2),
 *     trunkLimitExceeded                 ( 3),
 *     outstandingReqLimitExceeded             ( 4),
 *     objectRegistrationLimitExceeded         ( 5) }
 * ```
 * 
 * @enum {number}
 */
export
type SubscribedResourceAvailabilityErrors = _enum_for_SubscribedResourceAvailabilityErrors;

/**
 * @summary SubscribedResourceAvailabilityErrors
 * @description
 *
 * The request could not be fulfilled because a required resource must be
 * purchased or contracted by the client (ECMA-269 §9.3.1, §12.2.14.5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscribedResourceAvailabilityErrors  ::=  ENUMERATED
 * {    generic                     ( 1),
 *     objectMonitorLimitExceeded             ( 2),
 *     trunkLimitExceeded                 ( 3),
 *     outstandingReqLimitExceeded             ( 4),
 *     objectRegistrationLimitExceeded         ( 5) }
 * ```
 * 
 * @enum {number}
 */
export
const SubscribedResourceAvailabilityErrors = _enum_for_SubscribedResourceAvailabilityErrors;

/**
 * @summary SubscribedResourceAvailabilityErrors_generic
 * @description
 * A required resource must be purchased or contracted; the server cannot be
 * more specific. ECMA-269 §12.2.14.5.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SubscribedResourceAvailabilityErrors_generic: SubscribedResourceAvailabilityErrors = SubscribedResourceAvailabilityErrors.generic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary generic
 * @description Alias of {@link SubscribedResourceAvailabilityErrors_generic}.
 * @constant
 * @type {number}
 */
export
const generic: SubscribedResourceAvailabilityErrors = SubscribedResourceAvailabilityErrors.generic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscribedResourceAvailabilityErrors_objectMonitorLimitExceeded
 * @description
 * Would exceed the server's monitor limit for the specified object. ECMA-269
 * §12.2.14.5.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SubscribedResourceAvailabilityErrors_objectMonitorLimitExceeded: SubscribedResourceAvailabilityErrors = SubscribedResourceAvailabilityErrors.objectMonitorLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary objectMonitorLimitExceeded
 * @description
 * Alias of {@link
 * SubscribedResourceAvailabilityErrors_objectMonitorLimitExceeded}.
 * @constant
 * @type {number}
 */
export
const objectMonitorLimitExceeded: SubscribedResourceAvailabilityErrors = SubscribedResourceAvailabilityErrors.objectMonitorLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscribedResourceAvailabilityErrors_trunkLimitExceeded
 * @description Would exceed the server's trunk limit. ECMA-269 §12.2.14.5.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SubscribedResourceAvailabilityErrors_trunkLimitExceeded: SubscribedResourceAvailabilityErrors = SubscribedResourceAvailabilityErrors.trunkLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trunkLimitExceeded
 * @description
 * Alias of {@link SubscribedResourceAvailabilityErrors_trunkLimitExceeded}.
 * @constant
 * @type {number}
 */
export
const trunkLimitExceeded: SubscribedResourceAvailabilityErrors = SubscribedResourceAvailabilityErrors.trunkLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscribedResourceAvailabilityErrors_outstandingReqLimitExceeded
 * @description
 * Would exceed the server's limit on outstanding service requests. ECMA-269
 * §12.2.14.5.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SubscribedResourceAvailabilityErrors_outstandingReqLimitExceeded: SubscribedResourceAvailabilityErrors = SubscribedResourceAvailabilityErrors.outstandingReqLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outstandingReqLimitExceeded
 * @description
 * Alias of {@link
 * SubscribedResourceAvailabilityErrors_outstandingReqLimitExceeded}.
 * @constant
 * @type {number}
 */
export
const outstandingReqLimitExceeded: SubscribedResourceAvailabilityErrors = SubscribedResourceAvailabilityErrors.outstandingReqLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscribedResourceAvailabilityErrors_objectRegistrationLimitExceeded
 * @description
 * Would exceed the registration limit for this device. ECMA-269 §12.2.14.5.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SubscribedResourceAvailabilityErrors_objectRegistrationLimitExceeded: SubscribedResourceAvailabilityErrors = SubscribedResourceAvailabilityErrors.objectRegistrationLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary objectRegistrationLimitExceeded
 * @description
 * Alias of {@link
 * SubscribedResourceAvailabilityErrors_objectRegistrationLimitExceeded}.
 * @constant
 * @type {number}
 */
export
const objectRegistrationLimitExceeded: SubscribedResourceAvailabilityErrors = SubscribedResourceAvailabilityErrors.objectRegistrationLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SubscribedResourceAvailabilityErrors: $.ASN1Decoder<SubscribedResourceAvailabilityErrors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscribedResourceAvailabilityErrors
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscribedResourceAvailabilityErrors (el: _Element): SubscribedResourceAvailabilityErrors {
    if (!_cached_decoder_for_SubscribedResourceAvailabilityErrors) { _cached_decoder_for_SubscribedResourceAvailabilityErrors = $._decodeEnumerated; }
    return _cached_decoder_for_SubscribedResourceAvailabilityErrors(el);
}

let _cached_encoder_for_SubscribedResourceAvailabilityErrors: $.ASN1Encoder<SubscribedResourceAvailabilityErrors> | null = null;

/**
 * @summary Encodes a(n) SubscribedResourceAvailabilityErrors into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscribedResourceAvailabilityErrors, encoded as an ASN.1 Element.
 */
export
function _encode_SubscribedResourceAvailabilityErrors (value: SubscribedResourceAvailabilityErrors, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscribedResourceAvailabilityErrors) { _cached_encoder_for_SubscribedResourceAvailabilityErrors = $._encodeEnumerated; }
    return _cached_encoder_for_SubscribedResourceAvailabilityErrors(value, elGetter);
}


/* eslint-enable */
