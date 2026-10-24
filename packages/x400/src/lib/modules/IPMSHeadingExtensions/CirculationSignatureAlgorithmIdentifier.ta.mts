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
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/AuthenticationFramework';
/**
 * @summary CirculationSignatureAlgorithmIdentifier
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§18).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CirculationSignatureAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type CirculationSignatureAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CirculationSignatureAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CirculationSignatureAlgorithmIdentifier} The decoded data structure.
 */
export const _decode_CirculationSignatureAlgorithmIdentifier: $.ASN1Decoder<CirculationSignatureAlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) CirculationSignatureAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CirculationSignatureAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_CirculationSignatureAlgorithmIdentifier: $.ASN1Encoder<CirculationSignatureAlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
