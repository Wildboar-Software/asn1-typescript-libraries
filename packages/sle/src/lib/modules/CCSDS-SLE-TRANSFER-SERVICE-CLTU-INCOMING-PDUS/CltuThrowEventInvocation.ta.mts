/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { type InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { type EventInvocationId, _decode_EventInvocationId, _encode_EventInvocationId } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/EventInvocationId.ta.mjs";
import { type IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";


/**
 * @summary CltuThrowEventInvocation
 * @description
 * 
 * User request that the provider forward an event to SLE Complex Management.
 * Valid in state 2 (ready) and state 3 (active). Confirmed and non-blocking.
 * The return reports only whether the invocation was accepted. Completion of
 * the actions is reported later by CLTU-ASYNC-NOTIFY. The operation is optional
 * (Annex C). The event is asynchronous with CLTU radiation; the user aligns it
 * with a particular CLTU when that is required. While the provider processes an
 * accepted event it may reject CLTU-TRANSFER-DATA with diagnostic unable to
 * process, without a fault notification. CCSDS 912.1-B-5, sections 3.11 and
 * 3.6.2.13.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuThrowEventInvocation ::= SEQUENCE
 * {  invokerCredentials               Credentials
 * ,  invokeId                         InvokeId
 * ,  eventInvocationIdentification    EventInvocationId
 * ,  eventIdentifier                  IntPosShort
 * ,  eventQualifier                   OCTET STRING (SIZE (1 .. 1024))
 * }
 * ```
 * 
 * @class
 */
export
class CltuThrowEventInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     *
     * Credentials that let the performer authenticate this invocation when the
     * agreed authentication level requires it. Set this to unused when
     * authentication is not required. CCSDS 912.1-B-5, section 3.1.5.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @description
     *
     * Invoker-supplied integer. The performer returns it unchanged so the
     * return can be matched to this invocation. Reusing a value that still has
     * a return outstanding is rejected with diagnostic duplicate invoke id.
     * CCSDS 912.1-B-5, section 3.1.6.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `eventInvocationIdentification`.
     * @description
     *
     * Monotonic sequence number for this event. Zero on the first
     * CLTU-THROW-EVENT after the first successful CLTU-BIND to the service
     * instance, then one greater for each invocation the provider accepts. The
     * next invocation uses the value returned by the provider. Releasing or
     * aborting the association leaves the expected value unchanged. A mismatch
     * with the expected value yields diagnostic out of sequence. CCSDS
     * 912.1-B-5, section 3.11.2.5.
     * @public
     * @readonly
     */
    readonly eventInvocationIdentification: EventInvocationId;
    /**
     * @summary `eventIdentifier`.
     * @description
     *
     * Identifies the event to forward to SLE Complex Management. The set of
     * identifiers is agreed by service management; this book does not enumerate
     * them. An example is a bit-rate change, thrown after the spacecraft has
     * been commanded to the new rate. An identifier outside the recognized set
     * yields diagnostic no such event. CCSDS 912.1-B-5, sections 3.11.1 and
     * 3.11.2.6.
     * @public
     * @readonly
     */
    readonly eventIdentifier: IntPosShort;
    /**
     * @summary `eventQualifier`.
     * @description
     *
     * Additional data forwarded with event-identifier, 1 to 1024 octets. Its
     * meaning depends on the event; for a bit-rate change it may carry the new
     * rate. The provider checks only the octet string and the length. Complex
     * Management checks the contents and, on error, reports action list not
     * completed. CCSDS 912.1-B-5, sections 3.11.2.7 and 3.11.3.
     * @public
     * @readonly
     */
    readonly eventQualifier: OCTET_STRING;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId,
        eventInvocationIdentification: EventInvocationId,
        eventIdentifier: IntPosShort,
        eventQualifier: OCTET_STRING
    ) {
        if (eventQualifier.length < 1 || eventQualifier.length > 1024) {
            throw new ASN1SizeError("CltuThrowEventInvocation.eventQualifier violates SIZE (1..1024)");
        }
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
        this.eventInvocationIdentification = eventInvocationIdentification;
        this.eventIdentifier = eventIdentifier;
        this.eventQualifier = eventQualifier;
    }

    /**
     * @summary Restructures an object into a CltuThrowEventInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `CltuThrowEventInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuThrowEventInvocation`.
     * @returns {CltuThrowEventInvocation}
     */
    public static _from_object (_o: { [_K in keyof (CltuThrowEventInvocation)]: (CltuThrowEventInvocation)[_K] }): CltuThrowEventInvocation {
        return new CltuThrowEventInvocation(_o.invokerCredentials, _o.invokeId, _o.eventInvocationIdentification, _o.eventIdentifier, _o.eventQualifier);
    }


}

/**
 * @summary The Leading Root Component Types of CltuThrowEventInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuThrowEventInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("eventInvocationIdentification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("eventIdentifier", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("eventQualifier", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of CltuThrowEventInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuThrowEventInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuThrowEventInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuThrowEventInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuThrowEventInvocation: $.ASN1Decoder<CltuThrowEventInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuThrowEventInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuThrowEventInvocation (el: _Element): CltuThrowEventInvocation {
    if (!_cached_decoder_for_CltuThrowEventInvocation) { _cached_decoder_for_CltuThrowEventInvocation = function (el: _Element): CltuThrowEventInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("CltuThrowEventInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "eventInvocationIdentification";
    sequence[3].name = "eventIdentifier";
    sequence[4].name = "eventQualifier";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let eventInvocationIdentification!: EventInvocationId;
    let eventIdentifier!: IntPosShort;
    let eventQualifier!: OCTET_STRING;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    eventInvocationIdentification = _decode_EventInvocationId(sequence[2]);
    eventIdentifier = _decode_IntPosShort(sequence[3]);
    eventQualifier = $._decodeOctetString(sequence[4]);
    return new CltuThrowEventInvocation(
        invokerCredentials,
        invokeId,
        eventInvocationIdentification,
        eventIdentifier,
        eventQualifier,

    );
}; }
    return _cached_decoder_for_CltuThrowEventInvocation(el);
}

let _cached_encoder_for_CltuThrowEventInvocation: $.ASN1Encoder<CltuThrowEventInvocation> | null = null;

/**
 * @summary Encodes a(n) CltuThrowEventInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuThrowEventInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_CltuThrowEventInvocation (value: CltuThrowEventInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuThrowEventInvocation) { _cached_encoder_for_CltuThrowEventInvocation = function (value: CltuThrowEventInvocation, _elGetter: $.ASN1Encoder<CltuThrowEventInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_EventInvocationId(value.eventInvocationIdentification, $.BER),
        /* REQUIRED   */ _encode_IntPosShort(value.eventIdentifier, $.BER),
        /* REQUIRED   */ $._encodeOctetString(value.eventQualifier, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuThrowEventInvocation(value, elGetter);
}


/* eslint-enable */
