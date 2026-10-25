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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    type String,
    _decode_String,
    _encode_String,
} from '../XSD/String.ta.mjs';


/**
 * @summary SignatureType
 * @description
 *
 * A signature on a notice. Annex B is `String`; Annex A XSD
 * uses W3C XMLDSig `ds:SignatureType`. Notices are signed
 * with the signer's private key (Cmail server, then
 * sender, recipient, or peer server). ITU-T Rec. X.1341
 * (09/2015)
 * [§8.14](https://www.itu.int/rec/T-REC-X.1341-201509-I),
 * Annex A–B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureType     ::=  String
 * ```
 */
export type SignatureType = String; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SignatureType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignatureType} The decoded data structure.
 */
export const _decode_SignatureType: $.ASN1Decoder<SignatureType> = _decode_String;

/**
 * @summary Encodes a(n) SignatureType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignatureType, encoded as an ASN.1 Element.
 */
export const _encode_SignatureType: $.ASN1Encoder<SignatureType> = _encode_String;


/* eslint-enable */
