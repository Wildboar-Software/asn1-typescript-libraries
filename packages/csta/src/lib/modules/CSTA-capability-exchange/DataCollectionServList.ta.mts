/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DataCollected, _decode_DataCollected, _encode_DataCollected } from "../CSTA-capability-exchange/DataCollected.ta.mjs";

import { DataCollectionResumed, _decode_DataCollectionResumed, _encode_DataCollectionResumed } from "../CSTA-capability-exchange/DataCollectionResumed.ta.mjs";

import { DataCollectionSuspended, _decode_DataCollectionSuspended, _encode_DataCollectionSuspended } from "../CSTA-capability-exchange/DataCollectionSuspended.ta.mjs";

import { ResumeDataCollection, _decode_ResumeDataCollection, _encode_ResumeDataCollection } from "../CSTA-capability-exchange/ResumeDataCollection.ta.mjs";

import { StartDataCollection, _decode_StartDataCollection, _encode_StartDataCollection } from "../CSTA-capability-exchange/StartDataCollection.ta.mjs";

import { StopDataCollection, _decode_StopDataCollection, _encode_StopDataCollection } from "../CSTA-capability-exchange/StopDataCollection.ta.mjs";

import { SuspendDataCollection, _decode_SuspendDataCollection, _encode_SuspendDataCollection } from "../CSTA-capability-exchange/SuspendDataCollection.ta.mjs";



/**
 * @summary DataCollectionServList
 * @description
 * Data Collection services the SF supports (ECMA-269 Annex C.18, ECMA-285
 * §9.10). Omit unsupported services.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
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
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly dataCollected: OPTIONAL<DataCollected>,
        /**
         * @summary `dataCollectionResumed`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly dataCollectionResumed: OPTIONAL<DataCollectionResumed>,
        /**
         * @summary `dataCollectionSuspended`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly dataCollectionSuspended: OPTIONAL<DataCollectionSuspended>,
        /**
         * @summary `resumeDataCollection`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly resumeDataCollection: OPTIONAL<ResumeDataCollection>,
        /**
         * @summary `startDataCollection`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly startDataCollection: OPTIONAL<StartDataCollection>,
        /**
         * @summary `stopDataCollection`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly stopDataCollection: OPTIONAL<StopDataCollection>,
        /**
         * @summary `suspendDataCollection`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
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
    new $.ComponentSpec("dataCollected", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("dataCollectionResumed", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dataCollectionSuspended", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("resumeDataCollection", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("startDataCollection", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("stopDataCollection", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("suspendDataCollection", true, $.hasTag(_TagClass.context, 6))
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
