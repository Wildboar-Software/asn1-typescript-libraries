/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GeneralSubtrees, _decode_GeneralSubtrees, _encode_GeneralSubtrees } from "../PKIX1Implicit88/GeneralSubtrees.ta.mjs";
// export { GeneralSubtrees, _decode_GeneralSubtrees, _encode_GeneralSubtrees } from "../PKIX1Implicit88/GeneralSubtrees.ta.mjs";


/**
 * @summary NameConstraints
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameConstraints ::= SEQUENCE {
 *      permittedSubtrees       [0]     GeneralSubtrees OPTIONAL,
 *      excludedSubtrees        [1]     GeneralSubtrees OPTIONAL }
 * ```
 * 
 * @class
 */
export
class NameConstraints {
    constructor (
        /**
         * @summary `permittedSubtrees`.
         * @public
         * @readonly
         */
        readonly permittedSubtrees: OPTIONAL<GeneralSubtrees>,
        /**
         * @summary `excludedSubtrees`.
         * @public
         * @readonly
         */
        readonly excludedSubtrees: OPTIONAL<GeneralSubtrees>
    ) {}

    /**
     * @summary Restructures an object into a NameConstraints
     * @description
     * 
     * This takes an `object` and converts it to a `NameConstraints`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NameConstraints`.
     * @returns {NameConstraints}
     */
    public static _from_object (_o: { [_K in keyof (NameConstraints)]: (NameConstraints)[_K] }): NameConstraints {
        return new NameConstraints(_o.permittedSubtrees, _o.excludedSubtrees);
    }


}

/**
 * @summary The Leading Root Component Types of NameConstraints
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NameConstraints: $.ComponentSpec[] = [
    new $.ComponentSpec("permittedSubtrees", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("excludedSubtrees", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of NameConstraints
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NameConstraints: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NameConstraints
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NameConstraints: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NameConstraints: $.ASN1Decoder<NameConstraints> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NameConstraints
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NameConstraints (el: _Element): NameConstraints {
    if (!_cached_decoder_for_NameConstraints) { _cached_decoder_for_NameConstraints = function (el: _Element): NameConstraints {
    let permittedSubtrees: OPTIONAL<GeneralSubtrees>;
    let excludedSubtrees: OPTIONAL<GeneralSubtrees>;
    const callbacks: $.DecodingMap = {
        "permittedSubtrees": (_el: _Element): void => { permittedSubtrees = $._decode_implicit<GeneralSubtrees>(() => _decode_GeneralSubtrees)(_el); },
        "excludedSubtrees": (_el: _Element): void => { excludedSubtrees = $._decode_implicit<GeneralSubtrees>(() => _decode_GeneralSubtrees)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NameConstraints,
        _extension_additions_list_spec_for_NameConstraints,
        _root_component_type_list_2_spec_for_NameConstraints,
        undefined,
    );
    return new NameConstraints(
        permittedSubtrees,
        excludedSubtrees
    );
}; }
    return _cached_decoder_for_NameConstraints(el);
}

let _cached_encoder_for_NameConstraints: $.ASN1Encoder<NameConstraints> | null = null;

/**
 * @summary Encodes a(n) NameConstraints into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameConstraints, encoded as an ASN.1 Element.
 */
export
function _encode_NameConstraints (value: NameConstraints, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NameConstraints) { _cached_encoder_for_NameConstraints = function (value: NameConstraints, elGetter: $.ASN1Encoder<NameConstraints>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.permittedSubtrees === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GeneralSubtrees, $.BER)(value.permittedSubtrees, $.BER)),
            /* IF_ABSENT  */ ((value.excludedSubtrees === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_GeneralSubtrees, $.BER)(value.excludedSubtrees, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NameConstraints(value, elGetter);
}


/* eslint-enable */
