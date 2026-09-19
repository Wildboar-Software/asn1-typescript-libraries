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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TaskPackage_taskStatus, TaskPackage_taskStatus_pending /* IMPORTED_LONG_NAMED_INTEGER */, pending /* IMPORTED_SHORT_NAMED_INTEGER */, TaskPackage_taskStatus_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, TaskPackage_taskStatus_complete /* IMPORTED_LONG_NAMED_INTEGER */, complete /* IMPORTED_SHORT_NAMED_INTEGER */, TaskPackage_taskStatus_aborted /* IMPORTED_LONG_NAMED_INTEGER */, aborted /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_TaskPackage_taskStatus, _encode_TaskPackage_taskStatus } from "../RecordSyntax-ESTaskPackage/TaskPackage-taskStatus.ta.mjs";
// export { TaskPackage_taskStatus, TaskPackage_taskStatus_pending /* IMPORTED_LONG_NAMED_INTEGER */, pending /* IMPORTED_SHORT_NAMED_INTEGER */, TaskPackage_taskStatus_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, TaskPackage_taskStatus_complete /* IMPORTED_LONG_NAMED_INTEGER */, complete /* IMPORTED_SHORT_NAMED_INTEGER */, TaskPackage_taskStatus_aborted /* IMPORTED_LONG_NAMED_INTEGER */, aborted /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_TaskPackage_taskStatus, _encode_TaskPackage_taskStatus } from "../RecordSyntax-ESTaskPackage/TaskPackage-taskStatus.ta.mjs";


/**
 * @summary TaskPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TaskPackage ::= SEQUENCE{
 *    packageType               [1]   IMPLICIT OBJECT IDENTIFIER,
 *                                         -- oid of specific ES definition
 *    packageName               [2]   IMPLICIT InternationalString OPTIONAL,
 *    userId                    [3]   IMPLICIT InternationalString OPTIONAL,
 *    retentionTime             [4]   IMPLICIT IntUnit OPTIONAL,
 *    permissions               [5]   IMPLICIT Permissions OPTIONAL,
 *    description               [6]   IMPLICIT InternationalString OPTIONAL,
 *    targetReference           [7]   IMPLICIT OCTET STRING OPTIONAL,
 *    creationDateTime          [8]   IMPLICIT GeneralizedTime OPTIONAL,
 *    taskStatus                [9]   IMPLICIT INTEGER{
 *                                        pending  (0),
 *                                        active   (1),
 *                                        complete (2),
 *                                        aborted  (3)},
 *    packageDiagnostics        [10]  IMPLICIT SEQUENCE OF DiagRec OPTIONAL,
 *    taskSpecificParameters    [11]  IMPLICIT EXTERNAL
 *                                        -- Use oid for specific ES definition
 *                                        -- (same oid as packageType above)
 *                                        -- and select [2] "taskPackage."
 *       }
 * ```
 * 
 * @class
 */
export
class TaskPackage {
    constructor (
        /**
         * @summary `packageType`.
         * @public
         * @readonly
         */
        readonly packageType: OBJECT_IDENTIFIER,
        /**
         * @summary `packageName`.
         * @public
         * @readonly
         */
        readonly packageName: OPTIONAL<InternationalString>,
        /**
         * @summary `userId`.
         * @public
         * @readonly
         */
        readonly userId: OPTIONAL<InternationalString>,
        /**
         * @summary `retentionTime`.
         * @public
         * @readonly
         */
        readonly retentionTime: OPTIONAL<IntUnit>,
        /**
         * @summary `permissions`.
         * @public
         * @readonly
         */
        readonly permissions: OPTIONAL<Permissions>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<InternationalString>,
        /**
         * @summary `targetReference`.
         * @public
         * @readonly
         */
        readonly targetReference: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `creationDateTime`.
         * @public
         * @readonly
         */
        readonly creationDateTime: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `taskStatus`.
         * @public
         * @readonly
         */
        readonly taskStatus: TaskPackage_taskStatus,
        /**
         * @summary `packageDiagnostics`.
         * @public
         * @readonly
         */
        readonly packageDiagnostics: OPTIONAL<DiagRec[]>,
        /**
         * @summary `taskSpecificParameters`.
         * @public
         * @readonly
         */
        readonly taskSpecificParameters: EXTERNAL
    ) {}

    /**
     * @summary Restructures an object into a TaskPackage
     * @description
     * 
     * This takes an `object` and converts it to a `TaskPackage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TaskPackage`.
     * @returns {TaskPackage}
     */
    public static _from_object (_o: { [_K in keyof (TaskPackage)]: (TaskPackage)[_K] }): TaskPackage {
        return new TaskPackage(_o.packageType, _o.packageName, _o.userId, _o.retentionTime, _o.permissions, _o.description, _o.targetReference, _o.creationDateTime, _o.taskStatus, _o.packageDiagnostics, _o.taskSpecificParameters);
    }


}

/**
 * @summary The Leading Root Component Types of TaskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TaskPackage: $.ComponentSpec[] = [
    new $.ComponentSpec("packageType", false, $.hasTag(_TagClass.context, 1)),
    /* FIXME: packageName COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: userId COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: retentionTime COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: permissions COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: description COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("targetReference", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("creationDateTime", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("taskStatus", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("packageDiagnostics", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("taskSpecificParameters", false, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of TaskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TaskPackage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TaskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TaskPackage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TaskPackage: $.ASN1Decoder<TaskPackage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TaskPackage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TaskPackage (el: _Element): TaskPackage {
    if (!_cached_decoder_for_TaskPackage) { _cached_decoder_for_TaskPackage = function (el: _Element): TaskPackage {
    let packageType!: OBJECT_IDENTIFIER;
    let packageName: OPTIONAL<InternationalString>;
    let userId: OPTIONAL<InternationalString>;
    let retentionTime: OPTIONAL<IntUnit>;
    let permissions: OPTIONAL<Permissions>;
    let description: OPTIONAL<InternationalString>;
    let targetReference: OPTIONAL<OCTET_STRING>;
    let creationDateTime: OPTIONAL<GeneralizedTime>;
    let taskStatus!: TaskPackage_taskStatus;
    let packageDiagnostics: OPTIONAL<DiagRec[]>;
    let taskSpecificParameters!: EXTERNAL;
    const callbacks: $.DecodingMap = {
        "packageType": (_el: _Element): void => { packageType = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "packageName": (_el: _Element): void => { packageName = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "userId": (_el: _Element): void => { userId = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "retentionTime": (_el: _Element): void => { retentionTime = $._decode_implicit<IntUnit>(() => _decode_IntUnit)(_el); },
        "permissions": (_el: _Element): void => { permissions = $._decode_implicit<Permissions>(() => _decode_Permissions)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "targetReference": (_el: _Element): void => { targetReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "creationDateTime": (_el: _Element): void => { creationDateTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "taskStatus": (_el: _Element): void => { taskStatus = $._decode_implicit<TaskPackage_taskStatus>(() => _decode_TaskPackage_taskStatus)(_el); },
        "packageDiagnostics": (_el: _Element): void => { packageDiagnostics = $._decode_implicit<DiagRec[]>(() => $._decodeSequenceOf<DiagRec>(() => _decode_DiagRec))(_el); },
        "taskSpecificParameters": (_el: _Element): void => { taskSpecificParameters = $._decode_implicit<EXTERNAL>(() => $._decodeExternal)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TaskPackage,
        _extension_additions_list_spec_for_TaskPackage,
        _root_component_type_list_2_spec_for_TaskPackage,
        undefined,
    );
    return new TaskPackage(
        packageType,
        packageName,
        userId,
        retentionTime,
        permissions,
        description,
        targetReference,
        creationDateTime,
        taskStatus,
        packageDiagnostics,
        taskSpecificParameters
    );
}; }
    return _cached_decoder_for_TaskPackage(el);
}

let _cached_encoder_for_TaskPackage: $.ASN1Encoder<TaskPackage> | null = null;

/**
 * @summary Encodes a(n) TaskPackage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TaskPackage, encoded as an ASN.1 Element.
 */
export
function _encode_TaskPackage (value: TaskPackage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TaskPackage) { _cached_encoder_for_TaskPackage = function (value: TaskPackage, elGetter: $.ASN1Encoder<TaskPackage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.packageType, $.BER),
            /* IF_ABSENT  */ ((value.packageName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.packageName, $.BER)),
            /* IF_ABSENT  */ ((value.userId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_InternationalString, $.BER)(value.userId, $.BER)),
            /* IF_ABSENT  */ ((value.retentionTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_IntUnit, $.BER)(value.retentionTime, $.BER)),
            /* IF_ABSENT  */ ((value.permissions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Permissions, $.BER)(value.permissions, $.BER)),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_InternationalString, $.BER)(value.description, $.BER)),
            /* IF_ABSENT  */ ((value.targetReference === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.targetReference, $.BER)),
            /* IF_ABSENT  */ ((value.creationDateTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeGeneralizedTime, $.BER)(value.creationDateTime, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_TaskPackage_taskStatus, $.BER)(value.taskStatus, $.BER),
            /* IF_ABSENT  */ ((value.packageDiagnostics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<DiagRec>(() => _encode_DiagRec, $.BER), $.BER)(value.packageDiagnostics, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeExternal, $.BER)(value.taskSpecificParameters, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TaskPackage(value, elGetter);
}


/* eslint-enable */
