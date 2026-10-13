/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCServiceIdentitiesOrGroupID, _decode_MCServiceIdentitiesOrGroupID, _encode_MCServiceIdentitiesOrGroupID } from "../TS33128Payloads/MCServiceIdentitiesOrGroupID.ta.mjs";
// export { MCServiceIdentitiesOrGroupID, _decode_MCServiceIdentitiesOrGroupID, _encode_MCServiceIdentitiesOrGroupID } from "../TS33128Payloads/MCServiceIdentitiesOrGroupID.ta.mjs";
import { MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
// export { MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
import { GMMessage, _decode_GMMessage, _encode_GMMessage } from "../TS33128Payloads/GMMessage.ta.mjs";
// export { GMMessage, _decode_GMMessage, _encode_GMMessage } from "../TS33128Payloads/GMMessage.ta.mjs";


/**
 * @summary MCXGMMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCXGMMessage ::= SEQUENCE
 * {
 *     mCServiceIdentitiesOrGroupID  [1] MCServiceIdentitiesOrGroupID,
 *     mCServiceClient               [2] MCServiceID OPTIONAL,
 *     gMMessage                     [3] GMMessage
 * }
 * ```
 * 
 * @class
 */
export
class MCXGMMessage {
    /**
     * @summary `mCServiceIdentitiesOrGroupID`.
     * @public
     * @readonly
     */
    readonly mCServiceIdentitiesOrGroupID: MCServiceIdentitiesOrGroupID;
    /**
     * @summary `mCServiceClient`.
     * @public
     * @readonly
     */
    readonly mCServiceClient: OPTIONAL<MCServiceID>;
    /**
     * @summary `gMMessage`.
     * @public
     * @readonly
     */
    readonly gMMessage: GMMessage;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mCServiceIdentitiesOrGroupID: MCServiceIdentitiesOrGroupID,
        mCServiceClient: OPTIONAL<MCServiceID>,
        gMMessage: GMMessage,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mCServiceIdentitiesOrGroupID = mCServiceIdentitiesOrGroupID;
        this.mCServiceClient = mCServiceClient;
        this.gMMessage = gMMessage;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCXGMMessage
     * @description
     * 
     * This takes an `object` and converts it to a `MCXGMMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCXGMMessage`.
     * @returns {MCXGMMessage}
     */
    public static _from_object (_o: { [_K in keyof (MCXGMMessage)]: (MCXGMMessage)[_K] }): MCXGMMessage {
        return new MCXGMMessage(_o.mCServiceIdentitiesOrGroupID, _o.mCServiceClient, _o.gMMessage, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MCXGMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCXGMMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("mCServiceIdentitiesOrGroupID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mCServiceClient", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("gMMessage", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of MCXGMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCXGMMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCXGMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCXGMMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCXGMMessage: $.ASN1Decoder<MCXGMMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCXGMMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCXGMMessage (el: _Element): MCXGMMessage {
    if (!_cached_decoder_for_MCXGMMessage) { _cached_decoder_for_MCXGMMessage = function (el: _Element): MCXGMMessage {
    let mCServiceIdentitiesOrGroupID!: MCServiceIdentitiesOrGroupID;
    let mCServiceClient: OPTIONAL<MCServiceID>;
    let gMMessage!: GMMessage;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "mCServiceIdentitiesOrGroupID": (_el: _Element): void => { mCServiceIdentitiesOrGroupID = $._decode_explicit<MCServiceIdentitiesOrGroupID>(() => _decode_MCServiceIdentitiesOrGroupID)(_el); },
        "mCServiceClient": (_el: _Element): void => { mCServiceClient = $._decode_implicit<MCServiceID>(() => _decode_MCServiceID)(_el); },
        "gMMessage": (_el: _Element): void => { gMMessage = $._decode_implicit<GMMessage>(() => _decode_GMMessage)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCXGMMessage,
        _extension_additions_list_spec_for_MCXGMMessage,
        _root_component_type_list_2_spec_for_MCXGMMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MCXGMMessage(
        mCServiceIdentitiesOrGroupID,
        mCServiceClient,
        gMMessage,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MCXGMMessage(el);
}

let _cached_encoder_for_MCXGMMessage: $.ASN1Encoder<MCXGMMessage> | null = null;

/**
 * @summary Encodes a(n) MCXGMMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCXGMMessage, encoded as an ASN.1 Element.
 */
export
function _encode_MCXGMMessage (value: MCXGMMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCXGMMessage) { _cached_encoder_for_MCXGMMessage = function (value: MCXGMMessage, elGetter: $.ASN1Encoder<MCXGMMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_MCServiceIdentitiesOrGroupID, $.BER)(value.mCServiceIdentitiesOrGroupID, $.BER);
    if (value.mCServiceClient !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_MCServiceID, $.BER)(value.mCServiceClient, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_GMMessage, $.BER)(value.gMMessage, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCXGMMessage(value, elGetter);
}


/* eslint-enable */
