/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
// export { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary StartOfInterceptionWithEstablishedIMSDataChannel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartOfInterceptionWithEstablishedIMSDataChannel ::= SEQUENCE
 * {
 *     targetIdentity            [1] IMPU,
 *     callingIdentity           [2] IMPU OPTIONAL,
 *     calledIdentities          [3] SEQUENCE OF IMPU OPTIONAL,
 *     sessionEventNotification  [4] SBIType OPTIONAL,
 *     mediaInstructions         [5] SBIType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class StartOfInterceptionWithEstablishedIMSDataChannel {
    /**
     * @summary `targetIdentity`.
     * @public
     * @readonly
     */
    readonly targetIdentity: IMPU;
    /**
     * @summary `callingIdentity`.
     * @public
     * @readonly
     */
    readonly callingIdentity: OPTIONAL<IMPU>;
    /**
     * @summary `calledIdentities`.
     * @public
     * @readonly
     */
    readonly calledIdentities: OPTIONAL<IMPU[]>;
    /**
     * @summary `sessionEventNotification`.
     * @public
     * @readonly
     */
    readonly sessionEventNotification: OPTIONAL<SBIType>;
    /**
     * @summary `mediaInstructions`.
     * @public
     * @readonly
     */
    readonly mediaInstructions: OPTIONAL<SBIType>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        targetIdentity: IMPU,
        callingIdentity: OPTIONAL<IMPU>,
        calledIdentities: OPTIONAL<IMPU[]>,
        sessionEventNotification: OPTIONAL<SBIType>,
        mediaInstructions: OPTIONAL<SBIType>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.targetIdentity = targetIdentity;
        this.callingIdentity = callingIdentity;
        this.calledIdentities = calledIdentities;
        this.sessionEventNotification = sessionEventNotification;
        this.mediaInstructions = mediaInstructions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a StartOfInterceptionWithEstablishedIMSDataChannel
     * @description
     * 
     * This takes an `object` and converts it to a `StartOfInterceptionWithEstablishedIMSDataChannel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StartOfInterceptionWithEstablishedIMSDataChannel`.
     * @returns {StartOfInterceptionWithEstablishedIMSDataChannel}
     */
    public static _from_object (_o: { [_K in keyof (StartOfInterceptionWithEstablishedIMSDataChannel)]: (StartOfInterceptionWithEstablishedIMSDataChannel)[_K] }): StartOfInterceptionWithEstablishedIMSDataChannel {
        return new StartOfInterceptionWithEstablishedIMSDataChannel(_o.targetIdentity, _o.callingIdentity, _o.calledIdentities, _o.sessionEventNotification, _o.mediaInstructions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of StartOfInterceptionWithEstablishedIMSDataChannel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StartOfInterceptionWithEstablishedIMSDataChannel: $.ComponentSpec[] = [
    new $.ComponentSpec("targetIdentity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callingIdentity", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("calledIdentities", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sessionEventNotification", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mediaInstructions", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of StartOfInterceptionWithEstablishedIMSDataChannel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StartOfInterceptionWithEstablishedIMSDataChannel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StartOfInterceptionWithEstablishedIMSDataChannel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StartOfInterceptionWithEstablishedIMSDataChannel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StartOfInterceptionWithEstablishedIMSDataChannel: $.ASN1Decoder<StartOfInterceptionWithEstablishedIMSDataChannel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartOfInterceptionWithEstablishedIMSDataChannel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartOfInterceptionWithEstablishedIMSDataChannel (el: _Element): StartOfInterceptionWithEstablishedIMSDataChannel {
    if (!_cached_decoder_for_StartOfInterceptionWithEstablishedIMSDataChannel) { _cached_decoder_for_StartOfInterceptionWithEstablishedIMSDataChannel = function (el: _Element): StartOfInterceptionWithEstablishedIMSDataChannel {
    let targetIdentity!: IMPU;
    let callingIdentity: OPTIONAL<IMPU>;
    let calledIdentities: OPTIONAL<IMPU[]>;
    let sessionEventNotification: OPTIONAL<SBIType>;
    let mediaInstructions: OPTIONAL<SBIType>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "targetIdentity": (_el: _Element): void => { targetIdentity = $._decode_explicit<IMPU>(() => _decode_IMPU)(_el); },
        "callingIdentity": (_el: _Element): void => { callingIdentity = $._decode_explicit<IMPU>(() => _decode_IMPU)(_el); },
        "calledIdentities": (_el: _Element): void => { calledIdentities = $._decode_implicit<IMPU[]>(() => $._decodeSequenceOf<IMPU>(() => _decode_IMPU))(_el); },
        "sessionEventNotification": (_el: _Element): void => { sessionEventNotification = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "mediaInstructions": (_el: _Element): void => { mediaInstructions = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StartOfInterceptionWithEstablishedIMSDataChannel,
        _extension_additions_list_spec_for_StartOfInterceptionWithEstablishedIMSDataChannel,
        _root_component_type_list_2_spec_for_StartOfInterceptionWithEstablishedIMSDataChannel,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new StartOfInterceptionWithEstablishedIMSDataChannel(
        targetIdentity,
        callingIdentity,
        calledIdentities,
        sessionEventNotification,
        mediaInstructions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_StartOfInterceptionWithEstablishedIMSDataChannel(el);
}

let _cached_encoder_for_StartOfInterceptionWithEstablishedIMSDataChannel: $.ASN1Encoder<StartOfInterceptionWithEstablishedIMSDataChannel> | null = null;

/**
 * @summary Encodes a(n) StartOfInterceptionWithEstablishedIMSDataChannel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartOfInterceptionWithEstablishedIMSDataChannel, encoded as an ASN.1 Element.
 */
export
function _encode_StartOfInterceptionWithEstablishedIMSDataChannel (value: StartOfInterceptionWithEstablishedIMSDataChannel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartOfInterceptionWithEstablishedIMSDataChannel) { _cached_encoder_for_StartOfInterceptionWithEstablishedIMSDataChannel = function (value: StartOfInterceptionWithEstablishedIMSDataChannel, elGetter: $.ASN1Encoder<StartOfInterceptionWithEstablishedIMSDataChannel>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IMPU, $.BER)(value.targetIdentity, $.BER);
    if (value.callingIdentity !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_IMPU, $.BER)(value.callingIdentity, $.BER);
    }
    if (value.calledIdentities !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<IMPU>(() => _encode_IMPU, $.BER), $.BER)(value.calledIdentities, $.BER);
    }
    if (value.sessionEventNotification !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_SBIType, $.BER)(value.sessionEventNotification, $.BER);
    }
    if (value.mediaInstructions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SBIType, $.BER)(value.mediaInstructions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_StartOfInterceptionWithEstablishedIMSDataChannel(value, elGetter);
}


/* eslint-enable */
