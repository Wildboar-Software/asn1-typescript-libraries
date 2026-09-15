/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AutoOriginate
 * @description
 *
 * Whether the originating (calling/joining) device is prompted or auto-answered
 * (hands-free). Default is Prompt. Used on Make Call, Make Connection, Join
 * Call, and similar. ECMA-269 §17.1.18.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AutoOriginate  ::=  ENUMERATED
 * {     prompt                         ( 0),
 *     doNotPrompt                     ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AutoOriginate {
    prompt = 0,
    doNotPrompt = 1,
}

/**
 * @summary AutoOriginate
 * @description
 *
 * Whether the originating (calling/joining) device is prompted or auto-answered
 * (hands-free). Default is Prompt. Used on Make Call, Make Connection, Join
 * Call, and similar. ECMA-269 §17.1.18.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AutoOriginate  ::=  ENUMERATED
 * {     prompt                         ( 0),
 *     doNotPrompt                     ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
type AutoOriginate = _enum_for_AutoOriginate;

/**
 * @summary AutoOriginate
 * @description
 *
 * Whether the originating (calling/joining) device is prompted or auto-answered
 * (hands-free). Default is Prompt. Used on Make Call, Make Connection, Join
 * Call, and similar. ECMA-269 §17.1.18.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AutoOriginate  ::=  ENUMERATED
 * {     prompt                         ( 0),
 *     doNotPrompt                     ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
const AutoOriginate = _enum_for_AutoOriginate;

/**
 * @summary AutoOriginate_prompt
 * @description
 *
 * Prompt the originating device. Default. ECMA-269 §17.1.18.
 *
 * @constant
 * @type {number}
 */
export
const AutoOriginate_prompt: AutoOriginate = AutoOriginate.prompt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary prompt
 * @constant
 * @type {number}
 */
export
const prompt: AutoOriginate = AutoOriginate.prompt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AutoOriginate_doNotPrompt
 * @description
 *
 * Do not prompt; auto-originate (hands-free). ECMA-269 §17.1.18.
 *
 * @constant
 * @type {number}
 */
export
const AutoOriginate_doNotPrompt: AutoOriginate = AutoOriginate.doNotPrompt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary doNotPrompt
 * @constant
 * @type {number}
 */
export
const doNotPrompt: AutoOriginate = AutoOriginate.doNotPrompt; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AutoOriginate: $.ASN1Decoder<AutoOriginate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AutoOriginate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AutoOriginate (el: _Element): AutoOriginate {
    if (!_cached_decoder_for_AutoOriginate) { _cached_decoder_for_AutoOriginate = $._decodeEnumerated; }
    return _cached_decoder_for_AutoOriginate(el);
}

let _cached_encoder_for_AutoOriginate: $.ASN1Encoder<AutoOriginate> | null = null;

/**
 * @summary Encodes a(n) AutoOriginate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoOriginate, encoded as an ASN.1 Element.
 */
export
function _encode_AutoOriginate (value: AutoOriginate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AutoOriginate) { _cached_encoder_for_AutoOriginate = $._encodeEnumerated; }
    return _cached_encoder_for_AutoOriginate(value, elGetter);
}


/* eslint-enable */
