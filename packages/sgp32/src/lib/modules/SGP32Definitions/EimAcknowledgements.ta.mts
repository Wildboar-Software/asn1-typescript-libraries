/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SequenceNumber, _decode_SequenceNumber, _encode_SequenceNumber } from "../SGP32Definitions/SequenceNumber.ta.mjs";
// export { SequenceNumber, _decode_SequenceNumber, _encode_SequenceNumber } from "../SGP32Definitions/SequenceNumber.ta.mjs";


/**
 * @summary EimAcknowledgements
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimAcknowledgements  ::=  [83] SEQUENCE OF SequenceNumber
 * ```
 */
export
type EimAcknowledgements = SequenceNumber[]; // SequenceOfType

let _cached_decoder_for_EimAcknowledgements: $.ASN1Decoder<EimAcknowledgements> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EimAcknowledgements
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EimAcknowledgements (el: _Element): EimAcknowledgements {
    if (!_cached_decoder_for_EimAcknowledgements) { _cached_decoder_for_EimAcknowledgements = $._decode_implicit<EimAcknowledgements>(() => $._decodeSequenceOf<SequenceNumber>(() => _decode_SequenceNumber)); }
    return _cached_decoder_for_EimAcknowledgements(el);
}

let _cached_encoder_for_EimAcknowledgements: $.ASN1Encoder<EimAcknowledgements> | null = null;

/**
 * @summary Encodes a(n) EimAcknowledgements into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EimAcknowledgements, encoded as an ASN.1 Element.
 */
export
function _encode_EimAcknowledgements (value: EimAcknowledgements, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EimAcknowledgements) { _cached_encoder_for_EimAcknowledgements = $._encode_implicit(_TagClass.context, 83, () => $._encodeSequenceOf<SequenceNumber>(() => _encode_SequenceNumber, $.BER), $.BER); }
    return _cached_encoder_for_EimAcknowledgements(value, elGetter);
}


/* eslint-enable */
