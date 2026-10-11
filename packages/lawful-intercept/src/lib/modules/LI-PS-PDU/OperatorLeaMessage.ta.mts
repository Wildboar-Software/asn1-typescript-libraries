/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OperatorLeaMessagePriority, _decode_OperatorLeaMessagePriority, _encode_OperatorLeaMessagePriority, _enum_for_OperatorLeaMessagePriority } from "../LI-PS-PDU/OperatorLeaMessagePriority.ta.mjs";
// export { OperatorLeaMessagePriority, _enum_for_OperatorLeaMessagePriority, OperatorLeaMessagePriority_error /* IMPORTED_LONG_ENUMERATION_ITEM */, error /* IMPORTED_SHORT_ENUMERATION_ITEM */, OperatorLeaMessagePriority_informational /* IMPORTED_LONG_ENUMERATION_ITEM */, informational /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_OperatorLeaMessagePriority, _encode_OperatorLeaMessagePriority } from "../LI-PS-PDU/OperatorLeaMessagePriority.ta.mjs";


/**
 * @summary OperatorLeaMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperatorLeaMessage ::= SEQUENCE
 * {
 *     messagePriority     [0] OperatorLeaMessagePriority,
 *     message             [1] OCTET STRING (SIZE(1..255)),
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class OperatorLeaMessage {
    /**
     * @summary `messagePriority`.
     * @public
     * @readonly
     */
    readonly messagePriority: OperatorLeaMessagePriority;
    /**
     * @summary `message`.
     * @public
     * @readonly
     */
    readonly message: OCTET_STRING;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        messagePriority: OperatorLeaMessagePriority,
        message: OCTET_STRING,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.messagePriority = messagePriority;
        this.message = message;
        if (this.message.length < 1 || this.message.length > 255) {
            throw new ASN1SizeError("message violates the SIZE constraint");
        }
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a OperatorLeaMessage
     * @description
     * 
     * This takes an `object` and converts it to a `OperatorLeaMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OperatorLeaMessage`.
     * @returns {OperatorLeaMessage}
     */
    public static _from_object (_o: { [_K in keyof (OperatorLeaMessage)]: (OperatorLeaMessage)[_K] }): OperatorLeaMessage {
        return new OperatorLeaMessage(_o.messagePriority, _o.message, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `messagePriority`
         * @public
         * @static
         */

    public static _enum_for_messagePriority = _enum_for_OperatorLeaMessagePriority;
}

/**
 * @summary The Leading Root Component Types of OperatorLeaMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OperatorLeaMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("messagePriority", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("message", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of OperatorLeaMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OperatorLeaMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OperatorLeaMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OperatorLeaMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OperatorLeaMessage: $.ASN1Decoder<OperatorLeaMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OperatorLeaMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OperatorLeaMessage (el: _Element): OperatorLeaMessage {
    if (!_cached_decoder_for_OperatorLeaMessage) { _cached_decoder_for_OperatorLeaMessage = function (el: _Element): OperatorLeaMessage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("OperatorLeaMessage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "messagePriority";
    sequence[1].name = "message";
    let messagePriority!: OperatorLeaMessagePriority;
    let message!: OCTET_STRING;
    messagePriority = $._decode_implicit<OperatorLeaMessagePriority>(() => _decode_OperatorLeaMessagePriority)(sequence[0]);
    message = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new OperatorLeaMessage(
        messagePriority,
        message,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_OperatorLeaMessage(el);
}

let _cached_encoder_for_OperatorLeaMessage: $.ASN1Encoder<OperatorLeaMessage> | null = null;

/**
 * @summary Encodes a(n) OperatorLeaMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperatorLeaMessage, encoded as an ASN.1 Element.
 */
export
function _encode_OperatorLeaMessage (value: OperatorLeaMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OperatorLeaMessage) { _cached_encoder_for_OperatorLeaMessage = function (value: OperatorLeaMessage, elGetter: $.ASN1Encoder<OperatorLeaMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_OperatorLeaMessagePriority, $.BER)(value.messagePriority, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.message, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_OperatorLeaMessage(value, elGetter);
}


/* eslint-enable */
