/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_deliveryMode
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { RafDeliveryMode, _decode_RafDeliveryMode, _encode_RafDeliveryMode } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafDeliveryMode.ta.mjs";



/**
 * @summary RafGetParameter_parDeliveryMode
 * @description
 * 
 * RAF-GET-PARAMETER value of `delivery-mode` for this instance. Service
 * management sets it to timely online, complete online, or offline, and the
 * instance supports only that mode.
 * 
 * CCSDS 911.1-B-5, table 3-11 and sections 2.3 and 3.1.9.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafGetParameter-parDeliveryMode ::= SEQUENCE
 *     {   parameterName                ParameterName (deliveryMode)
 *     ,   parameterValue               RafDeliveryMode
 *     }
 * ```
 * 
 * @class
 */
export
class RafGetParameter_parDeliveryMode {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `deliveryMode`, selecting delivery-mode in table 3-11. CCSDS
     * 911.1-B-5, annex A2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * The instance's delivery mode: `rtnTimelyOnline`, `rtnCompleteOnline`, or
     * `rtnOffline`. CCSDS 911.1-B-5, table 3-11 and section 3.1.9.
     * @public
     * @readonly
     */
    readonly parameterValue: RafDeliveryMode;

    constructor (
        parameterName: ParameterName,
        parameterValue: RafDeliveryMode
    ) {
        if (parameterName !== ParameterName_deliveryMode) {
            throw new ASN1Error("RafGetParameter_parDeliveryMode.parameterName violates ParameterName (deliveryMode)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RafGetParameter_parDeliveryMode
     * @description
     * 
     * This takes an `object` and converts it to a `RafGetParameter_parDeliveryMode`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RafGetParameter_parDeliveryMode`.
     * @returns {RafGetParameter_parDeliveryMode}
     */
    public static _from_object (_o: { [_K in keyof (RafGetParameter_parDeliveryMode)]: (RafGetParameter_parDeliveryMode)[_K] }): RafGetParameter_parDeliveryMode {
        return new RafGetParameter_parDeliveryMode(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RafGetParameter_parDeliveryMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RafGetParameter_parDeliveryMode: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RafGetParameter_parDeliveryMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RafGetParameter_parDeliveryMode: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RafGetParameter_parDeliveryMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RafGetParameter_parDeliveryMode: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RafGetParameter_parDeliveryMode: $.ASN1Decoder<RafGetParameter_parDeliveryMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafGetParameter_parDeliveryMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafGetParameter_parDeliveryMode (el: _Element): RafGetParameter_parDeliveryMode {
    if (!_cached_decoder_for_RafGetParameter_parDeliveryMode) { _cached_decoder_for_RafGetParameter_parDeliveryMode = function (el: _Element): RafGetParameter_parDeliveryMode {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RafGetParameter-parDeliveryMode contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: RafDeliveryMode;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_RafDeliveryMode(sequence[1]);
    return new RafGetParameter_parDeliveryMode(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RafGetParameter_parDeliveryMode(el);
}

let _cached_encoder_for_RafGetParameter_parDeliveryMode: $.ASN1Encoder<RafGetParameter_parDeliveryMode> | null = null;

/**
 * @summary Encodes a(n) RafGetParameter_parDeliveryMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafGetParameter_parDeliveryMode, encoded as an ASN.1 Element.
 */
export
function _encode_RafGetParameter_parDeliveryMode (value: RafGetParameter_parDeliveryMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafGetParameter_parDeliveryMode) { _cached_encoder_for_RafGetParameter_parDeliveryMode = function (value: RafGetParameter_parDeliveryMode, _elGetter: $.ASN1Encoder<RafGetParameter_parDeliveryMode>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_RafDeliveryMode(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RafGetParameter_parDeliveryMode(value, elGetter);
}


/* eslint-enable */
