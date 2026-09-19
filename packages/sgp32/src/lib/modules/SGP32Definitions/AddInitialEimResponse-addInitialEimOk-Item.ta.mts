/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AddInitialEimResponse_addInitialEimOk_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddInitialEimResponse-addInitialEimOk-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AddInitialEimResponse_addInitialEimOk_Item =
    { associationToken: INTEGER } /* CHOICE_ALT_ROOT */
    | { addOk: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AddInitialEimResponse_addInitialEimOk_Item: $.ASN1Decoder<AddInitialEimResponse_addInitialEimOk_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddInitialEimResponse_addInitialEimOk_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddInitialEimResponse_addInitialEimOk_Item (el: _Element): AddInitialEimResponse_addInitialEimOk_Item {
    if (!_cached_decoder_for_AddInitialEimResponse_addInitialEimOk_Item) { _cached_decoder_for_AddInitialEimResponse_addInitialEimOk_Item = $._decode_inextensible_choice<AddInitialEimResponse_addInitialEimOk_Item>({
    "CONTEXT 4": [ "associationToken", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "UNIVERSAL 5": [ "addOk", $._decodeNull ]
}); }
    return _cached_decoder_for_AddInitialEimResponse_addInitialEimOk_Item(el);
}

let _cached_encoder_for_AddInitialEimResponse_addInitialEimOk_Item: $.ASN1Encoder<AddInitialEimResponse_addInitialEimOk_Item> | null = null;

/**
 * @summary Encodes a(n) AddInitialEimResponse_addInitialEimOk_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddInitialEimResponse_addInitialEimOk_Item, encoded as an ASN.1 Element.
 */
export
function _encode_AddInitialEimResponse_addInitialEimOk_Item (value: AddInitialEimResponse_addInitialEimOk_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddInitialEimResponse_addInitialEimOk_Item) { _cached_encoder_for_AddInitialEimResponse_addInitialEimOk_Item = $._encode_choice<AddInitialEimResponse_addInitialEimOk_Item>({
    "associationToken": $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER),
    "addOk": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_AddInitialEimResponse_addInitialEimOk_Item(value, elGetter);
}


/* eslint-enable */
