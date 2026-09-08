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
import { IoRegister, IoRegister_ioDevice /* IMPORTED_LONG_NAMED_BIT */, ioDevice /* IMPORTED_SHORT_NAMED_BIT */, IoRegister_privateData /* IMPORTED_LONG_NAMED_BIT */, IoRegister_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, IoRegister_allIODevices /* IMPORTED_LONG_NAMED_BIT */, allIODevices /* IMPORTED_SHORT_NAMED_BIT */, _decode_IoRegister, _encode_IoRegister } from "../CSTA-capability-exchange/IoRegister.ta.mjs";
// export { IoRegister, IoRegister_ioDevice /* IMPORTED_LONG_NAMED_BIT */, ioDevice /* IMPORTED_SHORT_NAMED_BIT */, IoRegister_privateData /* IMPORTED_LONG_NAMED_BIT */, IoRegister_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, IoRegister_allIODevices /* IMPORTED_LONG_NAMED_BIT */, allIODevices /* IMPORTED_SHORT_NAMED_BIT */, _decode_IoRegister, _encode_IoRegister } from "../CSTA-capability-exchange/IoRegister.ta.mjs";
import { IoRegisterAbort, IoRegisterAbort_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_IoRegisterAbort, _encode_IoRegisterAbort } from "../CSTA-capability-exchange/IoRegisterAbort.ta.mjs";
// export { IoRegisterAbort, IoRegisterAbort_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_IoRegisterAbort, _encode_IoRegisterAbort } from "../CSTA-capability-exchange/IoRegisterAbort.ta.mjs";
import { IoRegisterCancel, IoRegisterCancel_privateData /* IMPORTED_LONG_NAMED_BIT */, IoRegisterCancel_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_IoRegisterCancel, _encode_IoRegisterCancel } from "../CSTA-capability-exchange/IoRegisterCancel.ta.mjs";
// export { IoRegisterCancel, IoRegisterCancel_privateData /* IMPORTED_LONG_NAMED_BIT */, IoRegisterCancel_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_IoRegisterCancel, _encode_IoRegisterCancel } from "../CSTA-capability-exchange/IoRegisterCancel.ta.mjs";
import { DataPathResumed, DataPathResumed_privateData /* IMPORTED_LONG_NAMED_BIT */, DataPathResumed_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_DataPathResumed, _encode_DataPathResumed } from "../CSTA-capability-exchange/DataPathResumed.ta.mjs";
// export { DataPathResumed, DataPathResumed_privateData /* IMPORTED_LONG_NAMED_BIT */, DataPathResumed_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_DataPathResumed, _encode_DataPathResumed } from "../CSTA-capability-exchange/DataPathResumed.ta.mjs";
import { DataPathSuspended, DataPathSuspended_privateData /* IMPORTED_LONG_NAMED_BIT */, DataPathSuspended_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_DataPathSuspended, _encode_DataPathSuspended } from "../CSTA-capability-exchange/DataPathSuspended.ta.mjs";
// export { DataPathSuspended, DataPathSuspended_privateData /* IMPORTED_LONG_NAMED_BIT */, DataPathSuspended_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_DataPathSuspended, _encode_DataPathSuspended } from "../CSTA-capability-exchange/DataPathSuspended.ta.mjs";
import { FastData, FastData_objectDevice /* IMPORTED_LONG_NAMED_BIT */, FastData_objectCall /* IMPORTED_LONG_NAMED_BIT */, FastData_dataPathTypeText /* IMPORTED_LONG_NAMED_BIT */, FastData_dataPathTypeVoice /* IMPORTED_LONG_NAMED_BIT */, FastData_displayAttribPhyBaseRowNumber /* IMPORTED_LONG_NAMED_BIT */, FastData_displayAttribPhyBaseColumnNumber /* IMPORTED_LONG_NAMED_BIT */, FastData_displayAttribOffset /* IMPORTED_LONG_NAMED_BIT */, FastData_privateData /* IMPORTED_LONG_NAMED_BIT */, FastData_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, FastData_supportsModifyingPosition /* IMPORTED_LONG_NAMED_BIT */, _decode_FastData, _encode_FastData } from "../CSTA-capability-exchange/FastData.ta.mjs";
// export { FastData, FastData_objectDevice /* IMPORTED_LONG_NAMED_BIT */, FastData_objectCall /* IMPORTED_LONG_NAMED_BIT */, FastData_dataPathTypeText /* IMPORTED_LONG_NAMED_BIT */, FastData_dataPathTypeVoice /* IMPORTED_LONG_NAMED_BIT */, FastData_displayAttribPhyBaseRowNumber /* IMPORTED_LONG_NAMED_BIT */, FastData_displayAttribPhyBaseColumnNumber /* IMPORTED_LONG_NAMED_BIT */, FastData_displayAttribOffset /* IMPORTED_LONG_NAMED_BIT */, FastData_privateData /* IMPORTED_LONG_NAMED_BIT */, FastData_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, FastData_supportsModifyingPosition /* IMPORTED_LONG_NAMED_BIT */, _decode_FastData, _encode_FastData } from "../CSTA-capability-exchange/FastData.ta.mjs";
import { ResumeDataPath, ResumeDataPath_privateData /* IMPORTED_LONG_NAMED_BIT */, ResumeDataPath_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, ResumeDataPath_sendsDataPathResumed /* IMPORTED_LONG_NAMED_BIT */, sendsDataPathResumed /* IMPORTED_SHORT_NAMED_BIT */, _decode_ResumeDataPath, _encode_ResumeDataPath } from "../CSTA-capability-exchange/ResumeDataPath.ta.mjs";
// export { ResumeDataPath, ResumeDataPath_privateData /* IMPORTED_LONG_NAMED_BIT */, ResumeDataPath_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, ResumeDataPath_sendsDataPathResumed /* IMPORTED_LONG_NAMED_BIT */, sendsDataPathResumed /* IMPORTED_SHORT_NAMED_BIT */, _decode_ResumeDataPath, _encode_ResumeDataPath } from "../CSTA-capability-exchange/ResumeDataPath.ta.mjs";
import { SendBroadcastData, SendBroadcastData_privateData /* IMPORTED_LONG_NAMED_BIT */, SendBroadcastData_dataPathTypeText /* IMPORTED_LONG_NAMED_BIT */, SendBroadcastData_dataPathTypeVoice /* IMPORTED_LONG_NAMED_BIT */, SendBroadcastData_displayAttribPhyBaseRowNumber /* IMPORTED_LONG_NAMED_BIT */, SendBroadcastData_displayAttribPhyBaseColumnNumber /* IMPORTED_LONG_NAMED_BIT */, SendBroadcastData_displayAttribOffset /* IMPORTED_LONG_NAMED_BIT */, SendBroadcastData_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SendBroadcastData_supportsModifyingPosition /* IMPORTED_LONG_NAMED_BIT */, _decode_SendBroadcastData, _encode_SendBroadcastData } from "../CSTA-capability-exchange/SendBroadcastData.ta.mjs";
// export { SendBroadcastData, SendBroadcastData_privateData /* IMPORTED_LONG_NAMED_BIT */, SendBroadcastData_dataPathTypeText /* IMPORTED_LONG_NAMED_BIT */, SendBroadcastData_dataPathTypeVoice /* IMPORTED_LONG_NAMED_BIT */, SendBroadcastData_displayAttribPhyBaseRowNumber /* IMPORTED_LONG_NAMED_BIT */, SendBroadcastData_displayAttribPhyBaseColumnNumber /* IMPORTED_LONG_NAMED_BIT */, SendBroadcastData_displayAttribOffset /* IMPORTED_LONG_NAMED_BIT */, SendBroadcastData_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SendBroadcastData_supportsModifyingPosition /* IMPORTED_LONG_NAMED_BIT */, _decode_SendBroadcastData, _encode_SendBroadcastData } from "../CSTA-capability-exchange/SendBroadcastData.ta.mjs";
import { SendData, SendData_displayAttribPhyBaseRowNumber /* IMPORTED_LONG_NAMED_BIT */, SendData_displayAttribPhyBaseColumnNumber /* IMPORTED_LONG_NAMED_BIT */, SendData_displayAttribOffset /* IMPORTED_LONG_NAMED_BIT */, SendData_ioCauseTerminationCharReceived /* IMPORTED_LONG_NAMED_BIT */, ioCauseTerminationCharReceived /* IMPORTED_SHORT_NAMED_BIT */, SendData_ioCauseCharCountReached /* IMPORTED_LONG_NAMED_BIT */, ioCauseCharCountReached /* IMPORTED_SHORT_NAMED_BIT */, SendData_ioCauseTimeout /* IMPORTED_LONG_NAMED_BIT */, ioCauseTimeout /* IMPORTED_SHORT_NAMED_BIT */, SendData_ioCauseSfTerminated /* IMPORTED_LONG_NAMED_BIT */, ioCauseSfTerminated /* IMPORTED_SHORT_NAMED_BIT */, SendData_privateData /* IMPORTED_LONG_NAMED_BIT */, SendData_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SendData_supportsModifyingPosition /* IMPORTED_LONG_NAMED_BIT */, _decode_SendData, _encode_SendData } from "../CSTA-capability-exchange/SendData.ta.mjs";
// export { SendData, SendData_displayAttribPhyBaseRowNumber /* IMPORTED_LONG_NAMED_BIT */, SendData_displayAttribPhyBaseColumnNumber /* IMPORTED_LONG_NAMED_BIT */, SendData_displayAttribOffset /* IMPORTED_LONG_NAMED_BIT */, SendData_ioCauseTerminationCharReceived /* IMPORTED_LONG_NAMED_BIT */, ioCauseTerminationCharReceived /* IMPORTED_SHORT_NAMED_BIT */, SendData_ioCauseCharCountReached /* IMPORTED_LONG_NAMED_BIT */, ioCauseCharCountReached /* IMPORTED_SHORT_NAMED_BIT */, SendData_ioCauseTimeout /* IMPORTED_LONG_NAMED_BIT */, ioCauseTimeout /* IMPORTED_SHORT_NAMED_BIT */, SendData_ioCauseSfTerminated /* IMPORTED_LONG_NAMED_BIT */, ioCauseSfTerminated /* IMPORTED_SHORT_NAMED_BIT */, SendData_privateData /* IMPORTED_LONG_NAMED_BIT */, SendData_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SendData_supportsModifyingPosition /* IMPORTED_LONG_NAMED_BIT */, _decode_SendData, _encode_SendData } from "../CSTA-capability-exchange/SendData.ta.mjs";
import { SendMulticastData, SendMulticastData_ioData /* IMPORTED_LONG_NAMED_BIT */, ioData /* IMPORTED_SHORT_NAMED_BIT */, SendMulticastData_displayAttribPhyBaseRowNumber /* IMPORTED_LONG_NAMED_BIT */, SendMulticastData_displayAttribPhyBaseColumnNumber /* IMPORTED_LONG_NAMED_BIT */, SendMulticastData_displayAttribOffset /* IMPORTED_LONG_NAMED_BIT */, SendMulticastData_privateData /* IMPORTED_LONG_NAMED_BIT */, SendMulticastData_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SendMulticastData_supportsModifyingPosition /* IMPORTED_LONG_NAMED_BIT */, _decode_SendMulticastData, _encode_SendMulticastData } from "../CSTA-capability-exchange/SendMulticastData.ta.mjs";
// export { SendMulticastData, SendMulticastData_ioData /* IMPORTED_LONG_NAMED_BIT */, ioData /* IMPORTED_SHORT_NAMED_BIT */, SendMulticastData_displayAttribPhyBaseRowNumber /* IMPORTED_LONG_NAMED_BIT */, SendMulticastData_displayAttribPhyBaseColumnNumber /* IMPORTED_LONG_NAMED_BIT */, SendMulticastData_displayAttribOffset /* IMPORTED_LONG_NAMED_BIT */, SendMulticastData_privateData /* IMPORTED_LONG_NAMED_BIT */, SendMulticastData_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SendMulticastData_supportsModifyingPosition /* IMPORTED_LONG_NAMED_BIT */, _decode_SendMulticastData, _encode_SendMulticastData } from "../CSTA-capability-exchange/SendMulticastData.ta.mjs";
import { StartDataPath, StartDataPath_objectDevice /* IMPORTED_LONG_NAMED_BIT */, StartDataPath_objectCall /* IMPORTED_LONG_NAMED_BIT */, StartDataPath_dataPathDirectionCfToObject /* IMPORTED_LONG_NAMED_BIT */, dataPathDirectionCfToObject /* IMPORTED_SHORT_NAMED_BIT */, StartDataPath_dataPathDirectionObjectToCf /* IMPORTED_LONG_NAMED_BIT */, dataPathDirectionObjectToCf /* IMPORTED_SHORT_NAMED_BIT */, StartDataPath_dataPathDirectionBidirectional /* IMPORTED_LONG_NAMED_BIT */, dataPathDirectionBidirectional /* IMPORTED_SHORT_NAMED_BIT */, StartDataPath_dataPathTypeText /* IMPORTED_LONG_NAMED_BIT */, StartDataPath_dataPathTypeVoice /* IMPORTED_LONG_NAMED_BIT */, StartDataPath_numberOfCharsToCollect /* IMPORTED_LONG_NAMED_BIT */, numberOfCharsToCollect /* IMPORTED_SHORT_NAMED_BIT */, StartDataPath_terminationChar /* IMPORTED_LONG_NAMED_BIT */, terminationChar /* IMPORTED_SHORT_NAMED_BIT */, StartDataPath_timeout /* IMPORTED_LONG_NAMED_BIT */, timeout /* IMPORTED_SHORT_NAMED_BIT */, StartDataPath_privateData /* IMPORTED_LONG_NAMED_BIT */, StartDataPath_numberOfCharsToCollectInAck /* IMPORTED_LONG_NAMED_BIT */, numberOfCharsToCollectInAck /* IMPORTED_SHORT_NAMED_BIT */, StartDataPath_terminationCharInAck /* IMPORTED_LONG_NAMED_BIT */, terminationCharInAck /* IMPORTED_SHORT_NAMED_BIT */, StartDataPath_timeoutInAck /* IMPORTED_LONG_NAMED_BIT */, timeoutInAck /* IMPORTED_SHORT_NAMED_BIT */, StartDataPath_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_StartDataPath, _encode_StartDataPath } from "../CSTA-capability-exchange/StartDataPath.ta.mjs";
// export { StartDataPath, StartDataPath_objectDevice /* IMPORTED_LONG_NAMED_BIT */, StartDataPath_objectCall /* IMPORTED_LONG_NAMED_BIT */, StartDataPath_dataPathDirectionCfToObject /* IMPORTED_LONG_NAMED_BIT */, dataPathDirectionCfToObject /* IMPORTED_SHORT_NAMED_BIT */, StartDataPath_dataPathDirectionObjectToCf /* IMPORTED_LONG_NAMED_BIT */, dataPathDirectionObjectToCf /* IMPORTED_SHORT_NAMED_BIT */, StartDataPath_dataPathDirectionBidirectional /* IMPORTED_LONG_NAMED_BIT */, dataPathDirectionBidirectional /* IMPORTED_SHORT_NAMED_BIT */, StartDataPath_dataPathTypeText /* IMPORTED_LONG_NAMED_BIT */, StartDataPath_dataPathTypeVoice /* IMPORTED_LONG_NAMED_BIT */, StartDataPath_numberOfCharsToCollect /* IMPORTED_LONG_NAMED_BIT */, numberOfCharsToCollect /* IMPORTED_SHORT_NAMED_BIT */, StartDataPath_terminationChar /* IMPORTED_LONG_NAMED_BIT */, terminationChar /* IMPORTED_SHORT_NAMED_BIT */, StartDataPath_timeout /* IMPORTED_LONG_NAMED_BIT */, timeout /* IMPORTED_SHORT_NAMED_BIT */, StartDataPath_privateData /* IMPORTED_LONG_NAMED_BIT */, StartDataPath_numberOfCharsToCollectInAck /* IMPORTED_LONG_NAMED_BIT */, numberOfCharsToCollectInAck /* IMPORTED_SHORT_NAMED_BIT */, StartDataPath_terminationCharInAck /* IMPORTED_LONG_NAMED_BIT */, terminationCharInAck /* IMPORTED_SHORT_NAMED_BIT */, StartDataPath_timeoutInAck /* IMPORTED_LONG_NAMED_BIT */, timeoutInAck /* IMPORTED_SHORT_NAMED_BIT */, StartDataPath_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_StartDataPath, _encode_StartDataPath } from "../CSTA-capability-exchange/StartDataPath.ta.mjs";
import { StopDataPath, StopDataPath_privateData /* IMPORTED_LONG_NAMED_BIT */, StopDataPath_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_StopDataPath, _encode_StopDataPath } from "../CSTA-capability-exchange/StopDataPath.ta.mjs";
// export { StopDataPath, StopDataPath_privateData /* IMPORTED_LONG_NAMED_BIT */, StopDataPath_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_StopDataPath, _encode_StopDataPath } from "../CSTA-capability-exchange/StopDataPath.ta.mjs";
import { SuspendDataPath, SuspendDataPath_privateData /* IMPORTED_LONG_NAMED_BIT */, SuspendDataPath_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SuspendDataPath, _encode_SuspendDataPath } from "../CSTA-capability-exchange/SuspendDataPath.ta.mjs";
// export { SuspendDataPath, SuspendDataPath_privateData /* IMPORTED_LONG_NAMED_BIT */, SuspendDataPath_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SuspendDataPath, _encode_SuspendDataPath } from "../CSTA-capability-exchange/SuspendDataPath.ta.mjs";


/**
 * @summary IOServicesServList
 * @description
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
         */
        readonly ioRegister: OPTIONAL<IoRegister>,
        /**
         * @summary `ioRegisterAbort`.
         * @public
         * @readonly
         */
        readonly ioRegisterAbort: OPTIONAL<IoRegisterAbort>,
        /**
         * @summary `ioRegisterCancel`.
         * @public
         * @readonly
         */
        readonly ioRegisterCancel: OPTIONAL<IoRegisterCancel>,
        /**
         * @summary `dataPathResumed`.
         * @public
         * @readonly
         */
        readonly dataPathResumed: OPTIONAL<DataPathResumed>,
        /**
         * @summary `dataPathSuspended`.
         * @public
         * @readonly
         */
        readonly dataPathSuspended: OPTIONAL<DataPathSuspended>,
        /**
         * @summary `fastData`.
         * @public
         * @readonly
         */
        readonly fastData: OPTIONAL<FastData>,
        /**
         * @summary `resumeDataPath`.
         * @public
         * @readonly
         */
        readonly resumeDataPath: OPTIONAL<ResumeDataPath>,
        /**
         * @summary `sendBroadcastData`.
         * @public
         * @readonly
         */
        readonly sendBroadcastData: OPTIONAL<SendBroadcastData>,
        /**
         * @summary `sendData`.
         * @public
         * @readonly
         */
        readonly sendData: OPTIONAL<SendData>,
        /**
         * @summary `sendMulticastData`.
         * @public
         * @readonly
         */
        readonly sendMulticastData: OPTIONAL<SendMulticastData>,
        /**
         * @summary `startDataPath`.
         * @public
         * @readonly
         */
        readonly startDataPath: OPTIONAL<StartDataPath>,
        /**
         * @summary `stopDataPath`.
         * @public
         * @readonly
         */
        readonly stopDataPath: OPTIONAL<StopDataPath>,
        /**
         * @summary `suspendDataPath`.
         * @public
         * @readonly
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
    new $.ComponentSpec("ioRegister", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("ioRegisterAbort", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("ioRegisterCancel", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("dataPathResumed", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("dataPathSuspended", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("fastData", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("resumeDataPath", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("sendBroadcastData", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("sendData", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("sendMulticastData", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("startDataPath", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("stopDataPath", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("suspendDataPath", true, $.hasTag(_TagClass.context, 12), undefined, undefined)
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
