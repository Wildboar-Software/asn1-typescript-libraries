/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_clcwPhysicalChannel
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { ClcwPhysicalChannel, _decode_ClcwPhysicalChannel, _encode_ClcwPhysicalChannel } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/ClcwPhysicalChannel.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary FspGetParameter_parClcwPhysicalChannel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parClcwPhysicalChannel ::= SEQUENCE
 *    {  parameterName        ParameterName  (clcwPhysicalChannel)
 *    ,  parameterValue       ClcwPhysicalChannel
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parClcwPhysicalChannel {
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
    readonly parameterValue: ClcwPhysicalChannel;

    constructor (
        parameterName: ParameterName,
        parameterValue: ClcwPhysicalChannel
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_clcwPhysicalChannel)])) {
            throw new ASN1Error("FspGetParameter_parClcwPhysicalChannel.parameterName violates ParameterName (clcwPhysicalChannel)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parClcwPhysicalChannel
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parClcwPhysicalChannel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parClcwPhysicalChannel`.
     * @returns {FspGetParameter_parClcwPhysicalChannel}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parClcwPhysicalChannel)]: (FspGetParameter_parClcwPhysicalChannel)[_K] }): FspGetParameter_parClcwPhysicalChannel {
        return new FspGetParameter_parClcwPhysicalChannel(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parClcwPhysicalChannel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parClcwPhysicalChannel: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parClcwPhysicalChannel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parClcwPhysicalChannel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parClcwPhysicalChannel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parClcwPhysicalChannel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parClcwPhysicalChannel: $.ASN1Decoder<FspGetParameter_parClcwPhysicalChannel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parClcwPhysicalChannel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parClcwPhysicalChannel (el: _Element): FspGetParameter_parClcwPhysicalChannel {
    if (!_cached_decoder_for_FspGetParameter_parClcwPhysicalChannel) { _cached_decoder_for_FspGetParameter_parClcwPhysicalChannel = function (el: _Element): FspGetParameter_parClcwPhysicalChannel {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parClcwPhysicalChannel contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: ClcwPhysicalChannel;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_ClcwPhysicalChannel(sequence[1]);
    return new FspGetParameter_parClcwPhysicalChannel(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parClcwPhysicalChannel(el);
}

let _cached_encoder_for_FspGetParameter_parClcwPhysicalChannel: $.ASN1Encoder<FspGetParameter_parClcwPhysicalChannel> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parClcwPhysicalChannel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parClcwPhysicalChannel, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parClcwPhysicalChannel (value: FspGetParameter_parClcwPhysicalChannel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parClcwPhysicalChannel) { _cached_encoder_for_FspGetParameter_parClcwPhysicalChannel = function (value: FspGetParameter_parClcwPhysicalChannel, _elGetter: $.ASN1Encoder<FspGetParameter_parClcwPhysicalChannel>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_ClcwPhysicalChannel(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parClcwPhysicalChannel(value, elGetter);
}


/* eslint-enable */
