/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterName, _encode_ParameterName, ParameterName,
    ParameterName_vcMuxScheme
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { _decode_MuxScheme, _encode_MuxScheme, MuxScheme } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/MuxScheme.ta.mjs";



/**
 * @summary FspGetParameter_parVcMuxScheme
 * @description
 * 
 * vc-multiplexing-scheme: the VC multiplexing scheme in effect. The values are
 * FIFO, absolute priority, and polling vector. Service management sets it.
 * Annex B4 defines how each scheme selects the next TC frame.
 * 
 * Annex A2.5: fifo is 0, absolute-priority is 1, and polling-vector is 2.
 * 
 * CCSDS 912.3-B-3, table 3-11, section 3.1.9, annex A2.5, and annex B4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parVcMuxScheme ::= SEQUENCE
 *    {  parameterName     ParameterName (vcMuxScheme)
 *    ,  parameterValue    MuxScheme
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parVcMuxScheme {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `vcMuxScheme`, selecting vc-multiplexing-scheme in table 3-11.
     * CCSDS 912.3-B-3, section 3.10.2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * FIFO (0), absolute priority (1), or polling vector (2). CCSDS 912.3-B-3,
     * table 3-11 and annex A2.5.
     * @public
     * @readonly
     */
    readonly parameterValue: MuxScheme;

    constructor (
        parameterName: ParameterName,
        parameterValue: MuxScheme
    ) {
        if (parameterName !== ParameterName_vcMuxScheme) {
            throw new ASN1Error("FspGetParameter_parVcMuxScheme.parameterName violates ParameterName (vcMuxScheme)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parVcMuxScheme
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parVcMuxScheme`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parVcMuxScheme`.
     * @returns {FspGetParameter_parVcMuxScheme}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parVcMuxScheme)]: (FspGetParameter_parVcMuxScheme)[_K] }): FspGetParameter_parVcMuxScheme {
        return new FspGetParameter_parVcMuxScheme(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parVcMuxScheme
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parVcMuxScheme: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parVcMuxScheme
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parVcMuxScheme: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parVcMuxScheme
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parVcMuxScheme: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parVcMuxScheme: $.ASN1Decoder<FspGetParameter_parVcMuxScheme> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parVcMuxScheme
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parVcMuxScheme (el: _Element): FspGetParameter_parVcMuxScheme {
    if (!_cached_decoder_for_FspGetParameter_parVcMuxScheme) { _cached_decoder_for_FspGetParameter_parVcMuxScheme = function (el: _Element): FspGetParameter_parVcMuxScheme {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parVcMuxScheme contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: MuxScheme;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_MuxScheme(sequence[1]);
    return new FspGetParameter_parVcMuxScheme(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parVcMuxScheme(el);
}

let _cached_encoder_for_FspGetParameter_parVcMuxScheme: $.ASN1Encoder<FspGetParameter_parVcMuxScheme> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parVcMuxScheme into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parVcMuxScheme, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parVcMuxScheme (value: FspGetParameter_parVcMuxScheme, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parVcMuxScheme) { _cached_encoder_for_FspGetParameter_parVcMuxScheme = function (value: FspGetParameter_parVcMuxScheme, _elGetter: $.ASN1Encoder<FspGetParameter_parVcMuxScheme>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_MuxScheme(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parVcMuxScheme(value, elGetter);
}


/* eslint-enable */
