/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
// export { MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
import { KMMessage, _decode_KMMessage, _encode_KMMessage } from "../TS33128Payloads/KMMessage.ta.mjs";
// export { KMMessage, _decode_KMMessage, _encode_KMMessage } from "../TS33128Payloads/KMMessage.ta.mjs";


/**
 * @summary MCXKMMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCXKMMessage ::= SEQUENCE
 * {
 *     mCServiceID                 [1] MCServiceID,
 *     kMMessage                   [2] KMMessage
 * }
 * ```
 * 
 * @class
 */
export
class MCXKMMessage {
    /**
     * @summary `mCServiceID`.
     * @public
     * @readonly
     */
    readonly mCServiceID: MCServiceID;
    /**
     * @summary `kMMessage`.
     * @description
     *
     * Represents the content of the key management request (i.e. HTTP POST)
     * sent by the target to the Key Management Server and content of key
     * management response returned by the Key Management Server relating to key
     * material for MC service (see table 7.20.2.4.2-8).
     *
     * 3GPP TS 33.128, clause 7.20.2.4.2.
     *
     * @public
     * @readonly
     */
    readonly kMMessage: KMMessage;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mCServiceID: MCServiceID,
        kMMessage: KMMessage,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mCServiceID = mCServiceID;
        this.kMMessage = kMMessage;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCXKMMessage
     * @description
     * 
     * This takes an `object` and converts it to a `MCXKMMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCXKMMessage`.
     * @returns {MCXKMMessage}
     */
    public static _from_object (_o: { [_K in keyof (MCXKMMessage)]: (MCXKMMessage)[_K] }): MCXKMMessage {
        return new MCXKMMessage(_o.mCServiceID, _o.kMMessage, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MCXKMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCXKMMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("mCServiceID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("kMMessage", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MCXKMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCXKMMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCXKMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCXKMMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCXKMMessage: $.ASN1Decoder<MCXKMMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCXKMMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCXKMMessage (el: _Element): MCXKMMessage {
    if (!_cached_decoder_for_MCXKMMessage) { _cached_decoder_for_MCXKMMessage = function (el: _Element): MCXKMMessage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MCXKMMessage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mCServiceID";
    sequence[1].name = "kMMessage";
    let mCServiceID!: MCServiceID;
    let kMMessage!: KMMessage;
    mCServiceID = $._decode_implicit<MCServiceID>(() => _decode_MCServiceID)(sequence[0]);
    kMMessage = $._decode_implicit<KMMessage>(() => _decode_KMMessage)(sequence[1]);
    return new MCXKMMessage(
        mCServiceID,
        kMMessage,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_MCXKMMessage(el);
}

let _cached_encoder_for_MCXKMMessage: $.ASN1Encoder<MCXKMMessage> | null = null;

/**
 * @summary Encodes a(n) MCXKMMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCXKMMessage, encoded as an ASN.1 Element.
 */
export
function _encode_MCXKMMessage (value: MCXKMMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCXKMMessage) { _cached_encoder_for_MCXKMMessage = function (value: MCXKMMessage, elGetter: $.ASN1Encoder<MCXKMMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MCServiceID, $.BER)(value.mCServiceID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_KMMessage, $.BER)(value.kMMessage, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCXKMMessage(value, elGetter);
}


/* eslint-enable */
