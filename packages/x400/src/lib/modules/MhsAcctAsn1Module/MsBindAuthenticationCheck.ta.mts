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
    AuthenticationCheck,
    _decode_AuthenticationCheck,
    _encode_AuthenticationCheck,
} from '../MhsAcctAsn1Module/AuthenticationCheck.ta.mjs';
/**
 * @summary MsBindAuthenticationCheck
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MsBindAuthenticationCheck  ::=  AuthenticationCheck
 * ```
 */
export type MsBindAuthenticationCheck = AuthenticationCheck; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MsBindAuthenticationCheck
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MsBindAuthenticationCheck} The decoded data structure.
 */
export const _decode_MsBindAuthenticationCheck: $.ASN1Decoder<MsBindAuthenticationCheck> = _decode_AuthenticationCheck;

/**
 * @summary Encodes a(n) MsBindAuthenticationCheck into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MsBindAuthenticationCheck, encoded as an ASN.1 Element.
 */
export const _encode_MsBindAuthenticationCheck: $.ASN1Encoder<MsBindAuthenticationCheck> = _encode_AuthenticationCheck;


/* eslint-enable */
