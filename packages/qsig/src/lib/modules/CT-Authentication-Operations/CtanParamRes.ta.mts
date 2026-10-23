/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CtanParamInfo, _decode_CtanParamInfo, _encode_CtanParamInfo } from "../CT-Authentication-Operations/CtanParamInfo.ta.mjs";
// export { CtanParamInfo, _decode_CtanParamInfo, _encode_CtanParamInfo } from "../CT-Authentication-Operations/CtanParamInfo.ta.mjs";
import { DummyExtension, _decode_DummyExtension, _encode_DummyExtension } from "../CT-Authentication-Operations/DummyExtension.ta.mjs";
// export { DummyExtension, _decode_DummyExtension, _encode_DummyExtension } from "../CT-Authentication-Operations/DummyExtension.ta.mjs";


/**
 * @summary CtanParamRes
 * @description
 *
 * Result of `getCtanParam` and of `ctanParamEnq`. The Home PINX forwards the
 * information from the `ctanParamEnq` result (ECMA-243 §7.5.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CtanParamRes ::= SEQUENCE {
 *     ctanParamInfo CtanParamInfo,
 *     dummyExtension DummyExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CtanParamRes {
    /**
     * @summary `ctanParamInfo`.
     * @description
     *
     * Session key, or the response computed by the Authentication Server PINX
     * (ECMA-243 §7.5.1.1, §7.5.3.1).
     * @public
     * @readonly
     */
    readonly ctanParamInfo: CtanParamInfo;
    /**
     * @summary `dummyExtension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-243 §6.3.1 defines none.
     * @public
     * @readonly
     */
    readonly dummyExtension: OPTIONAL<DummyExtension>;

    constructor (
        ctanParamInfo: CtanParamInfo,
        dummyExtension?: OPTIONAL<DummyExtension>
    ) {
        this.ctanParamInfo = ctanParamInfo;
        this.dummyExtension = dummyExtension;
    }

    /**
     * @summary Restructures an object into a CtanParamRes
     * @description
     * 
     * This takes an `object` and converts it to a `CtanParamRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CtanParamRes`.
     * @returns {CtanParamRes}
     */
    public static _from_object (_o: { [_K in keyof (CtanParamRes)]: (CtanParamRes)[_K] }): CtanParamRes {
        return new CtanParamRes(_o.ctanParamInfo, _o.dummyExtension);
    }


}

/**
 * @summary The Leading Root Component Types of CtanParamRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CtanParamRes: $.ComponentSpec[] = [
    new $.ComponentSpec("ctanParamInfo", false, $.hasAnyTag),
    new $.ComponentSpec("dummyExtension", true, $.or($.hasTag(_TagClass.context, 3), $.hasTag(_TagClass.context, 4)))
];

/**
 * @summary The Trailing Root Component Types of CtanParamRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CtanParamRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CtanParamRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CtanParamRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CtanParamRes: $.ASN1Decoder<CtanParamRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CtanParamRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CtanParamRes (el: _Element): CtanParamRes {
    if (!_cached_decoder_for_CtanParamRes) { _cached_decoder_for_CtanParamRes = function (el: _Element): CtanParamRes {
    let ctanParamInfo!: CtanParamInfo;
    let dummyExtension: OPTIONAL<DummyExtension>;
    const callbacks: $.DecodingMap = {
        "ctanParamInfo": (_el: _Element): void => { ctanParamInfo = _decode_CtanParamInfo(_el); },
        "dummyExtension": (_el: _Element): void => { dummyExtension = _decode_DummyExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CtanParamRes,
        _extension_additions_list_spec_for_CtanParamRes,
        _root_component_type_list_2_spec_for_CtanParamRes,
        undefined,
    );
    return new CtanParamRes(
        ctanParamInfo,
        dummyExtension
    );
}; }
    return _cached_decoder_for_CtanParamRes(el);
}

let _cached_encoder_for_CtanParamRes: $.ASN1Encoder<CtanParamRes> | null = null;

/**
 * @summary Encodes a(n) CtanParamRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CtanParamRes, encoded as an ASN.1 Element.
 */
export
function _encode_CtanParamRes (value: CtanParamRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CtanParamRes) { _cached_encoder_for_CtanParamRes = function (value: CtanParamRes, elGetter: $.ASN1Encoder<CtanParamRes>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_CtanParamInfo(value.ctanParamInfo, $.BER));
    if (value.dummyExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DummyExtension(value.dummyExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CtanParamRes(value, elGetter);
}


/* eslint-enable */
