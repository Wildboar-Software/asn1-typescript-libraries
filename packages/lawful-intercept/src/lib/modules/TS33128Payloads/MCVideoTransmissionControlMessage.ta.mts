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
import { Direction, _decode_Direction, _encode_Direction, _enum_for_Direction } from "../TS33128Payloads/Direction.ta.mjs";
// export { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";


/**
 * @summary MCVideoTransmissionControlMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCVideoTransmissionControlMessage ::= SEQUENCE
 * {
 *     mCServiceIDOrGroupID                [1] MCServiceIDOrGroupID,
 *     transmissionControlMessage          [2] OCTET STRING,
 *     transmissionControlMessageDirection [3] Direction
 * }
 * ```
 * 
 * @class
 */
export
class MCVideoTransmissionControlMessage {
    /**
     * @summary `mCServiceIDOrGroupID`.
     * @public
     * @readonly
     */
    readonly mCServiceIDOrGroupID: MCServiceIDOrGroupID;
    /**
     * @summary `transmissionControlMessage`.
     * @public
     * @readonly
     */
    readonly transmissionControlMessage: OCTET_STRING;
    /**
     * @summary `transmissionControlMessageDirection`.
     * @public
     * @readonly
     */
    readonly transmissionControlMessageDirection: Direction;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mCServiceIDOrGroupID: MCServiceIDOrGroupID,
        transmissionControlMessage: OCTET_STRING,
        transmissionControlMessageDirection: Direction,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mCServiceIDOrGroupID = mCServiceIDOrGroupID;
        this.transmissionControlMessage = transmissionControlMessage;
        this.transmissionControlMessageDirection = transmissionControlMessageDirection;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCVideoTransmissionControlMessage
     * @description
     * 
     * This takes an `object` and converts it to a `MCVideoTransmissionControlMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCVideoTransmissionControlMessage`.
     * @returns {MCVideoTransmissionControlMessage}
     */
    public static _from_object (_o: { [_K in keyof (MCVideoTransmissionControlMessage)]: (MCVideoTransmissionControlMessage)[_K] }): MCVideoTransmissionControlMessage {
        return new MCVideoTransmissionControlMessage(_o.mCServiceIDOrGroupID, _o.transmissionControlMessage, _o.transmissionControlMessageDirection, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `transmissionControlMessageDirection`
         * @public
         * @static
         */

    public static _enum_for_transmissionControlMessageDirection = _enum_for_Direction;
}

/**
 * @summary The Leading Root Component Types of MCVideoTransmissionControlMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCVideoTransmissionControlMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("mCServiceIDOrGroupID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("transmissionControlMessage", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("transmissionControlMessageDirection", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of MCVideoTransmissionControlMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCVideoTransmissionControlMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCVideoTransmissionControlMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCVideoTransmissionControlMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCVideoTransmissionControlMessage: $.ASN1Decoder<MCVideoTransmissionControlMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCVideoTransmissionControlMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCVideoTransmissionControlMessage (el: _Element): MCVideoTransmissionControlMessage {
    if (!_cached_decoder_for_MCVideoTransmissionControlMessage) { _cached_decoder_for_MCVideoTransmissionControlMessage = function (el: _Element): MCVideoTransmissionControlMessage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("MCVideoTransmissionControlMessage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mCServiceIDOrGroupID";
    sequence[1].name = "transmissionControlMessage";
    sequence[2].name = "transmissionControlMessageDirection";
    let mCServiceIDOrGroupID!: MCServiceIDOrGroupID;
    let transmissionControlMessage!: OCTET_STRING;
    let transmissionControlMessageDirection!: Direction;
    mCServiceIDOrGroupID = $._decode_explicit<MCServiceIDOrGroupID>(() => _decode_MCServiceIDOrGroupID)(sequence[0]);
    transmissionControlMessage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    transmissionControlMessageDirection = $._decode_implicit<Direction>(() => _decode_Direction)(sequence[2]);
    return new MCVideoTransmissionControlMessage(
        mCServiceIDOrGroupID,
        transmissionControlMessage,
        transmissionControlMessageDirection,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_MCVideoTransmissionControlMessage(el);
}

let _cached_encoder_for_MCVideoTransmissionControlMessage: $.ASN1Encoder<MCVideoTransmissionControlMessage> | null = null;

/**
 * @summary Encodes a(n) MCVideoTransmissionControlMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCVideoTransmissionControlMessage, encoded as an ASN.1 Element.
 */
export
function _encode_MCVideoTransmissionControlMessage (value: MCVideoTransmissionControlMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCVideoTransmissionControlMessage) { _cached_encoder_for_MCVideoTransmissionControlMessage = function (value: MCVideoTransmissionControlMessage, _elGetter: $.ASN1Encoder<MCVideoTransmissionControlMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_MCServiceIDOrGroupID, $.BER)(value.mCServiceIDOrGroupID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.transmissionControlMessage, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Direction, $.BER)(value.transmissionControlMessageDirection, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCVideoTransmissionControlMessage(value, elGetter);
}


/* eslint-enable */
