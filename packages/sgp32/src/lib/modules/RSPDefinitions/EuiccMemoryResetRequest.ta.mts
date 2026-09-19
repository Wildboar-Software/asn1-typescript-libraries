/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_EuiccMemoryResetRequest_resetOptions, _encode_EuiccMemoryResetRequest_resetOptions, EuiccMemoryResetRequest_resetOptions } from "../RSPDefinitions/EuiccMemoryResetRequest-resetOptions.ta.mjs";
// export { EuiccMemoryResetRequest_resetOptions, EuiccMemoryResetRequest_resetOptions_deleteOperationalProfiles /* IMPORTED_LONG_NAMED_BIT */, deleteOperationalProfiles /* IMPORTED_SHORT_NAMED_BIT */, EuiccMemoryResetRequest_resetOptions_deleteFieldLoadedTestProfiles /* IMPORTED_LONG_NAMED_BIT */, deleteFieldLoadedTestProfiles /* IMPORTED_SHORT_NAMED_BIT */, EuiccMemoryResetRequest_resetOptions_resetDefaultSmdpAddress /* IMPORTED_LONG_NAMED_BIT */, resetDefaultSmdpAddress /* IMPORTED_SHORT_NAMED_BIT */, _decode_EuiccMemoryResetRequest_resetOptions, _encode_EuiccMemoryResetRequest_resetOptions } from "../RSPDefinitions/EuiccMemoryResetRequest-resetOptions.ta.mjs";


/**
 * @summary EuiccMemoryResetRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccMemoryResetRequest ::= [52] SEQUENCE { -- Tag 'BF34'
 *     resetOptions [2] BIT STRING {
 *         deleteOperationalProfiles(0),
 *         deleteFieldLoadedTestProfiles(1),
 *         resetDefaultSmdpAddress(2)}
 * }
 * ```
 * 
 * @class
 */
export
class EuiccMemoryResetRequest {
    constructor (
        /**
         * @summary `resetOptions`.
         * @public
         * @readonly
         */
        readonly resetOptions: EuiccMemoryResetRequest_resetOptions
    ) {}

    /**
     * @summary Restructures an object into a EuiccMemoryResetRequest
     * @description
     * 
     * This takes an `object` and converts it to a `EuiccMemoryResetRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EuiccMemoryResetRequest`.
     * @returns {EuiccMemoryResetRequest}
     */
    public static _from_object (_o: { [_K in keyof (EuiccMemoryResetRequest)]: (EuiccMemoryResetRequest)[_K] }): EuiccMemoryResetRequest {
        return new EuiccMemoryResetRequest(_o.resetOptions);
    }


}

/**
 * @summary The Leading Root Component Types of EuiccMemoryResetRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EuiccMemoryResetRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("resetOptions", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EuiccMemoryResetRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EuiccMemoryResetRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EuiccMemoryResetRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EuiccMemoryResetRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EuiccMemoryResetRequest: $.ASN1Decoder<EuiccMemoryResetRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccMemoryResetRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccMemoryResetRequest (el: _Element): EuiccMemoryResetRequest {
    if (!_cached_decoder_for_EuiccMemoryResetRequest) { _cached_decoder_for_EuiccMemoryResetRequest = $._decode_implicit<EuiccMemoryResetRequest>(() => function (el: _Element): EuiccMemoryResetRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("EuiccMemoryResetRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "resetOptions";
    let resetOptions!: EuiccMemoryResetRequest_resetOptions;
    resetOptions = $._decode_implicit<EuiccMemoryResetRequest_resetOptions>(() => _decode_EuiccMemoryResetRequest_resetOptions)(sequence[0]);
    return new EuiccMemoryResetRequest(
        resetOptions,

    );
}); }
    return _cached_decoder_for_EuiccMemoryResetRequest(el);
}

let _cached_encoder_for_EuiccMemoryResetRequest: $.ASN1Encoder<EuiccMemoryResetRequest> | null = null;

/**
 * @summary Encodes a(n) EuiccMemoryResetRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccMemoryResetRequest, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccMemoryResetRequest (value: EuiccMemoryResetRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccMemoryResetRequest) { _cached_encoder_for_EuiccMemoryResetRequest = $._encode_implicit(_TagClass.context, 52, () => function (value: EuiccMemoryResetRequest, elGetter: $.ASN1Encoder<EuiccMemoryResetRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EuiccMemoryResetRequest_resetOptions, $.BER)(value.resetOptions, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_EuiccMemoryResetRequest(value, elGetter);
}


/* eslint-enable */
