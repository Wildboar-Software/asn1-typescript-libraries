/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_deliveryMode
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { CltuDeliveryMode, _decode_CltuDeliveryMode, _encode_CltuDeliveryMode } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuDeliveryMode.ta.mjs";



/**
 * @summary CltuGetParameter_parDeliveryMode
 * @description
 * 
 * delivery-mode. This issue reports forward online only. Set by service
 * management. CCSDS 912.1-B-5, section 3.1.8 and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parDeliveryMode ::= SEQUENCE
 *    {  parameterName                    ParameterName (deliveryMode)
 *    ,  parameterValue                   CltuDeliveryMode
 *    }
 * ```
 * 
 * @class
 */
export
class CltuGetParameter_parDeliveryMode {
    /**
     * @summary `parameterName`.
     * @description
     *
     * Must be `deliveryMode`. Names the delivery-mode parameter requested by
     * CLTU-GET-PARAMETER. CCSDS 912.1-B-5, section 3.10.2.5 and table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     *
     * fwd online. Forward offline delivery is outside the scope of this issue.
     * CCSDS 912.1-B-5, section 3.1.8 and table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: CltuDeliveryMode;

    constructor (
        parameterName: ParameterName,
        parameterValue: CltuDeliveryMode
    ) {
        if (parameterName !== ParameterName_deliveryMode) {
            throw new ASN1Error("CltuGetParameter_parDeliveryMode.parameterName violates ParameterName (deliveryMode)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a CltuGetParameter_parDeliveryMode
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameter_parDeliveryMode`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameter_parDeliveryMode`.
     * @returns {CltuGetParameter_parDeliveryMode}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameter_parDeliveryMode)]: (CltuGetParameter_parDeliveryMode)[_K] }): CltuGetParameter_parDeliveryMode {
        return new CltuGetParameter_parDeliveryMode(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameter_parDeliveryMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameter_parDeliveryMode: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameter_parDeliveryMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameter_parDeliveryMode: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameter_parDeliveryMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameter_parDeliveryMode: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameter_parDeliveryMode: $.ASN1Decoder<CltuGetParameter_parDeliveryMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parDeliveryMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parDeliveryMode (el: _Element): CltuGetParameter_parDeliveryMode {
    if (!_cached_decoder_for_CltuGetParameter_parDeliveryMode) { _cached_decoder_for_CltuGetParameter_parDeliveryMode = function (el: _Element): CltuGetParameter_parDeliveryMode {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuGetParameter-parDeliveryMode contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: CltuDeliveryMode;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_CltuDeliveryMode(sequence[1]);
    return new CltuGetParameter_parDeliveryMode(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_CltuGetParameter_parDeliveryMode(el);
}

let _cached_encoder_for_CltuGetParameter_parDeliveryMode: $.ASN1Encoder<CltuGetParameter_parDeliveryMode> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parDeliveryMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parDeliveryMode, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parDeliveryMode (value: CltuGetParameter_parDeliveryMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parDeliveryMode) { _cached_encoder_for_CltuGetParameter_parDeliveryMode = function (value: CltuGetParameter_parDeliveryMode, _elGetter: $.ASN1Encoder<CltuGetParameter_parDeliveryMode>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_CltuDeliveryMode(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameter_parDeliveryMode(value, elGetter);
}


/* eslint-enable */
