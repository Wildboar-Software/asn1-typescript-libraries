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
    type MessageToken,
    _decode_MessageToken,
    _encode_MessageToken,
} from '../MTSAbstractService/MessageToken.ta.mjs';
/**
 * @summary OriginalMessageToken
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§15).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginalMessageToken  ::=  MessageToken
 * ```
 */
export type OriginalMessageToken = MessageToken; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) OriginalMessageToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginalMessageToken} The decoded data structure.
 */
export const _decode_OriginalMessageToken: $.ASN1Decoder<OriginalMessageToken> = _decode_MessageToken;

/**
 * @summary Encodes a(n) OriginalMessageToken into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginalMessageToken, encoded as an ASN.1 Element.
 */
export const _encode_OriginalMessageToken: $.ASN1Encoder<OriginalMessageToken> = _encode_MessageToken;


/* eslint-enable */
