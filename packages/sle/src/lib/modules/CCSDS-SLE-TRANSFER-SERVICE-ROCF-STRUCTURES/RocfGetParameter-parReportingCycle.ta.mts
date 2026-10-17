/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_reportingCycle
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { CurrentReportingCycle, _decode_CurrentReportingCycle, _encode_CurrentReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/CurrentReportingCycle.ta.mjs";



/**
 * @summary RocfGetParameter_parReportingCycle
 * @description
 * 
 * Successful ROCF-GET-PARAMETER result for the current reporting cycle. Until
 * the user completes a periodic ROCF-SCHEDULE-STATUS-REPORT, and whenever
 * cyclic reporting is off, the value is null. Otherwise it is the seconds
 * between ROCF-STATUS-REPORT invocations.
 *
 * CCSDS 911.5-B-4, section 3.8 and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfGetParameter-parReportingCycle ::= SEQUENCE
 *    {  parameterName                 ParameterName (reportingCycle)
 *    ,  parameterValue                CurrentReportingCycle
 *    }
 * ```
 * 
 * @class
 */
export
class RocfGetParameter_parReportingCycle {
    /**
     * @summary `parameterName`.
     * @description
     * 
     * Fixed to reportingCycle. CCSDS 911.5-B-4, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * 
     * periodicReportingOff means cyclic status reports are off.
     * periodicReportingOn is the interval in seconds. An immediate status
     * report, and a stop request, both leave cyclic reporting off. The schedule
     * operation is rejected for an offline instance.
     *
     * CCSDS 911.5-B-4, sections 3.8.1 through 3.8.3 and table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: CurrentReportingCycle;

    constructor (
        parameterName: ParameterName,
        parameterValue: CurrentReportingCycle
    ) {
        if (parameterName !== ParameterName_reportingCycle) {
            throw new ASN1Error("RocfGetParameter_parReportingCycle.parameterName violates ParameterName (reportingCycle)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RocfGetParameter_parReportingCycle
     * @description
     * 
     * This takes an `object` and converts it to a `RocfGetParameter_parReportingCycle`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfGetParameter_parReportingCycle`.
     * @returns {RocfGetParameter_parReportingCycle}
     */
    public static _from_object (_o: { [_K in keyof (RocfGetParameter_parReportingCycle)]: (RocfGetParameter_parReportingCycle)[_K] }): RocfGetParameter_parReportingCycle {
        return new RocfGetParameter_parReportingCycle(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RocfGetParameter_parReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfGetParameter_parReportingCycle: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of RocfGetParameter_parReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfGetParameter_parReportingCycle: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfGetParameter_parReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfGetParameter_parReportingCycle: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfGetParameter_parReportingCycle: $.ASN1Decoder<RocfGetParameter_parReportingCycle> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfGetParameter_parReportingCycle
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfGetParameter_parReportingCycle (el: _Element): RocfGetParameter_parReportingCycle {
    if (!_cached_decoder_for_RocfGetParameter_parReportingCycle) { _cached_decoder_for_RocfGetParameter_parReportingCycle = function (el: _Element): RocfGetParameter_parReportingCycle {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RocfGetParameter-parReportingCycle contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: CurrentReportingCycle;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_CurrentReportingCycle(sequence[1]);
    return new RocfGetParameter_parReportingCycle(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RocfGetParameter_parReportingCycle(el);
}

let _cached_encoder_for_RocfGetParameter_parReportingCycle: $.ASN1Encoder<RocfGetParameter_parReportingCycle> | null = null;

/**
 * @summary Encodes a(n) RocfGetParameter_parReportingCycle into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfGetParameter_parReportingCycle, encoded as an ASN.1 Element.
 */
export
function _encode_RocfGetParameter_parReportingCycle (value: RocfGetParameter_parReportingCycle, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfGetParameter_parReportingCycle) { _cached_encoder_for_RocfGetParameter_parReportingCycle = function (value: RocfGetParameter_parReportingCycle, _elGetter: $.ASN1Encoder<RocfGetParameter_parReportingCycle>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_CurrentReportingCycle(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfGetParameter_parReportingCycle(value, elGetter);
}


/* eslint-enable */
