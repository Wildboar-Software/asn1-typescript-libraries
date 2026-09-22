/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExecuteFallbackMechanismRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExecuteFallbackMechanismRequest ::= [93] SEQUENCE { -- Tag 'BF5D'
 *     refreshFlag BOOLEAN -- indicating whether REFRESH is required
 * }
 * ```
 * 
 * @class
 */
export
class ExecuteFallbackMechanismRequest {
    constructor (
        /**
         * @summary `refreshFlag`.
         * @public
         * @readonly
         */
        readonly refreshFlag: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a ExecuteFallbackMechanismRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ExecuteFallbackMechanismRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExecuteFallbackMechanismRequest`.
     * @returns {ExecuteFallbackMechanismRequest}
     */
    public static _from_object (_o: { [_K in keyof (ExecuteFallbackMechanismRequest)]: (ExecuteFallbackMechanismRequest)[_K] }): ExecuteFallbackMechanismRequest {
        return new ExecuteFallbackMechanismRequest(_o.refreshFlag);
    }


}

/**
 * @summary The Leading Root Component Types of ExecuteFallbackMechanismRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExecuteFallbackMechanismRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("refreshFlag", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of ExecuteFallbackMechanismRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExecuteFallbackMechanismRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExecuteFallbackMechanismRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExecuteFallbackMechanismRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExecuteFallbackMechanismRequest: $.ASN1Decoder<ExecuteFallbackMechanismRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExecuteFallbackMechanismRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExecuteFallbackMechanismRequest (el: _Element): ExecuteFallbackMechanismRequest {
    if (!_cached_decoder_for_ExecuteFallbackMechanismRequest) { _cached_decoder_for_ExecuteFallbackMechanismRequest = $._decode_implicit<ExecuteFallbackMechanismRequest>(() => function (el: _Element): ExecuteFallbackMechanismRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ExecuteFallbackMechanismRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "refreshFlag";
    let refreshFlag!: BOOLEAN;
    refreshFlag = $._decodeBoolean(sequence[0]);
    return new ExecuteFallbackMechanismRequest(
        refreshFlag,

    );
}); }
    return _cached_decoder_for_ExecuteFallbackMechanismRequest(el);
}

let _cached_encoder_for_ExecuteFallbackMechanismRequest: $.ASN1Encoder<ExecuteFallbackMechanismRequest> | null = null;

/**
 * @summary Encodes a(n) ExecuteFallbackMechanismRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExecuteFallbackMechanismRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ExecuteFallbackMechanismRequest (value: ExecuteFallbackMechanismRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExecuteFallbackMechanismRequest) { _cached_encoder_for_ExecuteFallbackMechanismRequest = $._encode_implicit(_TagClass.context, 93, () => function (value: ExecuteFallbackMechanismRequest, elGetter: $.ASN1Encoder<ExecuteFallbackMechanismRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.refreshFlag, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ExecuteFallbackMechanismRequest(value, elGetter);
}


/* eslint-enable */
