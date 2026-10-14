/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    ASN1Error,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterName, _encode_ParameterName, ParameterName,
    ParameterName_transmissionLimit
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";




import { integerInRange } from "../../constraints.mjs";

/**
 * @summary FspGetParameter_parTransmissLimit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parTransmissLimit ::= SEQUENCE
 *    {  parameterName     ParameterName (transmissionLimit)
 *    ,  parameterValue    INTEGER (1 .. 255)
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parTransmissLimit {
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
    readonly parameterValue: INTEGER;

    constructor (
        parameterName: ParameterName,
        parameterValue: INTEGER
    ) {
        if (parameterName !== ParameterName_transmissionLimit) {
            throw new ASN1Error("FspGetParameter_parTransmissLimit.parameterName violates ParameterName (transmissionLimit)");
        }
        if (!integerInRange(parameterValue, 1, 255)) {
            throw new ASN1OverflowError("FspGetParameter_parTransmissLimit.parameterValue violates INTEGER (1..255)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parTransmissLimit
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parTransmissLimit`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parTransmissLimit`.
     * @returns {FspGetParameter_parTransmissLimit}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parTransmissLimit)]: (FspGetParameter_parTransmissLimit)[_K] }): FspGetParameter_parTransmissLimit {
        return new FspGetParameter_parTransmissLimit(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parTransmissLimit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parTransmissLimit: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parTransmissLimit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parTransmissLimit: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parTransmissLimit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parTransmissLimit: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parTransmissLimit: $.ASN1Decoder<FspGetParameter_parTransmissLimit> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parTransmissLimit
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parTransmissLimit (el: _Element): FspGetParameter_parTransmissLimit {
    if (!_cached_decoder_for_FspGetParameter_parTransmissLimit) { _cached_decoder_for_FspGetParameter_parTransmissLimit = function (el: _Element): FspGetParameter_parTransmissLimit {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parTransmissLimit contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: INTEGER;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = $._decodeInteger(sequence[1]);
    return new FspGetParameter_parTransmissLimit(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parTransmissLimit(el);
}

let _cached_encoder_for_FspGetParameter_parTransmissLimit: $.ASN1Encoder<FspGetParameter_parTransmissLimit> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parTransmissLimit into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parTransmissLimit, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parTransmissLimit (value: FspGetParameter_parTransmissLimit, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parTransmissLimit) { _cached_encoder_for_FspGetParameter_parTransmissLimit = function (value: FspGetParameter_parTransmissLimit, _elGetter: $.ASN1Encoder<FspGetParameter_parTransmissLimit>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parTransmissLimit(value, elGetter);
}


/* eslint-enable */
