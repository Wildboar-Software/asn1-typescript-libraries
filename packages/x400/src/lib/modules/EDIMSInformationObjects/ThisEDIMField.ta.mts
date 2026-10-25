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
    EDIMIdentifier,
    _decode_EDIMIdentifier,
    _encode_EDIMIdentifier,
} from '../EDIMSInformationObjects/EDIMIdentifier.ta.mjs';
/**
 * @summary ThisEDIMField
 * @description
 *
 * Defined in ITU-T X.435 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ThisEDIMField  ::=  EDIMIdentifier
 * ```
 */
export type ThisEDIMField = EDIMIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ThisEDIMField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ThisEDIMField} The decoded data structure.
 */
export const _decode_ThisEDIMField: $.ASN1Decoder<ThisEDIMField> = _decode_EDIMIdentifier;

/**
 * @summary Encodes a(n) ThisEDIMField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThisEDIMField, encoded as an ASN.1 Element.
 */
export const _encode_ThisEDIMField: $.ASN1Encoder<ThisEDIMField> = _encode_EDIMIdentifier;


/* eslint-enable */
