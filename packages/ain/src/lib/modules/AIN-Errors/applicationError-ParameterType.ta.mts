/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ApplicationErrorString, _decode_ApplicationErrorString, _encode_ApplicationErrorString } from "../AIN-Parameters/ApplicationErrorString.ta.mjs";
// export { ApplicationErrorString, _decode_ApplicationErrorString, _encode_ApplicationErrorString } from "../AIN-Parameters/ApplicationErrorString.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary applicationError_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * applicationError-ParameterType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class applicationError_ParameterType {
    constructor (
        /**
         * @summary `applicationErrorString`.
         * @public
         * @readonly
         */
        readonly applicationErrorString: ApplicationErrorString,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a applicationError_ParameterType
     * @description
     * 
     * This takes an `object` and converts it to a `applicationError_ParameterType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `applicationError_ParameterType`.
     * @returns {applicationError_ParameterType}
     */
    public static _from_object (_o: { [_K in keyof (applicationError_ParameterType)]: (applicationError_ParameterType)[_K] }): applicationError_ParameterType {
        return new applicationError_ParameterType(_o.applicationErrorString, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of applicationError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_applicationError_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec("applicationErrorString", false, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of applicationError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_applicationError_ParameterType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of applicationError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_applicationError_ParameterType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_applicationError_ParameterType: $.ASN1Decoder<applicationError_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) applicationError_ParameterType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_applicationError_ParameterType (el: _Element): applicationError_ParameterType {
    if (!_cached_decoder_for_applicationError_ParameterType) { _cached_decoder_for_applicationError_ParameterType = function (el: _Element): applicationError_ParameterType {
    let applicationErrorString!: ApplicationErrorString;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "applicationErrorString": (_el: _Element): void => { applicationErrorString = _decode_ApplicationErrorString(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = _decode_ExtensionParameter(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_applicationError_ParameterType,
        _extension_additions_list_spec_for_applicationError_ParameterType,
        _root_component_type_list_2_spec_for_applicationError_ParameterType,
        undefined,
    );
    return new applicationError_ParameterType(
        applicationErrorString,
        extensionParameter
    );
}; }
    return _cached_decoder_for_applicationError_ParameterType(el);
}

let _cached_encoder_for_applicationError_ParameterType: $.ASN1Encoder<applicationError_ParameterType> | null = null;

/**
 * @summary Encodes a(n) applicationError_ParameterType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The applicationError_ParameterType, encoded as an ASN.1 Element.
 */
export
function _encode_applicationError_ParameterType (value: applicationError_ParameterType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_applicationError_ParameterType) { _cached_encoder_for_applicationError_ParameterType = function (value: applicationError_ParameterType, elGetter: $.ASN1Encoder<applicationError_ParameterType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ApplicationErrorString(value.applicationErrorString, $.BER),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : _encode_ExtensionParameter(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_applicationError_ParameterType(value, elGetter);
}


/* eslint-enable */
