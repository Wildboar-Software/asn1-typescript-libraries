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
import { CallControlEvtsList, _decode_CallControlEvtsList, _encode_CallControlEvtsList } from "../CSTA-capability-exchange/CallControlEvtsList.ta.mjs";
// export { CallControlEvtsList, _decode_CallControlEvtsList, _encode_CallControlEvtsList } from "../CSTA-capability-exchange/CallControlEvtsList.ta.mjs";
import { CallAssociatedEvtsList, _decode_CallAssociatedEvtsList, _encode_CallAssociatedEvtsList } from "../CSTA-capability-exchange/CallAssociatedEvtsList.ta.mjs";
// export { CallAssociatedEvtsList, _decode_CallAssociatedEvtsList, _encode_CallAssociatedEvtsList } from "../CSTA-capability-exchange/CallAssociatedEvtsList.ta.mjs";
import { MediaEvtsList, _decode_MediaEvtsList, _encode_MediaEvtsList } from "../CSTA-capability-exchange/MediaEvtsList.ta.mjs";
// export { MediaEvtsList, _decode_MediaEvtsList, _encode_MediaEvtsList } from "../CSTA-capability-exchange/MediaEvtsList.ta.mjs";
import { PhysDevEvtsList, _decode_PhysDevEvtsList, _encode_PhysDevEvtsList } from "../CSTA-capability-exchange/PhysDevEvtsList.ta.mjs";
// export { PhysDevEvtsList, _decode_PhysDevEvtsList, _encode_PhysDevEvtsList } from "../CSTA-capability-exchange/PhysDevEvtsList.ta.mjs";
import { LogicalEvtsList, _decode_LogicalEvtsList, _encode_LogicalEvtsList } from "../CSTA-capability-exchange/LogicalEvtsList.ta.mjs";
// export { LogicalEvtsList, _decode_LogicalEvtsList, _encode_LogicalEvtsList } from "../CSTA-capability-exchange/LogicalEvtsList.ta.mjs";
import { DeviceMaintEvtsList, _decode_DeviceMaintEvtsList, _encode_DeviceMaintEvtsList } from "../CSTA-capability-exchange/DeviceMaintEvtsList.ta.mjs";
// export { DeviceMaintEvtsList, _decode_DeviceMaintEvtsList, _encode_DeviceMaintEvtsList } from "../CSTA-capability-exchange/DeviceMaintEvtsList.ta.mjs";
import { VoiceUnitEvtsList, _decode_VoiceUnitEvtsList, _encode_VoiceUnitEvtsList } from "../CSTA-capability-exchange/VoiceUnitEvtsList.ta.mjs";
// export { VoiceUnitEvtsList, _decode_VoiceUnitEvtsList, _encode_VoiceUnitEvtsList } from "../CSTA-capability-exchange/VoiceUnitEvtsList.ta.mjs";
import { VendorSpecificEvtsList, _decode_VendorSpecificEvtsList, _encode_VendorSpecificEvtsList } from "../CSTA-capability-exchange/VendorSpecificEvtsList.ta.mjs";
// export { VendorSpecificEvtsList, _decode_VendorSpecificEvtsList, _encode_VendorSpecificEvtsList } from "../CSTA-capability-exchange/VendorSpecificEvtsList.ta.mjs";


/**
 * @summary GetCSTAFeatureResult_supportedEvents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetCSTAFeatureResult-supportedEvents ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class GetCSTAFeatureResult_supportedEvents {
    constructor (
        /**
         * @summary `callControlEvtsList`.
         * @public
         * @readonly
         */
        readonly callControlEvtsList: OPTIONAL<CallControlEvtsList>,
        /**
         * @summary `callAssociatedEvtsList`.
         * @public
         * @readonly
         */
        readonly callAssociatedEvtsList: OPTIONAL<CallAssociatedEvtsList>,
        /**
         * @summary `mediaEvtsList`.
         * @public
         * @readonly
         */
        readonly mediaEvtsList: OPTIONAL<MediaEvtsList>,
        /**
         * @summary `physDevEvtsList`.
         * @public
         * @readonly
         */
        readonly physDevEvtsList: OPTIONAL<PhysDevEvtsList>,
        /**
         * @summary `logicalEvtsList`.
         * @public
         * @readonly
         */
        readonly logicalEvtsList: OPTIONAL<LogicalEvtsList>,
        /**
         * @summary `deviceMaintEvtsList`.
         * @public
         * @readonly
         */
        readonly deviceMaintEvtsList: OPTIONAL<DeviceMaintEvtsList>,
        /**
         * @summary `voiceEvtsList`.
         * @public
         * @readonly
         */
        readonly voiceEvtsList: OPTIONAL<VoiceUnitEvtsList>,
        /**
         * @summary `vendorSpecificEvtsList`.
         * @public
         * @readonly
         */
        readonly vendorSpecificEvtsList: OPTIONAL<VendorSpecificEvtsList>
    ) {}

    /**
     * @summary Restructures an object into a GetCSTAFeatureResult_supportedEvents
     * @description
     * 
     * This takes an `object` and converts it to a `GetCSTAFeatureResult_supportedEvents`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetCSTAFeatureResult_supportedEvents`.
     * @returns {GetCSTAFeatureResult_supportedEvents}
     */
    public static _from_object (_o: { [_K in keyof (GetCSTAFeatureResult_supportedEvents)]: (GetCSTAFeatureResult_supportedEvents)[_K] }): GetCSTAFeatureResult_supportedEvents {
        return new GetCSTAFeatureResult_supportedEvents(_o.callControlEvtsList, _o.callAssociatedEvtsList, _o.mediaEvtsList, _o.physDevEvtsList, _o.logicalEvtsList, _o.deviceMaintEvtsList, _o.voiceEvtsList, _o.vendorSpecificEvtsList);
    }


}

/**
 * @summary The Leading Root Component Types of GetCSTAFeatureResult_supportedEvents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetCSTAFeatureResult_supportedEvents: $.ComponentSpec[] = [
    new $.ComponentSpec("callControlEvtsList", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("callAssociatedEvtsList", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("mediaEvtsList", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("physDevEvtsList", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("logicalEvtsList", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("deviceMaintEvtsList", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("voiceEvtsList", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("vendorSpecificEvtsList", true, $.hasTag(_TagClass.context, 7), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GetCSTAFeatureResult_supportedEvents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetCSTAFeatureResult_supportedEvents: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetCSTAFeatureResult_supportedEvents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetCSTAFeatureResult_supportedEvents: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetCSTAFeatureResult_supportedEvents: $.ASN1Decoder<GetCSTAFeatureResult_supportedEvents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetCSTAFeatureResult_supportedEvents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetCSTAFeatureResult_supportedEvents (el: _Element): GetCSTAFeatureResult_supportedEvents {
    if (!_cached_decoder_for_GetCSTAFeatureResult_supportedEvents) { _cached_decoder_for_GetCSTAFeatureResult_supportedEvents = function (el: _Element): GetCSTAFeatureResult_supportedEvents {
    let callControlEvtsList: OPTIONAL<CallControlEvtsList>;
    let callAssociatedEvtsList: OPTIONAL<CallAssociatedEvtsList>;
    let mediaEvtsList: OPTIONAL<MediaEvtsList>;
    let physDevEvtsList: OPTIONAL<PhysDevEvtsList>;
    let logicalEvtsList: OPTIONAL<LogicalEvtsList>;
    let deviceMaintEvtsList: OPTIONAL<DeviceMaintEvtsList>;
    let voiceEvtsList: OPTIONAL<VoiceUnitEvtsList>;
    let vendorSpecificEvtsList: OPTIONAL<VendorSpecificEvtsList>;
    const callbacks: $.DecodingMap = {
        "callControlEvtsList": (_el: _Element): void => { callControlEvtsList = $._decode_explicit<CallControlEvtsList>(() => _decode_CallControlEvtsList)(_el); },
        "callAssociatedEvtsList": (_el: _Element): void => { callAssociatedEvtsList = $._decode_explicit<CallAssociatedEvtsList>(() => _decode_CallAssociatedEvtsList)(_el); },
        "mediaEvtsList": (_el: _Element): void => { mediaEvtsList = $._decode_explicit<MediaEvtsList>(() => _decode_MediaEvtsList)(_el); },
        "physDevEvtsList": (_el: _Element): void => { physDevEvtsList = $._decode_explicit<PhysDevEvtsList>(() => _decode_PhysDevEvtsList)(_el); },
        "logicalEvtsList": (_el: _Element): void => { logicalEvtsList = $._decode_explicit<LogicalEvtsList>(() => _decode_LogicalEvtsList)(_el); },
        "deviceMaintEvtsList": (_el: _Element): void => { deviceMaintEvtsList = $._decode_explicit<DeviceMaintEvtsList>(() => _decode_DeviceMaintEvtsList)(_el); },
        "voiceEvtsList": (_el: _Element): void => { voiceEvtsList = $._decode_explicit<VoiceUnitEvtsList>(() => _decode_VoiceUnitEvtsList)(_el); },
        "vendorSpecificEvtsList": (_el: _Element): void => { vendorSpecificEvtsList = $._decode_explicit<VendorSpecificEvtsList>(() => _decode_VendorSpecificEvtsList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetCSTAFeatureResult_supportedEvents,
        _extension_additions_list_spec_for_GetCSTAFeatureResult_supportedEvents,
        _root_component_type_list_2_spec_for_GetCSTAFeatureResult_supportedEvents,
        undefined,
    );
    return new GetCSTAFeatureResult_supportedEvents(
        callControlEvtsList,
        callAssociatedEvtsList,
        mediaEvtsList,
        physDevEvtsList,
        logicalEvtsList,
        deviceMaintEvtsList,
        voiceEvtsList,
        vendorSpecificEvtsList
    );
}; }
    return _cached_decoder_for_GetCSTAFeatureResult_supportedEvents(el);
}

let _cached_encoder_for_GetCSTAFeatureResult_supportedEvents: $.ASN1Encoder<GetCSTAFeatureResult_supportedEvents> | null = null;

/**
 * @summary Encodes a(n) GetCSTAFeatureResult_supportedEvents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetCSTAFeatureResult_supportedEvents, encoded as an ASN.1 Element.
 */
export
function _encode_GetCSTAFeatureResult_supportedEvents (value: GetCSTAFeatureResult_supportedEvents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetCSTAFeatureResult_supportedEvents) { _cached_encoder_for_GetCSTAFeatureResult_supportedEvents = function (value: GetCSTAFeatureResult_supportedEvents, elGetter: $.ASN1Encoder<GetCSTAFeatureResult_supportedEvents>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.callControlEvtsList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_CallControlEvtsList, $.BER)(value.callControlEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.callAssociatedEvtsList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_CallAssociatedEvtsList, $.BER)(value.callAssociatedEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.mediaEvtsList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_MediaEvtsList, $.BER)(value.mediaEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.physDevEvtsList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_PhysDevEvtsList, $.BER)(value.physDevEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.logicalEvtsList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_LogicalEvtsList, $.BER)(value.logicalEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.deviceMaintEvtsList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_DeviceMaintEvtsList, $.BER)(value.deviceMaintEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.voiceEvtsList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_VoiceUnitEvtsList, $.BER)(value.voiceEvtsList, $.BER)),
            /* IF_ABSENT  */ ((value.vendorSpecificEvtsList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 7, () => _encode_VendorSpecificEvtsList, $.BER)(value.vendorSpecificEvtsList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetCSTAFeatureResult_supportedEvents(value, elGetter);
}


/* eslint-enable */
