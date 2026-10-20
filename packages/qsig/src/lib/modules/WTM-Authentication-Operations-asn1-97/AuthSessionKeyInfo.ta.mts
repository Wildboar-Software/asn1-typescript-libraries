/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuthSessionKey, _decode_AuthSessionKey, _encode_AuthSessionKey } from "../WTM-Authentication-Operations-asn1-97/AuthSessionKey.ta.mjs";
import { CalculationParam, _decode_CalculationParam, _encode_CalculationParam } from "../WTM-Authentication-Operations-asn1-97/CalculationParam.ta.mjs";

/**
 * @summary AuthSessionKeyInfo
 * @description
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
     * @public
     * @readonly
     */
    readonly authSessionKey: AuthSessionKey;
    /**
     * @summary `calculationParam`.
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
    if (!_cached_encoder_for_AuthSessionKeyInfo) { _cached_encoder_for_AuthSessionKeyInfo = function (value: AuthSessionKeyInfo, elGetter: $.ASN1Encoder<AuthSessionKeyInfo>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_AuthSessionKey(value.authSessionKey, $.BER),
        /* REQUIRED   */ _encode_CalculationParam(value.calculationParam, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_AuthSessionKeyInfo(value, elGetter);
}

/* eslint-enable */
