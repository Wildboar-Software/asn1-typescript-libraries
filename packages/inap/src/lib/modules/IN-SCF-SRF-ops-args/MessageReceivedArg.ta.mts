/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReceivedStatus, _decode_ReceivedStatus, _encode_ReceivedStatus, _enum_for_ReceivedStatus } from "../IN-SCF-SRF-datatypes/ReceivedStatus.ta.mjs";
// export { ReceivedStatus, _enum_for_ReceivedStatus, ReceivedStatus_messageComplete /* IMPORTED_LONG_ENUMERATION_ITEM */, messageComplete /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReceivedStatus_messageInterrupted /* IMPORTED_LONG_ENUMERATION_ITEM */, messageInterrupted /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReceivedStatus_messageTimeOut /* IMPORTED_LONG_ENUMERATION_ITEM */, messageTimeOut /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReceivedStatus, _encode_ReceivedStatus } from "../IN-SCF-SRF-datatypes/ReceivedStatus.ta.mjs";
import { type RecordedMessageID, _decode_RecordedMessageID, _encode_RecordedMessageID } from "../IN-SCF-SRF-datatypes/RecordedMessageID.ta.mjs";
// export { RecordedMessageID, _decode_RecordedMessageID, _encode_RecordedMessageID } from "../IN-SCF-SRF-datatypes/RecordedMessageID.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary MessageReceivedArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageReceivedArg ::= SEQUENCE {
 *   receivedStatus        [0]  ReceivedStatus,
 *   recordedMessageID     [1]  RecordedMessageID OPTIONAL,
 *   recordedMessageUnits
 *     [2]  INTEGER OPTIONAL,
 *   extensions            [3]  Extensions OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class MessageReceivedArg {
    /**
     * @summary `receivedStatus`.
     * @public
     * @readonly
     */
    readonly receivedStatus: ReceivedStatus;
    /**
     * @summary `recordedMessageID`.
     * @public
     * @readonly
     */
    readonly recordedMessageID: OPTIONAL<RecordedMessageID>;
    /**
     * @summary `recordedMessageUnits`.
     * @public
     * @readonly
     */
    readonly recordedMessageUnits: OPTIONAL<INTEGER>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        receivedStatus: ReceivedStatus,
        recordedMessageID?: OPTIONAL<RecordedMessageID>,
        recordedMessageUnits?: OPTIONAL<INTEGER>,
        extensions?: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.receivedStatus = receivedStatus;
        this.recordedMessageID = recordedMessageID;
        this.recordedMessageUnits = recordedMessageUnits;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MessageReceivedArg
     * @description
     * 
     * This takes an `object` and converts it to a `MessageReceivedArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageReceivedArg`.
     * @returns {MessageReceivedArg}
     */
    public static _from_object (_o: { [_K in keyof (MessageReceivedArg)]: (MessageReceivedArg)[_K] }): MessageReceivedArg {
        return new MessageReceivedArg(_o.receivedStatus, _o.recordedMessageID, _o.recordedMessageUnits, _o.extensions, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `receivedStatus`
         * @public
         * @static
         */

    public static _enum_for_receivedStatus = _enum_for_ReceivedStatus;
}

/**
 * @summary The Leading Root Component Types of MessageReceivedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MessageReceivedArg: $.ComponentSpec[] = [
    new $.ComponentSpec("receivedStatus", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recordedMessageID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("recordedMessageUnits", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of MessageReceivedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MessageReceivedArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MessageReceivedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MessageReceivedArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MessageReceivedArg: $.ASN1Decoder<MessageReceivedArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageReceivedArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessageReceivedArg (el: _Element): MessageReceivedArg {
    if (!_cached_decoder_for_MessageReceivedArg) { _cached_decoder_for_MessageReceivedArg = function (el: _Element): MessageReceivedArg {
    let receivedStatus!: ReceivedStatus;
    let recordedMessageID: OPTIONAL<RecordedMessageID>;
    let recordedMessageUnits: OPTIONAL<INTEGER>;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "receivedStatus": (_el: _Element): void => { receivedStatus = $._decode_implicit<ReceivedStatus>(() => _decode_ReceivedStatus)(_el); },
        "recordedMessageID": (_el: _Element): void => { recordedMessageID = $._decode_implicit<RecordedMessageID>(() => _decode_RecordedMessageID)(_el); },
        "recordedMessageUnits": (_el: _Element): void => { recordedMessageUnits = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MessageReceivedArg,
        _extension_additions_list_spec_for_MessageReceivedArg,
        _root_component_type_list_2_spec_for_MessageReceivedArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MessageReceivedArg(
        receivedStatus,
        recordedMessageID,
        recordedMessageUnits,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MessageReceivedArg(el);
}

let _cached_encoder_for_MessageReceivedArg: $.ASN1Encoder<MessageReceivedArg> | null = null;

/**
 * @summary Encodes a(n) MessageReceivedArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageReceivedArg, encoded as an ASN.1 Element.
 */
export
function _encode_MessageReceivedArg (value: MessageReceivedArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessageReceivedArg) { _cached_encoder_for_MessageReceivedArg = function (value: MessageReceivedArg, elGetter: $.ASN1Encoder<MessageReceivedArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ReceivedStatus, $.BER)(value.receivedStatus, $.BER);
    if (value.recordedMessageID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_RecordedMessageID, $.BER)(value.recordedMessageID, $.BER);
    }
    if (value.recordedMessageUnits !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.recordedMessageUnits, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MessageReceivedArg(value, elGetter);
}


/* eslint-enable */
