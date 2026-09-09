/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CallLinkageOptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallLinkageOptions  ::=  BIT STRING
 * {     callLinkageFeatureSupported             (0),
 *     threadLinkageFeatureSupported             (1) }
 * ```
 */
export
type CallLinkageOptions = BIT_STRING;

/**
 * @summary CallLinkageOptions_callLinkageFeatureSupported
 * @constant
 */
export
const CallLinkageOptions_callLinkageFeatureSupported: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary callLinkageFeatureSupported
 * @constant
 */
export
const callLinkageFeatureSupported: number = CallLinkageOptions_callLinkageFeatureSupported; /* SHORT_NAMED_BIT */

/**
 * @summary CallLinkageOptions_threadLinkageFeatureSupported
 * @constant
 */
export
const CallLinkageOptions_threadLinkageFeatureSupported: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary threadLinkageFeatureSupported
 * @constant
 */
export
const threadLinkageFeatureSupported: number = CallLinkageOptions_threadLinkageFeatureSupported; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallLinkageOptions: $.ASN1Decoder<CallLinkageOptions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallLinkageOptions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallLinkageOptions (el: _Element): CallLinkageOptions {
    if (!_cached_decoder_for_CallLinkageOptions) { _cached_decoder_for_CallLinkageOptions = $._decodeBitString; }
    return _cached_decoder_for_CallLinkageOptions(el);
}

let _cached_encoder_for_CallLinkageOptions: $.ASN1Encoder<CallLinkageOptions> | null = null;

/**
 * @summary Encodes a(n) CallLinkageOptions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallLinkageOptions, encoded as an ASN.1 Element.
 */
export
function _encode_CallLinkageOptions (value: CallLinkageOptions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallLinkageOptions) { _cached_encoder_for_CallLinkageOptions = $._encodeBitString; }
    return _cached_encoder_for_CallLinkageOptions(value, elGetter);
}


/* eslint-enable */
