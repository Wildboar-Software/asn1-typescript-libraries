/* eslint-disable */
import {
    EXTERNAL,
    GeneralizedTime,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { IntUnit, _decode_IntUnit, _encode_IntUnit } from "../Z39-50-APDU-2001/IntUnit.ta.mjs";
import { Permissions, _decode_Permissions, _encode_Permissions } from "../Z39-50-APDU-2001/Permissions.ta.mjs";
import { TaskPackage_taskStatus, _decode_TaskPackage_taskStatus, _encode_TaskPackage_taskStatus } from "../RecordSyntax-ESTaskPackage/TaskPackage-taskStatus.ta.mjs";
import { DiagRec, _decode_DiagRec, _encode_DiagRec } from "../Z39-50-APDU-2001/DiagRec.ta.mjs";


/**
 * @summary TaskPackage
 * @description
 * 
 * Extended-services task package as a retrieval record (ANSI/NISO Z39.50-2003,
 * REC.4, ASN1.7, §3.2.9). Record-syntax OID `{Z39-50-recordSyntax
 * esTaskPackage(106)}` (`1.2.840.10003.5.106`).
 * 
 * Servers that support extended services keep these records in the database
 * `IR-Extend-1`. The client retrieves them with Search and Present (§3.2.9.2).
 * The package may also be returned on the ES response when the wait action
 * allows it (§3.2.9.1.13, §3.2.9.1.17). Which portion comes back depends on the
 * element set named by Elements (§3.2.9.1.14).
 * 
 * Parameters common to every extended service are these components. The
 * service-specific part is an EXTERNAL. Task status reports progress only. It
 * does not say that the task succeeded (§3.2.9.5).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TaskPackage ::= SEQUENCE {
 *     packageType         [1] IMPLICIT OBJECT IDENTIFIER,
 *     -- oid of specific ES definition
 *     packageName         [2] IMPLICIT InternationalString OPTIONAL,
 *     userId              [3] IMPLICIT InternationalString OPTIONAL,
 *     retentionTime       [4] IMPLICIT IntUnit OPTIONAL,
 *     permissions         [5] IMPLICIT Permissions OPTIONAL,
 *     description         [6] IMPLICIT InternationalString OPTIONAL,
 *     serverReference     [7] IMPLICIT OCTET STRING OPTIONAL,
 *     creationDateTime    [8] IMPLICIT GeneralizedTime OPTIONAL,
 *     taskStatus          [9] IMPLICIT INTEGER {
 *         pending  (0),
 *         active   (1),
 *         complete (2),
 *         aborted  (3)
 *     },
 *     packageDiagnostics      [10] IMPLICIT SEQUENCE OF DiagRec OPTIONAL,
 *     taskSpecificParameters  [11] IMPLICIT EXTERNAL
 *     -- Use oid for specific ES definition
 *     -- (same oid as packageType above) and select [2] "taskPackage."
 * }
 * ```
 * 
 * @class
 */
export
class TaskPackage {
    /**
     * @summary `packageType`.
     * @description
     * 
     * Object identifier of the extended service (ASN1.7, §3.2.9.1.2). This
     * standard registers persistent result set, persistent query, periodic
     * query schedule, item order, database update, export specification, and
     * export invocation (Appendix EXT).
     * @public
     * @readonly
     */
    readonly packageType: OBJECT_IDENTIFIER;
    /**
     * @summary `packageName`.
     * @description
     * 
     * Name the client may supply. The triple of package type, user id, and this
     * name must be unique, and that triple is how the package is referred to
     * later. Supply a name if the client will refer to the package
     * (§3.2.9.1.3).
     * @public
     * @readonly
     */
    readonly packageName: OPTIONAL<InternationalString>;
    /**
     * @summary `userId`.
     * @description
     * 
     * User associated with the package. If the client omits it on the request,
     * the server may use the current user. The server may refuse a user id
     * other than the client's own (§3.2.9.1.4).
     * @public
     * @readonly
     */
    readonly userId: OPTIONAL<InternationalString>;
    /**
     * @summary `retentionTime`.
     * @description
     * 
     * How long the server keeps the package. The server may override the value
     * from the request. Zero means the package is not kept after the task
     * completes (§3.2.9.1.5).
     * @public
     * @readonly
     */
    readonly retentionTime: OPTIONAL<IntUnit>;
    /**
     * @summary `permissions`.
     * @description
     * 
     * Who may access the package. If absent, only the creating user may. Each
     * entry is a user id, or a group name in the same form, and a set of
     * operations: Delete, Modify-Contents, Modify-Permissions, Present, and
     * Invoke (§3.2.9.1.6, §3.2.9.3).
     * @public
     * @readonly
     */
    readonly permissions: OPTIONAL<Permissions>;
    /**
     * @summary `description`.
     * @description
     * 
     * Client text describing the package. For example, the result set of a
     * persistent result set, or the query of a persistent query (§3.2.9.1.7).
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<InternationalString>;
    /**
     * @summary `serverReference`.
     * @description
     * 
     * Identifier the server assigns to the package (§3.2.9.1.8).
     * @public
     * @readonly
     */
    readonly serverReference: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `creationDateTime`.
     * @description
     * 
     * When the server created the package (§3.2.9.1.9).
     * @public
     * @readonly
     */
    readonly creationDateTime: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `taskStatus`.
     * @description
     * 
     * Progress of the task: pending, active, complete, or aborted. It exists
     * only on the package. Complete means the task finished, not that it
     * succeeded (§3.2.9.1.10, §3.2.9.5).
     * @public
     * @readonly
     */
    readonly taskStatus: TaskPackage_taskStatus;
    /**
     * @summary `packageDiagnostics`.
     * @description
     * 
     * Diagnostics the server places in the package (§3.2.9.1.11).
     * @public
     * @readonly
     */
    readonly packageDiagnostics: OPTIONAL<DiagRec[]>;
    /**
     * @summary `taskSpecificParameters`.
     * @description
     * 
     * Parameters defined by the extended service. Encode them as an EXTERNAL
     * whose object identifier is the same as the package type, and select the
     * taskPackage alternative (§3.2.9.1.12, ASN1.7).
     * @public
     * @readonly
     */
    readonly taskSpecificParameters: EXTERNAL;

    constructor (
        packageType: OBJECT_IDENTIFIER,
        packageName: OPTIONAL<InternationalString>,
        userId: OPTIONAL<InternationalString>,
        retentionTime: OPTIONAL<IntUnit>,
        permissions: OPTIONAL<Permissions>,
        description: OPTIONAL<InternationalString>,
        serverReference: OPTIONAL<OCTET_STRING>,
        creationDateTime: OPTIONAL<GeneralizedTime>,
        taskStatus: TaskPackage_taskStatus,
        packageDiagnostics: OPTIONAL<DiagRec[]>,
        taskSpecificParameters: EXTERNAL
    ) {
        this.packageType = packageType;
        this.packageName = packageName;
        this.userId = userId;
        this.retentionTime = retentionTime;
        this.permissions = permissions;
        this.description = description;
        this.serverReference = serverReference;
        this.creationDateTime = creationDateTime;
        this.taskStatus = taskStatus;
        this.packageDiagnostics = packageDiagnostics;
        this.taskSpecificParameters = taskSpecificParameters;
    }

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
        return new TaskPackage(_o.packageType, _o.packageName, _o.userId, _o.retentionTime, _o.permissions, _o.description, _o.serverReference, _o.creationDateTime, _o.taskStatus, _o.packageDiagnostics, _o.taskSpecificParameters);
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
    new $.ComponentSpec("packageName", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("userId", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("retentionTime", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("permissions", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("serverReference", true, $.hasTag(_TagClass.context, 7)),
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
    let serverReference: OPTIONAL<OCTET_STRING>;
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
        "serverReference": (_el: _Element): void => { serverReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
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
        serverReference,
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
    const _components: _Element[] = new Array(11);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.packageType, $.BER);
    if (value.packageName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.packageName, $.BER);
    }
    if (value.userId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_InternationalString, $.BER)(value.userId, $.BER);
    }
    if (value.retentionTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_IntUnit, $.BER)(value.retentionTime, $.BER);
    }
    if (value.permissions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Permissions, $.BER)(value.permissions, $.BER);
    }
    if (value.description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_InternationalString, $.BER)(value.description, $.BER);
    }
    if (value.serverReference !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.serverReference, $.BER);
    }
    if (value.creationDateTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeGeneralizedTime, $.BER)(value.creationDateTime, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_TaskPackage_taskStatus, $.BER)(value.taskStatus, $.BER);
    if (value.packageDiagnostics !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<DiagRec>(() => _encode_DiagRec, $.BER), $.BER)(value.packageDiagnostics, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeExternal, $.BER)(value.taskSpecificParameters, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TaskPackage(value, elGetter);
}


/* eslint-enable */
