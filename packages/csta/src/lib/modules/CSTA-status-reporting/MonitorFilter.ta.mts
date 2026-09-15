/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { CallControlEvents, _decode_CallControlEvents, _encode_CallControlEvents } from "../CSTA-application-context-information-csta3/CallControlEvents.ta.mjs";

import { CallAssociatedEvents, _decode_CallAssociatedEvents, _encode_CallAssociatedEvents } from "../CSTA-application-context-information-csta3/CallAssociatedEvents.ta.mjs";

import { MediaAttachmentEvents, _decode_MediaAttachmentEvents, _encode_MediaAttachmentEvents } from "../CSTA-application-context-information-csta3/MediaAttachmentEvents.ta.mjs";

import { PhysicalDeviceFeatureEvents, _decode_PhysicalDeviceFeatureEvents, _encode_PhysicalDeviceFeatureEvents } from "../CSTA-application-context-information-csta3/PhysicalDeviceFeatureEvents.ta.mjs";

import { LogicalDeviceFeatureEvents, _decode_LogicalDeviceFeatureEvents, _encode_LogicalDeviceFeatureEvents } from "../CSTA-application-context-information-csta3/LogicalDeviceFeatureEvents.ta.mjs";

import { DeviceMaintenanceEvents, _decode_DeviceMaintenanceEvents, _encode_DeviceMaintenanceEvents } from "../CSTA-application-context-information-csta3/DeviceMaintenanceEvents.ta.mjs";

import { VoiceUnitEvents, _decode_VoiceUnitEvents, _encode_VoiceUnitEvents } from "../CSTA-application-context-information-csta3/VoiceUnitEvents.ta.mjs";

import { VendorSpecEvents, _decode_VendorSpecEvents, _encode_VendorSpecEvents } from "../CSTA-application-context-information-csta3/VendorSpecEvents.ta.mjs";



/**
 * @summary MonitorFilter
 * @description
 *
 * Events that are filtered (not sent) for a monitor. Default is no filter (all
 * events). A bit TRUE means that event is not sent. Used on Monitor Start and
 * Change Monitor Filter. ECMA-269 §12.2.23.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorFilter ::= SEQUENCE-- default is no filter (i.e. all events)
 * {    callControl             [0] IMPLICIT CallControlEvents             DEFAULT { },
 *     callAssociated             [6] IMPLICIT CallAssociatedEvents         DEFAULT { },
 *     mediaAttachment         [7] IMPLICIT MediaAttachmentEvents         DEFAULT { },
 *     physicalDeviceFeature         [8] IMPLICIT PhysicalDeviceFeatureEvents     DEFAULT { },
 *     logicalDeviceFeature         [9] IMPLICIT LogicalDeviceFeatureEvents     DEFAULT { },
 *     maintenance             [3] IMPLICIT DeviceMaintenanceEvents         DEFAULT { },
 *     voiceUnit             [5] IMPLICIT VoiceUnitEvents             DEFAULT { },
 *     private             [4] IMPLICIT VendorSpecEvents             DEFAULT { } }
 * ```
 * 
 * @class
 */
export
class MonitorFilter {
    constructor (
        /**
         * @summary `callControl`.
         * @description
         *
         * Call-control events (ECMA-269 Table 17-150). A set bit filters
         * (suppresses) the event. ECMA-269 §12.2.23.
         *
         * @public
         * @readonly
         */
        readonly callControl: OPTIONAL<CallControlEvents>,
        /**
         * @summary `callAssociated`.
         * @description
         *
         * Call-associated events (Table 18-26). A set bit filters (suppresses)
         * the event. ECMA-269 §12.2.23.
         *
         * @public
         * @readonly
         */
        readonly callAssociated: OPTIONAL<CallAssociatedEvents>,
        /**
         * @summary `mediaAttachment`.
         * @description
         *
         * Media-attachment events (Table 19-14). A set bit filters (suppresses)
         * the event. ECMA-269 §12.2.23.
         *
         * @public
         * @readonly
         */
        readonly mediaAttachment: OPTIONAL<MediaAttachmentEvents>,
        /**
         * @summary `physicalDeviceFeature`.
         * @description
         *
         * Physical-device events (Table 21-59). A set bit filters (suppresses)
         * the event. ECMA-269 §12.2.23.
         *
         * @public
         * @readonly
         */
        readonly physicalDeviceFeature: OPTIONAL<PhysicalDeviceFeatureEvents>,
        /**
         * @summary `logicalDeviceFeature`.
         * @description
         *
         * Logical-device events (Table 22-61). A set bit filters (suppresses)
         * the event. ECMA-269 §12.2.23.
         *
         * @public
         * @readonly
         */
        readonly logicalDeviceFeature: OPTIONAL<LogicalDeviceFeatureEvents>,
        /**
         * @summary `maintenance`.
         * @description
         *
         * Maintenance events (Table 23-1). A set bit filters (suppresses) the
         * event. ECMA-269 §12.2.23.
         *
         * @public
         * @readonly
         */
        readonly maintenance: OPTIONAL<DeviceMaintenanceEvents>,
        /**
         * @summary `voiceUnit`.
         * @description
         *
         * Voice events (Table 26-58). A set bit filters (suppresses) the event.
         * ECMA-269 §12.2.23.
         *
         * @public
         * @readonly
         */
        readonly voiceUnit: OPTIONAL<VoiceUnitEvents>,
        /**
         * @summary `private_`.
         * @description
         *
         * Vendor-specific events (Table 29-12). ASN.1 name `private`. A set bit
         * filters (suppresses) the event. ECMA-269 §12.2.23.
         *
         * @public
         * @readonly
         */
        readonly private_: OPTIONAL<VendorSpecEvents>
    ) {}

    /**
     * @summary Restructures an object into a MonitorFilter
     * @description
     * 
     * This takes an `object` and converts it to a `MonitorFilter`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MonitorFilter`.
     * @returns {MonitorFilter}
     */
    public static _from_object (_o: { [_K in keyof (MonitorFilter)]: (MonitorFilter)[_K] }): MonitorFilter {
        return new MonitorFilter(_o.callControl, _o.callAssociated, _o.mediaAttachment, _o.physicalDeviceFeature, _o.logicalDeviceFeature, _o.maintenance, _o.voiceUnit, _o.private_);
    }

    /**
     * @summary Getter that returns the default value for `callControl`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_callControl () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `callAssociated`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_callAssociated () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `mediaAttachment`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_mediaAttachment () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `physicalDeviceFeature`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_physicalDeviceFeature () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `logicalDeviceFeature`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_logicalDeviceFeature () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `maintenance`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_maintenance () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `voiceUnit`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_voiceUnit () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `private_`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_private_ () { return new Uint8ClampedArray([]); }
}

/**
 * @summary The Leading Root Component Types of MonitorFilter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MonitorFilter: $.ComponentSpec[] = [
    new $.ComponentSpec("callControl", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callAssociated", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("mediaAttachment", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("physicalDeviceFeature", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("logicalDeviceFeature", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("maintenance", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("voiceUnit", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("private", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of MonitorFilter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MonitorFilter: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MonitorFilter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MonitorFilter: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MonitorFilter: $.ASN1Decoder<MonitorFilter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorFilter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorFilter (el: _Element): MonitorFilter {
    if (!_cached_decoder_for_MonitorFilter) { _cached_decoder_for_MonitorFilter = function (el: _Element): MonitorFilter {
    let callControl: OPTIONAL<CallControlEvents> = MonitorFilter._default_value_for_callControl;
    let callAssociated: OPTIONAL<CallAssociatedEvents> = MonitorFilter._default_value_for_callAssociated;
    let mediaAttachment: OPTIONAL<MediaAttachmentEvents> = MonitorFilter._default_value_for_mediaAttachment;
    let physicalDeviceFeature: OPTIONAL<PhysicalDeviceFeatureEvents> = MonitorFilter._default_value_for_physicalDeviceFeature;
    let logicalDeviceFeature: OPTIONAL<LogicalDeviceFeatureEvents> = MonitorFilter._default_value_for_logicalDeviceFeature;
    let maintenance: OPTIONAL<DeviceMaintenanceEvents> = MonitorFilter._default_value_for_maintenance;
    let voiceUnit: OPTIONAL<VoiceUnitEvents> = MonitorFilter._default_value_for_voiceUnit;
    let private_: OPTIONAL<VendorSpecEvents> = MonitorFilter._default_value_for_private_;
    const callbacks: $.DecodingMap = {
        "callControl": (_el: _Element): void => { callControl = $._decode_implicit<CallControlEvents>(() => _decode_CallControlEvents)(_el); },
        "callAssociated": (_el: _Element): void => { callAssociated = $._decode_implicit<CallAssociatedEvents>(() => _decode_CallAssociatedEvents)(_el); },
        "mediaAttachment": (_el: _Element): void => { mediaAttachment = $._decode_implicit<MediaAttachmentEvents>(() => _decode_MediaAttachmentEvents)(_el); },
        "physicalDeviceFeature": (_el: _Element): void => { physicalDeviceFeature = $._decode_implicit<PhysicalDeviceFeatureEvents>(() => _decode_PhysicalDeviceFeatureEvents)(_el); },
        "logicalDeviceFeature": (_el: _Element): void => { logicalDeviceFeature = $._decode_implicit<LogicalDeviceFeatureEvents>(() => _decode_LogicalDeviceFeatureEvents)(_el); },
        "maintenance": (_el: _Element): void => { maintenance = $._decode_implicit<DeviceMaintenanceEvents>(() => _decode_DeviceMaintenanceEvents)(_el); },
        "voiceUnit": (_el: _Element): void => { voiceUnit = $._decode_implicit<VoiceUnitEvents>(() => _decode_VoiceUnitEvents)(_el); },
        "private": (_el: _Element): void => { private_ = $._decode_implicit<VendorSpecEvents>(() => _decode_VendorSpecEvents)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MonitorFilter,
        _extension_additions_list_spec_for_MonitorFilter,
        _root_component_type_list_2_spec_for_MonitorFilter,
        undefined,
    );
    return new MonitorFilter(
        callControl,
        callAssociated,
        mediaAttachment,
        physicalDeviceFeature,
        logicalDeviceFeature,
        maintenance,
        voiceUnit,
        private_
    );
}; }
    return _cached_decoder_for_MonitorFilter(el);
}

let _cached_encoder_for_MonitorFilter: $.ASN1Encoder<MonitorFilter> | null = null;

/**
 * @summary Encodes a(n) MonitorFilter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorFilter, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorFilter (value: MonitorFilter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorFilter) { _cached_encoder_for_MonitorFilter = function (value: MonitorFilter, elGetter: $.ASN1Encoder<MonitorFilter>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.callControl === undefined || $.deepEq(value.callControl, MonitorFilter._default_value_for_callControl) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CallControlEvents, $.BER)(value.callControl, $.BER)),
            /* IF_DEFAULT */ (value.callAssociated === undefined || $.deepEq(value.callAssociated, MonitorFilter._default_value_for_callAssociated) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_CallAssociatedEvents, $.BER)(value.callAssociated, $.BER)),
            /* IF_DEFAULT */ (value.mediaAttachment === undefined || $.deepEq(value.mediaAttachment, MonitorFilter._default_value_for_mediaAttachment) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_MediaAttachmentEvents, $.BER)(value.mediaAttachment, $.BER)),
            /* IF_DEFAULT */ (value.physicalDeviceFeature === undefined || $.deepEq(value.physicalDeviceFeature, MonitorFilter._default_value_for_physicalDeviceFeature) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_PhysicalDeviceFeatureEvents, $.BER)(value.physicalDeviceFeature, $.BER)),
            /* IF_DEFAULT */ (value.logicalDeviceFeature === undefined || $.deepEq(value.logicalDeviceFeature, MonitorFilter._default_value_for_logicalDeviceFeature) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_LogicalDeviceFeatureEvents, $.BER)(value.logicalDeviceFeature, $.BER)),
            /* IF_DEFAULT */ (value.maintenance === undefined || $.deepEq(value.maintenance, MonitorFilter._default_value_for_maintenance) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_DeviceMaintenanceEvents, $.BER)(value.maintenance, $.BER)),
            /* IF_DEFAULT */ (value.voiceUnit === undefined || $.deepEq(value.voiceUnit, MonitorFilter._default_value_for_voiceUnit) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_VoiceUnitEvents, $.BER)(value.voiceUnit, $.BER)),
            /* IF_DEFAULT */ (value.private_ === undefined || $.deepEq(value.private_, MonitorFilter._default_value_for_private_) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_VendorSpecEvents, $.BER)(value.private_, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MonitorFilter(value, elGetter);
}


/* eslint-enable */
