/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterName, _encode_ParameterName, ParameterName,
    ParameterName_directiveInvocationOnline
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { _decode_FspGetParameter_parDirInvocOnl_parameterValue, _encode_FspGetParameter_parDirInvocOnl_parameterValue, FspGetParameter_parDirInvocOnl_parameterValue } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parDirInvocOnl-parameterValue.ta.mjs";



/**
 * @summary FspGetParameter_parDirInvocOnl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parDirInvocOnl ::= SEQUENCE
 *    {  parameterName     ParameterName (directiveInvocationOnline)
 *    ,  parameterValue    INTEGER
 *       {  yes               (0)
 *       ,  no                (1)
 *       }
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parDirInvocOnl {
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
    readonly parameterValue: FspGetParameter_parDirInvocOnl_parameterValue;

    constructor (
        parameterName: ParameterName,
        parameterValue: FspGetParameter_parDirInvocOnl_parameterValue
    ) {
        if (parameterName !== ParameterName_directiveInvocationOnline) {
            throw new ASN1Error("FspGetParameter_parDirInvocOnl.parameterName violates ParameterName (directiveInvocationOnline)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parDirInvocOnl
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parDirInvocOnl`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parDirInvocOnl`.
     * @returns {FspGetParameter_parDirInvocOnl}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parDirInvocOnl)]: (FspGetParameter_parDirInvocOnl)[_K] }): FspGetParameter_parDirInvocOnl {
        return new FspGetParameter_parDirInvocOnl(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parDirInvocOnl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parDirInvocOnl: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parDirInvocOnl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parDirInvocOnl: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parDirInvocOnl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parDirInvocOnl: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parDirInvocOnl: $.ASN1Decoder<FspGetParameter_parDirInvocOnl> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parDirInvocOnl
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parDirInvocOnl (el: _Element): FspGetParameter_parDirInvocOnl {
    if (!_cached_decoder_for_FspGetParameter_parDirInvocOnl) { _cached_decoder_for_FspGetParameter_parDirInvocOnl = function (el: _Element): FspGetParameter_parDirInvocOnl {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parDirInvocOnl contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: FspGetParameter_parDirInvocOnl_parameterValue;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_FspGetParameter_parDirInvocOnl_parameterValue(sequence[1]);
    return new FspGetParameter_parDirInvocOnl(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parDirInvocOnl(el);
}

let _cached_encoder_for_FspGetParameter_parDirInvocOnl: $.ASN1Encoder<FspGetParameter_parDirInvocOnl> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parDirInvocOnl into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parDirInvocOnl, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parDirInvocOnl (value: FspGetParameter_parDirInvocOnl, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parDirInvocOnl) { _cached_encoder_for_FspGetParameter_parDirInvocOnl = function (value: FspGetParameter_parDirInvocOnl, _elGetter: $.ASN1Encoder<FspGetParameter_parDirInvocOnl>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_FspGetParameter_parDirInvocOnl_parameterValue(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parDirInvocOnl(value, elGetter);
}


/* eslint-enable */
