/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
// export { MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
import { LMMessage, _decode_LMMessage, _encode_LMMessage } from "../TS33128Payloads/LMMessage.ta.mjs";
// export { LMMessage, _decode_LMMessage, _encode_LMMessage } from "../TS33128Payloads/LMMessage.ta.mjs";


/**
 * @summary MCXLMMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCXLMMessage ::= SEQUENCE
 * {
 *     mCServiceID                 [1] MCServiceID,
 *     lMMessage                   [2] LMMessage
 * }
 * ```
 * 
 * @class
 */
export
class MCXLMMessage {
    /**
     * @summary `mCServiceID`.
     * @public
     * @readonly
     */
    readonly mCServiceID: MCServiceID;
    /**
     * @summary `lMMessage`.
     * @description
     *
     * Contains the request and associated response relating to location
     * management procedures occurring between the target MC service user and
     * Location Management Server (see table 7.20.2.4.2-10). The location
     * management procedures are the following (see TS 24.283 [155] clauses A.2,
     * A.3 and A.4): - Target registers (POST), updates its registration (PUT)
     * and deregisters (DELETE) in the Location Management Server. - Location
     * Management Server sends a location reporting configuration request (POST)
     * to the target. - Location Management Server sends a location information
     * request (POST) to the target. - Target sends a location report (POST)
     * providing its location information. - Target requests location
     * information (POST) of one or more MC service users from the Location
     * Management Server. - Target subscribes (POST), updates subscription (PUT)
     * and terminates subscription (DELETE) to location information of one or
     * more MC service users from the location management Server. - Location
     * Management Server sends notifications (POST) to target about location
     * information of one or more MC service users.
     *
     * 3GPP TS 33.128, clause 7.20.2.4.2.
     *
     * @public
     * @readonly
     */
    readonly lMMessage: LMMessage;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mCServiceID: MCServiceID,
        lMMessage: LMMessage,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mCServiceID = mCServiceID;
        this.lMMessage = lMMessage;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCXLMMessage
     * @description
     * 
     * This takes an `object` and converts it to a `MCXLMMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCXLMMessage`.
     * @returns {MCXLMMessage}
     */
    public static _from_object (_o: { [_K in keyof (MCXLMMessage)]: (MCXLMMessage)[_K] }): MCXLMMessage {
        return new MCXLMMessage(_o.mCServiceID, _o.lMMessage, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MCXLMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCXLMMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("mCServiceID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lMMessage", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MCXLMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCXLMMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCXLMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCXLMMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCXLMMessage: $.ASN1Decoder<MCXLMMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCXLMMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCXLMMessage (el: _Element): MCXLMMessage {
    if (!_cached_decoder_for_MCXLMMessage) { _cached_decoder_for_MCXLMMessage = function (el: _Element): MCXLMMessage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MCXLMMessage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mCServiceID";
    sequence[1].name = "lMMessage";
    let mCServiceID!: MCServiceID;
    let lMMessage!: LMMessage;
    mCServiceID = $._decode_implicit<MCServiceID>(() => _decode_MCServiceID)(sequence[0]);
    lMMessage = $._decode_implicit<LMMessage>(() => _decode_LMMessage)(sequence[1]);
    return new MCXLMMessage(
        mCServiceID,
        lMMessage,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_MCXLMMessage(el);
}

let _cached_encoder_for_MCXLMMessage: $.ASN1Encoder<MCXLMMessage> | null = null;

/**
 * @summary Encodes a(n) MCXLMMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCXLMMessage, encoded as an ASN.1 Element.
 */
export
function _encode_MCXLMMessage (value: MCXLMMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCXLMMessage) { _cached_encoder_for_MCXLMMessage = function (value: MCXLMMessage, elGetter: $.ASN1Encoder<MCXLMMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MCServiceID, $.BER)(value.mCServiceID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_LMMessage, $.BER)(value.lMMessage, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCXLMMessage(value, elGetter);
}


/* eslint-enable */
