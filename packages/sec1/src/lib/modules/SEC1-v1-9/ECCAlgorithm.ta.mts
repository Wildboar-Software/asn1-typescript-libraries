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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../SEC1-v1-9/AlgorithmIdentifier.ta.mjs";
/**
 * @summary ECCAlgorithm
 * @description
 * 
 * Identifies one ECC scheme from `ECCAlgorithmSet`. Omit parameters when they
 * are `NULL`; otherwise they shall be present. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §C.3, §C.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECCAlgorithm  ::=  AlgorithmIdentifier {{ECCAlgorithmSet}}
 * ```
 */
export
type ECCAlgorithm = AlgorithmIdentifier; // DefinedType

let _cached_decoder_for_ECCAlgorithm: $.ASN1Decoder<ECCAlgorithm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ECCAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECCAlgorithm} The decoded data structure.
 */
export
function _decode_ECCAlgorithm (el: _Element): ECCAlgorithm {
    if (!_cached_decoder_for_ECCAlgorithm) { _cached_decoder_for_ECCAlgorithm = _decode_AlgorithmIdentifier; }
    return _cached_decoder_for_ECCAlgorithm(el);
}

let _cached_encoder_for_ECCAlgorithm: $.ASN1Encoder<ECCAlgorithm> | null = null;

/**
 * @summary Encodes a(n) ECCAlgorithm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECCAlgorithm, encoded as an ASN.1 Element.
 */
export
function _encode_ECCAlgorithm (value: ECCAlgorithm, elGetter: $.ASN1Encoder<ECCAlgorithm>): _Element {
    if (!_cached_encoder_for_ECCAlgorithm) { _cached_encoder_for_ECCAlgorithm = _encode_AlgorithmIdentifier; }
    return _cached_encoder_for_ECCAlgorithm(value, elGetter);
}


/* eslint-enable */
