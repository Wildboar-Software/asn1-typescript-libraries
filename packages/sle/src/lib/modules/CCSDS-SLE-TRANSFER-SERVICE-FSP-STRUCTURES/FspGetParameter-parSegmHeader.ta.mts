/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_segmentHeader
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { FspGetParameter_parSegmHeader_parameterValue, _decode_FspGetParameter_parSegmHeader_parameterValue, _encode_FspGetParameter_parSegmHeader_parameterValue } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parSegmHeader-parameterValue.ta.mjs";



/**
 * @summary FspGetParameter_parSegmHeader
 * @description
 * 
 * segment-header: whether a Segment Header is present or absent in the TC
 * transfer frames. present is 0 and absent is 1. Service management sets it.
 * 
 * The note to table 3-11 requires maximum-frame-length, maximum-packet-length,
 * and segment-header to be consistent. Service management rejects an
 * inconsistent combination at configuration time. Section 3.10 says FSP is not
 * designed to deal with that inconsistency at run time.
 * 
 * CCSDS 912.3-B-3, table 3-11, section 3.1.9, and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parSegmHeader ::= SEQUENCE
 *    {  parameterName     ParameterName (segmentHeader)
 *    ,  parameterValue    INTEGER
 *       {  present           (0)
 *       ,  absent            (1)
 *       }
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parSegmHeader {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `segmentHeader`, selecting segment-header in table 3-11. CCSDS
     * 912.3-B-3, section 3.10.2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * present (0) or absent (1) for the Segment Header in TC transfer frames.
     * CCSDS 912.3-B-3, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: FspGetParameter_parSegmHeader_parameterValue;

    constructor (
        parameterName: ParameterName,
        parameterValue: FspGetParameter_parSegmHeader_parameterValue
    ) {
        if (parameterName !== ParameterName_segmentHeader) {
            throw new ASN1Error("FspGetParameter_parSegmHeader.parameterName violates ParameterName (segmentHeader)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parSegmHeader
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parSegmHeader`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parSegmHeader`.
     * @returns {FspGetParameter_parSegmHeader}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parSegmHeader)]: (FspGetParameter_parSegmHeader)[_K] }): FspGetParameter_parSegmHeader {
        return new FspGetParameter_parSegmHeader(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parSegmHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parSegmHeader: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parSegmHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parSegmHeader: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parSegmHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parSegmHeader: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parSegmHeader: $.ASN1Decoder<FspGetParameter_parSegmHeader> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parSegmHeader
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parSegmHeader (el: _Element): FspGetParameter_parSegmHeader {
    if (!_cached_decoder_for_FspGetParameter_parSegmHeader) { _cached_decoder_for_FspGetParameter_parSegmHeader = function (el: _Element): FspGetParameter_parSegmHeader {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parSegmHeader contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: FspGetParameter_parSegmHeader_parameterValue;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_FspGetParameter_parSegmHeader_parameterValue(sequence[1]);
    return new FspGetParameter_parSegmHeader(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parSegmHeader(el);
}

let _cached_encoder_for_FspGetParameter_parSegmHeader: $.ASN1Encoder<FspGetParameter_parSegmHeader> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parSegmHeader into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parSegmHeader, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parSegmHeader (value: FspGetParameter_parSegmHeader, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parSegmHeader) { _cached_encoder_for_FspGetParameter_parSegmHeader = function (value: FspGetParameter_parSegmHeader, _elGetter: $.ASN1Encoder<FspGetParameter_parSegmHeader>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_FspGetParameter_parSegmHeader_parameterValue(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parSegmHeader(value, elGetter);
}


/* eslint-enable */
