/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EASCERecord, _decode_EASCERecord, _encode_EASCERecord } from "../ExposureFunctionAPIChargingDataTypes/EASCERecord.ta.mjs";


/**
 * @summary ExposureFunctionAPIRecordType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExposureFunctionAPIRecordType  ::=  CHOICE {
 *    eASCERecord     [120] IMPLICIT EASCERecord}
 * ```
 */
export
type ExposureFunctionAPIRecordType =
    { eASCERecord: EASCERecord } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ExposureFunctionAPIRecordType: $.ASN1Decoder<ExposureFunctionAPIRecordType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExposureFunctionAPIRecordType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExposureFunctionAPIRecordType (el: _Element): ExposureFunctionAPIRecordType {
    if (!_cached_decoder_for_ExposureFunctionAPIRecordType) { _cached_decoder_for_ExposureFunctionAPIRecordType = $._decode_inextensible_choice<ExposureFunctionAPIRecordType>({
    "CONTEXT 120": [ "eASCERecord", $._decode_implicit<EASCERecord>(() => _decode_EASCERecord) ]
}); }
    return _cached_decoder_for_ExposureFunctionAPIRecordType(el);
}

let _cached_encoder_for_ExposureFunctionAPIRecordType: $.ASN1Encoder<ExposureFunctionAPIRecordType> | null = null;

/**
 * @summary Encodes a(n) ExposureFunctionAPIRecordType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExposureFunctionAPIRecordType, encoded as an ASN.1 Element.
 */
export
function _encode_ExposureFunctionAPIRecordType (value: ExposureFunctionAPIRecordType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExposureFunctionAPIRecordType) { _cached_encoder_for_ExposureFunctionAPIRecordType = $._encode_choice<ExposureFunctionAPIRecordType>({
    "eASCERecord": $._encode_implicit(_TagClass.context, 120, () => _encode_EASCERecord, $.BER),
}, $.BER); }
    return _cached_encoder_for_ExposureFunctionAPIRecordType(value, elGetter);
}


/* eslint-enable */
