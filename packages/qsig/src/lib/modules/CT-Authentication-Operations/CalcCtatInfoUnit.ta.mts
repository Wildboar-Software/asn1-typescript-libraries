/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuthChallenge, _decode_AuthChallenge, _encode_AuthChallenge } from "../CT-Authentication-Operations/AuthChallenge.ta.mjs";
// export { AuthChallenge, _decode_AuthChallenge, _encode_AuthChallenge } from "../CT-Authentication-Operations/AuthChallenge.ta.mjs";
import { AuthResponse, _decode_AuthResponse, _encode_AuthResponse } from "../CT-Authentication-Operations/AuthResponse.ta.mjs";
// export { AuthResponse, _decode_AuthResponse, _encode_AuthResponse } from "../CT-Authentication-Operations/AuthResponse.ta.mjs";
import { DerivedCipherKey, _decode_DerivedCipherKey, _encode_DerivedCipherKey } from "../CT-Authentication-Operations/DerivedCipherKey.ta.mjs";
// export { DerivedCipherKey, _decode_DerivedCipherKey, _encode_DerivedCipherKey } from "../CT-Authentication-Operations/DerivedCipherKey.ta.mjs";
import { CalculationParam, _decode_CalculationParam, _encode_CalculationParam } from "../CT-Authentication-Operations/CalculationParam.ta.mjs";
// export { CalculationParam, _decode_CalculationParam, _encode_CalculationParam } from "../CT-Authentication-Operations/CalculationParam.ta.mjs";


/**
 * @summary CalcCtatInfoUnit
 * @description
 *
 * One SS-CTAT challenge and the response the CTM user is expected to return
 * (ECMA-243 §6.3.1, §6.5.5.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalcCtatInfoUnit ::= SEQUENCE {
 *     authChallenge AuthChallenge,
 *     authResponse AuthResponse,
 *     derivedCipherKey [1] IMPLICIT DerivedCipherKey OPTIONAL,
 *     calculationParam [2] IMPLICIT CalculationParam OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CalcCtatInfoUnit {
    /**
     * @summary `authChallenge`.
     * @description
     *
     * Randomly generated challenge sent toward the CTM user (ECMA-243 §6.3.1).
     * Generation is outside ECMA-243 (§1).
     * @public
     * @readonly
     */
    readonly authChallenge: AuthChallenge;
    /**
     * @summary `authResponse`.
     * @description
     *
     * Expected response for this challenge (ECMA-243 §6.3.1). The Visitor PINX
     * compares the CTM user's response with it (§6.5.5.1).
     * @public
     * @readonly
     */
    readonly authResponse: AuthResponse;
    /**
     * @summary `derivedCipherKey`.
     * @description
     *
     * Included when the algorithm in use requires it (ECMA-243 §6.3.1).
     * ECMA-243 does not define how it is derived (§1).
     * @public
     * @readonly
     */
    readonly derivedCipherKey: OPTIONAL<DerivedCipherKey>;
    /**
     * @summary `calculationParam`.
     * @description
     *
     * Included when the algorithm in use requires it (ECMA-243 §6.3.1). The
     * calculation is outside ECMA-243 (§1).
     * @public
     * @readonly
     */
    readonly calculationParam: OPTIONAL<CalculationParam>;

    constructor (
        authChallenge: AuthChallenge,
        authResponse: AuthResponse,
        derivedCipherKey?: OPTIONAL<DerivedCipherKey>,
        calculationParam?: OPTIONAL<CalculationParam>
    ) {
        this.authChallenge = authChallenge;
        this.authResponse = authResponse;
        this.derivedCipherKey = derivedCipherKey;
        this.calculationParam = calculationParam;
    }

    /**
     * @summary Restructures an object into a CalcCtatInfoUnit
     * @description
     * 
     * This takes an `object` and converts it to a `CalcCtatInfoUnit`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CalcCtatInfoUnit`.
     * @returns {CalcCtatInfoUnit}
     */
    public static _from_object (_o: { [_K in keyof (CalcCtatInfoUnit)]: (CalcCtatInfoUnit)[_K] }): CalcCtatInfoUnit {
        return new CalcCtatInfoUnit(_o.authChallenge, _o.authResponse, _o.derivedCipherKey, _o.calculationParam);
    }


}

/**
 * @summary The Leading Root Component Types of CalcCtatInfoUnit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CalcCtatInfoUnit: $.ComponentSpec[] = [
    new $.ComponentSpec("authChallenge", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("authResponse", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("derivedCipherKey", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("calculationParam", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CalcCtatInfoUnit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CalcCtatInfoUnit: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CalcCtatInfoUnit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CalcCtatInfoUnit: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CalcCtatInfoUnit: $.ASN1Decoder<CalcCtatInfoUnit> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CalcCtatInfoUnit
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CalcCtatInfoUnit (el: _Element): CalcCtatInfoUnit {
    if (!_cached_decoder_for_CalcCtatInfoUnit) { _cached_decoder_for_CalcCtatInfoUnit = function (el: _Element): CalcCtatInfoUnit {
    let authChallenge!: AuthChallenge;
    let authResponse!: AuthResponse;
    let derivedCipherKey: OPTIONAL<DerivedCipherKey>;
    let calculationParam: OPTIONAL<CalculationParam>;
    const callbacks: $.DecodingMap = {
        "authChallenge": (_el: _Element): void => { authChallenge = _decode_AuthChallenge(_el); },
        "authResponse": (_el: _Element): void => { authResponse = _decode_AuthResponse(_el); },
        "derivedCipherKey": (_el: _Element): void => { derivedCipherKey = $._decode_implicit<DerivedCipherKey>(() => _decode_DerivedCipherKey)(_el); },
        "calculationParam": (_el: _Element): void => { calculationParam = $._decode_implicit<CalculationParam>(() => _decode_CalculationParam)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CalcCtatInfoUnit,
        _extension_additions_list_spec_for_CalcCtatInfoUnit,
        _root_component_type_list_2_spec_for_CalcCtatInfoUnit,
        undefined,
    );
    return new CalcCtatInfoUnit(
        authChallenge,
        authResponse,
        derivedCipherKey,
        calculationParam
    );
}; }
    return _cached_decoder_for_CalcCtatInfoUnit(el);
}

let _cached_encoder_for_CalcCtatInfoUnit: $.ASN1Encoder<CalcCtatInfoUnit> | null = null;

/**
 * @summary Encodes a(n) CalcCtatInfoUnit into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CalcCtatInfoUnit, encoded as an ASN.1 Element.
 */
export
function _encode_CalcCtatInfoUnit (value: CalcCtatInfoUnit, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CalcCtatInfoUnit) { _cached_encoder_for_CalcCtatInfoUnit = function (value: CalcCtatInfoUnit): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_AuthChallenge(value.authChallenge, $.BER));
    _components.push(/* REQUIRED   */ _encode_AuthResponse(value.authResponse, $.BER));
    if (value.derivedCipherKey !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_DerivedCipherKey, $.BER)(value.derivedCipherKey, $.BER));
    }
    if (value.calculationParam !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CalculationParam, $.BER)(value.calculationParam, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CalcCtatInfoUnit(value, elGetter);
}


/* eslint-enable */
