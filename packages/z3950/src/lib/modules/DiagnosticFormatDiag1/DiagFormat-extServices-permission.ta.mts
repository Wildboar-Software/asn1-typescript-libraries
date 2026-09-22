/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_extServices_permission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-extServices-permission ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_extServices_permission = INTEGER;

/**
 * @summary DiagFormat_extServices_permission_id
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_permission_id: DiagFormat_extServices_permission = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_permission_id
 * @constant
 * @type {number}
 */
export
const id: DiagFormat_extServices_permission = DiagFormat_extServices_permission_id; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_permission_modifyDelete
 * @constant
 * @type {number}
 */
export
const DiagFormat_extServices_permission_modifyDelete: DiagFormat_extServices_permission = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_extServices_permission_modifyDelete
 * @constant
 * @type {number}
 */
export
const modifyDelete: DiagFormat_extServices_permission = DiagFormat_extServices_permission_modifyDelete; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagFormat_extServices_permission: $.ASN1Decoder<DiagFormat_extServices_permission> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_extServices_permission
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_extServices_permission (el: _Element): DiagFormat_extServices_permission {
    if (!_cached_decoder_for_DiagFormat_extServices_permission) { _cached_decoder_for_DiagFormat_extServices_permission = $._decodeInteger; }
    return _cached_decoder_for_DiagFormat_extServices_permission(el);
}

let _cached_encoder_for_DiagFormat_extServices_permission: $.ASN1Encoder<DiagFormat_extServices_permission> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_extServices_permission into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_extServices_permission, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_extServices_permission (value: DiagFormat_extServices_permission, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_extServices_permission) { _cached_encoder_for_DiagFormat_extServices_permission = $._encodeInteger; }
    return _cached_encoder_for_DiagFormat_extServices_permission(value, elGetter);
}


/* eslint-enable */
