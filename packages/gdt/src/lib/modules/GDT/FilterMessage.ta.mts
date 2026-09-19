/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FilterAction, _decode_FilterAction, _encode_FilterAction } from "../GDT/FilterAction.ta.mjs";
// export { FilterAction, FilterAction_fa_filter_request /* IMPORTED_LONG_NAMED_INTEGER */, fa_filter_request /* IMPORTED_SHORT_NAMED_INTEGER */, FilterAction_fa_filter_result /* IMPORTED_LONG_NAMED_INTEGER */, fa_filter_result /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_FilterAction, _encode_FilterAction } from "../GDT/FilterAction.ta.mjs";
import { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";
// export { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";


/**
 * @summary FilterMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FilterMessage ::= SEQUENCE {
 *     filter-action   FilterAction,
 *     params          Parameters OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class FilterMessage {
    constructor (
        /**
         * @summary `filter_action`.
         * @public
         * @readonly
         */
        readonly filter_action: FilterAction,
        /**
         * @summary `params`.
         * @public
         * @readonly
         */
        readonly params: OPTIONAL<Parameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a FilterMessage
     * @description
     * 
     * This takes an `object` and converts it to a `FilterMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FilterMessage`.
     * @returns {FilterMessage}
     */
    public static _from_object (_o: { [_K in keyof (FilterMessage)]: (FilterMessage)[_K] }): FilterMessage {
        return new FilterMessage(_o.filter_action, _o.params, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of FilterMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FilterMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("filter-action", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("params", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of FilterMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FilterMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FilterMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FilterMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FilterMessage: $.ASN1Decoder<FilterMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FilterMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FilterMessage (el: _Element): FilterMessage {
    if (!_cached_decoder_for_FilterMessage) { _cached_decoder_for_FilterMessage = function (el: _Element): FilterMessage {
    let filter_action!: FilterAction;
    let params: OPTIONAL<Parameters>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "filter-action": (_el: _Element): void => { filter_action = _decode_FilterAction(_el); },
        "params": (_el: _Element): void => { params = _decode_Parameters(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FilterMessage,
        _extension_additions_list_spec_for_FilterMessage,
        _root_component_type_list_2_spec_for_FilterMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new FilterMessage(
        filter_action,
        params,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_FilterMessage(el);
}

let _cached_encoder_for_FilterMessage: $.ASN1Encoder<FilterMessage> | null = null;

/**
 * @summary Encodes a(n) FilterMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilterMessage, encoded as an ASN.1 Element.
 */
export
function _encode_FilterMessage (value: FilterMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FilterMessage) { _cached_encoder_for_FilterMessage = function (value: FilterMessage, elGetter: $.ASN1Encoder<FilterMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_FilterAction(value.filter_action, $.BER),
            /* IF_ABSENT  */ ((value.params === undefined) ? undefined : _encode_Parameters(value.params, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FilterMessage(value, elGetter);
}


/* eslint-enable */
