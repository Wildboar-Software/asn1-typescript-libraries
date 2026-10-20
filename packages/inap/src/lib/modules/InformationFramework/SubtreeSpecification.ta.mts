/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LocalName, _decode_LocalName, _encode_LocalName } from "../InformationFramework/LocalName.ta.mjs";
// export { LocalName, _decode_LocalName, _encode_LocalName } from "../InformationFramework/LocalName.ta.mjs";
// export { ChopSpecification, _decode_ChopSpecification, _encode_ChopSpecification } from "../InformationFramework/ChopSpecification.ta.mjs";
import { Refinement, _decode_Refinement, _encode_Refinement } from "../InformationFramework/Refinement.ta.mjs";
// export { Refinement, _decode_Refinement, _encode_Refinement } from "../InformationFramework/Refinement.ta.mjs";
import { BaseDistance, _decode_BaseDistance, _encode_BaseDistance } from "../InformationFramework/BaseDistance.ta.mjs";
// export { BaseDistance, _decode_BaseDistance, _encode_BaseDistance } from "../InformationFramework/BaseDistance.ta.mjs";


/**
 * @summary SubtreeSpecification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubtreeSpecification ::= SEQUENCE {
 *   base                 [0]  LocalName DEFAULT {},
 *   COMPONENTS OF ChopSpecification,
 *   specificationFilter  [4]  Refinement OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SubtreeSpecification {
    /**
     * @summary `base`.
     * @public
     * @readonly
     */
    readonly base: OPTIONAL<LocalName>;
    /**
     * @summary `specificExclusions`.
     * @public
     * @readonly
     */
    readonly specificExclusions: OPTIONAL<({ chopBefore: LocalName } | { chopAfter: LocalName })[]> /* REPLICATED_COMPONENT */;
    /**
     * @summary `minimum`.
     * @public
     * @readonly
     */
    readonly minimum: OPTIONAL<BaseDistance> /* REPLICATED_COMPONENT */;
    /**
     * @summary `maximum`.
     * @public
     * @readonly
     */
    readonly maximum: OPTIONAL<BaseDistance> /* REPLICATED_COMPONENT */;
    /**
     * @summary `specificationFilter`.
     * @public
     * @readonly
     */
    readonly specificationFilter: OPTIONAL<Refinement>;

    constructor (
        base: OPTIONAL<LocalName>,
        specificExclusions: OPTIONAL<({ chopBefore: LocalName } | { chopAfter: LocalName })[]> /* REPLICATED_COMPONENT */,
        minimum: OPTIONAL<BaseDistance> /* REPLICATED_COMPONENT */,
        maximum: OPTIONAL<BaseDistance> /* REPLICATED_COMPONENT */,
        specificationFilter: OPTIONAL<Refinement>
    ) {
        this.base = base;
        this.specificExclusions = specificExclusions;
        this.minimum = minimum;
        this.maximum = maximum;
        this.specificationFilter = specificationFilter;
    }

    /**
     * @summary Restructures an object into a SubtreeSpecification
     * @description
     * 
     * This takes an `object` and converts it to a `SubtreeSpecification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubtreeSpecification`.
     * @returns {SubtreeSpecification}
     */
    public static _from_object (_o: { [_K in keyof (SubtreeSpecification)]: (SubtreeSpecification)[_K] }): SubtreeSpecification {
        return new SubtreeSpecification(_o.base, _o.specificExclusions, _o.minimum, _o.maximum, _o.specificationFilter);
    }

    /**
     * @summary Getter that returns the default value for `base`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_base () { return [  ]; }
    /**
     * @summary Getter that returns the default value for `minimum`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_minimum () { return 0; }
}

/**
 * @summary The Leading Root Component Types of SubtreeSpecification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SubtreeSpecification: $.ComponentSpec[] = [
    new $.ComponentSpec("base", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("specificExclusions", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("minimum", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("maximum", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("specificationFilter", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of SubtreeSpecification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SubtreeSpecification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SubtreeSpecification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SubtreeSpecification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SubtreeSpecification: $.ASN1Decoder<SubtreeSpecification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubtreeSpecification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubtreeSpecification (el: _Element): SubtreeSpecification {
    if (!_cached_decoder_for_SubtreeSpecification) { _cached_decoder_for_SubtreeSpecification = function (el: _Element): SubtreeSpecification {
    let base: OPTIONAL<LocalName> = SubtreeSpecification._default_value_for_base;
    let specificExclusions: OPTIONAL<({ chopBefore: LocalName } | { chopAfter: LocalName })[]>;
    let minimum: OPTIONAL<BaseDistance> = SubtreeSpecification._default_value_for_minimum;
    let maximum: OPTIONAL<BaseDistance>;
    let specificationFilter: OPTIONAL<Refinement>;
    const callbacks: $.DecodingMap = {
        "base": (_el: _Element): void => { base = $._decode_explicit<LocalName>(() => _decode_LocalName)(_el); },
        "specificExclusions": (_el: _Element): void => { specificExclusions = $._decode_explicit<({ chopBefore: LocalName } | { chopAfter: LocalName })[]>(() => $._decodeSetOf<({ chopBefore: LocalName } | { chopAfter: LocalName })>(() => $._decode_inextensible_choice<specificExclusions>({
    "CONTEXT 0": [ "chopBefore", $._decode_explicit<LocalName>(() => _decode_LocalName) ],
    "CONTEXT 1": [ "chopAfter", $._decode_explicit<LocalName>(() => _decode_LocalName) ]
})))(_el); },
        "minimum": (_el: _Element): void => { minimum = $._decode_explicit<BaseDistance>(() => _decode_BaseDistance)(_el); },
        "maximum": (_el: _Element): void => { maximum = $._decode_explicit<BaseDistance>(() => _decode_BaseDistance)(_el); },
        "specificationFilter": (_el: _Element): void => { specificationFilter = $._decode_explicit<Refinement>(() => _decode_Refinement)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SubtreeSpecification,
        _extension_additions_list_spec_for_SubtreeSpecification,
        _root_component_type_list_2_spec_for_SubtreeSpecification,
        undefined,
    );
    return new SubtreeSpecification(
        base,
        specificExclusions,
        minimum,
        maximum,
        specificationFilter
    );
}; }
    return _cached_decoder_for_SubtreeSpecification(el);
}

let _cached_encoder_for_SubtreeSpecification: $.ASN1Encoder<SubtreeSpecification> | null = null;

/**
 * @summary Encodes a(n) SubtreeSpecification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubtreeSpecification, encoded as an ASN.1 Element.
 */
export
function _encode_SubtreeSpecification (value: SubtreeSpecification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubtreeSpecification) { _cached_encoder_for_SubtreeSpecification = function (value: SubtreeSpecification, elGetter: $.ASN1Encoder<SubtreeSpecification>): _Element {
    const _components: _Element[] = [];
    if (value.base !== undefined && !$.deepEq(value.base, SubtreeSpecification._default_value_for_base)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 0, () => _encode_LocalName, $.BER)(value.base, $.BER));
    }
    /* FIXME: specificExclusions COULD_NOT_COMPILE_TYPE_ENCODER */
    if (value.minimum !== undefined && !$.deepEq(value.minimum, SubtreeSpecification._default_value_for_minimum)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 2, () => _encode_BaseDistance, $.BER)(value.minimum, $.BER));
    }
    if (value.maximum !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_BaseDistance, $.BER)(value.maximum, $.BER));
    }
    if (value.specificationFilter !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_Refinement, $.BER)(value.specificationFilter, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SubtreeSpecification(value, elGetter);
}


/* eslint-enable */
