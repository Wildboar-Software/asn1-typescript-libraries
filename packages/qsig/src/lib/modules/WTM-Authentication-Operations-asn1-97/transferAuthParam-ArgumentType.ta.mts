/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { WtatParamInfo, _decode_WtatParamInfo, _encode_WtatParamInfo } from "../WTM-Authentication-Operations-asn1-97/WtatParamInfo.ta.mjs";
import { DummyExtension, _decode_DummyExtension, _encode_DummyExtension } from "../WTM-Authentication-Operations-asn1-97/DummyExtension.ta.mjs";

/**
 * @summary transferAuthParam_ArgumentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * transferAuthParam-ArgumentType ::= SEQUENCE {
 *     wtatParamInfo WtatParamInfo,
 *     dummyExtension DummyExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class transferAuthParam_ArgumentType {
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
     * @summary Restructures an object into a transferAuthParam_ArgumentType
     * @description
     * 
     * This takes an `object` and converts it to a `transferAuthParam_ArgumentType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `transferAuthParam_ArgumentType`.
     * @returns {transferAuthParam_ArgumentType}
     */
    public static _from_object (_o: { [_K in keyof (transferAuthParam_ArgumentType)]: (transferAuthParam_ArgumentType)[_K] }): transferAuthParam_ArgumentType {
        return new transferAuthParam_ArgumentType(_o.wtatParamInfo, _o.dummyExtension);
    }

}

/**
 * @summary The Leading Root Component Types of transferAuthParam_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_transferAuthParam_ArgumentType: $.ComponentSpec[] = [
    new $.ComponentSpec("wtatParamInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("dummyExtension", true, $.or($.hasTag(_TagClass.context, 5), $.hasTag(_TagClass.context, 6)))
];

/**
 * @summary The Trailing Root Component Types of transferAuthParam_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_transferAuthParam_ArgumentType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of transferAuthParam_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_transferAuthParam_ArgumentType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_transferAuthParam_ArgumentType: $.ASN1Decoder<transferAuthParam_ArgumentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) transferAuthParam_ArgumentType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_transferAuthParam_ArgumentType (el: _Element): transferAuthParam_ArgumentType {
    if (!_cached_decoder_for_transferAuthParam_ArgumentType) { _cached_decoder_for_transferAuthParam_ArgumentType = function (el: _Element): transferAuthParam_ArgumentType {
    let wtatParamInfo!: WtatParamInfo;
    let dummyExtension: OPTIONAL<DummyExtension>;
    const callbacks: $.DecodingMap = {
        "wtatParamInfo": (_el: _Element): void => { wtatParamInfo = _decode_WtatParamInfo(_el); },
        "dummyExtension": (_el: _Element): void => { dummyExtension = _decode_DummyExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_transferAuthParam_ArgumentType,
        _extension_additions_list_spec_for_transferAuthParam_ArgumentType,
        _root_component_type_list_2_spec_for_transferAuthParam_ArgumentType,
        undefined,
    );
    return new transferAuthParam_ArgumentType(
        wtatParamInfo,
        dummyExtension
    );
}; }
    return _cached_decoder_for_transferAuthParam_ArgumentType(el);
}

let _cached_encoder_for_transferAuthParam_ArgumentType: $.ASN1Encoder<transferAuthParam_ArgumentType> | null = null;

/**
 * @summary Encodes a(n) transferAuthParam_ArgumentType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The transferAuthParam_ArgumentType, encoded as an ASN.1 Element.
 */
export
function _encode_transferAuthParam_ArgumentType (value: transferAuthParam_ArgumentType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_transferAuthParam_ArgumentType) { _cached_encoder_for_transferAuthParam_ArgumentType = function (value: transferAuthParam_ArgumentType, elGetter: $.ASN1Encoder<transferAuthParam_ArgumentType>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_WtatParamInfo(value.wtatParamInfo, $.BER));
    if (value.dummyExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DummyExtension(value.dummyExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_transferAuthParam_ArgumentType(value, elGetter);
}

/* eslint-enable */
