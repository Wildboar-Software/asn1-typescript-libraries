/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReturnFromFallbackRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReturnFromFallbackRequest ::= [94] SEQUENCE { -- Tag 'BF5E'
 *     refreshFlag BOOLEAN -- indicating whether REFRESH is required
 * }
 * ```
 * 
 * @class
 */
export
class ReturnFromFallbackRequest {
    constructor (
        /**
         * @summary `refreshFlag`.
         * @public
         * @readonly
         */
        readonly refreshFlag: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a ReturnFromFallbackRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ReturnFromFallbackRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReturnFromFallbackRequest`.
     * @returns {ReturnFromFallbackRequest}
     */
    public static _from_object (_o: { [_K in keyof (ReturnFromFallbackRequest)]: (ReturnFromFallbackRequest)[_K] }): ReturnFromFallbackRequest {
        return new ReturnFromFallbackRequest(_o.refreshFlag);
    }


}

/**
 * @summary The Leading Root Component Types of ReturnFromFallbackRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReturnFromFallbackRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("refreshFlag", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of ReturnFromFallbackRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReturnFromFallbackRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReturnFromFallbackRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReturnFromFallbackRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReturnFromFallbackRequest: $.ASN1Decoder<ReturnFromFallbackRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReturnFromFallbackRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReturnFromFallbackRequest (el: _Element): ReturnFromFallbackRequest {
    if (!_cached_decoder_for_ReturnFromFallbackRequest) { _cached_decoder_for_ReturnFromFallbackRequest = $._decode_implicit<ReturnFromFallbackRequest>(() => function (el: _Element): ReturnFromFallbackRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ReturnFromFallbackRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "refreshFlag";
    let refreshFlag!: BOOLEAN;
    refreshFlag = $._decodeBoolean(sequence[0]);
    return new ReturnFromFallbackRequest(
        refreshFlag,

    );
}); }
    return _cached_decoder_for_ReturnFromFallbackRequest(el);
}

let _cached_encoder_for_ReturnFromFallbackRequest: $.ASN1Encoder<ReturnFromFallbackRequest> | null = null;

/**
 * @summary Encodes a(n) ReturnFromFallbackRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReturnFromFallbackRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ReturnFromFallbackRequest (value: ReturnFromFallbackRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReturnFromFallbackRequest) { _cached_encoder_for_ReturnFromFallbackRequest = $._encode_implicit(_TagClass.context, 94, () => function (value: ReturnFromFallbackRequest, elGetter: $.ASN1Encoder<ReturnFromFallbackRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.refreshFlag, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ReturnFromFallbackRequest(value, elGetter);
}


/* eslint-enable */
