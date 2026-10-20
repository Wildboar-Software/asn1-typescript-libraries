/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { WtanParamInfo, _decode_WtanParamInfo, _encode_WtanParamInfo } from "../WTM-Authentication-Operations-asn1-97/WtanParamInfo.ta.mjs";
import { DummyExtension, _decode_DummyExtension, _encode_DummyExtension } from "../WTM-Authentication-Operations-asn1-97/DummyExtension.ta.mjs";

/**
 * @summary WtanParamRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WtanParamRes ::= SEQUENCE {
 *     wtanParamInfo WtanParamInfo,
 *     dummyExtension DummyExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class WtanParamRes {
    /**
     * @summary `wtanParamInfo`.
     * @public
     * @readonly
     */
    readonly wtanParamInfo: WtanParamInfo;
    /**
     * @summary `dummyExtension`.
     * @public
     * @readonly
     */
    readonly dummyExtension: OPTIONAL<DummyExtension>;

    constructor (
        wtanParamInfo: WtanParamInfo,
        dummyExtension: OPTIONAL<DummyExtension>
    ) {
        this.wtanParamInfo = wtanParamInfo;
        this.dummyExtension = dummyExtension;
    }

    /**
     * @summary Restructures an object into a WtanParamRes
     * @description
     * 
     * This takes an `object` and converts it to a `WtanParamRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WtanParamRes`.
     * @returns {WtanParamRes}
     */
    public static _from_object (_o: { [_K in keyof (WtanParamRes)]: (WtanParamRes)[_K] }): WtanParamRes {
        return new WtanParamRes(_o.wtanParamInfo, _o.dummyExtension);
    }

}

/**
 * @summary The Leading Root Component Types of WtanParamRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_WtanParamRes: $.ComponentSpec[] = [
    new $.ComponentSpec("wtanParamInfo", false, $.hasAnyTag),
    new $.ComponentSpec("dummyExtension", true, $.or($.hasTag(_TagClass.context, 5), $.hasTag(_TagClass.context, 6)))
];

/**
 * @summary The Trailing Root Component Types of WtanParamRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_WtanParamRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of WtanParamRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_WtanParamRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_WtanParamRes: $.ASN1Decoder<WtanParamRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WtanParamRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WtanParamRes (el: _Element): WtanParamRes {
    if (!_cached_decoder_for_WtanParamRes) { _cached_decoder_for_WtanParamRes = function (el: _Element): WtanParamRes {
    let wtanParamInfo!: WtanParamInfo;
    let dummyExtension: OPTIONAL<DummyExtension>;
    const callbacks: $.DecodingMap = {
        "wtanParamInfo": (_el: _Element): void => { wtanParamInfo = _decode_WtanParamInfo(_el); },
        "dummyExtension": (_el: _Element): void => { dummyExtension = _decode_DummyExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_WtanParamRes,
        _extension_additions_list_spec_for_WtanParamRes,
        _root_component_type_list_2_spec_for_WtanParamRes,
        undefined,
    );
    return new WtanParamRes(
        wtanParamInfo,
        dummyExtension
    );
}; }
    return _cached_decoder_for_WtanParamRes(el);
}

let _cached_encoder_for_WtanParamRes: $.ASN1Encoder<WtanParamRes> | null = null;

/**
 * @summary Encodes a(n) WtanParamRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WtanParamRes, encoded as an ASN.1 Element.
 */
export
function _encode_WtanParamRes (value: WtanParamRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WtanParamRes) { _cached_encoder_for_WtanParamRes = function (value: WtanParamRes, _elGetter: $.ASN1Encoder<WtanParamRes>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_WtanParamInfo(value.wtanParamInfo, $.BER));
    if (value.dummyExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DummyExtension(value.dummyExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_WtanParamRes(value, elGetter);
}

/* eslint-enable */
