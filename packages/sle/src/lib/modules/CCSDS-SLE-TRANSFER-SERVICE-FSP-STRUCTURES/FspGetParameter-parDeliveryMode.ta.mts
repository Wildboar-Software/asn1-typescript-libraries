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
import { FspDeliveryMode, _decode_FspDeliveryMode, _encode_FspDeliveryMode } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspDeliveryMode.ta.mjs";



/**
 * @summary FspGetParameter_parDeliveryMode
 * @description
 * 
 * delivery-mode: the only value in this issue is fwd online. Forward online
 * delivery is provisioned during a space link session, at the same time as
 * production (section 3.1.8.1). Section 3.1.8.2 leaves forward offline delivery
 * undefined in this issue. Service management sets the mode.
 * 
 * Annex A2.5 constrains `FspDeliveryMode` to `fwdOnline`. Annex A2.1 numbers
 * `fwdOnline` as 3.
 * 
 * CCSDS 912.3-B-3, table 3-11, section 3.1.8, and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parDeliveryMode ::= SEQUENCE
 *    {  parameterName     ParameterName (deliveryMode)
 *    ,  parameterValue    FspDeliveryMode
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parDeliveryMode {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `deliveryMode`, selecting delivery-mode in table 3-11. CCSDS
     * 912.3-B-3, section 3.10.2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * `fwdOnline` (3), the only FSP delivery mode in this issue. CCSDS
     * 912.3-B-3, table 3-11, section 3.1.8.1, and annex A2.1.
     * @public
     * @readonly
     */
    readonly parameterValue: FspDeliveryMode;

    constructor (
        parameterName: ParameterName,
        parameterValue: FspDeliveryMode
    ) {
        if (parameterName !== ParameterName_deliveryMode) {
            throw new ASN1Error("FspGetParameter_parDeliveryMode.parameterName violates ParameterName (deliveryMode)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parDeliveryMode
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parDeliveryMode`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parDeliveryMode`.
     * @returns {FspGetParameter_parDeliveryMode}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parDeliveryMode)]: (FspGetParameter_parDeliveryMode)[_K] }): FspGetParameter_parDeliveryMode {
        return new FspGetParameter_parDeliveryMode(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parDeliveryMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parDeliveryMode: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parDeliveryMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parDeliveryMode: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parDeliveryMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parDeliveryMode: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parDeliveryMode: $.ASN1Decoder<FspGetParameter_parDeliveryMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parDeliveryMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parDeliveryMode (el: _Element): FspGetParameter_parDeliveryMode {
    if (!_cached_decoder_for_FspGetParameter_parDeliveryMode) { _cached_decoder_for_FspGetParameter_parDeliveryMode = function (el: _Element): FspGetParameter_parDeliveryMode {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parDeliveryMode contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: FspDeliveryMode;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_FspDeliveryMode(sequence[1]);
    return new FspGetParameter_parDeliveryMode(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parDeliveryMode(el);
}

let _cached_encoder_for_FspGetParameter_parDeliveryMode: $.ASN1Encoder<FspGetParameter_parDeliveryMode> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parDeliveryMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parDeliveryMode, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parDeliveryMode (value: FspGetParameter_parDeliveryMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parDeliveryMode) { _cached_encoder_for_FspGetParameter_parDeliveryMode = function (value: FspGetParameter_parDeliveryMode, _elGetter: $.ASN1Encoder<FspGetParameter_parDeliveryMode>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_FspDeliveryMode(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parDeliveryMode(value, elGetter);
}


/* eslint-enable */
