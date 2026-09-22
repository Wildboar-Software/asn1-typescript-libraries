/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SkipCerts, _decode_SkipCerts, _encode_SkipCerts } from "../PKIX1Implicit88/SkipCerts.ta.mjs";
// export { SkipCerts, _decode_SkipCerts, _encode_SkipCerts } from "../PKIX1Implicit88/SkipCerts.ta.mjs";


/**
 * @summary PolicyConstraints
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PolicyConstraints ::= SEQUENCE {
 *      requireExplicitPolicy           [0] SkipCerts OPTIONAL,
 *      inhibitPolicyMapping            [1] SkipCerts OPTIONAL }
 * ```
 * 
 * @class
 */
export
class PolicyConstraints {
    constructor (
        /**
         * @summary `requireExplicitPolicy`.
         * @public
         * @readonly
         */
        readonly requireExplicitPolicy: OPTIONAL<SkipCerts>,
        /**
         * @summary `inhibitPolicyMapping`.
         * @public
         * @readonly
         */
        readonly inhibitPolicyMapping: OPTIONAL<SkipCerts>
    ) {}

    /**
     * @summary Restructures an object into a PolicyConstraints
     * @description
     * 
     * This takes an `object` and converts it to a `PolicyConstraints`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PolicyConstraints`.
     * @returns {PolicyConstraints}
     */
    public static _from_object (_o: { [_K in keyof (PolicyConstraints)]: (PolicyConstraints)[_K] }): PolicyConstraints {
        return new PolicyConstraints(_o.requireExplicitPolicy, _o.inhibitPolicyMapping);
    }


}

/**
 * @summary The Leading Root Component Types of PolicyConstraints
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PolicyConstraints: $.ComponentSpec[] = [
    new $.ComponentSpec("requireExplicitPolicy", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("inhibitPolicyMapping", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of PolicyConstraints
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PolicyConstraints: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PolicyConstraints
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PolicyConstraints: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PolicyConstraints: $.ASN1Decoder<PolicyConstraints> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PolicyConstraints
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PolicyConstraints (el: _Element): PolicyConstraints {
    if (!_cached_decoder_for_PolicyConstraints) { _cached_decoder_for_PolicyConstraints = function (el: _Element): PolicyConstraints {
    let requireExplicitPolicy: OPTIONAL<SkipCerts>;
    let inhibitPolicyMapping: OPTIONAL<SkipCerts>;
    const callbacks: $.DecodingMap = {
        "requireExplicitPolicy": (_el: _Element): void => { requireExplicitPolicy = $._decode_implicit<SkipCerts>(() => _decode_SkipCerts)(_el); },
        "inhibitPolicyMapping": (_el: _Element): void => { inhibitPolicyMapping = $._decode_implicit<SkipCerts>(() => _decode_SkipCerts)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PolicyConstraints,
        _extension_additions_list_spec_for_PolicyConstraints,
        _root_component_type_list_2_spec_for_PolicyConstraints,
        undefined,
    );
    return new PolicyConstraints(
        requireExplicitPolicy,
        inhibitPolicyMapping
    );
}; }
    return _cached_decoder_for_PolicyConstraints(el);
}

let _cached_encoder_for_PolicyConstraints: $.ASN1Encoder<PolicyConstraints> | null = null;

/**
 * @summary Encodes a(n) PolicyConstraints into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicyConstraints, encoded as an ASN.1 Element.
 */
export
function _encode_PolicyConstraints (value: PolicyConstraints, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PolicyConstraints) { _cached_encoder_for_PolicyConstraints = function (value: PolicyConstraints, elGetter: $.ASN1Encoder<PolicyConstraints>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.requireExplicitPolicy === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_SkipCerts, $.BER)(value.requireExplicitPolicy, $.BER)),
            /* IF_ABSENT  */ ((value.inhibitPolicyMapping === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SkipCerts, $.BER)(value.inhibitPolicyMapping, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PolicyConstraints(value, elGetter);
}


/* eslint-enable */
