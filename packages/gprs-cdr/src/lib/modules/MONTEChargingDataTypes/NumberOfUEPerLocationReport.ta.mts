/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EPSLocationInfo, _decode_EPSLocationInfo, _encode_EPSLocationInfo } from "../MONTEChargingDataTypes/EPSLocationInfo.ta.mjs";


/**
 * @summary NumberOfUEPerLocationReport
 * @description
 *
 * One location and the number of UEs the MME or SGSN found
 * there. Category Oc. Applicable to the number of UEs at a
 * given geographic location. Repeated for each reported
 * location. Bound to Number-Of-UE-Per-Location-Report.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 6.1.3.3, 6.3.1.2 and 6.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfUEPerLocationReport ::= SEQUENCE {
 *    ePSLocationInformation   [0] IMPLICIT EPSLocationInfo OPTIONAL,
 *    uECount                  [1] IMPLICIT INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class NumberOfUEPerLocationReport {
    /**
     * @summary `ePSLocationInformation`.
     * @description
     *
     * The location at which the UEs were counted. TS 32.278
     * describes these locations as cells, eNodeBs, and/or RAIs
     * or TAIs.
     *
     * 3GPP TS 32.278 V19.0.0 clauses 5.1 and 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly ePSLocationInformation: OPTIONAL<EPSLocationInfo>;
    /**
     * @summary `uECount`.
     * @description
     *
     * Number of UEs the MME or SGSN found at
     * `ePSLocationInformation`.
     *
     * 3GPP TS 32.278 V19.0.0 clause 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly uECount: OPTIONAL<INTEGER>;

    constructor (
        ePSLocationInformation?: OPTIONAL<EPSLocationInfo>,
        uECount?: OPTIONAL<INTEGER>
    ) {
        this.ePSLocationInformation = ePSLocationInformation;
        this.uECount = uECount;
    }

    /**
     * @summary Restructures an object into a NumberOfUEPerLocationReport
     * @description
     * 
     * This takes an `object` and converts it to a `NumberOfUEPerLocationReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NumberOfUEPerLocationReport`.
     * @returns {NumberOfUEPerLocationReport}
     */
    public static _from_object (_o: { [_K in keyof (NumberOfUEPerLocationReport)]: (NumberOfUEPerLocationReport)[_K] }): NumberOfUEPerLocationReport {
        return new NumberOfUEPerLocationReport(_o.ePSLocationInformation, _o.uECount);
    }


}

/**
 * @summary The Leading Root Component Types of NumberOfUEPerLocationReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NumberOfUEPerLocationReport: $.ComponentSpec[] = [
    new $.ComponentSpec("ePSLocationInformation", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("uECount", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of NumberOfUEPerLocationReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NumberOfUEPerLocationReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NumberOfUEPerLocationReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NumberOfUEPerLocationReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NumberOfUEPerLocationReport: $.ASN1Decoder<NumberOfUEPerLocationReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfUEPerLocationReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NumberOfUEPerLocationReport (el: _Element): NumberOfUEPerLocationReport {
    if (!_cached_decoder_for_NumberOfUEPerLocationReport) { _cached_decoder_for_NumberOfUEPerLocationReport = function (el: _Element): NumberOfUEPerLocationReport {
    let ePSLocationInformation: OPTIONAL<EPSLocationInfo>;
    let uECount: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "ePSLocationInformation": (_el: _Element): void => { ePSLocationInformation = $._decode_implicit<EPSLocationInfo>(() => _decode_EPSLocationInfo)(_el); },
        "uECount": (_el: _Element): void => { uECount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NumberOfUEPerLocationReport,
        _extension_additions_list_spec_for_NumberOfUEPerLocationReport,
        _root_component_type_list_2_spec_for_NumberOfUEPerLocationReport,
        undefined,
    );
    return new NumberOfUEPerLocationReport(
        ePSLocationInformation,
        uECount
    );
}; }
    return _cached_decoder_for_NumberOfUEPerLocationReport(el);
}

let _cached_encoder_for_NumberOfUEPerLocationReport: $.ASN1Encoder<NumberOfUEPerLocationReport> | null = null;

/**
 * @summary Encodes a(n) NumberOfUEPerLocationReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfUEPerLocationReport, encoded as an ASN.1 Element.
 */
export
function _encode_NumberOfUEPerLocationReport (value: NumberOfUEPerLocationReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NumberOfUEPerLocationReport) { _cached_encoder_for_NumberOfUEPerLocationReport = function (value: NumberOfUEPerLocationReport, _elGetter: $.ASN1Encoder<NumberOfUEPerLocationReport>): _Element {
    const _components: _Element[] = [];
    if (value.ePSLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_EPSLocationInfo, $.BER)(value.ePSLocationInformation, $.BER));
    }
    if (value.uECount !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.uECount, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NumberOfUEPerLocationReport(value, elGetter);
}


/* eslint-enable */
