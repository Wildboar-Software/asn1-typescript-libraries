/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult, _encode_ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult, ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult } from "../SGP32Definitions/ConfigureImmediateProfileEnablingResponse-configImmediateEnableResult.ta.mjs";
// export { ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult, ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_insufficientMemory /* IMPORTED_LONG_NAMED_INTEGER */, insufficientMemory /* IMPORTED_SHORT_NAMED_INTEGER */, ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_associatedEimAlreadyExists /* IMPORTED_LONG_NAMED_INTEGER */, associatedEimAlreadyExists /* IMPORTED_SHORT_NAMED_INTEGER */, ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult, _encode_ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult } from "../SGP32Definitions/ConfigureImmediateProfileEnablingResponse-configImmediateEnableResult.ta.mjs";


/**
 * @summary ConfigureImmediateProfileEnablingResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfigureImmediateProfileEnablingResponse ::= [89] SEQUENCE { -- Tag 'BF59'
 *     configImmediateEnableResult [0] INTEGER {
 *         ok(0),
 *         insufficientMemory(1),
 *         associatedEimAlreadyExists(2),
 *         undefinedError(127)
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class ConfigureImmediateProfileEnablingResponse {
    constructor (
        /**
         * @summary `configImmediateEnableResult`.
         * @public
         * @readonly
         */
        readonly configImmediateEnableResult: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult
    ) {}

    /**
     * @summary Restructures an object into a ConfigureImmediateProfileEnablingResponse
     * @description
     * 
     * This takes an `object` and converts it to a `ConfigureImmediateProfileEnablingResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConfigureImmediateProfileEnablingResponse`.
     * @returns {ConfigureImmediateProfileEnablingResponse}
     */
    public static _from_object (_o: { [_K in keyof (ConfigureImmediateProfileEnablingResponse)]: (ConfigureImmediateProfileEnablingResponse)[_K] }): ConfigureImmediateProfileEnablingResponse {
        return new ConfigureImmediateProfileEnablingResponse(_o.configImmediateEnableResult);
    }


}

/**
 * @summary The Leading Root Component Types of ConfigureImmediateProfileEnablingResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConfigureImmediateProfileEnablingResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("configImmediateEnableResult", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of ConfigureImmediateProfileEnablingResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConfigureImmediateProfileEnablingResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConfigureImmediateProfileEnablingResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConfigureImmediateProfileEnablingResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConfigureImmediateProfileEnablingResponse: $.ASN1Decoder<ConfigureImmediateProfileEnablingResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConfigureImmediateProfileEnablingResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConfigureImmediateProfileEnablingResponse (el: _Element): ConfigureImmediateProfileEnablingResponse {
    if (!_cached_decoder_for_ConfigureImmediateProfileEnablingResponse) { _cached_decoder_for_ConfigureImmediateProfileEnablingResponse = $._decode_implicit<ConfigureImmediateProfileEnablingResponse>(() => function (el: _Element): ConfigureImmediateProfileEnablingResponse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ConfigureImmediateProfileEnablingResponse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "configImmediateEnableResult";
    let configImmediateEnableResult!: ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult;
    configImmediateEnableResult = $._decode_implicit<ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult>(() => _decode_ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult)(sequence[0]);
    return new ConfigureImmediateProfileEnablingResponse(
        configImmediateEnableResult,

    );
}); }
    return _cached_decoder_for_ConfigureImmediateProfileEnablingResponse(el);
}

let _cached_encoder_for_ConfigureImmediateProfileEnablingResponse: $.ASN1Encoder<ConfigureImmediateProfileEnablingResponse> | null = null;

/**
 * @summary Encodes a(n) ConfigureImmediateProfileEnablingResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConfigureImmediateProfileEnablingResponse, encoded as an ASN.1 Element.
 */
export
function _encode_ConfigureImmediateProfileEnablingResponse (value: ConfigureImmediateProfileEnablingResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConfigureImmediateProfileEnablingResponse) { _cached_encoder_for_ConfigureImmediateProfileEnablingResponse = $._encode_implicit(_TagClass.context, 89, () => function (value: ConfigureImmediateProfileEnablingResponse, elGetter: $.ASN1Encoder<ConfigureImmediateProfileEnablingResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ConfigureImmediateProfileEnablingResponse_configImmediateEnableResult, $.BER)(value.configImmediateEnableResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ConfigureImmediateProfileEnablingResponse(value, elGetter);
}


/* eslint-enable */
