/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Specification_schema, _decode_Specification_schema, _encode_Specification_schema } from "../Z39-50-APDU-2001/Specification-schema.ta.mjs";
// export { Specification_schema, _decode_Specification_schema, _encode_Specification_schema } from "../Z39-50-APDU-2001/Specification-schema.ta.mjs";
import { Specification_elementSpec, _decode_Specification_elementSpec, _encode_Specification_elementSpec } from "../Z39-50-APDU-2001/Specification-elementSpec.ta.mjs";
// export { Specification_elementSpec, _decode_Specification_elementSpec, _encode_Specification_elementSpec } from "../Z39-50-APDU-2001/Specification-elementSpec.ta.mjs";


/**
 * @summary Specification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Specification ::= SEQUENCE {
 *     schema CHOICE {
 *         oid [1] IMPLICIT OBJECT IDENTIFIER,
 *         uri [300] IMPLICIT InternationalString
 *         -- only if option bit 21 has been negotiated
 *     } OPTIONAL,
 *     elementSpec [2] CHOICE {
 *         elementSetName [1] IMPLICIT InternationalString,
 *         externalEspec     [2] IMPLICIT EXTERNAL
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Specification {
    /**
     * @summary `schema`.
     * @public
     * @readonly
     */
    readonly schema: OPTIONAL<Specification_schema>;
    /**
     * @summary `elementSpec`.
     * @public
     * @readonly
     */
    readonly elementSpec: OPTIONAL<Specification_elementSpec>;

    constructor (
        schema: OPTIONAL<Specification_schema>,
        elementSpec: OPTIONAL<Specification_elementSpec>
    ) {
        this.schema = schema;
        this.elementSpec = elementSpec;
    }

    /**
     * @summary Restructures an object into a Specification
     * @description
     * 
     * This takes an `object` and converts it to a `Specification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Specification`.
     * @returns {Specification}
     */
    public static _from_object (_o: { [_K in keyof (Specification)]: (Specification)[_K] }): Specification {
        return new Specification(_o.schema, _o.elementSpec);
    }


}

/**
 * @summary The Leading Root Component Types of Specification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Specification: $.ComponentSpec[] = [
    new $.ComponentSpec("schema", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 300))),
    new $.ComponentSpec("elementSpec", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Specification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Specification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Specification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Specification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Specification: $.ASN1Decoder<Specification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Specification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Specification (el: _Element): Specification {
    if (!_cached_decoder_for_Specification) { _cached_decoder_for_Specification = function (el: _Element): Specification {
    let schema: OPTIONAL<Specification_schema>;
    let elementSpec: OPTIONAL<Specification_elementSpec>;
    const callbacks: $.DecodingMap = {
        "schema": (_el: _Element): void => { schema = _decode_Specification_schema(_el); },
        "elementSpec": (_el: _Element): void => { elementSpec = $._decode_explicit<Specification_elementSpec>(() => _decode_Specification_elementSpec)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Specification,
        _extension_additions_list_spec_for_Specification,
        _root_component_type_list_2_spec_for_Specification,
        undefined,
    );
    return new Specification(
        schema,
        elementSpec
    );
}; }
    return _cached_decoder_for_Specification(el);
}

let _cached_encoder_for_Specification: $.ASN1Encoder<Specification> | null = null;

/**
 * @summary Encodes a(n) Specification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Specification, encoded as an ASN.1 Element.
 */
export
function _encode_Specification (value: Specification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Specification) { _cached_encoder_for_Specification = function (value: Specification, elGetter: $.ASN1Encoder<Specification>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.schema !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_Specification_schema(value.schema, $.BER);
    }
    if (value.elementSpec !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_Specification_elementSpec, $.BER)(value.elementSpec, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Specification(value, elGetter);
}


/* eslint-enable */
