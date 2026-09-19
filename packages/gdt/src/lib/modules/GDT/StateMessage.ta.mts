/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { StateAction, _decode_StateAction, _encode_StateAction } from "../GDT/StateAction.ta.mjs";
// export { StateAction, StateAction_sta_update /* IMPORTED_LONG_NAMED_INTEGER */, sta_update /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_StateAction, _encode_StateAction } from "../GDT/StateAction.ta.mjs";
import { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";
// export { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";


/**
 * @summary StateMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StateMessage ::= SEQUENCE {
 *     stmch-id        OCTET STRING,
 *     state-action    StateAction,
 *     params          Parameters OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class StateMessage {
    constructor (
        /**
         * @summary `stmch_id`.
         * @public
         * @readonly
         */
        readonly stmch_id: OCTET_STRING,
        /**
         * @summary `state_action`.
         * @public
         * @readonly
         */
        readonly state_action: StateAction,
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
     * @summary Restructures an object into a StateMessage
     * @description
     * 
     * This takes an `object` and converts it to a `StateMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StateMessage`.
     * @returns {StateMessage}
     */
    public static _from_object (_o: { [_K in keyof (StateMessage)]: (StateMessage)[_K] }): StateMessage {
        return new StateMessage(_o.stmch_id, _o.state_action, _o.params, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of StateMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StateMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("stmch-id", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("state-action", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("params", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of StateMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StateMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StateMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StateMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StateMessage: $.ASN1Decoder<StateMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StateMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StateMessage (el: _Element): StateMessage {
    if (!_cached_decoder_for_StateMessage) { _cached_decoder_for_StateMessage = function (el: _Element): StateMessage {
    let stmch_id!: OCTET_STRING;
    let state_action!: StateAction;
    let params: OPTIONAL<Parameters>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "stmch-id": (_el: _Element): void => { stmch_id = $._decodeOctetString(_el); },
        "state-action": (_el: _Element): void => { state_action = _decode_StateAction(_el); },
        "params": (_el: _Element): void => { params = _decode_Parameters(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StateMessage,
        _extension_additions_list_spec_for_StateMessage,
        _root_component_type_list_2_spec_for_StateMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new StateMessage(
        stmch_id,
        state_action,
        params,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_StateMessage(el);
}

let _cached_encoder_for_StateMessage: $.ASN1Encoder<StateMessage> | null = null;

/**
 * @summary Encodes a(n) StateMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StateMessage, encoded as an ASN.1 Element.
 */
export
function _encode_StateMessage (value: StateMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StateMessage) { _cached_encoder_for_StateMessage = function (value: StateMessage, elGetter: $.ASN1Encoder<StateMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.stmch_id, $.BER),
            /* REQUIRED   */ _encode_StateAction(value.state_action, $.BER),
            /* IF_ABSENT  */ ((value.params === undefined) ? undefined : _encode_Parameters(value.params, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StateMessage(value, elGetter);
}


/* eslint-enable */
