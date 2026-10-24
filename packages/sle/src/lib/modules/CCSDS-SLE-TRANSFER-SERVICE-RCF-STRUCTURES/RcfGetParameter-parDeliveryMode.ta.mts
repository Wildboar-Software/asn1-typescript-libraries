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
import { RcfDeliveryMode, _decode_RcfDeliveryMode, _encode_RcfDeliveryMode } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfDeliveryMode.ta.mjs";



/**
 * @summary RcfGetParameter_parDeliveryMode
 * @description
 *
 * Returned value of delivery-mode. Service management sets it to timely
 * online, complete online, or offline, and the instance keeps that one mode.
 *
 * CCSDS 911.2-B-4, sections 2.3 and 3.1.9, and table 3-11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfGetParameter-parDeliveryMode ::= SEQUENCE
 *     { parameterName                 ParameterName (deliveryMode)
 *     , parameterValue                RcfDeliveryMode
 *     }
 * ```
 * 
 * @class
 */
export
class RcfGetParameter_parDeliveryMode {
    /**
     * @summary `parameterName`.
     * @description
     *
     * Identifies this value as delivery-mode (deliveryMode).
     *
     * CCSDS 911.2-B-4, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     *
     * The delivery mode of this service instance.
     *
     * CCSDS 911.2-B-4, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: RcfDeliveryMode;

    constructor (
        parameterName: ParameterName,
        parameterValue: RcfDeliveryMode
    ) {
        if (parameterName !== ParameterName_deliveryMode) {
            throw new ASN1Error("RcfGetParameter_parDeliveryMode.parameterName violates ParameterName (deliveryMode)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RcfGetParameter_parDeliveryMode
     * @description
     * 
     * This takes an `object` and converts it to a
     * `RcfGetParameter_parDeliveryMode`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RcfGetParameter_parDeliveryMode`.
     * @returns {RcfGetParameter_parDeliveryMode}
     */
    public static _from_object (_o: { [_K in keyof (RcfGetParameter_parDeliveryMode)]: (RcfGetParameter_parDeliveryMode)[_K] }): RcfGetParameter_parDeliveryMode {
        return new RcfGetParameter_parDeliveryMode(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RcfGetParameter_parDeliveryMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RcfGetParameter_parDeliveryMode: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RcfGetParameter_parDeliveryMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RcfGetParameter_parDeliveryMode: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RcfGetParameter_parDeliveryMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RcfGetParameter_parDeliveryMode: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RcfGetParameter_parDeliveryMode: $.ASN1Decoder<RcfGetParameter_parDeliveryMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfGetParameter_parDeliveryMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfGetParameter_parDeliveryMode (el: _Element): RcfGetParameter_parDeliveryMode {
    if (!_cached_decoder_for_RcfGetParameter_parDeliveryMode) { _cached_decoder_for_RcfGetParameter_parDeliveryMode = function (el: _Element): RcfGetParameter_parDeliveryMode {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RcfGetParameter-parDeliveryMode contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: RcfDeliveryMode;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_RcfDeliveryMode(sequence[1]);
    return new RcfGetParameter_parDeliveryMode(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RcfGetParameter_parDeliveryMode(el);
}

let _cached_encoder_for_RcfGetParameter_parDeliveryMode: $.ASN1Encoder<RcfGetParameter_parDeliveryMode> | null = null;

/**
 * @summary Encodes a(n) RcfGetParameter_parDeliveryMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfGetParameter_parDeliveryMode, encoded as an ASN.1 Element.
 */
export
function _encode_RcfGetParameter_parDeliveryMode (value: RcfGetParameter_parDeliveryMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfGetParameter_parDeliveryMode) { _cached_encoder_for_RcfGetParameter_parDeliveryMode = function (value: RcfGetParameter_parDeliveryMode, _elGetter: $.ASN1Encoder<RcfGetParameter_parDeliveryMode>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_RcfDeliveryMode(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RcfGetParameter_parDeliveryMode(value, elGetter);
}


/* eslint-enable */
