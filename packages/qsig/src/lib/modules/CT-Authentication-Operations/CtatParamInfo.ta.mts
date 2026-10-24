/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuthAlgorithm, _decode_AuthAlgorithm, _encode_AuthAlgorithm } from "../CT-Authentication-Operations/AuthAlgorithm.ta.mjs";
// export { AuthAlgorithm, AuthAlgorithm_ct2 /* IMPORTED_LONG_NAMED_INTEGER */, ct2 /* IMPORTED_SHORT_NAMED_INTEGER */, AuthAlgorithm_dect /* IMPORTED_LONG_NAMED_INTEGER */, dect /* IMPORTED_SHORT_NAMED_INTEGER */, AuthAlgorithm_gsm /* IMPORTED_LONG_NAMED_INTEGER */, gsm /* IMPORTED_SHORT_NAMED_INTEGER */, AuthAlgorithm_us_ct2 /* IMPORTED_LONG_NAMED_INTEGER */, us_ct2 /* IMPORTED_SHORT_NAMED_INTEGER */, AuthAlgorithm_us_dect /* IMPORTED_LONG_NAMED_INTEGER */, us_dect /* IMPORTED_SHORT_NAMED_INTEGER */, AuthAlgorithm_us_gsm /* IMPORTED_LONG_NAMED_INTEGER */, us_gsm /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AuthAlgorithm, _encode_AuthAlgorithm } from "../CT-Authentication-Operations/AuthAlgorithm.ta.mjs";
import { CtatParamInfo_info, _decode_CtatParamInfo_info, _encode_CtatParamInfo_info } from "../CT-Authentication-Operations/CtatParamInfo-info.ta.mjs";
// export { CtatParamInfo_info, _decode_CtatParamInfo_info, _encode_CtatParamInfo_info } from "../CT-Authentication-Operations/CtatParamInfo-info.ta.mjs";


/**
 * @summary CtatParamInfo
 * @description
 *
 * SS-CTAT parameters chosen by the Authentication Server PINX (ECMA-243
 * §6.5.7.1). Choice `authSessionKeyInfo` means the Visitor PINX computes the
 * challenge and expected response. Choice `calcCtatInfo` is that computation
 * already done. The same value may be sent on to a new Visitor PINX by
 * `transferAuthParam` during SS-CTLR (§6.8.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CtatParamInfo ::= SEQUENCE {
 *     authAlgorithm AuthAlgorithm,
 *     info CHOICE {
 *         authSessionKeyInfo [1] IMPLICIT AuthSessionKeyInfo,
 *         calcCtatInfo [2] IMPLICIT CalcCtatInfo
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class CtatParamInfo {
    /**
     * @summary `authAlgorithm`.
     * @description
     *
     * Algorithm in use. The `ctatParamEnq` result shall contain it (ECMA-243
     * §6.5.7.1). Algorithm behaviour is outside ECMA-243 (§1).
     * @public
     * @readonly
     */
    readonly authAlgorithm: AuthAlgorithm;
    /**
     * @summary `info`.
     * @description
     *
     * Session key, or the computed challenge and response values (ECMA-243
     * §6.5.7.1).
     * @public
     * @readonly
     */
    readonly info: CtatParamInfo_info;

    constructor (
        authAlgorithm: AuthAlgorithm,
        info: CtatParamInfo_info
    ) {
        this.authAlgorithm = authAlgorithm;
        this.info = info;
    }

    /**
     * @summary Restructures an object into a CtatParamInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CtatParamInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CtatParamInfo`.
     * @returns {CtatParamInfo}
     */
    public static _from_object (_o: { [_K in keyof (CtatParamInfo)]: (CtatParamInfo)[_K] }): CtatParamInfo {
        return new CtatParamInfo(_o.authAlgorithm, _o.info);
    }


}

/**
 * @summary The Leading Root Component Types of CtatParamInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CtatParamInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("authAlgorithm", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("info", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of CtatParamInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CtatParamInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CtatParamInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CtatParamInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CtatParamInfo: $.ASN1Decoder<CtatParamInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CtatParamInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CtatParamInfo (el: _Element): CtatParamInfo {
    if (!_cached_decoder_for_CtatParamInfo) { _cached_decoder_for_CtatParamInfo = function (el: _Element): CtatParamInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CtatParamInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "authAlgorithm";
    sequence[1].name = "info";
    let authAlgorithm!: AuthAlgorithm;
    let info!: CtatParamInfo_info;
    authAlgorithm = _decode_AuthAlgorithm(sequence[0]);
    info = _decode_CtatParamInfo_info(sequence[1]);
    return new CtatParamInfo(
        authAlgorithm,
        info,

    );
}; }
    return _cached_decoder_for_CtatParamInfo(el);
}

let _cached_encoder_for_CtatParamInfo: $.ASN1Encoder<CtatParamInfo> | null = null;

/**
 * @summary Encodes a(n) CtatParamInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CtatParamInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CtatParamInfo (value: CtatParamInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CtatParamInfo) { _cached_encoder_for_CtatParamInfo = function (value: CtatParamInfo): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_AuthAlgorithm(value.authAlgorithm, $.BER),
        /* REQUIRED   */ _encode_CtatParamInfo_info(value.info, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CtatParamInfo(value, elGetter);
}


/* eslint-enable */
