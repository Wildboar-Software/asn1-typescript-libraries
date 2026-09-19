/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MRN, _decode_MRN, _encode_MRN } from "../MMSInformationObjects/MRN.ta.mjs";
// export { MRN, _decode_MRN, _encode_MRN } from "../MMSInformationObjects/MRN.ta.mjs";


/**
 * @summary OriginateMRNArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginateMRNArgument ::= SET {
 *   envelope  [0]  MessageSubmissionEnvelope,
 *   content   [1]  MRN}
 * ```
 * 
 * @class
 */
export
class OriginateMRNArgument {
    constructor (
        /**
         * @summary `envelope`.
         * @public
         * @readonly
         */
        readonly envelope: MessageSubmissionEnvelope,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: MRN
    ) {}

    /**
     * @summary Restructures an object into a OriginateMRNArgument
     * @description
     * 
     * This takes an `object` and converts it to a `OriginateMRNArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OriginateMRNArgument`.
     * @returns {OriginateMRNArgument}
     */
    public static _from_object (_o: { [_K in keyof (OriginateMRNArgument)]: (OriginateMRNArgument)[_K] }): OriginateMRNArgument {
        return new OriginateMRNArgument(_o.envelope, _o.content);
    }


}

/**
 * @summary The Leading Root Component Types of OriginateMRNArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OriginateMRNArgument: $.ComponentSpec[] = [
    /* FIXME: envelope COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("content", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of OriginateMRNArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OriginateMRNArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OriginateMRNArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OriginateMRNArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OriginateMRNArgument: $.ASN1Decoder<OriginateMRNArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginateMRNArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OriginateMRNArgument (el: _Element): OriginateMRNArgument {
    if (!_cached_decoder_for_OriginateMRNArgument) { _cached_decoder_for_OriginateMRNArgument = function (el: _Element): OriginateMRNArgument {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let envelope!: MessageSubmissionEnvelope;
    let content!: MRN;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "envelope": (_el: _Element): void => { envelope = $._decode_implicit<MessageSubmissionEnvelope>(() => _decode_MessageSubmissionEnvelope)(_el); },
        "content": (_el: _Element): void => { content = $._decode_implicit<MRN>(() => _decode_MRN)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OriginateMRNArgument,
        _extension_additions_list_spec_for_OriginateMRNArgument,
        _root_component_type_list_2_spec_for_OriginateMRNArgument,
        undefined,
    );
    return new OriginateMRNArgument( /* SET_CONSTRUCTOR_CALL */
        envelope,
        content
    );
}; }
    return _cached_decoder_for_OriginateMRNArgument(el);
}

let _cached_encoder_for_OriginateMRNArgument: $.ASN1Encoder<OriginateMRNArgument> | null = null;

/**
 * @summary Encodes a(n) OriginateMRNArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginateMRNArgument, encoded as an ASN.1 Element.
 */
export
function _encode_OriginateMRNArgument (value: OriginateMRNArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OriginateMRNArgument) { _cached_encoder_for_OriginateMRNArgument = function (value: OriginateMRNArgument, elGetter: $.ASN1Encoder<OriginateMRNArgument>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MessageSubmissionEnvelope, $.BER)(value.envelope, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MRN, $.BER)(value.content, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OriginateMRNArgument(value, elGetter);
}


/* eslint-enable */
