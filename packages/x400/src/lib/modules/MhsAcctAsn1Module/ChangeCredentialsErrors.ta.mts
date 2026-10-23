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
    AdministrationError,
    _decode_AdministrationError,
    _encode_AdministrationError,
} from '../MhsAcctAsn1Module/AdministrationError.ta.mjs';
/**
 * @summary ChangeCredentialsErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChangeCredentialsErrors  ::=
 *   AdministrationError
 *     (new-credentials-unacceptable | old-credentials-incorrectly-specified |
 *      remote-bind-error)
 * ```
 */
export type ChangeCredentialsErrors = AdministrationError; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeCredentialsErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChangeCredentialsErrors} The decoded data structure.
 */
export const _decode_ChangeCredentialsErrors: $.ASN1Decoder<ChangeCredentialsErrors> = _decode_AdministrationError;

/**
 * @summary Encodes a(n) ChangeCredentialsErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeCredentialsErrors, encoded as an ASN.1 Element.
 */
export const _encode_ChangeCredentialsErrors: $.ASN1Encoder<ChangeCredentialsErrors> = _encode_AdministrationError;


/* eslint-enable */
