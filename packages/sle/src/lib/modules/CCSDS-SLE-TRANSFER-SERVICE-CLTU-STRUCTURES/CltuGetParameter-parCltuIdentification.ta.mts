/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_expectedSlduIdentification
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { CltuIdentification, _decode_CltuIdentification, _encode_CltuIdentification } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuIdentification.ta.mjs";



/**
 * @summary CltuGetParameter_parCltuIdentification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parCltuIdentification ::= SEQUENCE
 *    {  parameterName                    ParameterName
 *                                           (expectedSlduIdentification)
 *    ,  parameterValue                   CltuIdentification
 *    }
 * ```
 * 
 * @class
 */
export
class CltuGetParameter_parCltuIdentification {
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
    readonly parameterValue: CltuIdentification;

    constructor (
        parameterName: ParameterName,
        parameterValue: CltuIdentification
    ) {
        if (parameterName !== ParameterName_expectedSlduIdentification) {
            throw new ASN1Error("CltuGetParameter_parCltuIdentification.parameterName violates ParameterName (expectedSlduIdentification)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a CltuGetParameter_parCltuIdentification
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameter_parCltuIdentification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameter_parCltuIdentification`.
     * @returns {CltuGetParameter_parCltuIdentification}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameter_parCltuIdentification)]: (CltuGetParameter_parCltuIdentification)[_K] }): CltuGetParameter_parCltuIdentification {
        return new CltuGetParameter_parCltuIdentification(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameter_parCltuIdentification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameter_parCltuIdentification: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameter_parCltuIdentification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameter_parCltuIdentification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameter_parCltuIdentification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameter_parCltuIdentification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameter_parCltuIdentification: $.ASN1Decoder<CltuGetParameter_parCltuIdentification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parCltuIdentification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parCltuIdentification (el: _Element): CltuGetParameter_parCltuIdentification {
    if (!_cached_decoder_for_CltuGetParameter_parCltuIdentification) { _cached_decoder_for_CltuGetParameter_parCltuIdentification = function (el: _Element): CltuGetParameter_parCltuIdentification {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuGetParameter-parCltuIdentification contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: CltuIdentification;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_CltuIdentification(sequence[1]);
    return new CltuGetParameter_parCltuIdentification(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_CltuGetParameter_parCltuIdentification(el);
}

let _cached_encoder_for_CltuGetParameter_parCltuIdentification: $.ASN1Encoder<CltuGetParameter_parCltuIdentification> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parCltuIdentification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parCltuIdentification, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parCltuIdentification (value: CltuGetParameter_parCltuIdentification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parCltuIdentification) { _cached_encoder_for_CltuGetParameter_parCltuIdentification = function (value: CltuGetParameter_parCltuIdentification, _elGetter: $.ASN1Encoder<CltuGetParameter_parCltuIdentification>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_CltuIdentification(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameter_parCltuIdentification(value, elGetter);
}


/* eslint-enable */
