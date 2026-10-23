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
    PremisesAddress,
    _decode_PremisesAddress,
    _encode_PremisesAddress,
} from '../X790ASN1Module/PremisesAddress.ta.mjs';

/**
 * @summary PersonLocation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PersonLocation  ::=  PremisesAddress
 * ```
 */
export type PersonLocation = PremisesAddress; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PersonLocation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PersonLocation} The decoded data structure.
 */
export const _decode_PersonLocation: $.ASN1Decoder<PersonLocation> = _decode_PremisesAddress;

/**
 * @summary Encodes a(n) PersonLocation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PersonLocation, encoded as an ASN.1 Element.
 */
export const _encode_PersonLocation: $.ASN1Encoder<PersonLocation> = _encode_PremisesAddress;


/* eslint-enable */
