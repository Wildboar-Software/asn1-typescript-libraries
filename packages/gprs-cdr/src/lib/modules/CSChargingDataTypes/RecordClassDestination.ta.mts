/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OsApplication, _decode_OsApplication, _encode_OsApplication } from "../CSChargingDataTypes/OsApplication.ta.mjs";
// export { OsApplication, _decode_OsApplication, _encode_OsApplication } from "../CSChargingDataTypes/OsApplication.ta.mjs";
import { RecordClassDestination_fileType, _decode_RecordClassDestination_fileType, _encode_RecordClassDestination_fileType } from "../CSChargingDataTypes/RecordClassDestination-fileType.ta.mjs";
// export { RecordClassDestination_fileType, RecordClassDestination_fileType_callRecords /* IMPORTED_LONG_NAMED_INTEGER */, callRecords /* IMPORTED_SHORT_NAMED_INTEGER */, RecordClassDestination_fileType_traceRecords /* IMPORTED_LONG_NAMED_INTEGER */, traceRecords /* IMPORTED_SHORT_NAMED_INTEGER */, RecordClassDestination_fileType_observedIMEITicket /* IMPORTED_LONG_NAMED_INTEGER */, observedIMEITicket /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RecordClassDestination_fileType, _encode_RecordClassDestination_fileType } from "../CSChargingDataTypes/RecordClassDestination-fileType.ta.mjs";


/**
 * @summary RecordClassDestination
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecordClassDestination  ::=  CHOICE {
 *    osApplication     [0] OsApplication,
 *    fileType          [1] IMPLICIT INTEGER {
 *       callRecords           ( 1 ),
 *       traceRecords          ( 9 ),
 *       observedIMEITicket    ( 14 )}}
 * ```
 */
export
type RecordClassDestination =
    { osApplication: OsApplication } /* CHOICE_ALT_ROOT */
    | { fileType: RecordClassDestination_fileType } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RecordClassDestination: $.ASN1Decoder<RecordClassDestination> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecordClassDestination
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RecordClassDestination (el: _Element): RecordClassDestination {
    if (!_cached_decoder_for_RecordClassDestination) { _cached_decoder_for_RecordClassDestination = $._decode_inextensible_choice<RecordClassDestination>({
    "CONTEXT 0": [ "osApplication", $._decode_explicit<OsApplication>(() => _decode_OsApplication) ],
    "CONTEXT 1": [ "fileType", $._decode_implicit<RecordClassDestination_fileType>(() => _decode_RecordClassDestination_fileType) ]
}); }
    return _cached_decoder_for_RecordClassDestination(el);
}

let _cached_encoder_for_RecordClassDestination: $.ASN1Encoder<RecordClassDestination> | null = null;

/**
 * @summary Encodes a(n) RecordClassDestination into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecordClassDestination, encoded as an ASN.1 Element.
 */
export
function _encode_RecordClassDestination (value: RecordClassDestination, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RecordClassDestination) { _cached_encoder_for_RecordClassDestination = $._encode_choice<RecordClassDestination>({
    "osApplication": $._encode_explicit(_TagClass.context, 0, () => _encode_OsApplication, $.BER),
    "fileType": $._encode_implicit(_TagClass.context, 1, () => _encode_RecordClassDestination_fileType, $.BER),
}, $.BER); }
    return _cached_encoder_for_RecordClassDestination(value, elGetter);
}


/* eslint-enable */
