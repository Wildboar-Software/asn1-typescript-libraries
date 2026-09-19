/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AddressListDesignator_type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddressListDesignator-type ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AddressListDesignator_type = INTEGER;

/**
 * @summary AddressListDesignator_type_primaryAddressList
 * @constant
 * @type {number}
 */
export
const AddressListDesignator_type_primaryAddressList: AddressListDesignator_type = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListDesignator_type_primaryAddressList
 * @constant
 * @type {number}
 */
export
const primaryAddressList: AddressListDesignator_type = AddressListDesignator_type_primaryAddressList; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListDesignator_type_copyAddressList
 * @constant
 * @type {number}
 */
export
const AddressListDesignator_type_copyAddressList: AddressListDesignator_type = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListDesignator_type_copyAddressList
 * @constant
 * @type {number}
 */
export
const copyAddressList: AddressListDesignator_type = AddressListDesignator_type_copyAddressList; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_AddressListDesignator_type: $.ASN1Decoder<AddressListDesignator_type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddressListDesignator_type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddressListDesignator_type (el: _Element): AddressListDesignator_type {
    if (!_cached_decoder_for_AddressListDesignator_type) { _cached_decoder_for_AddressListDesignator_type = $._decodeInteger; }
    return _cached_decoder_for_AddressListDesignator_type(el);
}

let _cached_encoder_for_AddressListDesignator_type: $.ASN1Encoder<AddressListDesignator_type> | null = null;

/**
 * @summary Encodes a(n) AddressListDesignator_type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddressListDesignator_type, encoded as an ASN.1 Element.
 */
export
function _encode_AddressListDesignator_type (value: AddressListDesignator_type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddressListDesignator_type) { _cached_encoder_for_AddressListDesignator_type = $._encodeInteger; }
    return _cached_encoder_for_AddressListDesignator_type(value, elGetter);
}


/* eslint-enable */
