/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NotificationSentRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationSentRequest ::= [48] SEQUENCE { -- Tag 'BF30'
 *     seqNumber [0] INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class NotificationSentRequest {
    constructor (
        /**
         * @summary `seqNumber`.
         * @public
         * @readonly
         */
        readonly seqNumber: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a NotificationSentRequest
     * @description
     * 
     * This takes an `object` and converts it to a `NotificationSentRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NotificationSentRequest`.
     * @returns {NotificationSentRequest}
     */
    public static _from_object (_o: { [_K in keyof (NotificationSentRequest)]: (NotificationSentRequest)[_K] }): NotificationSentRequest {
        return new NotificationSentRequest(_o.seqNumber);
    }


}

/**
 * @summary The Leading Root Component Types of NotificationSentRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NotificationSentRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("seqNumber", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of NotificationSentRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NotificationSentRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NotificationSentRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NotificationSentRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NotificationSentRequest: $.ASN1Decoder<NotificationSentRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationSentRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationSentRequest (el: _Element): NotificationSentRequest {
    if (!_cached_decoder_for_NotificationSentRequest) { _cached_decoder_for_NotificationSentRequest = $._decode_implicit<NotificationSentRequest>(() => function (el: _Element): NotificationSentRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("NotificationSentRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "seqNumber";
    let seqNumber!: INTEGER;
    seqNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    return new NotificationSentRequest(
        seqNumber,

    );
}); }
    return _cached_decoder_for_NotificationSentRequest(el);
}

let _cached_encoder_for_NotificationSentRequest: $.ASN1Encoder<NotificationSentRequest> | null = null;

/**
 * @summary Encodes a(n) NotificationSentRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationSentRequest, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationSentRequest (value: NotificationSentRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationSentRequest) { _cached_encoder_for_NotificationSentRequest = $._encode_implicit(_TagClass.context, 48, () => function (value: NotificationSentRequest, elGetter: $.ASN1Encoder<NotificationSentRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.seqNumber, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_NotificationSentRequest(value, elGetter);
}


/* eslint-enable */
