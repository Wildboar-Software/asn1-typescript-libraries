/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LpaeActivationRequest_lpaeOption, _decode_LpaeActivationRequest_lpaeOption, _encode_LpaeActivationRequest_lpaeOption } from "../RSPDefinitions/LpaeActivationRequest-lpaeOption.ta.mjs";
// export { LpaeActivationRequest_lpaeOption, LpaeActivationRequest_lpaeOption_activateCatBasedLpae /* IMPORTED_LONG_NAMED_BIT */, activateCatBasedLpae /* IMPORTED_SHORT_NAMED_BIT */, LpaeActivationRequest_lpaeOption_activateScwsBasedLpae /* IMPORTED_LONG_NAMED_BIT */, activateScwsBasedLpae /* IMPORTED_SHORT_NAMED_BIT */, _decode_LpaeActivationRequest_lpaeOption, _encode_LpaeActivationRequest_lpaeOption } from "../RSPDefinitions/LpaeActivationRequest-lpaeOption.ta.mjs";


/**
 * @summary LpaeActivationRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LpaeActivationRequest ::= [66] SEQUENCE { -- Tag 'BF42'
 *     lpaeOption BIT STRING {
 *         activateCatBasedLpae(0), -- LPAe with LUIe based on CAT
 *         activateScwsBasedLpae(1) -- LPAe with LUIe based on SCWS
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class LpaeActivationRequest {
    constructor (
        /**
         * @summary `lpaeOption`.
         * @public
         * @readonly
         */
        readonly lpaeOption: LpaeActivationRequest_lpaeOption
    ) {}

    /**
     * @summary Restructures an object into a LpaeActivationRequest
     * @description
     * 
     * This takes an `object` and converts it to a `LpaeActivationRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LpaeActivationRequest`.
     * @returns {LpaeActivationRequest}
     */
    public static _from_object (_o: { [_K in keyof (LpaeActivationRequest)]: (LpaeActivationRequest)[_K] }): LpaeActivationRequest {
        return new LpaeActivationRequest(_o.lpaeOption);
    }


}

/**
 * @summary The Leading Root Component Types of LpaeActivationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LpaeActivationRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("lpaeOption", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of LpaeActivationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LpaeActivationRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LpaeActivationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LpaeActivationRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LpaeActivationRequest: $.ASN1Decoder<LpaeActivationRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LpaeActivationRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LpaeActivationRequest (el: _Element): LpaeActivationRequest {
    if (!_cached_decoder_for_LpaeActivationRequest) { _cached_decoder_for_LpaeActivationRequest = $._decode_implicit<LpaeActivationRequest>(() => function (el: _Element): LpaeActivationRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("LpaeActivationRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "lpaeOption";
    let lpaeOption!: LpaeActivationRequest_lpaeOption;
    lpaeOption = _decode_LpaeActivationRequest_lpaeOption(sequence[0]);
    return new LpaeActivationRequest(
        lpaeOption,

    );
}); }
    return _cached_decoder_for_LpaeActivationRequest(el);
}

let _cached_encoder_for_LpaeActivationRequest: $.ASN1Encoder<LpaeActivationRequest> | null = null;

/**
 * @summary Encodes a(n) LpaeActivationRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LpaeActivationRequest, encoded as an ASN.1 Element.
 */
export
function _encode_LpaeActivationRequest (value: LpaeActivationRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LpaeActivationRequest) { _cached_encoder_for_LpaeActivationRequest = $._encode_implicit(_TagClass.context, 66, () => function (value: LpaeActivationRequest, elGetter: $.ASN1Encoder<LpaeActivationRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LpaeActivationRequest_lpaeOption(value.lpaeOption, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_LpaeActivationRequest(value, elGetter);
}


/* eslint-enable */
