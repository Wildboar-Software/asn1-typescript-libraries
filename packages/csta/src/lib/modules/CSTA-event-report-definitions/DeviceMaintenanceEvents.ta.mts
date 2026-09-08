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
import { BackInServiceEvent, _decode_BackInServiceEvent, _encode_BackInServiceEvent } from "../CSTA-back-in-service-event/BackInServiceEvent.ta.mjs";
// export { BackInServiceEvent, _decode_BackInServiceEvent, _encode_BackInServiceEvent } from "../CSTA-back-in-service-event/BackInServiceEvent.ta.mjs";
import { DeviceCapsChangedEvent, _decode_DeviceCapsChangedEvent, _encode_DeviceCapsChangedEvent } from "../CSTA-device-capabilities-changed-event/DeviceCapsChangedEvent.ta.mjs";
// export { DeviceCapsChangedEvent, _decode_DeviceCapsChangedEvent, _encode_DeviceCapsChangedEvent } from "../CSTA-device-capabilities-changed-event/DeviceCapsChangedEvent.ta.mjs";
import { OutOfServiceEvent, _decode_OutOfServiceEvent, _encode_OutOfServiceEvent } from "../CSTA-out-of-service-event/OutOfServiceEvent.ta.mjs";
// export { OutOfServiceEvent, _decode_OutOfServiceEvent, _encode_OutOfServiceEvent } from "../CSTA-out-of-service-event/OutOfServiceEvent.ta.mjs";
import { PartiallyInServiceEvent, _decode_PartiallyInServiceEvent, _encode_PartiallyInServiceEvent } from "../CSTA-partially-in-service-event/PartiallyInServiceEvent.ta.mjs";
// export { PartiallyInServiceEvent, _decode_PartiallyInServiceEvent, _encode_PartiallyInServiceEvent } from "../CSTA-partially-in-service-event/PartiallyInServiceEvent.ta.mjs";


/**
 * @summary DeviceMaintenanceEvents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceMaintenanceEvents  ::=  CHOICE
 * {    backInService            [ 0] IMPLICIT BackInServiceEvent,
 *     deviceCapabilityChanged     [ 1] IMPLICIT DeviceCapsChangedEvent,
 *     outOfService            [ 2] IMPLICIT OutOfServiceEvent,
 *     partiallyInService        [ 3] IMPLICIT PartiallyInServiceEvent }
 * ```
 */
export
type DeviceMaintenanceEvents =
    { backInService: BackInServiceEvent } /* CHOICE_ALT_ROOT */
    | { deviceCapabilityChanged: DeviceCapsChangedEvent } /* CHOICE_ALT_ROOT */
    | { outOfService: OutOfServiceEvent } /* CHOICE_ALT_ROOT */
    | { partiallyInService: PartiallyInServiceEvent } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DeviceMaintenanceEvents: $.ASN1Decoder<DeviceMaintenanceEvents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceMaintenanceEvents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceMaintenanceEvents (el: _Element): DeviceMaintenanceEvents {
    if (!_cached_decoder_for_DeviceMaintenanceEvents) { _cached_decoder_for_DeviceMaintenanceEvents = $._decode_inextensible_choice<DeviceMaintenanceEvents>({
    "CONTEXT 0": [ "backInService", $._decode_implicit<BackInServiceEvent>(() => _decode_BackInServiceEvent) ],
    "CONTEXT 1": [ "deviceCapabilityChanged", $._decode_implicit<DeviceCapsChangedEvent>(() => _decode_DeviceCapsChangedEvent) ],
    "CONTEXT 2": [ "outOfService", $._decode_implicit<OutOfServiceEvent>(() => _decode_OutOfServiceEvent) ],
    "CONTEXT 3": [ "partiallyInService", $._decode_implicit<PartiallyInServiceEvent>(() => _decode_PartiallyInServiceEvent) ]
}); }
    return _cached_decoder_for_DeviceMaintenanceEvents(el);
}

let _cached_encoder_for_DeviceMaintenanceEvents: $.ASN1Encoder<DeviceMaintenanceEvents> | null = null;

/**
 * @summary Encodes a(n) DeviceMaintenanceEvents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceMaintenanceEvents, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceMaintenanceEvents (value: DeviceMaintenanceEvents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceMaintenanceEvents) { _cached_encoder_for_DeviceMaintenanceEvents = $._encode_choice<DeviceMaintenanceEvents>({
    "backInService": $._encode_implicit(_TagClass.context, 0, () => _encode_BackInServiceEvent, $.BER),
    "deviceCapabilityChanged": $._encode_implicit(_TagClass.context, 1, () => _encode_DeviceCapsChangedEvent, $.BER),
    "outOfService": $._encode_implicit(_TagClass.context, 2, () => _encode_OutOfServiceEvent, $.BER),
    "partiallyInService": $._encode_implicit(_TagClass.context, 3, () => _encode_PartiallyInServiceEvent, $.BER),
}, $.BER); }
    return _cached_encoder_for_DeviceMaintenanceEvents(value, elGetter);
}


/* eslint-enable */
