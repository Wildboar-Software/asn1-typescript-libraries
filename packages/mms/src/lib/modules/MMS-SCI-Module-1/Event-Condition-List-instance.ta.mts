/* eslint-disable */
import {
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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Event_Condition_List_instance_definition, _decode_Event_Condition_List_instance_definition, _encode_Event_Condition_List_instance_definition } from "../MMS-SCI-Module-1/Event-Condition-List-instance-definition.ta.mjs";
// export { Event_Condition_List_instance_definition, _decode_Event_Condition_List_instance_definition, _encode_Event_Condition_List_instance_definition } from "../MMS-SCI-Module-1/Event-Condition-List-instance-definition.ta.mjs";


/**
 * @summary Event_Condition_List_instance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Event-Condition-List-instance ::= SEQUENCE {
 *     name                [0] ObjectName,
 *     definition          CHOICE {
 *     reference              [1] IMPLICIT OBJECT IDENTIFIER,
 *     details                [2] IMPLICIT SEQUENCE {
 *         accessControl
 *             [3] IMPLICIT Access-Control-List-instance,
 *         eventConditions
 *             [4] IMPLICIT SEQUENCE OF Event-Condition-instance
 *     ,      eventConditionLists
 *             [5] IMPLICIT SEQUENCE OF Event-Condition-List-instance,
 *         referencingEventConditionLists
 *             [6] IMPLICIT SEQUENCE OF Event-Condition-List-instance
 *             }  }  }
 * ```
 * 
 * @class
 */
export
class Event_Condition_List_instance {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: ObjectName,
        /**
         * @summary `definition`.
         * @public
         * @readonly
         */
        readonly definition: Event_Condition_List_instance_definition
    ) {}

    /**
     * @summary Restructures an object into a Event_Condition_List_instance
     * @description
     * 
     * This takes an `object` and converts it to a `Event_Condition_List_instance`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Event_Condition_List_instance`.
     * @returns {Event_Condition_List_instance}
     */
    public static _from_object (_o: { [_K in keyof (Event_Condition_List_instance)]: (Event_Condition_List_instance)[_K] }): Event_Condition_List_instance {
        return new Event_Condition_List_instance(_o.name, _o.definition);
    }


}

/**
 * @summary The Leading Root Component Types of Event_Condition_List_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Event_Condition_List_instance: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("definition", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of Event_Condition_List_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Event_Condition_List_instance: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Event_Condition_List_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Event_Condition_List_instance: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Event_Condition_List_instance: $.ASN1Decoder<Event_Condition_List_instance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Event_Condition_List_instance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Event_Condition_List_instance (el: _Element): Event_Condition_List_instance {
    if (!_cached_decoder_for_Event_Condition_List_instance) { _cached_decoder_for_Event_Condition_List_instance = function (el: _Element): Event_Condition_List_instance {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Event-Condition-List-instance contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "name";
    sequence[1].name = "definition";
    let name!: ObjectName;
    let definition!: Event_Condition_List_instance_definition;
    name = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(sequence[0]);
    definition = _decode_Event_Condition_List_instance_definition(sequence[1]);
    return new Event_Condition_List_instance(
        name,
        definition,

    );
}; }
    return _cached_decoder_for_Event_Condition_List_instance(el);
}

let _cached_encoder_for_Event_Condition_List_instance: $.ASN1Encoder<Event_Condition_List_instance> | null = null;

/**
 * @summary Encodes a(n) Event_Condition_List_instance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Event_Condition_List_instance, encoded as an ASN.1 Element.
 */
export
function _encode_Event_Condition_List_instance (value: Event_Condition_List_instance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Event_Condition_List_instance) { _cached_encoder_for_Event_Condition_List_instance = function (value: Event_Condition_List_instance): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.name, $.BER),
            /* REQUIRED   */ _encode_Event_Condition_List_instance_definition(value.definition, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Event_Condition_List_instance(value, elGetter);
}


/* eslint-enable */
