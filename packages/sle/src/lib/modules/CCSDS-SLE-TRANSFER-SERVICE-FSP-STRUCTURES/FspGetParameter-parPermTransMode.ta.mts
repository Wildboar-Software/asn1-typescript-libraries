/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_permittedTransmissionMode
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { PermittedTransmissionMode, _decode_PermittedTransmissionMode, _encode_PermittedTransmissionMode } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/PermittedTransmissionMode.ta.mjs";



/**
 * @summary FspGetParameter_parPermTransMode
 * @description
 * 
 * permitted-transmission-mode: the transmission mode permitted for this service
 * instance. The values are sequence-controlled, expedited, and any. Service
 * management sets it.
 * 
 * Annex A2.5: sequenceControlled is 0, expedited is 1, and any is 2.
 * 
 * CCSDS 912.3-B-3, table 3-11, section 3.1.9, and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parPermTransMode ::= SEQUENCE
 *    {  parameterName     ParameterName (permittedTransmissionMode)
 *    ,  parameterValue    PermittedTransmissionMode
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parPermTransMode {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `permittedTransmissionMode`, selecting
     * permitted-transmission-mode in table 3-11. CCSDS 912.3-B-3, section
     * 3.10.2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * sequence-controlled (0), expedited (1), or any (2). CCSDS 912.3-B-3,
     * table 3-11 and annex A2.5.
     * @public
     * @readonly
     */
    readonly parameterValue: PermittedTransmissionMode;

    constructor (
        parameterName: ParameterName,
        parameterValue: PermittedTransmissionMode
    ) {
        if (parameterName !== ParameterName_permittedTransmissionMode) {
            throw new ASN1Error("FspGetParameter_parPermTransMode.parameterName violates ParameterName (permittedTransmissionMode)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parPermTransMode
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parPermTransMode`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parPermTransMode`.
     * @returns {FspGetParameter_parPermTransMode}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parPermTransMode)]: (FspGetParameter_parPermTransMode)[_K] }): FspGetParameter_parPermTransMode {
        return new FspGetParameter_parPermTransMode(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parPermTransMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parPermTransMode: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parPermTransMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parPermTransMode: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parPermTransMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parPermTransMode: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parPermTransMode: $.ASN1Decoder<FspGetParameter_parPermTransMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parPermTransMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parPermTransMode (el: _Element): FspGetParameter_parPermTransMode {
    if (!_cached_decoder_for_FspGetParameter_parPermTransMode) { _cached_decoder_for_FspGetParameter_parPermTransMode = function (el: _Element): FspGetParameter_parPermTransMode {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parPermTransMode contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: PermittedTransmissionMode;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_PermittedTransmissionMode(sequence[1]);
    return new FspGetParameter_parPermTransMode(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parPermTransMode(el);
}

let _cached_encoder_for_FspGetParameter_parPermTransMode: $.ASN1Encoder<FspGetParameter_parPermTransMode> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parPermTransMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parPermTransMode, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parPermTransMode (value: FspGetParameter_parPermTransMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parPermTransMode) { _cached_encoder_for_FspGetParameter_parPermTransMode = function (value: FspGetParameter_parPermTransMode, _elGetter: $.ASN1Encoder<FspGetParameter_parPermTransMode>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_PermittedTransmissionMode(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parPermTransMode(value, elGetter);
}


/* eslint-enable */
