/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_DMO_Indicator {
    dMOSTATETUNKNOWNC = 0,
    dMOSTATETTMOC = 1,
    dMOSTATETDMOC = 2,
    dMOSTATETIDLEDUALWATCHC = 3,
    dMOSTATETFULLDUALWATCHC = 4,
    dMOSTATETTXINHIBITC = 5,
}

/**
 * @summary DMO_Indicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DMO-Indicator  ::=  ENUMERATED
 * {
 *     dMOSTATETUNKNOWNC(0),
 *     dMOSTATETTMOC(1),
 *     dMOSTATETDMOC(2),
 *     dMOSTATETIDLEDUALWATCHC(3),
 *     dMOSTATETFULLDUALWATCHC(4),
 *     dMOSTATETTXINHIBITC(5),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DMO_Indicator = _enum_for_DMO_Indicator | ENUMERATED;

/**
 * @summary DMO_Indicator_dMOSTATETUNKNOWNC
 * @constant
 * @type {number}
 */
export
const DMO_Indicator_dMOSTATETUNKNOWNC: DMO_Indicator = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dMOSTATETUNKNOWNC
 * @constant
 * @type {number}
 */
export
const dMOSTATETUNKNOWNC: DMO_Indicator = DMO_Indicator_dMOSTATETUNKNOWNC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DMO_Indicator_dMOSTATETTMOC
 * @constant
 * @type {number}
 */
export
const DMO_Indicator_dMOSTATETTMOC: DMO_Indicator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dMOSTATETTMOC
 * @constant
 * @type {number}
 */
export
const dMOSTATETTMOC: DMO_Indicator = DMO_Indicator_dMOSTATETTMOC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DMO_Indicator_dMOSTATETDMOC
 * @constant
 * @type {number}
 */
export
const DMO_Indicator_dMOSTATETDMOC: DMO_Indicator = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dMOSTATETDMOC
 * @constant
 * @type {number}
 */
export
const dMOSTATETDMOC: DMO_Indicator = DMO_Indicator_dMOSTATETDMOC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DMO_Indicator_dMOSTATETIDLEDUALWATCHC
 * @constant
 * @type {number}
 */
export
const DMO_Indicator_dMOSTATETIDLEDUALWATCHC: DMO_Indicator = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dMOSTATETIDLEDUALWATCHC
 * @constant
 * @type {number}
 */
export
const dMOSTATETIDLEDUALWATCHC: DMO_Indicator = DMO_Indicator_dMOSTATETIDLEDUALWATCHC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DMO_Indicator_dMOSTATETFULLDUALWATCHC
 * @constant
 * @type {number}
 */
export
const DMO_Indicator_dMOSTATETFULLDUALWATCHC: DMO_Indicator = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dMOSTATETFULLDUALWATCHC
 * @constant
 * @type {number}
 */
export
const dMOSTATETFULLDUALWATCHC: DMO_Indicator = DMO_Indicator_dMOSTATETFULLDUALWATCHC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DMO_Indicator_dMOSTATETTXINHIBITC
 * @constant
 * @type {number}
 */
export
const DMO_Indicator_dMOSTATETTXINHIBITC: DMO_Indicator = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dMOSTATETTXINHIBITC
 * @constant
 * @type {number}
 */
export
const dMOSTATETTXINHIBITC: DMO_Indicator = DMO_Indicator_dMOSTATETTXINHIBITC; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DMO_Indicator: $.ASN1Decoder<DMO_Indicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DMO_Indicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DMO_Indicator (el: _Element): DMO_Indicator {
    if (!_cached_decoder_for_DMO_Indicator) { _cached_decoder_for_DMO_Indicator = $._decodeEnumerated; }
    return _cached_decoder_for_DMO_Indicator(el);
}

let _cached_encoder_for_DMO_Indicator: $.ASN1Encoder<DMO_Indicator> | null = null;

/**
 * @summary Encodes a(n) DMO_Indicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DMO_Indicator, encoded as an ASN.1 Element.
 */
export
function _encode_DMO_Indicator (value: DMO_Indicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DMO_Indicator) { _cached_encoder_for_DMO_Indicator = $._encodeEnumerated; }
    return _cached_encoder_for_DMO_Indicator(value, elGetter);
}


/* eslint-enable */
