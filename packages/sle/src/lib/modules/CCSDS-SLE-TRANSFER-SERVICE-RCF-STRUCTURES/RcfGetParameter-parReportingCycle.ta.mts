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
import { CurrentReportingCycle, _decode_CurrentReportingCycle, _encode_CurrentReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/CurrentReportingCycle.ta.mjs";



/**
 * @summary RcfGetParameter_parReportingCycle
 * @description
 *
 * Returned value of reporting-cycle. Null while cyclic status reporting is
 * off, which is the state after RCF-BIND and until a successful
 * RCF-SCHEDULE-STATUS-REPORT asks for periodic reports. Otherwise the number
 * of seconds between successive RCF-STATUS-REPORT invocations.
 *
 * CCSDS 911.2-B-4, section 3.8 and table 3-11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfGetParameter-parReportingCycle ::= SEQUENCE
 *     { parameterName                 ParameterName (reportingCycle)
 *     , parameterValue                CurrentReportingCycle
 *     }
 * ```
 * 
 * @class
 */
export
class RcfGetParameter_parReportingCycle {
    /**
     * @summary `parameterName`.
     * @description
     *
     * Identifies this value as reporting-cycle (reportingCycle).
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
     * Current interval between status reports, or an indication that cyclic
     * reporting is off.
     *
     * CCSDS 911.2-B-4, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: CurrentReportingCycle;

    constructor (
        parameterName: ParameterName,
        parameterValue: CurrentReportingCycle
    ) {
        if (parameterName !== ParameterName_reportingCycle) {
            throw new ASN1Error("RcfGetParameter_parReportingCycle.parameterName violates ParameterName (reportingCycle)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RcfGetParameter_parReportingCycle
     * @description
     * 
     * This takes an `object` and converts it to a
     * `RcfGetParameter_parReportingCycle`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RcfGetParameter_parReportingCycle`.
     * @returns {RcfGetParameter_parReportingCycle}
     */
    public static _from_object (_o: { [_K in keyof (RcfGetParameter_parReportingCycle)]: (RcfGetParameter_parReportingCycle)[_K] }): RcfGetParameter_parReportingCycle {
        return new RcfGetParameter_parReportingCycle(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RcfGetParameter_parReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RcfGetParameter_parReportingCycle: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of RcfGetParameter_parReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RcfGetParameter_parReportingCycle: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RcfGetParameter_parReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RcfGetParameter_parReportingCycle: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RcfGetParameter_parReportingCycle: $.ASN1Decoder<RcfGetParameter_parReportingCycle> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfGetParameter_parReportingCycle
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfGetParameter_parReportingCycle (el: _Element): RcfGetParameter_parReportingCycle {
    if (!_cached_decoder_for_RcfGetParameter_parReportingCycle) { _cached_decoder_for_RcfGetParameter_parReportingCycle = function (el: _Element): RcfGetParameter_parReportingCycle {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RcfGetParameter-parReportingCycle contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: CurrentReportingCycle;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_CurrentReportingCycle(sequence[1]);
    return new RcfGetParameter_parReportingCycle(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RcfGetParameter_parReportingCycle(el);
}

let _cached_encoder_for_RcfGetParameter_parReportingCycle: $.ASN1Encoder<RcfGetParameter_parReportingCycle> | null = null;

/**
 * @summary Encodes a(n) RcfGetParameter_parReportingCycle into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfGetParameter_parReportingCycle, encoded as an ASN.1 Element.
 */
export
function _encode_RcfGetParameter_parReportingCycle (value: RcfGetParameter_parReportingCycle, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfGetParameter_parReportingCycle) { _cached_encoder_for_RcfGetParameter_parReportingCycle = function (value: RcfGetParameter_parReportingCycle, _elGetter: $.ASN1Encoder<RcfGetParameter_parReportingCycle>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_CurrentReportingCycle(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RcfGetParameter_parReportingCycle(value, elGetter);
}


/* eslint-enable */
