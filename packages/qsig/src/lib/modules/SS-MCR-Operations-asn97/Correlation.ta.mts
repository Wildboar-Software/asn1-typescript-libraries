/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CallIdentity, _decode_CallIdentity, _encode_CallIdentity } from "../Path-Replacement-Operations-asn1-97/CallIdentity.ta.mjs";
import { type CorrelationReason, _decode_CorrelationReason, _encode_CorrelationReason } from "../SS-MCR-Operations-asn97/CorrelationReason.ta.mjs";

/**
 * @summary Correlation
 * @description
 *
 * Correlation of the Original Call with the Requested Call (ECMA-344 §4.2.6,
 * §4.2.7, §6.1). The Co-operating PINX stores it from `mCRequest` and copies
 * it into `mCInform` and `mCAlerting` (§6.5.2.1.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-344/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Correlation ::= SEQUENCE {
 *     correlationData CallIdentity,
 *     correlationReason CorrelationReason OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Correlation {
    /**
     * @summary `correlationData`.
     * @description
     *
     * Call identity shared by the Original Call and the Requested Call.
     * ECMA-344 imports `CallIdentity` from path replacement and does not define
     * its contents (§6.3.1).
     * @public
     * @readonly
     */
    readonly correlationData: CallIdentity;
    /**
     * @summary `correlationReason`.
     * @description
     *
     * Optional reason the calls are correlated. §6.5 is silent on when to
     * include it and which value to send (ECMA-344 §6.3.1).
     * @public
     * @readonly
     */
    readonly correlationReason: OPTIONAL<CorrelationReason>;

    constructor (
        correlationData: CallIdentity,
        correlationReason?: OPTIONAL<CorrelationReason>
    ) {
        this.correlationData = correlationData;
        this.correlationReason = correlationReason;
    }

    /**
     * @summary Restructures an object into a Correlation
     * @description
     * 
     * This takes an `object` and converts it to a `Correlation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Correlation`.
     * @returns {Correlation}
     */
    public static _from_object (_o: { [_K in keyof (Correlation)]: (Correlation)[_K] }): Correlation {
        return new Correlation(_o.correlationData, _o.correlationReason);
    }

}

/**
 * @summary The Leading Root Component Types of Correlation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Correlation: $.ComponentSpec[] = [
    new $.ComponentSpec("correlationData", false, $.hasTag(_TagClass.universal, 18)),
    new $.ComponentSpec("correlationReason", true, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of Correlation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Correlation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Correlation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Correlation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Correlation: $.ASN1Decoder<Correlation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Correlation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Correlation (el: _Element): Correlation {
    if (!_cached_decoder_for_Correlation) { _cached_decoder_for_Correlation = function (el: _Element): Correlation {
    let correlationData!: CallIdentity;
    let correlationReason: OPTIONAL<CorrelationReason>;
    const callbacks: $.DecodingMap = {
        "correlationData": (_el: _Element): void => { correlationData = _decode_CallIdentity(_el); },
        "correlationReason": (_el: _Element): void => { correlationReason = _decode_CorrelationReason(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Correlation,
        _extension_additions_list_spec_for_Correlation,
        _root_component_type_list_2_spec_for_Correlation,
        undefined,
    );
    return new Correlation(
        correlationData,
        correlationReason
    );
}; }
    return _cached_decoder_for_Correlation(el);
}

let _cached_encoder_for_Correlation: $.ASN1Encoder<Correlation> | null = null;

/**
 * @summary Encodes a(n) Correlation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Correlation, encoded as an ASN.1 Element.
 */
export
function _encode_Correlation (value: Correlation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Correlation) { _cached_encoder_for_Correlation = function (value: Correlation, _elGetter: $.ASN1Encoder<Correlation>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_CallIdentity(value.correlationData, $.BER));
    if (value.correlationReason !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CorrelationReason(value.correlationReason, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Correlation(value, elGetter);
}

/* eslint-enable */
