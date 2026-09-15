/* eslint-disable */
import {
    BOOLEAN,
    NULL,
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
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
import { DomainState, _decode_DomainState, _encode_DomainState } from "../MMS-Object-Module-1/DomainState.ta.mjs";
// export { DomainState, DomainState_non_existent /* IMPORTED_LONG_NAMED_INTEGER */, non_existent /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_loading /* IMPORTED_LONG_NAMED_INTEGER */, loading /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_ready /* IMPORTED_LONG_NAMED_INTEGER */, ready /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_in_use /* IMPORTED_LONG_NAMED_INTEGER */, in_use /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_complete /* IMPORTED_LONG_NAMED_INTEGER */, complete /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_incomplete /* IMPORTED_LONG_NAMED_INTEGER */, incomplete /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d1 /* IMPORTED_LONG_NAMED_INTEGER */, d1 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d2 /* IMPORTED_LONG_NAMED_INTEGER */, d2 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d3 /* IMPORTED_LONG_NAMED_INTEGER */, d3 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d4 /* IMPORTED_LONG_NAMED_INTEGER */, d4 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d5 /* IMPORTED_LONG_NAMED_INTEGER */, d5 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d6 /* IMPORTED_LONG_NAMED_INTEGER */, d6 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d7 /* IMPORTED_LONG_NAMED_INTEGER */, d7 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d8 /* IMPORTED_LONG_NAMED_INTEGER */, d8 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d9 /* IMPORTED_LONG_NAMED_INTEGER */, d9 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DomainState, _encode_DomainState } from "../MMS-Object-Module-1/DomainState.ta.mjs";
import { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
// export { Access_Control_List_instance, _decode_Access_Control_List_instance, _encode_Access_Control_List_instance } from "../MMS-SCI-Module-1/Access-Control-List-instance.ta.mjs";
import { Program_Invocation_instance, _decode_Program_Invocation_instance, _encode_Program_Invocation_instance } from "../MMS-SCI-Module-1/Program-Invocation-instance.ta.mjs";
// export { Program_Invocation_instance, _decode_Program_Invocation_instance, _encode_Program_Invocation_instance } from "../MMS-SCI-Module-1/Program-Invocation-instance.ta.mjs";
import { Named_Variable_instance, _decode_Named_Variable_instance, _encode_Named_Variable_instance } from "../MMS-SCI-Module-1/Named-Variable-instance.ta.mjs";
// export { Named_Variable_instance, _decode_Named_Variable_instance, _encode_Named_Variable_instance } from "../MMS-SCI-Module-1/Named-Variable-instance.ta.mjs";
import { Named_Variable_List_instance, _decode_Named_Variable_List_instance, _encode_Named_Variable_List_instance } from "../MMS-SCI-Module-1/Named-Variable-List-instance.ta.mjs";
// export { Named_Variable_List_instance, _decode_Named_Variable_List_instance, _encode_Named_Variable_List_instance } from "../MMS-SCI-Module-1/Named-Variable-List-instance.ta.mjs";
import { Named_Type_instance, _decode_Named_Type_instance, _encode_Named_Type_instance } from "../MMS-SCI-Module-1/Named-Type-instance.ta.mjs";
// export { Named_Type_instance, _decode_Named_Type_instance, _encode_Named_Type_instance } from "../MMS-SCI-Module-1/Named-Type-instance.ta.mjs";
import { Event_Condition_instance, _decode_Event_Condition_instance, _encode_Event_Condition_instance } from "../MMS-SCI-Module-1/Event-Condition-instance.ta.mjs";
// export { Event_Condition_instance, _decode_Event_Condition_instance, _encode_Event_Condition_instance } from "../MMS-SCI-Module-1/Event-Condition-instance.ta.mjs";
import { Event_Action_instance, _decode_Event_Action_instance, _encode_Event_Action_instance } from "../MMS-SCI-Module-1/Event-Action-instance.ta.mjs";
// export { Event_Action_instance, _decode_Event_Action_instance, _encode_Event_Action_instance } from "../MMS-SCI-Module-1/Event-Action-instance.ta.mjs";
import { Event_Enrollment_instance, _decode_Event_Enrollment_instance, _encode_Event_Enrollment_instance } from "../MMS-SCI-Module-1/Event-Enrollment-instance.ta.mjs";
// export { Event_Enrollment_instance, _decode_Event_Enrollment_instance, _encode_Event_Enrollment_instance } from "../MMS-SCI-Module-1/Event-Enrollment-instance.ta.mjs";
import { Event_Condition_List_instance, _decode_Event_Condition_List_instance, _encode_Event_Condition_List_instance } from "../MMS-SCI-Module-1/Event-Condition-List-instance.ta.mjs";
// export { Event_Condition_List_instance, _decode_Event_Condition_List_instance, _encode_Event_Condition_List_instance } from "../MMS-SCI-Module-1/Event-Condition-List-instance.ta.mjs";


/**
 * @summary Domain_instance_definition_details
 * @description
 * 
 * Inline Domain
 * attributes in the SCI file (AA and uploadsInProgress omitted).
 * SCI configuration/initialization encoding (ISO 9506-2:2003 Annex B), not a
 * runtime MMS PDU. ISO 9506-2:2003 Annex B.1.2; ISO 9506-1:2003 §11.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Domain-instance-definition-details ::= SEQUENCE {
 *     capabilities [3] IMPLICIT SEQUENCE OF MMSString,
 *     state [4] IMPLICIT DomainState,
 *     -- The aAssociation is not included
 *     accessControl [5] IMPLICIT Access-Control-List-instance,
 *     sharable [6] IMPLICIT BOOLEAN,
 *     programInvocations [7] IMPLICIT SEQUENCE OF Program-Invocation-instance -- uploadsInProgress  is not included
 *     ,
 *     namedVariables [8] IMPLICIT SEQUENCE OF Named-Variable-instance,
 *     namedVariableLists [9] IMPLICIT SEQUENCE OF Named-Variable-List-instance,
 *     namedVariableLists [9] IMPLICIT NULL,
 *     namedTypes [10] IMPLICIT SEQUENCE OF Named-Type-instance,
 *     namedVariables [8] IMPLICIT NULL,
 *     namedVariableLists [9] IMPLICIT NULL,
 *     namedTypes [10] IMPLICIT NULL,
 *     eventConditions [11] IMPLICIT SEQUENCE OF Event-Condition-instance,
 *     eventActions [12] IMPLICIT SEQUENCE OF Event-Action-instance,
 *     eventEnrollments [13] IMPLICIT SEQUENCE OF Event-Enrollment-instance,
 *     eventConditionLists [14] IMPLICIT SEQUENCE OF Event-Condition-List-instance
 * }
 * ```
 * 
 * @class
 */
export
class Domain_instance_definition_details {
    constructor (
        /**
         * @summary `capabilities`.
         * @description
         *
         * Configured capability strings. ISO 9506-1:2003 §7.2.1.10; ISO
         * 9506-2:2003 Annex B.1.
         *
         * @public
         * @readonly
         */
        readonly capabilities: MMSString[],
        /**
         * @summary `state`.
         * @description
         *
         * Configured DomainState (or other object state in context). ISO
         * 9506-2:2003 Annex B.
         *
         * @public
         * @readonly
         */
        readonly state: DomainState,
        /**
         * @summary `accessControl`.
         * @description
         *
         * SCI encoding of the object's ACL (ISO 9506-1:2003 §9). ISO
         * 9506-2:2003 Annex B.
         *
         * @public
         * @readonly
         */
        readonly accessControl: Access_Control_List_instance,
        /**
         * @summary `sharable`.
         * @description
         *
         * Whether the Domain may be used by more than one PI. ISO 9506-1:2003
         * §11.1.1.6; ISO 9506-2:2003 Annex B.1.2.
         *
         * @public
         * @readonly
         */
        readonly sharable: BOOLEAN,
        /**
         * @summary `programInvocations`.
         * @description
         *
         * Configured Program Invocation instances. ISO 9506-2:2003 Annex B.1.3.
         *
         * @public
         * @readonly
         */
        readonly programInvocations: Program_Invocation_instance[],
        /**
         * @summary `namedVariables`.
         * @description
         *
         * Configured Named Variables (or NULL if not vnam). ISO 9506-2:2003
         * Annex B.1.6.
         *
         * @public
         * @readonly
         */
        readonly namedVariables: Named_Variable_instance[] | NULL,
        /**
         * @summary `namedVariableLists`.
         * @description
         *
         * Configured Named Variable Lists (or NULL if not vlis). ISO
         * 9506-2:2003 Annex B.1.7.
         *
         * @public
         * @readonly
         */
        readonly namedVariableLists: Named_Variable_List_instance[] | NULL,
        /**
         * @summary `namedTypes`.
         * @description
         *
         * Configured Named Types (or NULL if not vnam). ISO 9506-2:2003 Annex
         * B.1.8.
         *
         * @public
         * @readonly
         */
        readonly namedTypes: Named_Type_instance[] | NULL,
        /**
         * @summary `eventConditions`.
         * @description
         *
         * Configured Event Condition instances. ISO 9506-2:2003 Annex B.1.12.
         *
         * @public
         * @readonly
         */
        readonly eventConditions: Event_Condition_instance[],
        /**
         * @summary `eventActions`.
         * @description
         *
         * Configured Event Action instances. ISO 9506-2:2003 Annex B.1.13.
         *
         * @public
         * @readonly
         */
        readonly eventActions: Event_Action_instance[],
        /**
         * @summary `eventEnrollments`.
         * @description
         *
         * Configured Event Enrollment instances. ISO 9506-2:2003 Annex B.1.14.
         *
         * @public
         * @readonly
         */
        readonly eventEnrollments: Event_Enrollment_instance[],
        /**
         * @summary `eventConditionLists`.
         * @description
         *
         * Configured Event Condition Lists (or NULL if not cspi). ISO
         * 9506-2:2003 Annex B.1.15.
         *
         * @public
         * @readonly
         */
        readonly eventConditionLists: Event_Condition_List_instance[]
    ) {}

    /**
     * @summary Restructures an object into a Domain_instance_definition_details
     * @description
     * 
     * This takes an `object` and converts it to a `Domain_instance_definition_details`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Domain_instance_definition_details`.
     * @returns {Domain_instance_definition_details}
     */
    public static _from_object (_o: { [_K in keyof (Domain_instance_definition_details)]: (Domain_instance_definition_details)[_K] }): Domain_instance_definition_details {
        return new Domain_instance_definition_details(_o.capabilities, _o.state, _o.accessControl, _o.sharable, _o.programInvocations, _o.namedVariables, _o.namedVariableLists, _o.namedTypes, _o.eventConditions, _o.eventActions, _o.eventEnrollments, _o.eventConditionLists);
    }


}

/**
 * @summary The Leading Root Component Types of Domain_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Domain_instance_definition_details: $.ComponentSpec[] = [
    new $.ComponentSpec("capabilities", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("state", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("accessControl", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("sharable", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("programInvocations", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("namedVariables", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("namedVariableLists", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("namedTypes", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("eventConditions", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("eventActions", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("eventEnrollments", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("eventConditionLists", false, $.hasTag(_TagClass.context, 14))
];

/**
 * @summary The Trailing Root Component Types of Domain_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Domain_instance_definition_details: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Domain_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Domain_instance_definition_details: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Domain_instance_definition_details: $.ASN1Decoder<Domain_instance_definition_details> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Domain_instance_definition_details
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Domain_instance_definition_details (el: _Element): Domain_instance_definition_details {
    if (!_cached_decoder_for_Domain_instance_definition_details) { _cached_decoder_for_Domain_instance_definition_details = function (el: _Element): Domain_instance_definition_details {
    let capabilities!: MMSString[];
    let state!: DomainState;
    let accessControl!: Access_Control_List_instance;
    let sharable!: BOOLEAN;
    let programInvocations!: Program_Invocation_instance[];
    let namedVariables!: Named_Variable_instance[] | NULL;
    let namedVariableLists!: Named_Variable_List_instance[] | NULL;
    let namedTypes!: Named_Type_instance[] | NULL;
    let eventConditions!: Event_Condition_instance[];
    let eventActions!: Event_Action_instance[];
    let eventEnrollments!: Event_Enrollment_instance[];
    let eventConditionLists!: Event_Condition_List_instance[];
    const callbacks: $.DecodingMap = {
        "capabilities": (_el: _Element): void => { capabilities = $._decode_implicit<MMSString[]>(() => $._decodeSequenceOf<MMSString>(() => _decode_MMSString))(_el); },
        "state": (_el: _Element): void => { state = $._decode_implicit<DomainState>(() => _decode_DomainState)(_el); },
        "accessControl": (_el: _Element): void => { accessControl = $._decode_implicit<Access_Control_List_instance>(() => _decode_Access_Control_List_instance)(_el); },
        "sharable": (_el: _Element): void => { sharable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "programInvocations": (_el: _Element): void => { programInvocations = $._decode_implicit<Program_Invocation_instance[]>(() => $._decodeSequenceOf<Program_Invocation_instance>(() => _decode_Program_Invocation_instance))(_el); },
        "namedVariables": (_el: _Element): void => { namedVariables = ((_el.construction === _Construction.primitive && _el.value.length === 0)
            ? $._decode_implicit<NULL>(() => $._decodeNull)(_el)
            : $._decode_implicit<Named_Variable_instance[]>(() => $._decodeSequenceOf<Named_Variable_instance>(() => _decode_Named_Variable_instance))(_el)); },
        "namedVariableLists": (_el: _Element): void => { namedVariableLists = ((_el.construction === _Construction.primitive && _el.value.length === 0)
            ? $._decode_implicit<NULL>(() => $._decodeNull)(_el)
            : $._decode_implicit<Named_Variable_List_instance[]>(() => $._decodeSequenceOf<Named_Variable_List_instance>(() => _decode_Named_Variable_List_instance))(_el)); },
        "namedTypes": (_el: _Element): void => { namedTypes = ((_el.construction === _Construction.primitive && _el.value.length === 0)
            ? $._decode_implicit<NULL>(() => $._decodeNull)(_el)
            : $._decode_implicit<Named_Type_instance[]>(() => $._decodeSequenceOf<Named_Type_instance>(() => _decode_Named_Type_instance))(_el)); },
        "eventConditions": (_el: _Element): void => { eventConditions = $._decode_implicit<Event_Condition_instance[]>(() => $._decodeSequenceOf<Event_Condition_instance>(() => _decode_Event_Condition_instance))(_el); },
        "eventActions": (_el: _Element): void => { eventActions = $._decode_implicit<Event_Action_instance[]>(() => $._decodeSequenceOf<Event_Action_instance>(() => _decode_Event_Action_instance))(_el); },
        "eventEnrollments": (_el: _Element): void => { eventEnrollments = $._decode_implicit<Event_Enrollment_instance[]>(() => $._decodeSequenceOf<Event_Enrollment_instance>(() => _decode_Event_Enrollment_instance))(_el); },
        "eventConditionLists": (_el: _Element): void => { eventConditionLists = $._decode_implicit<Event_Condition_List_instance[]>(() => $._decodeSequenceOf<Event_Condition_List_instance>(() => _decode_Event_Condition_List_instance))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Domain_instance_definition_details,
        _extension_additions_list_spec_for_Domain_instance_definition_details,
        _root_component_type_list_2_spec_for_Domain_instance_definition_details,
        () => { /* no unrecognized extensions */ },
    );
    return new Domain_instance_definition_details(
        capabilities,
        state,
        accessControl,
        sharable,
        programInvocations,
        namedVariables,
        namedVariableLists,
        namedTypes,
        eventConditions,
        eventActions,
        eventEnrollments,
        eventConditionLists,
    );
}; }
    return _cached_decoder_for_Domain_instance_definition_details(el);
}

let _cached_encoder_for_Domain_instance_definition_details: $.ASN1Encoder<Domain_instance_definition_details> | null = null;

/**
 * @summary Encodes a(n) Domain_instance_definition_details into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Domain_instance_definition_details, encoded as an ASN.1 Element.
 */
export
function _encode_Domain_instance_definition_details (value: Domain_instance_definition_details, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Domain_instance_definition_details) { _cached_encoder_for_Domain_instance_definition_details = function (value: Domain_instance_definition_details): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<MMSString>(() => _encode_MMSString, $.BER), $.BER)(value.capabilities, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_DomainState, $.BER)(value.state, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_Access_Control_List_instance, $.BER)(value.accessControl, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.sharable, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<Program_Invocation_instance>(() => _encode_Program_Invocation_instance, $.BER), $.BER)(value.programInvocations, $.BER),
            /* REQUIRED   */ ((value.namedVariables === null) ? $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER)(value.namedVariables, $.BER) : $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<Named_Variable_instance>(() => _encode_Named_Variable_instance, $.BER), $.BER)(value.namedVariables, $.BER)),
            /* REQUIRED   */ ((value.namedVariableLists === null) ? $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER)(value.namedVariableLists, $.BER) : $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<Named_Variable_List_instance>(() => _encode_Named_Variable_List_instance, $.BER), $.BER)(value.namedVariableLists, $.BER)),
            /* REQUIRED   */ ((value.namedTypes === null) ? $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER)(value.namedTypes, $.BER) : $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<Named_Type_instance>(() => _encode_Named_Type_instance, $.BER), $.BER)(value.namedTypes, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeSequenceOf<Event_Condition_instance>(() => _encode_Event_Condition_instance, $.BER), $.BER)(value.eventConditions, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => $._encodeSequenceOf<Event_Action_instance>(() => _encode_Event_Action_instance, $.BER), $.BER)(value.eventActions, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeSequenceOf<Event_Enrollment_instance>(() => _encode_Event_Enrollment_instance, $.BER), $.BER)(value.eventEnrollments, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => $._encodeSequenceOf<Event_Condition_List_instance>(() => _encode_Event_Condition_List_instance, $.BER), $.BER)(value.eventConditionLists, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Domain_instance_definition_details(value, elGetter);
}


/* eslint-enable */
