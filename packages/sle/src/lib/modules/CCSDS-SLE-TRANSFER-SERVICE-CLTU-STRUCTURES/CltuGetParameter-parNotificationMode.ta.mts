/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterName, _encode_ParameterName, ParameterName,
    ParameterName_notificationMode
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { _decode_CltuGetParameter_parNotificationMode_parameterValue, _encode_CltuGetParameter_parNotificationMode_parameterValue, CltuGetParameter_parNotificationMode_parameterValue } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parNotificationMode-parameterValue.ta.mjs";



/**
 * @summary CltuGetParameter_parNotificationMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parNotificationMode ::= SEQUENCE
 *    {  parameterName                    ParameterName (notificationMode)
 *    ,  parameterValue                   INTEGER
 *       {  deferred                         (0)
 * 
 * 
 * 
 * 
 *       ,  immediate                        (1)
 *       }
 *    }
 * ```
 * 
 * @class
 */
export
class CltuGetParameter_parNotificationMode {
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
    readonly parameterValue: CltuGetParameter_parNotificationMode_parameterValue;

    constructor (
        parameterName: ParameterName,
        parameterValue: CltuGetParameter_parNotificationMode_parameterValue
    ) {
        if (parameterName !== ParameterName_notificationMode) {
            throw new ASN1Error("CltuGetParameter_parNotificationMode.parameterName violates ParameterName (notificationMode)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a CltuGetParameter_parNotificationMode
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameter_parNotificationMode`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameter_parNotificationMode`.
     * @returns {CltuGetParameter_parNotificationMode}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameter_parNotificationMode)]: (CltuGetParameter_parNotificationMode)[_K] }): CltuGetParameter_parNotificationMode {
        return new CltuGetParameter_parNotificationMode(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameter_parNotificationMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameter_parNotificationMode: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameter_parNotificationMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameter_parNotificationMode: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameter_parNotificationMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameter_parNotificationMode: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameter_parNotificationMode: $.ASN1Decoder<CltuGetParameter_parNotificationMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parNotificationMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parNotificationMode (el: _Element): CltuGetParameter_parNotificationMode {
    if (!_cached_decoder_for_CltuGetParameter_parNotificationMode) { _cached_decoder_for_CltuGetParameter_parNotificationMode = function (el: _Element): CltuGetParameter_parNotificationMode {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuGetParameter-parNotificationMode contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: CltuGetParameter_parNotificationMode_parameterValue;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_CltuGetParameter_parNotificationMode_parameterValue(sequence[1]);
    return new CltuGetParameter_parNotificationMode(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_CltuGetParameter_parNotificationMode(el);
}

let _cached_encoder_for_CltuGetParameter_parNotificationMode: $.ASN1Encoder<CltuGetParameter_parNotificationMode> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parNotificationMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parNotificationMode, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parNotificationMode (value: CltuGetParameter_parNotificationMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parNotificationMode) { _cached_encoder_for_CltuGetParameter_parNotificationMode = function (value: CltuGetParameter_parNotificationMode, _elGetter: $.ASN1Encoder<CltuGetParameter_parNotificationMode>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_CltuGetParameter_parNotificationMode_parameterValue(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameter_parNotificationMode(value, elGetter);
}


/* eslint-enable */
