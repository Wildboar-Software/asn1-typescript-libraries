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
    EDIMIdentifier,
    _decode_EDIMIdentifier,
    _encode_EDIMIdentifier,
} from '../EDIMSInformationObjects/EDIMIdentifier.ta.mjs';
/**
 * @summary SubjectEDIMField
 * @description
 *
 * Defined in ITU-T X.435 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectEDIMField  ::=  EDIMIdentifier
 * ```
 */
export type SubjectEDIMField = EDIMIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SubjectEDIMField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubjectEDIMField} The decoded data structure.
 */
export const _decode_SubjectEDIMField: $.ASN1Decoder<SubjectEDIMField> = _decode_EDIMIdentifier;

/**
 * @summary Encodes a(n) SubjectEDIMField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectEDIMField, encoded as an ASN.1 Element.
 */
export const _encode_SubjectEDIMField: $.ASN1Encoder<SubjectEDIMField> = _encode_EDIMIdentifier;


/* eslint-enable */
