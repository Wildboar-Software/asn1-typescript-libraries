/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Permissions_Item_allowableFunctions_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Permissions-Item-allowableFunctions-Item ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Permissions_Item_allowableFunctions_Item = INTEGER;

/**
 * @summary Permissions_Item_allowableFunctions_Item_delete_
 * @constant
 * @type {number}
 */
export
const Permissions_Item_allowableFunctions_Item_delete_: Permissions_Item_allowableFunctions_Item = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_delete_
 * @constant
 * @type {number}
 */
export
const delete_: Permissions_Item_allowableFunctions_Item = Permissions_Item_allowableFunctions_Item_delete_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_modifyContents
 * @constant
 * @type {number}
 */
export
const Permissions_Item_allowableFunctions_Item_modifyContents: Permissions_Item_allowableFunctions_Item = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_modifyContents
 * @constant
 * @type {number}
 */
export
const modifyContents: Permissions_Item_allowableFunctions_Item = Permissions_Item_allowableFunctions_Item_modifyContents; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_modifyPermissions
 * @constant
 * @type {number}
 */
export
const Permissions_Item_allowableFunctions_Item_modifyPermissions: Permissions_Item_allowableFunctions_Item = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_modifyPermissions
 * @constant
 * @type {number}
 */
export
const modifyPermissions: Permissions_Item_allowableFunctions_Item = Permissions_Item_allowableFunctions_Item_modifyPermissions; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_present
 * @constant
 * @type {number}
 */
export
const Permissions_Item_allowableFunctions_Item_present: Permissions_Item_allowableFunctions_Item = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_present
 * @constant
 * @type {number}
 */
export
const present: Permissions_Item_allowableFunctions_Item = Permissions_Item_allowableFunctions_Item_present; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_invoke
 * @constant
 * @type {number}
 */
export
const Permissions_Item_allowableFunctions_Item_invoke: Permissions_Item_allowableFunctions_Item = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Permissions_Item_allowableFunctions_Item_invoke
 * @constant
 * @type {number}
 */
export
const invoke: Permissions_Item_allowableFunctions_Item = Permissions_Item_allowableFunctions_Item_invoke; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_Permissions_Item_allowableFunctions_Item: $.ASN1Decoder<Permissions_Item_allowableFunctions_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Permissions_Item_allowableFunctions_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Permissions_Item_allowableFunctions_Item (el: _Element): Permissions_Item_allowableFunctions_Item {
    if (!_cached_decoder_for_Permissions_Item_allowableFunctions_Item) { _cached_decoder_for_Permissions_Item_allowableFunctions_Item = $._decodeInteger; }
    return _cached_decoder_for_Permissions_Item_allowableFunctions_Item(el);
}

let _cached_encoder_for_Permissions_Item_allowableFunctions_Item: $.ASN1Encoder<Permissions_Item_allowableFunctions_Item> | null = null;

/**
 * @summary Encodes a(n) Permissions_Item_allowableFunctions_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Permissions_Item_allowableFunctions_Item, encoded as an ASN.1 Element.
 */
export
function _encode_Permissions_Item_allowableFunctions_Item (value: Permissions_Item_allowableFunctions_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Permissions_Item_allowableFunctions_Item) { _cached_encoder_for_Permissions_Item_allowableFunctions_Item = $._encodeInteger; }
    return _cached_encoder_for_Permissions_Item_allowableFunctions_Item(value, elGetter);
}


/* eslint-enable */
