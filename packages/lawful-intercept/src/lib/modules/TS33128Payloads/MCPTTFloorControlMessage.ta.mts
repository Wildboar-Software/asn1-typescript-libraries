/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCServiceIDOrGroupID, _decode_MCServiceIDOrGroupID, _encode_MCServiceIDOrGroupID } from "../TS33128Payloads/MCServiceIDOrGroupID.ta.mjs";
// export { MCServiceIDOrGroupID, _decode_MCServiceIDOrGroupID, _encode_MCServiceIDOrGroupID } from "../TS33128Payloads/MCServiceIDOrGroupID.ta.mjs";


/**
 * @summary MCPTTFloorControlMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCPTTFloorControlMessage ::= SEQUENCE
 * {
 *     mCServiceIDOrGroupID                [1] MCServiceIDOrGroupID,
 *     floorControlMessage                 [2] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class MCPTTFloorControlMessage {
    /**
     * @summary `mCServiceIDOrGroupID`.
     * @public
     * @readonly
     */
    readonly mCServiceIDOrGroupID: MCServiceIDOrGroupID;
    /**
     * @summary `floorControlMessage`.
     * @public
     * @readonly
     */
    readonly floorControlMessage: OCTET_STRING;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mCServiceIDOrGroupID: MCServiceIDOrGroupID,
        floorControlMessage: OCTET_STRING,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mCServiceIDOrGroupID = mCServiceIDOrGroupID;
        this.floorControlMessage = floorControlMessage;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCPTTFloorControlMessage
     * @description
     * 
     * This takes an `object` and converts it to a `MCPTTFloorControlMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCPTTFloorControlMessage`.
     * @returns {MCPTTFloorControlMessage}
     */
    public static _from_object (_o: { [_K in keyof (MCPTTFloorControlMessage)]: (MCPTTFloorControlMessage)[_K] }): MCPTTFloorControlMessage {
        return new MCPTTFloorControlMessage(_o.mCServiceIDOrGroupID, _o.floorControlMessage, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MCPTTFloorControlMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCPTTFloorControlMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("mCServiceIDOrGroupID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("floorControlMessage", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MCPTTFloorControlMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCPTTFloorControlMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCPTTFloorControlMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCPTTFloorControlMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCPTTFloorControlMessage: $.ASN1Decoder<MCPTTFloorControlMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCPTTFloorControlMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCPTTFloorControlMessage (el: _Element): MCPTTFloorControlMessage {
    if (!_cached_decoder_for_MCPTTFloorControlMessage) { _cached_decoder_for_MCPTTFloorControlMessage = function (el: _Element): MCPTTFloorControlMessage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MCPTTFloorControlMessage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mCServiceIDOrGroupID";
    sequence[1].name = "floorControlMessage";
    let mCServiceIDOrGroupID!: MCServiceIDOrGroupID;
    let floorControlMessage!: OCTET_STRING;
    mCServiceIDOrGroupID = $._decode_explicit<MCServiceIDOrGroupID>(() => _decode_MCServiceIDOrGroupID)(sequence[0]);
    floorControlMessage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new MCPTTFloorControlMessage(
        mCServiceIDOrGroupID,
        floorControlMessage,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_MCPTTFloorControlMessage(el);
}

let _cached_encoder_for_MCPTTFloorControlMessage: $.ASN1Encoder<MCPTTFloorControlMessage> | null = null;

/**
 * @summary Encodes a(n) MCPTTFloorControlMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCPTTFloorControlMessage, encoded as an ASN.1 Element.
 */
export
function _encode_MCPTTFloorControlMessage (value: MCPTTFloorControlMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCPTTFloorControlMessage) { _cached_encoder_for_MCPTTFloorControlMessage = function (value: MCPTTFloorControlMessage, elGetter: $.ASN1Encoder<MCPTTFloorControlMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_MCServiceIDOrGroupID, $.BER)(value.mCServiceIDOrGroupID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.floorControlMessage, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCPTTFloorControlMessage(value, elGetter);
}


/* eslint-enable */
