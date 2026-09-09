/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SubscribedResourceAvailabilityErrors
 * @description
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
 * @constant
 * @type {number}
 */
export
const SubscribedResourceAvailabilityErrors_generic: SubscribedResourceAvailabilityErrors = SubscribedResourceAvailabilityErrors.generic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary generic
 * @constant
 * @type {number}
 */
export
const generic: SubscribedResourceAvailabilityErrors = SubscribedResourceAvailabilityErrors.generic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscribedResourceAvailabilityErrors_objectMonitorLimitExceeded
 * @constant
 * @type {number}
 */
export
const SubscribedResourceAvailabilityErrors_objectMonitorLimitExceeded: SubscribedResourceAvailabilityErrors = SubscribedResourceAvailabilityErrors.objectMonitorLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary objectMonitorLimitExceeded
 * @constant
 * @type {number}
 */
export
const objectMonitorLimitExceeded: SubscribedResourceAvailabilityErrors = SubscribedResourceAvailabilityErrors.objectMonitorLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscribedResourceAvailabilityErrors_trunkLimitExceeded
 * @constant
 * @type {number}
 */
export
const SubscribedResourceAvailabilityErrors_trunkLimitExceeded: SubscribedResourceAvailabilityErrors = SubscribedResourceAvailabilityErrors.trunkLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trunkLimitExceeded
 * @constant
 * @type {number}
 */
export
const trunkLimitExceeded: SubscribedResourceAvailabilityErrors = SubscribedResourceAvailabilityErrors.trunkLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscribedResourceAvailabilityErrors_outstandingReqLimitExceeded
 * @constant
 * @type {number}
 */
export
const SubscribedResourceAvailabilityErrors_outstandingReqLimitExceeded: SubscribedResourceAvailabilityErrors = SubscribedResourceAvailabilityErrors.outstandingReqLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outstandingReqLimitExceeded
 * @constant
 * @type {number}
 */
export
const outstandingReqLimitExceeded: SubscribedResourceAvailabilityErrors = SubscribedResourceAvailabilityErrors.outstandingReqLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscribedResourceAvailabilityErrors_objectRegistrationLimitExceeded
 * @constant
 * @type {number}
 */
export
const SubscribedResourceAvailabilityErrors_objectRegistrationLimitExceeded: SubscribedResourceAvailabilityErrors = SubscribedResourceAvailabilityErrors.objectRegistrationLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary objectRegistrationLimitExceeded
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
