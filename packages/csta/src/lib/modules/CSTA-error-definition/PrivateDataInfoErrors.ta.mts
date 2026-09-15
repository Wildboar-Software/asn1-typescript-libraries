/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary PrivateDataInfoErrors
 * @description
 *
 * Error in CSTA Private Data of the service request. Why the private data is
 * incorrect is outside this Standard (ECMA-269 §9.3.1, §12.2.14.7).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateDataInfoErrors  ::=  ENUMERATED
 * {     cSTAPrivateDataInfoError            ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PrivateDataInfoErrors {
    cSTAPrivateDataInfoError = 1,
}

/**
 * @summary PrivateDataInfoErrors
 * @description
 *
 * Error in CSTA Private Data of the service request. Why the private data is
 * incorrect is outside this Standard (ECMA-269 §9.3.1, §12.2.14.7).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateDataInfoErrors  ::=  ENUMERATED
 * {     cSTAPrivateDataInfoError            ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
type PrivateDataInfoErrors = _enum_for_PrivateDataInfoErrors;

/**
 * @summary PrivateDataInfoErrors
 * @description
 *
 * Error in CSTA Private Data of the service request. Why the private data is
 * incorrect is outside this Standard (ECMA-269 §9.3.1, §12.2.14.7).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateDataInfoErrors  ::=  ENUMERATED
 * {     cSTAPrivateDataInfoError            ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
const PrivateDataInfoErrors = _enum_for_PrivateDataInfoErrors;

/**
 * @summary PrivateDataInfoErrors_cSTAPrivateDataInfoError
 * @description
 * Error in the privateData parameter; the reason is implementation specific.
 * ECMA-269 §12.2.14.7.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PrivateDataInfoErrors_cSTAPrivateDataInfoError: PrivateDataInfoErrors = PrivateDataInfoErrors.cSTAPrivateDataInfoError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cSTAPrivateDataInfoError
 * @description Alias of {@link PrivateDataInfoErrors_cSTAPrivateDataInfoError}.
 * @constant
 * @type {number}
 */
export
const cSTAPrivateDataInfoError: PrivateDataInfoErrors = PrivateDataInfoErrors.cSTAPrivateDataInfoError; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PrivateDataInfoErrors: $.ASN1Decoder<PrivateDataInfoErrors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateDataInfoErrors
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivateDataInfoErrors (el: _Element): PrivateDataInfoErrors {
    if (!_cached_decoder_for_PrivateDataInfoErrors) { _cached_decoder_for_PrivateDataInfoErrors = $._decodeEnumerated; }
    return _cached_decoder_for_PrivateDataInfoErrors(el);
}

let _cached_encoder_for_PrivateDataInfoErrors: $.ASN1Encoder<PrivateDataInfoErrors> | null = null;

/**
 * @summary Encodes a(n) PrivateDataInfoErrors into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateDataInfoErrors, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateDataInfoErrors (value: PrivateDataInfoErrors, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivateDataInfoErrors) { _cached_encoder_for_PrivateDataInfoErrors = $._encodeEnumerated; }
    return _cached_encoder_for_PrivateDataInfoErrors(value, elGetter);
}


/* eslint-enable */
