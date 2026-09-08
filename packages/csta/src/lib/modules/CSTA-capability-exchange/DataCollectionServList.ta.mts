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
import { DataCollected, DataCollected_digitsDuration /* IMPORTED_LONG_NAMED_BIT */, digitsDuration /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_digitsPauseDuration /* IMPORTED_LONG_NAMED_BIT */, digitsPauseDuration /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedBeep /* IMPORTED_LONG_NAMED_BIT */, toneDetectedBeep /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedBilling /* IMPORTED_LONG_NAMED_BIT */, toneDetectedBilling /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedBusy /* IMPORTED_LONG_NAMED_BIT */, toneDetectedBusy /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedCarrier /* IMPORTED_LONG_NAMED_BIT */, toneDetectedCarrier /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedConfirmation /* IMPORTED_LONG_NAMED_BIT */, toneDetectedConfirmation /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedDial /* IMPORTED_LONG_NAMED_BIT */, toneDetectedDial /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedFaxCNG /* IMPORTED_LONG_NAMED_BIT */, toneDetectedFaxCNG /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedHold /* IMPORTED_LONG_NAMED_BIT */, toneDetectedHold /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedHowler /* IMPORTED_LONG_NAMED_BIT */, toneDetectedHowler /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedIntrusion /* IMPORTED_LONG_NAMED_BIT */, toneDetectedIntrusion /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedModemCNG /* IMPORTED_LONG_NAMED_BIT */, toneDetectedModemCNG /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedPark /* IMPORTED_LONG_NAMED_BIT */, toneDetectedPark /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedRecordWarning /* IMPORTED_LONG_NAMED_BIT */, toneDetectedRecordWarning /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedReorder /* IMPORTED_LONG_NAMED_BIT */, toneDetectedReorder /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedRingback /* IMPORTED_LONG_NAMED_BIT */, toneDetectedRingback /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSilence /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSilence /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSitVC /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSitVC /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSitIC /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSitIC /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSitRO /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSitRO /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSitNC /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSitNC /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf0 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf0 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf1 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf1 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf2 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf2 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf3 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf3 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf4 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf4 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf5 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf5 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf6 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf6 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf7 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf7 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf8 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf8 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf9 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf9 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf10 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf10 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedOther /* IMPORTED_LONG_NAMED_BIT */, toneDetectedOther /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneFrequency /* IMPORTED_LONG_NAMED_BIT */, toneFrequency /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDuration /* IMPORTED_LONG_NAMED_BIT */, toneDuration /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_tonePauseDuration /* IMPORTED_LONG_NAMED_BIT */, tonePauseDuration /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_connectionInfo /* IMPORTED_LONG_NAMED_BIT */, connectionInfo /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_dcollCauseFushCharReceived /* IMPORTED_LONG_NAMED_BIT */, dcollCauseFushCharReceived /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_dcollCauseCharCountReached /* IMPORTED_LONG_NAMED_BIT */, dcollCauseCharCountReached /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_dcollCauseTimeout /* IMPORTED_LONG_NAMED_BIT */, dcollCauseTimeout /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_dcollCauseSFTerminated /* IMPORTED_LONG_NAMED_BIT */, dcollCauseSFTerminated /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_privateData /* IMPORTED_LONG_NAMED_BIT */, DataCollected_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_DataCollected, _encode_DataCollected } from "../CSTA-capability-exchange/DataCollected.ta.mjs";
// export { DataCollected, DataCollected_digitsDuration /* IMPORTED_LONG_NAMED_BIT */, digitsDuration /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_digitsPauseDuration /* IMPORTED_LONG_NAMED_BIT */, digitsPauseDuration /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedBeep /* IMPORTED_LONG_NAMED_BIT */, toneDetectedBeep /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedBilling /* IMPORTED_LONG_NAMED_BIT */, toneDetectedBilling /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedBusy /* IMPORTED_LONG_NAMED_BIT */, toneDetectedBusy /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedCarrier /* IMPORTED_LONG_NAMED_BIT */, toneDetectedCarrier /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedConfirmation /* IMPORTED_LONG_NAMED_BIT */, toneDetectedConfirmation /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedDial /* IMPORTED_LONG_NAMED_BIT */, toneDetectedDial /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedFaxCNG /* IMPORTED_LONG_NAMED_BIT */, toneDetectedFaxCNG /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedHold /* IMPORTED_LONG_NAMED_BIT */, toneDetectedHold /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedHowler /* IMPORTED_LONG_NAMED_BIT */, toneDetectedHowler /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedIntrusion /* IMPORTED_LONG_NAMED_BIT */, toneDetectedIntrusion /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedModemCNG /* IMPORTED_LONG_NAMED_BIT */, toneDetectedModemCNG /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedPark /* IMPORTED_LONG_NAMED_BIT */, toneDetectedPark /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedRecordWarning /* IMPORTED_LONG_NAMED_BIT */, toneDetectedRecordWarning /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedReorder /* IMPORTED_LONG_NAMED_BIT */, toneDetectedReorder /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedRingback /* IMPORTED_LONG_NAMED_BIT */, toneDetectedRingback /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSilence /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSilence /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSitVC /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSitVC /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSitIC /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSitIC /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSitRO /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSitRO /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSitNC /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSitNC /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf0 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf0 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf1 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf1 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf2 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf2 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf3 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf3 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf4 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf4 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf5 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf5 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf6 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf6 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf7 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf7 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf8 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf8 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf9 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf9 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedSf10 /* IMPORTED_LONG_NAMED_BIT */, toneDetectedSf10 /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDetectedOther /* IMPORTED_LONG_NAMED_BIT */, toneDetectedOther /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneFrequency /* IMPORTED_LONG_NAMED_BIT */, toneFrequency /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_toneDuration /* IMPORTED_LONG_NAMED_BIT */, toneDuration /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_tonePauseDuration /* IMPORTED_LONG_NAMED_BIT */, tonePauseDuration /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_connectionInfo /* IMPORTED_LONG_NAMED_BIT */, connectionInfo /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_dcollCauseFushCharReceived /* IMPORTED_LONG_NAMED_BIT */, dcollCauseFushCharReceived /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_dcollCauseCharCountReached /* IMPORTED_LONG_NAMED_BIT */, dcollCauseCharCountReached /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_dcollCauseTimeout /* IMPORTED_LONG_NAMED_BIT */, dcollCauseTimeout /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_dcollCauseSFTerminated /* IMPORTED_LONG_NAMED_BIT */, dcollCauseSFTerminated /* IMPORTED_SHORT_NAMED_BIT */, DataCollected_privateData /* IMPORTED_LONG_NAMED_BIT */, DataCollected_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_DataCollected, _encode_DataCollected } from "../CSTA-capability-exchange/DataCollected.ta.mjs";
import { DataCollectionResumed, DataCollectionResumed_privateData /* IMPORTED_LONG_NAMED_BIT */, DataCollectionResumed_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_DataCollectionResumed, _encode_DataCollectionResumed } from "../CSTA-capability-exchange/DataCollectionResumed.ta.mjs";
// export { DataCollectionResumed, DataCollectionResumed_privateData /* IMPORTED_LONG_NAMED_BIT */, DataCollectionResumed_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_DataCollectionResumed, _encode_DataCollectionResumed } from "../CSTA-capability-exchange/DataCollectionResumed.ta.mjs";
import { DataCollectionSuspended, DataCollectionSuspended_privateData /* IMPORTED_LONG_NAMED_BIT */, DataCollectionSuspended_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_DataCollectionSuspended, _encode_DataCollectionSuspended } from "../CSTA-capability-exchange/DataCollectionSuspended.ta.mjs";
// export { DataCollectionSuspended, DataCollectionSuspended_privateData /* IMPORTED_LONG_NAMED_BIT */, DataCollectionSuspended_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_DataCollectionSuspended, _encode_DataCollectionSuspended } from "../CSTA-capability-exchange/DataCollectionSuspended.ta.mjs";
import { ResumeDataCollection, ResumeDataCollection_privateData /* IMPORTED_LONG_NAMED_BIT */, ResumeDataCollection_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_ResumeDataCollection, _encode_ResumeDataCollection } from "../CSTA-capability-exchange/ResumeDataCollection.ta.mjs";
// export { ResumeDataCollection, ResumeDataCollection_privateData /* IMPORTED_LONG_NAMED_BIT */, ResumeDataCollection_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_ResumeDataCollection, _encode_ResumeDataCollection } from "../CSTA-capability-exchange/ResumeDataCollection.ta.mjs";
import { StartDataCollection, StartDataCollection_objectDevice /* IMPORTED_LONG_NAMED_BIT */, objectDevice /* IMPORTED_SHORT_NAMED_BIT */, StartDataCollection_objectCall /* IMPORTED_LONG_NAMED_BIT */, objectCall /* IMPORTED_SHORT_NAMED_BIT */, StartDataCollection_dataCollectionTypeDigits /* IMPORTED_LONG_NAMED_BIT */, dataCollectionTypeDigits /* IMPORTED_SHORT_NAMED_BIT */, StartDataCollection_dataCollectionTypeTones /* IMPORTED_LONG_NAMED_BIT */, dataCollectionTypeTones /* IMPORTED_SHORT_NAMED_BIT */, StartDataCollection_digitsReportingCriteriaNumChars /* IMPORTED_LONG_NAMED_BIT */, digitsReportingCriteriaNumChars /* IMPORTED_SHORT_NAMED_BIT */, StartDataCollection_digitsReportingCriteriaFlushChar /* IMPORTED_LONG_NAMED_BIT */, digitsReportingCriteriaFlushChar /* IMPORTED_SHORT_NAMED_BIT */, StartDataCollection_digitsReportingCriteriaTimeout /* IMPORTED_LONG_NAMED_BIT */, digitsReportingCriteriaTimeout /* IMPORTED_SHORT_NAMED_BIT */, StartDataCollection_privateData /* IMPORTED_LONG_NAMED_BIT */, StartDataCollection_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_StartDataCollection, _encode_StartDataCollection } from "../CSTA-capability-exchange/StartDataCollection.ta.mjs";
// export { StartDataCollection, StartDataCollection_objectDevice /* IMPORTED_LONG_NAMED_BIT */, objectDevice /* IMPORTED_SHORT_NAMED_BIT */, StartDataCollection_objectCall /* IMPORTED_LONG_NAMED_BIT */, objectCall /* IMPORTED_SHORT_NAMED_BIT */, StartDataCollection_dataCollectionTypeDigits /* IMPORTED_LONG_NAMED_BIT */, dataCollectionTypeDigits /* IMPORTED_SHORT_NAMED_BIT */, StartDataCollection_dataCollectionTypeTones /* IMPORTED_LONG_NAMED_BIT */, dataCollectionTypeTones /* IMPORTED_SHORT_NAMED_BIT */, StartDataCollection_digitsReportingCriteriaNumChars /* IMPORTED_LONG_NAMED_BIT */, digitsReportingCriteriaNumChars /* IMPORTED_SHORT_NAMED_BIT */, StartDataCollection_digitsReportingCriteriaFlushChar /* IMPORTED_LONG_NAMED_BIT */, digitsReportingCriteriaFlushChar /* IMPORTED_SHORT_NAMED_BIT */, StartDataCollection_digitsReportingCriteriaTimeout /* IMPORTED_LONG_NAMED_BIT */, digitsReportingCriteriaTimeout /* IMPORTED_SHORT_NAMED_BIT */, StartDataCollection_privateData /* IMPORTED_LONG_NAMED_BIT */, StartDataCollection_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_StartDataCollection, _encode_StartDataCollection } from "../CSTA-capability-exchange/StartDataCollection.ta.mjs";
import { StopDataCollection, StopDataCollection_privateData /* IMPORTED_LONG_NAMED_BIT */, StopDataCollection_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_StopDataCollection, _encode_StopDataCollection } from "../CSTA-capability-exchange/StopDataCollection.ta.mjs";
// export { StopDataCollection, StopDataCollection_privateData /* IMPORTED_LONG_NAMED_BIT */, StopDataCollection_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_StopDataCollection, _encode_StopDataCollection } from "../CSTA-capability-exchange/StopDataCollection.ta.mjs";
import { SuspendDataCollection, SuspendDataCollection_privateData /* IMPORTED_LONG_NAMED_BIT */, SuspendDataCollection_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SuspendDataCollection, _encode_SuspendDataCollection } from "../CSTA-capability-exchange/SuspendDataCollection.ta.mjs";
// export { SuspendDataCollection, SuspendDataCollection_privateData /* IMPORTED_LONG_NAMED_BIT */, SuspendDataCollection_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SuspendDataCollection, _encode_SuspendDataCollection } from "../CSTA-capability-exchange/SuspendDataCollection.ta.mjs";


/**
 * @summary DataCollectionServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataCollectionServList ::= SEQUENCE
 * {     dataCollected             [ 0] IMPLICIT     DataCollected             OPTIONAL,
 *     dataCollectionResumed         [ 1] IMPLICIT     DataCollectionResumed         OPTIONAL,
 *     dataCollectionSuspended     [ 2] IMPLICIT     DataCollectionSuspended     OPTIONAL,
 *     resumeDataCollection         [ 3] IMPLICIT     ResumeDataCollection         OPTIONAL,
 *     startDataCollection         [ 4] IMPLICIT     StartDataCollection         OPTIONAL,
 *     stopDataCollection         [ 5] IMPLICIT     StopDataCollection         OPTIONAL,
 *     suspendDataCollection         [ 6] IMPLICIT     SuspendDataCollection         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DataCollectionServList {
    constructor (
        /**
         * @summary `dataCollected`.
         * @public
         * @readonly
         */
        readonly dataCollected: OPTIONAL<DataCollected>,
        /**
         * @summary `dataCollectionResumed`.
         * @public
         * @readonly
         */
        readonly dataCollectionResumed: OPTIONAL<DataCollectionResumed>,
        /**
         * @summary `dataCollectionSuspended`.
         * @public
         * @readonly
         */
        readonly dataCollectionSuspended: OPTIONAL<DataCollectionSuspended>,
        /**
         * @summary `resumeDataCollection`.
         * @public
         * @readonly
         */
        readonly resumeDataCollection: OPTIONAL<ResumeDataCollection>,
        /**
         * @summary `startDataCollection`.
         * @public
         * @readonly
         */
        readonly startDataCollection: OPTIONAL<StartDataCollection>,
        /**
         * @summary `stopDataCollection`.
         * @public
         * @readonly
         */
        readonly stopDataCollection: OPTIONAL<StopDataCollection>,
        /**
         * @summary `suspendDataCollection`.
         * @public
         * @readonly
         */
        readonly suspendDataCollection: OPTIONAL<SuspendDataCollection>
    ) {}

    /**
     * @summary Restructures an object into a DataCollectionServList
     * @description
     * 
     * This takes an `object` and converts it to a `DataCollectionServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DataCollectionServList`.
     * @returns {DataCollectionServList}
     */
    public static _from_object (_o: { [_K in keyof (DataCollectionServList)]: (DataCollectionServList)[_K] }): DataCollectionServList {
        return new DataCollectionServList(_o.dataCollected, _o.dataCollectionResumed, _o.dataCollectionSuspended, _o.resumeDataCollection, _o.startDataCollection, _o.stopDataCollection, _o.suspendDataCollection);
    }


}

/**
 * @summary The Leading Root Component Types of DataCollectionServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DataCollectionServList: $.ComponentSpec[] = [
    new $.ComponentSpec("dataCollected", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("dataCollectionResumed", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("dataCollectionSuspended", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("resumeDataCollection", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("startDataCollection", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("stopDataCollection", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("suspendDataCollection", true, $.hasTag(_TagClass.context, 6), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of DataCollectionServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DataCollectionServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DataCollectionServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DataCollectionServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DataCollectionServList: $.ASN1Decoder<DataCollectionServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataCollectionServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataCollectionServList (el: _Element): DataCollectionServList {
    if (!_cached_decoder_for_DataCollectionServList) { _cached_decoder_for_DataCollectionServList = function (el: _Element): DataCollectionServList {
    let dataCollected: OPTIONAL<DataCollected>;
    let dataCollectionResumed: OPTIONAL<DataCollectionResumed>;
    let dataCollectionSuspended: OPTIONAL<DataCollectionSuspended>;
    let resumeDataCollection: OPTIONAL<ResumeDataCollection>;
    let startDataCollection: OPTIONAL<StartDataCollection>;
    let stopDataCollection: OPTIONAL<StopDataCollection>;
    let suspendDataCollection: OPTIONAL<SuspendDataCollection>;
    const callbacks: $.DecodingMap = {
        "dataCollected": (_el: _Element): void => { dataCollected = $._decode_implicit<DataCollected>(() => _decode_DataCollected)(_el); },
        "dataCollectionResumed": (_el: _Element): void => { dataCollectionResumed = $._decode_implicit<DataCollectionResumed>(() => _decode_DataCollectionResumed)(_el); },
        "dataCollectionSuspended": (_el: _Element): void => { dataCollectionSuspended = $._decode_implicit<DataCollectionSuspended>(() => _decode_DataCollectionSuspended)(_el); },
        "resumeDataCollection": (_el: _Element): void => { resumeDataCollection = $._decode_implicit<ResumeDataCollection>(() => _decode_ResumeDataCollection)(_el); },
        "startDataCollection": (_el: _Element): void => { startDataCollection = $._decode_implicit<StartDataCollection>(() => _decode_StartDataCollection)(_el); },
        "stopDataCollection": (_el: _Element): void => { stopDataCollection = $._decode_implicit<StopDataCollection>(() => _decode_StopDataCollection)(_el); },
        "suspendDataCollection": (_el: _Element): void => { suspendDataCollection = $._decode_implicit<SuspendDataCollection>(() => _decode_SuspendDataCollection)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DataCollectionServList,
        _extension_additions_list_spec_for_DataCollectionServList,
        _root_component_type_list_2_spec_for_DataCollectionServList,
        undefined,
    );
    return new DataCollectionServList(
        dataCollected,
        dataCollectionResumed,
        dataCollectionSuspended,
        resumeDataCollection,
        startDataCollection,
        stopDataCollection,
        suspendDataCollection
    );
}; }
    return _cached_decoder_for_DataCollectionServList(el);
}

let _cached_encoder_for_DataCollectionServList: $.ASN1Encoder<DataCollectionServList> | null = null;

/**
 * @summary Encodes a(n) DataCollectionServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataCollectionServList, encoded as an ASN.1 Element.
 */
export
function _encode_DataCollectionServList (value: DataCollectionServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataCollectionServList) { _cached_encoder_for_DataCollectionServList = function (value: DataCollectionServList, elGetter: $.ASN1Encoder<DataCollectionServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.dataCollected === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_DataCollected, $.BER)(value.dataCollected, $.BER)),
            /* IF_ABSENT  */ ((value.dataCollectionResumed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DataCollectionResumed, $.BER)(value.dataCollectionResumed, $.BER)),
            /* IF_ABSENT  */ ((value.dataCollectionSuspended === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_DataCollectionSuspended, $.BER)(value.dataCollectionSuspended, $.BER)),
            /* IF_ABSENT  */ ((value.resumeDataCollection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ResumeDataCollection, $.BER)(value.resumeDataCollection, $.BER)),
            /* IF_ABSENT  */ ((value.startDataCollection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_StartDataCollection, $.BER)(value.startDataCollection, $.BER)),
            /* IF_ABSENT  */ ((value.stopDataCollection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_StopDataCollection, $.BER)(value.stopDataCollection, $.BER)),
            /* IF_ABSENT  */ ((value.suspendDataCollection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_SuspendDataCollection, $.BER)(value.suspendDataCollection, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DataCollectionServList(value, elGetter);
}


/* eslint-enable */
