/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CtatParamInfo, _decode_CtatParamInfo, _encode_CtatParamInfo } from "../CT-Authentication-Operations/CtatParamInfo.ta.mjs";
// export { CtatParamInfo, _decode_CtatParamInfo, _encode_CtatParamInfo } from "../CT-Authentication-Operations/CtatParamInfo.ta.mjs";
import { DummyExtension, _decode_DummyExtension, _encode_DummyExtension } from "../CT-Authentication-Operations/DummyExtension.ta.mjs";
// export { DummyExtension, _decode_DummyExtension, _encode_DummyExtension } from "../CT-Authentication-Operations/DummyExtension.ta.mjs";


/**
 * @summary CtatParamRes
 * @description
 *
 * Result of `getCtatParam` and of `ctatParamEnq`. The Home PINX returns the
 * parameters received from the Authentication Server PINX (ECMA-243 §6.5.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CtatParamRes ::= SEQUENCE {
 *     ctatParamInfo CtatParamInfo,
 *     dummyExtension DummyExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CtatParamRes {
    /**
     * @summary `ctatParamInfo`.
     * @description
     *
     * Session key, or precomputed challenge and response values, with the
     * algorithm in use (ECMA-243 §6.5.6.1, §6.5.7.1).
     * @public
     * @readonly
     */
    readonly ctatParamInfo: CtatParamInfo;
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
        ctatParamInfo: CtatParamInfo,
        dummyExtension?: OPTIONAL<DummyExtension>
    ) {
        this.ctatParamInfo = ctatParamInfo;
        this.dummyExtension = dummyExtension;
    }

    /**
     * @summary Restructures an object into a CtatParamRes
     * @description
     * 
     * This takes an `object` and converts it to a `CtatParamRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CtatParamRes`.
     * @returns {CtatParamRes}
     */
    public static _from_object (_o: { [_K in keyof (CtatParamRes)]: (CtatParamRes)[_K] }): CtatParamRes {
        return new CtatParamRes(_o.ctatParamInfo, _o.dummyExtension);
    }


}

/**
 * @summary The Leading Root Component Types of CtatParamRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CtatParamRes: $.ComponentSpec[] = [
    new $.ComponentSpec("ctatParamInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("dummyExtension", true, $.or($.hasTag(_TagClass.context, 3), $.hasTag(_TagClass.context, 4)))
];

/**
 * @summary The Trailing Root Component Types of CtatParamRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CtatParamRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CtatParamRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CtatParamRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CtatParamRes: $.ASN1Decoder<CtatParamRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CtatParamRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CtatParamRes (el: _Element): CtatParamRes {
    if (!_cached_decoder_for_CtatParamRes) { _cached_decoder_for_CtatParamRes = function (el: _Element): CtatParamRes {
    let ctatParamInfo!: CtatParamInfo;
    let dummyExtension: OPTIONAL<DummyExtension>;
    const callbacks: $.DecodingMap = {
        "ctatParamInfo": (_el: _Element): void => { ctatParamInfo = _decode_CtatParamInfo(_el); },
        "dummyExtension": (_el: _Element): void => { dummyExtension = _decode_DummyExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CtatParamRes,
        _extension_additions_list_spec_for_CtatParamRes,
        _root_component_type_list_2_spec_for_CtatParamRes,
        undefined,
    );
    return new CtatParamRes(
        ctatParamInfo,
        dummyExtension
    );
}; }
    return _cached_decoder_for_CtatParamRes(el);
}

let _cached_encoder_for_CtatParamRes: $.ASN1Encoder<CtatParamRes> | null = null;

/**
 * @summary Encodes a(n) CtatParamRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CtatParamRes, encoded as an ASN.1 Element.
 */
export
function _encode_CtatParamRes (value: CtatParamRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CtatParamRes) { _cached_encoder_for_CtatParamRes = function (value: CtatParamRes, elGetter: $.ASN1Encoder<CtatParamRes>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_CtatParamInfo(value.ctatParamInfo, $.BER));
    if (value.dummyExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DummyExtension(value.dummyExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CtatParamRes(value, elGetter);
}


/* eslint-enable */
