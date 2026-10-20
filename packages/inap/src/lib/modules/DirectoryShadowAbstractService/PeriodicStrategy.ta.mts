/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Time, _decode_Time, _encode_Time } from "../DirectoryShadowAbstractService/Time.ta.mjs";
// export { Time, _decode_Time, _encode_Time } from "../DirectoryShadowAbstractService/Time.ta.mjs";


/**
 * @summary PeriodicStrategy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodicStrategy ::= SEQUENCE {
 *   beginTime       Time OPTIONAL,
 *   windowSize      INTEGER,
 *   updateInterval  INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class PeriodicStrategy {
    /**
     * @summary `beginTime`.
     * @public
     * @readonly
     */
    readonly beginTime: OPTIONAL<Time>;
    /**
     * @summary `windowSize`.
     * @public
     * @readonly
     */
    readonly windowSize: INTEGER;
    /**
     * @summary `updateInterval`.
     * @public
     * @readonly
     */
    readonly updateInterval: INTEGER;

    constructor (
        beginTime: OPTIONAL<Time>,
        windowSize: INTEGER,
        updateInterval: INTEGER
    ) {
        this.beginTime = beginTime;
        this.windowSize = windowSize;
        this.updateInterval = updateInterval;
    }

    /**
     * @summary Restructures an object into a PeriodicStrategy
     * @description
     * 
     * This takes an `object` and converts it to a `PeriodicStrategy`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PeriodicStrategy`.
     * @returns {PeriodicStrategy}
     */
    public static _from_object (_o: { [_K in keyof (PeriodicStrategy)]: (PeriodicStrategy)[_K] }): PeriodicStrategy {
        return new PeriodicStrategy(_o.beginTime, _o.windowSize, _o.updateInterval);
    }


}

/**
 * @summary The Leading Root Component Types of PeriodicStrategy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PeriodicStrategy: $.ComponentSpec[] = [
    new $.ComponentSpec("beginTime", true, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("windowSize", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("updateInterval", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of PeriodicStrategy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PeriodicStrategy: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PeriodicStrategy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PeriodicStrategy: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PeriodicStrategy: $.ASN1Decoder<PeriodicStrategy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PeriodicStrategy
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PeriodicStrategy (el: _Element): PeriodicStrategy {
    if (!_cached_decoder_for_PeriodicStrategy) { _cached_decoder_for_PeriodicStrategy = function (el: _Element): PeriodicStrategy {
    let beginTime: OPTIONAL<Time>;
    let windowSize!: INTEGER;
    let updateInterval!: INTEGER;
    const callbacks: $.DecodingMap = {
        "beginTime": (_el: _Element): void => { beginTime = _decode_Time(_el); },
        "windowSize": (_el: _Element): void => { windowSize = $._decodeInteger(_el); },
        "updateInterval": (_el: _Element): void => { updateInterval = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PeriodicStrategy,
        _extension_additions_list_spec_for_PeriodicStrategy,
        _root_component_type_list_2_spec_for_PeriodicStrategy,
        undefined,
    );
    return new PeriodicStrategy(
        beginTime,
        windowSize,
        updateInterval
    );
}; }
    return _cached_decoder_for_PeriodicStrategy(el);
}

let _cached_encoder_for_PeriodicStrategy: $.ASN1Encoder<PeriodicStrategy> | null = null;

/**
 * @summary Encodes a(n) PeriodicStrategy into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeriodicStrategy, encoded as an ASN.1 Element.
 */
export
function _encode_PeriodicStrategy (value: PeriodicStrategy, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PeriodicStrategy) { _cached_encoder_for_PeriodicStrategy = function (value: PeriodicStrategy, elGetter: $.ASN1Encoder<PeriodicStrategy>): _Element {
    const _components: _Element[] = [];
    if (value.beginTime !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_Time(value.beginTime, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encodeInteger(value.windowSize, $.BER));
    _components.push(/* REQUIRED   */ $._encodeInteger(value.updateInterval, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PeriodicStrategy(value, elGetter);
}


/* eslint-enable */
