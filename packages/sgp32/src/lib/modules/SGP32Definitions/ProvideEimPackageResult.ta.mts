/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Octet16, _decode_Octet16, _encode_Octet16 } from "../RSPDefinitions/Octet16.ta.mjs";
// export { Octet16, _decode_Octet16, _encode_Octet16 } from "../RSPDefinitions/Octet16.ta.mjs";
import { EimPackageResult, _decode_EimPackageResult, _encode_EimPackageResult } from "../SGP32Definitions/EimPackageResult.ta.mjs";
// export { EimPackageResult, _decode_EimPackageResult, _encode_EimPackageResult } from "../SGP32Definitions/EimPackageResult.ta.mjs";


/**
 * @summary ProvideEimPackageResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideEimPackageResult ::= [80] SEQUENCE { -- Tag 'BF50'
 *     eidValue [APPLICATION 26] Octet16 OPTIONAL, -- Tag '5A'
 *     eimPackageResult EimPackageResult
 * }
 * ```
 * 
 * @class
 */
export
class ProvideEimPackageResult {
    constructor (
        /**
         * @summary `eidValue`.
         * @public
         * @readonly
         */
        readonly eidValue: OPTIONAL<Octet16>,
        /**
         * @summary `eimPackageResult`.
         * @public
         * @readonly
         */
        readonly eimPackageResult: EimPackageResult
    ) {}

    /**
     * @summary Restructures an object into a ProvideEimPackageResult
     * @description
     * 
     * This takes an `object` and converts it to a `ProvideEimPackageResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProvideEimPackageResult`.
     * @returns {ProvideEimPackageResult}
     */
    public static _from_object (_o: { [_K in keyof (ProvideEimPackageResult)]: (ProvideEimPackageResult)[_K] }): ProvideEimPackageResult {
        return new ProvideEimPackageResult(_o.eidValue, _o.eimPackageResult);
    }


}

/**
 * @summary The Leading Root Component Types of ProvideEimPackageResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProvideEimPackageResult: $.ComponentSpec[] = [
    new $.ComponentSpec("eidValue", true, $.hasTag(_TagClass.application, 26)),
    new $.ComponentSpec("eimPackageResult", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of ProvideEimPackageResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProvideEimPackageResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProvideEimPackageResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProvideEimPackageResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProvideEimPackageResult: $.ASN1Decoder<ProvideEimPackageResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvideEimPackageResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvideEimPackageResult (el: _Element): ProvideEimPackageResult {
    if (!_cached_decoder_for_ProvideEimPackageResult) { _cached_decoder_for_ProvideEimPackageResult = $._decode_implicit<ProvideEimPackageResult>(() => function (el: _Element): ProvideEimPackageResult {
    let eidValue: OPTIONAL<Octet16>;
    let eimPackageResult!: EimPackageResult;
    const callbacks: $.DecodingMap = {
        "eidValue": (_el: _Element): void => { eidValue = $._decode_implicit<Octet16>(() => _decode_Octet16)(_el); },
        "eimPackageResult": (_el: _Element): void => { eimPackageResult = _decode_EimPackageResult(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProvideEimPackageResult,
        _extension_additions_list_spec_for_ProvideEimPackageResult,
        _root_component_type_list_2_spec_for_ProvideEimPackageResult,
        undefined,
    );
    return new ProvideEimPackageResult(
        eidValue,
        eimPackageResult
    );
}); }
    return _cached_decoder_for_ProvideEimPackageResult(el);
}

let _cached_encoder_for_ProvideEimPackageResult: $.ASN1Encoder<ProvideEimPackageResult> | null = null;

/**
 * @summary Encodes a(n) ProvideEimPackageResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvideEimPackageResult, encoded as an ASN.1 Element.
 */
export
function _encode_ProvideEimPackageResult (value: ProvideEimPackageResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvideEimPackageResult) { _cached_encoder_for_ProvideEimPackageResult = $._encode_implicit(_TagClass.context, 80, () => function (value: ProvideEimPackageResult, elGetter: $.ASN1Encoder<ProvideEimPackageResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.eidValue === undefined) ? undefined : $._encode_implicit(_TagClass.application, 26, () => _encode_Octet16, $.BER)(value.eidValue, $.BER)),
            /* REQUIRED   */ _encode_EimPackageResult(value.eimPackageResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ProvideEimPackageResult(value, elGetter);
}


/* eslint-enable */
