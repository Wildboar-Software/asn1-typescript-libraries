/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ACGGlobalOverride, _decode_ACGGlobalOverride, _encode_ACGGlobalOverride } from "../AIN-Parameters/ACGGlobalOverride.ta.mjs";
// export { ACGGlobalOverride, _decode_ACGGlobalOverride, _encode_ACGGlobalOverride } from "../AIN-Parameters/ACGGlobalOverride.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary AcgGlobalCtrlRestoreArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AcgGlobalCtrlRestoreArg ::= SEQUENCE{
 *             aCGGlobalOverride             ACGGlobalOverride,
 *             extensionParameter            [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class AcgGlobalCtrlRestoreArg {
    constructor (
        /**
         * @summary `aCGGlobalOverride`.
         * @public
         * @readonly
         */
        readonly aCGGlobalOverride: ACGGlobalOverride,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a AcgGlobalCtrlRestoreArg
     * @description
     * 
     * This takes an `object` and converts it to a `AcgGlobalCtrlRestoreArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AcgGlobalCtrlRestoreArg`.
     * @returns {AcgGlobalCtrlRestoreArg}
     */
    public static _from_object (_o: { [_K in keyof (AcgGlobalCtrlRestoreArg)]: (AcgGlobalCtrlRestoreArg)[_K] }): AcgGlobalCtrlRestoreArg {
        return new AcgGlobalCtrlRestoreArg(_o.aCGGlobalOverride, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of AcgGlobalCtrlRestoreArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AcgGlobalCtrlRestoreArg: $.ComponentSpec[] = [
    new $.ComponentSpec("aCGGlobalOverride", false, $.hasTag(_TagClass.context, 110)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of AcgGlobalCtrlRestoreArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AcgGlobalCtrlRestoreArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AcgGlobalCtrlRestoreArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AcgGlobalCtrlRestoreArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AcgGlobalCtrlRestoreArg: $.ASN1Decoder<AcgGlobalCtrlRestoreArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AcgGlobalCtrlRestoreArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AcgGlobalCtrlRestoreArg (el: _Element): AcgGlobalCtrlRestoreArg {
    if (!_cached_decoder_for_AcgGlobalCtrlRestoreArg) { _cached_decoder_for_AcgGlobalCtrlRestoreArg = function (el: _Element): AcgGlobalCtrlRestoreArg {
    let aCGGlobalOverride!: ACGGlobalOverride;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "aCGGlobalOverride": (_el: _Element): void => { aCGGlobalOverride = _decode_ACGGlobalOverride(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AcgGlobalCtrlRestoreArg,
        _extension_additions_list_spec_for_AcgGlobalCtrlRestoreArg,
        _root_component_type_list_2_spec_for_AcgGlobalCtrlRestoreArg,
        undefined,
    );
    return new AcgGlobalCtrlRestoreArg(
        aCGGlobalOverride,
        extensionParameter
    );
}; }
    return _cached_decoder_for_AcgGlobalCtrlRestoreArg(el);
}

let _cached_encoder_for_AcgGlobalCtrlRestoreArg: $.ASN1Encoder<AcgGlobalCtrlRestoreArg> | null = null;

/**
 * @summary Encodes a(n) AcgGlobalCtrlRestoreArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcgGlobalCtrlRestoreArg, encoded as an ASN.1 Element.
 */
export
function _encode_AcgGlobalCtrlRestoreArg (value: AcgGlobalCtrlRestoreArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AcgGlobalCtrlRestoreArg) { _cached_encoder_for_AcgGlobalCtrlRestoreArg = function (value: AcgGlobalCtrlRestoreArg, elGetter: $.ASN1Encoder<AcgGlobalCtrlRestoreArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ACGGlobalOverride(value.aCGGlobalOverride, $.BER),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AcgGlobalCtrlRestoreArg(value, elGetter);
}


/* eslint-enable */
