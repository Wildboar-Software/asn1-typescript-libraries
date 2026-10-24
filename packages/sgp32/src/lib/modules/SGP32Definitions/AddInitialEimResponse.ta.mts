/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type AddInitialEimResponse_addInitialEimOk_Item, _decode_AddInitialEimResponse_addInitialEimOk_Item, _encode_AddInitialEimResponse_addInitialEimOk_Item } from "../SGP32Definitions/AddInitialEimResponse-addInitialEimOk-Item.ta.mjs";
import { type AddInitialEimResponse_addInitialEimError, _decode_AddInitialEimResponse_addInitialEimError, _encode_AddInitialEimResponse_addInitialEimError } from "../SGP32Definitions/AddInitialEimResponse-addInitialEimError.ta.mjs";


/**
 * @summary AddInitialEimResponse
 * @description
 *
 * ES10b.AddInitialEim response. addInitialEimOk contains one entry per stored
 * eIM Configuration Data item after the atomic store succeeds.
 * addInitialEimError is selected when any check in section 5.9.4 fails; stored
 * eIM Configuration Data stays as it was.
 *
 * SGP.32 v1.2, sections 3.5.2.1 and 5.9.4.
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
