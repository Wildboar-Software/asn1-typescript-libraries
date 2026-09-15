/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SecurityErrors
 * @description
 *
 * Security error (ECMA-269 §9.3.1, §12.2.14.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityErrors  ::=  ENUMERATED
 * {     generic                     ( 0),
 *     sequenceNumberViolated                 ( 1),
 *     timeStampViolated                 ( 2),
 *     securityInfoViolated                 ( 4) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SecurityErrors {
    generic = 0,
    sequenceNumberViolated = 1,
    timeStampViolated = 2,
    securityInfoViolated = 4,
}

/**
 * @summary SecurityErrors
 * @description
 *
 * Security error (ECMA-269 §9.3.1, §12.2.14.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityErrors  ::=  ENUMERATED
 * {     generic                     ( 0),
 *     sequenceNumberViolated                 ( 1),
 *     timeStampViolated                 ( 2),
 *     securityInfoViolated                 ( 4) }
 * ```
 * 
 * @enum {number}
 */
export
type SecurityErrors = _enum_for_SecurityErrors;

/**
 * @summary SecurityErrors
 * @description
 *
 * Security error (ECMA-269 §9.3.1, §12.2.14.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityErrors  ::=  ENUMERATED
 * {     generic                     ( 0),
 *     sequenceNumberViolated                 ( 1),
 *     timeStampViolated                 ( 2),
 *     securityInfoViolated                 ( 4) }
 * ```
 * 
 * @enum {number}
 */
export
const SecurityErrors = _enum_for_SecurityErrors;

/**
 * @summary SecurityErrors_generic
 * @description
 * Security error; the server cannot be more specific. ECMA-269 §12.2.14.2.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SecurityErrors_generic: SecurityErrors = SecurityErrors.generic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary generic
 * @description Alias of {@link SecurityErrors_generic}.
 * @constant
 * @type {number}
 */
export
const generic: SecurityErrors = SecurityErrors.generic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityErrors_sequenceNumberViolated
 * @description
 * Error in the operation's message sequence number. ECMA-269 §12.2.14.2.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SecurityErrors_sequenceNumberViolated: SecurityErrors = SecurityErrors.sequenceNumberViolated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sequenceNumberViolated
 * @description Alias of {@link SecurityErrors_sequenceNumberViolated}.
 * @constant
 * @type {number}
 */
export
const sequenceNumberViolated: SecurityErrors = SecurityErrors.sequenceNumberViolated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityErrors_timeStampViolated
 * @description Error in the operation's time stamp. ECMA-269 §12.2.14.2.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SecurityErrors_timeStampViolated: SecurityErrors = SecurityErrors.timeStampViolated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeStampViolated
 * @description Alias of {@link SecurityErrors_timeStampViolated}.
 * @constant
 * @type {number}
 */
export
const timeStampViolated: SecurityErrors = SecurityErrors.timeStampViolated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityErrors_securityInfoViolated
 * @description Error in the operation's security data. ECMA-269 §12.2.14.2.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SecurityErrors_securityInfoViolated: SecurityErrors = SecurityErrors.securityInfoViolated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary securityInfoViolated
 * @description Alias of {@link SecurityErrors_securityInfoViolated}.
 * @constant
 * @type {number}
 */
export
const securityInfoViolated: SecurityErrors = SecurityErrors.securityInfoViolated; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SecurityErrors: $.ASN1Decoder<SecurityErrors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityErrors
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityErrors (el: _Element): SecurityErrors {
    if (!_cached_decoder_for_SecurityErrors) { _cached_decoder_for_SecurityErrors = $._decodeEnumerated; }
    return _cached_decoder_for_SecurityErrors(el);
}

let _cached_encoder_for_SecurityErrors: $.ASN1Encoder<SecurityErrors> | null = null;

/**
 * @summary Encodes a(n) SecurityErrors into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityErrors, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityErrors (value: SecurityErrors, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecurityErrors) { _cached_encoder_for_SecurityErrors = $._encodeEnumerated; }
    return _cached_encoder_for_SecurityErrors(value, elGetter);
}


/* eslint-enable */
