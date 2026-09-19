/* eslint-disable */
import {
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../MEDIA-GATEWAY-CONTROL/TransactionId.ta.mjs";
// export { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../MEDIA-GATEWAY-CONTROL/TransactionId.ta.mjs";
import { TransactionReply_transactionResult, _decode_TransactionReply_transactionResult, _encode_TransactionReply_transactionResult } from "../MEDIA-GATEWAY-CONTROL/TransactionReply-transactionResult.ta.mjs";
// export { TransactionReply_transactionResult, _decode_TransactionReply_transactionResult, _encode_TransactionReply_transactionResult } from "../MEDIA-GATEWAY-CONTROL/TransactionReply-transactionResult.ta.mjs";
import { SegmentNumber, _decode_SegmentNumber, _encode_SegmentNumber } from "../MEDIA-GATEWAY-CONTROL/SegmentNumber.ta.mjs";
// export { SegmentNumber, _decode_SegmentNumber, _encode_SegmentNumber } from "../MEDIA-GATEWAY-CONTROL/SegmentNumber.ta.mjs";


/**
 * @summary TransactionReply
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransactionReply ::= SEQUENCE
 *     {
 *         transactionId            [0] TransactionId,
 *         immAckRequired            [1] NULL OPTIONAL,
 *         transactionResult        [2] CHOICE
 *         {
 *             transactionError        [0]ErrorDescriptor,
 *             actionReplies            [1] SEQUENCE OF ActionReply
 *         },
 *         ...,
 *         segmentNumber            [3] SegmentNumber OPTIONAL,
 *         segmentationComplete    [4] NULL OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class TransactionReply {
    constructor (
        /**
         * @summary `transactionId`.
         * @public
         * @readonly
         */
        readonly transactionId: TransactionId,
        /**
         * @summary `immAckRequired`.
         * @public
         * @readonly
         */
        readonly immAckRequired: OPTIONAL<NULL>,
        /**
         * @summary `transactionResult`.
         * @public
         * @readonly
         */
        readonly transactionResult: TransactionReply_transactionResult,
        /**
         * @summary `segmentNumber`.
         * @public
         * @readonly
         */
        readonly segmentNumber: OPTIONAL<SegmentNumber>,
        /**
         * @summary `segmentationComplete`.
         * @public
         * @readonly
         */
        readonly segmentationComplete: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TransactionReply
     * @description
     * 
     * This takes an `object` and converts it to a `TransactionReply`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TransactionReply`.
     * @returns {TransactionReply}
     */
    public static _from_object (_o: { [_K in keyof (TransactionReply)]: (TransactionReply)[_K] }): TransactionReply {
        return new TransactionReply(_o.transactionId, _o.immAckRequired, _o.transactionResult, _o.segmentNumber, _o.segmentationComplete, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TransactionReply
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TransactionReply: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("immAckRequired", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("transactionResult", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TransactionReply
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TransactionReply: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TransactionReply
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TransactionReply: $.ComponentSpec[] = [
    new $.ComponentSpec("segmentNumber", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("segmentationComplete", true, $.hasTag(_TagClass.context, 4))
];

let _cached_decoder_for_TransactionReply: $.ASN1Decoder<TransactionReply> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransactionReply
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransactionReply (el: _Element): TransactionReply {
    if (!_cached_decoder_for_TransactionReply) { _cached_decoder_for_TransactionReply = function (el: _Element): TransactionReply {
    let transactionId!: TransactionId;
    let immAckRequired: OPTIONAL<NULL>;
    let transactionResult!: TransactionReply_transactionResult;
    let segmentNumber: OPTIONAL<SegmentNumber>;
    let segmentationComplete: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "transactionId": (_el: _Element): void => { transactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(_el); },
        "immAckRequired": (_el: _Element): void => { immAckRequired = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "transactionResult": (_el: _Element): void => { transactionResult = $._decode_explicit<TransactionReply_transactionResult>(() => _decode_TransactionReply_transactionResult)(_el); },
        "segmentNumber": (_el: _Element): void => { segmentNumber = $._decode_implicit<SegmentNumber>(() => _decode_SegmentNumber)(_el); },
        "segmentationComplete": (_el: _Element): void => { segmentationComplete = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TransactionReply,
        _extension_additions_list_spec_for_TransactionReply,
        _root_component_type_list_2_spec_for_TransactionReply,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TransactionReply(
        transactionId,
        immAckRequired,
        transactionResult,
        segmentNumber,
        segmentationComplete,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TransactionReply(el);
}

let _cached_encoder_for_TransactionReply: $.ASN1Encoder<TransactionReply> | null = null;

/**
 * @summary Encodes a(n) TransactionReply into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransactionReply, encoded as an ASN.1 Element.
 */
export
function _encode_TransactionReply (value: TransactionReply, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransactionReply) { _cached_encoder_for_TransactionReply = function (value: TransactionReply, elGetter: $.ASN1Encoder<TransactionReply>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TransactionId, $.BER)(value.transactionId, $.BER),
            /* IF_ABSENT  */ ((value.immAckRequired === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.immAckRequired, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_TransactionReply_transactionResult, $.BER)(value.transactionResult, $.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.segmentNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SegmentNumber, $.BER)(value.segmentNumber, $.BER)),
            /* IF_ABSENT  */ ((value.segmentationComplete === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.segmentationComplete, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TransactionReply(value, elGetter);
}


/* eslint-enable */
