/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCServiceIdentity, _decode_MCServiceIdentity, _encode_MCServiceIdentity } from "../TS33128Payloads/MCServiceIdentity.ta.mjs";
// export { MCServiceIdentity, _decode_MCServiceIdentity, _encode_MCServiceIdentity } from "../TS33128Payloads/MCServiceIdentity.ta.mjs";
import { MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
// export { MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
import { CMMessage, _decode_CMMessage, _encode_CMMessage } from "../TS33128Payloads/CMMessage.ta.mjs";
// export { CMMessage, _decode_CMMessage, _encode_CMMessage } from "../TS33128Payloads/CMMessage.ta.mjs";


/**
 * @summary MCXCMMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCXCMMessage ::= SEQUENCE
 * {
 *     mCServiceIdentities         [1] SEQUENCE SIZE (1..MAX) OF MCServiceIdentity,
 *     mcServiceClient             [2] MCServiceID OPTIONAL,
 *     cMMessage                   [3] CMMessage
 * }
 * ```
 * 
 * @class
 */
export
class MCXCMMessage {
    /**
     * @summary `mCServiceIdentities`.
     * @public
     * @readonly
     */
    readonly mCServiceIdentities: MCServiceIdentity[];
    /**
     * @summary `mcServiceClient`.
     * @public
     * @readonly
     */
    readonly mcServiceClient: OPTIONAL<MCServiceID>;
    /**
     * @summary `cMMessage`.
     * @public
     * @readonly
     */
    readonly cMMessage: CMMessage;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mCServiceIdentities: MCServiceIdentity[],
        mcServiceClient: OPTIONAL<MCServiceID>,
        cMMessage: CMMessage,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mCServiceIdentities = mCServiceIdentities;
        this.mcServiceClient = mcServiceClient;
        this.cMMessage = cMMessage;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCXCMMessage
     * @description
     * 
     * This takes an `object` and converts it to a `MCXCMMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCXCMMessage`.
     * @returns {MCXCMMessage}
     */
    public static _from_object (_o: { [_K in keyof (MCXCMMessage)]: (MCXCMMessage)[_K] }): MCXCMMessage {
        return new MCXCMMessage(_o.mCServiceIdentities, _o.mcServiceClient, _o.cMMessage, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MCXCMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCXCMMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("mCServiceIdentities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mcServiceClient", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cMMessage", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of MCXCMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCXCMMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCXCMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCXCMMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCXCMMessage: $.ASN1Decoder<MCXCMMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCXCMMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCXCMMessage (el: _Element): MCXCMMessage {
    if (!_cached_decoder_for_MCXCMMessage) { _cached_decoder_for_MCXCMMessage = function (el: _Element): MCXCMMessage {
    let mCServiceIdentities!: MCServiceIdentity[];
    let mcServiceClient: OPTIONAL<MCServiceID>;
    let cMMessage!: CMMessage;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "mCServiceIdentities": (_el: _Element): void => { mCServiceIdentities = $._decode_implicit<MCServiceIdentity[]>(() => $._decodeSequenceOf<MCServiceIdentity>(() => _decode_MCServiceIdentity))(_el); },
        "mcServiceClient": (_el: _Element): void => { mcServiceClient = $._decode_implicit<MCServiceID>(() => _decode_MCServiceID)(_el); },
        "cMMessage": (_el: _Element): void => { cMMessage = $._decode_implicit<CMMessage>(() => _decode_CMMessage)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCXCMMessage,
        _extension_additions_list_spec_for_MCXCMMessage,
        _root_component_type_list_2_spec_for_MCXCMMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MCXCMMessage(
        mCServiceIdentities,
        mcServiceClient,
        cMMessage,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MCXCMMessage(el);
}

let _cached_encoder_for_MCXCMMessage: $.ASN1Encoder<MCXCMMessage> | null = null;

/**
 * @summary Encodes a(n) MCXCMMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCXCMMessage, encoded as an ASN.1 Element.
 */
export
function _encode_MCXCMMessage (value: MCXCMMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCXCMMessage) { _cached_encoder_for_MCXCMMessage = function (value: MCXCMMessage, elGetter: $.ASN1Encoder<MCXCMMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<MCServiceIdentity>(() => _encode_MCServiceIdentity, $.BER), $.BER)(value.mCServiceIdentities, $.BER);
    if (value.mcServiceClient !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_MCServiceID, $.BER)(value.mcServiceClient, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_CMMessage, $.BER)(value.cMMessage, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCXCMMessage(value, elGetter);
}


/* eslint-enable */
