/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedServicesRequest_waitAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedServicesRequest-waitAction ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ExtendedServicesRequest_waitAction = INTEGER;

/**
 * @summary ExtendedServicesRequest_waitAction_wait
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_waitAction_wait: ExtendedServicesRequest_waitAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_wait
 * @constant
 * @type {number}
 */
export
const wait: ExtendedServicesRequest_waitAction = ExtendedServicesRequest_waitAction_wait; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_waitIfPossible
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_waitAction_waitIfPossible: ExtendedServicesRequest_waitAction = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_waitIfPossible
 * @constant
 * @type {number}
 */
export
const waitIfPossible: ExtendedServicesRequest_waitAction = ExtendedServicesRequest_waitAction_waitIfPossible; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_dontWait
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_waitAction_dontWait: ExtendedServicesRequest_waitAction = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_dontWait
 * @constant
 * @type {number}
 */
export
const dontWait: ExtendedServicesRequest_waitAction = ExtendedServicesRequest_waitAction_dontWait; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_dontReturnPackage
 * @constant
 * @type {number}
 */
export
const ExtendedServicesRequest_waitAction_dontReturnPackage: ExtendedServicesRequest_waitAction = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesRequest_waitAction_dontReturnPackage
 * @constant
 * @type {number}
 */
export
const dontReturnPackage: ExtendedServicesRequest_waitAction = ExtendedServicesRequest_waitAction_dontReturnPackage; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ExtendedServicesRequest_waitAction: $.ASN1Decoder<ExtendedServicesRequest_waitAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedServicesRequest_waitAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedServicesRequest_waitAction (el: _Element): ExtendedServicesRequest_waitAction {
    if (!_cached_decoder_for_ExtendedServicesRequest_waitAction) { _cached_decoder_for_ExtendedServicesRequest_waitAction = $._decodeInteger; }
    return _cached_decoder_for_ExtendedServicesRequest_waitAction(el);
}

let _cached_encoder_for_ExtendedServicesRequest_waitAction: $.ASN1Encoder<ExtendedServicesRequest_waitAction> | null = null;

/**
 * @summary Encodes a(n) ExtendedServicesRequest_waitAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedServicesRequest_waitAction, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedServicesRequest_waitAction (value: ExtendedServicesRequest_waitAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedServicesRequest_waitAction) { _cached_encoder_for_ExtendedServicesRequest_waitAction = $._encodeInteger; }
    return _cached_encoder_for_ExtendedServicesRequest_waitAction(value, elGetter);
}


/* eslint-enable */
