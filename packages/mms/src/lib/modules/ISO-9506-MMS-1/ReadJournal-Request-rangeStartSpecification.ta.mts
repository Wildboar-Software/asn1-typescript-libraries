/* eslint-disable */
import {
    OCTET_STRING,
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
import { TimeOfDay, _decode_TimeOfDay, _encode_TimeOfDay } from "../ISO-9506-MMS-1/TimeOfDay.ta.mjs";
// export { TimeOfDay, _decode_TimeOfDay, _encode_TimeOfDay } from "../ISO-9506-MMS-1/TimeOfDay.ta.mjs";


/**
 * @summary ReadJournal_Request_rangeStartSpecification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReadJournal-Request-rangeStartSpecification ::= CHOICE {
 *     startingTime [0] IMPLICIT TimeOfDay,
 *     startingEntry [1] IMPLICIT OCTET STRING
 * }
 * ```
 */
export
type ReadJournal_Request_rangeStartSpecification =
    { startingTime: TimeOfDay } /* CHOICE_ALT_ROOT */
    | { startingEntry: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ReadJournal_Request_rangeStartSpecification: $.ASN1Decoder<ReadJournal_Request_rangeStartSpecification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReadJournal_Request_rangeStartSpecification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReadJournal_Request_rangeStartSpecification (el: _Element): ReadJournal_Request_rangeStartSpecification {
    if (!_cached_decoder_for_ReadJournal_Request_rangeStartSpecification) { _cached_decoder_for_ReadJournal_Request_rangeStartSpecification = $._decode_inextensible_choice<ReadJournal_Request_rangeStartSpecification>({
    "CONTEXT 0": [ "startingTime", $._decode_implicit<TimeOfDay>(() => _decode_TimeOfDay) ],
    "CONTEXT 1": [ "startingEntry", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_ReadJournal_Request_rangeStartSpecification(el);
}

let _cached_encoder_for_ReadJournal_Request_rangeStartSpecification: $.ASN1Encoder<ReadJournal_Request_rangeStartSpecification> | null = null;

/**
 * @summary Encodes a(n) ReadJournal_Request_rangeStartSpecification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReadJournal_Request_rangeStartSpecification, encoded as an ASN.1 Element.
 */
export
function _encode_ReadJournal_Request_rangeStartSpecification (value: ReadJournal_Request_rangeStartSpecification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReadJournal_Request_rangeStartSpecification) { _cached_encoder_for_ReadJournal_Request_rangeStartSpecification = $._encode_choice<ReadJournal_Request_rangeStartSpecification>({
    "startingTime": $._encode_implicit(_TagClass.context, 0, () => _encode_TimeOfDay, $.BER),
    "startingEntry": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_ReadJournal_Request_rangeStartSpecification(value, elGetter);
}


/* eslint-enable */
