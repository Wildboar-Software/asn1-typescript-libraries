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
import { OtherHashAlgAndValue, _decode_OtherHashAlgAndValue, _encode_OtherHashAlgAndValue } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OtherHashAlgAndValue.ta.mjs";
/**
 * @summary SigPolicyHash
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SigPolicyHash  ::=  OtherHashAlgAndValue
 * ```
 */
export
type SigPolicyHash = OtherHashAlgAndValue; // DefinedType

let _cached_decoder_for_SigPolicyHash: $.ASN1Decoder<SigPolicyHash> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SigPolicyHash
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SigPolicyHash} The decoded data structure.
 */
export
function _decode_SigPolicyHash (el: _Element): SigPolicyHash {
    if (!_cached_decoder_for_SigPolicyHash) { _cached_decoder_for_SigPolicyHash = _decode_OtherHashAlgAndValue; }
    return _cached_decoder_for_SigPolicyHash(el);
}

let _cached_encoder_for_SigPolicyHash: $.ASN1Encoder<SigPolicyHash> | null = null;

/**
 * @summary Encodes a(n) SigPolicyHash into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigPolicyHash, encoded as an ASN.1 Element.
 */
export
function _encode_SigPolicyHash (value: SigPolicyHash, elGetter: $.ASN1Encoder<SigPolicyHash>): _Element {
    if (!_cached_encoder_for_SigPolicyHash) { _cached_encoder_for_SigPolicyHash = _encode_OtherHashAlgAndValue; }
    return _cached_encoder_for_SigPolicyHash(value, elGetter);
}


/* eslint-enable */
