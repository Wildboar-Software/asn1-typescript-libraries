/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ButtonPress, _decode_ButtonPress, _encode_ButtonPress } from "../CSTA-capability-exchange/ButtonPress.ta.mjs";

import { GetAuditoryApparatusInfo, _decode_GetAuditoryApparatusInfo, _encode_GetAuditoryApparatusInfo } from "../CSTA-capability-exchange/GetAuditoryApparatusInfo.ta.mjs";

import { GetButtonInformation, _decode_GetButtonInformation, _encode_GetButtonInformation } from "../CSTA-capability-exchange/GetButtonInformation.ta.mjs";

import { GetDisplay, _decode_GetDisplay, _encode_GetDisplay } from "../CSTA-capability-exchange/GetDisplay.ta.mjs";

import { GetHookSwitchStatus, _decode_GetHookSwitchStatus, _encode_GetHookSwitchStatus } from "../CSTA-capability-exchange/GetHookSwitchStatus.ta.mjs";

import { GetLampInfo, _decode_GetLampInfo, _encode_GetLampInfo } from "../CSTA-capability-exchange/GetLampInfo.ta.mjs";

import { GetLampMode, _decode_GetLampMode, _encode_GetLampMode } from "../CSTA-capability-exchange/GetLampMode.ta.mjs";

import { GetMessageWaitingIndicator, _decode_GetMessageWaitingIndicator, _encode_GetMessageWaitingIndicator } from "../CSTA-capability-exchange/GetMessageWaitingIndicator.ta.mjs";

import { GetMicrophoneGain, _decode_GetMicrophoneGain, _encode_GetMicrophoneGain } from "../CSTA-capability-exchange/GetMicrophoneGain.ta.mjs";

import { GetMicrophoneMute, _decode_GetMicrophoneMute, _encode_GetMicrophoneMute } from "../CSTA-capability-exchange/GetMicrophoneMute.ta.mjs";

import { GetRingerStatus, _decode_GetRingerStatus, _encode_GetRingerStatus } from "../CSTA-capability-exchange/GetRingerStatus.ta.mjs";

import { GetSpeakerMute, _decode_GetSpeakerMute, _encode_GetSpeakerMute } from "../CSTA-capability-exchange/GetSpeakerMute.ta.mjs";

import { GetSpeakerVolume, _decode_GetSpeakerVolume, _encode_GetSpeakerVolume } from "../CSTA-capability-exchange/GetSpeakerVolume.ta.mjs";

import { SetButtonInformation, _decode_SetButtonInformation, _encode_SetButtonInformation } from "../CSTA-capability-exchange/SetButtonInformation.ta.mjs";

import { SetDisplay, _decode_SetDisplay, _encode_SetDisplay } from "../CSTA-capability-exchange/SetDisplay.ta.mjs";

import { SetHookSwitchStatus, _decode_SetHookSwitchStatus, _encode_SetHookSwitchStatus } from "../CSTA-capability-exchange/SetHookSwitchStatus.ta.mjs";

import { SetLampMode, _decode_SetLampMode, _encode_SetLampMode } from "../CSTA-capability-exchange/SetLampMode.ta.mjs";

import { SetMessageWaitingIndicator, _decode_SetMessageWaitingIndicator, _encode_SetMessageWaitingIndicator } from "../CSTA-capability-exchange/SetMessageWaitingIndicator.ta.mjs";

import { SetMicrophoneGain, _decode_SetMicrophoneGain, _encode_SetMicrophoneGain } from "../CSTA-capability-exchange/SetMicrophoneGain.ta.mjs";

import { SetMicrophoneMute, _decode_SetMicrophoneMute, _encode_SetMicrophoneMute } from "../CSTA-capability-exchange/SetMicrophoneMute.ta.mjs";

import { SetRingerStatus, _decode_SetRingerStatus, _encode_SetRingerStatus } from "../CSTA-capability-exchange/SetRingerStatus.ta.mjs";

import { SetSpeakerMute, _decode_SetSpeakerMute, _encode_SetSpeakerMute } from "../CSTA-capability-exchange/SetSpeakerMute.ta.mjs";

import { SetSpeakerVolume, _decode_SetSpeakerVolume, _encode_SetSpeakerVolume } from "../CSTA-capability-exchange/SetSpeakerVolume.ta.mjs";



/**
 * @summary PhysDevServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PhysDevServList ::= SEQUENCE
 * {     buttonPress             [ 0] IMPLICIT ButtonPress             OPTIONAL,
 *     getAuditoryApparatusInfo     [ 1] IMPLICIT GetAuditoryApparatusInfo         OPTIONAL,
 *     getButtonInformation         [ 2] IMPLICIT GetButtonInformation         OPTIONAL,
 *     getDisplay             [ 3] IMPLICIT GetDisplay             OPTIONAL,
 *     getHookSwitchStatus         [ 4] IMPLICIT GetHookSwitchStatus         OPTIONAL,
 *     getLampInfo             [ 5] IMPLICIT GetLampInfo             OPTIONAL,
 *     getLampMode             [ 6] IMPLICIT GetLampMode             OPTIONAL,
 *     getMessageWaitingIndicator     [ 7] IMPLICIT GetMessageWaitingIndicator     OPTIONAL,
 *     getMicrophoneGain         [ 8] IMPLICIT GetMicrophoneGain         OPTIONAL,
 *     getMicrophoneMute         [ 9] IMPLICIT GetMicrophoneMute         OPTIONAL,
 *     getRingerStatus         [10] IMPLICIT GetRingerStatus             OPTIONAL,
 *     getSpeakerMute             [11] IMPLICIT GetSpeakerMute             OPTIONAL,
 *     getSpeakerVolume         [12] IMPLICIT GetSpeakerVolume             OPTIONAL,
 *     setButtonInformation         [13] IMPLICIT SetButtonInformation         OPTIONAL,
 *     setDisplay             [14] IMPLICIT SetDisplay             OPTIONAL,
 *     setHookSwitchStatus         [15] IMPLICIT SetHookSwitchStatus         OPTIONAL,
 *     setLampMode             [16] IMPLICIT SetLampMode             OPTIONAL,
 *     setMessageWaitingIndicator     [17] IMPLICIT SetMessageWaitingIndicator     OPTIONAL,
 *     setMicrophoneGain         [18] IMPLICIT SetMicrophoneGain         OPTIONAL,
 *     setMicrophoneMute         [19] IMPLICIT SetMicrophoneMute         OPTIONAL,
 *     setRingerStatus         [20] IMPLICIT SetRingerStatus             OPTIONAL,
 *     setSpeakerMute             [21] IMPLICIT SetSpeakerMute             OPTIONAL,
 *     setSpeakerVolume         [22] IMPLICIT SetSpeakerVolume             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class PhysDevServList {
    constructor (
        /**
         * @summary `buttonPress`.
         * @public
         * @readonly
         */
        readonly buttonPress: OPTIONAL<ButtonPress>,
        /**
         * @summary `getAuditoryApparatusInfo`.
         * @public
         * @readonly
         */
        readonly getAuditoryApparatusInfo: OPTIONAL<GetAuditoryApparatusInfo>,
        /**
         * @summary `getButtonInformation`.
         * @public
         * @readonly
         */
        readonly getButtonInformation: OPTIONAL<GetButtonInformation>,
        /**
         * @summary `getDisplay`.
         * @public
         * @readonly
         */
        readonly getDisplay: OPTIONAL<GetDisplay>,
        /**
         * @summary `getHookSwitchStatus`.
         * @public
         * @readonly
         */
        readonly getHookSwitchStatus: OPTIONAL<GetHookSwitchStatus>,
        /**
         * @summary `getLampInfo`.
         * @public
         * @readonly
         */
        readonly getLampInfo: OPTIONAL<GetLampInfo>,
        /**
         * @summary `getLampMode`.
         * @public
         * @readonly
         */
        readonly getLampMode: OPTIONAL<GetLampMode>,
        /**
         * @summary `getMessageWaitingIndicator`.
         * @public
         * @readonly
         */
        readonly getMessageWaitingIndicator: OPTIONAL<GetMessageWaitingIndicator>,
        /**
         * @summary `getMicrophoneGain`.
         * @public
         * @readonly
         */
        readonly getMicrophoneGain: OPTIONAL<GetMicrophoneGain>,
        /**
         * @summary `getMicrophoneMute`.
         * @public
         * @readonly
         */
        readonly getMicrophoneMute: OPTIONAL<GetMicrophoneMute>,
        /**
         * @summary `getRingerStatus`.
         * @public
         * @readonly
         */
        readonly getRingerStatus: OPTIONAL<GetRingerStatus>,
        /**
         * @summary `getSpeakerMute`.
         * @public
         * @readonly
         */
        readonly getSpeakerMute: OPTIONAL<GetSpeakerMute>,
        /**
         * @summary `getSpeakerVolume`.
         * @public
         * @readonly
         */
        readonly getSpeakerVolume: OPTIONAL<GetSpeakerVolume>,
        /**
         * @summary `setButtonInformation`.
         * @public
         * @readonly
         */
        readonly setButtonInformation: OPTIONAL<SetButtonInformation>,
        /**
         * @summary `setDisplay`.
         * @public
         * @readonly
         */
        readonly setDisplay: OPTIONAL<SetDisplay>,
        /**
         * @summary `setHookSwitchStatus`.
         * @public
         * @readonly
         */
        readonly setHookSwitchStatus: OPTIONAL<SetHookSwitchStatus>,
        /**
         * @summary `setLampMode`.
         * @public
         * @readonly
         */
        readonly setLampMode: OPTIONAL<SetLampMode>,
        /**
         * @summary `setMessageWaitingIndicator`.
         * @public
         * @readonly
         */
        readonly setMessageWaitingIndicator: OPTIONAL<SetMessageWaitingIndicator>,
        /**
         * @summary `setMicrophoneGain`.
         * @public
         * @readonly
         */
        readonly setMicrophoneGain: OPTIONAL<SetMicrophoneGain>,
        /**
         * @summary `setMicrophoneMute`.
         * @public
         * @readonly
         */
        readonly setMicrophoneMute: OPTIONAL<SetMicrophoneMute>,
        /**
         * @summary `setRingerStatus`.
         * @public
         * @readonly
         */
        readonly setRingerStatus: OPTIONAL<SetRingerStatus>,
        /**
         * @summary `setSpeakerMute`.
         * @public
         * @readonly
         */
        readonly setSpeakerMute: OPTIONAL<SetSpeakerMute>,
        /**
         * @summary `setSpeakerVolume`.
         * @public
         * @readonly
         */
        readonly setSpeakerVolume: OPTIONAL<SetSpeakerVolume>
    ) {}

    /**
     * @summary Restructures an object into a PhysDevServList
     * @description
     * 
     * This takes an `object` and converts it to a `PhysDevServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PhysDevServList`.
     * @returns {PhysDevServList}
     */
    public static _from_object (_o: { [_K in keyof (PhysDevServList)]: (PhysDevServList)[_K] }): PhysDevServList {
        return new PhysDevServList(_o.buttonPress, _o.getAuditoryApparatusInfo, _o.getButtonInformation, _o.getDisplay, _o.getHookSwitchStatus, _o.getLampInfo, _o.getLampMode, _o.getMessageWaitingIndicator, _o.getMicrophoneGain, _o.getMicrophoneMute, _o.getRingerStatus, _o.getSpeakerMute, _o.getSpeakerVolume, _o.setButtonInformation, _o.setDisplay, _o.setHookSwitchStatus, _o.setLampMode, _o.setMessageWaitingIndicator, _o.setMicrophoneGain, _o.setMicrophoneMute, _o.setRingerStatus, _o.setSpeakerMute, _o.setSpeakerVolume);
    }


}

/**
 * @summary The Leading Root Component Types of PhysDevServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PhysDevServList: $.ComponentSpec[] = [
    new $.ComponentSpec("buttonPress", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("getAuditoryApparatusInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("getButtonInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("getDisplay", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("getHookSwitchStatus", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("getLampInfo", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("getLampMode", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("getMessageWaitingIndicator", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("getMicrophoneGain", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("getMicrophoneMute", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("getRingerStatus", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("getSpeakerMute", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("getSpeakerVolume", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("setButtonInformation", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("setDisplay", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("setHookSwitchStatus", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("setLampMode", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("setMessageWaitingIndicator", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("setMicrophoneGain", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("setMicrophoneMute", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("setRingerStatus", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("setSpeakerMute", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("setSpeakerVolume", true, $.hasTag(_TagClass.context, 22))
];

/**
 * @summary The Trailing Root Component Types of PhysDevServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PhysDevServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PhysDevServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PhysDevServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PhysDevServList: $.ASN1Decoder<PhysDevServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PhysDevServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PhysDevServList (el: _Element): PhysDevServList {
    if (!_cached_decoder_for_PhysDevServList) { _cached_decoder_for_PhysDevServList = function (el: _Element): PhysDevServList {
    let buttonPress: OPTIONAL<ButtonPress>;
    let getAuditoryApparatusInfo: OPTIONAL<GetAuditoryApparatusInfo>;
    let getButtonInformation: OPTIONAL<GetButtonInformation>;
    let getDisplay: OPTIONAL<GetDisplay>;
    let getHookSwitchStatus: OPTIONAL<GetHookSwitchStatus>;
    let getLampInfo: OPTIONAL<GetLampInfo>;
    let getLampMode: OPTIONAL<GetLampMode>;
    let getMessageWaitingIndicator: OPTIONAL<GetMessageWaitingIndicator>;
    let getMicrophoneGain: OPTIONAL<GetMicrophoneGain>;
    let getMicrophoneMute: OPTIONAL<GetMicrophoneMute>;
    let getRingerStatus: OPTIONAL<GetRingerStatus>;
    let getSpeakerMute: OPTIONAL<GetSpeakerMute>;
    let getSpeakerVolume: OPTIONAL<GetSpeakerVolume>;
    let setButtonInformation: OPTIONAL<SetButtonInformation>;
    let setDisplay: OPTIONAL<SetDisplay>;
    let setHookSwitchStatus: OPTIONAL<SetHookSwitchStatus>;
    let setLampMode: OPTIONAL<SetLampMode>;
    let setMessageWaitingIndicator: OPTIONAL<SetMessageWaitingIndicator>;
    let setMicrophoneGain: OPTIONAL<SetMicrophoneGain>;
    let setMicrophoneMute: OPTIONAL<SetMicrophoneMute>;
    let setRingerStatus: OPTIONAL<SetRingerStatus>;
    let setSpeakerMute: OPTIONAL<SetSpeakerMute>;
    let setSpeakerVolume: OPTIONAL<SetSpeakerVolume>;
    const callbacks: $.DecodingMap = {
        "buttonPress": (_el: _Element): void => { buttonPress = $._decode_implicit<ButtonPress>(() => _decode_ButtonPress)(_el); },
        "getAuditoryApparatusInfo": (_el: _Element): void => { getAuditoryApparatusInfo = $._decode_implicit<GetAuditoryApparatusInfo>(() => _decode_GetAuditoryApparatusInfo)(_el); },
        "getButtonInformation": (_el: _Element): void => { getButtonInformation = $._decode_implicit<GetButtonInformation>(() => _decode_GetButtonInformation)(_el); },
        "getDisplay": (_el: _Element): void => { getDisplay = $._decode_implicit<GetDisplay>(() => _decode_GetDisplay)(_el); },
        "getHookSwitchStatus": (_el: _Element): void => { getHookSwitchStatus = $._decode_implicit<GetHookSwitchStatus>(() => _decode_GetHookSwitchStatus)(_el); },
        "getLampInfo": (_el: _Element): void => { getLampInfo = $._decode_implicit<GetLampInfo>(() => _decode_GetLampInfo)(_el); },
        "getLampMode": (_el: _Element): void => { getLampMode = $._decode_implicit<GetLampMode>(() => _decode_GetLampMode)(_el); },
        "getMessageWaitingIndicator": (_el: _Element): void => { getMessageWaitingIndicator = $._decode_implicit<GetMessageWaitingIndicator>(() => _decode_GetMessageWaitingIndicator)(_el); },
        "getMicrophoneGain": (_el: _Element): void => { getMicrophoneGain = $._decode_implicit<GetMicrophoneGain>(() => _decode_GetMicrophoneGain)(_el); },
        "getMicrophoneMute": (_el: _Element): void => { getMicrophoneMute = $._decode_implicit<GetMicrophoneMute>(() => _decode_GetMicrophoneMute)(_el); },
        "getRingerStatus": (_el: _Element): void => { getRingerStatus = $._decode_implicit<GetRingerStatus>(() => _decode_GetRingerStatus)(_el); },
        "getSpeakerMute": (_el: _Element): void => { getSpeakerMute = $._decode_implicit<GetSpeakerMute>(() => _decode_GetSpeakerMute)(_el); },
        "getSpeakerVolume": (_el: _Element): void => { getSpeakerVolume = $._decode_implicit<GetSpeakerVolume>(() => _decode_GetSpeakerVolume)(_el); },
        "setButtonInformation": (_el: _Element): void => { setButtonInformation = $._decode_implicit<SetButtonInformation>(() => _decode_SetButtonInformation)(_el); },
        "setDisplay": (_el: _Element): void => { setDisplay = $._decode_implicit<SetDisplay>(() => _decode_SetDisplay)(_el); },
        "setHookSwitchStatus": (_el: _Element): void => { setHookSwitchStatus = $._decode_implicit<SetHookSwitchStatus>(() => _decode_SetHookSwitchStatus)(_el); },
        "setLampMode": (_el: _Element): void => { setLampMode = $._decode_implicit<SetLampMode>(() => _decode_SetLampMode)(_el); },
        "setMessageWaitingIndicator": (_el: _Element): void => { setMessageWaitingIndicator = $._decode_implicit<SetMessageWaitingIndicator>(() => _decode_SetMessageWaitingIndicator)(_el); },
        "setMicrophoneGain": (_el: _Element): void => { setMicrophoneGain = $._decode_implicit<SetMicrophoneGain>(() => _decode_SetMicrophoneGain)(_el); },
        "setMicrophoneMute": (_el: _Element): void => { setMicrophoneMute = $._decode_implicit<SetMicrophoneMute>(() => _decode_SetMicrophoneMute)(_el); },
        "setRingerStatus": (_el: _Element): void => { setRingerStatus = $._decode_implicit<SetRingerStatus>(() => _decode_SetRingerStatus)(_el); },
        "setSpeakerMute": (_el: _Element): void => { setSpeakerMute = $._decode_implicit<SetSpeakerMute>(() => _decode_SetSpeakerMute)(_el); },
        "setSpeakerVolume": (_el: _Element): void => { setSpeakerVolume = $._decode_implicit<SetSpeakerVolume>(() => _decode_SetSpeakerVolume)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PhysDevServList,
        _extension_additions_list_spec_for_PhysDevServList,
        _root_component_type_list_2_spec_for_PhysDevServList,
        undefined,
    );
    return new PhysDevServList(
        buttonPress,
        getAuditoryApparatusInfo,
        getButtonInformation,
        getDisplay,
        getHookSwitchStatus,
        getLampInfo,
        getLampMode,
        getMessageWaitingIndicator,
        getMicrophoneGain,
        getMicrophoneMute,
        getRingerStatus,
        getSpeakerMute,
        getSpeakerVolume,
        setButtonInformation,
        setDisplay,
        setHookSwitchStatus,
        setLampMode,
        setMessageWaitingIndicator,
        setMicrophoneGain,
        setMicrophoneMute,
        setRingerStatus,
        setSpeakerMute,
        setSpeakerVolume
    );
}; }
    return _cached_decoder_for_PhysDevServList(el);
}

let _cached_encoder_for_PhysDevServList: $.ASN1Encoder<PhysDevServList> | null = null;

/**
 * @summary Encodes a(n) PhysDevServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysDevServList, encoded as an ASN.1 Element.
 */
export
function _encode_PhysDevServList (value: PhysDevServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PhysDevServList) { _cached_encoder_for_PhysDevServList = function (value: PhysDevServList, elGetter: $.ASN1Encoder<PhysDevServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.buttonPress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ButtonPress, $.BER)(value.buttonPress, $.BER)),
            /* IF_ABSENT  */ ((value.getAuditoryApparatusInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_GetAuditoryApparatusInfo, $.BER)(value.getAuditoryApparatusInfo, $.BER)),
            /* IF_ABSENT  */ ((value.getButtonInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_GetButtonInformation, $.BER)(value.getButtonInformation, $.BER)),
            /* IF_ABSENT  */ ((value.getDisplay === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_GetDisplay, $.BER)(value.getDisplay, $.BER)),
            /* IF_ABSENT  */ ((value.getHookSwitchStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_GetHookSwitchStatus, $.BER)(value.getHookSwitchStatus, $.BER)),
            /* IF_ABSENT  */ ((value.getLampInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_GetLampInfo, $.BER)(value.getLampInfo, $.BER)),
            /* IF_ABSENT  */ ((value.getLampMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_GetLampMode, $.BER)(value.getLampMode, $.BER)),
            /* IF_ABSENT  */ ((value.getMessageWaitingIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_GetMessageWaitingIndicator, $.BER)(value.getMessageWaitingIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.getMicrophoneGain === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_GetMicrophoneGain, $.BER)(value.getMicrophoneGain, $.BER)),
            /* IF_ABSENT  */ ((value.getMicrophoneMute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_GetMicrophoneMute, $.BER)(value.getMicrophoneMute, $.BER)),
            /* IF_ABSENT  */ ((value.getRingerStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_GetRingerStatus, $.BER)(value.getRingerStatus, $.BER)),
            /* IF_ABSENT  */ ((value.getSpeakerMute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_GetSpeakerMute, $.BER)(value.getSpeakerMute, $.BER)),
            /* IF_ABSENT  */ ((value.getSpeakerVolume === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_GetSpeakerVolume, $.BER)(value.getSpeakerVolume, $.BER)),
            /* IF_ABSENT  */ ((value.setButtonInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_SetButtonInformation, $.BER)(value.setButtonInformation, $.BER)),
            /* IF_ABSENT  */ ((value.setDisplay === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_SetDisplay, $.BER)(value.setDisplay, $.BER)),
            /* IF_ABSENT  */ ((value.setHookSwitchStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_SetHookSwitchStatus, $.BER)(value.setHookSwitchStatus, $.BER)),
            /* IF_ABSENT  */ ((value.setLampMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_SetLampMode, $.BER)(value.setLampMode, $.BER)),
            /* IF_ABSENT  */ ((value.setMessageWaitingIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_SetMessageWaitingIndicator, $.BER)(value.setMessageWaitingIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.setMicrophoneGain === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_SetMicrophoneGain, $.BER)(value.setMicrophoneGain, $.BER)),
            /* IF_ABSENT  */ ((value.setMicrophoneMute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_SetMicrophoneMute, $.BER)(value.setMicrophoneMute, $.BER)),
            /* IF_ABSENT  */ ((value.setRingerStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_SetRingerStatus, $.BER)(value.setRingerStatus, $.BER)),
            /* IF_ABSENT  */ ((value.setSpeakerMute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_SetSpeakerMute, $.BER)(value.setSpeakerMute, $.BER)),
            /* IF_ABSENT  */ ((value.setSpeakerVolume === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_SetSpeakerVolume, $.BER)(value.setSpeakerVolume, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PhysDevServList(value, elGetter);
}


/* eslint-enable */
