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
 * @summary RcfGetParameter_parMinReportingCycle
 * @description
 *
 * Returned value of minimum-reporting-cycle, in seconds. Service management
 * sets the shortest reporting cycle the user may put in an
 * RCF-SCHEDULE-STATUS-REPORT invocation. A shorter cycle is rejected with
 * invalid reporting cycle. Annex A bounds this value by 1 to 600. The
 * reporting cycle carried by that operation is ReportingCycle, which annex
 * A2.3 bounds by 2 to 600.
 *
 * CCSDS 911.2-B-4, table 3-11, sections 3.8.2.8 and 3.1.3.2, and annex A2.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfGetParameter-parMinReportingCycle ::= SEQUENCE
 *     { parameterName                 ParameterName (minReportingCycle)
 *     , parameterValue                IntPosShort (1 .. 600)
 *     }
 * ```
 * 
 * @class
 */
export
class RcfGetParameter_parMinReportingCycle {
    /**
     * @summary `parameterName`.
     * @description
     *
     * Identifies this value as minimum-reporting-cycle (minReportingCycle).
     *
     * CCSDS 911.2-B-4, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     *
     * Shortest reporting cycle, in seconds, that the user may request for
     * periodic status reports.
     *
     * CCSDS 911.2-B-4, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: IntPosShort;

    constructor (
        parameterName: ParameterName,
        parameterValue: IntPosShort
    ) {
        if (parameterName !== ParameterName_minReportingCycle) {
            throw new ASN1Error("RcfGetParameter_parMinReportingCycle.parameterName violates ParameterName (minReportingCycle)");
        }
        if (!integerInRange(parameterValue, 1, 600)) {
            throw new ASN1OverflowError("RcfGetParameter_parMinReportingCycle.parameterValue violates INTEGER (1..600)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RcfGetParameter_parMinReportingCycle
     * @description
     * 
     * This takes an `object` and converts it to a
     * `RcfGetParameter_parMinReportingCycle`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RcfGetParameter_parMinReportingCycle`.
     * @returns {RcfGetParameter_parMinReportingCycle}
     */
    public static _from_object (_o: { [_K in keyof (RcfGetParameter_parMinReportingCycle)]: (RcfGetParameter_parMinReportingCycle)[_K] }): RcfGetParameter_parMinReportingCycle {
        return new RcfGetParameter_parMinReportingCycle(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RcfGetParameter_parMinReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RcfGetParameter_parMinReportingCycle: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RcfGetParameter_parMinReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RcfGetParameter_parMinReportingCycle: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RcfGetParameter_parMinReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RcfGetParameter_parMinReportingCycle: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RcfGetParameter_parMinReportingCycle: $.ASN1Decoder<RcfGetParameter_parMinReportingCycle> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfGetParameter_parMinReportingCycle
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfGetParameter_parMinReportingCycle (el: _Element): RcfGetParameter_parMinReportingCycle {
    if (!_cached_decoder_for_RcfGetParameter_parMinReportingCycle) { _cached_decoder_for_RcfGetParameter_parMinReportingCycle = function (el: _Element): RcfGetParameter_parMinReportingCycle {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RcfGetParameter-parMinReportingCycle contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: IntPosShort;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_IntPosShort(sequence[1]);
    return new RcfGetParameter_parMinReportingCycle(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RcfGetParameter_parMinReportingCycle(el);
}

let _cached_encoder_for_RcfGetParameter_parMinReportingCycle: $.ASN1Encoder<RcfGetParameter_parMinReportingCycle> | null = null;

/**
 * @summary Encodes a(n) RcfGetParameter_parMinReportingCycle into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfGetParameter_parMinReportingCycle, encoded as an ASN.1 Element.
 */
export
function _encode_RcfGetParameter_parMinReportingCycle (value: RcfGetParameter_parMinReportingCycle, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfGetParameter_parMinReportingCycle) { _cached_encoder_for_RcfGetParameter_parMinReportingCycle = function (value: RcfGetParameter_parMinReportingCycle, _elGetter: $.ASN1Encoder<RcfGetParameter_parMinReportingCycle>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_IntPosShort(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RcfGetParameter_parMinReportingCycle(value, elGetter);
}


/* eslint-enable */
