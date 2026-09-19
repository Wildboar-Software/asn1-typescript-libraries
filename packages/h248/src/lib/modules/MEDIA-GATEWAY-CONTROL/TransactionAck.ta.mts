/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../MEDIA-GATEWAY-CONTROL/TransactionId.ta.mjs";
// export { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../MEDIA-GATEWAY-CONTROL/TransactionId.ta.mjs";


/**
 * @summary TransactionAck
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransactionAck ::= SEQUENCE
 *     {
 *         firstAck        [0] TransactionId,
 *         lastAck            [1] TransactionId OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class TransactionAck {
    constructor (
        /**
         * @summary `firstAck`.
         * @public
         * @readonly
         */
        readonly firstAck: TransactionId,
        /**
         * @summary `lastAck`.
         * @public
         * @readonly
         */
        readonly lastAck: OPTIONAL<TransactionId>
    ) {}

    /**
     * @summary Restructures an object into a TransactionAck
     * @description
     * 
     * This takes an `object` and converts it to a `TransactionAck`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TransactionAck`.
     * @returns {TransactionAck}
     */
    public static _from_object (_o: { [_K in keyof (TransactionAck)]: (TransactionAck)[_K] }): TransactionAck {
        return new TransactionAck(_o.firstAck, _o.lastAck);
    }


}

/**
 * @summary The Leading Root Component Types of TransactionAck
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TransactionAck: $.ComponentSpec[] = [
    new $.ComponentSpec("firstAck", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lastAck", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TransactionAck
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TransactionAck: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TransactionAck
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TransactionAck: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TransactionAck: $.ASN1Decoder<TransactionAck> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransactionAck
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransactionAck (el: _Element): TransactionAck {
    if (!_cached_decoder_for_TransactionAck) { _cached_decoder_for_TransactionAck = function (el: _Element): TransactionAck {
    let firstAck!: TransactionId;
    let lastAck: OPTIONAL<TransactionId>;
    const callbacks: $.DecodingMap = {
        "firstAck": (_el: _Element): void => { firstAck = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(_el); },
        "lastAck": (_el: _Element): void => { lastAck = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TransactionAck,
        _extension_additions_list_spec_for_TransactionAck,
        _root_component_type_list_2_spec_for_TransactionAck,
        undefined,
    );
    return new TransactionAck(
        firstAck,
        lastAck
    );
}; }
    return _cached_decoder_for_TransactionAck(el);
}

let _cached_encoder_for_TransactionAck: $.ASN1Encoder<TransactionAck> | null = null;

/**
 * @summary Encodes a(n) TransactionAck into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransactionAck, encoded as an ASN.1 Element.
 */
export
function _encode_TransactionAck (value: TransactionAck, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransactionAck) { _cached_encoder_for_TransactionAck = function (value: TransactionAck, elGetter: $.ASN1Encoder<TransactionAck>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TransactionId, $.BER)(value.firstAck, $.BER),
            /* IF_ABSENT  */ ((value.lastAck === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_TransactionId, $.BER)(value.lastAck, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TransactionAck(value, elGetter);
}


/* eslint-enable */
