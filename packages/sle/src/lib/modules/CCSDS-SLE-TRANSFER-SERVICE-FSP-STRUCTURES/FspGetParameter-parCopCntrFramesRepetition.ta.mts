/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_copCntrFramesRepetition
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";



/**
 * @summary FspGetParameter_parCopCntrFramesRepetition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parCopCntrFramesRepetition ::= SEQUENCE
 *    {  parameterName     ParameterName  (copCntrFramesRepetition)
 *    ,  parameterValue    IntPosShort
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parCopCntrFramesRepetition {
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
    readonly parameterValue: IntPosShort;

    constructor (
        parameterName: ParameterName,
        parameterValue: IntPosShort
    ) {
        if (parameterName !== ParameterName_copCntrFramesRepetition) {
            throw new ASN1Error("FspGetParameter_parCopCntrFramesRepetition.parameterName violates ParameterName (copCntrFramesRepetition)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parCopCntrFramesRepetition
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parCopCntrFramesRepetition`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parCopCntrFramesRepetition`.
     * @returns {FspGetParameter_parCopCntrFramesRepetition}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parCopCntrFramesRepetition)]: (FspGetParameter_parCopCntrFramesRepetition)[_K] }): FspGetParameter_parCopCntrFramesRepetition {
        return new FspGetParameter_parCopCntrFramesRepetition(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parCopCntrFramesRepetition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parCopCntrFramesRepetition: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parCopCntrFramesRepetition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parCopCntrFramesRepetition: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parCopCntrFramesRepetition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parCopCntrFramesRepetition: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parCopCntrFramesRepetition: $.ASN1Decoder<FspGetParameter_parCopCntrFramesRepetition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parCopCntrFramesRepetition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parCopCntrFramesRepetition (el: _Element): FspGetParameter_parCopCntrFramesRepetition {
    if (!_cached_decoder_for_FspGetParameter_parCopCntrFramesRepetition) { _cached_decoder_for_FspGetParameter_parCopCntrFramesRepetition = function (el: _Element): FspGetParameter_parCopCntrFramesRepetition {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parCopCntrFramesRepetition contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: IntPosShort;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_IntPosShort(sequence[1]);
    return new FspGetParameter_parCopCntrFramesRepetition(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parCopCntrFramesRepetition(el);
}

let _cached_encoder_for_FspGetParameter_parCopCntrFramesRepetition: $.ASN1Encoder<FspGetParameter_parCopCntrFramesRepetition> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parCopCntrFramesRepetition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parCopCntrFramesRepetition, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parCopCntrFramesRepetition (value: FspGetParameter_parCopCntrFramesRepetition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parCopCntrFramesRepetition) { _cached_encoder_for_FspGetParameter_parCopCntrFramesRepetition = function (value: FspGetParameter_parCopCntrFramesRepetition, _elGetter: $.ASN1Encoder<FspGetParameter_parCopCntrFramesRepetition>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_IntPosShort(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parCopCntrFramesRepetition(value, elGetter);
}


/* eslint-enable */
