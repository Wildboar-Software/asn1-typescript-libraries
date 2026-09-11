/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { IoRegister, _decode_IoRegister, _encode_IoRegister } from "../CSTA-capability-exchange/IoRegister.ta.mjs";

import { IoRegisterAbort, _decode_IoRegisterAbort, _encode_IoRegisterAbort } from "../CSTA-capability-exchange/IoRegisterAbort.ta.mjs";

import { IoRegisterCancel, _decode_IoRegisterCancel, _encode_IoRegisterCancel } from "../CSTA-capability-exchange/IoRegisterCancel.ta.mjs";

import { DataPathResumed, _decode_DataPathResumed, _encode_DataPathResumed } from "../CSTA-capability-exchange/DataPathResumed.ta.mjs";

import { DataPathSuspended, _decode_DataPathSuspended, _encode_DataPathSuspended } from "../CSTA-capability-exchange/DataPathSuspended.ta.mjs";

import { FastData, _decode_FastData, _encode_FastData } from "../CSTA-capability-exchange/FastData.ta.mjs";

import { ResumeDataPath, _decode_ResumeDataPath, _encode_ResumeDataPath } from "../CSTA-capability-exchange/ResumeDataPath.ta.mjs";

import { SendBroadcastData, _decode_SendBroadcastData, _encode_SendBroadcastData } from "../CSTA-capability-exchange/SendBroadcastData.ta.mjs";

import { SendData, _decode_SendData, _encode_SendData } from "../CSTA-capability-exchange/SendData.ta.mjs";

import { SendMulticastData, _decode_SendMulticastData, _encode_SendMulticastData } from "../CSTA-capability-exchange/SendMulticastData.ta.mjs";

import { StartDataPath, _decode_StartDataPath, _encode_StartDataPath } from "../CSTA-capability-exchange/StartDataPath.ta.mjs";

import { StopDataPath, _decode_StopDataPath, _encode_StopDataPath } from "../CSTA-capability-exchange/StopDataPath.ta.mjs";

import { SuspendDataPath, _decode_SuspendDataPath, _encode_SuspendDataPath } from "../CSTA-capability-exchange/SuspendDataPath.ta.mjs";



/**
 * @summary IOServicesServList
 * @description
 * I/O services the SF supports (ECMA-269 Annex C.17, ECMA-285 §9.10). Omit
 * unsupported services.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IOServicesServList ::= SEQUENCE
 * {     ioRegister             [ 0] IMPLICIT     IoRegister         OPTIONAL,
 *     ioRegisterAbort         [ 1] IMPLICIT     IoRegisterAbort     OPTIONAL,
 *     ioRegisterCancel         [ 2] IMPLICIT     IoRegisterCancel     OPTIONAL,
 *     dataPathResumed         [ 3] IMPLICIT     DataPathResumed     OPTIONAL,
 *     dataPathSuspended         [ 4] IMPLICIT     DataPathSuspended     OPTIONAL,
 *     fastData             [ 5] IMPLICIT     FastData         OPTIONAL,
 *     resumeDataPath             [ 6] IMPLICIT     ResumeDataPath         OPTIONAL,
 *     sendBroadcastData         [ 7] IMPLICIT     SendBroadcastData     OPTIONAL,
 *     sendData             [ 8] IMPLICIT     SendData         OPTIONAL,
 *     sendMulticastData         [ 9] IMPLICIT     SendMulticastData     OPTIONAL,
 *     startDataPath             [10] IMPLICIT     StartDataPath         OPTIONAL,
 *     stopDataPath             [11] IMPLICIT     StopDataPath         OPTIONAL,
 *     suspendDataPath         [12] IMPLICIT     SuspendDataPath     OPTIONAL }
 * ```
 * 
 * @class
 */
export
class IOServicesServList {
    constructor (
        /**
         * @summary `ioRegister`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly ioRegister: OPTIONAL<IoRegister>,
        /**
         * @summary `ioRegisterAbort`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly ioRegisterAbort: OPTIONAL<IoRegisterAbort>,
        /**
         * @summary `ioRegisterCancel`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly ioRegisterCancel: OPTIONAL<IoRegisterCancel>,
        /**
         * @summary `dataPathResumed`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly dataPathResumed: OPTIONAL<DataPathResumed>,
        /**
         * @summary `dataPathSuspended`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly dataPathSuspended: OPTIONAL<DataPathSuspended>,
        /**
         * @summary `fastData`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly fastData: OPTIONAL<FastData>,
        /**
         * @summary `resumeDataPath`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly resumeDataPath: OPTIONAL<ResumeDataPath>,
        /**
         * @summary `sendBroadcastData`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly sendBroadcastData: OPTIONAL<SendBroadcastData>,
        /**
         * @summary `sendData`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly sendData: OPTIONAL<SendData>,
        /**
         * @summary `sendMulticastData`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly sendMulticastData: OPTIONAL<SendMulticastData>,
        /**
         * @summary `startDataPath`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly startDataPath: OPTIONAL<StartDataPath>,
        /**
         * @summary `stopDataPath`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly stopDataPath: OPTIONAL<StopDataPath>,
        /**
         * @summary `suspendDataPath`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly suspendDataPath: OPTIONAL<SuspendDataPath>
    ) {}

    /**
     * @summary Restructures an object into a IOServicesServList
     * @description
     * 
     * This takes an `object` and converts it to a `IOServicesServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IOServicesServList`.
     * @returns {IOServicesServList}
     */
    public static _from_object (_o: { [_K in keyof (IOServicesServList)]: (IOServicesServList)[_K] }): IOServicesServList {
        return new IOServicesServList(_o.ioRegister, _o.ioRegisterAbort, _o.ioRegisterCancel, _o.dataPathResumed, _o.dataPathSuspended, _o.fastData, _o.resumeDataPath, _o.sendBroadcastData, _o.sendData, _o.sendMulticastData, _o.startDataPath, _o.stopDataPath, _o.suspendDataPath);
    }


}

/**
 * @summary The Leading Root Component Types of IOServicesServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IOServicesServList: $.ComponentSpec[] = [
    new $.ComponentSpec("ioRegister", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("ioRegisterAbort", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ioRegisterCancel", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dataPathResumed", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("dataPathSuspended", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("fastData", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("resumeDataPath", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sendBroadcastData", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sendData", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("sendMulticastData", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("startDataPath", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("stopDataPath", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("suspendDataPath", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of IOServicesServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IOServicesServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IOServicesServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IOServicesServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IOServicesServList: $.ASN1Decoder<IOServicesServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IOServicesServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IOServicesServList (el: _Element): IOServicesServList {
    if (!_cached_decoder_for_IOServicesServList) { _cached_decoder_for_IOServicesServList = function (el: _Element): IOServicesServList {
    let ioRegister: OPTIONAL<IoRegister>;
    let ioRegisterAbort: OPTIONAL<IoRegisterAbort>;
    let ioRegisterCancel: OPTIONAL<IoRegisterCancel>;
    let dataPathResumed: OPTIONAL<DataPathResumed>;
    let dataPathSuspended: OPTIONAL<DataPathSuspended>;
    let fastData: OPTIONAL<FastData>;
    let resumeDataPath: OPTIONAL<ResumeDataPath>;
    let sendBroadcastData: OPTIONAL<SendBroadcastData>;
    let sendData: OPTIONAL<SendData>;
    let sendMulticastData: OPTIONAL<SendMulticastData>;
    let startDataPath: OPTIONAL<StartDataPath>;
    let stopDataPath: OPTIONAL<StopDataPath>;
    let suspendDataPath: OPTIONAL<SuspendDataPath>;
    const callbacks: $.DecodingMap = {
        "ioRegister": (_el: _Element): void => { ioRegister = $._decode_implicit<IoRegister>(() => _decode_IoRegister)(_el); },
        "ioRegisterAbort": (_el: _Element): void => { ioRegisterAbort = $._decode_implicit<IoRegisterAbort>(() => _decode_IoRegisterAbort)(_el); },
        "ioRegisterCancel": (_el: _Element): void => { ioRegisterCancel = $._decode_implicit<IoRegisterCancel>(() => _decode_IoRegisterCancel)(_el); },
        "dataPathResumed": (_el: _Element): void => { dataPathResumed = $._decode_implicit<DataPathResumed>(() => _decode_DataPathResumed)(_el); },
        "dataPathSuspended": (_el: _Element): void => { dataPathSuspended = $._decode_implicit<DataPathSuspended>(() => _decode_DataPathSuspended)(_el); },
        "fastData": (_el: _Element): void => { fastData = $._decode_implicit<FastData>(() => _decode_FastData)(_el); },
        "resumeDataPath": (_el: _Element): void => { resumeDataPath = $._decode_implicit<ResumeDataPath>(() => _decode_ResumeDataPath)(_el); },
        "sendBroadcastData": (_el: _Element): void => { sendBroadcastData = $._decode_implicit<SendBroadcastData>(() => _decode_SendBroadcastData)(_el); },
        "sendData": (_el: _Element): void => { sendData = $._decode_implicit<SendData>(() => _decode_SendData)(_el); },
        "sendMulticastData": (_el: _Element): void => { sendMulticastData = $._decode_implicit<SendMulticastData>(() => _decode_SendMulticastData)(_el); },
        "startDataPath": (_el: _Element): void => { startDataPath = $._decode_implicit<StartDataPath>(() => _decode_StartDataPath)(_el); },
        "stopDataPath": (_el: _Element): void => { stopDataPath = $._decode_implicit<StopDataPath>(() => _decode_StopDataPath)(_el); },
        "suspendDataPath": (_el: _Element): void => { suspendDataPath = $._decode_implicit<SuspendDataPath>(() => _decode_SuspendDataPath)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IOServicesServList,
        _extension_additions_list_spec_for_IOServicesServList,
        _root_component_type_list_2_spec_for_IOServicesServList,
        undefined,
    );
    return new IOServicesServList(
        ioRegister,
        ioRegisterAbort,
        ioRegisterCancel,
        dataPathResumed,
        dataPathSuspended,
        fastData,
        resumeDataPath,
        sendBroadcastData,
        sendData,
        sendMulticastData,
        startDataPath,
        stopDataPath,
        suspendDataPath
    );
}; }
    return _cached_decoder_for_IOServicesServList(el);
}

let _cached_encoder_for_IOServicesServList: $.ASN1Encoder<IOServicesServList> | null = null;

/**
 * @summary Encodes a(n) IOServicesServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IOServicesServList, encoded as an ASN.1 Element.
 */
export
function _encode_IOServicesServList (value: IOServicesServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IOServicesServList) { _cached_encoder_for_IOServicesServList = function (value: IOServicesServList, elGetter: $.ASN1Encoder<IOServicesServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ioRegister === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_IoRegister, $.BER)(value.ioRegister, $.BER)),
            /* IF_ABSENT  */ ((value.ioRegisterAbort === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IoRegisterAbort, $.BER)(value.ioRegisterAbort, $.BER)),
            /* IF_ABSENT  */ ((value.ioRegisterCancel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_IoRegisterCancel, $.BER)(value.ioRegisterCancel, $.BER)),
            /* IF_ABSENT  */ ((value.dataPathResumed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_DataPathResumed, $.BER)(value.dataPathResumed, $.BER)),
            /* IF_ABSENT  */ ((value.dataPathSuspended === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_DataPathSuspended, $.BER)(value.dataPathSuspended, $.BER)),
            /* IF_ABSENT  */ ((value.fastData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_FastData, $.BER)(value.fastData, $.BER)),
            /* IF_ABSENT  */ ((value.resumeDataPath === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ResumeDataPath, $.BER)(value.resumeDataPath, $.BER)),
            /* IF_ABSENT  */ ((value.sendBroadcastData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_SendBroadcastData, $.BER)(value.sendBroadcastData, $.BER)),
            /* IF_ABSENT  */ ((value.sendData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_SendData, $.BER)(value.sendData, $.BER)),
            /* IF_ABSENT  */ ((value.sendMulticastData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_SendMulticastData, $.BER)(value.sendMulticastData, $.BER)),
            /* IF_ABSENT  */ ((value.startDataPath === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_StartDataPath, $.BER)(value.startDataPath, $.BER)),
            /* IF_ABSENT  */ ((value.stopDataPath === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_StopDataPath, $.BER)(value.stopDataPath, $.BER)),
            /* IF_ABSENT  */ ((value.suspendDataPath === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_SuspendDataPath, $.BER)(value.suspendDataPath, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IOServicesServList(value, elGetter);
}


/* eslint-enable */
