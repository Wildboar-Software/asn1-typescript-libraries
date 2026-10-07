/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Permissions_Item_allowableFunctions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Permissions-Item-allowableFunctions ::= INTEGER {
 *     delete             (1),
 *     modifyContents     (2),
 *     modifyPermissions  (3),
 *     present            (4),
 *     invoke             (5)
 * }
 * ```
 */
export
type Permissions_Item_allowableFunctions = INTEGER;

/**
 * @summary Permissions_Item_allowableFunctions_delete_
 * @constant
 */
export
const Permissions_Item_allowableFunctions_delete_: Permissions_Item_allowableFunctions = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_delete_
 * @constant
 */
export
const delete_: Permissions_Item_allowableFunctions = Permissions_Item_allowableFunctions_delete_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_modifyContents
 * @constant
 */
export
const Permissions_Item_allowableFunctions_modifyContents: Permissions_Item_allowableFunctions = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_modifyContents
 * @constant
 */
export
const modifyContents: Permissions_Item_allowableFunctions = Permissions_Item_allowableFunctions_modifyContents; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_modifyPermissions
 * @constant
 */
export
const Permissions_Item_allowableFunctions_modifyPermissions: Permissions_Item_allowableFunctions = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_modifyPermissions
 * @constant
 */
export
const modifyPermissions: Permissions_Item_allowableFunctions = Permissions_Item_allowableFunctions_modifyPermissions; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_present
 * @constant
 */
export
const Permissions_Item_allowableFunctions_present: Permissions_Item_allowableFunctions = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_present
 * @constant
 */
export
const present: Permissions_Item_allowableFunctions = Permissions_Item_allowableFunctions_present; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_invoke
 * @constant
 */
export
const Permissions_Item_allowableFunctions_invoke: Permissions_Item_allowableFunctions = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_invoke
 * @constant
 */
export
const invoke: Permissions_Item_allowableFunctions = Permissions_Item_allowableFunctions_invoke; /* SHORT_NAMED_INTEGER_VALUE */


let _cached_decoder_for_Permissions_Item_allowableFunctions: $.ASN1Decoder<Permissions_Item_allowableFunctions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Permissions_Item_allowableFunctions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Permissions_Item_allowableFunctions (el: _Element): Permissions_Item_allowableFunctions {
    if (!_cached_decoder_for_Permissions_Item_allowableFunctions) { _cached_decoder_for_Permissions_Item_allowableFunctions = $._decodeInteger; }
    return _cached_decoder_for_Permissions_Item_allowableFunctions(el);
}

let _cached_encoder_for_Permissions_Item_allowableFunctions: $.ASN1Encoder<Permissions_Item_allowableFunctions> | null = null;

/**
 * @summary Encodes a(n) Permissions_Item_allowableFunctions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Permissions_Item_allowableFunctions, encoded as an ASN.1 Element.
 */
export
function _encode_Permissions_Item_allowableFunctions (value: Permissions_Item_allowableFunctions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Permissions_Item_allowableFunctions) { _cached_encoder_for_Permissions_Item_allowableFunctions = $._encodeInteger; }
    return _cached_encoder_for_Permissions_Item_allowableFunctions(value, elGetter);
}

/* eslint-enable */
