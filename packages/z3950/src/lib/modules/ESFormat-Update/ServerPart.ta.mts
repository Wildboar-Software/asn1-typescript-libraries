/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServerPart_updateStatus, _decode_ServerPart_updateStatus, _encode_ServerPart_updateStatus } from "../ESFormat-Update/ServerPart-updateStatus.ta.mjs";
// export { ServerPart_updateStatus, ServerPart_updateStatus_success /* IMPORTED_LONG_NAMED_INTEGER */, success /* IMPORTED_SHORT_NAMED_INTEGER */, ServerPart_updateStatus_partial /* IMPORTED_LONG_NAMED_INTEGER */, partial /* IMPORTED_SHORT_NAMED_INTEGER */, ServerPart_updateStatus_failure /* IMPORTED_LONG_NAMED_INTEGER */, failure /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServerPart_updateStatus, _encode_ServerPart_updateStatus } from "../ESFormat-Update/ServerPart-updateStatus.ta.mjs";
import { DiagRec, _decode_DiagRec, _encode_DiagRec } from "../Z39-50-APDU-2001/DiagRec.ta.mjs";
// export { DiagRec, _decode_DiagRec, _encode_DiagRec } from "../Z39-50-APDU-2001/DiagRec.ta.mjs";
import { TaskPackageRecordStructure, _decode_TaskPackageRecordStructure, _encode_TaskPackageRecordStructure } from "../ESFormat-Update/TaskPackageRecordStructure.ta.mjs";
// export { TaskPackageRecordStructure, _decode_TaskPackageRecordStructure, _encode_TaskPackageRecordStructure } from "../ESFormat-Update/TaskPackageRecordStructure.ta.mjs";


/**
 * @summary ServerPart
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerPart ::= SEQUENCE {
 *     updateStatus        [1] IMPLICIT INTEGER {
 *         success (1),
 *         partial (2),
 *         failure (3)
 *     },
 *     globalDiagnostics   [2] IMPLICIT SEQUENCE OF DiagRec OPTIONAL,
 *     --These are non-surrogate diagnostics relating
 *     --to the task, not to individual records.
 *     taskPackageRecords  [3] IMPLICIT SEQUENCE OF TaskPackageRecordStructure
 *     --See comment 1.
 * }
 * ```
 * 
 * @class
 */
export
class ServerPart {
    /**
     * @summary `updateStatus`.
     * @public
     * @readonly
     */
    readonly updateStatus: ServerPart_updateStatus;
    /**
     * @summary `globalDiagnostics`.
     * @public
     * @readonly
     */
    readonly globalDiagnostics: OPTIONAL<DiagRec[]>;
    /**
     * @summary `taskPackageRecords`.
     * @public
     * @readonly
     */
    readonly taskPackageRecords: TaskPackageRecordStructure[];

    constructor (
        updateStatus: ServerPart_updateStatus,
        globalDiagnostics: OPTIONAL<DiagRec[]>,
        taskPackageRecords: TaskPackageRecordStructure[]
    ) {
        this.updateStatus = updateStatus;
        this.globalDiagnostics = globalDiagnostics;
        this.taskPackageRecords = taskPackageRecords;
    }

    /**
     * @summary Restructures an object into a ServerPart
     * @description
     * 
     * This takes an `object` and converts it to a `ServerPart`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServerPart`.
     * @returns {ServerPart}
     */
    public static _from_object (_o: { [_K in keyof (ServerPart)]: (ServerPart)[_K] }): ServerPart {
        return new ServerPart(_o.updateStatus, _o.globalDiagnostics, _o.taskPackageRecords);
    }


}

/**
 * @summary The Leading Root Component Types of ServerPart
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServerPart: $.ComponentSpec[] = [
    new $.ComponentSpec("updateStatus", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("globalDiagnostics", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("taskPackageRecords", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ServerPart
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServerPart: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServerPart
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServerPart: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServerPart: $.ASN1Decoder<ServerPart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServerPart
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServerPart (el: _Element): ServerPart {
    if (!_cached_decoder_for_ServerPart) { _cached_decoder_for_ServerPart = function (el: _Element): ServerPart {
    let updateStatus!: ServerPart_updateStatus;
    let globalDiagnostics: OPTIONAL<DiagRec[]>;
    let taskPackageRecords!: TaskPackageRecordStructure[];
    const callbacks: $.DecodingMap = {
        "updateStatus": (_el: _Element): void => { updateStatus = $._decode_implicit<ServerPart_updateStatus>(() => _decode_ServerPart_updateStatus)(_el); },
        "globalDiagnostics": (_el: _Element): void => { globalDiagnostics = $._decode_implicit<DiagRec[]>(() => $._decodeSequenceOf<DiagRec>(() => _decode_DiagRec))(_el); },
        "taskPackageRecords": (_el: _Element): void => { taskPackageRecords = $._decode_implicit<TaskPackageRecordStructure[]>(() => $._decodeSequenceOf<TaskPackageRecordStructure>(() => _decode_TaskPackageRecordStructure))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServerPart,
        _extension_additions_list_spec_for_ServerPart,
        _root_component_type_list_2_spec_for_ServerPart,
        undefined,
    );
    return new ServerPart(
        updateStatus,
        globalDiagnostics,
        taskPackageRecords
    );
}; }
    return _cached_decoder_for_ServerPart(el);
}

let _cached_encoder_for_ServerPart: $.ASN1Encoder<ServerPart> | null = null;

/**
 * @summary Encodes a(n) ServerPart into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServerPart, encoded as an ASN.1 Element.
 */
export
function _encode_ServerPart (value: ServerPart, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServerPart) { _cached_encoder_for_ServerPart = function (value: ServerPart, elGetter: $.ASN1Encoder<ServerPart>): _Element {
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ServerPart_updateStatus, $.BER)(value.updateStatus, $.BER);
    if (value.globalDiagnostics !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<DiagRec>(() => _encode_DiagRec, $.BER), $.BER)(value.globalDiagnostics, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<TaskPackageRecordStructure>(() => _encode_TaskPackageRecordStructure, $.BER), $.BER)(value.taskPackageRecords, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ServerPart(value, elGetter);
}


/* eslint-enable */
