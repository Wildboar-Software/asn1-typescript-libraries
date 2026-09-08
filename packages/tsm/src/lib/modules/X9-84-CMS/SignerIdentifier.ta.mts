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
import { Hash, _decode_Hash, _encode_Hash } from "../X9-84-CMS/Hash.ta.mjs";



/**
 * @summary SignerIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignerIdentifier  ::=  CHOICE {
 *    certHash  [1] EXPLICIT Hash
 * }
 * ```
 */
export
type SignerIdentifier =
    { certHash: Hash } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SignerIdentifier: $.ASN1Decoder<SignerIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignerIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignerIdentifier (el: _Element): SignerIdentifier {
    if (!_cached_decoder_for_SignerIdentifier) { _cached_decoder_for_SignerIdentifier = $._decode_inextensible_choice<SignerIdentifier>({
    "CONTEXT 1": [ "certHash", $._decode_explicit<Hash>(() => _decode_Hash) ]
}); }
    return _cached_decoder_for_SignerIdentifier(el);
}

let _cached_encoder_for_SignerIdentifier: $.ASN1Encoder<SignerIdentifier> | null = null;

/**
 * @summary Encodes a(n) SignerIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignerIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_SignerIdentifier (value: SignerIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignerIdentifier) { _cached_encoder_for_SignerIdentifier = $._encode_choice<SignerIdentifier>({
    "certHash": $._encode_explicit(_TagClass.context, 1, () => _encode_Hash, $.BER),
}, $.BER); }
    return _cached_encoder_for_SignerIdentifier(value, elGetter);
}


/* eslint-enable */
