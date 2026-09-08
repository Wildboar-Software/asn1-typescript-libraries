/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Opaque, _decode_Opaque, _encode_Opaque } from "../TSM/Opaque.ta.mjs";



/**
 * @summary ClientDiffieHellmanPublic
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientDiffieHellmanPublic     ::=     CHOICE {
 * implicit    NULL,
 * explicit    Opaque(SIZE(1..65535))
 * }
 * ```
 */
export
type ClientDiffieHellmanPublic =
    { implicit: NULL } /* CHOICE_ALT_ROOT */
    | { explicit: Opaque } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ClientDiffieHellmanPublic: $.ASN1Decoder<ClientDiffieHellmanPublic> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientDiffieHellmanPublic
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientDiffieHellmanPublic (el: _Element): ClientDiffieHellmanPublic {
    if (!_cached_decoder_for_ClientDiffieHellmanPublic) { _cached_decoder_for_ClientDiffieHellmanPublic = $._decode_inextensible_choice<ClientDiffieHellmanPublic>({
    "CONTEXT 0": [ "implicit", $._decodeNull ],
    "CONTEXT 1": [ "explicit", _decode_Opaque ]
}); }
    return _cached_decoder_for_ClientDiffieHellmanPublic(el);
}

let _cached_encoder_for_ClientDiffieHellmanPublic: $.ASN1Encoder<ClientDiffieHellmanPublic> | null = null;

/**
 * @summary Encodes a(n) ClientDiffieHellmanPublic into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientDiffieHellmanPublic, encoded as an ASN.1 Element.
 */
export
function _encode_ClientDiffieHellmanPublic (value: ClientDiffieHellmanPublic, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientDiffieHellmanPublic) { _cached_encoder_for_ClientDiffieHellmanPublic = $._encode_choice<ClientDiffieHellmanPublic>({
    "implicit": $._encodeNull,
    "explicit": _encode_Opaque,
}, $.BER); }
    return _cached_encoder_for_ClientDiffieHellmanPublic(value, elGetter);
}


/* eslint-enable */
