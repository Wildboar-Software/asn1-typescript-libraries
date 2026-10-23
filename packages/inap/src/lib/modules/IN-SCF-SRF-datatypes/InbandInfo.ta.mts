/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MessageID, _decode_MessageID, _encode_MessageID } from "../IN-SCF-SRF-datatypes/MessageID.ta.mjs";
// export { MessageID, _decode_MessageID, _encode_MessageID } from "../IN-SCF-SRF-datatypes/MessageID.ta.mjs";
import { Language, _decode_Language, _encode_Language } from "../IN-SCF-SRF-datatypes/Language.ta.mjs";
// export { Language, _decode_Language, _encode_Language } from "../IN-SCF-SRF-datatypes/Language.ta.mjs";


/**
 * @summary InbandInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InbandInfo ::= SEQUENCE {
 *   messageID            [0]  MessageID,
 *   numberOfRepetitions  [1]  INTEGER(1..127) OPTIONAL,
 *   duration             [2]  INTEGER(0..32767) OPTIONAL,
 *   interval             [3]  INTEGER(0..32767) OPTIONAL,
 *   preferredLanguage    [4]  Language OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class InbandInfo {
    /**
     * @summary `messageID`.
     * @public
     * @readonly
     */
    readonly messageID: MessageID;
    /**
     * @summary `numberOfRepetitions`.
     * @public
     * @readonly
     */
    readonly numberOfRepetitions: OPTIONAL<INTEGER>;
    /**
     * @summary `duration`.
     * @public
     * @readonly
     */
    readonly duration: OPTIONAL<INTEGER>;
    /**
     * @summary `interval`.
     * @public
     * @readonly
     */
    readonly interval: OPTIONAL<INTEGER>;
    /**
     * @summary `preferredLanguage`.
     * @public
     * @readonly
     */
    readonly preferredLanguage: OPTIONAL<Language>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        messageID: MessageID,
        numberOfRepetitions?: OPTIONAL<INTEGER>,
        duration?: OPTIONAL<INTEGER>,
        interval?: OPTIONAL<INTEGER>,
        preferredLanguage?: OPTIONAL<Language>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.messageID = messageID;
        this.numberOfRepetitions = numberOfRepetitions;
        this.duration = duration;
        this.interval = interval;
        this.preferredLanguage = preferredLanguage;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a InbandInfo
     * @description
     * 
     * This takes an `object` and converts it to a `InbandInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InbandInfo`.
     * @returns {InbandInfo}
     */
    public static _from_object (_o: { [_K in keyof (InbandInfo)]: (InbandInfo)[_K] }): InbandInfo {
        return new InbandInfo(_o.messageID, _o.numberOfRepetitions, _o.duration, _o.interval, _o.preferredLanguage, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of InbandInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InbandInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numberOfRepetitions", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("duration", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("interval", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("preferredLanguage", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of InbandInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InbandInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InbandInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InbandInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InbandInfo: $.ASN1Decoder<InbandInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InbandInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InbandInfo (el: _Element): InbandInfo {
    if (!_cached_decoder_for_InbandInfo) { _cached_decoder_for_InbandInfo = function (el: _Element): InbandInfo {
    let messageID!: MessageID;
    let numberOfRepetitions: OPTIONAL<INTEGER>;
    let duration: OPTIONAL<INTEGER>;
    let interval: OPTIONAL<INTEGER>;
    let preferredLanguage: OPTIONAL<Language>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "messageID": (_el: _Element): void => { messageID = $._decode_explicit<MessageID>(() => _decode_MessageID)(_el); },
        "numberOfRepetitions": (_el: _Element): void => { numberOfRepetitions = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "interval": (_el: _Element): void => { interval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "preferredLanguage": (_el: _Element): void => { preferredLanguage = $._decode_implicit<Language>(() => _decode_Language)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InbandInfo,
        _extension_additions_list_spec_for_InbandInfo,
        _root_component_type_list_2_spec_for_InbandInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InbandInfo(
        messageID,
        numberOfRepetitions,
        duration,
        interval,
        preferredLanguage,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InbandInfo(el);
}

let _cached_encoder_for_InbandInfo: $.ASN1Encoder<InbandInfo> | null = null;

/**
 * @summary Encodes a(n) InbandInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InbandInfo, encoded as an ASN.1 Element.
 */
export
function _encode_InbandInfo (value: InbandInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InbandInfo) { _cached_encoder_for_InbandInfo = function (value: InbandInfo, elGetter: $.ASN1Encoder<InbandInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_MessageID, $.BER)(value.messageID, $.BER);
    if (value.numberOfRepetitions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.numberOfRepetitions, $.BER);
    }
    if (value.duration !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.duration, $.BER);
    }
    if (value.interval !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.interval, $.BER);
    }
    if (value.preferredLanguage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Language, $.BER)(value.preferredLanguage, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_InbandInfo(value, elGetter);
}


/* eslint-enable */
