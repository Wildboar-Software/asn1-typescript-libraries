/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_requestedControlWordType
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { RequestedControlWordTypeNumber, _decode_RequestedControlWordTypeNumber, _encode_RequestedControlWordTypeNumber } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RequestedControlWordTypeNumber.ta.mjs";



/**
 * @summary RocfGetParameter_parReqControlWordType
 * @description
 * 
 * Successful ROCF-GET-PARAMETER result for the requested control word type.
 * While the instance is in state 3 (active), this is the type from the most
 * recent ROCF-START. Otherwise it is the first element of the permitted
 * control-word-type set. The report uses the integer form. The telecommand VC
 * selected with a CLCW is a separate parameter.
 *
 * CCSDS 911.5-B-4, table 3-11 and section 3.4.2.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfGetParameter-parReqControlWordType ::= SEQUENCE
 *    {  parameterName                 ParameterName
 *                                        (requestedControlWordType)
 *    ,  parameterValue                RequestedControlWordTypeNumber
 *    }
 * ```
 * 
 * @class
 */
export
class RocfGetParameter_parReqControlWordType {
    /**
     * @summary `parameterName`.
     * @description
     * 
     * Fixed to requestedControlWordType. CCSDS 911.5-B-4, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * 
     * 0 delivers every control word, 1 delivers CLCWs, and 2 delivers control
     * word type 1. While the instance is active this is the most recent START
     * selection; otherwise it is the first permitted type.
     *
     * CCSDS 911.5-B-4, table 3-11 and section 3.4.2.8.
     * @public
     * @readonly
     */
    readonly parameterValue: RequestedControlWordTypeNumber;

    constructor (
        parameterName: ParameterName,
        parameterValue: RequestedControlWordTypeNumber
    ) {
        if (parameterName !== ParameterName_requestedControlWordType) {
            throw new ASN1Error("RocfGetParameter_parReqControlWordType.parameterName violates ParameterName (requestedControlWordType)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RocfGetParameter_parReqControlWordType
     * @description
     * 
     * This takes an `object` and converts it to a `RocfGetParameter_parReqControlWordType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfGetParameter_parReqControlWordType`.
     * @returns {RocfGetParameter_parReqControlWordType}
     */
    public static _from_object (_o: { [_K in keyof (RocfGetParameter_parReqControlWordType)]: (RocfGetParameter_parReqControlWordType)[_K] }): RocfGetParameter_parReqControlWordType {
        return new RocfGetParameter_parReqControlWordType(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RocfGetParameter_parReqControlWordType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfGetParameter_parReqControlWordType: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RocfGetParameter_parReqControlWordType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfGetParameter_parReqControlWordType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfGetParameter_parReqControlWordType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfGetParameter_parReqControlWordType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfGetParameter_parReqControlWordType: $.ASN1Decoder<RocfGetParameter_parReqControlWordType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfGetParameter_parReqControlWordType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfGetParameter_parReqControlWordType (el: _Element): RocfGetParameter_parReqControlWordType {
    if (!_cached_decoder_for_RocfGetParameter_parReqControlWordType) { _cached_decoder_for_RocfGetParameter_parReqControlWordType = function (el: _Element): RocfGetParameter_parReqControlWordType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RocfGetParameter-parReqControlWordType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: RequestedControlWordTypeNumber;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_RequestedControlWordTypeNumber(sequence[1]);
    return new RocfGetParameter_parReqControlWordType(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RocfGetParameter_parReqControlWordType(el);
}

let _cached_encoder_for_RocfGetParameter_parReqControlWordType: $.ASN1Encoder<RocfGetParameter_parReqControlWordType> | null = null;

/**
 * @summary Encodes a(n) RocfGetParameter_parReqControlWordType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfGetParameter_parReqControlWordType, encoded as an ASN.1 Element.
 */
export
function _encode_RocfGetParameter_parReqControlWordType (value: RocfGetParameter_parReqControlWordType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfGetParameter_parReqControlWordType) { _cached_encoder_for_RocfGetParameter_parReqControlWordType = function (value: RocfGetParameter_parReqControlWordType, _elGetter: $.ASN1Encoder<RocfGetParameter_parReqControlWordType>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_RequestedControlWordTypeNumber(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfGetParameter_parReqControlWordType(value, elGetter);
}


/* eslint-enable */
