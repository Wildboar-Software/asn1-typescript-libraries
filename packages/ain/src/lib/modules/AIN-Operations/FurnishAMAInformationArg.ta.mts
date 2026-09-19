/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AMABAFModules, _decode_AMABAFModules, _encode_AMABAFModules } from "../AIN-Parameters/AMABAFModules.ta.mjs";
// export { AMABAFModules, _decode_AMABAFModules, _encode_AMABAFModules } from "../AIN-Parameters/AMABAFModules.ta.mjs";
import { AMASetHexABIndicator, _decode_AMASetHexABIndicator, _encode_AMASetHexABIndicator } from "../AIN-Parameters/AMASetHexABIndicator.ta.mjs";
// export { AMASetHexABIndicator, _decode_AMASetHexABIndicator, _encode_AMASetHexABIndicator } from "../AIN-Parameters/AMASetHexABIndicator.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary FurnishAMAInformationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FurnishAMAInformationArg ::= SEQUENCE{
 *             aaMABAFModules                   AMABAFModules OPTIONAL,
 *             aMASetHexABIndicator             AMASetHexABIndicator OPTIONAL,
 *             extensionParameter               [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class FurnishAMAInformationArg {
    constructor (
        /**
         * @summary `aaMABAFModules`.
         * @public
         * @readonly
         */
        readonly aaMABAFModules: OPTIONAL<AMABAFModules>,
        /**
         * @summary `aMASetHexABIndicator`.
         * @public
         * @readonly
         */
        readonly aMASetHexABIndicator: OPTIONAL<AMASetHexABIndicator>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a FurnishAMAInformationArg
     * @description
     * 
     * This takes an `object` and converts it to a `FurnishAMAInformationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FurnishAMAInformationArg`.
     * @returns {FurnishAMAInformationArg}
     */
    public static _from_object (_o: { [_K in keyof (FurnishAMAInformationArg)]: (FurnishAMAInformationArg)[_K] }): FurnishAMAInformationArg {
        return new FurnishAMAInformationArg(_o.aaMABAFModules, _o.aMASetHexABIndicator, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of FurnishAMAInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FurnishAMAInformationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("aaMABAFModules", true, $.hasTag(_TagClass.context, 95)),
    new $.ComponentSpec("aMASetHexABIndicator", true, $.hasTag(_TagClass.context, 82)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of FurnishAMAInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FurnishAMAInformationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FurnishAMAInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FurnishAMAInformationArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FurnishAMAInformationArg: $.ASN1Decoder<FurnishAMAInformationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FurnishAMAInformationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FurnishAMAInformationArg (el: _Element): FurnishAMAInformationArg {
    if (!_cached_decoder_for_FurnishAMAInformationArg) { _cached_decoder_for_FurnishAMAInformationArg = function (el: _Element): FurnishAMAInformationArg {
    let aaMABAFModules: OPTIONAL<AMABAFModules>;
    let aMASetHexABIndicator: OPTIONAL<AMASetHexABIndicator>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "aaMABAFModules": (_el: _Element): void => { aaMABAFModules = _decode_AMABAFModules(_el); },
        "aMASetHexABIndicator": (_el: _Element): void => { aMASetHexABIndicator = _decode_AMASetHexABIndicator(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FurnishAMAInformationArg,
        _extension_additions_list_spec_for_FurnishAMAInformationArg,
        _root_component_type_list_2_spec_for_FurnishAMAInformationArg,
        undefined,
    );
    return new FurnishAMAInformationArg(
        aaMABAFModules,
        aMASetHexABIndicator,
        extensionParameter
    );
}; }
    return _cached_decoder_for_FurnishAMAInformationArg(el);
}

let _cached_encoder_for_FurnishAMAInformationArg: $.ASN1Encoder<FurnishAMAInformationArg> | null = null;

/**
 * @summary Encodes a(n) FurnishAMAInformationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FurnishAMAInformationArg, encoded as an ASN.1 Element.
 */
export
function _encode_FurnishAMAInformationArg (value: FurnishAMAInformationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FurnishAMAInformationArg) { _cached_encoder_for_FurnishAMAInformationArg = function (value: FurnishAMAInformationArg, elGetter: $.ASN1Encoder<FurnishAMAInformationArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.aaMABAFModules === undefined) ? undefined : _encode_AMABAFModules(value.aaMABAFModules, $.BER)),
            /* IF_ABSENT  */ ((value.aMASetHexABIndicator === undefined) ? undefined : _encode_AMASetHexABIndicator(value.aMASetHexABIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FurnishAMAInformationArg(value, elGetter);
}


/* eslint-enable */
