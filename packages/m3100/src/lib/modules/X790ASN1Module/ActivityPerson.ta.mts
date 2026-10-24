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
    PersonReach,
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta.mjs';

/**
 * @summary ActivityPerson
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActivityPerson  ::=  PersonReach
 * ```
 */
export type ActivityPerson = PersonReach; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ActivityPerson
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActivityPerson} The decoded data structure.
 */
export const _decode_ActivityPerson: $.ASN1Decoder<ActivityPerson> = _decode_PersonReach;

/**
 * @summary Encodes a(n) ActivityPerson into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivityPerson, encoded as an ASN.1 Element.
 */
export const _encode_ActivityPerson: $.ASN1Encoder<ActivityPerson> = _encode_PersonReach;


/* eslint-enable */
