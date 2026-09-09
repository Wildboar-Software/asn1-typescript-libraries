/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary IgnoreUnsupportedParameters
 * @description
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
 */
export
const IgnoreUnsupportedParameters_ignoreParameters: IgnoreUnsupportedParameters = IgnoreUnsupportedParameters.ignoreParameters; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ignoreParameters
 * @constant
 * @type {number}
 */
export
const ignoreParameters: IgnoreUnsupportedParameters = IgnoreUnsupportedParameters.ignoreParameters; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IgnoreUnsupportedParameters_rejectMessage
 * @constant
 * @type {number}
 */
export
const IgnoreUnsupportedParameters_rejectMessage: IgnoreUnsupportedParameters = IgnoreUnsupportedParameters.rejectMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejectMessage
 * @constant
 * @type {number}
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
