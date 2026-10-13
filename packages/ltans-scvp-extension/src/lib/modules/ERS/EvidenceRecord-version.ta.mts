/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EvidenceRecord_version
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvidenceRecord-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EvidenceRecord_version = INTEGER;

/**
 * @summary EvidenceRecord_version_v1
 * @constant
 * @type {number}
 */
export
const EvidenceRecord_version_v1: EvidenceRecord_version = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EvidenceRecord_version_v1
 * @constant
 * @type {number}
 */
export
const v1: EvidenceRecord_version = EvidenceRecord_version_v1; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_EvidenceRecord_version: $.ASN1Decoder<EvidenceRecord_version> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EvidenceRecord_version
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EvidenceRecord_version (el: _Element): EvidenceRecord_version {
    if (!_cached_decoder_for_EvidenceRecord_version) { _cached_decoder_for_EvidenceRecord_version = $._decodeInteger; }
    return _cached_decoder_for_EvidenceRecord_version(el);
}

let _cached_encoder_for_EvidenceRecord_version: $.ASN1Encoder<EvidenceRecord_version> | null = null;

/**
 * @summary Encodes a(n) EvidenceRecord_version into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EvidenceRecord_version, encoded as an ASN.1 Element.
 */
export
function _encode_EvidenceRecord_version (value: EvidenceRecord_version, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EvidenceRecord_version) { _cached_encoder_for_EvidenceRecord_version = $._encodeInteger; }
    return _cached_encoder_for_EvidenceRecord_version(value, elGetter);
}


/* eslint-enable */
