/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterName, _encode_ParameterName, type ParameterName,
    ParameterName_rfAvailableRequired
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { _decode_CltuGetParameter_parRfAvailableRequired_parameterValue, _encode_CltuGetParameter_parRfAvailableRequired_parameterValue, type CltuGetParameter_parRfAvailableRequired_parameterValue } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parRfAvailableRequired-parameterValue.ta.mjs";



/**
 * @summary CltuGetParameter_parRfAvailableRequired
 * @description
 * 
 * rf-available-required. If yes, the No RF Available flag in the CLCW must be
 * false before the provider sets production-status to operational. Set by
 * service management. CCSDS 912.1-B-5, table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parRfAvailableRequired ::= SEQUENCE
 *    {  parameterName                    ParameterName
 *                                           (rfAvailableRequired)
 *    ,  parameterValue                   INTEGER
 *       {  yes                                    (0)
 *       ,  no                                     (1)
 *       }
 *    }
 * ```
 * 
 * @class
 */
export
class CltuGetParameter_parRfAvailableRequired {
    /**
     * @summary `parameterName`.
     * @description
     *
     * Must be `rfAvailableRequired`. Names the rf-available-required parameter
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
     * yes (0) requires the CLCW No RF Available flag to be false. Table 3-11
     * does not further define no (1). CCSDS 912.1-B-5, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: CltuGetParameter_parRfAvailableRequired_parameterValue;

    constructor (
        parameterName: ParameterName,
        parameterValue: CltuGetParameter_parRfAvailableRequired_parameterValue
    ) {
        if (parameterName !== ParameterName_rfAvailableRequired) {
            throw new ASN1Error("CltuGetParameter_parRfAvailableRequired.parameterName violates ParameterName (rfAvailableRequired)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a CltuGetParameter_parRfAvailableRequired
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameter_parRfAvailableRequired`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameter_parRfAvailableRequired`.
     * @returns {CltuGetParameter_parRfAvailableRequired}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameter_parRfAvailableRequired)]: (CltuGetParameter_parRfAvailableRequired)[_K] }): CltuGetParameter_parRfAvailableRequired {
        return new CltuGetParameter_parRfAvailableRequired(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameter_parRfAvailableRequired
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameter_parRfAvailableRequired: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameter_parRfAvailableRequired
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameter_parRfAvailableRequired: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameter_parRfAvailableRequired
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameter_parRfAvailableRequired: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameter_parRfAvailableRequired: $.ASN1Decoder<CltuGetParameter_parRfAvailableRequired> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parRfAvailableRequired
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parRfAvailableRequired (el: _Element): CltuGetParameter_parRfAvailableRequired {
    if (!_cached_decoder_for_CltuGetParameter_parRfAvailableRequired) { _cached_decoder_for_CltuGetParameter_parRfAvailableRequired = function (el: _Element): CltuGetParameter_parRfAvailableRequired {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuGetParameter-parRfAvailableRequired contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: CltuGetParameter_parRfAvailableRequired_parameterValue;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_CltuGetParameter_parRfAvailableRequired_parameterValue(sequence[1]);
    return new CltuGetParameter_parRfAvailableRequired(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_CltuGetParameter_parRfAvailableRequired(el);
}

let _cached_encoder_for_CltuGetParameter_parRfAvailableRequired: $.ASN1Encoder<CltuGetParameter_parRfAvailableRequired> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parRfAvailableRequired into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parRfAvailableRequired, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parRfAvailableRequired (value: CltuGetParameter_parRfAvailableRequired, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parRfAvailableRequired) { _cached_encoder_for_CltuGetParameter_parRfAvailableRequired = function (value: CltuGetParameter_parRfAvailableRequired, _elGetter: $.ASN1Encoder<CltuGetParameter_parRfAvailableRequired>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_CltuGetParameter_parRfAvailableRequired_parameterValue(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameter_parRfAvailableRequired(value, elGetter);
}


/* eslint-enable */
