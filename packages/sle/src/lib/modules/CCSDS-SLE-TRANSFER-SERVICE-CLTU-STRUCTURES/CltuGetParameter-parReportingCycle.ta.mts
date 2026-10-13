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
import { CurrentReportingCycle, _decode_CurrentReportingCycle, _encode_CurrentReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CurrentReportingCycle.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary CltuGetParameter_parReportingCycle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parReportingCycle ::= SEQUENCE
 *    {  parameterName                    ParameterName (reportingCycle)
 *    ,  parameterValue                   CurrentReportingCycle
 *    }
 * ```
 * 
 * @class
 */
export
class CltuGetParameter_parReportingCycle {
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
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_reportingCycle)])) {
            throw new ASN1Error("CltuGetParameter_parReportingCycle.parameterName violates ParameterName (reportingCycle)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a CltuGetParameter_parReportingCycle
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameter_parReportingCycle`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameter_parReportingCycle`.
     * @returns {CltuGetParameter_parReportingCycle}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameter_parReportingCycle)]: (CltuGetParameter_parReportingCycle)[_K] }): CltuGetParameter_parReportingCycle {
        return new CltuGetParameter_parReportingCycle(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameter_parReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameter_parReportingCycle: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameter_parReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameter_parReportingCycle: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameter_parReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameter_parReportingCycle: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameter_parReportingCycle: $.ASN1Decoder<CltuGetParameter_parReportingCycle> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parReportingCycle
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parReportingCycle (el: _Element): CltuGetParameter_parReportingCycle {
    if (!_cached_decoder_for_CltuGetParameter_parReportingCycle) { _cached_decoder_for_CltuGetParameter_parReportingCycle = function (el: _Element): CltuGetParameter_parReportingCycle {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuGetParameter-parReportingCycle contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: CurrentReportingCycle;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_CurrentReportingCycle(sequence[1]);
    return new CltuGetParameter_parReportingCycle(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_CltuGetParameter_parReportingCycle(el);
}

let _cached_encoder_for_CltuGetParameter_parReportingCycle: $.ASN1Encoder<CltuGetParameter_parReportingCycle> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parReportingCycle into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parReportingCycle, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parReportingCycle (value: CltuGetParameter_parReportingCycle, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parReportingCycle) { _cached_encoder_for_CltuGetParameter_parReportingCycle = function (value: CltuGetParameter_parReportingCycle, elGetter: $.ASN1Encoder<CltuGetParameter_parReportingCycle>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_CurrentReportingCycle(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameter_parReportingCycle(value, elGetter);
}


/* eslint-enable */
