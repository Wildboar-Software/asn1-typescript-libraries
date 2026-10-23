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
 * @summary ObsoletedEDIMsSubfield
 * @description
 *
 * Defined in ITU-T X.435 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObsoletedEDIMsSubfield  ::=  EDIMIdentifier
 * ```
 */
export type ObsoletedEDIMsSubfield = EDIMIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ObsoletedEDIMsSubfield
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObsoletedEDIMsSubfield} The decoded data structure.
 */
export const _decode_ObsoletedEDIMsSubfield: $.ASN1Decoder<ObsoletedEDIMsSubfield> = _decode_EDIMIdentifier;

/**
 * @summary Encodes a(n) ObsoletedEDIMsSubfield into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObsoletedEDIMsSubfield, encoded as an ASN.1 Element.
 */
export const _encode_ObsoletedEDIMsSubfield: $.ASN1Encoder<ObsoletedEDIMsSubfield> = _encode_EDIMIdentifier;


/* eslint-enable */
