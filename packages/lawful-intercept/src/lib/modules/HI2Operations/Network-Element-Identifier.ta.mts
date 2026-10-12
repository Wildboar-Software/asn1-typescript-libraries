/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";


/**
 * @summary Network_Element_Identifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Network-Element-Identifier  ::=  CHOICE
 * {
 *     e164-Format            [1] OCTET STRING (SIZE (1..25)),
 *         -- E164 address of the node in international format. Coded in the same format as the
 *         -- calling party number parameter of the ISUP (parameter part: EN 300 356 [5]).
 *     x25-Format            [2] OCTET STRING (SIZE (1..25)),
 *         -- X25 address
 *     iP-Format            [3] OCTET STRING (SIZE (1..25)),
 *         -- IP address
 *     dNS-Format            [4] OCTET STRING (SIZE (1..25)),
 *         -- DNS address
 *     ...,
 *     iP-Address            [5] IPAddress
 * }
 * ```
 */
export
type Network_Element_Identifier =
    { e164_Format: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { x25_Format: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { iP_Format: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { dNS_Format: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { iP_Address: IPAddress } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Network_Element_Identifier: $.ASN1Decoder<Network_Element_Identifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Network_Element_Identifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Network_Element_Identifier (el: _Element): Network_Element_Identifier {
    if (!_cached_decoder_for_Network_Element_Identifier) { _cached_decoder_for_Network_Element_Identifier = $._decode_extensible_choice<Network_Element_Identifier>({
    "CONTEXT 1": [ "e164_Format", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "x25_Format", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 3": [ "iP_Format", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 4": [ "dNS_Format", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 5": [ "iP_Address", $._decode_implicit<IPAddress>(() => _decode_IPAddress) ]
}); }
    return _cached_decoder_for_Network_Element_Identifier(el);
}

let _cached_encoder_for_Network_Element_Identifier: $.ASN1Encoder<Network_Element_Identifier> | null = null;

/**
 * @summary Encodes a(n) Network_Element_Identifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Network_Element_Identifier, encoded as an ASN.1 Element.
 */
export
function _encode_Network_Element_Identifier (value: Network_Element_Identifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Network_Element_Identifier) { _cached_encoder_for_Network_Element_Identifier = $._encode_choice<Network_Element_Identifier>({
    "e164_Format": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "x25_Format": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
    "iP_Format": $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER),
    "dNS_Format": $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER),
    "iP_Address": $._encode_implicit(_TagClass.context, 5, () => _encode_IPAddress, $.BER),
}, $.BER); }
    return _cached_encoder_for_Network_Element_Identifier(value, elGetter);
}


/* eslint-enable */
