/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EvidenceRecord, _decode_EvidenceRecord, _encode_EvidenceRecord } from "../ERS/EvidenceRecord.ta.mjs";


/**
 * @summary EvidenceRecords
 * @description
 *
 * Evidence records returned in the
 * {@link id_swb_ers_revocation_info} `replyWantBack`.
 * Each revocation object in the companion revocation
 * `replyWantBack` is covered by a record in this
 * sequence. One record may cover more than one object;
 * match an object to its record by locating the object's
 * hash in that record's first initial timestamp. §5.4
 * also says one record is provided for each element of
 * the companion WantBack.
 *
 * The companion is `id-swb-pkc-revocation-info` in §3
 * and §4, and `id-swb-revocation-info` in §5.4.
 * RFC 5055 defines `id-swb-pkc-revocation-info`.
 * Revocation objects may be CRLs or OCSP responses.
 * Cumulative CRLs may be generated for archiving.
 *
 * [RFC 5276, §4](https://www.rfc-editor.org/rfc/rfc5276#section-4)
 * and
 * [§5.4](https://www.rfc-editor.org/rfc/rfc5276#section-5.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvidenceRecords  ::=  SEQUENCE SIZE (1..MAX) OF EvidenceRecord
 * ```
 */
export
type EvidenceRecords = EvidenceRecord[]; // SequenceOfType

let _cached_decoder_for_EvidenceRecords: $.ASN1Decoder<EvidenceRecords> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EvidenceRecords
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EvidenceRecords (el: _Element): EvidenceRecords {
    if (!_cached_decoder_for_EvidenceRecords) { _cached_decoder_for_EvidenceRecords = $._decodeSequenceOf<EvidenceRecord>(() => _decode_EvidenceRecord); }
    const value = _cached_decoder_for_EvidenceRecords(el);
    if (value.length < 1) {
        throw new ASN1SizeError("EvidenceRecords violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_EvidenceRecords: $.ASN1Encoder<EvidenceRecords> | null = null;

/**
 * @summary Encodes a(n) EvidenceRecords into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EvidenceRecords, encoded as an ASN.1 Element.
 */
export
function _encode_EvidenceRecords (value: EvidenceRecords, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EvidenceRecords) { _cached_encoder_for_EvidenceRecords = $._encodeSequenceOf<EvidenceRecord>(() => _encode_EvidenceRecord, $.BER); }
    return _cached_encoder_for_EvidenceRecords(value, elGetter);
}


/* eslint-enable */
