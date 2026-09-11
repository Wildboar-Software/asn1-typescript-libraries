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
import { Opaque, _decode_Opaque, _encode_Opaque } from "../TSM/Opaque.ta.mjs";



/**
 * @summary ClientKeyExchange
 * @description
 *
 * TLS ClientKeyExchange as opaque `SIZE(0..65535)` (RSA premaster or
 * DH public). Structured `PreMasterSecret` /
 * `ClientDiffieHellmanPublic` are defined separately. ITU-T Rec.
 * X.1084 (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientKeyExchange     ::=     Opaque(SIZE(0..65535))
 * ```
 */
export
type ClientKeyExchange = Opaque; // DefinedType

let _cached_decoder_for_ClientKeyExchange: $.ASN1Decoder<ClientKeyExchange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientKeyExchange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientKeyExchange (el: _Element): ClientKeyExchange {
    if (!_cached_decoder_for_ClientKeyExchange) { _cached_decoder_for_ClientKeyExchange = _decode_Opaque; }
    return _cached_decoder_for_ClientKeyExchange(el);
}

let _cached_encoder_for_ClientKeyExchange: $.ASN1Encoder<ClientKeyExchange> | null = null;

/**
 * @summary Encodes a(n) ClientKeyExchange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientKeyExchange, encoded as an ASN.1 Element.
 */
export
function _encode_ClientKeyExchange (value: ClientKeyExchange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientKeyExchange) { _cached_encoder_for_ClientKeyExchange = _encode_Opaque; }
    return _cached_encoder_for_ClientKeyExchange(value, elGetter);
}


/* eslint-enable */
