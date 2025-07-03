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
    ASO_context_name,
    _decode_ASO_context_name,
    _encode_ASO_context_name,
} from '../Connectionless-ACSE-1/ASO-context-name.ta.mjs';

/**
 * @summary Application_context_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Application-context-name ::= ASO-context-name
 * ```
 */
export type Application_context_name = ASO_context_name; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) Application_context_name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Application_context_name} The decoded data structure.
 */
export const _decode_Application_context_name: $.ASN1Decoder<Application_context_name> = _decode_ASO_context_name;

/**
 * @summary Encodes a(n) Application_context_name into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Application_context_name, encoded as an ASN.1 Element.
 */
export const _encode_Application_context_name: $.ASN1Encoder<Application_context_name> = _encode_ASO_context_name;


/* eslint-enable */
