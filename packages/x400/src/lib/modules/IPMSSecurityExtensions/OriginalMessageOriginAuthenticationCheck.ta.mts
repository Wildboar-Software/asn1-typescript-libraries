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
    type MessageOriginAuthenticationCheck,
    _decode_MessageOriginAuthenticationCheck,
    _encode_MessageOriginAuthenticationCheck,
} from '../MTSAbstractService/MessageOriginAuthenticationCheck.ta.mjs';
/**
 * @summary OriginalMessageOriginAuthenticationCheck
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§15).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginalMessageOriginAuthenticationCheck  ::=  MessageOriginAuthenticationCheck
 * ```
 */
export type OriginalMessageOriginAuthenticationCheck = MessageOriginAuthenticationCheck; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) OriginalMessageOriginAuthenticationCheck
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginalMessageOriginAuthenticationCheck} The decoded data structure.
 */
export const _decode_OriginalMessageOriginAuthenticationCheck: $.ASN1Decoder<OriginalMessageOriginAuthenticationCheck> = _decode_MessageOriginAuthenticationCheck;

/**
 * @summary Encodes a(n) OriginalMessageOriginAuthenticationCheck into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginalMessageOriginAuthenticationCheck, encoded as an ASN.1 Element.
 */
export const _encode_OriginalMessageOriginAuthenticationCheck: $.ASN1Encoder<OriginalMessageOriginAuthenticationCheck> = _encode_MessageOriginAuthenticationCheck;


/* eslint-enable */
