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
import { Named_Type_instance_definition, _decode_Named_Type_instance_definition, _encode_Named_Type_instance_definition } from "../MMS-SCI-Module-1/Named-Type-instance-definition.ta.mjs";
// export { Named_Type_instance_definition, _decode_Named_Type_instance_definition, _encode_Named_Type_instance_definition } from "../MMS-SCI-Module-1/Named-Type-instance-definition.ta.mjs";


/**
 * @summary Named_Type_instance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Named-Type-instance ::= SEQUENCE {
 *     name                [0] ObjectName,
 *     definition          CHOICE {
 *         reference           [1] IMPLICIT OBJECT IDENTIFIER,
 *         details             [2] IMPLICIT SEQUENCE {
 *             accessControl    [3] IMPLICIT Access-Control-List-instance,
 *             typeDescription  [4] TypeDescription,
 *             meaning          [5] IMPLICIT VisibleString OPTIONAL
 *         }  }  }
 * ```
 * 
 * @class
 */
export
class Named_Type_instance {
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
        readonly definition: Named_Type_instance_definition
    ) {}

    /**
     * @summary Restructures an object into a Named_Type_instance
     * @description
     * 
     * This takes an `object` and converts it to a `Named_Type_instance`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Named_Type_instance`.
     * @returns {Named_Type_instance}
     */
    public static _from_object (_o: { [_K in keyof (Named_Type_instance)]: (Named_Type_instance)[_K] }): Named_Type_instance {
        return new Named_Type_instance(_o.name, _o.definition);
    }


}

/**
 * @summary The Leading Root Component Types of Named_Type_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Named_Type_instance: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("definition", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of Named_Type_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Named_Type_instance: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Named_Type_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Named_Type_instance: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Named_Type_instance: $.ASN1Decoder<Named_Type_instance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Named_Type_instance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Named_Type_instance (el: _Element): Named_Type_instance {
    if (!_cached_decoder_for_Named_Type_instance) { _cached_decoder_for_Named_Type_instance = function (el: _Element): Named_Type_instance {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Named-Type-instance contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "name";
    sequence[1].name = "definition";
    let name!: ObjectName;
    let definition!: Named_Type_instance_definition;
    name = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(sequence[0]);
    definition = _decode_Named_Type_instance_definition(sequence[1]);
    return new Named_Type_instance(
        name,
        definition,

    );
}; }
    return _cached_decoder_for_Named_Type_instance(el);
}

let _cached_encoder_for_Named_Type_instance: $.ASN1Encoder<Named_Type_instance> | null = null;

/**
 * @summary Encodes a(n) Named_Type_instance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Named_Type_instance, encoded as an ASN.1 Element.
 */
export
function _encode_Named_Type_instance (value: Named_Type_instance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Named_Type_instance) { _cached_encoder_for_Named_Type_instance = function (value: Named_Type_instance): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.name, $.BER),
            /* REQUIRED   */ _encode_Named_Type_instance_definition(value.definition, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Named_Type_instance(value, elGetter);
}


/* eslint-enable */
