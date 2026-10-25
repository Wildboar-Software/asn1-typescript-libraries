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
    ParameterName_maximumFrameLength
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";




import { integerInRange } from "../../constraints.mjs";

/**
 * @summary FspGetParameter_parMaxFrameLength
 * @description
 * 
 * maximum-frame-length: the mission maximum TC transfer frame length, in
 * octets. The value is an integer from 12 to 1024 (annex A2.5). Service
 * management sets it.
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
 * FspGetParameter-parMaxFrameLength ::= SEQUENCE
 *    {  parameterName     ParameterName (maximumFrameLength)
 *    ,  parameterValue    INTEGER (12 .. 1024) -- octets
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parMaxFrameLength {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `maximumFrameLength`, selecting maximum-frame-length in table
     * 3-11. CCSDS 912.3-B-3, section 3.10.2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * Mission maximum TC transfer frame length in octets, from 12 to 1024.
     * CCSDS 912.3-B-3, table 3-11 and annex A2.5.
     * @public
     * @readonly
     */
    readonly parameterValue: INTEGER;

    constructor (
        parameterName: ParameterName,
        parameterValue: INTEGER
    ) {
        if (parameterName !== ParameterName_maximumFrameLength) {
            throw new ASN1Error("FspGetParameter_parMaxFrameLength.parameterName violates ParameterName (maximumFrameLength)");
        }
        if (!integerInRange(parameterValue, 12, 1024)) {
            throw new ASN1OverflowError("FspGetParameter_parMaxFrameLength.parameterValue violates INTEGER (12..1024)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parMaxFrameLength
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parMaxFrameLength`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parMaxFrameLength`.
     * @returns {FspGetParameter_parMaxFrameLength}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parMaxFrameLength)]: (FspGetParameter_parMaxFrameLength)[_K] }): FspGetParameter_parMaxFrameLength {
        return new FspGetParameter_parMaxFrameLength(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parMaxFrameLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parMaxFrameLength: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parMaxFrameLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parMaxFrameLength: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parMaxFrameLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parMaxFrameLength: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parMaxFrameLength: $.ASN1Decoder<FspGetParameter_parMaxFrameLength> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parMaxFrameLength
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parMaxFrameLength (el: _Element): FspGetParameter_parMaxFrameLength {
    if (!_cached_decoder_for_FspGetParameter_parMaxFrameLength) { _cached_decoder_for_FspGetParameter_parMaxFrameLength = function (el: _Element): FspGetParameter_parMaxFrameLength {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parMaxFrameLength contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: INTEGER;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = $._decodeInteger(sequence[1]);
    return new FspGetParameter_parMaxFrameLength(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parMaxFrameLength(el);
}

let _cached_encoder_for_FspGetParameter_parMaxFrameLength: $.ASN1Encoder<FspGetParameter_parMaxFrameLength> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parMaxFrameLength into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parMaxFrameLength, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parMaxFrameLength (value: FspGetParameter_parMaxFrameLength, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parMaxFrameLength) { _cached_encoder_for_FspGetParameter_parMaxFrameLength = function (value: FspGetParameter_parMaxFrameLength, _elGetter: $.ASN1Encoder<FspGetParameter_parMaxFrameLength>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parMaxFrameLength(value, elGetter);
}


/* eslint-enable */
