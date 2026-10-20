/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PeriodicStrategy, _decode_PeriodicStrategy, _encode_PeriodicStrategy } from "../DirectoryShadowAbstractService/PeriodicStrategy.ta.mjs";
// export { PeriodicStrategy, _decode_PeriodicStrategy, _encode_PeriodicStrategy } from "../DirectoryShadowAbstractService/PeriodicStrategy.ta.mjs";


/**
 * @summary SchedulingParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SchedulingParameters ::= SEQUENCE {
 *   periodic    PeriodicStrategy OPTIONAL, -- must be present if othertimes is set to FALSE
 *   othertimes  BOOLEAN DEFAULT FALSE
 * }
 * ```
 * 
 * @class
 */
export
class SchedulingParameters {
    /**
     * @summary `periodic`.
     * @public
     * @readonly
     */
    readonly periodic: OPTIONAL<PeriodicStrategy>;
    /**
     * @summary `othertimes`.
     * @public
     * @readonly
     */
    readonly othertimes: OPTIONAL<BOOLEAN>;

    constructor (
        periodic: OPTIONAL<PeriodicStrategy>,
        othertimes: OPTIONAL<BOOLEAN>
    ) {
        this.periodic = periodic;
        this.othertimes = othertimes;
    }

    /**
     * @summary Restructures an object into a SchedulingParameters
     * @description
     * 
     * This takes an `object` and converts it to a `SchedulingParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SchedulingParameters`.
     * @returns {SchedulingParameters}
     */
    public static _from_object (_o: { [_K in keyof (SchedulingParameters)]: (SchedulingParameters)[_K] }): SchedulingParameters {
        return new SchedulingParameters(_o.periodic, _o.othertimes);
    }

    /**
     * @summary Getter that returns the default value for `othertimes`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_othertimes () { return false; }
}

/**
 * @summary The Leading Root Component Types of SchedulingParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SchedulingParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("periodic", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("othertimes", true, $.hasTag(_TagClass.universal, 1))
];

/**
 * @summary The Trailing Root Component Types of SchedulingParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SchedulingParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SchedulingParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SchedulingParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SchedulingParameters: $.ASN1Decoder<SchedulingParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SchedulingParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SchedulingParameters (el: _Element): SchedulingParameters {
    if (!_cached_decoder_for_SchedulingParameters) { _cached_decoder_for_SchedulingParameters = function (el: _Element): SchedulingParameters {
    let periodic: OPTIONAL<PeriodicStrategy>;
    let othertimes: OPTIONAL<BOOLEAN> = SchedulingParameters._default_value_for_othertimes;
    const callbacks: $.DecodingMap = {
        "periodic": (_el: _Element): void => { periodic = _decode_PeriodicStrategy(_el); },
        "othertimes": (_el: _Element): void => { othertimes = $._decodeBoolean(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SchedulingParameters,
        _extension_additions_list_spec_for_SchedulingParameters,
        _root_component_type_list_2_spec_for_SchedulingParameters,
        undefined,
    );
    return new SchedulingParameters(
        periodic,
        othertimes
    );
}; }
    return _cached_decoder_for_SchedulingParameters(el);
}

let _cached_encoder_for_SchedulingParameters: $.ASN1Encoder<SchedulingParameters> | null = null;

/**
 * @summary Encodes a(n) SchedulingParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchedulingParameters, encoded as an ASN.1 Element.
 */
export
function _encode_SchedulingParameters (value: SchedulingParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SchedulingParameters) { _cached_encoder_for_SchedulingParameters = function (value: SchedulingParameters, elGetter: $.ASN1Encoder<SchedulingParameters>): _Element {
    const _components: _Element[] = [];
    if (value.periodic !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_PeriodicStrategy(value.periodic, $.BER));
    }
    if (value.othertimes !== undefined && !$.deepEq(value.othertimes, SchedulingParameters._default_value_for_othertimes)) {
        _components.push(/* IF_DEFAULT */ $._encodeBoolean(value.othertimes, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SchedulingParameters(value, elGetter);
}


/* eslint-enable */
