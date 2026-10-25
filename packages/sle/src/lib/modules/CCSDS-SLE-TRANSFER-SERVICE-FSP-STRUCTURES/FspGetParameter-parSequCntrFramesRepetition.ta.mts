/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_sequCntrFramesRepetition
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { type IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";



/**
 * @summary FspGetParameter_parSequCntrFramesRepetition
 * @description
 * 
 * sequence-controlled-frames-repetition: how many times an AD frame on this VC
 * is passed to the Forward CLTU Generation FG. Service management sets it. A BD
 * frame is passed once (annex B5.3).
 * 
 * Annex A2.1 types the value as `IntPosShort` (1 to 65535). When frame
 * repetition is unsupported, the value is 1 (annex B5.4). It must not exceed
 * `repetition-limit` (annex B5.5). Section 3.10 does not define
 * `repetition-limit`.
 * 
 * CCSDS 912.3-B-3, table 3-11, table 3-1, annex A2.1, and annex B5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parSequCntrFramesRepetition ::= SEQUENCE
 *    {  parameterName     ParameterName (sequCntrFramesRepetition)
 *    ,  parameterValue    IntPosShort
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parSequCntrFramesRepetition {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `sequCntrFramesRepetition`, selecting
     * sequence-controlled-frames-repetition in table 3-11. CCSDS 912.3-B-3,
     * section 3.10.2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * Repetitions of each AD frame passed to the Forward CLTU Generation FG.
     * Range 1 to 65535. The value is 1 when frame repetition is unsupported,
     * and it must not exceed `repetition-limit`. CCSDS 912.3-B-3, table 3-11,
     * annex A2.1, and annex B5.
     * @public
     * @readonly
     */
    readonly parameterValue: IntPosShort;

    constructor (
        parameterName: ParameterName,
        parameterValue: IntPosShort
    ) {
        if (parameterName !== ParameterName_sequCntrFramesRepetition) {
            throw new ASN1Error("FspGetParameter_parSequCntrFramesRepetition.parameterName violates ParameterName (sequCntrFramesRepetition)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parSequCntrFramesRepetition
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parSequCntrFramesRepetition`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parSequCntrFramesRepetition`.
     * @returns {FspGetParameter_parSequCntrFramesRepetition}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parSequCntrFramesRepetition)]: (FspGetParameter_parSequCntrFramesRepetition)[_K] }): FspGetParameter_parSequCntrFramesRepetition {
        return new FspGetParameter_parSequCntrFramesRepetition(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parSequCntrFramesRepetition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parSequCntrFramesRepetition: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parSequCntrFramesRepetition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parSequCntrFramesRepetition: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parSequCntrFramesRepetition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parSequCntrFramesRepetition: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parSequCntrFramesRepetition: $.ASN1Decoder<FspGetParameter_parSequCntrFramesRepetition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parSequCntrFramesRepetition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parSequCntrFramesRepetition (el: _Element): FspGetParameter_parSequCntrFramesRepetition {
    if (!_cached_decoder_for_FspGetParameter_parSequCntrFramesRepetition) { _cached_decoder_for_FspGetParameter_parSequCntrFramesRepetition = function (el: _Element): FspGetParameter_parSequCntrFramesRepetition {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parSequCntrFramesRepetition contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: IntPosShort;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_IntPosShort(sequence[1]);
    return new FspGetParameter_parSequCntrFramesRepetition(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parSequCntrFramesRepetition(el);
}

let _cached_encoder_for_FspGetParameter_parSequCntrFramesRepetition: $.ASN1Encoder<FspGetParameter_parSequCntrFramesRepetition> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parSequCntrFramesRepetition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parSequCntrFramesRepetition, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parSequCntrFramesRepetition (value: FspGetParameter_parSequCntrFramesRepetition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parSequCntrFramesRepetition) { _cached_encoder_for_FspGetParameter_parSequCntrFramesRepetition = function (value: FspGetParameter_parSequCntrFramesRepetition, _elGetter: $.ASN1Encoder<FspGetParameter_parSequCntrFramesRepetition>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_IntPosShort(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parSequCntrFramesRepetition(value, elGetter);
}


/* eslint-enable */
