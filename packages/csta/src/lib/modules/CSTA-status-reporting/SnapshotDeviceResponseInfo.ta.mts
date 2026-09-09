/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";

import { CallState, _decode_CallState, _encode_CallState } from "../CSTA-status-reporting/CallState.ta.mjs";

import { ServicesPermitted, _decode_ServicesPermitted, _encode_ServicesPermitted } from "../CSTA-call-control/ServicesPermitted.ta.mjs";

import { DeviceMediaInfoList, _decode_DeviceMediaInfoList, _encode_DeviceMediaInfoList } from "../CSTA-status-reporting/DeviceMediaInfoList.ta.mjs";

import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";

import { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";



/**
 * @summary SnapshotDeviceResponseInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SnapshotDeviceResponseInfo ::= SEQUENCE
 * {    connectionIdentifier        ConnectionID,
 *     endpointDevice            [3] IMPLICIT SubjectDeviceID         OPTIONAL,
 *     localCallState            CallState,
 *     servicesPermitted         [0] IMPLICIT ServicesPermitted         OPTIONAL,
 *     mediaServiceInfoList         [1] IMPLICIT DeviceMediaInfoList     OPTIONAL,
 *     mediaCallCharacteristics    [2] IMPLICIT MediaCallCharacteristics     OPTIONAL,
 *     callLinkageData         [4] IMPLICIT CallLinkageData         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SnapshotDeviceResponseInfo {
    constructor (
        /**
         * @summary `connectionIdentifier`.
         * @public
         * @readonly
         */
        readonly connectionIdentifier: ConnectionID,
        /**
         * @summary `endpointDevice`.
         * @public
         * @readonly
         */
        readonly endpointDevice: OPTIONAL<SubjectDeviceID>,
        /**
         * @summary `localCallState`.
         * @public
         * @readonly
         */
        readonly localCallState: CallState,
        /**
         * @summary `servicesPermitted`.
         * @public
         * @readonly
         */
        readonly servicesPermitted: OPTIONAL<ServicesPermitted>,
        /**
         * @summary `mediaServiceInfoList`.
         * @public
         * @readonly
         */
        readonly mediaServiceInfoList: OPTIONAL<DeviceMediaInfoList>,
        /**
         * @summary `mediaCallCharacteristics`.
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
        /**
         * @summary `callLinkageData`.
         * @public
         * @readonly
         */
        readonly callLinkageData: OPTIONAL<CallLinkageData>
    ) {}

    /**
     * @summary Restructures an object into a SnapshotDeviceResponseInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SnapshotDeviceResponseInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SnapshotDeviceResponseInfo`.
     * @returns {SnapshotDeviceResponseInfo}
     */
    public static _from_object (_o: { [_K in keyof (SnapshotDeviceResponseInfo)]: (SnapshotDeviceResponseInfo)[_K] }): SnapshotDeviceResponseInfo {
        return new SnapshotDeviceResponseInfo(_o.connectionIdentifier, _o.endpointDevice, _o.localCallState, _o.servicesPermitted, _o.mediaServiceInfoList, _o.mediaCallCharacteristics, _o.callLinkageData);
    }


}

/**
 * @summary The Leading Root Component Types of SnapshotDeviceResponseInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SnapshotDeviceResponseInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("connectionIdentifier", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("endpointDevice", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("localCallState", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servicesPermitted", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mediaServiceInfoList", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callLinkageData", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of SnapshotDeviceResponseInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SnapshotDeviceResponseInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SnapshotDeviceResponseInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SnapshotDeviceResponseInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SnapshotDeviceResponseInfo: $.ASN1Decoder<SnapshotDeviceResponseInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SnapshotDeviceResponseInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SnapshotDeviceResponseInfo (el: _Element): SnapshotDeviceResponseInfo {
    if (!_cached_decoder_for_SnapshotDeviceResponseInfo) { _cached_decoder_for_SnapshotDeviceResponseInfo = function (el: _Element): SnapshotDeviceResponseInfo {
    let connectionIdentifier!: ConnectionID;
    let endpointDevice: OPTIONAL<SubjectDeviceID>;
    let localCallState!: CallState;
    let servicesPermitted: OPTIONAL<ServicesPermitted>;
    let mediaServiceInfoList: OPTIONAL<DeviceMediaInfoList>;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let callLinkageData: OPTIONAL<CallLinkageData>;
    const callbacks: $.DecodingMap = {
        "connectionIdentifier": (_el: _Element): void => { connectionIdentifier = _decode_ConnectionID(_el); },
        "endpointDevice": (_el: _Element): void => { endpointDevice = $._decode_implicit<SubjectDeviceID>(() => _decode_SubjectDeviceID)(_el); },
        "localCallState": (_el: _Element): void => { localCallState = _decode_CallState(_el); },
        "servicesPermitted": (_el: _Element): void => { servicesPermitted = $._decode_implicit<ServicesPermitted>(() => _decode_ServicesPermitted)(_el); },
        "mediaServiceInfoList": (_el: _Element): void => { mediaServiceInfoList = $._decode_implicit<DeviceMediaInfoList>(() => _decode_DeviceMediaInfoList)(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "callLinkageData": (_el: _Element): void => { callLinkageData = $._decode_implicit<CallLinkageData>(() => _decode_CallLinkageData)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SnapshotDeviceResponseInfo,
        _extension_additions_list_spec_for_SnapshotDeviceResponseInfo,
        _root_component_type_list_2_spec_for_SnapshotDeviceResponseInfo,
        undefined,
    );
    return new SnapshotDeviceResponseInfo(
        connectionIdentifier,
        endpointDevice,
        localCallState,
        servicesPermitted,
        mediaServiceInfoList,
        mediaCallCharacteristics,
        callLinkageData
    );
}; }
    return _cached_decoder_for_SnapshotDeviceResponseInfo(el);
}

let _cached_encoder_for_SnapshotDeviceResponseInfo: $.ASN1Encoder<SnapshotDeviceResponseInfo> | null = null;

/**
 * @summary Encodes a(n) SnapshotDeviceResponseInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SnapshotDeviceResponseInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SnapshotDeviceResponseInfo (value: SnapshotDeviceResponseInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SnapshotDeviceResponseInfo) { _cached_encoder_for_SnapshotDeviceResponseInfo = function (value: SnapshotDeviceResponseInfo, elGetter: $.ASN1Encoder<SnapshotDeviceResponseInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connectionIdentifier, $.BER),
            /* IF_ABSENT  */ ((value.endpointDevice === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SubjectDeviceID, $.BER)(value.endpointDevice, $.BER)),
            /* REQUIRED   */ _encode_CallState(value.localCallState, $.BER),
            /* IF_ABSENT  */ ((value.servicesPermitted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ServicesPermitted, $.BER)(value.servicesPermitted, $.BER)),
            /* IF_ABSENT  */ ((value.mediaServiceInfoList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DeviceMediaInfoList, $.BER)(value.mediaServiceInfoList, $.BER)),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CallLinkageData, $.BER)(value.callLinkageData, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SnapshotDeviceResponseInfo(value, elGetter);
}


/* eslint-enable */
