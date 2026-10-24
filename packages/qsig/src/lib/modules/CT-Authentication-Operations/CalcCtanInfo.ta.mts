/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuthResponse, _decode_AuthResponse, _encode_AuthResponse } from "../CT-Authentication-Operations/AuthResponse.ta.mjs";
// export { AuthResponse, _decode_AuthResponse, _encode_AuthResponse } from "../CT-Authentication-Operations/AuthResponse.ta.mjs";
import { CalculationParam, _decode_CalculationParam, _encode_CalculationParam } from "../CT-Authentication-Operations/CalculationParam.ta.mjs";
// export { CalculationParam, _decode_CalculationParam, _encode_CalculationParam } from "../CT-Authentication-Operations/CalculationParam.ta.mjs";


/**
 * @summary CalcCtanInfo
 * @description
 *
 * Response the PISN sends to the CTM user for SS-CTAN, with an optional
 * calculation parameter (ECMA-243 §7.5.1.1, §7.5.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalcCtanInfo ::= SEQUENCE {
 *     authResponse AuthResponse,
 *     calculationParam CalculationParam OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CalcCtanInfo {
    /**
     * @summary `authResponse`.
     * @description
     *
     * Response value from the network (ECMA-243 §6.3.1). The Visitor PINX sends
     * it to the CTM user to accept the authentication request (§7.5.1.1).
     * @public
     * @readonly
     */
    readonly authResponse: AuthResponse;
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
        authResponse: AuthResponse,
        calculationParam?: OPTIONAL<CalculationParam>
    ) {
        this.authResponse = authResponse;
        this.calculationParam = calculationParam;
    }

    /**
     * @summary Restructures an object into a CalcCtanInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CalcCtanInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CalcCtanInfo`.
     * @returns {CalcCtanInfo}
     */
    public static _from_object (_o: { [_K in keyof (CalcCtanInfo)]: (CalcCtanInfo)[_K] }): CalcCtanInfo {
        return new CalcCtanInfo(_o.authResponse, _o.calculationParam);
    }


}

/**
 * @summary The Leading Root Component Types of CalcCtanInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CalcCtanInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("authResponse", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("calculationParam", true, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of CalcCtanInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CalcCtanInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CalcCtanInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CalcCtanInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CalcCtanInfo: $.ASN1Decoder<CalcCtanInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CalcCtanInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CalcCtanInfo (el: _Element): CalcCtanInfo {
    if (!_cached_decoder_for_CalcCtanInfo) { _cached_decoder_for_CalcCtanInfo = function (el: _Element): CalcCtanInfo {
    let authResponse!: AuthResponse;
    let calculationParam: OPTIONAL<CalculationParam>;
    const callbacks: $.DecodingMap = {
        "authResponse": (_el: _Element): void => { authResponse = _decode_AuthResponse(_el); },
        "calculationParam": (_el: _Element): void => { calculationParam = _decode_CalculationParam(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CalcCtanInfo,
        _extension_additions_list_spec_for_CalcCtanInfo,
        _root_component_type_list_2_spec_for_CalcCtanInfo,
        undefined,
    );
    return new CalcCtanInfo(
        authResponse,
        calculationParam
    );
}; }
    return _cached_decoder_for_CalcCtanInfo(el);
}

let _cached_encoder_for_CalcCtanInfo: $.ASN1Encoder<CalcCtanInfo> | null = null;

/**
 * @summary Encodes a(n) CalcCtanInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CalcCtanInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CalcCtanInfo (value: CalcCtanInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CalcCtanInfo) { _cached_encoder_for_CalcCtanInfo = function (value: CalcCtanInfo): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_AuthResponse(value.authResponse, $.BER));
    if (value.calculationParam !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CalculationParam(value.calculationParam, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CalcCtanInfo(value, elGetter);
}


/* eslint-enable */
