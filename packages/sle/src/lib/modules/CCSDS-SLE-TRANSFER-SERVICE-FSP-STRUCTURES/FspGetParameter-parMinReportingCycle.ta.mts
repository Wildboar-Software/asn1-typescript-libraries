/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
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
 * @summary FspGetParameter_parMinReportingCycle
 * @description
 * 
 * minimum-reporting-cycle: the minimum reporting cycle, in seconds, that the
 * user may request in FSP-SCHEDULE-STATUS-REPORT. Service management sets it.
 * The value is an integer from 1 to 600 (annex A2.5).
 * 
 * A requested cycle outside the range agreed by service management is rejected
 * with diagnostic invalid reporting cycle (section 3.8.2.8.1). The cycle
 * carried in that request is `ReportingCycle`, 2 to 600 seconds (annex A2.3).
 * 
 * CCSDS 912.3-B-3, table 3-11, section 3.8.2.8.1, and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parMinReportingCycle ::= SEQUENCE
 *    {  parameterName        ParameterName (minReportingCycle)
 *    ,  parameterValue       IntPosShort (1 .. 600)
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parMinReportingCycle {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `minReportingCycle`, selecting minimum-reporting-cycle in table
     * 3-11. CCSDS 912.3-B-3, section 3.10.2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * Minimum reporting cycle in seconds, from 1 to 600. CCSDS 912.3-B-3, table
     * 3-11 and annex A2.5.
     * @public
     * @readonly
     */
    readonly parameterValue: IntPosShort;

    constructor (
        parameterName: ParameterName,
        parameterValue: IntPosShort
    ) {
        if (parameterName !== ParameterName_minReportingCycle) {
            throw new ASN1Error("FspGetParameter_parMinReportingCycle.parameterName violates ParameterName (minReportingCycle)");
        }
        if (!integerInRange(parameterValue, 1, 600)) {
            throw new ASN1OverflowError("FspGetParameter_parMinReportingCycle.parameterValue violates INTEGER (1..600)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parMinReportingCycle
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parMinReportingCycle`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parMinReportingCycle`.
     * @returns {FspGetParameter_parMinReportingCycle}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parMinReportingCycle)]: (FspGetParameter_parMinReportingCycle)[_K] }): FspGetParameter_parMinReportingCycle {
        return new FspGetParameter_parMinReportingCycle(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parMinReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parMinReportingCycle: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parMinReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parMinReportingCycle: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parMinReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parMinReportingCycle: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parMinReportingCycle: $.ASN1Decoder<FspGetParameter_parMinReportingCycle> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parMinReportingCycle
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parMinReportingCycle (el: _Element): FspGetParameter_parMinReportingCycle {
    if (!_cached_decoder_for_FspGetParameter_parMinReportingCycle) { _cached_decoder_for_FspGetParameter_parMinReportingCycle = function (el: _Element): FspGetParameter_parMinReportingCycle {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parMinReportingCycle contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: IntPosShort;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_IntPosShort(sequence[1]);
    return new FspGetParameter_parMinReportingCycle(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parMinReportingCycle(el);
}

let _cached_encoder_for_FspGetParameter_parMinReportingCycle: $.ASN1Encoder<FspGetParameter_parMinReportingCycle> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parMinReportingCycle into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parMinReportingCycle, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parMinReportingCycle (value: FspGetParameter_parMinReportingCycle, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parMinReportingCycle) { _cached_encoder_for_FspGetParameter_parMinReportingCycle = function (value: FspGetParameter_parMinReportingCycle, _elGetter: $.ASN1Encoder<FspGetParameter_parMinReportingCycle>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_IntPosShort(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parMinReportingCycle(value, elGetter);
}


/* eslint-enable */
