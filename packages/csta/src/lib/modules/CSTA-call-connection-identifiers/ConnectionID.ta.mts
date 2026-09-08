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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { CallID, _decode_CallID, _encode_CallID } from "../CSTA-call-connection-identifiers/CallID.ta.mjs";
// export { CallID, _decode_CallID, _encode_CallID } from "../CSTA-call-connection-identifiers/CallID.ta.mjs";
import { LocalDeviceID, _decode_LocalDeviceID, _encode_LocalDeviceID } from "../CSTA-call-connection-identifiers/LocalDeviceID.ta.mjs";
// export { LocalDeviceID, _decode_LocalDeviceID, _encode_LocalDeviceID } from "../CSTA-call-connection-identifiers/LocalDeviceID.ta.mjs";
import { ConnectionID_both, _decode_ConnectionID_both, _encode_ConnectionID_both } from "../CSTA-call-connection-identifiers/ConnectionID-both.ta.mjs";
// export { ConnectionID_both, _decode_ConnectionID_both, _encode_ConnectionID_both } from "../CSTA-call-connection-identifiers/ConnectionID-both.ta.mjs";


/**
 * @summary ConnectionID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionID  ::=  [APPLICATION 11] CHOICE
 * {     callID             [0] IMPLICIT         CallID,
 *     deviceID         [1]             LocalDeviceID,
 *     both SEQUENCE
 *     {     callID         [0] IMPLICIT        CallID,
 *         deviceID     [1]             LocalDeviceID } }
 * ```
 */
export
type ConnectionID =
    { callID: CallID } /* CHOICE_ALT_ROOT */
    | { deviceID: LocalDeviceID } /* CHOICE_ALT_ROOT */
    | { both: ConnectionID_both } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ConnectionID: $.ASN1Decoder<ConnectionID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionID (el: _Element): ConnectionID {
    if (!_cached_decoder_for_ConnectionID) { _cached_decoder_for_ConnectionID = $._decode_explicit<ConnectionID>(() => $._decode_inextensible_choice<ConnectionID>({
    "CONTEXT 0": [ "callID", $._decode_implicit<CallID>(() => _decode_CallID) ],
    "CONTEXT 1": [ "deviceID", $._decode_explicit<LocalDeviceID>(() => _decode_LocalDeviceID) ],
    "UNIVERSAL 16": [ "both", _decode_ConnectionID_both ]
})); }
    return _cached_decoder_for_ConnectionID(el);
}

let _cached_encoder_for_ConnectionID: $.ASN1Encoder<ConnectionID> | null = null;

/**
 * @summary Encodes a(n) ConnectionID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionID, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionID (value: ConnectionID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionID) { _cached_encoder_for_ConnectionID = $._encode_explicit(_TagClass.application, 11, () => $._encode_choice<ConnectionID>({
    "callID": $._encode_implicit(_TagClass.context, 0, () => _encode_CallID, $.BER),
    "deviceID": $._encode_explicit(_TagClass.context, 1, () => _encode_LocalDeviceID, $.BER),
    "both": _encode_ConnectionID_both,
}, $.BER), $.BER); }
    return _cached_encoder_for_ConnectionID(value, elGetter);
}


/* eslint-enable */
