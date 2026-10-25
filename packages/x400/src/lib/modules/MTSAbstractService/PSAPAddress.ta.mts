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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from '@wildboar/x500/SelectedAttributeTypes';
/**
 * @summary PSAPAddress
 * @description
 *
 * Defined in ITU-T X.411 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PSAPAddress  ::=  PresentationAddress
 * ```
 */
export type PSAPAddress = PresentationAddress; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PSAPAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PSAPAddress} The decoded data structure.
 */
export const _decode_PSAPAddress: $.ASN1Decoder<PSAPAddress> = _decode_PresentationAddress;

/**
 * @summary Encodes a(n) PSAPAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PSAPAddress, encoded as an ASN.1 Element.
 */
export const _encode_PSAPAddress: $.ASN1Encoder<PSAPAddress> = _encode_PresentationAddress;


/* eslint-enable */
