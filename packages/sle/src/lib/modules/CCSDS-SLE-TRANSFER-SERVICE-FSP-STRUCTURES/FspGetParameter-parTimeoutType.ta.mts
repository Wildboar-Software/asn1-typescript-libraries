/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterName, _encode_ParameterName, type ParameterName,
    ParameterName_timeoutType
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { _decode_FspGetParameter_parTimeoutType_parameterValue, _encode_FspGetParameter_parTimeoutType_parameterValue, type FspGetParameter_parTimeoutType_parameterValue } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parTimeoutType-parameterValue.ta.mjs";



/**
 * @summary FspGetParameter_parTimeoutType
 * @description
 * 
 * timeout-type: FOP behavior on timeout. Table 3-11 allows Alert or AD service
 * suspension. `generateAlert` is 0 and `suspendSequenceControlled` is 1.
 * Section 3.10.2.5 does not further define either behavior. Service management
 * sets the value. FSP-INVOKE-DIRECTIVE may also set it (table 3-1).
 * 
 * CCSDS 912.3-B-3, table 3-11 and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parTimeoutType ::= SEQUENCE
 *    {  parameterName     ParameterName (timeoutType)
 *    ,  parameterValue    INTEGER
 *       {  generateAlert              (0)
 *       ,  suspendSequenceControlled  (1)
 *       }
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parTimeoutType {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `timeoutType`, selecting timeout-type in table 3-11. CCSDS
     * 912.3-B-3, section 3.10.2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * Alert (`generateAlert`, 0) or AD service suspension
     * (`suspendSequenceControlled`, 1). Section 3.10.2.5 does not further
     * define either behavior. CCSDS 912.3-B-3, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: FspGetParameter_parTimeoutType_parameterValue;

    constructor (
        parameterName: ParameterName,
        parameterValue: FspGetParameter_parTimeoutType_parameterValue
    ) {
        if (parameterName !== ParameterName_timeoutType) {
            throw new ASN1Error("FspGetParameter_parTimeoutType.parameterName violates ParameterName (timeoutType)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parTimeoutType
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parTimeoutType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parTimeoutType`.
     * @returns {FspGetParameter_parTimeoutType}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parTimeoutType)]: (FspGetParameter_parTimeoutType)[_K] }): FspGetParameter_parTimeoutType {
        return new FspGetParameter_parTimeoutType(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parTimeoutType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parTimeoutType: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parTimeoutType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parTimeoutType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parTimeoutType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parTimeoutType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parTimeoutType: $.ASN1Decoder<FspGetParameter_parTimeoutType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parTimeoutType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parTimeoutType (el: _Element): FspGetParameter_parTimeoutType {
    if (!_cached_decoder_for_FspGetParameter_parTimeoutType) { _cached_decoder_for_FspGetParameter_parTimeoutType = function (el: _Element): FspGetParameter_parTimeoutType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parTimeoutType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: FspGetParameter_parTimeoutType_parameterValue;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_FspGetParameter_parTimeoutType_parameterValue(sequence[1]);
    return new FspGetParameter_parTimeoutType(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parTimeoutType(el);
}

let _cached_encoder_for_FspGetParameter_parTimeoutType: $.ASN1Encoder<FspGetParameter_parTimeoutType> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parTimeoutType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parTimeoutType, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parTimeoutType (value: FspGetParameter_parTimeoutType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parTimeoutType) { _cached_encoder_for_FspGetParameter_parTimeoutType = function (value: FspGetParameter_parTimeoutType, _elGetter: $.ASN1Encoder<FspGetParameter_parTimeoutType>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_FspGetParameter_parTimeoutType_parameterValue(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parTimeoutType(value, elGetter);
}


/* eslint-enable */
