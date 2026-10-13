/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TerminalDisplayInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminalDisplayInfo ::= SEQUENCE {
 *     generalDisplay          [0] VisibleString (SIZE (1..80, ...)) OPTIONAL,
 *     -- Can be used to report display-related
 *     -- network signals not addressed by
 *     -- other parameters.
 *     calledNumber            [1] VisibleString (SIZE (1..40, ...)) OPTIONAL,
 *     callingNumber           [2] VisibleString (SIZE (1..40, ...)) OPTIONAL,
 *     callingName             [3] VisibleString (SIZE (1..40, ...)) OPTIONAL,
 *     originalCalledNumber    [4] VisibleString (SIZE (1..40, ...)) OPTIONAL,
 *     lastRedirectingNumber   [5] VisibleString (SIZE (1..40, ...)) OPTIONAL,
 *     redirectingName         [6] VisibleString (SIZE (1..40, ...)) OPTIONAL,
 *     redirectingReason       [7] VisibleString (SIZE (1..40, ...)) OPTIONAL,
 *     messageWaitingNotif     [8] VisibleString (SIZE (1..40, ...)) OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class TerminalDisplayInfo {
    /**
     * @summary `generalDisplay`.
     * @public
     * @readonly
     */
    readonly generalDisplay: OPTIONAL<VisibleString>;
    /**
     * @summary `calledNumber`.
     * @public
     * @readonly
     */
    readonly calledNumber: OPTIONAL<VisibleString>;
    /**
     * @summary `callingNumber`.
     * @public
     * @readonly
     */
    readonly callingNumber: OPTIONAL<VisibleString>;
    /**
     * @summary `callingName`.
     * @public
     * @readonly
     */
    readonly callingName: OPTIONAL<VisibleString>;
    /**
     * @summary `originalCalledNumber`.
     * @public
     * @readonly
     */
    readonly originalCalledNumber: OPTIONAL<VisibleString>;
    /**
     * @summary `lastRedirectingNumber`.
     * @public
     * @readonly
     */
    readonly lastRedirectingNumber: OPTIONAL<VisibleString>;
    /**
     * @summary `redirectingName`.
     * @public
     * @readonly
     */
    readonly redirectingName: OPTIONAL<VisibleString>;
    /**
     * @summary `redirectingReason`.
     * @public
     * @readonly
     */
    readonly redirectingReason: OPTIONAL<VisibleString>;
    /**
     * @summary `messageWaitingNotif`.
     * @public
     * @readonly
     */
    readonly messageWaitingNotif: OPTIONAL<VisibleString>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        generalDisplay: OPTIONAL<VisibleString>,
        calledNumber: OPTIONAL<VisibleString>,
        callingNumber: OPTIONAL<VisibleString>,
        callingName: OPTIONAL<VisibleString>,
        originalCalledNumber: OPTIONAL<VisibleString>,
        lastRedirectingNumber: OPTIONAL<VisibleString>,
        redirectingName: OPTIONAL<VisibleString>,
        redirectingReason: OPTIONAL<VisibleString>,
        messageWaitingNotif: OPTIONAL<VisibleString>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.generalDisplay = generalDisplay;
        this.calledNumber = calledNumber;
        this.callingNumber = callingNumber;
        this.callingName = callingName;
        this.originalCalledNumber = originalCalledNumber;
        this.lastRedirectingNumber = lastRedirectingNumber;
        this.redirectingName = redirectingName;
        this.redirectingReason = redirectingReason;
        this.messageWaitingNotif = messageWaitingNotif;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TerminalDisplayInfo
     * @description
     * 
     * This takes an `object` and converts it to a `TerminalDisplayInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TerminalDisplayInfo`.
     * @returns {TerminalDisplayInfo}
     */
    public static _from_object (_o: { [_K in keyof (TerminalDisplayInfo)]: (TerminalDisplayInfo)[_K] }): TerminalDisplayInfo {
        return new TerminalDisplayInfo(_o.generalDisplay, _o.calledNumber, _o.callingNumber, _o.callingName, _o.originalCalledNumber, _o.lastRedirectingNumber, _o.redirectingName, _o.redirectingReason, _o.messageWaitingNotif, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TerminalDisplayInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TerminalDisplayInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("generalDisplay", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("calledNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callingNumber", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callingName", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("originalCalledNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("lastRedirectingNumber", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("redirectingName", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("redirectingReason", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("messageWaitingNotif", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of TerminalDisplayInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TerminalDisplayInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TerminalDisplayInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TerminalDisplayInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TerminalDisplayInfo: $.ASN1Decoder<TerminalDisplayInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminalDisplayInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TerminalDisplayInfo (el: _Element): TerminalDisplayInfo {
    if (!_cached_decoder_for_TerminalDisplayInfo) { _cached_decoder_for_TerminalDisplayInfo = function (el: _Element): TerminalDisplayInfo {
    let generalDisplay: OPTIONAL<VisibleString>;
    let calledNumber: OPTIONAL<VisibleString>;
    let callingNumber: OPTIONAL<VisibleString>;
    let callingName: OPTIONAL<VisibleString>;
    let originalCalledNumber: OPTIONAL<VisibleString>;
    let lastRedirectingNumber: OPTIONAL<VisibleString>;
    let redirectingName: OPTIONAL<VisibleString>;
    let redirectingReason: OPTIONAL<VisibleString>;
    let messageWaitingNotif: OPTIONAL<VisibleString>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "generalDisplay": (_el: _Element): void => { generalDisplay = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "calledNumber": (_el: _Element): void => { calledNumber = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "callingNumber": (_el: _Element): void => { callingNumber = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "callingName": (_el: _Element): void => { callingName = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "originalCalledNumber": (_el: _Element): void => { originalCalledNumber = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "lastRedirectingNumber": (_el: _Element): void => { lastRedirectingNumber = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "redirectingName": (_el: _Element): void => { redirectingName = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "redirectingReason": (_el: _Element): void => { redirectingReason = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "messageWaitingNotif": (_el: _Element): void => { messageWaitingNotif = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TerminalDisplayInfo,
        _extension_additions_list_spec_for_TerminalDisplayInfo,
        _root_component_type_list_2_spec_for_TerminalDisplayInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TerminalDisplayInfo(
        generalDisplay,
        calledNumber,
        callingNumber,
        callingName,
        originalCalledNumber,
        lastRedirectingNumber,
        redirectingName,
        redirectingReason,
        messageWaitingNotif,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TerminalDisplayInfo(el);
}

let _cached_encoder_for_TerminalDisplayInfo: $.ASN1Encoder<TerminalDisplayInfo> | null = null;

/**
 * @summary Encodes a(n) TerminalDisplayInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminalDisplayInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TerminalDisplayInfo (value: TerminalDisplayInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TerminalDisplayInfo) { _cached_encoder_for_TerminalDisplayInfo = function (value: TerminalDisplayInfo, elGetter: $.ASN1Encoder<TerminalDisplayInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.generalDisplay !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER)(value.generalDisplay, $.BER);
    }
    if (value.calledNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeVisibleString, $.BER)(value.calledNumber, $.BER);
    }
    if (value.callingNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeVisibleString, $.BER)(value.callingNumber, $.BER);
    }
    if (value.callingName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeVisibleString, $.BER)(value.callingName, $.BER);
    }
    if (value.originalCalledNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeVisibleString, $.BER)(value.originalCalledNumber, $.BER);
    }
    if (value.lastRedirectingNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeVisibleString, $.BER)(value.lastRedirectingNumber, $.BER);
    }
    if (value.redirectingName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeVisibleString, $.BER)(value.redirectingName, $.BER);
    }
    if (value.redirectingReason !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeVisibleString, $.BER)(value.redirectingReason, $.BER);
    }
    if (value.messageWaitingNotif !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeVisibleString, $.BER)(value.messageWaitingNotif, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TerminalDisplayInfo(value, elGetter);
}


/* eslint-enable */
