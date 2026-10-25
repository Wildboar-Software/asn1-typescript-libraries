/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterName, _encode_ParameterName, type ParameterName,
    ParameterName_bitLockRequired
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { _decode_CltuGetParameter_parBitLockRequired_parameterValue, _encode_CltuGetParameter_parBitLockRequired_parameterValue, type CltuGetParameter_parBitLockRequired_parameterValue } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parBitLockRequired-parameterValue.ta.mjs";



/**
 * @summary CltuGetParameter_parBitLockRequired
 * @description
 * 
 * bit-lock-required. If yes, the No Bit Lock flag in the CLCW must be false
 * before the provider sets production-status to operational. Set by service
 * management. The provider reads the flag from the CLCW on the configured
 * return channel. CCSDS 912.1-B-5, table 3-11 and section 2.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parBitLockRequired ::= SEQUENCE
 *    {  parameterName                    ParameterName  (bitLockRequired)
 *    ,  parameterValue                   INTEGER
 *       {  yes                                          (0)
 *       ,  no                                           (1)
 *       }
 *    }
 * ```
 * 
 * @class
 */
export
class CltuGetParameter_parBitLockRequired {
    /**
     * @summary `parameterName`.
     * @description
     *
     * Must be `bitLockRequired`. Names the bit-lock-required parameter
     * requested by CLTU-GET-PARAMETER. CCSDS 912.1-B-5, section 3.10.2.5 and
     * table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     *
     * yes (0) requires the CLCW No Bit Lock flag to be false. Table 3-11 does
     * not further define no (1). CCSDS 912.1-B-5, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: CltuGetParameter_parBitLockRequired_parameterValue;

    constructor (
        parameterName: ParameterName,
        parameterValue: CltuGetParameter_parBitLockRequired_parameterValue
    ) {
        if (parameterName !== ParameterName_bitLockRequired) {
            throw new ASN1Error("CltuGetParameter_parBitLockRequired.parameterName violates ParameterName (bitLockRequired)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a CltuGetParameter_parBitLockRequired
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameter_parBitLockRequired`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameter_parBitLockRequired`.
     * @returns {CltuGetParameter_parBitLockRequired}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameter_parBitLockRequired)]: (CltuGetParameter_parBitLockRequired)[_K] }): CltuGetParameter_parBitLockRequired {
        return new CltuGetParameter_parBitLockRequired(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameter_parBitLockRequired
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameter_parBitLockRequired: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameter_parBitLockRequired
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameter_parBitLockRequired: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameter_parBitLockRequired
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameter_parBitLockRequired: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameter_parBitLockRequired: $.ASN1Decoder<CltuGetParameter_parBitLockRequired> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parBitLockRequired
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parBitLockRequired (el: _Element): CltuGetParameter_parBitLockRequired {
    if (!_cached_decoder_for_CltuGetParameter_parBitLockRequired) { _cached_decoder_for_CltuGetParameter_parBitLockRequired = function (el: _Element): CltuGetParameter_parBitLockRequired {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuGetParameter-parBitLockRequired contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: CltuGetParameter_parBitLockRequired_parameterValue;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_CltuGetParameter_parBitLockRequired_parameterValue(sequence[1]);
    return new CltuGetParameter_parBitLockRequired(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_CltuGetParameter_parBitLockRequired(el);
}

let _cached_encoder_for_CltuGetParameter_parBitLockRequired: $.ASN1Encoder<CltuGetParameter_parBitLockRequired> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parBitLockRequired into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parBitLockRequired, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parBitLockRequired (value: CltuGetParameter_parBitLockRequired, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parBitLockRequired) { _cached_encoder_for_CltuGetParameter_parBitLockRequired = function (value: CltuGetParameter_parBitLockRequired, _elGetter: $.ASN1Encoder<CltuGetParameter_parBitLockRequired>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_CltuGetParameter_parBitLockRequired_parameterValue(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameter_parBitLockRequired(value, elGetter);
}


/* eslint-enable */
