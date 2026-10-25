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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../SEC1-v1-9/AlgorithmIdentifier.ta.mjs";
/**
 * @summary MessageAuthenticationCode
 * @description
 * 
 * MAC used inside ECIES (`MACSet`): HMAC with full or half-length tag, or
 * CMAC-AES-128/192/256 (tag always 128 bits). Provides data-origin
 * authentication of the ECIES ciphertext. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §3.7, §C.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageAuthenticationCode  ::=  AlgorithmIdentifier {{MACSet}}
 * ```
 */
export
type MessageAuthenticationCode = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MessageAuthenticationCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageAuthenticationCode} The decoded data structure.
 */
export const _decode_MessageAuthenticationCode: $.ASN1Decoder<MessageAuthenticationCode> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) MessageAuthenticationCode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageAuthenticationCode, encoded as an ASN.1 Element.
 */
export const _encode_MessageAuthenticationCode: $.ASN1Encoder<MessageAuthenticationCode> = _encode_AlgorithmIdentifier;


/* eslint-enable */
