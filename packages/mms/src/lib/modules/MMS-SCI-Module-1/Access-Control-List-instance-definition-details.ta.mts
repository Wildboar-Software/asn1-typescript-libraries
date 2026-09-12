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
import { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
// export { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
import { AccessCondition, _decode_AccessCondition, _encode_AccessCondition } from "../MMS-Object-Module-1/AccessCondition.ta.mjs";
// export { AccessCondition, _decode_AccessCondition, _encode_AccessCondition } from "../MMS-Object-Module-1/AccessCondition.ta.mjs";
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
import { Journal_instance, _decode_Journal_instance, _encode_Journal_instance } from "../MMS-SCI-Module-1/Journal-instance.ta.mjs";
// export { Journal_instance, _decode_Journal_instance, _encode_Journal_instance } from "../MMS-SCI-Module-1/Journal-instance.ta.mjs";
import { Event_Condition_List_instance, _decode_Event_Condition_List_instance, _encode_Event_Condition_List_instance } from "../MMS-SCI-Module-1/Event-Condition-List-instance.ta.mjs";
// export { Event_Condition_List_instance, _decode_Event_Condition_List_instance, _encode_Event_Condition_List_instance } from "../MMS-SCI-Module-1/Event-Condition-List-instance.ta.mjs";


/**
 * @summary Access_Control_List_instance_definition_details
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Access-Control-List-instance-definition-details ::= SEQUENCE {
 *     accessControl [3] IMPLICIT Access-Control-List-instance,
 *     readAccessCondition [4] AccessCondition OPTIONAL,
 *     storeAccessCondition [5] AccessCondition OPTIONAL,
 *     writeAccessCondition [6] AccessCondition OPTIONAL,
 *     loadAccessCondition [7] AccessCondition OPTIONAL,
 *     executeAccessCondition [8] AccessCondition OPTIONAL,
 *     deleteAccessCondition [9] AccessCondition OPTIONAL,
 *     editAccessCondition [10] AccessCondition OPTIONAL,
 *     --
 *     -- The following fields are used to record lists of objects placed
 *     -- under the control of this ACCESS-CONTROL-LIST object.
 *     -- They will be referred to collectively as the Controlled Object Lists
 *     --
 *     accessControlLists [11] IMPLICIT SEQUENCE OF Access-Control-List-instance,
 *     domains [12] IMPLICIT SEQUENCE OF Domain-instance,
 *     programInvocations [13] IMPLICIT SEQUENCE OF Program-Invocation-instance,
 *     unitControls [14] IMPLICIT SEQUENCE OF Unit-Control-instance,
 *     unnamedVariables [15] IMPLICIT SEQUENCE OF Unnamed-Variable-instance,
 *     unnamedVariables [15] IMPLICIT NULL,
 *     namedVariables [16] IMPLICIT SEQUENCE OF Named-Variable-instance,
 *     namedVariableLists [17] IMPLICIT SEQUENCE OF Named-Variable-List-instance,
 *     namedVariableLists [17] IMPLICIT NULL,
 *     namedTypes [18] IMPLICIT SEQUENCE OF Named-Type-instance,
 *     namedVariables [16] IMPLICIT NULL,
 *     namedVariableLists [17] IMPLICIT NULL,
 *     namedTypes [18] IMPLICIT NULL,
 *     dataExchanges [19] IMPLICIT SEQUENCE OF Data-Exchange-instance,
 *     semaphores [20] IMPLICIT SEQUENCE OF Semaphore-instance,
 *     operatorStations [21] IMPLICIT SEQUENCE OF Operator-Station-instance,
 *     eventConditions [22] IMPLICIT SEQUENCE OF Event-Condition-instance,
 *     eventActions [23] IMPLICIT SEQUENCE OF Event-Action-instance,
 *     eventEnrollments [24] IMPLICIT SEQUENCE OF Event-Enrollment-instance,
 *     journals [25] IMPLICIT SEQUENCE OF Journal-instance,
 *     ...,
 *     eventConditionLists [26] IMPLICIT SEQUENCE OF Event-Condition-List-instance
 * }
 * ```
 * 
 * @class
 */
export
class Access_Control_List_instance_definition_details {
    constructor (
        /**
         * @summary `accessControl`.
         * @public
         * @readonly
         */
        readonly accessControl: Access_Control_List_instance,
        /**
         * @summary `readAccessCondition`.
         * @public
         * @readonly
         */
        readonly readAccessCondition: OPTIONAL<AccessCondition>,
        /**
         * @summary `storeAccessCondition`.
         * @public
         * @readonly
         */
        readonly storeAccessCondition: OPTIONAL<AccessCondition>,
        /**
         * @summary `writeAccessCondition`.
         * @public
         * @readonly
         */
        readonly writeAccessCondition: OPTIONAL<AccessCondition>,
        /**
         * @summary `loadAccessCondition`.
         * @public
         * @readonly
         */
        readonly loadAccessCondition: OPTIONAL<AccessCondition>,
        /**
         * @summary `executeAccessCondition`.
         * @public
         * @readonly
         */
        readonly executeAccessCondition: OPTIONAL<AccessCondition>,
        /**
         * @summary `deleteAccessCondition`.
         * @public
         * @readonly
         */
        readonly deleteAccessCondition: OPTIONAL<AccessCondition>,
        /**
         * @summary `editAccessCondition`.
         * @public
         * @readonly
         */
        readonly editAccessCondition: OPTIONAL<AccessCondition>,
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
         * @summary `unnamedVariables`.
         * @public
         * @readonly
         */
        readonly unnamedVariables: NULL,
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
         * @summary `namedVariableLists`.
         * @public
         * @readonly
         */
        readonly namedVariableLists: NULL,
        /**
         * @summary `namedTypes`.
         * @public
         * @readonly
         */
        readonly namedTypes: Named_Type_instance[],
        /**
         * @summary `namedVariables`.
         * @public
         * @readonly
         */
        readonly namedVariables: NULL,
        /**
         * @summary `namedVariableLists`.
         * @public
         * @readonly
         */
        readonly namedVariableLists: NULL,
        /**
         * @summary `namedTypes`.
         * @public
         * @readonly
         */
        readonly namedTypes: NULL,
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
         * @summary `journals`.
         * @public
         * @readonly
         */
        readonly journals: Journal_instance[],
        /**
         * @summary `eventConditionLists`.
         * @public
         * @readonly
         */
        readonly eventConditionLists: Event_Condition_List_instance[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Access_Control_List_instance_definition_details
     * @description
     * 
     * This takes an `object` and converts it to a `Access_Control_List_instance_definition_details`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Access_Control_List_instance_definition_details`.
     * @returns {Access_Control_List_instance_definition_details}
     */
    public static _from_object (_o: { [_K in keyof (Access_Control_List_instance_definition_details)]: (Access_Control_List_instance_definition_details)[_K] }): Access_Control_List_instance_definition_details {
        return new Access_Control_List_instance_definition_details(_o.accessControl, _o.readAccessCondition, _o.storeAccessCondition, _o.writeAccessCondition, _o.loadAccessCondition, _o.executeAccessCondition, _o.deleteAccessCondition, _o.editAccessCondition, _o.accessControlLists, _o.domains, _o.programInvocations, _o.unitControls, _o.unnamedVariables, _o.unnamedVariables, _o.namedVariables, _o.namedVariableLists, _o.namedVariableLists, _o.namedTypes, _o.namedVariables, _o.namedVariableLists, _o.namedTypes, _o.dataExchanges, _o.semaphores, _o.operatorStations, _o.eventConditions, _o.eventActions, _o.eventEnrollments, _o.journals, _o.eventConditionLists, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Access_Control_List_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Access_Control_List_instance_definition_details: $.ComponentSpec[] = [
    new $.ComponentSpec("accessControl", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("readAccessCondition", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("storeAccessCondition", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("writeAccessCondition", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("loadAccessCondition", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("executeAccessCondition", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("deleteAccessCondition", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("editAccessCondition", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("accessControlLists", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("domains", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("programInvocations", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("unitControls", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("unnamedVariables", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("unnamedVariables", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("namedVariables", false, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("namedVariableLists", false, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("namedVariableLists", false, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("namedTypes", false, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("namedVariables", false, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("namedVariableLists", false, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("namedTypes", false, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("dataExchanges", false, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("semaphores", false, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("operatorStations", false, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("eventConditions", false, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("eventActions", false, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("eventEnrollments", false, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("journals", false, $.hasTag(_TagClass.context, 25))
];

/**
 * @summary The Trailing Root Component Types of Access_Control_List_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Access_Control_List_instance_definition_details: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Access_Control_List_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Access_Control_List_instance_definition_details: $.ComponentSpec[] = [
    new $.ComponentSpec("eventConditionLists", false, $.hasTag(_TagClass.context, 26))
];

let _cached_decoder_for_Access_Control_List_instance_definition_details: $.ASN1Decoder<Access_Control_List_instance_definition_details> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Access_Control_List_instance_definition_details
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Access_Control_List_instance_definition_details (el: _Element): Access_Control_List_instance_definition_details {
    if (!_cached_decoder_for_Access_Control_List_instance_definition_details) { _cached_decoder_for_Access_Control_List_instance_definition_details = function (el: _Element): Access_Control_List_instance_definition_details {
    let accessControl!: Access_Control_List_instance;
    let readAccessCondition: OPTIONAL<AccessCondition>;
    let storeAccessCondition: OPTIONAL<AccessCondition>;
    let writeAccessCondition: OPTIONAL<AccessCondition>;
    let loadAccessCondition: OPTIONAL<AccessCondition>;
    let executeAccessCondition: OPTIONAL<AccessCondition>;
    let deleteAccessCondition: OPTIONAL<AccessCondition>;
    let editAccessCondition: OPTIONAL<AccessCondition>;
    let accessControlLists!: Access_Control_List_instance[];
    let domains!: Domain_instance[];
    let programInvocations!: Program_Invocation_instance[];
    let unitControls!: Unit_Control_instance[];
    let unnamedVariables!: Unnamed_Variable_instance[];
    let unnamedVariables!: NULL;
    let namedVariables!: Named_Variable_instance[];
    let namedVariableLists!: Named_Variable_List_instance[];
    let namedVariableLists!: NULL;
    let namedTypes!: Named_Type_instance[];
    let namedVariables!: NULL;
    let namedVariableLists!: NULL;
    let namedTypes!: NULL;
    let dataExchanges!: Data_Exchange_instance[];
    let semaphores!: Semaphore_instance[];
    let operatorStations!: Operator_Station_instance[];
    let eventConditions!: Event_Condition_instance[];
    let eventActions!: Event_Action_instance[];
    let eventEnrollments!: Event_Enrollment_instance[];
    let journals!: Journal_instance[];
    let eventConditionLists!: Event_Condition_List_instance[];
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "accessControl": (_el: _Element): void => { accessControl = $._decode_implicit<Access_Control_List_instance>(() => _decode_Access_Control_List_instance)(_el); },
        "readAccessCondition": (_el: _Element): void => { readAccessCondition = $._decode_explicit<AccessCondition>(() => _decode_AccessCondition)(_el); },
        "storeAccessCondition": (_el: _Element): void => { storeAccessCondition = $._decode_explicit<AccessCondition>(() => _decode_AccessCondition)(_el); },
        "writeAccessCondition": (_el: _Element): void => { writeAccessCondition = $._decode_explicit<AccessCondition>(() => _decode_AccessCondition)(_el); },
        "loadAccessCondition": (_el: _Element): void => { loadAccessCondition = $._decode_explicit<AccessCondition>(() => _decode_AccessCondition)(_el); },
        "executeAccessCondition": (_el: _Element): void => { executeAccessCondition = $._decode_explicit<AccessCondition>(() => _decode_AccessCondition)(_el); },
        "deleteAccessCondition": (_el: _Element): void => { deleteAccessCondition = $._decode_explicit<AccessCondition>(() => _decode_AccessCondition)(_el); },
        "editAccessCondition": (_el: _Element): void => { editAccessCondition = $._decode_explicit<AccessCondition>(() => _decode_AccessCondition)(_el); },
        "accessControlLists": (_el: _Element): void => { accessControlLists = $._decode_implicit<Access_Control_List_instance[]>(() => $._decodeSequenceOf<Access_Control_List_instance>(() => _decode_Access_Control_List_instance))(_el); },
        "domains": (_el: _Element): void => { domains = $._decode_implicit<Domain_instance[]>(() => $._decodeSequenceOf<Domain_instance>(() => _decode_Domain_instance))(_el); },
        "programInvocations": (_el: _Element): void => { programInvocations = $._decode_implicit<Program_Invocation_instance[]>(() => $._decodeSequenceOf<Program_Invocation_instance>(() => _decode_Program_Invocation_instance))(_el); },
        "unitControls": (_el: _Element): void => { unitControls = $._decode_implicit<Unit_Control_instance[]>(() => $._decodeSequenceOf<Unit_Control_instance>(() => _decode_Unit_Control_instance))(_el); },
        "unnamedVariables": (_el: _Element): void => { unnamedVariables = $._decode_implicit<Unnamed_Variable_instance[]>(() => $._decodeSequenceOf<Unnamed_Variable_instance>(() => _decode_Unnamed_Variable_instance))(_el); },
        "unnamedVariables": (_el: _Element): void => { unnamedVariables = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "namedVariables": (_el: _Element): void => { namedVariables = $._decode_implicit<Named_Variable_instance[]>(() => $._decodeSequenceOf<Named_Variable_instance>(() => _decode_Named_Variable_instance))(_el); },
        "namedVariableLists": (_el: _Element): void => { namedVariableLists = $._decode_implicit<Named_Variable_List_instance[]>(() => $._decodeSequenceOf<Named_Variable_List_instance>(() => _decode_Named_Variable_List_instance))(_el); },
        "namedVariableLists": (_el: _Element): void => { namedVariableLists = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "namedTypes": (_el: _Element): void => { namedTypes = $._decode_implicit<Named_Type_instance[]>(() => $._decodeSequenceOf<Named_Type_instance>(() => _decode_Named_Type_instance))(_el); },
        "namedVariables": (_el: _Element): void => { namedVariables = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "namedVariableLists": (_el: _Element): void => { namedVariableLists = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "namedTypes": (_el: _Element): void => { namedTypes = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "dataExchanges": (_el: _Element): void => { dataExchanges = $._decode_implicit<Data_Exchange_instance[]>(() => $._decodeSequenceOf<Data_Exchange_instance>(() => _decode_Data_Exchange_instance))(_el); },
        "semaphores": (_el: _Element): void => { semaphores = $._decode_implicit<Semaphore_instance[]>(() => $._decodeSequenceOf<Semaphore_instance>(() => _decode_Semaphore_instance))(_el); },
        "operatorStations": (_el: _Element): void => { operatorStations = $._decode_implicit<Operator_Station_instance[]>(() => $._decodeSequenceOf<Operator_Station_instance>(() => _decode_Operator_Station_instance))(_el); },
        "eventConditions": (_el: _Element): void => { eventConditions = $._decode_implicit<Event_Condition_instance[]>(() => $._decodeSequenceOf<Event_Condition_instance>(() => _decode_Event_Condition_instance))(_el); },
        "eventActions": (_el: _Element): void => { eventActions = $._decode_implicit<Event_Action_instance[]>(() => $._decodeSequenceOf<Event_Action_instance>(() => _decode_Event_Action_instance))(_el); },
        "eventEnrollments": (_el: _Element): void => { eventEnrollments = $._decode_implicit<Event_Enrollment_instance[]>(() => $._decodeSequenceOf<Event_Enrollment_instance>(() => _decode_Event_Enrollment_instance))(_el); },
        "journals": (_el: _Element): void => { journals = $._decode_implicit<Journal_instance[]>(() => $._decodeSequenceOf<Journal_instance>(() => _decode_Journal_instance))(_el); },
        "eventConditionLists": (_el: _Element): void => { eventConditionLists = $._decode_implicit<Event_Condition_List_instance[]>(() => $._decodeSequenceOf<Event_Condition_List_instance>(() => _decode_Event_Condition_List_instance))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Access_Control_List_instance_definition_details,
        _extension_additions_list_spec_for_Access_Control_List_instance_definition_details,
        _root_component_type_list_2_spec_for_Access_Control_List_instance_definition_details,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Access_Control_List_instance_definition_details(
        accessControl,
        readAccessCondition,
        storeAccessCondition,
        writeAccessCondition,
        loadAccessCondition,
        executeAccessCondition,
        deleteAccessCondition,
        editAccessCondition,
        accessControlLists,
        domains,
        programInvocations,
        unitControls,
        unnamedVariables,
        unnamedVariables,
        namedVariables,
        namedVariableLists,
        namedVariableLists,
        namedTypes,
        namedVariables,
        namedVariableLists,
        namedTypes,
        dataExchanges,
        semaphores,
        operatorStations,
        eventConditions,
        eventActions,
        eventEnrollments,
        journals,
        eventConditionLists,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Access_Control_List_instance_definition_details(el);
}

let _cached_encoder_for_Access_Control_List_instance_definition_details: $.ASN1Encoder<Access_Control_List_instance_definition_details> | null = null;

/**
 * @summary Encodes a(n) Access_Control_List_instance_definition_details into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Access_Control_List_instance_definition_details, encoded as an ASN.1 Element.
 */
export
function _encode_Access_Control_List_instance_definition_details (value: Access_Control_List_instance_definition_details, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Access_Control_List_instance_definition_details) { _cached_encoder_for_Access_Control_List_instance_definition_details = function (value: Access_Control_List_instance_definition_details, elGetter: $.ASN1Encoder<Access_Control_List_instance_definition_details>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Access_Control_List_instance, $.BER)(value.accessControl, $.BER),
            /* IF_ABSENT  */ ((value.readAccessCondition === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_AccessCondition, $.BER)(value.readAccessCondition, $.BER)),
            /* IF_ABSENT  */ ((value.storeAccessCondition === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_AccessCondition, $.BER)(value.storeAccessCondition, $.BER)),
            /* IF_ABSENT  */ ((value.writeAccessCondition === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_AccessCondition, $.BER)(value.writeAccessCondition, $.BER)),
            /* IF_ABSENT  */ ((value.loadAccessCondition === undefined) ? undefined : $._encode_explicit(_TagClass.context, 7, () => _encode_AccessCondition, $.BER)(value.loadAccessCondition, $.BER)),
            /* IF_ABSENT  */ ((value.executeAccessCondition === undefined) ? undefined : $._encode_explicit(_TagClass.context, 8, () => _encode_AccessCondition, $.BER)(value.executeAccessCondition, $.BER)),
            /* IF_ABSENT  */ ((value.deleteAccessCondition === undefined) ? undefined : $._encode_explicit(_TagClass.context, 9, () => _encode_AccessCondition, $.BER)(value.deleteAccessCondition, $.BER)),
            /* IF_ABSENT  */ ((value.editAccessCondition === undefined) ? undefined : $._encode_explicit(_TagClass.context, 10, () => _encode_AccessCondition, $.BER)(value.editAccessCondition, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeSequenceOf<Access_Control_List_instance>(() => _encode_Access_Control_List_instance, $.BER), $.BER)(value.accessControlLists, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => $._encodeSequenceOf<Domain_instance>(() => _encode_Domain_instance, $.BER), $.BER)(value.domains, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeSequenceOf<Program_Invocation_instance>(() => _encode_Program_Invocation_instance, $.BER), $.BER)(value.programInvocations, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => $._encodeSequenceOf<Unit_Control_instance>(() => _encode_Unit_Control_instance, $.BER), $.BER)(value.unitControls, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => $._encodeSequenceOf<Unnamed_Variable_instance>(() => _encode_Unnamed_Variable_instance, $.BER), $.BER)(value.unnamedVariables, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => $._encodeNull, $.BER)(value.unnamedVariables, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => $._encodeSequenceOf<Named_Variable_instance>(() => _encode_Named_Variable_instance, $.BER), $.BER)(value.namedVariables, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 17, () => $._encodeSequenceOf<Named_Variable_List_instance>(() => _encode_Named_Variable_List_instance, $.BER), $.BER)(value.namedVariableLists, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 17, () => $._encodeNull, $.BER)(value.namedVariableLists, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 18, () => $._encodeSequenceOf<Named_Type_instance>(() => _encode_Named_Type_instance, $.BER), $.BER)(value.namedTypes, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => $._encodeNull, $.BER)(value.namedVariables, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 17, () => $._encodeNull, $.BER)(value.namedVariableLists, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 18, () => $._encodeNull, $.BER)(value.namedTypes, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 19, () => $._encodeSequenceOf<Data_Exchange_instance>(() => _encode_Data_Exchange_instance, $.BER), $.BER)(value.dataExchanges, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 20, () => $._encodeSequenceOf<Semaphore_instance>(() => _encode_Semaphore_instance, $.BER), $.BER)(value.semaphores, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 21, () => $._encodeSequenceOf<Operator_Station_instance>(() => _encode_Operator_Station_instance, $.BER), $.BER)(value.operatorStations, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 22, () => $._encodeSequenceOf<Event_Condition_instance>(() => _encode_Event_Condition_instance, $.BER), $.BER)(value.eventConditions, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 23, () => $._encodeSequenceOf<Event_Action_instance>(() => _encode_Event_Action_instance, $.BER), $.BER)(value.eventActions, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 24, () => $._encodeSequenceOf<Event_Enrollment_instance>(() => _encode_Event_Enrollment_instance, $.BER), $.BER)(value.eventEnrollments, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 25, () => $._encodeSequenceOf<Journal_instance>(() => _encode_Journal_instance, $.BER), $.BER)(value.journals, $.BER)
        ],
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 26, () => $._encodeSequenceOf<Event_Condition_List_instance>(() => _encode_Event_Condition_List_instance, $.BER), $.BER)(value.eventConditionLists, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Access_Control_List_instance_definition_details(value, elGetter);
}


/* eslint-enable */
