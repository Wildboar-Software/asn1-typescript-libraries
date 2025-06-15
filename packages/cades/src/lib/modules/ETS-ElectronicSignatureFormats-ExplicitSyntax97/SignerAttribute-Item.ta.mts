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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ClaimedAttributes, _decode_ClaimedAttributes, _encode_ClaimedAttributes } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/ClaimedAttributes.ta.mjs";
import { CertifiedAttributes, _decode_CertifiedAttributes, _encode_CertifiedAttributes } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/CertifiedAttributes.ta.mjs";
/**
 * @summary SignerAttribute_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignerAttribute-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SignerAttribute_Item =
    { claimedAttributes: ClaimedAttributes } /* CHOICE_ALT_ROOT */
    | { certifiedAttributes: CertifiedAttributes } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SignerAttribute_Item: $.ASN1Decoder<SignerAttribute_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignerAttribute_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignerAttribute_Item} The decoded data structure.
 */
export
function _decode_SignerAttribute_Item (el: _Element) {
    if (!_cached_decoder_for_SignerAttribute_Item) { _cached_decoder_for_SignerAttribute_Item = $._decode_inextensible_choice<SignerAttribute_Item>({
    "CONTEXT 0": [ "claimedAttributes", $._decode_implicit<ClaimedAttributes>(() => _decode_ClaimedAttributes) ],
    "CONTEXT 1": [ "certifiedAttributes", $._decode_implicit<CertifiedAttributes>(() => _decode_CertifiedAttributes) ]
}); }
    return _cached_decoder_for_SignerAttribute_Item(el);
}

let _cached_encoder_for_SignerAttribute_Item: $.ASN1Encoder<SignerAttribute_Item> | null = null;

/**
 * @summary Encodes a(n) SignerAttribute_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignerAttribute_Item, encoded as an ASN.1 Element.
 */
export
function _encode_SignerAttribute_Item (value: SignerAttribute_Item, elGetter: $.ASN1Encoder<SignerAttribute_Item>) {
    if (!_cached_encoder_for_SignerAttribute_Item) { _cached_encoder_for_SignerAttribute_Item = $._encode_choice<SignerAttribute_Item>({
    "claimedAttributes": $._encode_implicit(_TagClass.context, 0, () => _encode_ClaimedAttributes, $.BER),
    "certifiedAttributes": $._encode_implicit(_TagClass.context, 1, () => _encode_CertifiedAttributes, $.BER),
}, $.BER); }
    return _cached_encoder_for_SignerAttribute_Item(value, elGetter);
}


/* eslint-enable */
