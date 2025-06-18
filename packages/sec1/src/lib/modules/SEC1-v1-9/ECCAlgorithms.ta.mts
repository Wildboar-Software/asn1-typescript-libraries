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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ECCAlgorithm, _decode_ECCAlgorithm, _encode_ECCAlgorithm } from "../SEC1-v1-9/ECCAlgorithm.ta.mjs";
/**
 * @summary ECCAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECCAlgorithms  ::=  SEQUENCE OF ECCAlgorithm
 * ```
 */
export
type ECCAlgorithms = ECCAlgorithm[]; // SequenceOfType

let _cached_decoder_for_ECCAlgorithms: $.ASN1Decoder<ECCAlgorithms> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ECCAlgorithms
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECCAlgorithms} The decoded data structure.
 */
export
function _decode_ECCAlgorithms (el: _Element) {
    if (!_cached_decoder_for_ECCAlgorithms) { _cached_decoder_for_ECCAlgorithms = $._decodeSequenceOf<ECCAlgorithm>(() => _decode_ECCAlgorithm); }
    return _cached_decoder_for_ECCAlgorithms(el);
}

let _cached_encoder_for_ECCAlgorithms: $.ASN1Encoder<ECCAlgorithms> | null = null;

/**
 * @summary Encodes a(n) ECCAlgorithms into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECCAlgorithms, encoded as an ASN.1 Element.
 */
export
function _encode_ECCAlgorithms (value: ECCAlgorithms, elGetter: $.ASN1Encoder<ECCAlgorithms>) {
    if (!_cached_encoder_for_ECCAlgorithms) { _cached_encoder_for_ECCAlgorithms = $._encodeSequenceOf<ECCAlgorithm>(() => _encode_ECCAlgorithm, $.DER); }
    return _cached_encoder_for_ECCAlgorithms(value, elGetter);
}


/* eslint-enable */
