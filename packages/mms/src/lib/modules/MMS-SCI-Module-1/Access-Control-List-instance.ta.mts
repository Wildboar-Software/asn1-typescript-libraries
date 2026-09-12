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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { Access_Control_List_instance_definition, _decode_Access_Control_List_instance_definition, _encode_Access_Control_List_instance_definition } from "../MMS-SCI-Module-1/Access-Control-List-instance-definition.ta.mjs";
// export { Access_Control_List_instance_definition, _decode_Access_Control_List_instance_definition, _encode_Access_Control_List_instance_definition } from "../MMS-SCI-Module-1/Access-Control-List-instance-definition.ta.mjs";


/**
 * @summary Access_Control_List_instance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Access-Control-List-instance ::= SEQUENCE {
 *     name                   [0] IMPLICIT Identifier,
 *     definition             CHOICE {
 *         reference              [1] IMPLICIT OBJECT IDENTIFIER,
 *         details                [2] IMPLICIT SEQUENCE {
 *             accessControl
 *                 [3] IMPLICIT Access-Control-List-instance,
 *             readAccessCondition
 *                 [4] AccessCondition OPTIONAL,
 *             storeAccessCondition
 *                 [5] AccessCondition OPTIONAL,
 *             writeAccessCondition
 *                 [6] AccessCondition OPTIONAL,
 *             loadAccessCondition
 *                 [7] AccessCondition OPTIONAL,
 *             executeAccessCondition
 *                 [8] AccessCondition OPTIONAL,
 *             deleteAccessCondition
 *                 [9] AccessCondition OPTIONAL,
 *             editAccessCondition
 *                 [10] AccessCondition OPTIONAL,
 *     --
 *     -- The following fields are used to record lists of objects placed
 *     -- under the control of this ACCESS-CONTROL-LIST object.
 *     -- They will be referred to collectively as the Controlled Object Lists
 *     --
 *             accessControlLists
 *                 [11] IMPLICIT SEQUENCE OF Access-Control-List-instance,
 *             domains
 *                 [12] IMPLICIT SEQUENCE OF Domain-instance,
 *             programInvocations
 *                 [13] IMPLICIT SEQUENCE OF Program-Invocation-instance,
 *             unitControls
 *                 [14] IMPLICIT SEQUENCE OF Unit-Control-instance
 *     ,         unnamedVariables
 *                 [15] IMPLICIT SEQUENCE OF Unnamed-Variable-instance
 *     ,         unnamedVariables
 *                 [15] IMPLICIT NULL
 *     ,         namedVariables
 *                 [16] IMPLICIT SEQUENCE OF Named-Variable-instance
 *     ,         namedVariableLists
 *                 [17] IMPLICIT SEQUENCE OF Named-Variable-List-instance
 *     ,         namedVariableLists
 *                 [17] IMPLICIT NULL
 *     ,         namedTypes
 *                 [18] IMPLICIT SEQUENCE OF Named-Type-instance
 *     ,         namedVariables
 *                 [16] IMPLICIT NULL,
 *             namedVariableLists
 *                 [17] IMPLICIT NULL,
 *             namedTypes
 *                 [18] IMPLICIT NULL
 *     ,         dataExchanges
 *                 [19] IMPLICIT SEQUENCE OF Data-Exchange-instance,
 *             semaphores
 *                 [20] IMPLICIT SEQUENCE OF Semaphore-instance,
 *             operatorStations
 *                 [21] IMPLICIT SEQUENCE OF Operator-Station-instance,
 *             eventConditions
 *                 [22] IMPLICIT SEQUENCE OF Event-Condition-instance,
 *             eventActions
 *                 [23] IMPLICIT SEQUENCE OF Event-Action-instance,
 *             eventEnrollments
 *                 [24] IMPLICIT SEQUENCE OF Event-Enrollment-instance,
 *             journals
 *                 [25] IMPLICIT SEQUENCE OF Journal-instance,
 *             ...
 *     ,         eventConditionLists
 *                 [26] IMPLICIT SEQUENCE OF Event-Condition-List-instance
 *             }  }  }
 * ```
 * 
 * @class
 */
export
class Access_Control_List_instance {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: Identifier,
        /**
         * @summary `definition`.
         * @public
         * @readonly
         */
        readonly definition: Access_Control_List_instance_definition
    ) {}

    /**
     * @summary Restructures an object into a Access_Control_List_instance
     * @description
     * 
     * This takes an `object` and converts it to a `Access_Control_List_instance`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Access_Control_List_instance`.
     * @returns {Access_Control_List_instance}
     */
    public static _from_object (_o: { [_K in keyof (Access_Control_List_instance)]: (Access_Control_List_instance)[_K] }): Access_Control_List_instance {
        return new Access_Control_List_instance(_o.name, _o.definition);
    }


}

/**
 * @summary The Leading Root Component Types of Access_Control_List_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Access_Control_List_instance: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("definition", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of Access_Control_List_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Access_Control_List_instance: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Access_Control_List_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Access_Control_List_instance: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Access_Control_List_instance: $.ASN1Decoder<Access_Control_List_instance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Access_Control_List_instance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Access_Control_List_instance (el: _Element): Access_Control_List_instance {
    if (!_cached_decoder_for_Access_Control_List_instance) { _cached_decoder_for_Access_Control_List_instance = function (el: _Element): Access_Control_List_instance {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Access-Control-List-instance contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "name";
    sequence[1].name = "definition";
    let name!: Identifier;
    let definition!: Access_Control_List_instance_definition;
    name = $._decode_explicit<Identifier>(() => _decode_Identifier)(sequence[0]);
    definition = _decode_Access_Control_List_instance_definition(sequence[1]);
    return new Access_Control_List_instance(
        name,
        definition,

    );
}; }
    return _cached_decoder_for_Access_Control_List_instance(el);
}

let _cached_encoder_for_Access_Control_List_instance: $.ASN1Encoder<Access_Control_List_instance> | null = null;

/**
 * @summary Encodes a(n) Access_Control_List_instance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Access_Control_List_instance, encoded as an ASN.1 Element.
 */
export
function _encode_Access_Control_List_instance (value: Access_Control_List_instance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Access_Control_List_instance) { _cached_encoder_for_Access_Control_List_instance = function (value: Access_Control_List_instance, elGetter: $.ASN1Encoder<Access_Control_List_instance>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.name, $.BER),
            /* REQUIRED   */ _encode_Access_Control_List_instance_definition(value.definition, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Access_Control_List_instance(value, elGetter);
}


/* eslint-enable */
