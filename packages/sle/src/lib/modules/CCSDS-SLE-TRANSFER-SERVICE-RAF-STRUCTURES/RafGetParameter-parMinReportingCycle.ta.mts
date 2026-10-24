/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
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
 * @summary RafGetParameter_parMinReportingCycle
 * @description
 * 
 * RAF-GET-PARAMETER value of `minimum-reporting-cycle`: the shortest
 * status-report interval, in seconds, that the user may request. Service
 * management sets it. A requested cycle outside the range agreed by SLE Complex
 * Management and SLE Utilization Management is rejected with `invalid reporting
 * cycle`. A cycle shorter than this configured minimum conflicts with the
 * provider configuration. The returned integer is from 1 to 600.
 * 
 * CCSDS 911.1-B-5, table 3-11 and sections 3.8.2.8 and 3.1.3.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafGetParameter-parMinReportingCycle ::= SEQUENCE
 *     {   parameterName                ParameterName (minReportingCycle)
 *     ,   parameterValue               IntPosShort (1 .. 600)
 *     }
 * ```
 * 
 * @class
 */
export
class RafGetParameter_parMinReportingCycle {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `minReportingCycle`, selecting minimum-reporting-cycle in table
     * 3-11. CCSDS 911.1-B-5, annex A2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * Minimum reporting cycle in seconds, from 1 to 600. CCSDS 911.1-B-5, table
     * 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: IntPosShort;

    constructor (
        parameterName: ParameterName,
        parameterValue: IntPosShort
    ) {
        if (parameterName !== ParameterName_minReportingCycle) {
            throw new ASN1Error("RafGetParameter_parMinReportingCycle.parameterName violates ParameterName (minReportingCycle)");
        }
        if (!integerInRange(parameterValue, 1, 600)) {
            throw new ASN1OverflowError("RafGetParameter_parMinReportingCycle.parameterValue violates INTEGER (1..600)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RafGetParameter_parMinReportingCycle
     * @description
     * 
     * This takes an `object` and converts it to a `RafGetParameter_parMinReportingCycle`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RafGetParameter_parMinReportingCycle`.
     * @returns {RafGetParameter_parMinReportingCycle}
     */
    public static _from_object (_o: { [_K in keyof (RafGetParameter_parMinReportingCycle)]: (RafGetParameter_parMinReportingCycle)[_K] }): RafGetParameter_parMinReportingCycle {
        return new RafGetParameter_parMinReportingCycle(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RafGetParameter_parMinReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RafGetParameter_parMinReportingCycle: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RafGetParameter_parMinReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RafGetParameter_parMinReportingCycle: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RafGetParameter_parMinReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RafGetParameter_parMinReportingCycle: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RafGetParameter_parMinReportingCycle: $.ASN1Decoder<RafGetParameter_parMinReportingCycle> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafGetParameter_parMinReportingCycle
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafGetParameter_parMinReportingCycle (el: _Element): RafGetParameter_parMinReportingCycle {
    if (!_cached_decoder_for_RafGetParameter_parMinReportingCycle) { _cached_decoder_for_RafGetParameter_parMinReportingCycle = function (el: _Element): RafGetParameter_parMinReportingCycle {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RafGetParameter-parMinReportingCycle contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: IntPosShort;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_IntPosShort(sequence[1]);
    return new RafGetParameter_parMinReportingCycle(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RafGetParameter_parMinReportingCycle(el);
}

let _cached_encoder_for_RafGetParameter_parMinReportingCycle: $.ASN1Encoder<RafGetParameter_parMinReportingCycle> | null = null;

/**
 * @summary Encodes a(n) RafGetParameter_parMinReportingCycle into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafGetParameter_parMinReportingCycle, encoded as an ASN.1 Element.
 */
export
function _encode_RafGetParameter_parMinReportingCycle (value: RafGetParameter_parMinReportingCycle, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafGetParameter_parMinReportingCycle) { _cached_encoder_for_RafGetParameter_parMinReportingCycle = function (value: RafGetParameter_parMinReportingCycle, _elGetter: $.ASN1Encoder<RafGetParameter_parMinReportingCycle>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_IntPosShort(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RafGetParameter_parMinReportingCycle(value, elGetter);
}


/* eslint-enable */
