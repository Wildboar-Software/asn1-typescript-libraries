/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";

import { AuditoryApparatusID, _decode_AuditoryApparatusID, _encode_AuditoryApparatusID } from "../CSTA-physical-device-feature/AuditoryApparatusID.ta.mjs";

import { Volume, _decode_Volume, _encode_Volume } from "../CSTA-physical-device-feature/Volume.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SpeakerVolumeEvent
 * @description
 *
 * Speaker Volume event (ECMA-269 §21.2.11 / ECMA-285 §19.2.11). Direction:
 * SF→CF via Event Report. Speaker volume changed (telephone or Set Speaker
 * Volume). Not generated when a Set request leaves the feature unchanged
 * (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpeakerVolumeEvent ::= SEQUENCE
 * {    invokingDevice            SubjectDeviceID,
 *     auditoryApparatus        AuditoryApparatusID,
 *     speakerVolume            Volume,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SpeakerVolumeEvent {
    constructor (
        /**
         * @summary `invokingDevice`.
         * @description
         *
         * Device where the feature was invoked.
         * @public
         * @readonly
         */
        readonly invokingDevice: SubjectDeviceID,
        /**
         * @summary `auditoryApparatus`.
         * @description
         *
         * Apparatus containing the speaker whose volume changed.
         * @public
         * @readonly
         */
        readonly auditoryApparatus: AuditoryApparatusID,
        /**
         * @summary `speakerVolume`.
         * @description
         *
         * Absolute 0–100 (0 silence, 100 max; 1–99 device-specific) or
         * increment/decrement by a switch-specified step.
         * @public
         * @readonly
         */
        readonly speakerVolume: Volume,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SpeakerVolumeEvent
     * @description
     * 
     * This takes an `object` and converts it to a `SpeakerVolumeEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SpeakerVolumeEvent`.
     * @returns {SpeakerVolumeEvent}
     */
    public static _from_object (_o: { [_K in keyof (SpeakerVolumeEvent)]: (SpeakerVolumeEvent)[_K] }): SpeakerVolumeEvent {
        return new SpeakerVolumeEvent(_o.invokingDevice, _o.auditoryApparatus, _o.speakerVolume, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SpeakerVolumeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SpeakerVolumeEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("invokingDevice", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("auditoryApparatus", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("speakerVolume", false, $.hasAnyTag),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SpeakerVolumeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SpeakerVolumeEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SpeakerVolumeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SpeakerVolumeEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SpeakerVolumeEvent: $.ASN1Decoder<SpeakerVolumeEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpeakerVolumeEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpeakerVolumeEvent (el: _Element): SpeakerVolumeEvent {
    if (!_cached_decoder_for_SpeakerVolumeEvent) { _cached_decoder_for_SpeakerVolumeEvent = function (el: _Element): SpeakerVolumeEvent {
    let invokingDevice!: SubjectDeviceID;
    let auditoryApparatus!: AuditoryApparatusID;
    let speakerVolume!: Volume;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "invokingDevice": (_el: _Element): void => { invokingDevice = _decode_SubjectDeviceID(_el); },
        "auditoryApparatus": (_el: _Element): void => { auditoryApparatus = _decode_AuditoryApparatusID(_el); },
        "speakerVolume": (_el: _Element): void => { speakerVolume = _decode_Volume(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SpeakerVolumeEvent,
        _extension_additions_list_spec_for_SpeakerVolumeEvent,
        _root_component_type_list_2_spec_for_SpeakerVolumeEvent,
        undefined,
    );
    return new SpeakerVolumeEvent(
        invokingDevice,
        auditoryApparatus,
        speakerVolume,
        extensions
    );
}; }
    return _cached_decoder_for_SpeakerVolumeEvent(el);
}

let _cached_encoder_for_SpeakerVolumeEvent: $.ASN1Encoder<SpeakerVolumeEvent> | null = null;

/**
 * @summary Encodes a(n) SpeakerVolumeEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpeakerVolumeEvent, encoded as an ASN.1 Element.
 */
export
function _encode_SpeakerVolumeEvent (value: SpeakerVolumeEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpeakerVolumeEvent) { _cached_encoder_for_SpeakerVolumeEvent = function (value: SpeakerVolumeEvent, elGetter: $.ASN1Encoder<SpeakerVolumeEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.invokingDevice, $.BER),
            /* REQUIRED   */ _encode_AuditoryApparatusID(value.auditoryApparatus, $.BER),
            /* REQUIRED   */ _encode_Volume(value.speakerVolume, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SpeakerVolumeEvent(value, elGetter);
}


/* eslint-enable */
