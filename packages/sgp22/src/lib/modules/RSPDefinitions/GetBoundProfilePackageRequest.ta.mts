/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
// export { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
import { PrepareDownloadResponse, _decode_PrepareDownloadResponse, _encode_PrepareDownloadResponse } from "../RSPDefinitions/PrepareDownloadResponse.ta.mjs";
// export { PrepareDownloadResponse, _decode_PrepareDownloadResponse, _encode_PrepareDownloadResponse } from "../RSPDefinitions/PrepareDownloadResponse.ta.mjs";


/**
 * @summary GetBoundProfilePackageRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetBoundProfilePackageRequest ::= [58] SEQUENCE {  -- Tag 'BF3A'
 *     transactionId [0] TransactionId,
 *     prepareDownloadResponse [33] PrepareDownloadResponse
 * }
 * ```
 * 
 * @class
 */
export
class GetBoundProfilePackageRequest {
    constructor (
        /**
         * @summary `transactionId`.
         * @public
         * @readonly
         */
        readonly transactionId: TransactionId,
        /**
         * @summary `prepareDownloadResponse`.
         * @public
         * @readonly
         */
        readonly prepareDownloadResponse: PrepareDownloadResponse
    ) {}

    /**
     * @summary Restructures an object into a GetBoundProfilePackageRequest
     * @description
     * 
     * This takes an `object` and converts it to a `GetBoundProfilePackageRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetBoundProfilePackageRequest`.
     * @returns {GetBoundProfilePackageRequest}
     */
    public static _from_object (_o: { [_K in keyof (GetBoundProfilePackageRequest)]: (GetBoundProfilePackageRequest)[_K] }): GetBoundProfilePackageRequest {
        return new GetBoundProfilePackageRequest(_o.transactionId, _o.prepareDownloadResponse);
    }


}

/**
 * @summary The Leading Root Component Types of GetBoundProfilePackageRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetBoundProfilePackageRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("prepareDownloadResponse", false, $.hasTag(_TagClass.context, 33))
];

/**
 * @summary The Trailing Root Component Types of GetBoundProfilePackageRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetBoundProfilePackageRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetBoundProfilePackageRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetBoundProfilePackageRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetBoundProfilePackageRequest: $.ASN1Decoder<GetBoundProfilePackageRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetBoundProfilePackageRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetBoundProfilePackageRequest (el: _Element): GetBoundProfilePackageRequest {
    if (!_cached_decoder_for_GetBoundProfilePackageRequest) { _cached_decoder_for_GetBoundProfilePackageRequest = $._decode_implicit<GetBoundProfilePackageRequest>(() => function (el: _Element): GetBoundProfilePackageRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GetBoundProfilePackageRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "transactionId";
    sequence[1].name = "prepareDownloadResponse";
    let transactionId!: TransactionId;
    let prepareDownloadResponse!: PrepareDownloadResponse;
    transactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(sequence[0]);
    prepareDownloadResponse = $._decode_implicit<PrepareDownloadResponse>(() => _decode_PrepareDownloadResponse)(sequence[1]);
    return new GetBoundProfilePackageRequest(
        transactionId,
        prepareDownloadResponse,

    );
}); }
    return _cached_decoder_for_GetBoundProfilePackageRequest(el);
}

let _cached_encoder_for_GetBoundProfilePackageRequest: $.ASN1Encoder<GetBoundProfilePackageRequest> | null = null;

/**
 * @summary Encodes a(n) GetBoundProfilePackageRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetBoundProfilePackageRequest, encoded as an ASN.1 Element.
 */
export
function _encode_GetBoundProfilePackageRequest (value: GetBoundProfilePackageRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetBoundProfilePackageRequest) { _cached_encoder_for_GetBoundProfilePackageRequest = $._encode_implicit(_TagClass.context, 58, () => function (value: GetBoundProfilePackageRequest, elGetter: $.ASN1Encoder<GetBoundProfilePackageRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TransactionId, $.BER)(value.transactionId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 33, () => _encode_PrepareDownloadResponse, $.BER)(value.prepareDownloadResponse, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_GetBoundProfilePackageRequest(value, elGetter);
}


/* eslint-enable */
