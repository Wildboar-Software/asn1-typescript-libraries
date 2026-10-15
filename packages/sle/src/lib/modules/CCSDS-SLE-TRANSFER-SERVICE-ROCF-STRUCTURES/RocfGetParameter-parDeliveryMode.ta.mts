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
import { RocfDeliveryMode, _decode_RocfDeliveryMode, _encode_RocfDeliveryMode } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfDeliveryMode.ta.mjs";



/**
 * @summary RocfGetParameter_parDeliveryMode
 * @description
 * 
 * Successful ROCF-GET-PARAMETER result for the delivery mode of this instance.
 * Service management sets the mode, and the instance supports one of timely
 * online, complete online, or offline.
 *
 * CCSDS 911.5-B-4, sections 2.3 and 3.1.9 and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfGetParameter-parDeliveryMode ::= SEQUENCE
 *    {  parameterName                 ParameterName (deliveryMode)
 *    ,  parameterValue                RocfDeliveryMode
 *    }
 * ```
 * 
 * @class
 */
export
class RocfGetParameter_parDeliveryMode {
    /**
     * @summary `parameterName`.
     * @description
     * 
     * Fixed to deliveryMode. CCSDS 911.5-B-4, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * 
     * The instance delivery mode: timely online, complete online, or offline.
     * Online modes run with the space link session. Offline delivers stored
     * OCFs after the session. Timely online may discard a transfer buffer that
     * cannot be released in time. Complete online attempts to deliver every
     * acquired OCF.
     *
     * CCSDS 911.5-B-4, sections 2.3 and 3.1.9 and table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: RocfDeliveryMode;

    constructor (
        parameterName: ParameterName,
        parameterValue: RocfDeliveryMode
    ) {
        if (parameterName !== ParameterName_deliveryMode) {
            throw new ASN1Error("RocfGetParameter_parDeliveryMode.parameterName violates ParameterName (deliveryMode)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RocfGetParameter_parDeliveryMode
     * @description
     * 
     * This takes an `object` and converts it to a `RocfGetParameter_parDeliveryMode`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfGetParameter_parDeliveryMode`.
     * @returns {RocfGetParameter_parDeliveryMode}
     */
    public static _from_object (_o: { [_K in keyof (RocfGetParameter_parDeliveryMode)]: (RocfGetParameter_parDeliveryMode)[_K] }): RocfGetParameter_parDeliveryMode {
        return new RocfGetParameter_parDeliveryMode(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RocfGetParameter_parDeliveryMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfGetParameter_parDeliveryMode: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RocfGetParameter_parDeliveryMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfGetParameter_parDeliveryMode: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfGetParameter_parDeliveryMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfGetParameter_parDeliveryMode: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfGetParameter_parDeliveryMode: $.ASN1Decoder<RocfGetParameter_parDeliveryMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfGetParameter_parDeliveryMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfGetParameter_parDeliveryMode (el: _Element): RocfGetParameter_parDeliveryMode {
    if (!_cached_decoder_for_RocfGetParameter_parDeliveryMode) { _cached_decoder_for_RocfGetParameter_parDeliveryMode = function (el: _Element): RocfGetParameter_parDeliveryMode {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RocfGetParameter-parDeliveryMode contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: RocfDeliveryMode;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_RocfDeliveryMode(sequence[1]);
    return new RocfGetParameter_parDeliveryMode(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RocfGetParameter_parDeliveryMode(el);
}

let _cached_encoder_for_RocfGetParameter_parDeliveryMode: $.ASN1Encoder<RocfGetParameter_parDeliveryMode> | null = null;

/**
 * @summary Encodes a(n) RocfGetParameter_parDeliveryMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfGetParameter_parDeliveryMode, encoded as an ASN.1 Element.
 */
export
function _encode_RocfGetParameter_parDeliveryMode (value: RocfGetParameter_parDeliveryMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfGetParameter_parDeliveryMode) { _cached_encoder_for_RocfGetParameter_parDeliveryMode = function (value: RocfGetParameter_parDeliveryMode, _elGetter: $.ASN1Encoder<RocfGetParameter_parDeliveryMode>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_RocfDeliveryMode(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfGetParameter_parDeliveryMode(value, elGetter);
}


/* eslint-enable */
