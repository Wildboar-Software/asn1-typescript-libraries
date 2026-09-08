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
import { ServerKeyExchange_rsa, _decode_ServerKeyExchange_rsa, _encode_ServerKeyExchange_rsa } from "../TSM/ServerKeyExchange-rsa.ta.mjs";

import { ServerKeyExchange_diffie_hellman, _decode_ServerKeyExchange_diffie_hellman, _encode_ServerKeyExchange_diffie_hellman } from "../TSM/ServerKeyExchange-diffie-hellman.ta.mjs";



/**
 * @summary ServerKeyExchange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerKeyExchange     ::=     CHOICE {
 * rsa        SEQUENCE {
 *     params        ServerRSAParams,
 *     signed-params    Signature
 *       },
 * diffie-hellman    SEQUENCE {
 *     params        ServerDHParams,
 *     signed-params   Signature
 *     },
 * ...
 * }
 * ```
 */
export
type ServerKeyExchange =
    { rsa: ServerKeyExchange_rsa } /* CHOICE_ALT_ROOT */
    | { diffie_hellman: ServerKeyExchange_diffie_hellman } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ServerKeyExchange: $.ASN1Decoder<ServerKeyExchange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServerKeyExchange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServerKeyExchange (el: _Element): ServerKeyExchange {
    if (!_cached_decoder_for_ServerKeyExchange) { _cached_decoder_for_ServerKeyExchange = $._decode_extensible_choice<ServerKeyExchange>({
    "CONTEXT 0": [ "rsa", _decode_ServerKeyExchange_rsa ],
    "CONTEXT 1": [ "diffie_hellman", _decode_ServerKeyExchange_diffie_hellman ]
}); }
    return _cached_decoder_for_ServerKeyExchange(el);
}

let _cached_encoder_for_ServerKeyExchange: $.ASN1Encoder<ServerKeyExchange> | null = null;

/**
 * @summary Encodes a(n) ServerKeyExchange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServerKeyExchange, encoded as an ASN.1 Element.
 */
export
function _encode_ServerKeyExchange (value: ServerKeyExchange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServerKeyExchange) { _cached_encoder_for_ServerKeyExchange = $._encode_choice<ServerKeyExchange>({
    "rsa": _encode_ServerKeyExchange_rsa,
    "diffie_hellman": _encode_ServerKeyExchange_diffie_hellman,
}, $.BER); }
    return _cached_encoder_for_ServerKeyExchange(value, elGetter);
}


/* eslint-enable */
