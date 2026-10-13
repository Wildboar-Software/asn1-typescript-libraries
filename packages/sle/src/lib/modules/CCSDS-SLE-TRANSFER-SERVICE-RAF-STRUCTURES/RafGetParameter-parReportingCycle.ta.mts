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
import { CurrentReportingCycle, _decode_CurrentReportingCycle, _encode_CurrentReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/CurrentReportingCycle.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary RafGetParameter_parReportingCycle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafGetParameter-parReportingCycle ::= SEQUENCE
 *     {   parameterName                ParameterName (reportingCycle)
 *     ,   parameterValue               CurrentReportingCycle
 *     }
 * ```
 * 
 * @class
 */
export
class RafGetParameter_parReportingCycle {
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
            throw new ASN1Error("RafGetParameter_parReportingCycle.parameterName violates ParameterName (reportingCycle)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RafGetParameter_parReportingCycle
     * @description
     * 
     * This takes an `object` and converts it to a `RafGetParameter_parReportingCycle`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RafGetParameter_parReportingCycle`.
     * @returns {RafGetParameter_parReportingCycle}
     */
    public static _from_object (_o: { [_K in keyof (RafGetParameter_parReportingCycle)]: (RafGetParameter_parReportingCycle)[_K] }): RafGetParameter_parReportingCycle {
        return new RafGetParameter_parReportingCycle(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RafGetParameter_parReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RafGetParameter_parReportingCycle: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of RafGetParameter_parReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RafGetParameter_parReportingCycle: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RafGetParameter_parReportingCycle
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RafGetParameter_parReportingCycle: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RafGetParameter_parReportingCycle: $.ASN1Decoder<RafGetParameter_parReportingCycle> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafGetParameter_parReportingCycle
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafGetParameter_parReportingCycle (el: _Element): RafGetParameter_parReportingCycle {
    if (!_cached_decoder_for_RafGetParameter_parReportingCycle) { _cached_decoder_for_RafGetParameter_parReportingCycle = function (el: _Element): RafGetParameter_parReportingCycle {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RafGetParameter-parReportingCycle contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: CurrentReportingCycle;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_CurrentReportingCycle(sequence[1]);
    return new RafGetParameter_parReportingCycle(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RafGetParameter_parReportingCycle(el);
}

let _cached_encoder_for_RafGetParameter_parReportingCycle: $.ASN1Encoder<RafGetParameter_parReportingCycle> | null = null;

/**
 * @summary Encodes a(n) RafGetParameter_parReportingCycle into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafGetParameter_parReportingCycle, encoded as an ASN.1 Element.
 */
export
function _encode_RafGetParameter_parReportingCycle (value: RafGetParameter_parReportingCycle, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafGetParameter_parReportingCycle) { _cached_encoder_for_RafGetParameter_parReportingCycle = function (value: RafGetParameter_parReportingCycle, elGetter: $.ASN1Encoder<RafGetParameter_parReportingCycle>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_CurrentReportingCycle(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RafGetParameter_parReportingCycle(value, elGetter);
}


/* eslint-enable */
