/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { CallControlEvents, _decode_CallControlEvents, _encode_CallControlEvents } from "../CSTA-event-report-definitions/CallControlEvents.ta.mjs";

import { CallAssociatedEvents, _decode_CallAssociatedEvents, _encode_CallAssociatedEvents } from "../CSTA-event-report-definitions/CallAssociatedEvents.ta.mjs";

import { MediaAttachmentEvents, _decode_MediaAttachmentEvents, _encode_MediaAttachmentEvents } from "../CSTA-event-report-definitions/MediaAttachmentEvents.ta.mjs";

import { PhysicalDeviceFeatureEvents, _decode_PhysicalDeviceFeatureEvents, _encode_PhysicalDeviceFeatureEvents } from "../CSTA-event-report-definitions/PhysicalDeviceFeatureEvents.ta.mjs";

import { LogicalDeviceFeatureEvents, _decode_LogicalDeviceFeatureEvents, _encode_LogicalDeviceFeatureEvents } from "../CSTA-event-report-definitions/LogicalDeviceFeatureEvents.ta.mjs";

import { DeviceMaintenanceEvents, _decode_DeviceMaintenanceEvents, _encode_DeviceMaintenanceEvents } from "../CSTA-event-report-definitions/DeviceMaintenanceEvents.ta.mjs";

import { VoiceUnitEvents, _decode_VoiceUnitEvents, _encode_VoiceUnitEvents } from "../CSTA-event-report-definitions/VoiceUnitEvents.ta.mjs";

import { VendorSpecEvents, _decode_VendorSpecEvents, _encode_VendorSpecEvents } from "../CSTA-event-report-definitions/VendorSpecEvents.ta.mjs";



/**
 * @summary EventSpecificInfo
 * @description
 *
 * Selects the event-report body by category (ECMA-285 §10): call control, call
 * associated, media attachment, physical device feature, logical device
 * feature, device maintenance, voice unit, or vendor-specific.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInfo  ::=  CHOICE
 * {    callControlEvents        [ 0] CallControlEvents,
 *     callAssociatedEvents        [ 1] CallAssociatedEvents,
 *     mediaAttachmentEvents        [ 2] MediaAttachmentEvents,
 *     physicalDeviceFeatureEvents    [ 3] PhysicalDeviceFeatureEvents,
 *     logicalDeviceFeatureEvents    [ 4] LogicalDeviceFeatureEvents,
 *     deviceMaintenanceEvents        [ 5] DeviceMaintenanceEvents,
 *     voiceUnitEvents            [ 6] VoiceUnitEvents,
 *     vendorSpecEvents        [ 7] VendorSpecEvents }
 * ```
 */
export
type EventSpecificInfo =
    { callControlEvents: CallControlEvents } /* CHOICE_ALT_ROOT */
    | { callAssociatedEvents: CallAssociatedEvents } /* CHOICE_ALT_ROOT */
    | { mediaAttachmentEvents: MediaAttachmentEvents } /* CHOICE_ALT_ROOT */
    | { physicalDeviceFeatureEvents: PhysicalDeviceFeatureEvents } /* CHOICE_ALT_ROOT */
    | { logicalDeviceFeatureEvents: LogicalDeviceFeatureEvents } /* CHOICE_ALT_ROOT */
    | { deviceMaintenanceEvents: DeviceMaintenanceEvents } /* CHOICE_ALT_ROOT */
    | { voiceUnitEvents: VoiceUnitEvents } /* CHOICE_ALT_ROOT */
    | { vendorSpecEvents: VendorSpecEvents } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EventSpecificInfo: $.ASN1Decoder<EventSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInfo (el: _Element): EventSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInfo) { _cached_decoder_for_EventSpecificInfo = $._decode_inextensible_choice<EventSpecificInfo>({
    "CONTEXT 0": [ "callControlEvents", $._decode_explicit<CallControlEvents>(() => _decode_CallControlEvents) ],
    "CONTEXT 1": [ "callAssociatedEvents", $._decode_explicit<CallAssociatedEvents>(() => _decode_CallAssociatedEvents) ],
    "CONTEXT 2": [ "mediaAttachmentEvents", $._decode_explicit<MediaAttachmentEvents>(() => _decode_MediaAttachmentEvents) ],
    "CONTEXT 3": [ "physicalDeviceFeatureEvents", $._decode_explicit<PhysicalDeviceFeatureEvents>(() => _decode_PhysicalDeviceFeatureEvents) ],
    "CONTEXT 4": [ "logicalDeviceFeatureEvents", $._decode_explicit<LogicalDeviceFeatureEvents>(() => _decode_LogicalDeviceFeatureEvents) ],
    "CONTEXT 5": [ "deviceMaintenanceEvents", $._decode_explicit<DeviceMaintenanceEvents>(() => _decode_DeviceMaintenanceEvents) ],
    "CONTEXT 6": [ "voiceUnitEvents", $._decode_explicit<VoiceUnitEvents>(() => _decode_VoiceUnitEvents) ],
    "CONTEXT 7": [ "vendorSpecEvents", $._decode_explicit<VendorSpecEvents>(() => _decode_VendorSpecEvents) ]
}); }
    return _cached_decoder_for_EventSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInfo: $.ASN1Encoder<EventSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInfo (value: EventSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInfo) { _cached_encoder_for_EventSpecificInfo = $._encode_choice<EventSpecificInfo>({
    "callControlEvents": $._encode_explicit(_TagClass.context, 0, () => _encode_CallControlEvents, $.BER),
    "callAssociatedEvents": $._encode_explicit(_TagClass.context, 1, () => _encode_CallAssociatedEvents, $.BER),
    "mediaAttachmentEvents": $._encode_explicit(_TagClass.context, 2, () => _encode_MediaAttachmentEvents, $.BER),
    "physicalDeviceFeatureEvents": $._encode_explicit(_TagClass.context, 3, () => _encode_PhysicalDeviceFeatureEvents, $.BER),
    "logicalDeviceFeatureEvents": $._encode_explicit(_TagClass.context, 4, () => _encode_LogicalDeviceFeatureEvents, $.BER),
    "deviceMaintenanceEvents": $._encode_explicit(_TagClass.context, 5, () => _encode_DeviceMaintenanceEvents, $.BER),
    "voiceUnitEvents": $._encode_explicit(_TagClass.context, 6, () => _encode_VoiceUnitEvents, $.BER),
    "vendorSpecEvents": $._encode_explicit(_TagClass.context, 7, () => _encode_VendorSpecEvents, $.BER),
}, $.BER); }
    return _cached_encoder_for_EventSpecificInfo(value, elGetter);
}


/* eslint-enable */
