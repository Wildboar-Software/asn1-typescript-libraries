/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SequenceNumber
 * @description
 * 
 * Sequence number of one pending Notification or one signed eUICC Package
 * Result. EimAcknowledgements is a sequence of these values. The eUICC puts
 * the next unused value, the counter SGP.22 defines for Notifications, into a
 * signed eUICC Package Result and then increments its stored counter by 1.
 * When the eIM acknowledges a number, the IPA calls
 * ES10b.RemoveNotificationFromList and the eUICC deletes that Notification or
 * eUICC Package Result. SGP.32 v1.2, sections 2.11.1.4, 5.9.1, 5.9.12, and
 * 5.14.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SequenceNumber  ::=  [0] INTEGER
 * ```
 */
export
type SequenceNumber = INTEGER;

let _cached_decoder_for_SequenceNumber: $.ASN1Decoder<SequenceNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SequenceNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SequenceNumber (el: _Element): SequenceNumber {
    if (!_cached_decoder_for_SequenceNumber) { _cached_decoder_for_SequenceNumber = $._decode_implicit<SequenceNumber>(() => $._decodeInteger); }
    return _cached_decoder_for_SequenceNumber(el);
}

let _cached_encoder_for_SequenceNumber: $.ASN1Encoder<SequenceNumber> | null = null;

/**
 * @summary Encodes a(n) SequenceNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SequenceNumber, encoded as an ASN.1 Element.
 */
export
function _encode_SequenceNumber (value: SequenceNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SequenceNumber) { _cached_encoder_for_SequenceNumber = $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_SequenceNumber(value, elGetter);
}


/* eslint-enable */
