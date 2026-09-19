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
import { SegmentNumber, _decode_SegmentNumber, _encode_SegmentNumber } from "../MEDIA-GATEWAY-CONTROL/SegmentNumber.ta.mjs";
// export { SegmentNumber, _decode_SegmentNumber, _encode_SegmentNumber } from "../MEDIA-GATEWAY-CONTROL/SegmentNumber.ta.mjs";


/**
 * @summary SegmentReply
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SegmentReply ::= SEQUENCE
 *     {
 *         transactionId            [0] TransactionId,
 *         segmentNumber            [1] SegmentNumber,
 *         segmentationComplete    [2] NULL OPTIONAL,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class SegmentReply {
    constructor (
        /**
         * @summary `transactionId`.
         * @public
         * @readonly
         */
        readonly transactionId: TransactionId,
        /**
         * @summary `segmentNumber`.
         * @public
         * @readonly
         */
        readonly segmentNumber: SegmentNumber,
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
     * @summary Restructures an object into a SegmentReply
     * @description
     * 
     * This takes an `object` and converts it to a `SegmentReply`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SegmentReply`.
     * @returns {SegmentReply}
     */
    public static _from_object (_o: { [_K in keyof (SegmentReply)]: (SegmentReply)[_K] }): SegmentReply {
        return new SegmentReply(_o.transactionId, _o.segmentNumber, _o.segmentationComplete, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SegmentReply
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SegmentReply: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("segmentNumber", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("segmentationComplete", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SegmentReply
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SegmentReply: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SegmentReply
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SegmentReply: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SegmentReply: $.ASN1Decoder<SegmentReply> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SegmentReply
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SegmentReply (el: _Element): SegmentReply {
    if (!_cached_decoder_for_SegmentReply) { _cached_decoder_for_SegmentReply = function (el: _Element): SegmentReply {
    let transactionId!: TransactionId;
    let segmentNumber!: SegmentNumber;
    let segmentationComplete: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "transactionId": (_el: _Element): void => { transactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(_el); },
        "segmentNumber": (_el: _Element): void => { segmentNumber = $._decode_implicit<SegmentNumber>(() => _decode_SegmentNumber)(_el); },
        "segmentationComplete": (_el: _Element): void => { segmentationComplete = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SegmentReply,
        _extension_additions_list_spec_for_SegmentReply,
        _root_component_type_list_2_spec_for_SegmentReply,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SegmentReply(
        transactionId,
        segmentNumber,
        segmentationComplete,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SegmentReply(el);
}

let _cached_encoder_for_SegmentReply: $.ASN1Encoder<SegmentReply> | null = null;

/**
 * @summary Encodes a(n) SegmentReply into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SegmentReply, encoded as an ASN.1 Element.
 */
export
function _encode_SegmentReply (value: SegmentReply, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SegmentReply) { _cached_encoder_for_SegmentReply = function (value: SegmentReply, elGetter: $.ASN1Encoder<SegmentReply>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TransactionId, $.BER)(value.transactionId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SegmentNumber, $.BER)(value.segmentNumber, $.BER),
            /* IF_ABSENT  */ ((value.segmentationComplete === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.segmentationComplete, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SegmentReply(value, elGetter);
}


/* eslint-enable */
