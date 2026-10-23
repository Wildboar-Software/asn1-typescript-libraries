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
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from '../IPMSInformationObjects/ORDescriptor.ta.mjs';
/**
 * @summary OriginatorField
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§7).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorField  ::=  ORDescriptor
 * ```
 */
export type OriginatorField = ORDescriptor; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorField} The decoded data structure.
 */
export const _decode_OriginatorField: $.ASN1Decoder<OriginatorField> = _decode_ORDescriptor;

/**
 * @summary Encodes a(n) OriginatorField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorField, encoded as an ASN.1 Element.
 */
export const _encode_OriginatorField: $.ASN1Encoder<OriginatorField> = _encode_ORDescriptor;


/* eslint-enable */
