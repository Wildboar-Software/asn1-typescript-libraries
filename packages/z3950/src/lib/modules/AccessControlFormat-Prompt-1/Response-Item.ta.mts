/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PromptId, _decode_PromptId, _encode_PromptId } from "../AccessControlFormat-Prompt-1/PromptId.ta.mjs";
// export { PromptId, _decode_PromptId, _encode_PromptId } from "../AccessControlFormat-Prompt-1/PromptId.ta.mjs";
import { Response_Item_promptResponse, _decode_Response_Item_promptResponse, _encode_Response_Item_promptResponse } from "../AccessControlFormat-Prompt-1/Response-Item-promptResponse.ta.mjs";
// export { Response_Item_promptResponse, _decode_Response_Item_promptResponse, _encode_Response_Item_promptResponse } from "../AccessControlFormat-Prompt-1/Response-Item-promptResponse.ta.mjs";


/**
 * @summary Response_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Response-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class Response_Item {
    constructor (
        /**
         * @summary `promptId`.
         * @public
         * @readonly
         */
        readonly promptId: PromptId,
        /**
         * @summary `promptResponse`.
         * @public
         * @readonly
         */
        readonly promptResponse: Response_Item_promptResponse
    ) {}

    /**
     * @summary Restructures an object into a Response_Item
     * @description
     * 
     * This takes an `object` and converts it to a `Response_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Response_Item`.
     * @returns {Response_Item}
     */
    public static _from_object (_o: { [_K in keyof (Response_Item)]: (Response_Item)[_K] }): Response_Item {
        return new Response_Item(_o.promptId, _o.promptResponse);
    }


}

/**
 * @summary The Leading Root Component Types of Response_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Response_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("promptId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("promptResponse", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Response_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Response_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Response_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Response_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Response_Item: $.ASN1Decoder<Response_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Response_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Response_Item (el: _Element): Response_Item {
    if (!_cached_decoder_for_Response_Item) { _cached_decoder_for_Response_Item = function (el: _Element): Response_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Response-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "promptId";
    sequence[1].name = "promptResponse";
    let promptId!: PromptId;
    let promptResponse!: Response_Item_promptResponse;
    promptId = $._decode_explicit<PromptId>(() => _decode_PromptId)(sequence[0]);
    promptResponse = $._decode_explicit<Response_Item_promptResponse>(() => _decode_Response_Item_promptResponse)(sequence[1]);
    return new Response_Item(
        promptId,
        promptResponse,

    );
}; }
    return _cached_decoder_for_Response_Item(el);
}

let _cached_encoder_for_Response_Item: $.ASN1Encoder<Response_Item> | null = null;

/**
 * @summary Encodes a(n) Response_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Response_Item, encoded as an ASN.1 Element.
 */
export
function _encode_Response_Item (value: Response_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Response_Item) { _cached_encoder_for_Response_Item = function (value: Response_Item, elGetter: $.ASN1Encoder<Response_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_PromptId, $.BER)(value.promptId, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_Response_Item_promptResponse, $.BER)(value.promptResponse, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Response_Item(value, elGetter);
}


/* eslint-enable */
