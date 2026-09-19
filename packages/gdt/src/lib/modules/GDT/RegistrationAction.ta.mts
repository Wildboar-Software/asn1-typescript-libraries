/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RegistrationAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationAction  ::=  INTEGER {
 *     ra-reg-request  (0),
 *     ra-reg-result   (1)
 * }
 * ```
 */
export
type RegistrationAction = INTEGER;

/**
 * @summary RegistrationAction_ra_reg_request
 * @constant
 * @type {number}
 */
export
const RegistrationAction_ra_reg_request: RegistrationAction = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RegistrationAction_ra_reg_request
 * @constant
 * @type {number}
 */
export
const ra_reg_request: RegistrationAction = RegistrationAction_ra_reg_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RegistrationAction_ra_reg_result
 * @constant
 * @type {number}
 */
export
const RegistrationAction_ra_reg_result: RegistrationAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RegistrationAction_ra_reg_result
 * @constant
 * @type {number}
 */
export
const ra_reg_result: RegistrationAction = RegistrationAction_ra_reg_result; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_RegistrationAction: $.ASN1Decoder<RegistrationAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RegistrationAction (el: _Element): RegistrationAction {
    if (!_cached_decoder_for_RegistrationAction) { _cached_decoder_for_RegistrationAction = $._decodeInteger; }
    return _cached_decoder_for_RegistrationAction(el);
}

let _cached_encoder_for_RegistrationAction: $.ASN1Encoder<RegistrationAction> | null = null;

/**
 * @summary Encodes a(n) RegistrationAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationAction, encoded as an ASN.1 Element.
 */
export
function _encode_RegistrationAction (value: RegistrationAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RegistrationAction) { _cached_encoder_for_RegistrationAction = $._encodeInteger; }
    return _cached_encoder_for_RegistrationAction(value, elGetter);
}


/* eslint-enable */
