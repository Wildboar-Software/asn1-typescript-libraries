/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_directiveInvocation
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { FspGetParameter_parDirectiveInvoc_parameterValue, _decode_FspGetParameter_parDirectiveInvoc_parameterValue, _encode_FspGetParameter_parDirectiveInvoc_parameterValue } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parDirectiveInvoc-parameterValue.ta.mjs";



/**
 * @summary FspGetParameter_parDirectiveInvoc
 * @description
 * 
 * directive-invocation-enabled: enabled when this service instance is
 * authorized to invoke FSP-INVOKE-DIRECTIVE. disabled withholds that
 * authorization. Service management sets it.
 * 
 * enabled is 0 and disabled is 1 (annex A2.5).
 * 
 * CCSDS 912.3-B-3, table 3-11, section 3.1.9, and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parDirectiveInvoc ::= SEQUENCE
 *    {  parameterName     ParameterName (directiveInvocation)
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
class FspGetParameter_parDirectiveInvoc {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `directiveInvocation`, selecting directive-invocation-enabled in
     * table 3-11. CCSDS 912.3-B-3, section 3.10.2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * enabled (0) authorizes FSP-INVOKE-DIRECTIVE on this service instance.
     * disabled (1) withholds that authorization. CCSDS 912.3-B-3, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: FspGetParameter_parDirectiveInvoc_parameterValue;

    constructor (
        parameterName: ParameterName,
        parameterValue: FspGetParameter_parDirectiveInvoc_parameterValue
    ) {
        if (parameterName !== ParameterName_directiveInvocation) {
            throw new ASN1Error("FspGetParameter_parDirectiveInvoc.parameterName violates ParameterName (directiveInvocation)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parDirectiveInvoc
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parDirectiveInvoc`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parDirectiveInvoc`.
     * @returns {FspGetParameter_parDirectiveInvoc}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parDirectiveInvoc)]: (FspGetParameter_parDirectiveInvoc)[_K] }): FspGetParameter_parDirectiveInvoc {
        return new FspGetParameter_parDirectiveInvoc(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parDirectiveInvoc
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parDirectiveInvoc: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parDirectiveInvoc
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parDirectiveInvoc: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parDirectiveInvoc
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parDirectiveInvoc: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parDirectiveInvoc: $.ASN1Decoder<FspGetParameter_parDirectiveInvoc> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parDirectiveInvoc
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parDirectiveInvoc (el: _Element): FspGetParameter_parDirectiveInvoc {
    if (!_cached_decoder_for_FspGetParameter_parDirectiveInvoc) { _cached_decoder_for_FspGetParameter_parDirectiveInvoc = function (el: _Element): FspGetParameter_parDirectiveInvoc {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parDirectiveInvoc contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: FspGetParameter_parDirectiveInvoc_parameterValue;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_FspGetParameter_parDirectiveInvoc_parameterValue(sequence[1]);
    return new FspGetParameter_parDirectiveInvoc(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parDirectiveInvoc(el);
}

let _cached_encoder_for_FspGetParameter_parDirectiveInvoc: $.ASN1Encoder<FspGetParameter_parDirectiveInvoc> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parDirectiveInvoc into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parDirectiveInvoc, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parDirectiveInvoc (value: FspGetParameter_parDirectiveInvoc, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parDirectiveInvoc) { _cached_encoder_for_FspGetParameter_parDirectiveInvoc = function (value: FspGetParameter_parDirectiveInvoc, _elGetter: $.ASN1Encoder<FspGetParameter_parDirectiveInvoc>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_FspGetParameter_parDirectiveInvoc_parameterValue(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parDirectiveInvoc(value, elGetter);
}


/* eslint-enable */
