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
import { OtherHashAlgAndValue, _decode_OtherHashAlgAndValue, _encode_OtherHashAlgAndValue } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OtherHashAlgAndValue.ta.mjs";
/* START_OF_SYMBOL_DEFINITION SigPolicyHash */
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
/* END_OF_SYMBOL_DEFINITION SigPolicyHash */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SigPolicyHash */
let _cached_decoder_for_SigPolicyHash: $.ASN1Decoder<SigPolicyHash> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SigPolicyHash */

/* START_OF_SYMBOL_DEFINITION _decode_SigPolicyHash */
/**
 * @summary Decodes an ASN.1 element into a(n) SigPolicyHash
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SigPolicyHash} The decoded data structure.
 */
export
function _decode_SigPolicyHash (el: _Element) {
    if (!_cached_decoder_for_SigPolicyHash) { _cached_decoder_for_SigPolicyHash = _decode_OtherHashAlgAndValue; }
    return _cached_decoder_for_SigPolicyHash(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SigPolicyHash */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SigPolicyHash */
let _cached_encoder_for_SigPolicyHash: $.ASN1Encoder<SigPolicyHash> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SigPolicyHash */

/* START_OF_SYMBOL_DEFINITION _encode_SigPolicyHash */
/**
 * @summary Encodes a(n) SigPolicyHash into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigPolicyHash, encoded as an ASN.1 Element.
 */
export
function _encode_SigPolicyHash (value: SigPolicyHash, elGetter: $.ASN1Encoder<SigPolicyHash>) {
    if (!_cached_encoder_for_SigPolicyHash) { _cached_encoder_for_SigPolicyHash = _encode_OtherHashAlgAndValue; }
    return _cached_encoder_for_SigPolicyHash(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SigPolicyHash */

/* eslint-enable */
