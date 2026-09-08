/* eslint-disable */
import {
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
import { GenericStreamCipher, _decode_GenericStreamCipher, _encode_GenericStreamCipher } from "../TSM/GenericStreamCipher.ta.mjs";

import { GenericBlockCipher, _decode_GenericBlockCipher, _encode_GenericBlockCipher } from "../TSM/GenericBlockCipher.ta.mjs";



/**
 * @summary TSMCipherText_fragment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSMCipherText-fragment ::= CHOICE {
 *     stream  GenericStreamCipher,
 *     block   GenericBlockCipher
 * }
 * ```
 */
export
type TSMCipherText_fragment =
    { stream: GenericStreamCipher } /* CHOICE_ALT_ROOT */
    | { block: GenericBlockCipher } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TSMCipherText_fragment: $.ASN1Decoder<TSMCipherText_fragment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSMCipherText_fragment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSMCipherText_fragment (el: _Element): TSMCipherText_fragment {
    if (!_cached_decoder_for_TSMCipherText_fragment) { _cached_decoder_for_TSMCipherText_fragment = $._decode_inextensible_choice<TSMCipherText_fragment>({
    "CONTEXT 0": [ "stream", _decode_GenericStreamCipher ],
    "CONTEXT 1": [ "block", _decode_GenericBlockCipher ]
}); }
    return _cached_decoder_for_TSMCipherText_fragment(el);
}

let _cached_encoder_for_TSMCipherText_fragment: $.ASN1Encoder<TSMCipherText_fragment> | null = null;

/**
 * @summary Encodes a(n) TSMCipherText_fragment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSMCipherText_fragment, encoded as an ASN.1 Element.
 */
export
function _encode_TSMCipherText_fragment (value: TSMCipherText_fragment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSMCipherText_fragment) { _cached_encoder_for_TSMCipherText_fragment = $._encode_choice<TSMCipherText_fragment>({
    "stream": _encode_GenericStreamCipher,
    "block": _encode_GenericBlockCipher,
}, $.BER); }
    return _cached_encoder_for_TSMCipherText_fragment(value, elGetter);
}


/* eslint-enable */
