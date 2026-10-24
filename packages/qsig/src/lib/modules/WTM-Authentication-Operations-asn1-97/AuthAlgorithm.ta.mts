/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type DefinedIDs, _decode_DefinedIDs, _encode_DefinedIDs } from "../WTM-Authentication-Operations-asn1-97/DefinedIDs.ta.mjs";

/**
 * @summary AuthAlgorithm
 * @description
 *
 * Algorithm identifier and an optional parameter whose type depends on that
 * identifier (ECMA-306 §6.3.1). `authAlg` is an `&id` from `AuthAlgSet`.
 * `param` has type `AUTH-ALG.&Type` for the selected object. `AuthAlgSet` is
 * `{...}` and defines no objects, so no parameter type is specified. Algorithms
 * are outside the scope of ECMA-306 (§1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthAlgorithm ::= SEQUENCE {
 *     authAlg AUTH-ALG.&id ({AuthAlgSet}),
 *     param AUTH-ALG.&Type ({AuthAlgSet} {@.authAlg}) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AuthAlgorithm {
    /**
     * @summary `authAlg`.
     * @description
     *
     * Algorithm identifier, an `&id` of `AuthAlgSet` (ECMA-306 §6.3.1). That
     * set defines no objects.
     * @public
     * @readonly
     */
    readonly authAlg: DefinedIDs;
    /**
     * @summary `param`.
     * @description
     *
     * Optional parameter whose type is `AUTH-ALG.&Type` of the object selected
     * by `authAlg` (ECMA-306 §6.3.1). No such type is defined (§1).
     * @public
     * @readonly
     */
    readonly param: OPTIONAL<_Element>;

    constructor (
        authAlg: DefinedIDs,
        param?: OPTIONAL<_Element>
    ) {
        this.authAlg = authAlg;
        this.param = param;
    }

    /**
     * @summary Restructures an object into a AuthAlgorithm
     * @description
     * 
     * This takes an `object` and converts it to a `AuthAlgorithm`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthAlgorithm`.
     * @returns {AuthAlgorithm}
     */
    public static _from_object (_o: { [_K in keyof (AuthAlgorithm)]: (AuthAlgorithm)[_K] }): AuthAlgorithm {
        return new AuthAlgorithm(_o.authAlg, _o.param);
    }

}

/**
 * @summary The Leading Root Component Types of AuthAlgorithm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthAlgorithm: $.ComponentSpec[] = [
    new $.ComponentSpec("authAlg", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("param", true, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of AuthAlgorithm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthAlgorithm: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthAlgorithm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthAlgorithm: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthAlgorithm: $.ASN1Decoder<AuthAlgorithm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthAlgorithm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthAlgorithm (el: _Element): AuthAlgorithm {
    if (!_cached_decoder_for_AuthAlgorithm) { _cached_decoder_for_AuthAlgorithm = function (el: _Element): AuthAlgorithm {
    let authAlg!: DefinedIDs;
    let param: OPTIONAL<_Element>;
    const callbacks: $.DecodingMap = {
        "authAlg": (_el: _Element): void => { authAlg = _decode_DefinedIDs(_el); },
        "param": (_el: _Element): void => { param = $._decodeAny(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AuthAlgorithm,
        _extension_additions_list_spec_for_AuthAlgorithm,
        _root_component_type_list_2_spec_for_AuthAlgorithm,
        undefined,
    );
    return new AuthAlgorithm(
        authAlg,
        param
    );
}; }
    return _cached_decoder_for_AuthAlgorithm(el);
}

let _cached_encoder_for_AuthAlgorithm: $.ASN1Encoder<AuthAlgorithm> | null = null;

/**
 * @summary Encodes a(n) AuthAlgorithm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthAlgorithm, encoded as an ASN.1 Element.
 */
export
function _encode_AuthAlgorithm (value: AuthAlgorithm, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthAlgorithm) { _cached_encoder_for_AuthAlgorithm = function (value: AuthAlgorithm, _elGetter: $.ASN1Encoder<AuthAlgorithm>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_DefinedIDs(value.authAlg, $.BER));
    if (value.param !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeAny(value.param, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AuthAlgorithm(value, elGetter);
}

/* eslint-enable */
