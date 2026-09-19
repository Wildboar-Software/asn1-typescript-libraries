/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SigParameterName, _decode_SigParameterName, _encode_SigParameterName } from "../MEDIA-GATEWAY-CONTROL/SigParameterName.ta.mjs";
// export { SigParameterName, _decode_SigParameterName, _encode_SigParameterName } from "../MEDIA-GATEWAY-CONTROL/SigParameterName.ta.mjs";
import { SigParamValues, _decode_SigParamValues, _encode_SigParamValues } from "../MEDIA-GATEWAY-CONTROL/SigParamValues.ta.mjs";
// export { SigParamValues, _decode_SigParamValues, _encode_SigParamValues } from "../MEDIA-GATEWAY-CONTROL/SigParamValues.ta.mjs";
import { SigParameter_extraInfo, _decode_SigParameter_extraInfo, _encode_SigParameter_extraInfo } from "../MEDIA-GATEWAY-CONTROL/SigParameter-extraInfo.ta.mjs";
// export { SigParameter_extraInfo, _decode_SigParameter_extraInfo, _encode_SigParameter_extraInfo } from "../MEDIA-GATEWAY-CONTROL/SigParameter-extraInfo.ta.mjs";


/**
 * @summary SigParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SigParameter ::= SEQUENCE
 *     {
 * --        sigParameterName        [0] Name,
 * --        value                    [1] Value,
 *         sigParameterName        [0] SigParameterName,
 *         value                    [1] SigParamValues,
 *     -- For use of extraInfo see the comment related to PropertyParm
 *         extraInfo                [2] CHOICE
 *         {
 *             relation    [0] Relation,
 *             range        [1] BOOLEAN,
 *             sublist        [2] BOOLEAN
 *         } OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class SigParameter {
    constructor (
        /**
         * @summary `sigParameterName`.
         * @public
         * @readonly
         */
        readonly sigParameterName: SigParameterName,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: SigParamValues,
        /**
         * @summary `extraInfo`.
         * @public
         * @readonly
         */
        readonly extraInfo: OPTIONAL<SigParameter_extraInfo>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SigParameter
     * @description
     * 
     * This takes an `object` and converts it to a `SigParameter`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SigParameter`.
     * @returns {SigParameter}
     */
    public static _from_object (_o: { [_K in keyof (SigParameter)]: (SigParameter)[_K] }): SigParameter {
        return new SigParameter(_o.sigParameterName, _o.value, _o.extraInfo, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SigParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SigParameter: $.ComponentSpec[] = [
    new $.ComponentSpec("sigParameterName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extraInfo", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SigParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SigParameter: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SigParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SigParameter: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SigParameter: $.ASN1Decoder<SigParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SigParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SigParameter (el: _Element): SigParameter {
    if (!_cached_decoder_for_SigParameter) { _cached_decoder_for_SigParameter = function (el: _Element): SigParameter {
    let sigParameterName!: SigParameterName;
    let value!: SigParamValues;
    let extraInfo: OPTIONAL<SigParameter_extraInfo>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sigParameterName": (_el: _Element): void => { sigParameterName = $._decode_implicit<SigParameterName>(() => _decode_SigParameterName)(_el); },
        "value": (_el: _Element): void => { value = $._decode_implicit<SigParamValues>(() => _decode_SigParamValues)(_el); },
        "extraInfo": (_el: _Element): void => { extraInfo = $._decode_explicit<SigParameter_extraInfo>(() => _decode_SigParameter_extraInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SigParameter,
        _extension_additions_list_spec_for_SigParameter,
        _root_component_type_list_2_spec_for_SigParameter,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SigParameter(
        sigParameterName,
        value,
        extraInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SigParameter(el);
}

let _cached_encoder_for_SigParameter: $.ASN1Encoder<SigParameter> | null = null;

/**
 * @summary Encodes a(n) SigParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigParameter, encoded as an ASN.1 Element.
 */
export
function _encode_SigParameter (value: SigParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SigParameter) { _cached_encoder_for_SigParameter = function (value: SigParameter, elGetter: $.ASN1Encoder<SigParameter>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SigParameterName, $.BER)(value.sigParameterName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SigParamValues, $.BER)(value.value, $.BER),
            /* IF_ABSENT  */ ((value.extraInfo === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_SigParameter_extraInfo, $.BER)(value.extraInfo, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SigParameter(value, elGetter);
}


/* eslint-enable */
