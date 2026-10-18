/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubjectSignal_signal
 * @description
 *
 * Subject-initiated dialing and signalling on `SubjectSignal`.
 *
 * The module comment says to include at least one of the four parameters. Each
 * is a `VisibleString` of size 1 to 128, extensible.
 * `otherSignalingInformation` reports a subject signal that the other three do
 * not define. This edition does not define the string format of any of the
 * four.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubjectSignal-signal ::= SEQUENCE {
 *     -- The following four parameters are used to report
 *     -- information regarding subject-initiated dialing and
 *     -- signaling. Include at least one of the following four
 *     -- parameters to identify the subject- initiated dialing
 *     -- and signaling information being reported.
 *     switchhookFlash             [0] VisibleString (SIZE (1..128, ...)) OPTIONAL,
 *     dialedDigits                [1] VisibleString (SIZE (1..128, ...)) OPTIONAL,
 *     featureKey                  [2] VisibleString (SIZE (1..128, ...)) OPTIONAL,
 *     otherSignalingInformation   [3] VisibleString (SIZE (1..128, ...)) OPTIONAL,
 *     -- Can be used to report undefined subject signals
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class SubjectSignal_signal {
    /**
     * @summary `switchhookFlash`.
     * @description
     *
     * Switch-hook flash from the subject. `VisibleString` of size 1 to 128,
     * extensible. Optional. At least one of the four parameters is present. The
     * string format is not defined in this edition.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly switchhookFlash: OPTIONAL<VisibleString>;
    /**
     * @summary `dialedDigits`.
     * @description
     *
     * Digits dialed by the subject. `VisibleString` of size 1 to 128,
     * extensible. Optional. At least one of the four parameters is present. The
     * character set is not defined in this edition. DTMF extraction uses a
     * different, narrower alphabet; see `DialedDigitExtraction`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly dialedDigits: OPTIONAL<VisibleString>;
    /**
     * @summary `featureKey`.
     * @description
     *
     * Feature key pressed by the subject. `VisibleString` of size 1 to 128,
     * extensible. Optional. At least one of the four parameters is present. The
     * string format is not defined in this edition.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly featureKey: OPTIONAL<VisibleString>;
    /**
     * @summary `otherSignalingInformation`.
     * @description
     *
     * Subject signalling that the other three parameters do not define.
     * `VisibleString` of size 1 to 128, extensible. Optional. At least one of
     * the four is present. The module comment says it can report undefined
     * subject signals.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly otherSignalingInformation: OPTIONAL<VisibleString>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        switchhookFlash: OPTIONAL<VisibleString>,
        dialedDigits: OPTIONAL<VisibleString>,
        featureKey: OPTIONAL<VisibleString>,
        otherSignalingInformation: OPTIONAL<VisibleString>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.switchhookFlash = switchhookFlash;
        this.dialedDigits = dialedDigits;
        this.featureKey = featureKey;
        this.otherSignalingInformation = otherSignalingInformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SubjectSignal_signal
     * @description
     * 
     * This takes an `object` and converts it to a `SubjectSignal_signal`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubjectSignal_signal`.
     * @returns {SubjectSignal_signal}
     */
    public static _from_object (_o: { [_K in keyof (SubjectSignal_signal)]: (SubjectSignal_signal)[_K] }): SubjectSignal_signal {
        return new SubjectSignal_signal(_o.switchhookFlash, _o.dialedDigits, _o.featureKey, _o.otherSignalingInformation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SubjectSignal_signal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SubjectSignal_signal: $.ComponentSpec[] = [
    new $.ComponentSpec("switchhookFlash", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("dialedDigits", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("featureKey", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("otherSignalingInformation", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of SubjectSignal_signal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SubjectSignal_signal: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SubjectSignal_signal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SubjectSignal_signal: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SubjectSignal_signal: $.ASN1Decoder<SubjectSignal_signal> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubjectSignal_signal
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubjectSignal_signal (el: _Element): SubjectSignal_signal {
    if (!_cached_decoder_for_SubjectSignal_signal) { _cached_decoder_for_SubjectSignal_signal = function (el: _Element): SubjectSignal_signal {
    let switchhookFlash: OPTIONAL<VisibleString>;
    let dialedDigits: OPTIONAL<VisibleString>;
    let featureKey: OPTIONAL<VisibleString>;
    let otherSignalingInformation: OPTIONAL<VisibleString>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "switchhookFlash": (_el: _Element): void => { switchhookFlash = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "dialedDigits": (_el: _Element): void => { dialedDigits = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "featureKey": (_el: _Element): void => { featureKey = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "otherSignalingInformation": (_el: _Element): void => { otherSignalingInformation = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SubjectSignal_signal,
        _extension_additions_list_spec_for_SubjectSignal_signal,
        _root_component_type_list_2_spec_for_SubjectSignal_signal,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SubjectSignal_signal(
        switchhookFlash,
        dialedDigits,
        featureKey,
        otherSignalingInformation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SubjectSignal_signal(el);
}

let _cached_encoder_for_SubjectSignal_signal: $.ASN1Encoder<SubjectSignal_signal> | null = null;

/**
 * @summary Encodes a(n) SubjectSignal_signal into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectSignal_signal, encoded as an ASN.1 Element.
 */
export
function _encode_SubjectSignal_signal (value: SubjectSignal_signal, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubjectSignal_signal) { _cached_encoder_for_SubjectSignal_signal = function (value: SubjectSignal_signal, elGetter: $.ASN1Encoder<SubjectSignal_signal>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.switchhookFlash !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER)(value.switchhookFlash, $.BER);
    }
    if (value.dialedDigits !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeVisibleString, $.BER)(value.dialedDigits, $.BER);
    }
    if (value.featureKey !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeVisibleString, $.BER)(value.featureKey, $.BER);
    }
    if (value.otherSignalingInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeVisibleString, $.BER)(value.otherSignalingInformation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SubjectSignal_signal(value, elGetter);
}


/* eslint-enable */
