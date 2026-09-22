/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GeneralName, _decode_GeneralName, _encode_GeneralName } from "../PKIX1Implicit88/GeneralName.ta.mjs";
// export { GeneralName, _decode_GeneralName, _encode_GeneralName } from "../PKIX1Implicit88/GeneralName.ta.mjs";
import { BaseDistance, _decode_BaseDistance, _encode_BaseDistance } from "../PKIX1Implicit88/BaseDistance.ta.mjs";
// export { BaseDistance, _decode_BaseDistance, _encode_BaseDistance } from "../PKIX1Implicit88/BaseDistance.ta.mjs";


/**
 * @summary GeneralSubtree
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeneralSubtree ::= SEQUENCE {
 *      base                    GeneralName,
 *      minimum         [0]     BaseDistance DEFAULT 0,
 *      maximum         [1]     BaseDistance OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GeneralSubtree {
    constructor (
        /**
         * @summary `base`.
         * @public
         * @readonly
         */
        readonly base: GeneralName,
        /**
         * @summary `minimum`.
         * @public
         * @readonly
         */
        readonly minimum: OPTIONAL<BaseDistance>,
        /**
         * @summary `maximum`.
         * @public
         * @readonly
         */
        readonly maximum: OPTIONAL<BaseDistance>
    ) {}

    /**
     * @summary Restructures an object into a GeneralSubtree
     * @description
     * 
     * This takes an `object` and converts it to a `GeneralSubtree`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GeneralSubtree`.
     * @returns {GeneralSubtree}
     */
    public static _from_object (_o: { [_K in keyof (GeneralSubtree)]: (GeneralSubtree)[_K] }): GeneralSubtree {
        return new GeneralSubtree(_o.base, _o.minimum, _o.maximum);
    }

    /**
     * @summary Getter that returns the default value for `minimum`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_minimum () { return 0; }
}

/**
 * @summary The Leading Root Component Types of GeneralSubtree
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GeneralSubtree: $.ComponentSpec[] = [
    new $.ComponentSpec("base", false, $.hasAnyTag),
    new $.ComponentSpec("minimum", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("maximum", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of GeneralSubtree
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GeneralSubtree: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GeneralSubtree
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GeneralSubtree: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GeneralSubtree: $.ASN1Decoder<GeneralSubtree> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GeneralSubtree
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GeneralSubtree (el: _Element): GeneralSubtree {
    if (!_cached_decoder_for_GeneralSubtree) { _cached_decoder_for_GeneralSubtree = function (el: _Element): GeneralSubtree {
    let base!: GeneralName;
    let minimum: OPTIONAL<BaseDistance> = GeneralSubtree._default_value_for_minimum;
    let maximum: OPTIONAL<BaseDistance>;
    const callbacks: $.DecodingMap = {
        "base": (_el: _Element): void => { base = _decode_GeneralName(_el); },
        "minimum": (_el: _Element): void => { minimum = $._decode_implicit<BaseDistance>(() => _decode_BaseDistance)(_el); },
        "maximum": (_el: _Element): void => { maximum = $._decode_implicit<BaseDistance>(() => _decode_BaseDistance)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GeneralSubtree,
        _extension_additions_list_spec_for_GeneralSubtree,
        _root_component_type_list_2_spec_for_GeneralSubtree,
        undefined,
    );
    return new GeneralSubtree(
        base,
        minimum,
        maximum
    );
}; }
    return _cached_decoder_for_GeneralSubtree(el);
}

let _cached_encoder_for_GeneralSubtree: $.ASN1Encoder<GeneralSubtree> | null = null;

/**
 * @summary Encodes a(n) GeneralSubtree into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralSubtree, encoded as an ASN.1 Element.
 */
export
function _encode_GeneralSubtree (value: GeneralSubtree, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GeneralSubtree) { _cached_encoder_for_GeneralSubtree = function (value: GeneralSubtree, elGetter: $.ASN1Encoder<GeneralSubtree>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GeneralName(value.base, $.BER),
            /* IF_DEFAULT */ (value.minimum === undefined || $.deepEq(value.minimum, GeneralSubtree._default_value_for_minimum) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_BaseDistance, $.BER)(value.minimum, $.BER)),
            /* IF_ABSENT  */ ((value.maximum === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_BaseDistance, $.BER)(value.maximum, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GeneralSubtree(value, elGetter);
}


/* eslint-enable */
