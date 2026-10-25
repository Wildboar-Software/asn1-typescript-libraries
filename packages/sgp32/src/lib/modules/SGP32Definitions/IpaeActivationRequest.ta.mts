/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IpaeActivationRequest_ipaeOption, _decode_IpaeActivationRequest_ipaeOption, _encode_IpaeActivationRequest_ipaeOption } from "../SGP32Definitions/IpaeActivationRequest-ipaeOption.ta.mjs";


/**
 * @summary IpaeActivationRequest
 * @description
 * 
 * Command the IoT Device sends to the ISD-R to activate IPAe, using the
 * transport defined in SGP.22 section 5.7.2. The Device MAY send it when it
 * supports Annex A.2 and the eUICC set `ipaeSupported`. If the Device
 * indicated IPAd support and does not send this command, the eUICC SHALL NOT
 * activate IPAe. If the Device indicated that IPAd is not supported, the eUICC
 * SHALL activate IPAe when it supports IPAe. SGP.32 v1.2, section 3.8.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaeActivationRequest ::= [66] SEQUENCE { -- Tag 'BF42'
 *     ipaeOption BIT STRING {
 *         activateIpae(0) -- IPAe activation
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class IpaeActivationRequest {
    /**
     * @summary `ipaeOption`.
     * @description
     * Options for IPAe activation. The `activateIpae` bit requests activation of
     * the IPA in the eUICC. SGP.32 v1.2, section 3.8.4.
     * @public
     * @readonly
     */
    public readonly ipaeOption: IpaeActivationRequest_ipaeOption;

    constructor (
        ipaeOption: IpaeActivationRequest_ipaeOption
    ) {
        this.ipaeOption = ipaeOption;
    }

    /**
     * @summary Restructures an object into a IpaeActivationRequest
     * @description
     * 
     * This takes an `object` and converts it to a `IpaeActivationRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IpaeActivationRequest`.
     * @returns {IpaeActivationRequest}
     */
    public static _from_object (_o: { [_K in keyof (IpaeActivationRequest)]: (IpaeActivationRequest)[_K] }): IpaeActivationRequest {
        return new IpaeActivationRequest(_o.ipaeOption);
    }


}

/**
 * @summary The Leading Root Component Types of IpaeActivationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IpaeActivationRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("ipaeOption", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of IpaeActivationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IpaeActivationRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IpaeActivationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IpaeActivationRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IpaeActivationRequest: $.ASN1Decoder<IpaeActivationRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpaeActivationRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IpaeActivationRequest (el: _Element): IpaeActivationRequest {
    if (!_cached_decoder_for_IpaeActivationRequest) { _cached_decoder_for_IpaeActivationRequest = $._decode_implicit<IpaeActivationRequest>(() => function (el: _Element): IpaeActivationRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("IpaeActivationRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ipaeOption";
    const ipaeOption: IpaeActivationRequest_ipaeOption = _decode_IpaeActivationRequest_ipaeOption(sequence[0]);
    return new IpaeActivationRequest(
        ipaeOption,

    );
}); }
    return _cached_decoder_for_IpaeActivationRequest(el);
}

let _cached_encoder_for_IpaeActivationRequest: $.ASN1Encoder<IpaeActivationRequest> | null = null;

/**
 * @summary Encodes a(n) IpaeActivationRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpaeActivationRequest, encoded as an ASN.1 Element.
 */
export
function _encode_IpaeActivationRequest (value: IpaeActivationRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IpaeActivationRequest) { _cached_encoder_for_IpaeActivationRequest = $._encode_implicit(_TagClass.context, 66, () => function (value: IpaeActivationRequest): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IpaeActivationRequest_ipaeOption(value.ipaeOption, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_IpaeActivationRequest(value, elGetter);
}


/* eslint-enable */
