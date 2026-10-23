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
    MessageToken,
    _decode_MessageToken,
    _encode_MessageToken,
} from '../MTSAbstractService/MessageToken.ta.mjs';
/**
 * @summary OriginatorToken
 * @description
 *
 * Defined in ITU-T X.413 (1999) (§6).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorToken  ::=
 *   MessageToken
 *     (CONSTRAINED BY {
 *
 *        -- Must contain an asymmetric-token with an encrypted-data component --})
 * ```
 */
export type OriginatorToken = MessageToken; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorToken} The decoded data structure.
 */
export const _decode_OriginatorToken: $.ASN1Decoder<OriginatorToken> = _decode_MessageToken;

/**
 * @summary Encodes a(n) OriginatorToken into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorToken, encoded as an ASN.1 Element.
 */
export const _encode_OriginatorToken: $.ASN1Encoder<OriginatorToken> = _encode_MessageToken;


/* eslint-enable */
