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
import { Unit_Control_instance_definition, _decode_Unit_Control_instance_definition, _encode_Unit_Control_instance_definition } from "../MMS-SCI-Module-1/Unit-Control-instance-definition.ta.mjs";
// export { Unit_Control_instance_definition, _decode_Unit_Control_instance_definition, _encode_Unit_Control_instance_definition } from "../MMS-SCI-Module-1/Unit-Control-instance-definition.ta.mjs";


/**
 * @summary Unit_Control_instance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Unit-Control-instance ::= SEQUENCE {
 *     name             [0] IMPLICIT Identifier,
 *     definition       CHOICE {
 *         reference        [1] IMPLICIT OBJECT IDENTIFIER,
 *         details             [2] IMPLICIT SEQUENCE {
 *             accessControl
 *                 [3] IMPLICIT Access-Control-List-instance,
 *             domains
 *                 [4] IMPLICIT SEQUENCE OF Domain-instance,
 *             programInvocations
 *                 [5] IMPLICIT SEQUENCE OF Program-Invocation-instance
 *             }  }  }
 * ```
 * 
 * @class
 */
export
class Unit_Control_instance {
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
        readonly definition: Unit_Control_instance_definition
    ) {}

    /**
     * @summary Restructures an object into a Unit_Control_instance
     * @description
     * 
     * This takes an `object` and converts it to a `Unit_Control_instance`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Unit_Control_instance`.
     * @returns {Unit_Control_instance}
     */
    public static _from_object (_o: { [_K in keyof (Unit_Control_instance)]: (Unit_Control_instance)[_K] }): Unit_Control_instance {
        return new Unit_Control_instance(_o.name, _o.definition);
    }


}

/**
 * @summary The Leading Root Component Types of Unit_Control_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Unit_Control_instance: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("definition", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of Unit_Control_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Unit_Control_instance: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Unit_Control_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Unit_Control_instance: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Unit_Control_instance: $.ASN1Decoder<Unit_Control_instance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Unit_Control_instance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Unit_Control_instance (el: _Element): Unit_Control_instance {
    if (!_cached_decoder_for_Unit_Control_instance) { _cached_decoder_for_Unit_Control_instance = function (el: _Element): Unit_Control_instance {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Unit-Control-instance contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "name";
    sequence[1].name = "definition";
    let name!: Identifier;
    let definition!: Unit_Control_instance_definition;
    name = $._decode_explicit<Identifier>(() => _decode_Identifier)(sequence[0]);
    definition = _decode_Unit_Control_instance_definition(sequence[1]);
    return new Unit_Control_instance(
        name,
        definition,

    );
}; }
    return _cached_decoder_for_Unit_Control_instance(el);
}

let _cached_encoder_for_Unit_Control_instance: $.ASN1Encoder<Unit_Control_instance> | null = null;

/**
 * @summary Encodes a(n) Unit_Control_instance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Unit_Control_instance, encoded as an ASN.1 Element.
 */
export
function _encode_Unit_Control_instance (value: Unit_Control_instance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Unit_Control_instance) { _cached_encoder_for_Unit_Control_instance = function (value: Unit_Control_instance): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.name, $.BER),
            /* REQUIRED   */ _encode_Unit_Control_instance_definition(value.definition, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Unit_Control_instance(value, elGetter);
}


/* eslint-enable */
