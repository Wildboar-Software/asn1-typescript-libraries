/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuthWtmRes_autWtmResValue, _decode_AuthWtmRes_autWtmResValue, _encode_AuthWtmRes_autWtmResValue, _enum_for_AuthWtmRes_autWtmResValue } from "../WTM-Authentication-Operations-asn1-97/AuthWtmRes-autWtmResValue.ta.mjs";
import { DummyExtension, _decode_DummyExtension, _encode_DummyExtension } from "../WTM-Authentication-Operations-asn1-97/DummyExtension.ta.mjs";

/**
 * @summary AuthWtmRes
 * @description
 *
 * Result of `authWtmUser`. The Visitor PINX compares the response from the WTM
 * user with the expected response (ECMA-306 §6.5.5.1). If the user does not
 * answer, the Visitor PINX returns `temporarilyUnavailable` (§6.5.5.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthWtmRes ::= SEQUENCE {
 *     autWtmResValue ENUMERATED {
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
class AuthWtmRes {
    /**
     * @summary `autWtmResValue`.
     * @description
     *
     * `auth-res-correct` when the WTM user's response matches the expected
     * response; `auth-res-incorrect` when it differs (ECMA-306 §6.5.5.1).
     * @public
     * @readonly
     */
    readonly autWtmResValue: AuthWtmRes_autWtmResValue;
    /**
     * @summary `dummyExtension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-306 §6.3.1 defines no members of
     * `WTMAuthExtSet`.
     * @public
     * @readonly
     */
    readonly dummyExtension: OPTIONAL<DummyExtension>;

    constructor (
        autWtmResValue: AuthWtmRes_autWtmResValue,
        dummyExtension: OPTIONAL<DummyExtension>
    ) {
        this.autWtmResValue = autWtmResValue;
        this.dummyExtension = dummyExtension;
    }

    /**
     * @summary Restructures an object into a AuthWtmRes
     * @description
     * 
     * This takes an `object` and converts it to a `AuthWtmRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthWtmRes`.
     * @returns {AuthWtmRes}
     */
    public static _from_object (_o: { [_K in keyof (AuthWtmRes)]: (AuthWtmRes)[_K] }): AuthWtmRes {
        return new AuthWtmRes(_o.autWtmResValue, _o.dummyExtension);
    }

        /**
         * @summary The enum used as the type of the component `autWtmResValue`
         * @public
         * @static
         */

    public static _enum_for_autWtmResValue = _enum_for_AuthWtmRes_autWtmResValue;
}

/**
 * @summary The Leading Root Component Types of AuthWtmRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthWtmRes: $.ComponentSpec[] = [
    new $.ComponentSpec("autWtmResValue", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("dummyExtension", true, $.or($.hasTag(_TagClass.context, 5), $.hasTag(_TagClass.context, 6)))
];

/**
 * @summary The Trailing Root Component Types of AuthWtmRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthWtmRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthWtmRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthWtmRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthWtmRes: $.ASN1Decoder<AuthWtmRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthWtmRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthWtmRes (el: _Element): AuthWtmRes {
    if (!_cached_decoder_for_AuthWtmRes) { _cached_decoder_for_AuthWtmRes = function (el: _Element): AuthWtmRes {
    let autWtmResValue!: AuthWtmRes_autWtmResValue;
    let dummyExtension: OPTIONAL<DummyExtension>;
    const callbacks: $.DecodingMap = {
        "autWtmResValue": (_el: _Element): void => { autWtmResValue = _decode_AuthWtmRes_autWtmResValue(_el); },
        "dummyExtension": (_el: _Element): void => { dummyExtension = _decode_DummyExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AuthWtmRes,
        _extension_additions_list_spec_for_AuthWtmRes,
        _root_component_type_list_2_spec_for_AuthWtmRes,
        undefined,
    );
    return new AuthWtmRes(
        autWtmResValue,
        dummyExtension
    );
}; }
    return _cached_decoder_for_AuthWtmRes(el);
}

let _cached_encoder_for_AuthWtmRes: $.ASN1Encoder<AuthWtmRes> | null = null;

/**
 * @summary Encodes a(n) AuthWtmRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthWtmRes, encoded as an ASN.1 Element.
 */
export
function _encode_AuthWtmRes (value: AuthWtmRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthWtmRes) { _cached_encoder_for_AuthWtmRes = function (value: AuthWtmRes, _elGetter: $.ASN1Encoder<AuthWtmRes>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_AuthWtmRes_autWtmResValue(value.autWtmResValue, $.BER));
    if (value.dummyExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DummyExtension(value.dummyExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AuthWtmRes(value, elGetter);
}

/* eslint-enable */
