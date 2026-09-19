/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../MEDIA-GATEWAY-CONTROL/TransactionId.ta.mjs";
// export { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../MEDIA-GATEWAY-CONTROL/TransactionId.ta.mjs";
import { ActionRequest, _decode_ActionRequest, _encode_ActionRequest } from "../MEDIA-GATEWAY-CONTROL/ActionRequest.ta.mjs";
// export { ActionRequest, _decode_ActionRequest, _encode_ActionRequest } from "../MEDIA-GATEWAY-CONTROL/ActionRequest.ta.mjs";


/**
 * @summary TransactionRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransactionRequest ::= SEQUENCE
 *     {
 *         transactionId            [0] TransactionId,
 *         actions                    [1] SEQUENCE OF ActionRequest,
 *         ...
 *         }
 * ```
 * 
 * @class
 */
export
class TransactionRequest {
    constructor (
        /**
         * @summary `transactionId`.
         * @public
         * @readonly
         */
        readonly transactionId: TransactionId,
        /**
         * @summary `actions`.
         * @public
         * @readonly
         */
        readonly actions: ActionRequest[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TransactionRequest
     * @description
     * 
     * This takes an `object` and converts it to a `TransactionRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TransactionRequest`.
     * @returns {TransactionRequest}
     */
    public static _from_object (_o: { [_K in keyof (TransactionRequest)]: (TransactionRequest)[_K] }): TransactionRequest {
        return new TransactionRequest(_o.transactionId, _o.actions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TransactionRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TransactionRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("actions", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TransactionRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TransactionRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TransactionRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TransactionRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TransactionRequest: $.ASN1Decoder<TransactionRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransactionRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransactionRequest (el: _Element): TransactionRequest {
    if (!_cached_decoder_for_TransactionRequest) { _cached_decoder_for_TransactionRequest = function (el: _Element): TransactionRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TransactionRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "transactionId";
    sequence[1].name = "actions";
    let transactionId!: TransactionId;
    let actions!: ActionRequest[];
    transactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(sequence[0]);
    actions = $._decode_implicit<ActionRequest[]>(() => $._decodeSequenceOf<ActionRequest>(() => _decode_ActionRequest))(sequence[1]);
    return new TransactionRequest(
        transactionId,
        actions,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_TransactionRequest(el);
}

let _cached_encoder_for_TransactionRequest: $.ASN1Encoder<TransactionRequest> | null = null;

/**
 * @summary Encodes a(n) TransactionRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransactionRequest, encoded as an ASN.1 Element.
 */
export
function _encode_TransactionRequest (value: TransactionRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransactionRequest) { _cached_encoder_for_TransactionRequest = function (value: TransactionRequest, elGetter: $.ASN1Encoder<TransactionRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TransactionId, $.BER)(value.transactionId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ActionRequest>(() => _encode_ActionRequest, $.BER), $.BER)(value.actions, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TransactionRequest(value, elGetter);
}


/* eslint-enable */
