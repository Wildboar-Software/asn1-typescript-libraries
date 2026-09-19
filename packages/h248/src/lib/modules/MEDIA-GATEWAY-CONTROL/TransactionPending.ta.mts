/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../MEDIA-GATEWAY-CONTROL/TransactionId.ta.mjs";
// export { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../MEDIA-GATEWAY-CONTROL/TransactionId.ta.mjs";


/**
 * @summary TransactionPending
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransactionPending ::= SEQUENCE
 *     {
 *         transactionId            [0] TransactionId,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class TransactionPending {
    constructor (
        /**
         * @summary `transactionId`.
         * @public
         * @readonly
         */
        readonly transactionId: TransactionId,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TransactionPending
     * @description
     * 
     * This takes an `object` and converts it to a `TransactionPending`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TransactionPending`.
     * @returns {TransactionPending}
     */
    public static _from_object (_o: { [_K in keyof (TransactionPending)]: (TransactionPending)[_K] }): TransactionPending {
        return new TransactionPending(_o.transactionId, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TransactionPending
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TransactionPending: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionId", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of TransactionPending
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TransactionPending: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TransactionPending
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TransactionPending: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TransactionPending: $.ASN1Decoder<TransactionPending> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransactionPending
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransactionPending (el: _Element): TransactionPending {
    if (!_cached_decoder_for_TransactionPending) { _cached_decoder_for_TransactionPending = function (el: _Element): TransactionPending {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("TransactionPending contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "transactionId";
    let transactionId!: TransactionId;
    transactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(sequence[0]);
    return new TransactionPending(
        transactionId,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_TransactionPending(el);
}

let _cached_encoder_for_TransactionPending: $.ASN1Encoder<TransactionPending> | null = null;

/**
 * @summary Encodes a(n) TransactionPending into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransactionPending, encoded as an ASN.1 Element.
 */
export
function _encode_TransactionPending (value: TransactionPending, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransactionPending) { _cached_encoder_for_TransactionPending = function (value: TransactionPending, elGetter: $.ASN1Encoder<TransactionPending>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TransactionId, $.BER)(value.transactionId, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TransactionPending(value, elGetter);
}


/* eslint-enable */
