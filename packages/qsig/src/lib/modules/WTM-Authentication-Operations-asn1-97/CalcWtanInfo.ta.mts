/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type AuthResponse, _decode_AuthResponse, _encode_AuthResponse } from "../WTM-Authentication-Operations-asn1-97/AuthResponse.ta.mjs";
import { type CalculationParam, _decode_CalculationParam, _encode_CalculationParam } from "../WTM-Authentication-Operations-asn1-97/CalculationParam.ta.mjs";

/**
 * @summary CalcWtanInfo
 * @description
 *
 * Response the PISN sends to the WTM user for SS-WTAN, with an optional
 * calculation parameter (ECMA-306 §7.5.1.1, §7.5.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalcWtanInfo ::= SEQUENCE {
 *     authResponse AuthResponse,
 *     calculationParam CalculationParam OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CalcWtanInfo {
    /**
     * @summary `authResponse`.
     * @description
     *
     * Response value from the network (ECMA-306 §6.3.1). The Visitor PINX sends
     * it to the WTM user to accept the authentication request (§7.5.1.1).
     * @public
     * @readonly
     */
    readonly authResponse: AuthResponse;
    /**
     * @summary `calculationParam`.
     * @description
     *
     * Included when the algorithm in use requires it (ECMA-306 §6.3.1). The
     * calculation is outside ECMA-306 (§1).
     * @public
     * @readonly
     */
    readonly calculationParam: OPTIONAL<CalculationParam>;

    constructor (
        authResponse: AuthResponse,
        calculationParam?: OPTIONAL<CalculationParam>
    ) {
        this.authResponse = authResponse;
        this.calculationParam = calculationParam;
    }

    /**
     * @summary Restructures an object into a CalcWtanInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CalcWtanInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CalcWtanInfo`.
     * @returns {CalcWtanInfo}
     */
    public static _from_object (_o: { [_K in keyof (CalcWtanInfo)]: (CalcWtanInfo)[_K] }): CalcWtanInfo {
        return new CalcWtanInfo(_o.authResponse, _o.calculationParam);
    }

}

/**
 * @summary The Leading Root Component Types of CalcWtanInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CalcWtanInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("authResponse", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("calculationParam", true, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of CalcWtanInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CalcWtanInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CalcWtanInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CalcWtanInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CalcWtanInfo: $.ASN1Decoder<CalcWtanInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CalcWtanInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CalcWtanInfo (el: _Element): CalcWtanInfo {
    if (!_cached_decoder_for_CalcWtanInfo) { _cached_decoder_for_CalcWtanInfo = function (el: _Element): CalcWtanInfo {
    let authResponse!: AuthResponse;
    let calculationParam: OPTIONAL<CalculationParam>;
    const callbacks: $.DecodingMap = {
        "authResponse": (_el: _Element): void => { authResponse = _decode_AuthResponse(_el); },
        "calculationParam": (_el: _Element): void => { calculationParam = _decode_CalculationParam(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CalcWtanInfo,
        _extension_additions_list_spec_for_CalcWtanInfo,
        _root_component_type_list_2_spec_for_CalcWtanInfo,
        undefined,
    );
    return new CalcWtanInfo(
        authResponse,
        calculationParam
    );
}; }
    return _cached_decoder_for_CalcWtanInfo(el);
}

let _cached_encoder_for_CalcWtanInfo: $.ASN1Encoder<CalcWtanInfo> | null = null;

/**
 * @summary Encodes a(n) CalcWtanInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CalcWtanInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CalcWtanInfo (value: CalcWtanInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CalcWtanInfo) { _cached_encoder_for_CalcWtanInfo = function (value: CalcWtanInfo, _elGetter: $.ASN1Encoder<CalcWtanInfo>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_AuthResponse(value.authResponse, $.BER));
    if (value.calculationParam !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CalculationParam(value.calculationParam, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CalcWtanInfo(value, elGetter);
}

/* eslint-enable */
