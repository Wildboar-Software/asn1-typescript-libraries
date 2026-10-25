/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type AuthSessionKey, _decode_AuthSessionKey, _encode_AuthSessionKey } from "../CT-Authentication-Operations/AuthSessionKey.ta.mjs";
// export { AuthSessionKey, _decode_AuthSessionKey, _encode_AuthSessionKey } from "../CT-Authentication-Operations/AuthSessionKey.ta.mjs";
import { type CalculationParam, _decode_CalculationParam, _encode_CalculationParam } from "../CT-Authentication-Operations/CalculationParam.ta.mjs";
// export { CalculationParam, _decode_CalculationParam, _encode_CalculationParam } from "../CT-Authentication-Operations/CalculationParam.ta.mjs";


/**
 * @summary AuthSessionKeyInfo
 * @description
 *
 * Session key and the parameter used to derive it from the real authentication
 * key (ECMA-243 §6.3.1). Returned when `canCompute` is present and the
 * application leaves the challenge or response to the Visitor PINX (§6.5.7.1,
 * §7.5.3.1). The derivation is outside ECMA-243 (§1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthSessionKeyInfo ::= SEQUENCE {
 *     authSessionKey AuthSessionKey,
 *     calculationParam CalculationParam
 * }
 * ```
 * 
 * @class
 */
export
class AuthSessionKeyInfo {
    /**
     * @summary `authSessionKey`.
     * @description
     *
     * Authentication session key (ECMA-243 §6.3.1). The Visitor PINX uses it to
     * compute a challenge and/or a response (§6.5.6.1, §7.5.1.1). The
     * computation is outside ECMA-243 (§1).
     * @public
     * @readonly
     */
    readonly authSessionKey: AuthSessionKey;
    /**
     * @summary `calculationParam`.
     * @description
     *
     * Used when calculating the session key from the real authentication key.
     * It may be sent to the CTM user during SS-CTAT and during SS-CTAN
     * (ECMA-243 §6.3.1). The calculation is outside ECMA-243 (§1).
     * @public
     * @readonly
     */
    readonly calculationParam: CalculationParam;

    constructor (
        authSessionKey: AuthSessionKey,
        calculationParam: CalculationParam
    ) {
        this.authSessionKey = authSessionKey;
        this.calculationParam = calculationParam;
    }

    /**
     * @summary Restructures an object into a AuthSessionKeyInfo
     * @description
     * 
     * This takes an `object` and converts it to a `AuthSessionKeyInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthSessionKeyInfo`.
     * @returns {AuthSessionKeyInfo}
     */
    public static _from_object (_o: { [_K in keyof (AuthSessionKeyInfo)]: (AuthSessionKeyInfo)[_K] }): AuthSessionKeyInfo {
        return new AuthSessionKeyInfo(_o.authSessionKey, _o.calculationParam);
    }


}

/**
 * @summary The Leading Root Component Types of AuthSessionKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthSessionKeyInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("authSessionKey", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("calculationParam", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of AuthSessionKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthSessionKeyInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthSessionKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthSessionKeyInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthSessionKeyInfo: $.ASN1Decoder<AuthSessionKeyInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthSessionKeyInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthSessionKeyInfo (el: _Element): AuthSessionKeyInfo {
    if (!_cached_decoder_for_AuthSessionKeyInfo) { _cached_decoder_for_AuthSessionKeyInfo = function (el: _Element): AuthSessionKeyInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AuthSessionKeyInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "authSessionKey";
    sequence[1].name = "calculationParam";
    let authSessionKey!: AuthSessionKey;
    let calculationParam!: CalculationParam;
    authSessionKey = _decode_AuthSessionKey(sequence[0]);
    calculationParam = _decode_CalculationParam(sequence[1]);
    return new AuthSessionKeyInfo(
        authSessionKey,
        calculationParam,

    );
}; }
    return _cached_decoder_for_AuthSessionKeyInfo(el);
}

let _cached_encoder_for_AuthSessionKeyInfo: $.ASN1Encoder<AuthSessionKeyInfo> | null = null;

/**
 * @summary Encodes a(n) AuthSessionKeyInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthSessionKeyInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AuthSessionKeyInfo (value: AuthSessionKeyInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthSessionKeyInfo) { _cached_encoder_for_AuthSessionKeyInfo = function (value: AuthSessionKeyInfo): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_AuthSessionKey(value.authSessionKey, $.BER),
        /* REQUIRED   */ _encode_CalculationParam(value.calculationParam, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_AuthSessionKeyInfo(value, elGetter);
}


/* eslint-enable */
