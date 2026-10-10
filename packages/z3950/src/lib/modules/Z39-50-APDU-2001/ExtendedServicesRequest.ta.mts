/* eslint-disable */
import {
    EXTERNAL,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { ExtendedServicesRequest_function, _decode_ExtendedServicesRequest_function, _encode_ExtendedServicesRequest_function } from "../Z39-50-APDU-2001/ExtendedServicesRequest-function.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { IntUnit, _decode_IntUnit, _encode_IntUnit } from "../Z39-50-APDU-2001/IntUnit.ta.mjs";
import { Permissions, _decode_Permissions, _encode_Permissions } from "../Z39-50-APDU-2001/Permissions.ta.mjs";
import { ExtendedServicesRequest_waitAction, _decode_ExtendedServicesRequest_waitAction, _encode_ExtendedServicesRequest_waitAction } from "../Z39-50-APDU-2001/ExtendedServicesRequest-waitAction.ta.mjs";
import { ElementSetName, _decode_ElementSetName, _encode_ElementSetName } from "../Z39-50-APDU-2001/ElementSetName.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary ExtendedServicesRequest
 * @description
 * 
 * Client request to create, modify, or delete a task package on the server
 * (ANSI/NISO Z39.50-2003 §3.2.9.1). The request and response are the ES
 * operation. The task itself is outside that operation and may outlive the
 * Z-association. The server checks the request and answers accepted or
 * rejected. Extended Services is negotiated (§4.4.2.2.13). If the operation
 * aborts, no terminating response arrives and wait-action is treated as
 * do-not-send-task-package; the client may search the ES database IR-Extend-1
 * (§3.2.9.4).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedServicesRequest ::= SEQUENCE {
 *     referenceId             ReferenceId OPTIONAL,
 *     function                [3] IMPLICIT INTEGER {
 *         create (1),
 *         delete (2),
 *         modify (3)
 *     },
 *     packageType             [4] IMPLICIT OBJECT IDENTIFIER,
 *     packageName             [5] IMPLICIT InternationalString OPTIONAL,
 *     --PackageName is mandatory for 'modify' or 'delete'; optional for 'create'.
 *     --Following four parameters mandatory for 'create'; should be included on
 *     --'modify' if being modified; it is not needed on 'delete'.
 *     userId                  [6] IMPLICIT InternationalString OPTIONAL,
 *     retentionTime           [7] IMPLICIT IntUnit OPTIONAL,
 *     permissions             [8] IMPLICIT Permissions OPTIONAL,
 *     description             [9] IMPLICIT InternationalString OPTIONAL,
 *     taskSpecificParameters  [10] IMPLICIT EXTERNAL OPTIONAL,
 *     --Mandatory for 'create'; included on 'modify' if specific parameters being modified;
 *     -- not necessary on 'delete'. For the 'EXTERNAL,' use OID of specific
 *     --ES definition and select CHOICE [1]: 'esRequest'.
 *     waitAction              [11] IMPLICIT INTEGER{
 *         wait                (1),
 *         waitIfPossible      (2),
 *         dontWait            (3),
 *         dontReturnPackage   (4)
 *     },
 *     elements    ElementSetName OPTIONAL,
 *     otherInfo   OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ExtendedServicesRequest {
    /**
     * @summary `referenceId`.
     * @description
     * 
     * Client-assigned identifier of this ES operation. Mandatory when
     * concurrent operations is in effect. When serial operations is in effect
     * it may be omitted and is then null (ANSI/NISO Z39.50-2003 §3.4, §3.5).
     * 
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `function_`.
     * @description
     * 
     * Create, delete, or modify a task package (ANSI/NISO Z39.50-2003
     * §3.2.9.1.1). Create builds a package and uses `packageName` when
     * supplied. Delete or modify names an existing package. The server may
     * still refuse, for example because the task has started or the package is
     * in use.
     * 
     * @public
     * @readonly
     */
    readonly function_: ExtendedServicesRequest_function;
    /**
     * @summary `packageType`.
     * @description
     * 
     * Which extended service to run (ANSI/NISO Z39.50-2003 §3.2.9.1.2). This
     * standard registers persistent result set, persistent query, periodic
     * query schedule, item order, database update, export specification, and
     * export invocation, as object identifiers under `{Z39-50-extendedServices
     * 1}` through 7 (Appendix EXT).
     * 
     * @public
     * @readonly
     */
    readonly packageType: OBJECT_IDENTIFIER;
    /**
     * @summary `packageName`.
     * @description
     * 
     * Client name for the package. With package type and user id it must be
     * unique or the request is in error, and that triple is how the package is
     * referenced later. Mandatory on modify and delete; optional on create
     * (ANSI/NISO Z39.50-2003 §3.2.9.1.3, §4.1).
     * 
     * @public
     * @readonly
     */
    readonly packageName: OPTIONAL<InternationalString>;
    /**
     * @summary `userId`.
     * @description
     * 
     * User associated with the package. If omitted, it may default to the
     * current user. A server may refuse a user id other than the client's own.
     * Mandatory on create; send it on modify when it is being changed
     * (ANSI/NISO Z39.50-2003 §3.2.9.1.4, §4.1).
     * 
     * @public
     * @readonly
     */
    readonly userId: OPTIONAL<InternationalString>;
    /**
     * @summary `retentionTime`.
     * @description
     * 
     * How long the server should keep the package, for example in hours or
     * days. The server may override it. Zero means the package is not kept
     * after the task completes (ANSI/NISO Z39.50-2003 §3.2.9.1.5).
     * 
     * @public
     * @readonly
     */
    readonly retentionTime: OPTIONAL<IntUnit>;
    /**
     * @summary `permissions`.
     * @description
     * 
     * Who else may access the package, and which functions they may use. If
     * omitted, only the creating user may access it (ANSI/NISO Z39.50-2003
     * §3.2.9.1.6, §3.2.9.3).
     * 
     * @public
     * @readonly
     */
    readonly permissions: OPTIONAL<Permissions>;
    /**
     * @summary `description`.
     * @description
     * 
     * Client description of the package, for example of a saved result set or a
     * saved query (ANSI/NISO Z39.50-2003 §3.2.9.1.7).
     * 
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<InternationalString>;
    /**
     * @summary `taskSpecificParameters`.
     * @description
     * 
     * Parameters defined by the particular extended service, as an EXTERNAL
     * whose object identifier is that service and whose chosen alternative is
     * `esRequest`. Mandatory on create. On modify, include it when those
     * parameters change. It is not needed on delete (ANSI/NISO Z39.50-2003
     * §3.2.9.1.12, §4.1). The task-package definitions are in Appendix EXT.
     * 
     * @public
     * @readonly
     */
    readonly taskSpecificParameters: OPTIONAL<EXTERNAL>;
    /**
     * @summary `waitAction`.
     * @description
     * 
     * Whether the server should finish the task before the ES response, and
     * whether that response may carry the task package (ANSI/NISO Z39.50-2003
     * §3.2.9.1.13).
     * 
     * @public
     * @readonly
     */
    readonly waitAction: ExtendedServicesRequest_waitAction;
    /**
     * @summary `elements`.
     * @description
     * 
     * Element set name for the task package if the response returns one. The
     * client may send it only when wait-action is other than
     * do-not-send-task-package (ANSI/NISO Z39.50-2003 §3.2.9.1.14). The ES
     * database defines element sets Identification, UniqueName, Permissions,
     * Status, and Brief, besides full (§3.2.9.2).
     * 
     * @public
     * @readonly
     */
    readonly elements: OPTIONAL<ElementSetName>;
    /**
     * @summary `otherInfo`.
     * @description
     * 
     * Additional information this standard does not define. The peer should
     * expect it and need not interpret it, in either version (ANSI/NISO
     * Z39.50-2003 §3.2.9.1.18, §4.4.2.2.21).
     * 
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        function_: ExtendedServicesRequest_function,
        packageType: OBJECT_IDENTIFIER,
        packageName: OPTIONAL<InternationalString>,
        userId: OPTIONAL<InternationalString>,
        retentionTime: OPTIONAL<IntUnit>,
        permissions: OPTIONAL<Permissions>,
        description: OPTIONAL<InternationalString>,
        taskSpecificParameters: OPTIONAL<EXTERNAL>,
        waitAction: ExtendedServicesRequest_waitAction,
        elements: OPTIONAL<ElementSetName>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.function_ = function_;
        this.packageType = packageType;
        this.packageName = packageName;
        this.userId = userId;
        this.retentionTime = retentionTime;
        this.permissions = permissions;
        this.description = description;
        this.taskSpecificParameters = taskSpecificParameters;
        this.waitAction = waitAction;
        this.elements = elements;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a ExtendedServicesRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ExtendedServicesRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtendedServicesRequest`.
     * @returns {ExtendedServicesRequest}
     */
    public static _from_object (_o: { [_K in keyof (ExtendedServicesRequest)]: (ExtendedServicesRequest)[_K] }): ExtendedServicesRequest {
        return new ExtendedServicesRequest(_o.referenceId, _o.function_, _o.packageType, _o.packageName, _o.userId, _o.retentionTime, _o.permissions, _o.description, _o.taskSpecificParameters, _o.waitAction, _o.elements, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of ExtendedServicesRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExtendedServicesRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("function", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("packageType", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("packageName", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("userId", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("retentionTime", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("permissions", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("taskSpecificParameters", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("waitAction", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("elements", true, $.hasTag(_TagClass.context, 103)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of ExtendedServicesRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExtendedServicesRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExtendedServicesRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExtendedServicesRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExtendedServicesRequest: $.ASN1Decoder<ExtendedServicesRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedServicesRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedServicesRequest (el: _Element): ExtendedServicesRequest {
    if (!_cached_decoder_for_ExtendedServicesRequest) { _cached_decoder_for_ExtendedServicesRequest = function (el: _Element): ExtendedServicesRequest {
    let referenceId: OPTIONAL<ReferenceId>;
    let function_!: ExtendedServicesRequest_function;
    let packageType!: OBJECT_IDENTIFIER;
    let packageName: OPTIONAL<InternationalString>;
    let userId: OPTIONAL<InternationalString>;
    let retentionTime: OPTIONAL<IntUnit>;
    let permissions: OPTIONAL<Permissions>;
    let description: OPTIONAL<InternationalString>;
    let taskSpecificParameters: OPTIONAL<EXTERNAL>;
    let waitAction!: ExtendedServicesRequest_waitAction;
    let elements: OPTIONAL<ElementSetName>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "function": (_el: _Element): void => { function_ = $._decode_implicit<ExtendedServicesRequest_function>(() => _decode_ExtendedServicesRequest_function)(_el); },
        "packageType": (_el: _Element): void => { packageType = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "packageName": (_el: _Element): void => { packageName = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "userId": (_el: _Element): void => { userId = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "retentionTime": (_el: _Element): void => { retentionTime = $._decode_implicit<IntUnit>(() => _decode_IntUnit)(_el); },
        "permissions": (_el: _Element): void => { permissions = $._decode_implicit<Permissions>(() => _decode_Permissions)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "taskSpecificParameters": (_el: _Element): void => { taskSpecificParameters = $._decode_implicit<EXTERNAL>(() => $._decodeExternal)(_el); },
        "waitAction": (_el: _Element): void => { waitAction = $._decode_implicit<ExtendedServicesRequest_waitAction>(() => _decode_ExtendedServicesRequest_waitAction)(_el); },
        "elements": (_el: _Element): void => { elements = _decode_ElementSetName(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExtendedServicesRequest,
        _extension_additions_list_spec_for_ExtendedServicesRequest,
        _root_component_type_list_2_spec_for_ExtendedServicesRequest,
        undefined,
    );
    return new ExtendedServicesRequest(
        referenceId,
        function_,
        packageType,
        packageName,
        userId,
        retentionTime,
        permissions,
        description,
        taskSpecificParameters,
        waitAction,
        elements,
        otherInfo
    );
}; }
    return _cached_decoder_for_ExtendedServicesRequest(el);
}

let _cached_encoder_for_ExtendedServicesRequest: $.ASN1Encoder<ExtendedServicesRequest> | null = null;

/**
 * @summary Encodes a(n) ExtendedServicesRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedServicesRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedServicesRequest (value: ExtendedServicesRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedServicesRequest) { _cached_encoder_for_ExtendedServicesRequest = function (value: ExtendedServicesRequest, elGetter: $.ASN1Encoder<ExtendedServicesRequest>): _Element {
    const _components: _Element[] = new Array(12);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_ExtendedServicesRequest_function, $.BER)(value.function_, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeObjectIdentifier, $.BER)(value.packageType, $.BER);
    if (value.packageName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_InternationalString, $.BER)(value.packageName, $.BER);
    }
    if (value.userId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_InternationalString, $.BER)(value.userId, $.BER);
    }
    if (value.retentionTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_IntUnit, $.BER)(value.retentionTime, $.BER);
    }
    if (value.permissions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_Permissions, $.BER)(value.permissions, $.BER);
    }
    if (value.description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_InternationalString, $.BER)(value.description, $.BER);
    }
    if (value.taskSpecificParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeExternal, $.BER)(value.taskSpecificParameters, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => _encode_ExtendedServicesRequest_waitAction, $.BER)(value.waitAction, $.BER);
    if (value.elements !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 103, () => _encode_ElementSetName, $.BER)(value.elements, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ExtendedServicesRequest(value, elGetter);
}


/* eslint-enable */
