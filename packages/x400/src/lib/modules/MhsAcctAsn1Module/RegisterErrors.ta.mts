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
    type AdministrationError,
    _decode_AdministrationError,
    _encode_AdministrationError,
} from '../MhsAcctAsn1Module/AdministrationError.ta.mjs';
/**
 * @summary RegisterErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegisterErrors  ::=  AdministrationError(register-rejected | remote-bind-error)
 * ```
 */
export type RegisterErrors = AdministrationError; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) RegisterErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegisterErrors} The decoded data structure.
 */
export const _decode_RegisterErrors: $.ASN1Decoder<RegisterErrors> = _decode_AdministrationError;

/**
 * @summary Encodes a(n) RegisterErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegisterErrors, encoded as an ASN.1 Element.
 */
export const _encode_RegisterErrors: $.ASN1Encoder<RegisterErrors> = _encode_AdministrationError;


/* eslint-enable */
