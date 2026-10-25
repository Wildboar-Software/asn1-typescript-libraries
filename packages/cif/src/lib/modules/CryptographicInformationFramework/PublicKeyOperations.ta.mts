/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Operations, _decode_Operations, _encode_Operations } from "../CryptographicInformationFramework/Operations.ta.mjs";


/**
 * @summary PublicKeyOperations
 * @description
 * 
 * Alias of `Operations` used in `KeyInfo` for public/private keys. ISO/IEC
 * 7816-15:2016 §8.2.14, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicKeyOperations  ::=  Operations
 * ```
 */
export
type PublicKeyOperations = Operations; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PublicKeyOperations
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PublicKeyOperations: $.ASN1Decoder<PublicKeyOperations> = _decode_Operations;

/**
 * @summary Encodes a(n) PublicKeyOperations into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicKeyOperations, encoded as an ASN.1 Element.
 */
export const _encode_PublicKeyOperations: $.ASN1Encoder<PublicKeyOperations> = _encode_Operations;


/* eslint-enable */
