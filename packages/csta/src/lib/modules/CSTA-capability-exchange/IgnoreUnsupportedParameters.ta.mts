/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary IgnoreUnsupportedParameters
 * @description
 * How the SF handles unsupported optional parameters in service requests
 * (ECMA-269 §13.1.4.2.1 Table 13-9, ECMA-285 §9.10).
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IgnoreUnsupportedParameters  ::=  ENUMERATED
 * {     ignoreParameters             ( 0),
 *     rejectMessage                 ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IgnoreUnsupportedParameters {
    ignoreParameters = 0,
    rejectMessage = 1,
}

/**
 * @summary IgnoreUnsupportedParameters
 * @description
 * How the SF handles unsupported optional parameters in service requests
 * (ECMA-269 §13.1.4.2.1 Table 13-9, ECMA-285 §9.10).
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IgnoreUnsupportedParameters  ::=  ENUMERATED
 * {     ignoreParameters             ( 0),
 *     rejectMessage                 ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
type IgnoreUnsupportedParameters = _enum_for_IgnoreUnsupportedParameters;

/**
 * @summary IgnoreUnsupportedParameters
 * @description
 * How the SF handles unsupported optional parameters in service requests
 * (ECMA-269 §13.1.4.2.1 Table 13-9, ECMA-285 §9.10).
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IgnoreUnsupportedParameters  ::=  ENUMERATED
 * {     ignoreParameters             ( 0),
 *     rejectMessage                 ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
const IgnoreUnsupportedParameters = _enum_for_IgnoreUnsupportedParameters;

/**
 * @summary IgnoreUnsupportedParameters_ignoreParameters
 * @constant
 * @type {number}
 * @description
 * SF treats unsupported optional parameters as absent (ECMA-269
 * §13.1.2–13.1.4).
 */
export
const IgnoreUnsupportedParameters_ignoreParameters: IgnoreUnsupportedParameters = IgnoreUnsupportedParameters.ignoreParameters; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ignoreParameters
 * @constant
 * @type {number}
 * @description
 * Alias of `IgnoreUnsupportedParameters_ignoreParameters`.
 */
export
const ignoreParameters: IgnoreUnsupportedParameters = IgnoreUnsupportedParameters.ignoreParameters; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IgnoreUnsupportedParameters_rejectMessage
 * @constant
 * @type {number}
 * @description
 * SF negatively acknowledges requests with unsupported optional parameters
 * (ECMA-269 §13.1.2–13.1.4).
 */
export
const IgnoreUnsupportedParameters_rejectMessage: IgnoreUnsupportedParameters = IgnoreUnsupportedParameters.rejectMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejectMessage
 * @constant
 * @type {number}
 * @description
 * Alias of `IgnoreUnsupportedParameters_rejectMessage`.
 */
export
const rejectMessage: IgnoreUnsupportedParameters = IgnoreUnsupportedParameters.rejectMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_IgnoreUnsupportedParameters: $.ASN1Decoder<IgnoreUnsupportedParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IgnoreUnsupportedParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IgnoreUnsupportedParameters (el: _Element): IgnoreUnsupportedParameters {
    if (!_cached_decoder_for_IgnoreUnsupportedParameters) { _cached_decoder_for_IgnoreUnsupportedParameters = $._decodeEnumerated; }
    return _cached_decoder_for_IgnoreUnsupportedParameters(el);
}

let _cached_encoder_for_IgnoreUnsupportedParameters: $.ASN1Encoder<IgnoreUnsupportedParameters> | null = null;

/**
 * @summary Encodes a(n) IgnoreUnsupportedParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IgnoreUnsupportedParameters, encoded as an ASN.1 Element.
 */
export
function _encode_IgnoreUnsupportedParameters (value: IgnoreUnsupportedParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IgnoreUnsupportedParameters) { _cached_encoder_for_IgnoreUnsupportedParameters = $._encodeEnumerated; }
    return _cached_encoder_for_IgnoreUnsupportedParameters(value, elGetter);
}


/* eslint-enable */
