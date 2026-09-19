/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MRN, _decode_MRN, _encode_MRN } from "../MMSInformationObjects/MRN.ta.mjs";
// export { MRN, _decode_MRN, _encode_MRN } from "../MMSInformationObjects/MRN.ta.mjs";


/**
 * @summary ReceiveMRNArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReceiveMRNArgument ::= SET {
 *   envelope  [0]  MessageDeliveryEnvelope,
 *   content   [1]  MRN}
 * ```
 * 
 * @class
 */
export
class ReceiveMRNArgument {
    constructor (
        /**
         * @summary `envelope`.
         * @public
         * @readonly
         */
        readonly envelope: MessageDeliveryEnvelope,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: MRN
    ) {}

    /**
     * @summary Restructures an object into a ReceiveMRNArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ReceiveMRNArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReceiveMRNArgument`.
     * @returns {ReceiveMRNArgument}
     */
    public static _from_object (_o: { [_K in keyof (ReceiveMRNArgument)]: (ReceiveMRNArgument)[_K] }): ReceiveMRNArgument {
        return new ReceiveMRNArgument(_o.envelope, _o.content);
    }


}

/**
 * @summary The Leading Root Component Types of ReceiveMRNArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReceiveMRNArgument: $.ComponentSpec[] = [
    /* FIXME: envelope COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("content", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ReceiveMRNArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReceiveMRNArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReceiveMRNArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReceiveMRNArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReceiveMRNArgument: $.ASN1Decoder<ReceiveMRNArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReceiveMRNArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReceiveMRNArgument (el: _Element): ReceiveMRNArgument {
    if (!_cached_decoder_for_ReceiveMRNArgument) { _cached_decoder_for_ReceiveMRNArgument = function (el: _Element): ReceiveMRNArgument {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let envelope!: MessageDeliveryEnvelope;
    let content!: MRN;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "envelope": (_el: _Element): void => { envelope = $._decode_implicit<MessageDeliveryEnvelope>(() => _decode_MessageDeliveryEnvelope)(_el); },
        "content": (_el: _Element): void => { content = $._decode_implicit<MRN>(() => _decode_MRN)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ReceiveMRNArgument,
        _extension_additions_list_spec_for_ReceiveMRNArgument,
        _root_component_type_list_2_spec_for_ReceiveMRNArgument,
        undefined,
    );
    return new ReceiveMRNArgument( /* SET_CONSTRUCTOR_CALL */
        envelope,
        content
    );
}; }
    return _cached_decoder_for_ReceiveMRNArgument(el);
}

let _cached_encoder_for_ReceiveMRNArgument: $.ASN1Encoder<ReceiveMRNArgument> | null = null;

/**
 * @summary Encodes a(n) ReceiveMRNArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReceiveMRNArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ReceiveMRNArgument (value: ReceiveMRNArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReceiveMRNArgument) { _cached_encoder_for_ReceiveMRNArgument = function (value: ReceiveMRNArgument, elGetter: $.ASN1Encoder<ReceiveMRNArgument>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MessageDeliveryEnvelope, $.BER)(value.envelope, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MRN, $.BER)(value.content, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReceiveMRNArgument(value, elGetter);
}


/* eslint-enable */
