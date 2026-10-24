/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_throwEventOperation
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { FspGetParameter_parThrowEventOperation_parameterValue, _decode_FspGetParameter_parThrowEventOperation_parameterValue, _encode_FspGetParameter_parThrowEventOperation_parameterValue } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parThrowEventOperation-parameterValue.ta.mjs";



/**
 * @summary FspGetParameter_parThrowEventOperation
 * @description
 * 
 * throw-event-operation: enabled when this service instance is authorized to
 * invoke FSP-THROW-EVENT. disabled withholds that authorization. Service
 * management sets it. Table 3-1 names the managed parameter
 * throwing-of-events-enabled.
 * 
 * enabled is 0 and disabled is 1 (annex A2.5).
 * 
 * CCSDS 912.3-B-3, table 3-11, table 3-1, and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parThrowEventOperation ::= SEQUENCE
 *    {  parameterName     ParameterName (throwEventOperation)
 *    ,  parameterValue    INTEGER
 *       {  enabled           (0)
 *       ,  disabled          (1)
 *       }
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parThrowEventOperation {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `throwEventOperation`, selecting throw-event-operation in table
     * 3-11. CCSDS 912.3-B-3, section 3.10.2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * enabled (0) authorizes FSP-THROW-EVENT on this service instance. disabled
     * (1) withholds that authorization. CCSDS 912.3-B-3, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: FspGetParameter_parThrowEventOperation_parameterValue;

    constructor (
        parameterName: ParameterName,
        parameterValue: FspGetParameter_parThrowEventOperation_parameterValue
    ) {
        if (parameterName !== ParameterName_throwEventOperation) {
            throw new ASN1Error("FspGetParameter_parThrowEventOperation.parameterName violates ParameterName (throwEventOperation)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parThrowEventOperation
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parThrowEventOperation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parThrowEventOperation`.
     * @returns {FspGetParameter_parThrowEventOperation}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parThrowEventOperation)]: (FspGetParameter_parThrowEventOperation)[_K] }): FspGetParameter_parThrowEventOperation {
        return new FspGetParameter_parThrowEventOperation(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parThrowEventOperation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parThrowEventOperation: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parThrowEventOperation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parThrowEventOperation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parThrowEventOperation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parThrowEventOperation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parThrowEventOperation: $.ASN1Decoder<FspGetParameter_parThrowEventOperation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parThrowEventOperation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parThrowEventOperation (el: _Element): FspGetParameter_parThrowEventOperation {
    if (!_cached_decoder_for_FspGetParameter_parThrowEventOperation) { _cached_decoder_for_FspGetParameter_parThrowEventOperation = function (el: _Element): FspGetParameter_parThrowEventOperation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parThrowEventOperation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: FspGetParameter_parThrowEventOperation_parameterValue;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_FspGetParameter_parThrowEventOperation_parameterValue(sequence[1]);
    return new FspGetParameter_parThrowEventOperation(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parThrowEventOperation(el);
}

let _cached_encoder_for_FspGetParameter_parThrowEventOperation: $.ASN1Encoder<FspGetParameter_parThrowEventOperation> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parThrowEventOperation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parThrowEventOperation, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parThrowEventOperation (value: FspGetParameter_parThrowEventOperation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parThrowEventOperation) { _cached_encoder_for_FspGetParameter_parThrowEventOperation = function (value: FspGetParameter_parThrowEventOperation, _elGetter: $.ASN1Encoder<FspGetParameter_parThrowEventOperation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_FspGetParameter_parThrowEventOperation_parameterValue(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parThrowEventOperation(value, elGetter);
}


/* eslint-enable */
