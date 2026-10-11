/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSOverNASIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSOverNASIndicator  ::=  ENUMERATED
 * {
 *     sMSOverNASNotAllowed(1),
 *     sMSOverNASAllowed(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMSOverNASIndicator {
    sMSOverNASNotAllowed = 1,
    sMSOverNASAllowed = 2,
}

/**
 * @summary SMSOverNASIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSOverNASIndicator  ::=  ENUMERATED
 * {
 *     sMSOverNASNotAllowed(1),
 *     sMSOverNASAllowed(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SMSOverNASIndicator = _enum_for_SMSOverNASIndicator;

/**
 * @summary SMSOverNASIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSOverNASIndicator  ::=  ENUMERATED
 * {
 *     sMSOverNASNotAllowed(1),
 *     sMSOverNASAllowed(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SMSOverNASIndicator = _enum_for_SMSOverNASIndicator;

/**
 * @summary SMSOverNASIndicator_sMSOverNASNotAllowed
 * @constant
 * @type {number}
 */
export
const SMSOverNASIndicator_sMSOverNASNotAllowed: SMSOverNASIndicator = SMSOverNASIndicator.sMSOverNASNotAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMSOverNASNotAllowed
 * @constant
 * @type {number}
 */
export
const sMSOverNASNotAllowed: SMSOverNASIndicator = SMSOverNASIndicator.sMSOverNASNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSOverNASIndicator_sMSOverNASAllowed
 * @constant
 * @type {number}
 */
export
const SMSOverNASIndicator_sMSOverNASAllowed: SMSOverNASIndicator = SMSOverNASIndicator.sMSOverNASAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMSOverNASAllowed
 * @constant
 * @type {number}
 */
export
const sMSOverNASAllowed: SMSOverNASIndicator = SMSOverNASIndicator.sMSOverNASAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SMSOverNASIndicator: $.ASN1Decoder<SMSOverNASIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMSOverNASIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMSOverNASIndicator (el: _Element): SMSOverNASIndicator {
    if (!_cached_decoder_for_SMSOverNASIndicator) { _cached_decoder_for_SMSOverNASIndicator = $._decodeEnumerated; }
    return _cached_decoder_for_SMSOverNASIndicator(el);
}

let _cached_encoder_for_SMSOverNASIndicator: $.ASN1Encoder<SMSOverNASIndicator> | null = null;

/**
 * @summary Encodes a(n) SMSOverNASIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSOverNASIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_SMSOverNASIndicator (value: SMSOverNASIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMSOverNASIndicator) { _cached_encoder_for_SMSOverNASIndicator = $._encodeEnumerated; }
    return _cached_encoder_for_SMSOverNASIndicator(value, elGetter);
}


/* eslint-enable */
