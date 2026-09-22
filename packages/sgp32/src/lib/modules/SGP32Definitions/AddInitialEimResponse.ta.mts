/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AddInitialEimResponse_addInitialEimOk_Item, _decode_AddInitialEimResponse_addInitialEimOk_Item, _encode_AddInitialEimResponse_addInitialEimOk_Item } from "../SGP32Definitions/AddInitialEimResponse-addInitialEimOk-Item.ta.mjs";
// export { AddInitialEimResponse_addInitialEimOk_Item, _decode_AddInitialEimResponse_addInitialEimOk_Item, _encode_AddInitialEimResponse_addInitialEimOk_Item } from "../SGP32Definitions/AddInitialEimResponse-addInitialEimOk-Item.ta.mjs";
import { AddInitialEimResponse_addInitialEimError, _decode_AddInitialEimResponse_addInitialEimError, _encode_AddInitialEimResponse_addInitialEimError } from "../SGP32Definitions/AddInitialEimResponse-addInitialEimError.ta.mjs";
// export { AddInitialEimResponse_addInitialEimError, AddInitialEimResponse_addInitialEimError_insufficientMemory /* IMPORTED_LONG_NAMED_INTEGER */, insufficientMemory /* IMPORTED_SHORT_NAMED_INTEGER */, AddInitialEimResponse_addInitialEimError_associatedEimAlreadyExists /* IMPORTED_LONG_NAMED_INTEGER */, associatedEimAlreadyExists /* IMPORTED_SHORT_NAMED_INTEGER */, AddInitialEimResponse_addInitialEimError_ciPKUnknown /* IMPORTED_LONG_NAMED_INTEGER */, ciPKUnknown /* IMPORTED_SHORT_NAMED_INTEGER */, AddInitialEimResponse_addInitialEimError_invalidAssociationToken /* IMPORTED_LONG_NAMED_INTEGER */, invalidAssociationToken /* IMPORTED_SHORT_NAMED_INTEGER */, AddInitialEimResponse_addInitialEimError_counterValueOutOfRange /* IMPORTED_LONG_NAMED_INTEGER */, counterValueOutOfRange /* IMPORTED_SHORT_NAMED_INTEGER */, AddInitialEimResponse_addInitialEimError_commandError /* IMPORTED_LONG_NAMED_INTEGER */, commandError /* IMPORTED_SHORT_NAMED_INTEGER */, AddInitialEimResponse_addInitialEimError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AddInitialEimResponse_addInitialEimError, _encode_AddInitialEimResponse_addInitialEimError } from "../SGP32Definitions/AddInitialEimResponse-addInitialEimError.ta.mjs";


/**
 * @summary AddInitialEimResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddInitialEimResponse  ::=  [87] CHOICE { -- Tag 'BF57'
 *     addInitialEimOk SEQUENCE OF CHOICE {
 *         associationToken [4] INTEGER,
 *         addOk NULL
 *     },
 *     addInitialEimError INTEGER {
 *         insufficientMemory(1),
 *         associatedEimAlreadyExists (2),
 *         ciPKUnknown(3),
 *         invalidAssociationToken(5),
 *         counterValueOutOfRange(6),
 *         commandError(7),
 *         undefinedError(127)
 *     }
 * }
 * ```
 */
export
type AddInitialEimResponse =
    { addInitialEimOk: AddInitialEimResponse_addInitialEimOk_Item[] } /* CHOICE_ALT_ROOT */
    | { addInitialEimError: AddInitialEimResponse_addInitialEimError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AddInitialEimResponse: $.ASN1Decoder<AddInitialEimResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddInitialEimResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddInitialEimResponse (el: _Element): AddInitialEimResponse {
    if (!_cached_decoder_for_AddInitialEimResponse) { _cached_decoder_for_AddInitialEimResponse = $._decode_explicit<AddInitialEimResponse>(() => $._decode_inextensible_choice<AddInitialEimResponse>({
    "CONTEXT 0": [ "addInitialEimOk", $._decodeSequenceOf<AddInitialEimResponse_addInitialEimOk_Item>(() => _decode_AddInitialEimResponse_addInitialEimOk_Item) ],
    "CONTEXT 1": [ "addInitialEimError", _decode_AddInitialEimResponse_addInitialEimError ]
})); }
    return _cached_decoder_for_AddInitialEimResponse(el);
}

let _cached_encoder_for_AddInitialEimResponse: $.ASN1Encoder<AddInitialEimResponse> | null = null;

/**
 * @summary Encodes a(n) AddInitialEimResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddInitialEimResponse, encoded as an ASN.1 Element.
 */
export
function _encode_AddInitialEimResponse (value: AddInitialEimResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddInitialEimResponse) { _cached_encoder_for_AddInitialEimResponse = $._encode_explicit(_TagClass.context, 87, () => $._encode_choice<AddInitialEimResponse>({
    "addInitialEimOk": $._encodeSequenceOf<AddInitialEimResponse_addInitialEimOk_Item>(() => _encode_AddInitialEimResponse_addInitialEimOk_Item, $.BER),
    "addInitialEimError": _encode_AddInitialEimResponse_addInitialEimError,
}, $.BER), $.BER); }
    return _cached_encoder_for_AddInitialEimResponse(value, elGetter);
}


/* eslint-enable */
