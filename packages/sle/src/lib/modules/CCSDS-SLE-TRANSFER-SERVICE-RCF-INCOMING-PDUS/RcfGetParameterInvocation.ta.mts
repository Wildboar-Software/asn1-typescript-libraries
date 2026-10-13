/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
// export { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
// export { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { RcfParameterName, _decode_RcfParameterName, _encode_RcfParameterName } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfParameterName.ta.mjs";
// export { RcfParameterName, _decode_RcfParameterName, _encode_RcfParameterName } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfParameterName.ta.mjs";


/**
 * @summary RcfGetParameterInvocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfGetParameterInvocation ::= SEQUENCE
 * {   invokerCredentials                Credentials
 * ,   invokeId                          InvokeId
 * ,   rcfParameter                      RcfParameterName
 * }
 * ```
 * 
 * @class
 */
export
class RcfGetParameterInvocation {
    /**
     * @summary `invokerCredentials`.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `rcfParameter`.
     * @public
     * @readonly
     */
    readonly rcfParameter: RcfParameterName;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId,
        rcfParameter: RcfParameterName
    ) {
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
        this.rcfParameter = rcfParameter;
    }

    /**
     * @summary Restructures an object into a RcfGetParameterInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `RcfGetParameterInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RcfGetParameterInvocation`.
     * @returns {RcfGetParameterInvocation}
     */
    public static _from_object (_o: { [_K in keyof (RcfGetParameterInvocation)]: (RcfGetParameterInvocation)[_K] }): RcfGetParameterInvocation {
        return new RcfGetParameterInvocation(_o.invokerCredentials, _o.invokeId, _o.rcfParameter);
    }


}

/**
 * @summary The Leading Root Component Types of RcfGetParameterInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RcfGetParameterInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("rcfParameter", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RcfGetParameterInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RcfGetParameterInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RcfGetParameterInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RcfGetParameterInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RcfGetParameterInvocation: $.ASN1Decoder<RcfGetParameterInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfGetParameterInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfGetParameterInvocation (el: _Element): RcfGetParameterInvocation {
    if (!_cached_decoder_for_RcfGetParameterInvocation) { _cached_decoder_for_RcfGetParameterInvocation = function (el: _Element): RcfGetParameterInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("RcfGetParameterInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "rcfParameter";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let rcfParameter!: RcfParameterName;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    rcfParameter = _decode_RcfParameterName(sequence[2]);
    return new RcfGetParameterInvocation(
        invokerCredentials,
        invokeId,
        rcfParameter,

    );
}; }
    return _cached_decoder_for_RcfGetParameterInvocation(el);
}

let _cached_encoder_for_RcfGetParameterInvocation: $.ASN1Encoder<RcfGetParameterInvocation> | null = null;

/**
 * @summary Encodes a(n) RcfGetParameterInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfGetParameterInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_RcfGetParameterInvocation (value: RcfGetParameterInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfGetParameterInvocation) { _cached_encoder_for_RcfGetParameterInvocation = function (value: RcfGetParameterInvocation, elGetter: $.ASN1Encoder<RcfGetParameterInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_RcfParameterName(value.rcfParameter, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RcfGetParameterInvocation(value, elGetter);
}


/* eslint-enable */
