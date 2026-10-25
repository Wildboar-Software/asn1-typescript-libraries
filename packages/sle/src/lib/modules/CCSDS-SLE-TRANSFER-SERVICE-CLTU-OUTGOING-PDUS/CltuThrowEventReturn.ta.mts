/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { type InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { type EventInvocationId, _decode_EventInvocationId, _encode_EventInvocationId } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/EventInvocationId.ta.mjs";
import { type CltuThrowEventReturn_result, _decode_CltuThrowEventReturn_result, _encode_CltuThrowEventReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-OUTGOING-PDUS/CltuThrowEventReturn-result.ta.mjs";


/**
 * @summary CltuThrowEventReturn
 * @description
 * 
 * Provider report of CLTU-THROW-EVENT. The provider state stays unchanged. On a
 * positive result the event is forwarded with minimum delay, and later
 * notifications from the event handler are passed to the user as
 * CLTU-ASYNC-NOTIFY. CCSDS 912.1-B-5, section 3.11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuThrowEventReturn ::= SEQUENCE
 * {  performerCredentials                Credentials
 * ,  invokeId                            InvokeId
 * ,  eventInvocationIdentification       EventInvocationId
 * ,  result                              CHOICE
 *    {  positiveResult                      [0]   NULL
 *    ,  negativeResult                      [1]   DiagnosticCltuThrowEvent
 *    }
 * }
 * ```
 * 
 * @class
 */
export
class CltuThrowEventReturn {
    /**
     * @summary `performerCredentials`.
     * @description
     *
     * Credentials that let the invoker authenticate this return when the agreed
     * authentication level requires it. Set this to unused when authentication
     * is not required. CCSDS 912.1-B-5, section 3.1.5.
     * @public
     * @readonly
     */
    readonly performerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @description
     *
     * The invoke-ID from the invocation, returned unchanged. CCSDS 912.1-B-5,
     * sections 3.11.2.4 and 3.1.6.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `eventInvocationIdentification`.
     * @description
     *
     * Sequence number the provider expects on the next CLTU-THROW-EVENT. One
     * greater than the invocation when this return is positive. When this
     * return is negative, the value the provider still expects: zero for the
     * first event after the first successful BIND, otherwise one greater than
     * the last accepted event. CCSDS 912.1-B-5, section 3.11.2.5.
     * @public
     * @readonly
     */
    readonly eventInvocationIdentification: EventInvocationId;
    /**
     * @summary `result`.
     * @description
     *
     * positiveResult accepts the event for forwarding. negativeResult carries
     * DiagnosticCltuThrowEvent and the event is not forwarded. CCSDS 912.1-B-5,
     * sections 3.11.2.8 and 3.11.3.
     * @public
     * @readonly
     */
    readonly result: CltuThrowEventReturn_result;

    constructor (
        performerCredentials: Credentials,
        invokeId: InvokeId,
        eventInvocationIdentification: EventInvocationId,
        result: CltuThrowEventReturn_result
    ) {
        this.performerCredentials = performerCredentials;
        this.invokeId = invokeId;
        this.eventInvocationIdentification = eventInvocationIdentification;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a CltuThrowEventReturn
     * @description
     * 
     * This takes an `object` and converts it to a `CltuThrowEventReturn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuThrowEventReturn`.
     * @returns {CltuThrowEventReturn}
     */
    public static _from_object (_o: { [_K in keyof (CltuThrowEventReturn)]: (CltuThrowEventReturn)[_K] }): CltuThrowEventReturn {
        return new CltuThrowEventReturn(_o.performerCredentials, _o.invokeId, _o.eventInvocationIdentification, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of CltuThrowEventReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuThrowEventReturn: $.ComponentSpec[] = [
    new $.ComponentSpec("performerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("eventInvocationIdentification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("result", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of CltuThrowEventReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuThrowEventReturn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuThrowEventReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuThrowEventReturn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuThrowEventReturn: $.ASN1Decoder<CltuThrowEventReturn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuThrowEventReturn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuThrowEventReturn (el: _Element): CltuThrowEventReturn {
    if (!_cached_decoder_for_CltuThrowEventReturn) { _cached_decoder_for_CltuThrowEventReturn = function (el: _Element): CltuThrowEventReturn {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("CltuThrowEventReturn contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "performerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "eventInvocationIdentification";
    sequence[3].name = "result";
    let performerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let eventInvocationIdentification!: EventInvocationId;
    let result!: CltuThrowEventReturn_result;
    performerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    eventInvocationIdentification = _decode_EventInvocationId(sequence[2]);
    result = _decode_CltuThrowEventReturn_result(sequence[3]);
    return new CltuThrowEventReturn(
        performerCredentials,
        invokeId,
        eventInvocationIdentification,
        result,

    );
}; }
    return _cached_decoder_for_CltuThrowEventReturn(el);
}

let _cached_encoder_for_CltuThrowEventReturn: $.ASN1Encoder<CltuThrowEventReturn> | null = null;

/**
 * @summary Encodes a(n) CltuThrowEventReturn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuThrowEventReturn, encoded as an ASN.1 Element.
 */
export
function _encode_CltuThrowEventReturn (value: CltuThrowEventReturn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuThrowEventReturn) { _cached_encoder_for_CltuThrowEventReturn = function (value: CltuThrowEventReturn, _elGetter: $.ASN1Encoder<CltuThrowEventReturn>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.performerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_EventInvocationId(value.eventInvocationIdentification, $.BER),
        /* REQUIRED   */ _encode_CltuThrowEventReturn_result(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuThrowEventReturn(value, elGetter);
}


/* eslint-enable */
