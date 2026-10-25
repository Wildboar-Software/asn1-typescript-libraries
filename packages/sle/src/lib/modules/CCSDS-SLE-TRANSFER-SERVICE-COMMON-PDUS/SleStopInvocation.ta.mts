/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { type InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";


/**
 * @summary SleStopInvocation
 * @description
 * 
 * Invocation of STOP. The user asks the provider to stop delivering telemetry
 * frames. Valid only in state 3 (active). Within the provision period the user
 * may start delivery again with START. Annex A2.6 maps this PDU to RAF-STOP.
 * 
 * CCSDS 911.1-B-5, section 3.5.1 and annex A2.6.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SleStopInvocation ::= SEQUENCE
 * { invokerCredentials       Credentials
 * , invokeId                 InvokeId
 * }
 * ```
 * 
 * @class
 */
export
class SleStopInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     * 
     * Information with which the performer authenticates this RAF-STOP
     * invocation. When the agreed level is `all`, STOP is authenticated.
     * Otherwise the value should be `unused`.
     *
     * CCSDS 911.1-B-5, sections 3.5.2.2 and 3.1.5.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @description
     * 
     * User-supplied integer that the provider returns unchanged. A value that
     * still has an outstanding return in this service instance is rejected with
     * `duplicateInvokeId`.
     *
     * CCSDS 911.1-B-5, sections 3.5.2.4 and 3.1.6.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId
    ) {
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
    }

    /**
     * @summary Restructures an object into a SleStopInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `SleStopInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SleStopInvocation`.
     * @returns {SleStopInvocation}
     */
    public static _from_object (_o: { [_K in keyof (SleStopInvocation)]: (SleStopInvocation)[_K] }): SleStopInvocation {
        return new SleStopInvocation(_o.invokerCredentials, _o.invokeId);
    }


}

/**
 * @summary The Leading Root Component Types of SleStopInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SleStopInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of SleStopInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SleStopInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SleStopInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SleStopInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SleStopInvocation: $.ASN1Decoder<SleStopInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SleStopInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SleStopInvocation (el: _Element): SleStopInvocation {
    if (!_cached_decoder_for_SleStopInvocation) { _cached_decoder_for_SleStopInvocation = function (el: _Element): SleStopInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SleStopInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    return new SleStopInvocation(
        invokerCredentials,
        invokeId,

    );
}; }
    return _cached_decoder_for_SleStopInvocation(el);
}

let _cached_encoder_for_SleStopInvocation: $.ASN1Encoder<SleStopInvocation> | null = null;

/**
 * @summary Encodes a(n) SleStopInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SleStopInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_SleStopInvocation (value: SleStopInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SleStopInvocation) { _cached_encoder_for_SleStopInvocation = function (value: SleStopInvocation, _elGetter: $.ASN1Encoder<SleStopInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_SleStopInvocation(value, elGetter);
}


/* eslint-enable */
