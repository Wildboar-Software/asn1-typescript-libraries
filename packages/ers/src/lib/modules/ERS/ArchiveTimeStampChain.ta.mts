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
