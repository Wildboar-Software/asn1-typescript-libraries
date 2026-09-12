/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { Integer32, _decode_Integer32, _encode_Integer32 } from "../ISO-9506-MMS-1/Integer32.ta.mjs";
// export { Integer32, _decode_Integer32, _encode_Integer32 } from "../ISO-9506-MMS-1/Integer32.ta.mjs";


/**
 * @summary ReadJournal_Request_rangeStopSpecification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReadJournal-Request-rangeStopSpecification ::= CHOICE {
 *     endingTime [0] IMPLICIT TimeOfDay,
 *     numberOfEntries [1] IMPLICIT Integer32
 * }
 * ```
 */
export
type ReadJournal_Request_rangeStopSpecification =
    { endingTime: TimeOfDay } /* CHOICE_ALT_ROOT */
    | { numberOfEntries: Integer32 } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ReadJournal_Request_rangeStopSpecification: $.ASN1Decoder<ReadJournal_Request_rangeStopSpecification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReadJournal_Request_rangeStopSpecification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReadJournal_Request_rangeStopSpecification (el: _Element): ReadJournal_Request_rangeStopSpecification {
    if (!_cached_decoder_for_ReadJournal_Request_rangeStopSpecification) { _cached_decoder_for_ReadJournal_Request_rangeStopSpecification = $._decode_inextensible_choice<ReadJournal_Request_rangeStopSpecification>({
    "CONTEXT 0": [ "endingTime", $._decode_implicit<TimeOfDay>(() => _decode_TimeOfDay) ],
    "CONTEXT 1": [ "numberOfEntries", $._decode_implicit<Integer32>(() => _decode_Integer32) ]
}); }
    return _cached_decoder_for_ReadJournal_Request_rangeStopSpecification(el);
}

let _cached_encoder_for_ReadJournal_Request_rangeStopSpecification: $.ASN1Encoder<ReadJournal_Request_rangeStopSpecification> | null = null;

/**
 * @summary Encodes a(n) ReadJournal_Request_rangeStopSpecification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReadJournal_Request_rangeStopSpecification, encoded as an ASN.1 Element.
 */
export
function _encode_ReadJournal_Request_rangeStopSpecification (value: ReadJournal_Request_rangeStopSpecification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReadJournal_Request_rangeStopSpecification) { _cached_encoder_for_ReadJournal_Request_rangeStopSpecification = $._encode_choice<ReadJournal_Request_rangeStopSpecification>({
    "endingTime": $._encode_implicit(_TagClass.context, 0, () => _encode_TimeOfDay, $.BER),
    "numberOfEntries": $._encode_implicit(_TagClass.context, 1, () => _encode_Integer32, $.BER),
}, $.BER); }
    return _cached_encoder_for_ReadJournal_Request_rangeStopSpecification(value, elGetter);
}


/* eslint-enable */
