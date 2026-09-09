/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Emptied
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Emptied  ::=  BIT STRING
 * {     resource                 ( 0),     -- optional parameters
 *     cause                    ( 1),     -- optional parameters
 *     servicesPermitted             ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type Emptied = BIT_STRING;

/**
 * @summary Emptied_resource
 * @constant
 */
export
const Emptied_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = Emptied_resource; /* SHORT_NAMED_BIT */

/**
 * @summary Emptied_cause
 * @constant
 */
export
const Emptied_cause: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = Emptied_cause; /* SHORT_NAMED_BIT */

/**
 * @summary Emptied_servicesPermitted
 * @constant
 */
export
const Emptied_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = Emptied_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Emptied_privateData
 * @constant
 */
export
const Emptied_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Emptied_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Emptied: $.ASN1Decoder<Emptied> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Emptied
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Emptied (el: _Element): Emptied {
    if (!_cached_decoder_for_Emptied) { _cached_decoder_for_Emptied = $._decodeBitString; }
    return _cached_decoder_for_Emptied(el);
}

let _cached_encoder_for_Emptied: $.ASN1Encoder<Emptied> | null = null;

/**
 * @summary Encodes a(n) Emptied into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Emptied, encoded as an ASN.1 Element.
 */
export
function _encode_Emptied (value: Emptied, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Emptied) { _cached_encoder_for_Emptied = $._encodeBitString; }
    return _cached_encoder_for_Emptied(value, elGetter);
}


/* eslint-enable */
