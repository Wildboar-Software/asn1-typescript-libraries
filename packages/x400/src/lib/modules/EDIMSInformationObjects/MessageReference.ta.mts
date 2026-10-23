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
 * @summary MessageReference
 * @description
 *
 * Defined in ITU-T X.435 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageReference  ::=  EDIMIdentifier
 * ```
 */
export type MessageReference = EDIMIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MessageReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageReference} The decoded data structure.
 */
export const _decode_MessageReference: $.ASN1Decoder<MessageReference> = _decode_EDIMIdentifier;

/**
 * @summary Encodes a(n) MessageReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageReference, encoded as an ASN.1 Element.
 */
export const _encode_MessageReference: $.ASN1Encoder<MessageReference> = _encode_EDIMIdentifier;


/* eslint-enable */
