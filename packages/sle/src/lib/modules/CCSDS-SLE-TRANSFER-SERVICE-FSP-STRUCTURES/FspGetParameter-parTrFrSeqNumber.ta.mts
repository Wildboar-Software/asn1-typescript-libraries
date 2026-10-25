/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    ASN1Error,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterName, _encode_ParameterName, type ParameterName,
    ParameterName_transmitterFrameSequenceNumber
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";




import { integerInRange } from "../../constraints.mjs";

/**
 * @summary FspGetParameter_parTrFrSeqNumber
 * @description
 * 
 * transmitter-frame-sequence-number: after a transmission mode capability
 * change, Transmitter_Frame_Sequence_Number, V(S), holds the Frame Sequence
 * Number, N(S), placed in the Transfer Frame Primary Header of the next Type-AD
 * frame. The value is an integer from 0 to 255 (annex A2.5). Service management
 * sets it. FSP-INVOKE-DIRECTIVE may also set it (table 3-1).
 * 
 * CCSDS 912.3-B-3, table 3-11 and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parTrFrSeqNumber ::= SEQUENCE
 *    {  parameterName     ParameterName  (transmitterFrameSequenceNumber)
 *    ,  parameterValue    INTEGER (0 .. 255)
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parTrFrSeqNumber {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `transmitterFrameSequenceNumber`, selecting
     * transmitter-frame-sequence-number in table 3-11. CCSDS 912.3-B-3, section
     * 3.10.2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * V(S): the N(S) for the next Type-AD Transfer Frame Primary Header after a
     * transmission mode capability change. Integer from 0 to 255. CCSDS
     * 912.3-B-3, table 3-11 and annex A2.5.
     * @public
     * @readonly
     */
    readonly parameterValue: INTEGER;

    constructor (
        parameterName: ParameterName,
        parameterValue: INTEGER
    ) {
        if (parameterName !== ParameterName_transmitterFrameSequenceNumber) {
            throw new ASN1Error("FspGetParameter_parTrFrSeqNumber.parameterName violates ParameterName (transmitterFrameSequenceNumber)");
        }
        if (!integerInRange(parameterValue, 0, 255)) {
            throw new ASN1OverflowError("FspGetParameter_parTrFrSeqNumber.parameterValue violates INTEGER (0..255)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parTrFrSeqNumber
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parTrFrSeqNumber`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parTrFrSeqNumber`.
     * @returns {FspGetParameter_parTrFrSeqNumber}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parTrFrSeqNumber)]: (FspGetParameter_parTrFrSeqNumber)[_K] }): FspGetParameter_parTrFrSeqNumber {
        return new FspGetParameter_parTrFrSeqNumber(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parTrFrSeqNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parTrFrSeqNumber: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parTrFrSeqNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parTrFrSeqNumber: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parTrFrSeqNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parTrFrSeqNumber: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parTrFrSeqNumber: $.ASN1Decoder<FspGetParameter_parTrFrSeqNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parTrFrSeqNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parTrFrSeqNumber (el: _Element): FspGetParameter_parTrFrSeqNumber {
    if (!_cached_decoder_for_FspGetParameter_parTrFrSeqNumber) { _cached_decoder_for_FspGetParameter_parTrFrSeqNumber = function (el: _Element): FspGetParameter_parTrFrSeqNumber {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parTrFrSeqNumber contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: INTEGER;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = $._decodeInteger(sequence[1]);
    return new FspGetParameter_parTrFrSeqNumber(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parTrFrSeqNumber(el);
}

let _cached_encoder_for_FspGetParameter_parTrFrSeqNumber: $.ASN1Encoder<FspGetParameter_parTrFrSeqNumber> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parTrFrSeqNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parTrFrSeqNumber, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parTrFrSeqNumber (value: FspGetParameter_parTrFrSeqNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parTrFrSeqNumber) { _cached_encoder_for_FspGetParameter_parTrFrSeqNumber = function (value: FspGetParameter_parTrFrSeqNumber, _elGetter: $.ASN1Encoder<FspGetParameter_parTrFrSeqNumber>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parTrFrSeqNumber(value, elGetter);
}


/* eslint-enable */
