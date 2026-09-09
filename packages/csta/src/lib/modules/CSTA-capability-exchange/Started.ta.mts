/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Started
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Started  ::=  BIT STRING
 * {     resource                 ( 0),     -- optional parameters
 *     cause                    ( 1),     -- optional parameters
 *     servicesPermitted             ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type Started = BIT_STRING;

/**
 * @summary Started_resource
 * @constant
 */
export
const Started_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = Started_resource; /* SHORT_NAMED_BIT */

/**
 * @summary Started_cause
 * @constant
 */
export
const Started_cause: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = Started_cause; /* SHORT_NAMED_BIT */

/**
 * @summary Started_servicesPermitted
 * @constant
 */
export
const Started_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = Started_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Started_privateData
 * @constant
 */
export
const Started_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Started_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Started: $.ASN1Decoder<Started> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Started
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Started (el: _Element): Started {
    if (!_cached_decoder_for_Started) { _cached_decoder_for_Started = $._decodeBitString; }
    return _cached_decoder_for_Started(el);
}

let _cached_encoder_for_Started: $.ASN1Encoder<Started> | null = null;

/**
 * @summary Encodes a(n) Started into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Started, encoded as an ASN.1 Element.
 */
export
function _encode_Started (value: Started, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Started) { _cached_encoder_for_Started = $._encodeBitString; }
    return _cached_encoder_for_Started(value, elGetter);
}


/* eslint-enable */
