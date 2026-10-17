/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_minReportingCycle
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";




import { integerInRange } from "../../constraints.mjs";

/**
 * @summary RocfGetParameter_parMinReportingCycle
 * @description
 * 
 * Successful ROCF-GET-PARAMETER result for the minimum reporting cycle.
 * Service management sets the shortest interval, in seconds, that the user may
 * request in ROCF-SCHEDULE-STATUS-REPORT. A requested cycle below this minimum
 * conflicts with the provider configuration and is invalid.
 *
 * CCSDS 911.5-B-4, sections 3.1.3.2 and 3.8.2.8 and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfGetParameter-parMinReportingCycle ::= SEQUENCE
 *    {  parameterName                 ParameterName (minReportingCycle)
 *    ,  parameterValue                IntPosShort (1 .. 600)
 *    }
 * ```
 * 
 * @class
 */
export
class RocfGetParameter_parMinReportingCycle {
    /**
     * @summary `parameterName`.
     * @description
     * 
     * Fixed to minReportingCycle. CCSDS 911.5-B-4, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * 
     * Minimum reporting-cycle the user may request, in seconds. Annex A
     * constrains the value to 1..600. A SCHEDULE-STATUS-REPORT cycle outside
     * the range agreed by management, including a cycle below this minimum, is
     * rejected as an invalid reporting cycle.
     *
     * CCSDS 911.5-B-4, sections 3.1.3.2 and 3.8.2.8, table 3-11, and annex
     * A2.5.
     * @public
     * @readonly
     */
    readonly parameterValue: IntPosShort;

    constructor (
        parameterName: ParameterName,
        parameterValue: IntPosShort
    ) {
        if (parameterName !== ParameterName_minReportingCycle) {
            throw new ASN1Error("RocfGetParameter_parMinReportingCycle.parameterName violates ParameterName (minReportingCycle)");
        }
        if (!integerInRange(parameterValue, 1, 600)) {
            throw new ASN1OverflowError("RocfGetParameter_parMinReportingCycle.parameterValue violates INTEGER (1..600)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RocfGetParameter_parMinReportingCycle
     * @description
     * 
     * This takes an `object` and converts it to a `RocfGetParameter_parMinReportingCycle`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfGetParameter_parMinReportingCycle`.
     * @returns {RocfGetParameter_parMinReportingCycle}
     */
    public static _from_object (_o: { [_K in keyof (RocfGetParameter_parMinReportingCycle)]: (RocfGetParameter_parMinReportingCycle)[_K] }): RocfGetParameter_parMinReportingCycle {
        return new RocfGetParameter_parMinReportingCycle(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RocfGetParameter_parMinReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfGetParameter_parMinReportingCycle: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RocfGetParameter_parMinReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfGetParameter_parMinReportingCycle: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfGetParameter_parMinReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfGetParameter_parMinReportingCycle: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfGetParameter_parMinReportingCycle: $.ASN1Decoder<RocfGetParameter_parMinReportingCycle> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfGetParameter_parMinReportingCycle
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfGetParameter_parMinReportingCycle (el: _Element): RocfGetParameter_parMinReportingCycle {
    if (!_cached_decoder_for_RocfGetParameter_parMinReportingCycle) { _cached_decoder_for_RocfGetParameter_parMinReportingCycle = function (el: _Element): RocfGetParameter_parMinReportingCycle {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RocfGetParameter-parMinReportingCycle contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: IntPosShort;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_IntPosShort(sequence[1]);
    return new RocfGetParameter_parMinReportingCycle(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RocfGetParameter_parMinReportingCycle(el);
}

let _cached_encoder_for_RocfGetParameter_parMinReportingCycle: $.ASN1Encoder<RocfGetParameter_parMinReportingCycle> | null = null;

/**
 * @summary Encodes a(n) RocfGetParameter_parMinReportingCycle into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfGetParameter_parMinReportingCycle, encoded as an ASN.1 Element.
 */
export
function _encode_RocfGetParameter_parMinReportingCycle (value: RocfGetParameter_parMinReportingCycle, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfGetParameter_parMinReportingCycle) { _cached_encoder_for_RocfGetParameter_parMinReportingCycle = function (value: RocfGetParameter_parMinReportingCycle, _elGetter: $.ASN1Encoder<RocfGetParameter_parMinReportingCycle>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_IntPosShort(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfGetParameter_parMinReportingCycle(value, elGetter);
}


/* eslint-enable */
