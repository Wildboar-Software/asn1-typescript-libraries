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
import { OtherHashValue, _decode_OtherHashValue, _encode_OtherHashValue } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OtherHashValue.ta.mjs";
import { OtherHashAlgAndValue, _decode_OtherHashAlgAndValue, _encode_OtherHashAlgAndValue } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OtherHashAlgAndValue.ta.mjs";
/**
 * @summary OtherHash
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherHash  ::=  CHOICE {
 *     sha1Hash    OtherHashValue, -- This contains a SHA-1 hash
 *     otherHash   OtherHashAlgAndValue }
 * ```
 */
export
type OtherHash =
    { sha1Hash: OtherHashValue } /* CHOICE_ALT_ROOT */
    | { otherHash: OtherHashAlgAndValue } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_OtherHash: $.ASN1Decoder<OtherHash> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherHash
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherHash} The decoded data structure.
 */
export
function _decode_OtherHash (el: _Element): OtherHash {
    if (!_cached_decoder_for_OtherHash) { _cached_decoder_for_OtherHash = $._decode_inextensible_choice<OtherHash>({
    "UNIVERSAL 4": [ "sha1Hash", _decode_OtherHashValue ],
    "UNIVERSAL 16": [ "otherHash", _decode_OtherHashAlgAndValue ]
}); }
    return _cached_decoder_for_OtherHash(el);
}

let _cached_encoder_for_OtherHash: $.ASN1Encoder<OtherHash> | null = null;

/**
 * @summary Encodes a(n) OtherHash into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherHash, encoded as an ASN.1 Element.
 */
export
function _encode_OtherHash (value: OtherHash, elGetter: $.ASN1Encoder<OtherHash>): _Element {
    if (!_cached_encoder_for_OtherHash) { _cached_encoder_for_OtherHash = $._encode_choice<OtherHash>({
    "sha1Hash": _encode_OtherHashValue,
    "otherHash": _encode_OtherHashAlgAndValue,
}, $.DER); }
    return _cached_encoder_for_OtherHash(value, elGetter);
}


/* eslint-enable */
