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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Event_Action_instance_definition, _decode_Event_Action_instance_definition, _encode_Event_Action_instance_definition } from "../MMS-SCI-Module-1/Event-Action-instance-definition.ta.mjs";
// export { Event_Action_instance_definition, _decode_Event_Action_instance_definition, _encode_Event_Action_instance_definition } from "../MMS-SCI-Module-1/Event-Action-instance-definition.ta.mjs";


/**
 * @summary Event_Action_instance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Event-Action-instance ::= SEQUENCE {
 *     name                   [0] ObjectName,
 *     definition             CHOICE {
 *         reference           [1] IMPLICIT OBJECT IDENTIFIER,
 *         details                [2] IMPLICIT SEQUENCE {
 *             accessControl          [3] IMPLICIT Access-Control-List-instance,
 *             confirmedServiceRequest    [4] ConfirmedServiceRequest,
 *             modifiers              [5] IMPLICIT SEQUENCE OF Modifier,
 *             eventEnrollments       [6] IMPLICIT SEQUENCE OF Event-Enrollment-instance
 *             }  }  }
 * ```
 * 
 * @class
 */
export
class Event_Action_instance {
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
        readonly definition: Event_Action_instance_definition
    ) {}

    /**
     * @summary Restructures an object into a Event_Action_instance
     * @description
     * 
     * This takes an `object` and converts it to a `Event_Action_instance`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Event_Action_instance`.
     * @returns {Event_Action_instance}
     */
    public static _from_object (_o: { [_K in keyof (Event_Action_instance)]: (Event_Action_instance)[_K] }): Event_Action_instance {
        return new Event_Action_instance(_o.name, _o.definition);
    }


}

/**
 * @summary The Leading Root Component Types of Event_Action_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Event_Action_instance: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("definition", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of Event_Action_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Event_Action_instance: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Event_Action_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Event_Action_instance: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Event_Action_instance: $.ASN1Decoder<Event_Action_instance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Event_Action_instance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Event_Action_instance (el: _Element): Event_Action_instance {
    if (!_cached_decoder_for_Event_Action_instance) { _cached_decoder_for_Event_Action_instance = function (el: _Element): Event_Action_instance {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Event-Action-instance contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "name";
    sequence[1].name = "definition";
    let name!: ObjectName;
    let definition!: Event_Action_instance_definition;
    name = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(sequence[0]);
    definition = _decode_Event_Action_instance_definition(sequence[1]);
    return new Event_Action_instance(
        name,
        definition,

    );
}; }
    return _cached_decoder_for_Event_Action_instance(el);
}

let _cached_encoder_for_Event_Action_instance: $.ASN1Encoder<Event_Action_instance> | null = null;

/**
 * @summary Encodes a(n) Event_Action_instance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Event_Action_instance, encoded as an ASN.1 Element.
 */
export
function _encode_Event_Action_instance (value: Event_Action_instance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Event_Action_instance) { _cached_encoder_for_Event_Action_instance = function (value: Event_Action_instance, elGetter: $.ASN1Encoder<Event_Action_instance>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.name, $.BER),
            /* REQUIRED   */ _encode_Event_Action_instance_definition(value.definition, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Event_Action_instance(value, elGetter);
}


/* eslint-enable */
