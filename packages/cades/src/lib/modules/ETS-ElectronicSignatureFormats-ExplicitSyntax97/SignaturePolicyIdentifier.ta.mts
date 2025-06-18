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
import { SignaturePolicyId, _decode_SignaturePolicyId, _encode_SignaturePolicyId } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SignaturePolicyId.ta.mjs";
import { SignaturePolicyImplied, _decode_SignaturePolicyImplied, _encode_SignaturePolicyImplied } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SignaturePolicyImplied.ta.mjs";
/**
 * @summary SignaturePolicyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignaturePolicyIdentifier  ::=  CHOICE {
 *     signaturePolicyId           SignaturePolicyId,
 *     signaturePolicyImplied      SignaturePolicyImplied
 *     -- not used in this version
 *     }
 * ```
 */
export
type SignaturePolicyIdentifier =
    { signaturePolicyId: SignaturePolicyId } /* CHOICE_ALT_ROOT */
    | { signaturePolicyImplied: SignaturePolicyImplied } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SignaturePolicyIdentifier: $.ASN1Decoder<SignaturePolicyIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignaturePolicyIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignaturePolicyIdentifier} The decoded data structure.
 */
export
function _decode_SignaturePolicyIdentifier (el: _Element) {
    if (!_cached_decoder_for_SignaturePolicyIdentifier) { _cached_decoder_for_SignaturePolicyIdentifier = $._decode_inextensible_choice<SignaturePolicyIdentifier>({
    "UNIVERSAL 16": [ "signaturePolicyId", _decode_SignaturePolicyId ],
    "UNIVERSAL 5": [ "signaturePolicyImplied", _decode_SignaturePolicyImplied ]
}); }
    return _cached_decoder_for_SignaturePolicyIdentifier(el);
}

let _cached_encoder_for_SignaturePolicyIdentifier: $.ASN1Encoder<SignaturePolicyIdentifier> | null = null;

/**
 * @summary Encodes a(n) SignaturePolicyIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignaturePolicyIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_SignaturePolicyIdentifier (value: SignaturePolicyIdentifier, elGetter: $.ASN1Encoder<SignaturePolicyIdentifier>) {
    if (!_cached_encoder_for_SignaturePolicyIdentifier) { _cached_encoder_for_SignaturePolicyIdentifier = $._encode_choice<SignaturePolicyIdentifier>({
    "signaturePolicyId": _encode_SignaturePolicyId,
    "signaturePolicyImplied": _encode_SignaturePolicyImplied,
}, $.DER); }
    return _cached_encoder_for_SignaturePolicyIdentifier(value, elGetter);
}


/* eslint-enable */
