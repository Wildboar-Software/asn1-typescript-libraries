/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary ProximitySupport_unitsSupported_Item_private
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProximitySupport-unitsSupported-Item-private ::= SEQUENCE {
 *     unit [0] IMPLICIT INTEGER,
 *     description [1] HumanString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ProximitySupport_unitsSupported_Item_private {
    /**
     * @summary `unit`.
     * @public
     * @readonly
     */
    readonly unit: INTEGER;
    /**
     * @summary `description`.
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<HumanString>;

    constructor (
        unit: INTEGER,
        description: OPTIONAL<HumanString>
    ) {
        this.unit = unit;
        this.description = description;
    }

    /**
     * @summary Restructures an object into a ProximitySupport_unitsSupported_Item_private
     * @description
     * 
     * This takes an `object` and converts it to a `ProximitySupport_unitsSupported_Item_private`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProximitySupport_unitsSupported_Item_private`.
     * @returns {ProximitySupport_unitsSupported_Item_private}
     */
    public static _from_object (_o: { [_K in keyof (ProximitySupport_unitsSupported_Item_private)]: (ProximitySupport_unitsSupported_Item_private)[_K] }): ProximitySupport_unitsSupported_Item_private {
        return new ProximitySupport_unitsSupported_Item_private(_o.unit, _o.description);
    }


}

/**
 * @summary The Leading Root Component Types of ProximitySupport_unitsSupported_Item_private
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProximitySupport_unitsSupported_Item_private: $.ComponentSpec[] = [
    new $.ComponentSpec("unit", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ProximitySupport_unitsSupported_Item_private
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProximitySupport_unitsSupported_Item_private: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProximitySupport_unitsSupported_Item_private
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProximitySupport_unitsSupported_Item_private: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProximitySupport_unitsSupported_Item_private: $.ASN1Decoder<ProximitySupport_unitsSupported_Item_private> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProximitySupport_unitsSupported_Item_private
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProximitySupport_unitsSupported_Item_private (el: _Element): ProximitySupport_unitsSupported_Item_private {
    if (!_cached_decoder_for_ProximitySupport_unitsSupported_Item_private) { _cached_decoder_for_ProximitySupport_unitsSupported_Item_private = function (el: _Element): ProximitySupport_unitsSupported_Item_private {
    let unit!: INTEGER;
    let description: OPTIONAL<HumanString>;
    const callbacks: $.DecodingMap = {
        "unit": (_el: _Element): void => { unit = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "description": (_el: _Element): void => { description = $._decode_explicit<HumanString>(() => _decode_HumanString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProximitySupport_unitsSupported_Item_private,
        _extension_additions_list_spec_for_ProximitySupport_unitsSupported_Item_private,
        _root_component_type_list_2_spec_for_ProximitySupport_unitsSupported_Item_private,
        undefined,
    );
    return new ProximitySupport_unitsSupported_Item_private(
        unit,
        description
    );
}; }
    return _cached_decoder_for_ProximitySupport_unitsSupported_Item_private(el);
}

let _cached_encoder_for_ProximitySupport_unitsSupported_Item_private: $.ASN1Encoder<ProximitySupport_unitsSupported_Item_private> | null = null;

/**
 * @summary Encodes a(n) ProximitySupport_unitsSupported_Item_private into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProximitySupport_unitsSupported_Item_private, encoded as an ASN.1 Element.
 */
export
function _encode_ProximitySupport_unitsSupported_Item_private (value: ProximitySupport_unitsSupported_Item_private, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProximitySupport_unitsSupported_Item_private) { _cached_encoder_for_ProximitySupport_unitsSupported_Item_private = function (value: ProximitySupport_unitsSupported_Item_private, elGetter: $.ASN1Encoder<ProximitySupport_unitsSupported_Item_private>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.unit, $.BER);
    if (value.description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_HumanString, $.BER)(value.description, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ProximitySupport_unitsSupported_Item_private(value, elGetter);
}


/* eslint-enable */
