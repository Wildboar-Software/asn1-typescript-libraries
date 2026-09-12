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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { Domain_instance_definition, _decode_Domain_instance_definition, _encode_Domain_instance_definition } from "../MMS-SCI-Module-1/Domain-instance-definition.ta.mjs";
// export { Domain_instance_definition, _decode_Domain_instance_definition, _encode_Domain_instance_definition } from "../MMS-SCI-Module-1/Domain-instance-definition.ta.mjs";


/**
 * @summary Domain_instance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Domain-instance ::= SEQUENCE {
 *     name                [0] IMPLICIT Identifier,
 *     definition          CHOICE {
 *         reference           [1] IMPLICIT OBJECT IDENTIFIER,
 *         details             [2] IMPLICIT SEQUENCE {
 *             capabilities        [3] IMPLICIT SEQUENCE OF MMSString,
 *             state               [4] IMPLICIT DomainState,
 *     -- The aAssociation is not included
 *             accessControl
 *                 [5] IMPLICIT Access-Control-List-instance,
 *     sharable                   [6] IMPLICIT BOOLEAN,
 *     programInvocations
 *                 [7] IMPLICIT SEQUENCE OF Program-Invocation-instance
 *     -- uploadsInProgress  is not included
 *     ,  namedVariables
 *                 [8] IMPLICIT SEQUENCE OF Named-Variable-instance
 *     ,  namedVariableLists
 *                 [9] IMPLICIT SEQUENCE OF Named-Variable-List-instance
 *     ,  namedVariableLists
 *                 [9] IMPLICIT NULL
 *     ,  namedTypes
 *                 [10] IMPLICIT SEQUENCE OF Named-Type-instance
 *     ,  namedVariables
 *                 [8] IMPLICIT NULL,
 *     namedVariableLists
 *                 [9] IMPLICIT NULL,
 *     namedTypes
 *                 [10] IMPLICIT NULL
 *     ,  eventConditions
 *                 [11] IMPLICIT SEQUENCE OF Event-Condition-instance,
 *     eventActions
 *                 [12] IMPLICIT SEQUENCE OF Event-Action-instance,
 *     eventEnrollments
 *                 [13] IMPLICIT SEQUENCE OF Event-Enrollment-instance
 *     ,  eventConditionLists
 *                 [14] IMPLICIT SEQUENCE OF Event-Condition-List-instance
 *             }  }  }
 * ```
 * 
 * @class
 */
export
class Domain_instance {
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
        readonly definition: Domain_instance_definition
    ) {}

    /**
     * @summary Restructures an object into a Domain_instance
     * @description
     * 
     * This takes an `object` and converts it to a `Domain_instance`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Domain_instance`.
     * @returns {Domain_instance}
     */
    public static _from_object (_o: { [_K in keyof (Domain_instance)]: (Domain_instance)[_K] }): Domain_instance {
        return new Domain_instance(_o.name, _o.definition);
    }


}

/**
 * @summary The Leading Root Component Types of Domain_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Domain_instance: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("definition", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of Domain_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Domain_instance: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Domain_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Domain_instance: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Domain_instance: $.ASN1Decoder<Domain_instance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Domain_instance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Domain_instance (el: _Element): Domain_instance {
    if (!_cached_decoder_for_Domain_instance) { _cached_decoder_for_Domain_instance = function (el: _Element): Domain_instance {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Domain-instance contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "name";
    sequence[1].name = "definition";
    let name!: Identifier;
    let definition!: Domain_instance_definition;
    name = $._decode_explicit<Identifier>(() => _decode_Identifier)(sequence[0]);
    definition = _decode_Domain_instance_definition(sequence[1]);
    return new Domain_instance(
        name,
        definition,

    );
}; }
    return _cached_decoder_for_Domain_instance(el);
}

let _cached_encoder_for_Domain_instance: $.ASN1Encoder<Domain_instance> | null = null;

/**
 * @summary Encodes a(n) Domain_instance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Domain_instance, encoded as an ASN.1 Element.
 */
export
function _encode_Domain_instance (value: Domain_instance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Domain_instance) { _cached_encoder_for_Domain_instance = function (value: Domain_instance): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.name, $.BER),
            /* REQUIRED   */ _encode_Domain_instance_definition(value.definition, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Domain_instance(value, elGetter);
}


/* eslint-enable */
