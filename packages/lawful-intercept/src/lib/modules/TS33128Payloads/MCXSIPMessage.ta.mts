/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCServiceIdentitiesOrGroupID, _decode_MCServiceIdentitiesOrGroupID, _encode_MCServiceIdentitiesOrGroupID } from "../TS33128Payloads/MCServiceIdentitiesOrGroupID.ta.mjs";
// export { MCServiceIdentitiesOrGroupID, _decode_MCServiceIdentitiesOrGroupID, _encode_MCServiceIdentitiesOrGroupID } from "../TS33128Payloads/MCServiceIdentitiesOrGroupID.ta.mjs";
import { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../TS33128Payloads/SIPMessage.ta.mjs";
// export { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../TS33128Payloads/SIPMessage.ta.mjs";
import { Direction, _decode_Direction, _encode_Direction, _enum_for_Direction } from "../TS33128Payloads/Direction.ta.mjs";
// export { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";


/**
 * @summary MCXSIPMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCXSIPMessage ::= SEQUENCE
 * {
 *     mCServiceIdentitiesOrGroupID  [1] MCServiceIdentitiesOrGroupID,
 *     sIPMessage                    [2] SIPMessage,
 *     sessionDirection              [3] Direction
 * }
 * ```
 * 
 * @class
 */
export
class MCXSIPMessage {
    /**
     * @summary `mCServiceIdentitiesOrGroupID`.
     * @public
     * @readonly
     */
    readonly mCServiceIdentitiesOrGroupID: MCServiceIdentitiesOrGroupID;
    /**
     * @summary `sIPMessage`.
     * @public
     * @readonly
     */
    readonly sIPMessage: SIPMessage;
    /**
     * @summary `sessionDirection`.
     * @public
     * @readonly
     */
    readonly sessionDirection: Direction;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mCServiceIdentitiesOrGroupID: MCServiceIdentitiesOrGroupID,
        sIPMessage: SIPMessage,
        sessionDirection: Direction,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mCServiceIdentitiesOrGroupID = mCServiceIdentitiesOrGroupID;
        this.sIPMessage = sIPMessage;
        this.sessionDirection = sessionDirection;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCXSIPMessage
     * @description
     * 
     * This takes an `object` and converts it to a `MCXSIPMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCXSIPMessage`.
     * @returns {MCXSIPMessage}
     */
    public static _from_object (_o: { [_K in keyof (MCXSIPMessage)]: (MCXSIPMessage)[_K] }): MCXSIPMessage {
        return new MCXSIPMessage(_o.mCServiceIdentitiesOrGroupID, _o.sIPMessage, _o.sessionDirection, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `sessionDirection`
         * @public
         * @static
         */

    public static _enum_for_sessionDirection = _enum_for_Direction;
}

/**
 * @summary The Leading Root Component Types of MCXSIPMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCXSIPMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("mCServiceIdentitiesOrGroupID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sIPMessage", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sessionDirection", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of MCXSIPMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCXSIPMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCXSIPMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCXSIPMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCXSIPMessage: $.ASN1Decoder<MCXSIPMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCXSIPMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCXSIPMessage (el: _Element): MCXSIPMessage {
    if (!_cached_decoder_for_MCXSIPMessage) { _cached_decoder_for_MCXSIPMessage = function (el: _Element): MCXSIPMessage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("MCXSIPMessage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mCServiceIdentitiesOrGroupID";
    sequence[1].name = "sIPMessage";
    sequence[2].name = "sessionDirection";
    let mCServiceIdentitiesOrGroupID!: MCServiceIdentitiesOrGroupID;
    let sIPMessage!: SIPMessage;
    let sessionDirection!: Direction;
    mCServiceIdentitiesOrGroupID = $._decode_explicit<MCServiceIdentitiesOrGroupID>(() => _decode_MCServiceIdentitiesOrGroupID)(sequence[0]);
    sIPMessage = $._decode_implicit<SIPMessage>(() => _decode_SIPMessage)(sequence[1]);
    sessionDirection = $._decode_implicit<Direction>(() => _decode_Direction)(sequence[2]);
    return new MCXSIPMessage(
        mCServiceIdentitiesOrGroupID,
        sIPMessage,
        sessionDirection,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_MCXSIPMessage(el);
}

let _cached_encoder_for_MCXSIPMessage: $.ASN1Encoder<MCXSIPMessage> | null = null;

/**
 * @summary Encodes a(n) MCXSIPMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCXSIPMessage, encoded as an ASN.1 Element.
 */
export
function _encode_MCXSIPMessage (value: MCXSIPMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCXSIPMessage) { _cached_encoder_for_MCXSIPMessage = function (value: MCXSIPMessage, _elGetter: $.ASN1Encoder<MCXSIPMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_MCServiceIdentitiesOrGroupID, $.BER)(value.mCServiceIdentitiesOrGroupID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SIPMessage, $.BER)(value.sIPMessage, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Direction, $.BER)(value.sessionDirection, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCXSIPMessage(value, elGetter);
}


/* eslint-enable */
