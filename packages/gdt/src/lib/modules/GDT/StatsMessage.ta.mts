/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { StatsAction, _decode_StatsAction, _encode_StatsAction } from "../GDT/StatsAction.ta.mjs";
// export { StatsAction, StatsAction_sa_request /* IMPORTED_LONG_NAMED_INTEGER */, sa_request /* IMPORTED_SHORT_NAMED_INTEGER */, StatsAction_sa_result /* IMPORTED_LONG_NAMED_INTEGER */, sa_result /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_StatsAction, _encode_StatsAction } from "../GDT/StatsAction.ta.mjs";
import { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";
// export { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";


/**
 * @summary StatsMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatsMessage ::= SEQUENCE {
 *     stats-action    StatsAction,
 *     params          Parameters OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class StatsMessage {
    constructor (
        /**
         * @summary `stats_action`.
         * @public
         * @readonly
         */
        readonly stats_action: StatsAction,
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
     * @summary Restructures an object into a StatsMessage
     * @description
     * 
     * This takes an `object` and converts it to a `StatsMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StatsMessage`.
     * @returns {StatsMessage}
     */
    public static _from_object (_o: { [_K in keyof (StatsMessage)]: (StatsMessage)[_K] }): StatsMessage {
        return new StatsMessage(_o.stats_action, _o.params, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of StatsMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StatsMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("stats-action", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("params", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of StatsMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StatsMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StatsMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StatsMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StatsMessage: $.ASN1Decoder<StatsMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatsMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StatsMessage (el: _Element): StatsMessage {
    if (!_cached_decoder_for_StatsMessage) { _cached_decoder_for_StatsMessage = function (el: _Element): StatsMessage {
    let stats_action!: StatsAction;
    let params: OPTIONAL<Parameters>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "stats-action": (_el: _Element): void => { stats_action = _decode_StatsAction(_el); },
        "params": (_el: _Element): void => { params = _decode_Parameters(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StatsMessage,
        _extension_additions_list_spec_for_StatsMessage,
        _root_component_type_list_2_spec_for_StatsMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new StatsMessage(
        stats_action,
        params,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_StatsMessage(el);
}

let _cached_encoder_for_StatsMessage: $.ASN1Encoder<StatsMessage> | null = null;

/**
 * @summary Encodes a(n) StatsMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatsMessage, encoded as an ASN.1 Element.
 */
export
function _encode_StatsMessage (value: StatsMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StatsMessage) { _cached_encoder_for_StatsMessage = function (value: StatsMessage, elGetter: $.ASN1Encoder<StatsMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_StatsAction(value.stats_action, $.BER),
            /* IF_ABSENT  */ ((value.params === undefined) ? undefined : _encode_Parameters(value.params, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StatsMessage(value, elGetter);
}


/* eslint-enable */
