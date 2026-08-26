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
import { ArchiveTimeStampChain, _decode_ArchiveTimeStampChain, _encode_ArchiveTimeStampChain } from "../ERS/ArchiveTimeStampChain.ta.mjs";

/**
 * @summary ArchiveTimeStampSequence
 * @description
 *
 * Sequence of `ArchiveTimeStampChain` values where each chain
 * preserves non-repudiation of prior chains after the hash algorithm
 * used in the previous chain's hash tree becomes weak (Hash-Tree
 * Renewal). Non-repudiation holds until the last Archive Timestamp of
 * the last chain becomes invalid. Relates to a data object / group if
 * its first chain does. (RFC 4998 §1.3, §5, §5.1.)
 *
 * MUST be ordered ascending by timestamp time. Hash-Tree Renewal
 * hashes both archived data objects and the DER-encoded prior
 * `ArchiveTimeStampChain`s, then starts a new chain appended here
 * (RFC 4998 §5.2). Verification of chains and their relation to data
 * objects is in §5.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArchiveTimeStampSequence  ::=  SEQUENCE OF ArchiveTimeStampChain
 * ```
 */
export
type ArchiveTimeStampSequence = ArchiveTimeStampChain[]; // SequenceOfType


let _cached_decoder_for_ArchiveTimeStampSequence: $.ASN1Decoder<ArchiveTimeStampSequence> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ArchiveTimeStampSequence
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArchiveTimeStampSequence} The decoded data structure.
 */
export
function _decode_ArchiveTimeStampSequence (el: _Element): ArchiveTimeStampSequence {
    if (!_cached_decoder_for_ArchiveTimeStampSequence) { _cached_decoder_for_ArchiveTimeStampSequence = $._decodeSequenceOf<ArchiveTimeStampChain>(() => _decode_ArchiveTimeStampChain); }
    return _cached_decoder_for_ArchiveTimeStampSequence(el);
}


let _cached_encoder_for_ArchiveTimeStampSequence: $.ASN1Encoder<ArchiveTimeStampSequence> | null = null;


/**
 * @summary Encodes a(n) ArchiveTimeStampSequence into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArchiveTimeStampSequence, encoded as an ASN.1 Element.
 */
export
function _encode_ArchiveTimeStampSequence (value: ArchiveTimeStampSequence, elGetter: $.ASN1Encoder<ArchiveTimeStampSequence>): _Element {
    if (!_cached_encoder_for_ArchiveTimeStampSequence) { _cached_encoder_for_ArchiveTimeStampSequence = $._encodeSequenceOf<ArchiveTimeStampChain>(() => _encode_ArchiveTimeStampChain, $.DER); }
    return _cached_encoder_for_ArchiveTimeStampSequence(value, elGetter);
}


/* eslint-enable */
