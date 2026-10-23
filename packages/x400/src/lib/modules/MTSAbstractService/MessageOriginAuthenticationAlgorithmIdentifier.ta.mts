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
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/AuthenticationFramework';
/**
 * @summary MessageOriginAuthenticationAlgorithmIdentifier
 * @description
 *
 * An algorithm-identifier identifies an algorithm and any algorithm-parameters required by
 * the algorithm. It shall also define the ASN.1 encoding rules used. See ITU-T X.411
 * (1999), §8.5.10.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageOriginAuthenticationAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type MessageOriginAuthenticationAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MessageOriginAuthenticationAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageOriginAuthenticationAlgorithmIdentifier} The decoded data structure.
 */
export const _decode_MessageOriginAuthenticationAlgorithmIdentifier: $.ASN1Decoder<MessageOriginAuthenticationAlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) MessageOriginAuthenticationAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageOriginAuthenticationAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_MessageOriginAuthenticationAlgorithmIdentifier: $.ASN1Encoder<MessageOriginAuthenticationAlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
