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
 * @summary KeyDerivationFunction
 * @description
 * 
 * A KDF from `KDFSet`. Derives keying data from a shared-secret octet string Z
 * and optional SharedInfo. Prefer NIST SP 800-56 Concatenation KDF except for
 * backwards compatibility. TLS-KDF and IKEv2-KDF only with ECDH in those
 * protocols. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §3.6, §C.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyDerivationFunction  ::=  AlgorithmIdentifier {{KDFSet}}
 * ```
 */
export
type KeyDerivationFunction = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) KeyDerivationFunction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyDerivationFunction} The decoded data structure.
 */
export const _decode_KeyDerivationFunction: $.ASN1Decoder<KeyDerivationFunction> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) KeyDerivationFunction into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyDerivationFunction, encoded as an ASN.1 Element.
 */
export const _encode_KeyDerivationFunction: $.ASN1Encoder<KeyDerivationFunction> = _encode_AlgorithmIdentifier;


/* eslint-enable */
