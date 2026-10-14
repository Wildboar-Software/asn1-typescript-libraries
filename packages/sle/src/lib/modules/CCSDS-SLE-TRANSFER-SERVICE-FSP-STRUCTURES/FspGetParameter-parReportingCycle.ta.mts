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
import { CurrentReportingCycle, _decode_CurrentReportingCycle, _encode_CurrentReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/CurrentReportingCycle.ta.mjs";



/**
 * @summary FspGetParameter_parReportingCycle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parReportingCycle ::= SEQUENCE
 *    {  parameterName     ParameterName (reportingCycle)
 *    ,  parameterValue    CurrentReportingCycle
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parReportingCycle {
    /**
     * @summary `parameterName`.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @public
     * @readonly
     */
    readonly parameterValue: CurrentReportingCycle;

    constructor (
        parameterName: ParameterName,
        parameterValue: CurrentReportingCycle
    ) {
        if (parameterName !== ParameterName_reportingCycle) {
            throw new ASN1Error("FspGetParameter_parReportingCycle.parameterName violates ParameterName (reportingCycle)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parReportingCycle
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parReportingCycle`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parReportingCycle`.
     * @returns {FspGetParameter_parReportingCycle}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parReportingCycle)]: (FspGetParameter_parReportingCycle)[_K] }): FspGetParameter_parReportingCycle {
        return new FspGetParameter_parReportingCycle(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parReportingCycle: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parReportingCycle: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parReportingCycle: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parReportingCycle: $.ASN1Decoder<FspGetParameter_parReportingCycle> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parReportingCycle
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parReportingCycle (el: _Element): FspGetParameter_parReportingCycle {
    if (!_cached_decoder_for_FspGetParameter_parReportingCycle) { _cached_decoder_for_FspGetParameter_parReportingCycle = function (el: _Element): FspGetParameter_parReportingCycle {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parReportingCycle contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: CurrentReportingCycle;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_CurrentReportingCycle(sequence[1]);
    return new FspGetParameter_parReportingCycle(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parReportingCycle(el);
}

let _cached_encoder_for_FspGetParameter_parReportingCycle: $.ASN1Encoder<FspGetParameter_parReportingCycle> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parReportingCycle into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parReportingCycle, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parReportingCycle (value: FspGetParameter_parReportingCycle, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parReportingCycle) { _cached_encoder_for_FspGetParameter_parReportingCycle = function (value: FspGetParameter_parReportingCycle, _elGetter: $.ASN1Encoder<FspGetParameter_parReportingCycle>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_CurrentReportingCycle(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parReportingCycle(value, elGetter);
}


/* eslint-enable */
