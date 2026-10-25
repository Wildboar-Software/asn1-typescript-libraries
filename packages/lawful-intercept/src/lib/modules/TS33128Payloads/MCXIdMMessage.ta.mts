/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MCID, _decode_MCID, _encode_MCID } from "../TS33128Payloads/MCID.ta.mjs";
// export { MCID, _decode_MCID, _encode_MCID } from "../TS33128Payloads/MCID.ta.mjs";
import { type MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
// export { MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
import { IdMMessage, _decode_IdMMessage, _encode_IdMMessage } from "../TS33128Payloads/IdMMessage.ta.mjs";
// export { IdMMessage, _decode_IdMMessage, _encode_IdMMessage } from "../TS33128Payloads/IdMMessage.ta.mjs";


/**
 * @summary MCXIdMMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCXIdMMessage ::= SEQUENCE
 * {
 *     mCID          [1] MCID,
 *     mCServiceID   [2] MCServiceID,
 *     idMMessage    [3] IdMMessage
 * }
 * ```
 * 
 * @class
 */
export
class MCXIdMMessage {
    /**
     * @summary `mCID`.
     * @description
     *
     * MC ID of the target user.
     *
     * 3GPP TS 33.128, clause 7.20.2.4.2.
     *
     * @public
     * @readonly
     */
    readonly mCID: MCID;
    /**
     * @summary `mCServiceID`.
     * @description
     *
     * MC service ID of the target user.
     *
     * 3GPP TS 33.128, clause 7.20.2.4.2.
     *
     * @public
     * @readonly
     */
    readonly mCServiceID: MCServiceID;
    /**
     * @summary `idMMessage`.
     * @description
     *
     * Represents the content of the HTTP GET request representing an
     * authentication request or HTTP POST request representing an access token
     * request (see TS 33.180 [154] clauses B.4 and B.5) sent by the target to
     * the Identity Management Server and content of the associated HTTP
     * response returned by the Identity Management Server to the target (see
     * table 7.20.2.4.2-2).
     *
     * 3GPP TS 33.128, clause 7.20.2.4.2.
     *
     * @public
     * @readonly
     */
    readonly idMMessage: IdMMessage;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mCID: MCID,
        mCServiceID: MCServiceID,
        idMMessage: IdMMessage,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mCID = mCID;
        this.mCServiceID = mCServiceID;
        this.idMMessage = idMMessage;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCXIdMMessage
     * @description
     * 
     * This takes an `object` and converts it to a `MCXIdMMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCXIdMMessage`.
     * @returns {MCXIdMMessage}
     */
    public static _from_object (_o: { [_K in keyof (MCXIdMMessage)]: (MCXIdMMessage)[_K] }): MCXIdMMessage {
        return new MCXIdMMessage(_o.mCID, _o.mCServiceID, _o.idMMessage, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MCXIdMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCXIdMMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("mCID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mCServiceID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("idMMessage", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of MCXIdMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCXIdMMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCXIdMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCXIdMMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCXIdMMessage: $.ASN1Decoder<MCXIdMMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCXIdMMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCXIdMMessage (el: _Element): MCXIdMMessage {
    if (!_cached_decoder_for_MCXIdMMessage) { _cached_decoder_for_MCXIdMMessage = function (el: _Element): MCXIdMMessage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("MCXIdMMessage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mCID";
    sequence[1].name = "mCServiceID";
    sequence[2].name = "idMMessage";
    let mCID!: MCID;
    let mCServiceID!: MCServiceID;
    let idMMessage!: IdMMessage;
    mCID = $._decode_implicit<MCID>(() => _decode_MCID)(sequence[0]);
    mCServiceID = $._decode_implicit<MCServiceID>(() => _decode_MCServiceID)(sequence[1]);
    idMMessage = $._decode_implicit<IdMMessage>(() => _decode_IdMMessage)(sequence[2]);
    return new MCXIdMMessage(
        mCID,
        mCServiceID,
        idMMessage,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_MCXIdMMessage(el);
}

let _cached_encoder_for_MCXIdMMessage: $.ASN1Encoder<MCXIdMMessage> | null = null;

/**
 * @summary Encodes a(n) MCXIdMMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCXIdMMessage, encoded as an ASN.1 Element.
 */
export
function _encode_MCXIdMMessage (value: MCXIdMMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCXIdMMessage) { _cached_encoder_for_MCXIdMMessage = function (value: MCXIdMMessage, elGetter: $.ASN1Encoder<MCXIdMMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MCID, $.BER)(value.mCID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MCServiceID, $.BER)(value.mCServiceID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_IdMMessage, $.BER)(value.idMMessage, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCXIdMMessage(value, elGetter);
}


/* eslint-enable */
