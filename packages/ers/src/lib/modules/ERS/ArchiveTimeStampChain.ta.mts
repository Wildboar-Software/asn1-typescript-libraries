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
import { ArchiveTimeStamp, _decode_ArchiveTimeStamp, _encode_ArchiveTimeStamp } from "../ERS/ArchiveTimeStamp.ta.mjs";

/**
 * @summary ArchiveTimeStampChain
 * @description
 *
 * Time-ordered sequence of `ArchiveTimeStamp` values where each
 * preserves non-repudiation of the previous one after the previous
 * becomes invalid (Timestamp Renewal). Overall non-repudiation holds
 * until the newest Archive Timestamp itself becomes invalid.
 * Relates to a data object / group if its first `ArchiveTimeStamp`
 * does. (RFC 4998 §1.3, §5, §5.1.)
 *
 * MUST be ordered ascending by timestamp time. Within a chain, all
 * `reducedHashtree`s MUST use the same hash algorithm. On Timestamp
 * Renewal, the new Archive Timestamp covers the content of the prior
 * `timeStamp` field and MUST use the same hash algorithm as the old
 * one. (RFC 4998 §5.1, §5.2.)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArchiveTimeStampChain     ::=  SEQUENCE OF ArchiveTimeStamp
 * ```
 */
export
type ArchiveTimeStampChain = ArchiveTimeStamp[]; // SequenceOfType


let _cached_decoder_for_ArchiveTimeStampChain: $.ASN1Decoder<ArchiveTimeStampChain> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ArchiveTimeStampChain
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArchiveTimeStampChain} The decoded data structure.
 */
export
function _decode_ArchiveTimeStampChain (el: _Element): ArchiveTimeStampChain {
    if (!_cached_decoder_for_ArchiveTimeStampChain) { _cached_decoder_for_ArchiveTimeStampChain = $._decodeSequenceOf<ArchiveTimeStamp>(() => _decode_ArchiveTimeStamp); }
    return _cached_decoder_for_ArchiveTimeStampChain(el);
}


let _cached_encoder_for_ArchiveTimeStampChain: $.ASN1Encoder<ArchiveTimeStampChain> | null = null;


/**
 * @summary Encodes a(n) ArchiveTimeStampChain into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArchiveTimeStampChain, encoded as an ASN.1 Element.
 */
export
function _encode_ArchiveTimeStampChain (value: ArchiveTimeStampChain, elGetter: $.ASN1Encoder<ArchiveTimeStampChain>): _Element {
    if (!_cached_encoder_for_ArchiveTimeStampChain) { _cached_encoder_for_ArchiveTimeStampChain = $._encodeSequenceOf<ArchiveTimeStamp>(() => _encode_ArchiveTimeStamp, $.DER); }
    return _cached_encoder_for_ArchiveTimeStampChain(value, elGetter);
}


/* eslint-enable */
