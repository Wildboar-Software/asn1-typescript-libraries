/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuthAlgorithm, _decode_AuthAlgorithm, _encode_AuthAlgorithm } from "../WTM-Authentication-Operations-asn1-97/AuthAlgorithm.ta.mjs";
// export { AuthAlgorithm, _decode_AuthAlgorithm, _encode_AuthAlgorithm } from "../WTM-Authentication-Operations-asn1-97/AuthAlgorithm.ta.mjs";
import { WtatParamInfo_wtatParamInfoChoice, _decode_WtatParamInfo_wtatParamInfoChoice, _encode_WtatParamInfo_wtatParamInfoChoice } from "../WTM-Authentication-Operations-asn1-97/WtatParamInfo-wtatParamInfoChoice.ta.mjs";
// export { WtatParamInfo_wtatParamInfoChoice, _decode_WtatParamInfo_wtatParamInfoChoice, _encode_WtatParamInfo_wtatParamInfoChoice } from "../WTM-Authentication-Operations-asn1-97/WtatParamInfo-wtatParamInfoChoice.ta.mjs";


/**
 * @summary WtatParamInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WtatParamInfo ::= SEQUENCE {
 *     authAlgorithm AuthAlgorithm,
 *     wtatParamInfoChoice CHOICE {
 *         authSessionKeyInfo [1] IMPLICIT AuthSessionKeyInfo,
 *         calcWtatInfo [2] IMPLICIT CalcWtatInfo,
 *         authKey [3] IMPLICIT AuthKey,
 *         challLen [4] IMPLICIT INTEGER (1..8)
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class WtatParamInfo {
    /**
     * @summary `authAlgorithm`.
     * @public
     * @readonly
     */
    readonly authAlgorithm: AuthAlgorithm;
    /**
     * @summary `wtatParamInfoChoice`.
     * @public
     * @readonly
     */
    readonly wtatParamInfoChoice: WtatParamInfo_wtatParamInfoChoice;

    constructor (
        authAlgorithm: AuthAlgorithm,
        wtatParamInfoChoice: WtatParamInfo_wtatParamInfoChoice
    ) {
        this.authAlgorithm = authAlgorithm;
        this.wtatParamInfoChoice = wtatParamInfoChoice;
    }

    /**
     * @summary Restructures an object into a WtatParamInfo
     * @description
     * 
     * This takes an `object` and converts it to a `WtatParamInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WtatParamInfo`.
     * @returns {WtatParamInfo}
     */
    public static _from_object (_o: { [_K in keyof (WtatParamInfo)]: (WtatParamInfo)[_K] }): WtatParamInfo {
        return new WtatParamInfo(_o.authAlgorithm, _o.wtatParamInfoChoice);
    }


}

/**
 * @summary The Leading Root Component Types of WtatParamInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_WtatParamInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("authAlgorithm", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("wtatParamInfoChoice", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of WtatParamInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_WtatParamInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of WtatParamInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_WtatParamInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_WtatParamInfo: $.ASN1Decoder<WtatParamInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WtatParamInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WtatParamInfo (el: _Element): WtatParamInfo {
    if (!_cached_decoder_for_WtatParamInfo) { _cached_decoder_for_WtatParamInfo = function (el: _Element): WtatParamInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("WtatParamInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "authAlgorithm";
    sequence[1].name = "wtatParamInfoChoice";
    let authAlgorithm!: AuthAlgorithm;
    let wtatParamInfoChoice!: WtatParamInfo_wtatParamInfoChoice;
    authAlgorithm = _decode_AuthAlgorithm(sequence[0]);
    wtatParamInfoChoice = _decode_WtatParamInfo_wtatParamInfoChoice(sequence[1]);
    return new WtatParamInfo(
        authAlgorithm,
        wtatParamInfoChoice,

    );
}; }
    return _cached_decoder_for_WtatParamInfo(el);
}

let _cached_encoder_for_WtatParamInfo: $.ASN1Encoder<WtatParamInfo> | null = null;

/**
 * @summary Encodes a(n) WtatParamInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WtatParamInfo, encoded as an ASN.1 Element.
 */
export
function _encode_WtatParamInfo (value: WtatParamInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WtatParamInfo) { _cached_encoder_for_WtatParamInfo = function (value: WtatParamInfo, elGetter: $.ASN1Encoder<WtatParamInfo>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_AuthAlgorithm(value.authAlgorithm, $.BER),
        /* REQUIRED   */ _encode_WtatParamInfo_wtatParamInfoChoice(value.wtatParamInfoChoice, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_WtatParamInfo(value, elGetter);
}


/* eslint-enable */
