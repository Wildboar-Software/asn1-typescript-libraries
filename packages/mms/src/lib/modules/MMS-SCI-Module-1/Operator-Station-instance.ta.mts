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
import { Operator_Station_instance_definition, _decode_Operator_Station_instance_definition, _encode_Operator_Station_instance_definition } from "../MMS-SCI-Module-1/Operator-Station-instance-definition.ta.mjs";
// export { Operator_Station_instance_definition, _decode_Operator_Station_instance_definition, _encode_Operator_Station_instance_definition } from "../MMS-SCI-Module-1/Operator-Station-instance-definition.ta.mjs";


/**
 * @summary Operator_Station_instance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Operator-Station-instance ::= SEQUENCE {
 *     name             [0] IMPLICIT Identifier,
 *     definition       CHOICE {
 *         reference        [1] IMPLICIT OBJECT IDENTIFIER,
 *         details          [2] IMPLICIT SEQUENCE {
 *             accessControl    [3] IMPLICIT Access-Control-List-instance,
 *             stationType      [4] IMPLICIT ENUMERATED {
 *                 entry,
 *                 display,
 *                 entry-display }
 *             }  }  }
 * ```
 * 
 * @class
 */
export
class Operator_Station_instance {
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
        readonly definition: Operator_Station_instance_definition
    ) {}

    /**
     * @summary Restructures an object into a Operator_Station_instance
     * @description
     * 
     * This takes an `object` and converts it to a `Operator_Station_instance`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Operator_Station_instance`.
     * @returns {Operator_Station_instance}
     */
    public static _from_object (_o: { [_K in keyof (Operator_Station_instance)]: (Operator_Station_instance)[_K] }): Operator_Station_instance {
        return new Operator_Station_instance(_o.name, _o.definition);
    }


}

/**
 * @summary The Leading Root Component Types of Operator_Station_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Operator_Station_instance: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("definition", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of Operator_Station_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Operator_Station_instance: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Operator_Station_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Operator_Station_instance: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Operator_Station_instance: $.ASN1Decoder<Operator_Station_instance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Operator_Station_instance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Operator_Station_instance (el: _Element): Operator_Station_instance {
    if (!_cached_decoder_for_Operator_Station_instance) { _cached_decoder_for_Operator_Station_instance = function (el: _Element): Operator_Station_instance {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Operator-Station-instance contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "name";
    sequence[1].name = "definition";
    let name!: Identifier;
    let definition!: Operator_Station_instance_definition;
    name = $._decode_explicit<Identifier>(() => _decode_Identifier)(sequence[0]);
    definition = _decode_Operator_Station_instance_definition(sequence[1]);
    return new Operator_Station_instance(
        name,
        definition,

    );
}; }
    return _cached_decoder_for_Operator_Station_instance(el);
}

let _cached_encoder_for_Operator_Station_instance: $.ASN1Encoder<Operator_Station_instance> | null = null;

/**
 * @summary Encodes a(n) Operator_Station_instance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Operator_Station_instance, encoded as an ASN.1 Element.
 */
export
function _encode_Operator_Station_instance (value: Operator_Station_instance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Operator_Station_instance) { _cached_encoder_for_Operator_Station_instance = function (value: Operator_Station_instance): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.name, $.BER),
            /* REQUIRED   */ _encode_Operator_Station_instance_definition(value.definition, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Operator_Station_instance(value, elGetter);
}


/* eslint-enable */
