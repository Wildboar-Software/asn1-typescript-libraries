/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMTelRecord, _decode_MMTelRecord, _encode_MMTelRecord } from "../MMTelChargingDataTypes/MMTelRecord.ta.mjs";
// export { MMTelRecord, _decode_MMTelRecord, _encode_MMTelRecord } from "../MMTelChargingDataTypes/MMTelRecord.ta.mjs";


/**
 * @summary MMTelServiceRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMTelServiceRecord  ::=  CHOICE {
 *    mMTelRecord     [83] IMPLICIT MMTelRecord}
 * ```
 */
export
type MMTelServiceRecord =
    { mMTelRecord: MMTelRecord } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MMTelServiceRecord: $.ASN1Decoder<MMTelServiceRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMTelServiceRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMTelServiceRecord (el: _Element): MMTelServiceRecord {
    if (!_cached_decoder_for_MMTelServiceRecord) { _cached_decoder_for_MMTelServiceRecord = $._decode_inextensible_choice<MMTelServiceRecord>({
    "CONTEXT 83": [ "mMTelRecord", $._decode_implicit<MMTelRecord>(() => _decode_MMTelRecord) ]
}); }
    return _cached_decoder_for_MMTelServiceRecord(el);
}

let _cached_encoder_for_MMTelServiceRecord: $.ASN1Encoder<MMTelServiceRecord> | null = null;

/**
 * @summary Encodes a(n) MMTelServiceRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMTelServiceRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MMTelServiceRecord (value: MMTelServiceRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMTelServiceRecord) { _cached_encoder_for_MMTelServiceRecord = $._encode_choice<MMTelServiceRecord>({
    "mMTelRecord": $._encode_implicit(_TagClass.context, 83, () => _encode_MMTelRecord, $.BER),
}, $.BER); }
    return _cached_encoder_for_MMTelServiceRecord(value, elGetter);
}


/* eslint-enable */
