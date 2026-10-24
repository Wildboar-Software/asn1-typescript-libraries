/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_clcwPhysicalChannel
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { type ClcwPhysicalChannel, _decode_ClcwPhysicalChannel, _encode_ClcwPhysicalChannel } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/ClcwPhysicalChannel.ta.mjs";



/**
 * @summary CltuGetParameter_parClcwPhysicalChannel
 * @description
 * 
 * clcw-physical-channel. Names the RF return channel that carries the CLCW, and
 * thereby the transfer-frame version (TM, AOS, USLP fixed-length, or USLP
 * variable-length). notConfigured means this service instance does not evaluate
 * the CLCW. Set by service management. CCSDS 912.1-B-5, table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parClcwPhysicalChannel ::= SEQUENCE
 *    {  parameterName                    ParameterName
 *                                           (clcwPhysicalChannel)
 * ,  parameterValue                      ClcwPhysicalChannel
 *    }
 * ```
 * 
 * @class
 */
export
class CltuGetParameter_parClcwPhysicalChannel {
    /**
     * @summary `parameterName`.
     * @description
     *
     * Must be `clcwPhysicalChannel`. Names the clcw-physical-channel parameter
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
     * Return-channel name of 1 to 32 characters, or notConfigured when the CLCW
     * is not evaluated. CCSDS 912.1-B-5, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: ClcwPhysicalChannel;

    constructor (
        parameterName: ParameterName,
        parameterValue: ClcwPhysicalChannel
    ) {
        if (parameterName !== ParameterName_clcwPhysicalChannel) {
            throw new ASN1Error("CltuGetParameter_parClcwPhysicalChannel.parameterName violates ParameterName (clcwPhysicalChannel)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a CltuGetParameter_parClcwPhysicalChannel
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameter_parClcwPhysicalChannel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameter_parClcwPhysicalChannel`.
     * @returns {CltuGetParameter_parClcwPhysicalChannel}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameter_parClcwPhysicalChannel)]: (CltuGetParameter_parClcwPhysicalChannel)[_K] }): CltuGetParameter_parClcwPhysicalChannel {
        return new CltuGetParameter_parClcwPhysicalChannel(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameter_parClcwPhysicalChannel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameter_parClcwPhysicalChannel: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameter_parClcwPhysicalChannel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameter_parClcwPhysicalChannel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameter_parClcwPhysicalChannel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameter_parClcwPhysicalChannel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameter_parClcwPhysicalChannel: $.ASN1Decoder<CltuGetParameter_parClcwPhysicalChannel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parClcwPhysicalChannel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parClcwPhysicalChannel (el: _Element): CltuGetParameter_parClcwPhysicalChannel {
    if (!_cached_decoder_for_CltuGetParameter_parClcwPhysicalChannel) { _cached_decoder_for_CltuGetParameter_parClcwPhysicalChannel = function (el: _Element): CltuGetParameter_parClcwPhysicalChannel {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuGetParameter-parClcwPhysicalChannel contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: ClcwPhysicalChannel;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_ClcwPhysicalChannel(sequence[1]);
    return new CltuGetParameter_parClcwPhysicalChannel(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_CltuGetParameter_parClcwPhysicalChannel(el);
}

let _cached_encoder_for_CltuGetParameter_parClcwPhysicalChannel: $.ASN1Encoder<CltuGetParameter_parClcwPhysicalChannel> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parClcwPhysicalChannel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parClcwPhysicalChannel, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parClcwPhysicalChannel (value: CltuGetParameter_parClcwPhysicalChannel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parClcwPhysicalChannel) { _cached_encoder_for_CltuGetParameter_parClcwPhysicalChannel = function (value: CltuGetParameter_parClcwPhysicalChannel, _elGetter: $.ASN1Encoder<CltuGetParameter_parClcwPhysicalChannel>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_ClcwPhysicalChannel(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameter_parClcwPhysicalChannel(value, elGetter);
}


/* eslint-enable */
