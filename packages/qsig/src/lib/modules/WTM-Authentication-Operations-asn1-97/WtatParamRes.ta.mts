/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { WtatParamInfo, _decode_WtatParamInfo, _encode_WtatParamInfo } from "../WTM-Authentication-Operations-asn1-97/WtatParamInfo.ta.mjs";
// export { WtatParamInfo, _decode_WtatParamInfo, _encode_WtatParamInfo } from "../WTM-Authentication-Operations-asn1-97/WtatParamInfo.ta.mjs";
import { DummyExtension, _decode_DummyExtension, _encode_DummyExtension } from "../WTM-Authentication-Operations-asn1-97/DummyExtension.ta.mjs";
// export { DummyExtension, _decode_DummyExtension, _encode_DummyExtension } from "../WTM-Authentication-Operations-asn1-97/DummyExtension.ta.mjs";


/**
 * @summary WtatParamRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WtatParamRes ::= SEQUENCE {
 *     wtatParamInfo WtatParamInfo,
 *     dummyExtension DummyExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class WtatParamRes {
    /**
     * @summary `wtatParamInfo`.
     * @public
     * @readonly
     */
    readonly wtatParamInfo: WtatParamInfo;
    /**
     * @summary `dummyExtension`.
     * @public
     * @readonly
     */
    readonly dummyExtension: OPTIONAL<DummyExtension>;

    constructor (
        wtatParamInfo: WtatParamInfo,
        dummyExtension: OPTIONAL<DummyExtension>
    ) {
        this.wtatParamInfo = wtatParamInfo;
        this.dummyExtension = dummyExtension;
    }

    /**
     * @summary Restructures an object into a WtatParamRes
     * @description
     * 
     * This takes an `object` and converts it to a `WtatParamRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WtatParamRes`.
     * @returns {WtatParamRes}
     */
    public static _from_object (_o: { [_K in keyof (WtatParamRes)]: (WtatParamRes)[_K] }): WtatParamRes {
        return new WtatParamRes(_o.wtatParamInfo, _o.dummyExtension);
    }


}

/**
 * @summary The Leading Root Component Types of WtatParamRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_WtatParamRes: $.ComponentSpec[] = [
    new $.ComponentSpec("wtatParamInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("dummyExtension", true, $.or($.hasTag(_TagClass.context, 5), $.hasTag(_TagClass.context, 6)))
];

/**
 * @summary The Trailing Root Component Types of WtatParamRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_WtatParamRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of WtatParamRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_WtatParamRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_WtatParamRes: $.ASN1Decoder<WtatParamRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WtatParamRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WtatParamRes (el: _Element): WtatParamRes {
    if (!_cached_decoder_for_WtatParamRes) { _cached_decoder_for_WtatParamRes = function (el: _Element): WtatParamRes {
    let wtatParamInfo!: WtatParamInfo;
    let dummyExtension: OPTIONAL<DummyExtension>;
    const callbacks: $.DecodingMap = {
        "wtatParamInfo": (_el: _Element): void => { wtatParamInfo = _decode_WtatParamInfo(_el); },
        "dummyExtension": (_el: _Element): void => { dummyExtension = _decode_DummyExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_WtatParamRes,
        _extension_additions_list_spec_for_WtatParamRes,
        _root_component_type_list_2_spec_for_WtatParamRes,
        undefined,
    );
    return new WtatParamRes(
        wtatParamInfo,
        dummyExtension
    );
}; }
    return _cached_decoder_for_WtatParamRes(el);
}

let _cached_encoder_for_WtatParamRes: $.ASN1Encoder<WtatParamRes> | null = null;

/**
 * @summary Encodes a(n) WtatParamRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WtatParamRes, encoded as an ASN.1 Element.
 */
export
function _encode_WtatParamRes (value: WtatParamRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WtatParamRes) { _cached_encoder_for_WtatParamRes = function (value: WtatParamRes, elGetter: $.ASN1Encoder<WtatParamRes>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_WtatParamInfo(value.wtatParamInfo, $.BER));
    if (value.dummyExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DummyExtension(value.dummyExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_WtatParamRes(value, elGetter);
}


/* eslint-enable */
