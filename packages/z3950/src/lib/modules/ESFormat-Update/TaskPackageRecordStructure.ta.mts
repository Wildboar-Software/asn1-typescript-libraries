/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TaskPackageRecordStructure_recordOrSurDiag, _decode_TaskPackageRecordStructure_recordOrSurDiag, _encode_TaskPackageRecordStructure_recordOrSurDiag } from "../ESFormat-Update/TaskPackageRecordStructure-recordOrSurDiag.ta.mjs";
import { CorrelationInfo, _decode_CorrelationInfo, _encode_CorrelationInfo } from "../ESFormat-Update/CorrelationInfo.ta.mjs";
import { TaskPackageRecordStructure_recordStatus, _decode_TaskPackageRecordStructure_recordStatus, _encode_TaskPackageRecordStructure_recordStatus } from "../ESFormat-Update/TaskPackageRecordStructure-recordStatus.ta.mjs";


/**
 * @summary TaskPackageRecordStructure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TaskPackageRecordStructure ::= SEQUENCE {
 *     recordOrSurDiag [1] CHOICE {
 *         record              [1] IMPLICIT EXTERNAL,
 *         -- Choose 'record' if recordStatus is 'success', and elementSetName was supplied.
 *         diagnostic         [2] DiagRec
 *         -- Choose 'diagnostic', if RecordStatus is failure
 *     } OPTIONAL,
 *     --See comment 2
 *     correlationInfo [2] IMPLICIT CorrelationInfo OPTIONAL,
 *     -- This should be included if it was supplied by the client
 *     recordStatus    [3] IMPLICIT INTEGER {
 *         success           (1),
 *         queued            (2),
 *         inProcess         (3),
 *         failure           (4)
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class TaskPackageRecordStructure {
    /**
     * @summary `recordOrSurDiag`.
     * @public
     * @readonly
     */
    readonly recordOrSurDiag: OPTIONAL<TaskPackageRecordStructure_recordOrSurDiag>;
    /**
     * @summary `correlationInfo`.
     * @public
     * @readonly
     */
    readonly correlationInfo: OPTIONAL<CorrelationInfo>;
    /**
     * @summary `recordStatus`.
     * @public
     * @readonly
     */
    readonly recordStatus: TaskPackageRecordStructure_recordStatus;

    constructor (
        recordOrSurDiag: OPTIONAL<TaskPackageRecordStructure_recordOrSurDiag>,
        correlationInfo: OPTIONAL<CorrelationInfo>,
        recordStatus: TaskPackageRecordStructure_recordStatus
    ) {
        this.recordOrSurDiag = recordOrSurDiag;
        this.correlationInfo = correlationInfo;
        this.recordStatus = recordStatus;
    }

    /**
     * @summary Restructures an object into a TaskPackageRecordStructure
     * @description
     * 
     * This takes an `object` and converts it to a `TaskPackageRecordStructure`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TaskPackageRecordStructure`.
     * @returns {TaskPackageRecordStructure}
     */
    public static _from_object (_o: { [_K in keyof (TaskPackageRecordStructure)]: (TaskPackageRecordStructure)[_K] }): TaskPackageRecordStructure {
        return new TaskPackageRecordStructure(_o.recordOrSurDiag, _o.correlationInfo, _o.recordStatus);
    }


}

/**
 * @summary The Leading Root Component Types of TaskPackageRecordStructure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TaskPackageRecordStructure: $.ComponentSpec[] = [
    new $.ComponentSpec("recordOrSurDiag", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("correlationInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("recordStatus", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of TaskPackageRecordStructure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TaskPackageRecordStructure: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TaskPackageRecordStructure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TaskPackageRecordStructure: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TaskPackageRecordStructure: $.ASN1Decoder<TaskPackageRecordStructure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TaskPackageRecordStructure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TaskPackageRecordStructure (el: _Element): TaskPackageRecordStructure {
    if (!_cached_decoder_for_TaskPackageRecordStructure) { _cached_decoder_for_TaskPackageRecordStructure = function (el: _Element): TaskPackageRecordStructure {
    let recordOrSurDiag: OPTIONAL<TaskPackageRecordStructure_recordOrSurDiag>;
    let correlationInfo: OPTIONAL<CorrelationInfo>;
    let recordStatus!: TaskPackageRecordStructure_recordStatus;
    const callbacks: $.DecodingMap = {
        "recordOrSurDiag": (_el: _Element): void => { recordOrSurDiag = $._decode_explicit<TaskPackageRecordStructure_recordOrSurDiag>(() => _decode_TaskPackageRecordStructure_recordOrSurDiag)(_el); },
        "correlationInfo": (_el: _Element): void => { correlationInfo = $._decode_implicit<CorrelationInfo>(() => _decode_CorrelationInfo)(_el); },
        "recordStatus": (_el: _Element): void => { recordStatus = $._decode_implicit<TaskPackageRecordStructure_recordStatus>(() => _decode_TaskPackageRecordStructure_recordStatus)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TaskPackageRecordStructure,
        _extension_additions_list_spec_for_TaskPackageRecordStructure,
        _root_component_type_list_2_spec_for_TaskPackageRecordStructure,
        undefined,
    );
    return new TaskPackageRecordStructure(
        recordOrSurDiag,
        correlationInfo,
        recordStatus
    );
}; }
    return _cached_decoder_for_TaskPackageRecordStructure(el);
}

let _cached_encoder_for_TaskPackageRecordStructure: $.ASN1Encoder<TaskPackageRecordStructure> | null = null;

/**
 * @summary Encodes a(n) TaskPackageRecordStructure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TaskPackageRecordStructure, encoded as an ASN.1 Element.
 */
export
function _encode_TaskPackageRecordStructure (value: TaskPackageRecordStructure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TaskPackageRecordStructure) { _cached_encoder_for_TaskPackageRecordStructure = function (value: TaskPackageRecordStructure, elGetter: $.ASN1Encoder<TaskPackageRecordStructure>): _Element {
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    if (value.recordOrSurDiag !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_TaskPackageRecordStructure_recordOrSurDiag, $.BER)(value.recordOrSurDiag, $.BER);
    }
    if (value.correlationInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CorrelationInfo, $.BER)(value.correlationInfo, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_TaskPackageRecordStructure_recordStatus, $.BER)(value.recordStatus, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TaskPackageRecordStructure(value, elGetter);
}


/* eslint-enable */
