/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
import { ResultCause, _decode_ResultCause, _encode_ResultCause } from "../AIN-Parameters/ResultCause.ta.mjs";
// export { ResultCause, _decode_ResultCause, _encode_ResultCause } from "../AIN-Parameters/ResultCause.ta.mjs";


/**
 * @summary update_ResultType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * update-ResultType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class update_ResultType {
    constructor (
        /**
         * @summary `amp1`.
         * @public
         * @readonly
         */
        readonly amp1: OPTIONAL<Amp1>,
        /**
         * @summary `amp2`.
         * @public
         * @readonly
         */
        readonly amp2: OPTIONAL<Amp2>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>,
        /**
         * @summary `resultCause`.
         * @public
         * @readonly
         */
        readonly resultCause: OPTIONAL<ResultCause>
    ) {}

    /**
     * @summary Restructures an object into a update_ResultType
     * @description
     * 
     * This takes an `object` and converts it to a `update_ResultType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `update_ResultType`.
     * @returns {update_ResultType}
     */
    public static _from_object (_o: { [_K in keyof (update_ResultType)]: (update_ResultType)[_K] }): update_ResultType {
        return new update_ResultType(_o.amp1, _o.amp2, _o.extensionParameter, _o.resultCause);
    }


}

/**
 * @summary The Leading Root Component Types of update_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_update_ResultType: $.ComponentSpec[] = [
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84)),
    new $.ComponentSpec("resultCause", true, $.hasTag(_TagClass.context, 151))
];

/**
 * @summary The Trailing Root Component Types of update_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_update_ResultType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of update_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_update_ResultType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_update_ResultType: $.ASN1Decoder<update_ResultType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) update_ResultType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_update_ResultType (el: _Element): update_ResultType {
    if (!_cached_decoder_for_update_ResultType) { _cached_decoder_for_update_ResultType = function (el: _Element): update_ResultType {
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    let resultCause: OPTIONAL<ResultCause>;
    const callbacks: $.DecodingMap = {
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); },
        "resultCause": (_el: _Element): void => { resultCause = _decode_ResultCause(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_update_ResultType,
        _extension_additions_list_spec_for_update_ResultType,
        _root_component_type_list_2_spec_for_update_ResultType,
        undefined,
    );
    return new update_ResultType(
        amp1,
        amp2,
        extensionParameter,
        resultCause
    );
}; }
    return _cached_decoder_for_update_ResultType(el);
}

let _cached_encoder_for_update_ResultType: $.ASN1Encoder<update_ResultType> | null = null;

/**
 * @summary Encodes a(n) update_ResultType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The update_ResultType, encoded as an ASN.1 Element.
 */
export
function _encode_update_ResultType (value: update_ResultType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_update_ResultType) { _cached_encoder_for_update_ResultType = function (value: update_ResultType, elGetter: $.ASN1Encoder<update_ResultType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER)),
            /* IF_ABSENT  */ ((value.resultCause === undefined) ? undefined : _encode_ResultCause(value.resultCause, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_update_ResultType(value, elGetter);
}


/* eslint-enable */
