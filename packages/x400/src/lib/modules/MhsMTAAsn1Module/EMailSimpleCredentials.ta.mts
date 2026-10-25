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
    type Password,
    _decode_Password,
    _encode_Password,
} from '../MTSAbstractService/Password.ta.mjs';
/**
 * @summary EMailSimpleCredentials
 * @description
 *
 * Defined in ITU-T X.411 (1999) (MTA managed objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailSimpleCredentials  ::=  Password
 * ```
 */
export type EMailSimpleCredentials = Password; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) EMailSimpleCredentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailSimpleCredentials} The decoded data structure.
 */
export const _decode_EMailSimpleCredentials: $.ASN1Decoder<EMailSimpleCredentials> = _decode_Password;

/**
 * @summary Encodes a(n) EMailSimpleCredentials into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailSimpleCredentials, encoded as an ASN.1 Element.
 */
export const _encode_EMailSimpleCredentials: $.ASN1Encoder<EMailSimpleCredentials> = _encode_Password;


/* eslint-enable */
