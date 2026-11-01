/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type BOOLEAN,
    type GeneralizedTime,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeAssertion_between
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeAssertion-between ::= SEQUENCE {
 *   startTime  [0]  GeneralizedTime,
 *   endTime    [1]  GeneralizedTime OPTIONAL,
 *   entirely        BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 * 
 * @class
 */
export
class TimeAssertion_between {
    /**
     * @summary `startTime`.
     * @public
     * @readonly
     */
    readonly startTime: GeneralizedTime;
    /**
     * @summary `endTime`.
     * @public
     * @readonly
     */
    readonly endTime: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `entirely`.
     * @public
     * @readonly
     */
    readonly entirely: OPTIONAL<BOOLEAN>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        startTime: GeneralizedTime,
        endTime: OPTIONAL<GeneralizedTime>,
        entirely: OPTIONAL<BOOLEAN>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.entirely = entirely;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TimeAssertion_between
     * @description
     * 
     * This takes an `object` and converts it to a `TimeAssertion_between`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeAssertion_between`.
     * @returns {TimeAssertion_between}
     */
    public static _from_object (_o: { [_K in keyof (TimeAssertion_between)]: (TimeAssertion_between)[_K] }): TimeAssertion_between {
        return new TimeAssertion_between(_o.startTime, _o.endTime, _o.entirely, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `entirely`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_entirely () { return false; }
}

/**
 * @summary The Leading Root Component Types of TimeAssertion_between
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TimeAssertion_between: $.ComponentSpec[] = [
    new $.ComponentSpec("startTime", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("endTime", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("entirely", true, $.hasTag(_TagClass.universal, 1))
];

/**
 * @summary The Trailing Root Component Types of TimeAssertion_between
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TimeAssertion_between: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TimeAssertion_between
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TimeAssertion_between: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TimeAssertion_between: $.ASN1Decoder<TimeAssertion_between> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeAssertion_between
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimeAssertion_between (el: _Element): TimeAssertion_between {
    if (!_cached_decoder_for_TimeAssertion_between) { _cached_decoder_for_TimeAssertion_between = function (el: _Element): TimeAssertion_between {
    let startTime!: GeneralizedTime;
    let endTime: OPTIONAL<GeneralizedTime>;
    let entirely: OPTIONAL<BOOLEAN> = TimeAssertion_between._default_value_for_entirely;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "startTime": (_el: _Element): void => { startTime = $._decode_explicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "endTime": (_el: _Element): void => { endTime = $._decode_explicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "entirely": (_el: _Element): void => { entirely = $._decodeBoolean(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TimeAssertion_between,
        _extension_additions_list_spec_for_TimeAssertion_between,
        _root_component_type_list_2_spec_for_TimeAssertion_between,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TimeAssertion_between(
        startTime,
        endTime,
        entirely,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TimeAssertion_between(el);
}

let _cached_encoder_for_TimeAssertion_between: $.ASN1Encoder<TimeAssertion_between> | null = null;

/**
 * @summary Encodes a(n) TimeAssertion_between into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeAssertion_between, encoded as an ASN.1 Element.
 */
export
function _encode_TimeAssertion_between (value: TimeAssertion_between, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimeAssertion_between) { _cached_encoder_for_TimeAssertion_between = function (value: TimeAssertion_between, elGetter: $.ASN1Encoder<TimeAssertion_between>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeGeneralizedTime, $.BER)(value.startTime, $.BER);
    if (value.endTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => $._encodeGeneralizedTime, $.BER)(value.endTime, $.BER);
    }
    if (value.entirely !== undefined && !$.deepEq(value.entirely, TimeAssertion_between._default_value_for_entirely)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encodeBoolean(value.entirely, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TimeAssertion_between(value, elGetter);
}


/* eslint-enable */
