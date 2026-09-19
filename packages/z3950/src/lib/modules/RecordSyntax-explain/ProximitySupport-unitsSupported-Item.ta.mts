/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProximitySupport_unitsSupported_Item_private, _decode_ProximitySupport_unitsSupported_Item_private, _encode_ProximitySupport_unitsSupported_Item_private } from "../RecordSyntax-explain/ProximitySupport-unitsSupported-Item-private.ta.mjs";
// export { ProximitySupport_unitsSupported_Item_private, _decode_ProximitySupport_unitsSupported_Item_private, _encode_ProximitySupport_unitsSupported_Item_private } from "../RecordSyntax-explain/ProximitySupport-unitsSupported-Item-private.ta.mjs";


/**
 * @summary ProximitySupport_unitsSupported_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProximitySupport-unitsSupported-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ProximitySupport_unitsSupported_Item =
    { known: INTEGER } /* CHOICE_ALT_ROOT */
    | { private_: ProximitySupport_unitsSupported_Item_private } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ProximitySupport_unitsSupported_Item: $.ASN1Decoder<ProximitySupport_unitsSupported_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProximitySupport_unitsSupported_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProximitySupport_unitsSupported_Item (el: _Element): ProximitySupport_unitsSupported_Item {
    if (!_cached_decoder_for_ProximitySupport_unitsSupported_Item) { _cached_decoder_for_ProximitySupport_unitsSupported_Item = $._decode_inextensible_choice<ProximitySupport_unitsSupported_Item>({
    "CONTEXT 1": [ "known", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 2": [ "private_", $._decode_implicit<ProximitySupport_unitsSupported_Item_private>(() => _decode_ProximitySupport_unitsSupported_Item_private) ]
}); }
    return _cached_decoder_for_ProximitySupport_unitsSupported_Item(el);
}

let _cached_encoder_for_ProximitySupport_unitsSupported_Item: $.ASN1Encoder<ProximitySupport_unitsSupported_Item> | null = null;

/**
 * @summary Encodes a(n) ProximitySupport_unitsSupported_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProximitySupport_unitsSupported_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ProximitySupport_unitsSupported_Item (value: ProximitySupport_unitsSupported_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProximitySupport_unitsSupported_Item) { _cached_encoder_for_ProximitySupport_unitsSupported_Item = $._encode_choice<ProximitySupport_unitsSupported_Item>({
    "known": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "private_": $._encode_implicit(_TagClass.context, 2, () => _encode_ProximitySupport_unitsSupported_Item_private, $.BER),
}, $.BER); }
    return _cached_encoder_for_ProximitySupport_unitsSupported_Item(value, elGetter);
}


/* eslint-enable */
