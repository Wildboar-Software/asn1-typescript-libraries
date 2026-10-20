/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Mapping, _decode_Mapping, _encode_Mapping } from "../InformationFramework/Mapping.ta.mjs";
// export { Mapping, _decode_Mapping, _encode_Mapping } from "../InformationFramework/Mapping.ta.mjs";
import { MRSubstitution, _decode_MRSubstitution, _encode_MRSubstitution } from "../InformationFramework/MRSubstitution.ta.mjs";
// export { MRSubstitution, _decode_MRSubstitution, _encode_MRSubstitution } from "../InformationFramework/MRSubstitution.ta.mjs";


/**
 * @summary MRMapping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MRMapping ::= SEQUENCE {
 *   mapping       [0]  SEQUENCE SIZE (1..MAX) OF Mapping OPTIONAL,
 *   substitution  [1]  SEQUENCE SIZE (1..MAX) OF MRSubstitution OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MRMapping {
    /**
     * @summary `mapping`.
     * @public
     * @readonly
     */
    readonly mapping: OPTIONAL<Mapping[]>;
    /**
     * @summary `substitution`.
     * @public
     * @readonly
     */
    readonly substitution: OPTIONAL<MRSubstitution[]>;

    constructor (
        mapping: OPTIONAL<Mapping[]>,
        substitution: OPTIONAL<MRSubstitution[]>
    ) {
        this.mapping = mapping;
        this.substitution = substitution;
    }

    /**
     * @summary Restructures an object into a MRMapping
     * @description
     * 
     * This takes an `object` and converts it to a `MRMapping`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MRMapping`.
     * @returns {MRMapping}
     */
    public static _from_object (_o: { [_K in keyof (MRMapping)]: (MRMapping)[_K] }): MRMapping {
        return new MRMapping(_o.mapping, _o.substitution);
    }


}

/**
 * @summary The Leading Root Component Types of MRMapping
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MRMapping: $.ComponentSpec[] = [
    new $.ComponentSpec("mapping", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("substitution", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MRMapping
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MRMapping: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MRMapping
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MRMapping: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MRMapping: $.ASN1Decoder<MRMapping> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MRMapping
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MRMapping (el: _Element): MRMapping {
    if (!_cached_decoder_for_MRMapping) { _cached_decoder_for_MRMapping = function (el: _Element): MRMapping {
    let mapping: OPTIONAL<Mapping[]>;
    let substitution: OPTIONAL<MRSubstitution[]>;
    const callbacks: $.DecodingMap = {
        "mapping": (_el: _Element): void => { mapping = $._decode_explicit<Mapping[]>(() => $._decodeSequenceOf<Mapping>(() => _decode_Mapping))(_el); },
        "substitution": (_el: _Element): void => { substitution = $._decode_explicit<MRSubstitution[]>(() => $._decodeSequenceOf<MRSubstitution>(() => _decode_MRSubstitution))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MRMapping,
        _extension_additions_list_spec_for_MRMapping,
        _root_component_type_list_2_spec_for_MRMapping,
        undefined,
    );
    return new MRMapping(
        mapping,
        substitution
    );
}; }
    return _cached_decoder_for_MRMapping(el);
}

let _cached_encoder_for_MRMapping: $.ASN1Encoder<MRMapping> | null = null;

/**
 * @summary Encodes a(n) MRMapping into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MRMapping, encoded as an ASN.1 Element.
 */
export
function _encode_MRMapping (value: MRMapping, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MRMapping) { _cached_encoder_for_MRMapping = function (value: MRMapping, elGetter: $.ASN1Encoder<MRMapping>): _Element {
    const _components: _Element[] = [];
    if (value.mapping !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => $._encodeSequenceOf<Mapping>(() => _encode_Mapping, $.BER), $.BER)(value.mapping, $.BER));
    }
    if (value.substitution !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => $._encodeSequenceOf<MRSubstitution>(() => _encode_MRSubstitution, $.BER), $.BER)(value.substitution, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MRMapping(value, elGetter);
}


/* eslint-enable */
