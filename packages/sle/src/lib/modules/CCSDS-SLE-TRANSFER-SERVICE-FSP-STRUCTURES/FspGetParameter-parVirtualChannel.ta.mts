/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_virtualChannel
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { VcOrMapId, _decode_VcOrMapId, _encode_VcOrMapId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/VcOrMapId.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary FspGetParameter_parVirtualChannel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parVirtualChannel ::= SEQUENCE
 *    {  parameterName     ParameterName (virtualChannel)
 *    ,  parameterValue    VcOrMapId
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parVirtualChannel {
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
    readonly parameterValue: VcOrMapId;

    constructor (
        parameterName: ParameterName,
        parameterValue: VcOrMapId
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_virtualChannel)])) {
            throw new ASN1Error("FspGetParameter_parVirtualChannel.parameterName violates ParameterName (virtualChannel)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parVirtualChannel
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parVirtualChannel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parVirtualChannel`.
     * @returns {FspGetParameter_parVirtualChannel}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parVirtualChannel)]: (FspGetParameter_parVirtualChannel)[_K] }): FspGetParameter_parVirtualChannel {
        return new FspGetParameter_parVirtualChannel(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parVirtualChannel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parVirtualChannel: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parVirtualChannel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parVirtualChannel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parVirtualChannel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parVirtualChannel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parVirtualChannel: $.ASN1Decoder<FspGetParameter_parVirtualChannel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parVirtualChannel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parVirtualChannel (el: _Element): FspGetParameter_parVirtualChannel {
    if (!_cached_decoder_for_FspGetParameter_parVirtualChannel) { _cached_decoder_for_FspGetParameter_parVirtualChannel = function (el: _Element): FspGetParameter_parVirtualChannel {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parVirtualChannel contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: VcOrMapId;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_VcOrMapId(sequence[1]);
    return new FspGetParameter_parVirtualChannel(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parVirtualChannel(el);
}

let _cached_encoder_for_FspGetParameter_parVirtualChannel: $.ASN1Encoder<FspGetParameter_parVirtualChannel> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parVirtualChannel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parVirtualChannel, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parVirtualChannel (value: FspGetParameter_parVirtualChannel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parVirtualChannel) { _cached_encoder_for_FspGetParameter_parVirtualChannel = function (value: FspGetParameter_parVirtualChannel, _elGetter: $.ASN1Encoder<FspGetParameter_parVirtualChannel>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_VcOrMapId(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parVirtualChannel(value, elGetter);
}


/* eslint-enable */
