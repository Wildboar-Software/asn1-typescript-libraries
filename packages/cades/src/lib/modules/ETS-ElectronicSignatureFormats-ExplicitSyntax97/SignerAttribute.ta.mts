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
import * as $ from "@wildboar/asn1/functional";
import { SignerAttribute_Item, _decode_SignerAttribute_Item, _encode_SignerAttribute_Item } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SignerAttribute-Item.ta.mjs";
/**
 * @summary SignerAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignerAttribute  ::=  SEQUENCE OF CHOICE {
 *     claimedAttributes       [0] ClaimedAttributes,
 *     certifiedAttributes     [1] CertifiedAttributes }
 * ```
 */
export
type SignerAttribute = SignerAttribute_Item[]; // SequenceOfType

let _cached_decoder_for_SignerAttribute: $.ASN1Decoder<SignerAttribute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignerAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignerAttribute} The decoded data structure.
 */
export
function _decode_SignerAttribute (el: _Element) {
    if (!_cached_decoder_for_SignerAttribute) { _cached_decoder_for_SignerAttribute = $._decodeSequenceOf<SignerAttribute_Item>(() => _decode_SignerAttribute_Item); }
    return _cached_decoder_for_SignerAttribute(el);
}

let _cached_encoder_for_SignerAttribute: $.ASN1Encoder<SignerAttribute> | null = null;

/**
 * @summary Encodes a(n) SignerAttribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignerAttribute, encoded as an ASN.1 Element.
 */
export
function _encode_SignerAttribute (value: SignerAttribute, elGetter: $.ASN1Encoder<SignerAttribute>) {
    if (!_cached_encoder_for_SignerAttribute) { _cached_encoder_for_SignerAttribute = $._encodeSequenceOf<SignerAttribute_Item>(() => _encode_SignerAttribute_Item, $.DER); }
    return _cached_encoder_for_SignerAttribute(value, elGetter);
}


/* eslint-enable */
