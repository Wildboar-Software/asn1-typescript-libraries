/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EvidenceRecordWantBack, _decode_EvidenceRecordWantBack, _encode_EvidenceRecordWantBack } from "../LTANS-SCVP-EXTENSION/EvidenceRecordWantBack.ta.mjs";
// export { EvidenceRecordWantBack, _decode_EvidenceRecordWantBack, _encode_EvidenceRecordWantBack } from "../LTANS-SCVP-EXTENSION/EvidenceRecordWantBack.ta.mjs";


/**
 * @summary EvidenceRecordWantBacks
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvidenceRecordWantBacks  ::=  SEQUENCE SIZE (1..MAX) OF EvidenceRecordWantBack
 * ```
 */
export
type EvidenceRecordWantBacks = EvidenceRecordWantBack[]; // SequenceOfType

let _cached_decoder_for_EvidenceRecordWantBacks: $.ASN1Decoder<EvidenceRecordWantBacks> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EvidenceRecordWantBacks
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EvidenceRecordWantBacks (el: _Element): EvidenceRecordWantBacks {
    if (!_cached_decoder_for_EvidenceRecordWantBacks) { _cached_decoder_for_EvidenceRecordWantBacks = $._decodeSequenceOf<EvidenceRecordWantBack>(() => _decode_EvidenceRecordWantBack); }
    return _cached_decoder_for_EvidenceRecordWantBacks(el);
}

let _cached_encoder_for_EvidenceRecordWantBacks: $.ASN1Encoder<EvidenceRecordWantBacks> | null = null;

/**
 * @summary Encodes a(n) EvidenceRecordWantBacks into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EvidenceRecordWantBacks, encoded as an ASN.1 Element.
 */
export
function _encode_EvidenceRecordWantBacks (value: EvidenceRecordWantBacks, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EvidenceRecordWantBacks) { _cached_encoder_for_EvidenceRecordWantBacks = $._encodeSequenceOf<EvidenceRecordWantBack>(() => _encode_EvidenceRecordWantBack, $.BER); }
    return _cached_encoder_for_EvidenceRecordWantBacks(value, elGetter);
}


/* eslint-enable */
