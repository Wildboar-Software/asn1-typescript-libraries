/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_minReportingCycle
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { type IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";




import { integerInRange } from "../../constraints.mjs";

/**
 * @summary CltuGetParameter_parMinReportingCycle
 * @description
 * 
 * minimum-reporting-cycle: the smallest reporting-cycle, in seconds, that the
 * user may request in CLTU-SCHEDULE-STATUS-REPORT. Annex A constrains this
 * parameter to 1 through 600. A requested cycle outside the range agreed by
 * service management is rejected with diagnostic invalid reporting cycle. Set
 * by service management. CCSDS 912.1-B-5, table 3-11 and section 3.8.2.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parMinReportingCycle ::= SEQUENCE
 *    {  parameterName                    ParameterName (minReportingCycle)
 *    ,  parameterValue                   IntPosShort (1 .. 600)
 *    }
 * ```
 * 
 * @class
 */
export
class CltuGetParameter_parMinReportingCycle {
    /**
     * @summary `parameterName`.
     * @description
     *
     * Must be `minReportingCycle`. Names the minimum-reporting-cycle parameter
     * requested by CLTU-GET-PARAMETER. CCSDS 912.1-B-5, section 3.10.2.5 and
     * table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     *
     * Minimum status-report interval in seconds, from 1 through 600. CCSDS
     * 912.1-B-5, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: IntPosShort;

    constructor (
        parameterName: ParameterName,
        parameterValue: IntPosShort
    ) {
        if (parameterName !== ParameterName_minReportingCycle) {
            throw new ASN1Error("CltuGetParameter_parMinReportingCycle.parameterName violates ParameterName (minReportingCycle)");
        }
        if (!integerInRange(parameterValue, 1, 600)) {
            throw new ASN1OverflowError("CltuGetParameter_parMinReportingCycle.parameterValue violates INTEGER (1..600)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a CltuGetParameter_parMinReportingCycle
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameter_parMinReportingCycle`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameter_parMinReportingCycle`.
     * @returns {CltuGetParameter_parMinReportingCycle}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameter_parMinReportingCycle)]: (CltuGetParameter_parMinReportingCycle)[_K] }): CltuGetParameter_parMinReportingCycle {
        return new CltuGetParameter_parMinReportingCycle(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameter_parMinReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameter_parMinReportingCycle: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameter_parMinReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameter_parMinReportingCycle: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameter_parMinReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameter_parMinReportingCycle: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameter_parMinReportingCycle: $.ASN1Decoder<CltuGetParameter_parMinReportingCycle> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parMinReportingCycle
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parMinReportingCycle (el: _Element): CltuGetParameter_parMinReportingCycle {
    if (!_cached_decoder_for_CltuGetParameter_parMinReportingCycle) { _cached_decoder_for_CltuGetParameter_parMinReportingCycle = function (el: _Element): CltuGetParameter_parMinReportingCycle {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuGetParameter-parMinReportingCycle contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: IntPosShort;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_IntPosShort(sequence[1]);
    return new CltuGetParameter_parMinReportingCycle(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_CltuGetParameter_parMinReportingCycle(el);
}

let _cached_encoder_for_CltuGetParameter_parMinReportingCycle: $.ASN1Encoder<CltuGetParameter_parMinReportingCycle> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parMinReportingCycle into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parMinReportingCycle, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parMinReportingCycle (value: CltuGetParameter_parMinReportingCycle, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parMinReportingCycle) { _cached_encoder_for_CltuGetParameter_parMinReportingCycle = function (value: CltuGetParameter_parMinReportingCycle, _elGetter: $.ASN1Encoder<CltuGetParameter_parMinReportingCycle>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_IntPosShort(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameter_parMinReportingCycle(value, elGetter);
}


/* eslint-enable */
