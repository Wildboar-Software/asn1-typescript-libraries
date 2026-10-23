/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuthCtmRes_result, _decode_AuthCtmRes_result, _encode_AuthCtmRes_result, _enum_for_AuthCtmRes_result } from "../CT-Authentication-Operations/AuthCtmRes-result.ta.mjs";
// export { AuthCtmRes_result, _enum_for_AuthCtmRes_result, AuthCtmRes_result_auth_res_correct /* IMPORTED_LONG_ENUMERATION_ITEM */, auth_res_correct /* IMPORTED_SHORT_ENUMERATION_ITEM */, AuthCtmRes_result_auth_res_incorrect /* IMPORTED_LONG_ENUMERATION_ITEM */, auth_res_incorrect /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AuthCtmRes_result, _encode_AuthCtmRes_result } from "../CT-Authentication-Operations/AuthCtmRes-result.ta.mjs";
import { DummyExtension, _decode_DummyExtension, _encode_DummyExtension } from "../CT-Authentication-Operations/DummyExtension.ta.mjs";
// export { DummyExtension, _decode_DummyExtension, _encode_DummyExtension } from "../CT-Authentication-Operations/DummyExtension.ta.mjs";


/**
 * @summary AuthCtmRes
 * @description
 *
 * Result of `authCtmUser`. The Visitor PINX compares the response from the CTM
 * user with the expected response (ECMA-243 §6.5.5.1). If the user does not
 * answer, the Visitor PINX returns `temporarilyUnavailable` (§6.5.5.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthCtmRes ::= SEQUENCE {
 *     result ENUMERATED {
 *         auth-res-correct(0),
 *         auth-res-incorrect(1)
 *     },
 *     dummyExtension DummyExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AuthCtmRes {
    /**
     * @summary `result`.
     * @description
     *
     * `auth-res-correct` when the CTM user's response matches the expected
     * response; `auth-res-incorrect` when it differs (ECMA-243 §6.5.5.1).
     * @public
     * @readonly
     */
    readonly result: AuthCtmRes_result;
    /**
     * @summary `dummyExtension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-243 §6.3.1 defines none.
     * @public
     * @readonly
     */
    readonly dummyExtension: OPTIONAL<DummyExtension>;

    constructor (
        result: AuthCtmRes_result,
        dummyExtension?: OPTIONAL<DummyExtension>
    ) {
        this.result = result;
        this.dummyExtension = dummyExtension;
    }

    /**
     * @summary Restructures an object into a AuthCtmRes
     * @description
     * 
     * This takes an `object` and converts it to a `AuthCtmRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthCtmRes`.
     * @returns {AuthCtmRes}
     */
    public static _from_object (_o: { [_K in keyof (AuthCtmRes)]: (AuthCtmRes)[_K] }): AuthCtmRes {
        return new AuthCtmRes(_o.result, _o.dummyExtension);
    }

        /**
         * @summary The enum used as the type of the component `result`
         * @public
         * @static
         */

    public static _enum_for_result = _enum_for_AuthCtmRes_result;
}

/**
 * @summary The Leading Root Component Types of AuthCtmRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthCtmRes: $.ComponentSpec[] = [
    new $.ComponentSpec("result", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("dummyExtension", true, $.or($.hasTag(_TagClass.context, 3), $.hasTag(_TagClass.context, 4)))
];

/**
 * @summary The Trailing Root Component Types of AuthCtmRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthCtmRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthCtmRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthCtmRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthCtmRes: $.ASN1Decoder<AuthCtmRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthCtmRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthCtmRes (el: _Element): AuthCtmRes {
    if (!_cached_decoder_for_AuthCtmRes) { _cached_decoder_for_AuthCtmRes = function (el: _Element): AuthCtmRes {
    let result!: AuthCtmRes_result;
    let dummyExtension: OPTIONAL<DummyExtension>;
    const callbacks: $.DecodingMap = {
        "result": (_el: _Element): void => { result = _decode_AuthCtmRes_result(_el); },
        "dummyExtension": (_el: _Element): void => { dummyExtension = _decode_DummyExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AuthCtmRes,
        _extension_additions_list_spec_for_AuthCtmRes,
        _root_component_type_list_2_spec_for_AuthCtmRes,
        undefined,
    );
    return new AuthCtmRes(
        result,
        dummyExtension
    );
}; }
    return _cached_decoder_for_AuthCtmRes(el);
}

let _cached_encoder_for_AuthCtmRes: $.ASN1Encoder<AuthCtmRes> | null = null;

/**
 * @summary Encodes a(n) AuthCtmRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthCtmRes, encoded as an ASN.1 Element.
 */
export
function _encode_AuthCtmRes (value: AuthCtmRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthCtmRes) { _cached_encoder_for_AuthCtmRes = function (value: AuthCtmRes, elGetter: $.ASN1Encoder<AuthCtmRes>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_AuthCtmRes_result(value.result, $.BER));
    if (value.dummyExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DummyExtension(value.dummyExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AuthCtmRes(value, elGetter);
}


/* eslint-enable */
