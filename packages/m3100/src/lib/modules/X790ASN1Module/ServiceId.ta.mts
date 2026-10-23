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
    NameType,
    _decode_NameType,
    _encode_NameType,
} from '../X790ASN1Module/NameType.ta.mjs';

/**
 * @summary ServiceId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceId  ::=  NameType
 * ```
 */
export type ServiceId = NameType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceId} The decoded data structure.
 */
export const _decode_ServiceId: $.ASN1Decoder<ServiceId> = _decode_NameType;

/**
 * @summary Encodes a(n) ServiceId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceId, encoded as an ASN.1 Element.
 */
export const _encode_ServiceId: $.ASN1Encoder<ServiceId> = _encode_NameType;


/* eslint-enable */
