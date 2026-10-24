/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReturnFromFallbackRequest
 * @description
 * 
 * ES10b.ReturnFromFallback. Optional on the eUICC. The IPA uses it to disable
 * the enabled Fallback Profile and re-enable the Profile that was enabled
 * before ES10b.ExecuteFallbackMechanism. If ExecuteFallbackMechanism is
 * supported, this function is supported too. The swap is atomic. SGP.32 v1.2,
 * section 5.9.21.
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
    /**
     * @summary `refreshFlag`.
     * @description
     * FALSE performs the swap in this call. TRUE marks the Fallback Profile to be
     * disabled and the previously enabled Profile to be enabled, returns ok, and
     * sends REFRESH in eUICC Profile State Change mode when the IoT Device
     * supports it, otherwise UICC Reset mode, per ETSI TS 102 223. A proactive
     * session already open may yield catBusy. If the eUICC continues, it ends that
     * session. SGP.32 v1.2, section 5.9.21.
     * @public
     * @readonly
     */
    public readonly refreshFlag: BOOLEAN;

    constructor (
        refreshFlag: BOOLEAN
    ) {
        this.refreshFlag = refreshFlag;
    }

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
    const refreshFlag: BOOLEAN = $._decodeBoolean(sequence[0]);
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
    if (!_cached_encoder_for_ReturnFromFallbackRequest) { _cached_encoder_for_ReturnFromFallbackRequest = $._encode_implicit(_TagClass.context, 94, () => function (value: ReturnFromFallbackRequest): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.refreshFlag, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ReturnFromFallbackRequest(value, elGetter);
}


/* eslint-enable */
