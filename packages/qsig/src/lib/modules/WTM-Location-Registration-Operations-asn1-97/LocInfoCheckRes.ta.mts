/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CheckResult, _decode_CheckResult, _encode_CheckResult, _enum_for_CheckResult } from "../WTM-Location-Registration-Operations-asn1-97/CheckResult.ta.mjs";
// export { CheckResult, _enum_for_CheckResult, CheckResult_locInfChk_correct /* IMPORTED_LONG_ENUMERATION_ITEM */, locInfChk_correct /* IMPORTED_SHORT_ENUMERATION_ITEM */, CheckResult_locInfChk_incorrect /* IMPORTED_LONG_ENUMERATION_ITEM */, locInfChk_incorrect /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CheckResult, _encode_CheckResult } from "../WTM-Location-Registration-Operations-asn1-97/CheckResult.ta.mjs";
import { LrExtension, _decode_LrExtension, _encode_LrExtension } from "../WTM-Location-Registration-Operations-asn1-97/LrExtension.ta.mjs";
// export { LrExtension, _decode_LrExtension, _encode_LrExtension } from "../WTM-Location-Registration-Operations-asn1-97/LrExtension.ta.mjs";


/**
 * @summary LocInfoCheckRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocInfoCheckRes ::= SEQUENCE {
 *     checkResult CheckResult,
 *     argExtension LrExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LocInfoCheckRes {
    /**
     * @summary `checkResult`.
     * @public
     * @readonly
     */
    readonly checkResult: CheckResult;
    /**
     * @summary `argExtension`.
     * @public
     * @readonly
     */
    readonly argExtension: OPTIONAL<LrExtension>;

    constructor (
        checkResult: CheckResult,
        argExtension: OPTIONAL<LrExtension>
    ) {
        this.checkResult = checkResult;
        this.argExtension = argExtension;
    }

    /**
     * @summary Restructures an object into a LocInfoCheckRes
     * @description
     * 
     * This takes an `object` and converts it to a `LocInfoCheckRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocInfoCheckRes`.
     * @returns {LocInfoCheckRes}
     */
    public static _from_object (_o: { [_K in keyof (LocInfoCheckRes)]: (LocInfoCheckRes)[_K] }): LocInfoCheckRes {
        return new LocInfoCheckRes(_o.checkResult, _o.argExtension);
    }

        /**
         * @summary The enum used as the type of the component `checkResult`
         * @public
         * @static
         */

    public static _enum_for_checkResult = _enum_for_CheckResult;
}

/**
 * @summary The Leading Root Component Types of LocInfoCheckRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocInfoCheckRes: $.ComponentSpec[] = [
    new $.ComponentSpec("checkResult", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("argExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of LocInfoCheckRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocInfoCheckRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocInfoCheckRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocInfoCheckRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocInfoCheckRes: $.ASN1Decoder<LocInfoCheckRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocInfoCheckRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocInfoCheckRes (el: _Element): LocInfoCheckRes {
    if (!_cached_decoder_for_LocInfoCheckRes) { _cached_decoder_for_LocInfoCheckRes = function (el: _Element): LocInfoCheckRes {
    let checkResult!: CheckResult;
    let argExtension: OPTIONAL<LrExtension>;
    const callbacks: $.DecodingMap = {
        "checkResult": (_el: _Element): void => { checkResult = _decode_CheckResult(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_LrExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocInfoCheckRes,
        _extension_additions_list_spec_for_LocInfoCheckRes,
        _root_component_type_list_2_spec_for_LocInfoCheckRes,
        undefined,
    );
    return new LocInfoCheckRes(
        checkResult,
        argExtension
    );
}; }
    return _cached_decoder_for_LocInfoCheckRes(el);
}

let _cached_encoder_for_LocInfoCheckRes: $.ASN1Encoder<LocInfoCheckRes> | null = null;

/**
 * @summary Encodes a(n) LocInfoCheckRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocInfoCheckRes, encoded as an ASN.1 Element.
 */
export
function _encode_LocInfoCheckRes (value: LocInfoCheckRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocInfoCheckRes) { _cached_encoder_for_LocInfoCheckRes = function (value: LocInfoCheckRes, elGetter: $.ASN1Encoder<LocInfoCheckRes>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_CheckResult(value.checkResult, $.BER));
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_LrExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LocInfoCheckRes(value, elGetter);
}


/* eslint-enable */
