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
import { Event_Condition_instance, _decode_Event_Condition_instance, _encode_Event_Condition_instance } from "../MMS-SCI-Module-1/Event-Condition-instance.ta.mjs";
// export { Event_Condition_instance, _decode_Event_Condition_instance, _encode_Event_Condition_instance } from "../MMS-SCI-Module-1/Event-Condition-instance.ta.mjs";
import { Event_Condition_List_instance, _decode_Event_Condition_List_instance, _encode_Event_Condition_List_instance } from "../MMS-SCI-Module-1/Event-Condition-List-instance.ta.mjs";
// export { Event_Condition_List_instance, _decode_Event_Condition_List_instance, _encode_Event_Condition_List_instance } from "../MMS-SCI-Module-1/Event-Condition-List-instance.ta.mjs";


/**
 * @summary Event_Condition_List_instance_definition_details
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Event-Condition-List-instance-definition-details ::= SEQUENCE {
 *     accessControl [3] IMPLICIT Access-Control-List-instance,
 *     eventConditions [4] IMPLICIT SEQUENCE OF Event-Condition-instance,
 *     eventConditionLists [5] IMPLICIT SEQUENCE OF Event-Condition-List-instance,
 *     referencingEventConditionLists [6] IMPLICIT SEQUENCE OF Event-Condition-List-instance
 * }
 * ```
 * 
 * @class
 */
export
class Event_Condition_List_instance_definition_details {
    constructor (
        /**
         * @summary `accessControl`.
         * @public
         * @readonly
         */
        readonly accessControl: Access_Control_List_instance,
        /**
         * @summary `eventConditions`.
         * @public
         * @readonly
         */
        readonly eventConditions: Event_Condition_instance[],
        /**
         * @summary `eventConditionLists`.
         * @public
         * @readonly
         */
        readonly eventConditionLists: Event_Condition_List_instance[],
        /**
         * @summary `referencingEventConditionLists`.
         * @public
         * @readonly
         */
        readonly referencingEventConditionLists: Event_Condition_List_instance[]
    ) {}

    /**
     * @summary Restructures an object into a Event_Condition_List_instance_definition_details
     * @description
     * 
     * This takes an `object` and converts it to a `Event_Condition_List_instance_definition_details`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Event_Condition_List_instance_definition_details`.
     * @returns {Event_Condition_List_instance_definition_details}
     */
    public static _from_object (_o: { [_K in keyof (Event_Condition_List_instance_definition_details)]: (Event_Condition_List_instance_definition_details)[_K] }): Event_Condition_List_instance_definition_details {
        return new Event_Condition_List_instance_definition_details(_o.accessControl, _o.eventConditions, _o.eventConditionLists, _o.referencingEventConditionLists);
    }


}

/**
 * @summary The Leading Root Component Types of Event_Condition_List_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Event_Condition_List_instance_definition_details: $.ComponentSpec[] = [
    new $.ComponentSpec("accessControl", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("eventConditions", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("eventConditionLists", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("referencingEventConditionLists", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of Event_Condition_List_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Event_Condition_List_instance_definition_details: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Event_Condition_List_instance_definition_details
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Event_Condition_List_instance_definition_details: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Event_Condition_List_instance_definition_details: $.ASN1Decoder<Event_Condition_List_instance_definition_details> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Event_Condition_List_instance_definition_details
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Event_Condition_List_instance_definition_details (el: _Element): Event_Condition_List_instance_definition_details {
    if (!_cached_decoder_for_Event_Condition_List_instance_definition_details) { _cached_decoder_for_Event_Condition_List_instance_definition_details = function (el: _Element): Event_Condition_List_instance_definition_details {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("Event-Condition-List-instance-definition-details contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "accessControl";
    sequence[1].name = "eventConditions";
    sequence[2].name = "eventConditionLists";
    sequence[3].name = "referencingEventConditionLists";
    let accessControl!: Access_Control_List_instance;
    let eventConditions!: Event_Condition_instance[];
    let eventConditionLists!: Event_Condition_List_instance[];
    let referencingEventConditionLists!: Event_Condition_List_instance[];
    accessControl = $._decode_implicit<Access_Control_List_instance>(() => _decode_Access_Control_List_instance)(sequence[0]);
    eventConditions = $._decode_implicit<Event_Condition_instance[]>(() => $._decodeSequenceOf<Event_Condition_instance>(() => _decode_Event_Condition_instance))(sequence[1]);
    eventConditionLists = $._decode_implicit<Event_Condition_List_instance[]>(() => $._decodeSequenceOf<Event_Condition_List_instance>(() => _decode_Event_Condition_List_instance))(sequence[2]);
    referencingEventConditionLists = $._decode_implicit<Event_Condition_List_instance[]>(() => $._decodeSequenceOf<Event_Condition_List_instance>(() => _decode_Event_Condition_List_instance))(sequence[3]);
    return new Event_Condition_List_instance_definition_details(
        accessControl,
        eventConditions,
        eventConditionLists,
        referencingEventConditionLists,

    );
}; }
    return _cached_decoder_for_Event_Condition_List_instance_definition_details(el);
}

let _cached_encoder_for_Event_Condition_List_instance_definition_details: $.ASN1Encoder<Event_Condition_List_instance_definition_details> | null = null;

/**
 * @summary Encodes a(n) Event_Condition_List_instance_definition_details into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Event_Condition_List_instance_definition_details, encoded as an ASN.1 Element.
 */
export
function _encode_Event_Condition_List_instance_definition_details (value: Event_Condition_List_instance_definition_details, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Event_Condition_List_instance_definition_details) { _cached_encoder_for_Event_Condition_List_instance_definition_details = function (value: Event_Condition_List_instance_definition_details, elGetter: $.ASN1Encoder<Event_Condition_List_instance_definition_details>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Access_Control_List_instance, $.BER)(value.accessControl, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<Event_Condition_instance>(() => _encode_Event_Condition_instance, $.BER), $.BER)(value.eventConditions, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<Event_Condition_List_instance>(() => _encode_Event_Condition_List_instance, $.BER), $.BER)(value.eventConditionLists, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<Event_Condition_List_instance>(() => _encode_Event_Condition_List_instance, $.BER), $.BER)(value.referencingEventConditionLists, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Event_Condition_List_instance_definition_details(value, elGetter);
}


/* eslint-enable */
