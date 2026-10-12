/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
// export { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary IMSDataChannelModification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSDataChannelModification ::= SEQUENCE
 * {
 *     targetIdentity            [1] IMPU,
 *     callingIdentity           [2] IMPU OPTIONAL,
 *     calledIdentity            [3] SEQUENCE (SIZE (1..MAX)) OF IMPU OPTIONAL,
 *     sessionEventNotification  [4] SBIType OPTIONAL,
 *     mediaInstructions         [5] SBIType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IMSDataChannelModification {
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
     * @summary `calledIdentity`.
     * @public
     * @readonly
     */
    readonly calledIdentity: OPTIONAL<IMPU[]>;
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
        calledIdentity: OPTIONAL<IMPU[]>,
        sessionEventNotification: OPTIONAL<SBIType>,
        mediaInstructions: OPTIONAL<SBIType>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.targetIdentity = targetIdentity;
        this.callingIdentity = callingIdentity;
        this.calledIdentity = calledIdentity;
        this.sessionEventNotification = sessionEventNotification;
        this.mediaInstructions = mediaInstructions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IMSDataChannelModification
     * @description
     * 
     * This takes an `object` and converts it to a `IMSDataChannelModification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMSDataChannelModification`.
     * @returns {IMSDataChannelModification}
     */
    public static _from_object (_o: { [_K in keyof (IMSDataChannelModification)]: (IMSDataChannelModification)[_K] }): IMSDataChannelModification {
        return new IMSDataChannelModification(_o.targetIdentity, _o.callingIdentity, _o.calledIdentity, _o.sessionEventNotification, _o.mediaInstructions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IMSDataChannelModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMSDataChannelModification: $.ComponentSpec[] = [
    new $.ComponentSpec("targetIdentity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callingIdentity", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("calledIdentity", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sessionEventNotification", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mediaInstructions", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of IMSDataChannelModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMSDataChannelModification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMSDataChannelModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMSDataChannelModification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMSDataChannelModification: $.ASN1Decoder<IMSDataChannelModification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSDataChannelModification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSDataChannelModification (el: _Element): IMSDataChannelModification {
    if (!_cached_decoder_for_IMSDataChannelModification) { _cached_decoder_for_IMSDataChannelModification = function (el: _Element): IMSDataChannelModification {
    let targetIdentity!: IMPU;
    let callingIdentity: OPTIONAL<IMPU>;
    let calledIdentity: OPTIONAL<IMPU[]>;
    let sessionEventNotification: OPTIONAL<SBIType>;
    let mediaInstructions: OPTIONAL<SBIType>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "targetIdentity": (_el: _Element): void => { targetIdentity = $._decode_explicit<IMPU>(() => _decode_IMPU)(_el); },
        "callingIdentity": (_el: _Element): void => { callingIdentity = $._decode_explicit<IMPU>(() => _decode_IMPU)(_el); },
        "calledIdentity": (_el: _Element): void => {
            calledIdentity = $._decode_implicit<IMPU[]>(() => $._decodeSequenceOf<IMPU>(() => _decode_IMPU))(_el);
            if (calledIdentity.length < 1) {
                throw new ASN1SizeError("IMSDataChannelModification.calledIdentity violates SIZE constraint");
            }
        },
        "sessionEventNotification": (_el: _Element): void => { sessionEventNotification = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "mediaInstructions": (_el: _Element): void => { mediaInstructions = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMSDataChannelModification,
        _extension_additions_list_spec_for_IMSDataChannelModification,
        _root_component_type_list_2_spec_for_IMSDataChannelModification,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IMSDataChannelModification(
        targetIdentity,
        callingIdentity,
        calledIdentity,
        sessionEventNotification,
        mediaInstructions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IMSDataChannelModification(el);
}

let _cached_encoder_for_IMSDataChannelModification: $.ASN1Encoder<IMSDataChannelModification> | null = null;

/**
 * @summary Encodes a(n) IMSDataChannelModification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSDataChannelModification, encoded as an ASN.1 Element.
 */
export
function _encode_IMSDataChannelModification (value: IMSDataChannelModification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSDataChannelModification) { _cached_encoder_for_IMSDataChannelModification = function (value: IMSDataChannelModification, elGetter: $.ASN1Encoder<IMSDataChannelModification>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IMPU, $.BER)(value.targetIdentity, $.BER);
    if (value.callingIdentity !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_IMPU, $.BER)(value.callingIdentity, $.BER);
    }
    if (value.calledIdentity !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<IMPU>(() => _encode_IMPU, $.BER), $.BER)(value.calledIdentity, $.BER);
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
    return _cached_encoder_for_IMSDataChannelModification(value, elGetter);
}


/* eslint-enable */
