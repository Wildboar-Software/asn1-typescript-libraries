/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_plop1IdleSequenceLength
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { type IntUnsignedShort, _decode_IntUnsignedShort, _encode_IntUnsignedShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedShort.ta.mjs";



/**
 * @summary CltuGetParameter_parPlop1IdleSequenceLength
 * @description
 * 
 * plop-1-idle-sequence-length, in octets: the optional idle sequence used with
 * PLOP-1. When the length is greater than zero, that many octets are sent as a
 * leading idle sequence after the acquisition sequence (CMM-4) and again as a
 * trailing idle sequence after the CLTU. Zero means no idle sequence is
 * applied. Both this length and acquisition-sequence-length may be zero so the
 * user can insert those patterns in the CLTU. Set by service management. CCSDS
 * 912.1-B-5, table 3-11 and section 3.6.2.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parPlop1IdleSequenceLength ::= SEQUENCE
 *    {  parameterName                    ParameterName
 *                                           (plop1IdleSequenceLength)
 *    ,  parameterValue                   IntUnsignedShort
 *    }
 * ```
 * 
 * @class
 */
export
class CltuGetParameter_parPlop1IdleSequenceLength {
    /**
     * @summary `parameterName`.
     * @description
     *
     * Must be `plop1IdleSequenceLength`. Names the plop-1-idle-sequence-length
     * parameter requested by CLTU-GET-PARAMETER. CCSDS 912.1-B-5, section
     * 3.10.2.5 and table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     *
     * PLOP-1 idle-sequence length in octets. Zero suppresses the idle sequence.
     * CCSDS 912.1-B-5, table 3-11 and section 3.6.2.8.
     * @public
     * @readonly
     */
    readonly parameterValue: IntUnsignedShort;

    constructor (
        parameterName: ParameterName,
        parameterValue: IntUnsignedShort
    ) {
        if (parameterName !== ParameterName_plop1IdleSequenceLength) {
            throw new ASN1Error("CltuGetParameter_parPlop1IdleSequenceLength.parameterName violates ParameterName (plop1IdleSequenceLength)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a CltuGetParameter_parPlop1IdleSequenceLength
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameter_parPlop1IdleSequenceLength`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameter_parPlop1IdleSequenceLength`.
     * @returns {CltuGetParameter_parPlop1IdleSequenceLength}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameter_parPlop1IdleSequenceLength)]: (CltuGetParameter_parPlop1IdleSequenceLength)[_K] }): CltuGetParameter_parPlop1IdleSequenceLength {
        return new CltuGetParameter_parPlop1IdleSequenceLength(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameter_parPlop1IdleSequenceLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameter_parPlop1IdleSequenceLength: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameter_parPlop1IdleSequenceLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameter_parPlop1IdleSequenceLength: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameter_parPlop1IdleSequenceLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameter_parPlop1IdleSequenceLength: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameter_parPlop1IdleSequenceLength: $.ASN1Decoder<CltuGetParameter_parPlop1IdleSequenceLength> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parPlop1IdleSequenceLength
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parPlop1IdleSequenceLength (el: _Element): CltuGetParameter_parPlop1IdleSequenceLength {
    if (!_cached_decoder_for_CltuGetParameter_parPlop1IdleSequenceLength) { _cached_decoder_for_CltuGetParameter_parPlop1IdleSequenceLength = function (el: _Element): CltuGetParameter_parPlop1IdleSequenceLength {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuGetParameter-parPlop1IdleSequenceLength contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: IntUnsignedShort;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_IntUnsignedShort(sequence[1]);
    return new CltuGetParameter_parPlop1IdleSequenceLength(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_CltuGetParameter_parPlop1IdleSequenceLength(el);
}

let _cached_encoder_for_CltuGetParameter_parPlop1IdleSequenceLength: $.ASN1Encoder<CltuGetParameter_parPlop1IdleSequenceLength> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parPlop1IdleSequenceLength into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parPlop1IdleSequenceLength, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parPlop1IdleSequenceLength (value: CltuGetParameter_parPlop1IdleSequenceLength, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parPlop1IdleSequenceLength) { _cached_encoder_for_CltuGetParameter_parPlop1IdleSequenceLength = function (value: CltuGetParameter_parPlop1IdleSequenceLength, _elGetter: $.ASN1Encoder<CltuGetParameter_parPlop1IdleSequenceLength>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_IntUnsignedShort(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameter_parPlop1IdleSequenceLength(value, elGetter);
}


/* eslint-enable */
