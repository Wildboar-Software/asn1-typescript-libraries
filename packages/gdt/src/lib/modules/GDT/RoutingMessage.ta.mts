/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RoutingAction, _decode_RoutingAction, _encode_RoutingAction } from "../GDT/RoutingAction.ta.mjs";
// export { RoutingAction, RoutingAction_roua_route_set /* IMPORTED_LONG_NAMED_INTEGER */, roua_route_set /* IMPORTED_SHORT_NAMED_INTEGER */, RoutingAction_roua_route_get /* IMPORTED_LONG_NAMED_INTEGER */, roua_route_get /* IMPORTED_SHORT_NAMED_INTEGER */, RoutingAction_roua_route_result /* IMPORTED_LONG_NAMED_INTEGER */, roua_route_result /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RoutingAction, _encode_RoutingAction } from "../GDT/RoutingAction.ta.mjs";
import { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";
// export { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";


/**
 * @summary RoutingMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoutingMessage ::= SEQUENCE {
 *     routing-action  RoutingAction,
 *     params          Parameters OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class RoutingMessage {
    constructor (
        /**
         * @summary `routing_action`.
         * @public
         * @readonly
         */
        readonly routing_action: RoutingAction,
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
     * @summary Restructures an object into a RoutingMessage
     * @description
     * 
     * This takes an `object` and converts it to a `RoutingMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RoutingMessage`.
     * @returns {RoutingMessage}
     */
    public static _from_object (_o: { [_K in keyof (RoutingMessage)]: (RoutingMessage)[_K] }): RoutingMessage {
        return new RoutingMessage(_o.routing_action, _o.params, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RoutingMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RoutingMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("routing-action", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("params", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of RoutingMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RoutingMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RoutingMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RoutingMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RoutingMessage: $.ASN1Decoder<RoutingMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoutingMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoutingMessage (el: _Element): RoutingMessage {
    if (!_cached_decoder_for_RoutingMessage) { _cached_decoder_for_RoutingMessage = function (el: _Element): RoutingMessage {
    let routing_action!: RoutingAction;
    let params: OPTIONAL<Parameters>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "routing-action": (_el: _Element): void => { routing_action = _decode_RoutingAction(_el); },
        "params": (_el: _Element): void => { params = _decode_Parameters(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RoutingMessage,
        _extension_additions_list_spec_for_RoutingMessage,
        _root_component_type_list_2_spec_for_RoutingMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RoutingMessage(
        routing_action,
        params,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RoutingMessage(el);
}

let _cached_encoder_for_RoutingMessage: $.ASN1Encoder<RoutingMessage> | null = null;

/**
 * @summary Encodes a(n) RoutingMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoutingMessage, encoded as an ASN.1 Element.
 */
export
function _encode_RoutingMessage (value: RoutingMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoutingMessage) { _cached_encoder_for_RoutingMessage = function (value: RoutingMessage, elGetter: $.ASN1Encoder<RoutingMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RoutingAction(value.routing_action, $.BER),
            /* IF_ABSENT  */ ((value.params === undefined) ? undefined : _encode_Parameters(value.params, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RoutingMessage(value, elGetter);
}


/* eslint-enable */
