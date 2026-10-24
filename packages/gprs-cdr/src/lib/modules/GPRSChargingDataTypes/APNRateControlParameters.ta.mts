/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_AdditionalExceptionReports, _encode_AdditionalExceptionReports, _enum_for_AdditionalExceptionReports, AdditionalExceptionReports } from "../GPRSChargingDataTypes/AdditionalExceptionReports.ta.mjs";
import { _decode_APNRateControlParameters_rateControlTimeUnit, _encode_APNRateControlParameters_rateControlTimeUnit, APNRateControlParameters_rateControlTimeUnit } from "../GPRSChargingDataTypes/APNRateControlParameters-rateControlTimeUnit.ta.mjs";


/**
 * @summary APNRateControlParameters
 * @description
 * 
 * Parameters of an APN Rate Control enforced by the P-GW (table 6.1.3.1).
 * TS 32.251 does not define the individual components beyond identifying
 * the APN Rate Control as a charging condition.
 * 
 * 3GPP TS 32.251 V19.0.0.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APNRateControlParameters ::= SEQUENCE {
 *    additionalExceptionReports   [0] IMPLICIT AdditionalExceptionReports OPTIONAL,
 *    rateControlTimeUnit          [1] IMPLICIT INTEGER {
 *       unrestricted    ( 0 ),
 *       minute          ( 1 ),
 *       hour            ( 2 ),
 *       day             ( 3 ),
 *       week            ( 4 )} OPTIONAL,
 *    rateControlMaxRate           [2] IMPLICIT INTEGER OPTIONAL,
 *    rateControlMaxMessageSize    [3] IMPLICIT INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class APNRateControlParameters {
    /**
     * @summary `additionalExceptionReports`.
     * @public
     * @readonly
     */
    readonly additionalExceptionReports: OPTIONAL<AdditionalExceptionReports>;
    /**
     * @summary `rateControlTimeUnit`.
     * @public
     * @readonly
     */
    readonly rateControlTimeUnit: OPTIONAL<APNRateControlParameters_rateControlTimeUnit>;
    /**
     * @summary `rateControlMaxRate`.
     * @public
     * @readonly
     */
    readonly rateControlMaxRate: OPTIONAL<INTEGER>;
    /**
     * @summary `rateControlMaxMessageSize`.
     * @public
     * @readonly
     */
    readonly rateControlMaxMessageSize: OPTIONAL<INTEGER>;

    constructor (
        additionalExceptionReports?: OPTIONAL<AdditionalExceptionReports>,
        rateControlTimeUnit?: OPTIONAL<APNRateControlParameters_rateControlTimeUnit>,
        rateControlMaxRate?: OPTIONAL<INTEGER>,
        rateControlMaxMessageSize?: OPTIONAL<INTEGER>
    ) {
        this.additionalExceptionReports = additionalExceptionReports;
        this.rateControlTimeUnit = rateControlTimeUnit;
        this.rateControlMaxRate = rateControlMaxRate;
        this.rateControlMaxMessageSize = rateControlMaxMessageSize;
    }

    /**
     * @summary Restructures an object into a APNRateControlParameters
     * @description
     * 
     * This takes an `object` and converts it to a `APNRateControlParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `APNRateControlParameters`.
     * @returns {APNRateControlParameters}
     */
    public static _from_object (_o: { [_K in keyof (APNRateControlParameters)]: (APNRateControlParameters)[_K] }): APNRateControlParameters {
        return new APNRateControlParameters(_o.additionalExceptionReports, _o.rateControlTimeUnit, _o.rateControlMaxRate, _o.rateControlMaxMessageSize);
    }

        /**
         * @summary The enum used as the type of the component `additionalExceptionReports`
         * @public
         * @static
         */

    public static _enum_for_additionalExceptionReports = _enum_for_AdditionalExceptionReports;
}

/**
 * @summary The Leading Root Component Types of APNRateControlParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_APNRateControlParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("additionalExceptionReports", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("rateControlTimeUnit", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rateControlMaxRate", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("rateControlMaxMessageSize", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of APNRateControlParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_APNRateControlParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of APNRateControlParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_APNRateControlParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_APNRateControlParameters: $.ASN1Decoder<APNRateControlParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) APNRateControlParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_APNRateControlParameters (el: _Element): APNRateControlParameters {
    if (!_cached_decoder_for_APNRateControlParameters) { _cached_decoder_for_APNRateControlParameters = function (el: _Element): APNRateControlParameters {
    let additionalExceptionReports: OPTIONAL<AdditionalExceptionReports>;
    let rateControlTimeUnit: OPTIONAL<APNRateControlParameters_rateControlTimeUnit>;
    let rateControlMaxRate: OPTIONAL<INTEGER>;
    let rateControlMaxMessageSize: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "additionalExceptionReports": (_el: _Element): void => { additionalExceptionReports = $._decode_implicit<AdditionalExceptionReports>(() => _decode_AdditionalExceptionReports)(_el); },
        "rateControlTimeUnit": (_el: _Element): void => { rateControlTimeUnit = $._decode_implicit<APNRateControlParameters_rateControlTimeUnit>(() => _decode_APNRateControlParameters_rateControlTimeUnit)(_el); },
        "rateControlMaxRate": (_el: _Element): void => { rateControlMaxRate = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "rateControlMaxMessageSize": (_el: _Element): void => { rateControlMaxMessageSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_APNRateControlParameters,
        _extension_additions_list_spec_for_APNRateControlParameters,
        _root_component_type_list_2_spec_for_APNRateControlParameters,
        undefined,
    );
    return new APNRateControlParameters(
        additionalExceptionReports,
        rateControlTimeUnit,
        rateControlMaxRate,
        rateControlMaxMessageSize
    );
}; }
    return _cached_decoder_for_APNRateControlParameters(el);
}

let _cached_encoder_for_APNRateControlParameters: $.ASN1Encoder<APNRateControlParameters> | null = null;

/**
 * @summary Encodes a(n) APNRateControlParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The APNRateControlParameters, encoded as an ASN.1 Element.
 */
export
function _encode_APNRateControlParameters (value: APNRateControlParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_APNRateControlParameters) { _cached_encoder_for_APNRateControlParameters = function (value: APNRateControlParameters, _elGetter: $.ASN1Encoder<APNRateControlParameters>): _Element {
    const _components: _Element[] = [];
    if (value.additionalExceptionReports !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_AdditionalExceptionReports, $.BER)(value.additionalExceptionReports, $.BER));
    }
    if (value.rateControlTimeUnit !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_APNRateControlParameters_rateControlTimeUnit, $.BER)(value.rateControlTimeUnit, $.BER));
    }
    if (value.rateControlMaxRate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.rateControlMaxRate, $.BER));
    }
    if (value.rateControlMaxMessageSize !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.rateControlMaxMessageSize, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_APNRateControlParameters(value, elGetter);
}


/* eslint-enable */
