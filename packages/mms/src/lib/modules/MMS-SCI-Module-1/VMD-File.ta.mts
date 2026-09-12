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
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
// export { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
import { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
// export { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
import { LogicalStatus, _decode_LogicalStatus, _encode_LogicalStatus } from "../MMS-Object-Module-1/LogicalStatus.ta.mjs";
// export { LogicalStatus, _decode_LogicalStatus, _encode_LogicalStatus } from "../MMS-Object-Module-1/LogicalStatus.ta.mjs";
import { PhysicalStatus, _decode_PhysicalStatus, _encode_PhysicalStatus } from "../MMS-Object-Module-1/PhysicalStatus.ta.mjs";
// export { PhysicalStatus, _decode_PhysicalStatus, _encode_PhysicalStatus } from "../MMS-Object-Module-1/PhysicalStatus.ta.mjs";
import { Domain_instance, _decode_Domain_instance, _encode_Domain_instance } from "../MMS-SCI-Module-1/Domain-instance.ta.mjs";
// export { Domain_instance, _decode_Domain_instance, _encode_Domain_instance } from "../MMS-SCI-Module-1/Domain-instance.ta.mjs";
import { Program_Invocation_instance, _decode_Program_Invocation_instance, _encode_Program_Invocation_instance } from "../MMS-SCI-Module-1/Program-Invocation-instance.ta.mjs";
// export { Program_Invocation_instance, _decode_Program_Invocation_instance, _encode_Program_Invocation_instance } from "../MMS-SCI-Module-1/Program-Invocation-instance.ta.mjs";
import { Unit_Control_instance, _decode_Unit_Control_instance, _encode_Unit_Control_instance } from "../MMS-SCI-Module-1/Unit-Control-instance.ta.mjs";
// export { Unit_Control_instance, _decode_Unit_Control_instance, _encode_Unit_Control_instance } from "../MMS-SCI-Module-1/Unit-Control-instance.ta.mjs";
import { Unnamed_Variable_instance, _decode_Unnamed_Variable_instance, _encode_Unnamed_Variable_instance } from "../MMS-SCI-Module-1/Unnamed-Variable-instance.ta.mjs";
// export { Unnamed_Variable_instance, _decode_Unnamed_Variable_instance, _encode_Unnamed_Variable_instance } from "../MMS-SCI-Module-1/Unnamed-Variable-instance.ta.mjs";
import { Named_Variable_instance, _decode_Named_Variable_instance, _encode_Named_Variable_instance } from "../MMS-SCI-Module-1/Named-Variable-instance.ta.mjs";
// export { Named_Variable_instance, _decode_Named_Variable_instance, _encode_Named_Variable_instance } from "../MMS-SCI-Module-1/Named-Variable-instance.ta.mjs";
import { Named_Variable_List_instance, _decode_Named_Variable_List_instance, _encode_Named_Variable_List_instance } from "../MMS-SCI-Module-1/Named-Variable-List-instance.ta.mjs";
// export { Named_Variable_List_instance, _decode_Named_Variable_List_instance, _encode_Named_Variable_List_instance } from "../MMS-SCI-Module-1/Named-Variable-List-instance.ta.mjs";
import { Named_Type_instance, _decode_Named_Type_instance, _encode_Named_Type_instance } from "../MMS-SCI-Module-1/Named-Type-instance.ta.mjs";
// export { Named_Type_instance, _decode_Named_Type_instance, _encode_Named_Type_instance } from "../MMS-SCI-Module-1/Named-Type-instance.ta.mjs";
import { Data_Exchange_instance, _decode_Data_Exchange_instance, _encode_Data_Exchange_instance } from "../MMS-SCI-Module-1/Data-Exchange-instance.ta.mjs";
// export { Data_Exchange_instance, _decode_Data_Exchange_instance, _encode_Data_Exchange_instance } from "../MMS-SCI-Module-1/Data-Exchange-instance.ta.mjs";
import { Semaphore_instance, _decode_Semaphore_instance, _encode_Semaphore_instance } from "../MMS-SCI-Module-1/Semaphore-instance.ta.mjs";
// export { Semaphore_instance, _decode_Semaphore_instance, _encode_Semaphore_instance } from "../MMS-SCI-Module-1/Semaphore-instance.ta.mjs";
import { Operator_Station_instance, _decode_Operator_Station_instance, _encode_Operator_Station_instance } from "../MMS-SCI-Module-1/Operator-Station-instance.ta.mjs";
// export { Operator_Station_instance, _decode_Operator_Station_instance, _encode_Operator_Station_instance } from "../MMS-SCI-Module-1/Operator-Station-instance.ta.mjs";
import { Event_Condition_instance, _decode_Event_Condition_instance, _encode_Event_Condition_instance } from "../MMS-SCI-Module-1/Event-Condition-instance.ta.mjs";
// export { Event_Condition_instance, _decode_Event_Condition_instance, _encode_Event_Condition_instance } from "../MMS-SCI-Module-1/Event-Condition-instance.ta.mjs";
import { Event_Action_instance, _decode_Event_Action_instance, _encode_Event_Action_instance } from "../MMS-SCI-Module-1/Event-Action-instance.ta.mjs";
// export { Event_Action_instance, _decode_Event_Action_instance, _encode_Event_Action_instance } from "../MMS-SCI-Module-1/Event-Action-instance.ta.mjs";
import { Event_Enrollment_instance, _decode_Event_Enrollment_instance, _encode_Event_Enrollment_instance } from "../MMS-SCI-Module-1/Event-Enrollment-instance.ta.mjs";
// export { Event_Enrollment_instance, _decode_Event_Enrollment_instance, _encode_Event_Enrollment_instance } from "../MMS-SCI-Module-1/Event-Enrollment-instance.ta.mjs";
import { Event_Condition_List_instance, _decode_Event_Condition_List_instance, _encode_Event_Condition_List_instance } from "../MMS-SCI-Module-1/Event-Condition-List-instance.ta.mjs";
// export { Event_Condition_List_instance, _decode_Event_Condition_List_instance, _encode_Event_Condition_List_instance } from "../MMS-SCI-Module-1/Event-Condition-List-instance.ta.mjs";
import { Journal_instance, _decode_Journal_instance, _encode_Journal_instance } from "../MMS-SCI-Module-1/Journal-instance.ta.mjs";
// export { Journal_instance, _decode_Journal_instance, _encode_Journal_instance } from "../MMS-SCI-Module-1/Journal-instance.ta.mjs";
import { VMD_File_selected_Program_Invocation, _decode_VMD_File_selected_Program_Invocation, _encode_VMD_File_selected_Program_Invocation } from "../MMS-SCI-Module-1/VMD-File-selected-Program-Invocation.ta.mjs";
// export { VMD_File_selected_Program_Invocation, _decode_VMD_File_selected_Program_Invocation, _encode_VMD_File_selected_Program_Invocation } from "../MMS-SCI-Module-1/VMD-File-selected-Program-Invocation.ta.mjs";


/**
 * @summary VMD_File
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VMD-File ::= SEQUENCE {
 *     executiveFunction   [0] IMPLICIT ApplicationReference,
 *     vendorName          [1] MMSString,
 *     modelName           [2] MMSString,
 *     revision            [3] MMSString,
 *     abstractSyntaxes    [4] IMPLICIT OBJECT IDENTIFIER,
 *     -- no TRANSACTIONs,
 *     -- no APPLICATION-ASSOCIATIONs,
 *     accessControl       [5] IMPLICIT Access-Control-List-instance,
 *     logicalStatus       [6] IMPLICIT LogicalStatus,
 *     capabilities        [7] IMPLICIT SEQUENCE OF MMSString,
 *     physicalStatus      [8] IMPLICIT PhysicalStatus,
 *     local-detail        [9] IMPLICIT BIT STRING,
 *     accessControlLists  [10] IMPLICIT SEQUENCE OF Access-Control-List-instance,
 *     domains             [11] IMPLICIT SEQUENCE OF Domain-instance,
 *     programInvocations  [12] IMPLICIT SEQUENCE OF Program-Invocation-instance,
 *     unitControls        [13] IMPLICIT SEQUENCE OF Unit-Control-instance,
 *     -- Deviations from ISO 9506: Just use {} to encode the NULL variants.
 *     -- This will produce the same encoding if using BER / DER / CER.
 *     unnamedVariables    [14] IMPLICIT SEQUENCE OF Unnamed-Variable-instance,
 *     -- unnamedVariables    [14] IMPLICIT NULL,
 *     namedVariables      [15] IMPLICIT SEQUENCE OF Named-Variable-instance,
 *     -- namedVariables      [15] IMPLICIT NULL,
 *     namedVariableLists  [16] IMPLICIT SEQUENCE OF Named-Variable-List-instance,
 *     -- namedVariableLists  [16] IMPLICIT NULL,
 *     namedTypes          [17] IMPLICIT SEQUENCE OF Named-Type-instance,
 *     -- namedTypes          [17] IMPLICIT NULL,
 *     dataExchanges       [18] IMPLICIT SEQUENCE OF Data-Exchange-instance,
 *     semaphores          [19] IMPLICIT SEQUENCE OF Semaphore-instance,
 *     operatorStations    [20] IMPLICIT SEQUENCE OF Operator-Station-instance,
 *     eventConditions     [21] IMPLICIT SEQUENCE OF Event-Condition-instance,
 *     eventActions        [22] IMPLICIT SEQUENCE OF Event-Action-instance,
 *     eventEnrollments    [23] IMPLICIT SEQUENCE OF Event-Enrollment-instance,
 *     eventConditionLists [24] IMPLICIT SEQUENCE OF Event-Condition-List-instance,
 *     -- eventConditionLists [24] IMPLICIT NULL,
 *     journals            [25] IMPLICIT SEQUENCE OF Journal-instance,
 *     ...,
 *     selected-Program-Invocation   CHOICE {
 *         selectedProgram [26] IMPLICIT Program-Invocation-instance,
 *         noneSelected    [27] IMPLICIT NULL
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class VMD_File {
    constructor (
        /**
         * @summary `executiveFunction`.
         * @public
         * @readonly
         */
        readonly executiveFunction: ApplicationReference,
        /**
         * @summary `vendorName`.
         * @public
         * @readonly
         */
        readonly vendorName: MMSString,
        /**
         * @summary `modelName`.
         * @public
         * @readonly
         */
        readonly modelName: MMSString,
        /**
         * @summary `revision`.
         * @public
         * @readonly
         */
        readonly revision: MMSString,
        /**
         * @summary `abstractSyntaxes`.
         * @public
         * @readonly
         */
        readonly abstractSyntaxes: OBJECT_IDENTIFIER,
        /**
         * @summary `accessControl`.
         * @public
         * @readonly
         */
        readonly accessControl: Access_Control_List_instance,
        /**
         * @summary `logicalStatus`.
         * @public
         * @readonly
         */
        readonly logicalStatus: LogicalStatus,
        /**
         * @summary `capabilities`.
         * @public
         * @readonly
         */
        readonly capabilities: MMSString[],
        /**
         * @summary `physicalStatus`.
         * @public
         * @readonly
         */
        readonly physicalStatus: PhysicalStatus,
        /**
         * @summary `local_detail`.
         * @public
         * @readonly
         */
        readonly local_detail: BIT_STRING,
        /**
         * @summary `accessControlLists`.
         * @public
         * @readonly
         */
        readonly accessControlLists: Access_Control_List_instance[],
        /**
         * @summary `domains`.
         * @public
         * @readonly
         */
        readonly domains: Domain_instance[],
        /**
         * @summary `programInvocations`.
         * @public
         * @readonly
         */
        readonly programInvocations: Program_Invocation_instance[],
        /**
         * @summary `unitControls`.
         * @public
         * @readonly
         */
        readonly unitControls: Unit_Control_instance[],
        /**
         * @summary `unnamedVariables`.
         * @public
         * @readonly
         */
        readonly unnamedVariables: Unnamed_Variable_instance[],
        /**
         * @summary `namedVariables`.
         * @public
         * @readonly
         */
        readonly namedVariables: Named_Variable_instance[],
        /**
         * @summary `namedVariableLists`.
         * @public
         * @readonly
         */
        readonly namedVariableLists: Named_Variable_List_instance[],
        /**
         * @summary `namedTypes`.
         * @public
         * @readonly
         */
        readonly namedTypes: Named_Type_instance[],
        /**
         * @summary `dataExchanges`.
         * @public
         * @readonly
         */
        readonly dataExchanges: Data_Exchange_instance[],
        /**
         * @summary `semaphores`.
         * @public
         * @readonly
         */
        readonly semaphores: Semaphore_instance[],
        /**
         * @summary `operatorStations`.
         * @public
         * @readonly
         */
        readonly operatorStations: Operator_Station_instance[],
        /**
         * @summary `eventConditions`.
         * @public
         * @readonly
         */
        readonly eventConditions: Event_Condition_instance[],
        /**
         * @summary `eventActions`.
         * @public
         * @readonly
         */
        readonly eventActions: Event_Action_instance[],
        /**
         * @summary `eventEnrollments`.
         * @public
         * @readonly
         */
        readonly eventEnrollments: Event_Enrollment_instance[],
        /**
         * @summary `eventConditionLists`.
         * @public
         * @readonly
         */
        readonly eventConditionLists: Event_Condition_List_instance[],
        /**
         * @summary `journals`.
         * @public
         * @readonly
         */
        readonly journals: Journal_instance[],
        /**
         * @summary `selected_Program_Invocation`.
         * @public
         * @readonly
         */
        readonly selected_Program_Invocation: VMD_File_selected_Program_Invocation,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a VMD_File
     * @description
     * 
     * This takes an `object` and converts it to a `VMD_File`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VMD_File`.
     * @returns {VMD_File}
     */
    public static _from_object (_o: { [_K in keyof (VMD_File)]: (VMD_File)[_K] }): VMD_File {
        return new VMD_File(_o.executiveFunction, _o.vendorName, _o.modelName, _o.revision, _o.abstractSyntaxes, _o.accessControl, _o.logicalStatus, _o.capabilities, _o.physicalStatus, _o.local_detail, _o.accessControlLists, _o.domains, _o.programInvocations, _o.unitControls, _o.unnamedVariables, _o.namedVariables, _o.namedVariableLists, _o.namedTypes, _o.dataExchanges, _o.semaphores, _o.operatorStations, _o.eventConditions, _o.eventActions, _o.eventEnrollments, _o.eventConditionLists, _o.journals, _o.selected_Program_Invocation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of VMD_File
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VMD_File: $.ComponentSpec[] = [
    new $.ComponentSpec("executiveFunction", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("vendorName", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("modelName", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("revision", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("abstractSyntaxes", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("accessControl", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("logicalStatus", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("capabilities", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("physicalStatus", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("local-detail", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("accessControlLists", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("domains", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("programInvocations", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("unitControls", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("unnamedVariables", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("namedVariables", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("namedVariableLists", false, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("namedTypes", false, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("dataExchanges", false, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("semaphores", false, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("operatorStations", false, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("eventConditions", false, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("eventActions", false, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("eventEnrollments", false, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("eventConditionLists", false, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("journals", false, $.hasTag(_TagClass.context, 25))
];

/**
 * @summary The Trailing Root Component Types of VMD_File
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VMD_File: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VMD_File
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VMD_File: $.ComponentSpec[] = [
    new $.ComponentSpec("selected-Program-Invocation", false, $.hasAnyTag)
];

let _cached_decoder_for_VMD_File: $.ASN1Decoder<VMD_File> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VMD_File
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VMD_File (el: _Element): VMD_File {
    if (!_cached_decoder_for_VMD_File) { _cached_decoder_for_VMD_File = function (el: _Element): VMD_File {
    let executiveFunction!: ApplicationReference;
    let vendorName!: MMSString;
    let modelName!: MMSString;
    let revision!: MMSString;
    let abstractSyntaxes!: OBJECT_IDENTIFIER;
    let accessControl!: Access_Control_List_instance;
    let logicalStatus!: LogicalStatus;
    let capabilities!: MMSString[];
    let physicalStatus!: PhysicalStatus;
    let local_detail!: BIT_STRING;
    let accessControlLists!: Access_Control_List_instance[];
    let domains!: Domain_instance[];
    let programInvocations!: Program_Invocation_instance[];
    let unitControls!: Unit_Control_instance[];
    let unnamedVariables!: Unnamed_Variable_instance[];
    let namedVariables!: Named_Variable_instance[];
    let namedVariableLists!: Named_Variable_List_instance[];
    let namedTypes!: Named_Type_instance[];
    let dataExchanges!: Data_Exchange_instance[];
    let semaphores!: Semaphore_instance[];
    let operatorStations!: Operator_Station_instance[];
    let eventConditions!: Event_Condition_instance[];
    let eventActions!: Event_Action_instance[];
    let eventEnrollments!: Event_Enrollment_instance[];
    let eventConditionLists!: Event_Condition_List_instance[];
    let journals!: Journal_instance[];
    let selected_Program_Invocation!: VMD_File_selected_Program_Invocation;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "executiveFunction": (_el: _Element): void => { executiveFunction = $._decode_implicit<ApplicationReference>(() => _decode_ApplicationReference)(_el); },
        "vendorName": (_el: _Element): void => { vendorName = $._decode_explicit<MMSString>(() => _decode_MMSString)(_el); },
        "modelName": (_el: _Element): void => { modelName = $._decode_explicit<MMSString>(() => _decode_MMSString)(_el); },
        "revision": (_el: _Element): void => { revision = $._decode_explicit<MMSString>(() => _decode_MMSString)(_el); },
        "abstractSyntaxes": (_el: _Element): void => { abstractSyntaxes = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "accessControl": (_el: _Element): void => { accessControl = $._decode_implicit<Access_Control_List_instance>(() => _decode_Access_Control_List_instance)(_el); },
        "logicalStatus": (_el: _Element): void => { logicalStatus = $._decode_implicit<LogicalStatus>(() => _decode_LogicalStatus)(_el); },
        "capabilities": (_el: _Element): void => { capabilities = $._decode_implicit<MMSString[]>(() => $._decodeSequenceOf<MMSString>(() => _decode_MMSString))(_el); },
        "physicalStatus": (_el: _Element): void => { physicalStatus = $._decode_implicit<PhysicalStatus>(() => _decode_PhysicalStatus)(_el); },
        "local-detail": (_el: _Element): void => { local_detail = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(_el); },
        "accessControlLists": (_el: _Element): void => { accessControlLists = $._decode_implicit<Access_Control_List_instance[]>(() => $._decodeSequenceOf<Access_Control_List_instance>(() => _decode_Access_Control_List_instance))(_el); },
        "domains": (_el: _Element): void => { domains = $._decode_implicit<Domain_instance[]>(() => $._decodeSequenceOf<Domain_instance>(() => _decode_Domain_instance))(_el); },
        "programInvocations": (_el: _Element): void => { programInvocations = $._decode_implicit<Program_Invocation_instance[]>(() => $._decodeSequenceOf<Program_Invocation_instance>(() => _decode_Program_Invocation_instance))(_el); },
        "unitControls": (_el: _Element): void => { unitControls = $._decode_implicit<Unit_Control_instance[]>(() => $._decodeSequenceOf<Unit_Control_instance>(() => _decode_Unit_Control_instance))(_el); },
        "unnamedVariables": (_el: _Element): void => { unnamedVariables = $._decode_implicit<Unnamed_Variable_instance[]>(() => $._decodeSequenceOf<Unnamed_Variable_instance>(() => _decode_Unnamed_Variable_instance))(_el); },
        "namedVariables": (_el: _Element): void => { namedVariables = $._decode_implicit<Named_Variable_instance[]>(() => $._decodeSequenceOf<Named_Variable_instance>(() => _decode_Named_Variable_instance))(_el); },
        "namedVariableLists": (_el: _Element): void => { namedVariableLists = $._decode_implicit<Named_Variable_List_instance[]>(() => $._decodeSequenceOf<Named_Variable_List_instance>(() => _decode_Named_Variable_List_instance))(_el); },
        "namedTypes": (_el: _Element): void => { namedTypes = $._decode_implicit<Named_Type_instance[]>(() => $._decodeSequenceOf<Named_Type_instance>(() => _decode_Named_Type_instance))(_el); },
        "dataExchanges": (_el: _Element): void => { dataExchanges = $._decode_implicit<Data_Exchange_instance[]>(() => $._decodeSequenceOf<Data_Exchange_instance>(() => _decode_Data_Exchange_instance))(_el); },
        "semaphores": (_el: _Element): void => { semaphores = $._decode_implicit<Semaphore_instance[]>(() => $._decodeSequenceOf<Semaphore_instance>(() => _decode_Semaphore_instance))(_el); },
        "operatorStations": (_el: _Element): void => { operatorStations = $._decode_implicit<Operator_Station_instance[]>(() => $._decodeSequenceOf<Operator_Station_instance>(() => _decode_Operator_Station_instance))(_el); },
        "eventConditions": (_el: _Element): void => { eventConditions = $._decode_implicit<Event_Condition_instance[]>(() => $._decodeSequenceOf<Event_Condition_instance>(() => _decode_Event_Condition_instance))(_el); },
        "eventActions": (_el: _Element): void => { eventActions = $._decode_implicit<Event_Action_instance[]>(() => $._decodeSequenceOf<Event_Action_instance>(() => _decode_Event_Action_instance))(_el); },
        "eventEnrollments": (_el: _Element): void => { eventEnrollments = $._decode_implicit<Event_Enrollment_instance[]>(() => $._decodeSequenceOf<Event_Enrollment_instance>(() => _decode_Event_Enrollment_instance))(_el); },
        "eventConditionLists": (_el: _Element): void => { eventConditionLists = $._decode_implicit<Event_Condition_List_instance[]>(() => $._decodeSequenceOf<Event_Condition_List_instance>(() => _decode_Event_Condition_List_instance))(_el); },
        "journals": (_el: _Element): void => { journals = $._decode_implicit<Journal_instance[]>(() => $._decodeSequenceOf<Journal_instance>(() => _decode_Journal_instance))(_el); },
        "selected-Program-Invocation": (_el: _Element): void => { selected_Program_Invocation = _decode_VMD_File_selected_Program_Invocation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_VMD_File,
        _extension_additions_list_spec_for_VMD_File,
        _root_component_type_list_2_spec_for_VMD_File,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new VMD_File(
        executiveFunction,
        vendorName,
        modelName,
        revision,
        abstractSyntaxes,
        accessControl,
        logicalStatus,
        capabilities,
        physicalStatus,
        local_detail,
        accessControlLists,
        domains,
        programInvocations,
        unitControls,
        unnamedVariables,
        namedVariables,
        namedVariableLists,
        namedTypes,
        dataExchanges,
        semaphores,
        operatorStations,
        eventConditions,
        eventActions,
        eventEnrollments,
        eventConditionLists,
        journals,
        selected_Program_Invocation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_VMD_File(el);
}

let _cached_encoder_for_VMD_File: $.ASN1Encoder<VMD_File> | null = null;

/**
 * @summary Encodes a(n) VMD_File into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VMD_File, encoded as an ASN.1 Element.
 */
export
function _encode_VMD_File (value: VMD_File, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VMD_File) { _cached_encoder_for_VMD_File = function (value: VMD_File, elGetter: $.ASN1Encoder<VMD_File>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ApplicationReference, $.BER)(value.executiveFunction, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_MMSString, $.BER)(value.vendorName, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_MMSString, $.BER)(value.modelName, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_MMSString, $.BER)(value.revision, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeObjectIdentifier, $.BER)(value.abstractSyntaxes, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_Access_Control_List_instance, $.BER)(value.accessControl, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_LogicalStatus, $.BER)(value.logicalStatus, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<MMSString>(() => _encode_MMSString, $.BER), $.BER)(value.capabilities, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_PhysicalStatus, $.BER)(value.physicalStatus, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeBitString, $.BER)(value.local_detail, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<Access_Control_List_instance>(() => _encode_Access_Control_List_instance, $.BER), $.BER)(value.accessControlLists, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeSequenceOf<Domain_instance>(() => _encode_Domain_instance, $.BER), $.BER)(value.domains, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => $._encodeSequenceOf<Program_Invocation_instance>(() => _encode_Program_Invocation_instance, $.BER), $.BER)(value.programInvocations, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeSequenceOf<Unit_Control_instance>(() => _encode_Unit_Control_instance, $.BER), $.BER)(value.unitControls, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => $._encodeSequenceOf<Unnamed_Variable_instance>(() => _encode_Unnamed_Variable_instance, $.BER), $.BER)(value.unnamedVariables, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => $._encodeSequenceOf<Named_Variable_instance>(() => _encode_Named_Variable_instance, $.BER), $.BER)(value.namedVariables, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => $._encodeSequenceOf<Named_Variable_List_instance>(() => _encode_Named_Variable_List_instance, $.BER), $.BER)(value.namedVariableLists, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 17, () => $._encodeSequenceOf<Named_Type_instance>(() => _encode_Named_Type_instance, $.BER), $.BER)(value.namedTypes, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 18, () => $._encodeSequenceOf<Data_Exchange_instance>(() => _encode_Data_Exchange_instance, $.BER), $.BER)(value.dataExchanges, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 19, () => $._encodeSequenceOf<Semaphore_instance>(() => _encode_Semaphore_instance, $.BER), $.BER)(value.semaphores, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 20, () => $._encodeSequenceOf<Operator_Station_instance>(() => _encode_Operator_Station_instance, $.BER), $.BER)(value.operatorStations, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 21, () => $._encodeSequenceOf<Event_Condition_instance>(() => _encode_Event_Condition_instance, $.BER), $.BER)(value.eventConditions, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 22, () => $._encodeSequenceOf<Event_Action_instance>(() => _encode_Event_Action_instance, $.BER), $.BER)(value.eventActions, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 23, () => $._encodeSequenceOf<Event_Enrollment_instance>(() => _encode_Event_Enrollment_instance, $.BER), $.BER)(value.eventEnrollments, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 24, () => $._encodeSequenceOf<Event_Condition_List_instance>(() => _encode_Event_Condition_List_instance, $.BER), $.BER)(value.eventConditionLists, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 25, () => $._encodeSequenceOf<Journal_instance>(() => _encode_Journal_instance, $.BER), $.BER)(value.journals, $.BER)
        ],
        [
            /* REQUIRED   */ _encode_VMD_File_selected_Program_Invocation(value.selected_Program_Invocation, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_VMD_File(value, elGetter);
}


/* eslint-enable */
