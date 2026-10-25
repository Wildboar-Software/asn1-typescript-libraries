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
import { type IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";
import { type IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


/**
 * @summary FspThrowEventInvocation
 * @description
 * 
 * User invocation of FSP-THROW-EVENT. Valid in states 2 (ready) and 3 (active),
 * and only when throwing of events is enabled for the instance. The provider
 * forwards the event to SLE Complex Management with minimal delay. The event is
 * asynchronous with radiation of space-link data units; the user arranges any
 * required alignment, for example by production time or by notifications. The
 * return reports only whether the invocation was accepted. The outcome of the
 * associated actions arrives later by FSP-ASYNC-NOTIFY. A positive result
 * leaves the provider in its original state. Several instances on one physical
 * channel may be allowed to throw events.
 * 
 * CCSDS 912.3-B-3, sections 3.11.1 and 3.11.3. Annex H gives non-binding
 * examples.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspThrowEventInvocation ::= SEQUENCE
 * {  invokerCredentials               Credentials
 * ,  invokeId                         InvokeId
 * ,  eventIdentifier                  IntPosShort
 * ,  eventQualifier                   OCTET STRING (SIZE (1 .. 1024))
 * ,  eventInvocationIdentification    IntUnsignedLong
 * }
 * ```
 * 
 * @class
 */
export
class FspThrowEventInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     * Information with which the performer authenticates this invocation. When
     * the agreed level is `all`, every FSP invocation and return except
     * FSP-PEER-ABORT is authenticated; `bind` authenticates only FSP-BIND;
     * `none` leaves every invocation and return unauthenticated. When this
     * invocation is unauthenticated, the value should be `unused`.
     * 
     * CCSDS 912.3-B-3, sections 3.1.5.1, 3.1.5.4, and 3.1.5.5.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @description
     * Invoker-chosen integer, returned unchanged, that pairs this return with
     * its invocation. An invoke-ID that still has an outstanding return in the
     * same service instance is rejected with `duplicateInvokeId`.
     * 
     * CCSDS 912.3-B-3, sections 3.1.6.4 and 3.1.6.5.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `eventIdentifier`.
     * @description
     * Identifies the event the provider forwards to Complex Management. The
     * provider and Complex Management must already have agreed the identifiers
     * and the interpretation of `eventQualifier`. An identifier outside the set
     * Complex Management recognizes is rejected with `noSuchEvent`. Annex H
     * lists informative, non-binding examples (Set Mod, Change Rate, Change
     * Index, and Change Rate/Index, numbered 1 through 4). This issue does not
     * define a required set of identifiers.
     * 
     * CCSDS 912.3-B-3, sections 3.11.2.5, 3.11.2.9, and annex H.
     * @public
     * @readonly
     */
    readonly eventIdentifier: IntPosShort;
    /**
     * @summary `eventQualifier`.
     * @description
     * Additional data, forwarded with `eventIdentifier`, that constrains the
     * actions Complex Management takes. Its contents depend on the event. The
     * provider checks only that the value is an octet string of length 1 to
     * 1024, as annex A specifies. Complex Management checks the contents. An
     * error found there is reported by FSP-ASYNC-NOTIFY with
     * `actionListNotCompleted`.
     * 
     * CCSDS 912.3-B-3, sections 3.11.2.6 and 3.11.3.1.
     * @public
     * @readonly
     */
    readonly eventQualifier: OCTET_STRING;
    /**
     * @summary `eventInvocationIdentification`.
     * @description
     * Monotonic sequence number of this throw-event invocation. The first
     * invocation after the first successful FSP-BIND is 0, and each accepted
     * invocation increments it. The next invocation uses the value the provider
     * returned. The expected value survives release or abort of the
     * association. The provider uses the user-supplied value to reference the
     * event in later reports.
     * 
     * CCSDS 912.3-B-3, section 3.11.2.7.
     * @public
     * @readonly
     */
    readonly eventInvocationIdentification: IntUnsignedLong;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId,
        eventIdentifier: IntPosShort,
        eventQualifier: OCTET_STRING,
        eventInvocationIdentification: IntUnsignedLong
    ) {
        if (eventQualifier.length < 1 || eventQualifier.length > 1024) {
            throw new ASN1SizeError("FspThrowEventInvocation.eventQualifier violates SIZE (1..1024)");
        }
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
        this.eventIdentifier = eventIdentifier;
        this.eventQualifier = eventQualifier;
        this.eventInvocationIdentification = eventInvocationIdentification;
    }

    /**
     * @summary Restructures an object into a FspThrowEventInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `FspThrowEventInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspThrowEventInvocation`.
     * @returns {FspThrowEventInvocation}
     */
    public static _from_object (_o: { [_K in keyof (FspThrowEventInvocation)]: (FspThrowEventInvocation)[_K] }): FspThrowEventInvocation {
        return new FspThrowEventInvocation(_o.invokerCredentials, _o.invokeId, _o.eventIdentifier, _o.eventQualifier, _o.eventInvocationIdentification);
    }


}

/**
 * @summary The Leading Root Component Types of FspThrowEventInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspThrowEventInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("eventIdentifier", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("eventQualifier", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("eventInvocationIdentification", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspThrowEventInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspThrowEventInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspThrowEventInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspThrowEventInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspThrowEventInvocation: $.ASN1Decoder<FspThrowEventInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspThrowEventInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspThrowEventInvocation (el: _Element): FspThrowEventInvocation {
    if (!_cached_decoder_for_FspThrowEventInvocation) { _cached_decoder_for_FspThrowEventInvocation = function (el: _Element): FspThrowEventInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("FspThrowEventInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "eventIdentifier";
    sequence[3].name = "eventQualifier";
    sequence[4].name = "eventInvocationIdentification";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let eventIdentifier!: IntPosShort;
    let eventQualifier!: OCTET_STRING;
    let eventInvocationIdentification!: IntUnsignedLong;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    eventIdentifier = _decode_IntPosShort(sequence[2]);
    eventQualifier = $._decodeOctetString(sequence[3]);
    eventInvocationIdentification = _decode_IntUnsignedLong(sequence[4]);
    return new FspThrowEventInvocation(
        invokerCredentials,
        invokeId,
        eventIdentifier,
        eventQualifier,
        eventInvocationIdentification,

    );
}; }
    return _cached_decoder_for_FspThrowEventInvocation(el);
}

let _cached_encoder_for_FspThrowEventInvocation: $.ASN1Encoder<FspThrowEventInvocation> | null = null;

/**
 * @summary Encodes a(n) FspThrowEventInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspThrowEventInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_FspThrowEventInvocation (value: FspThrowEventInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspThrowEventInvocation) { _cached_encoder_for_FspThrowEventInvocation = function (value: FspThrowEventInvocation, _elGetter: $.ASN1Encoder<FspThrowEventInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_IntPosShort(value.eventIdentifier, $.BER),
        /* REQUIRED   */ $._encodeOctetString(value.eventQualifier, $.BER),
        /* REQUIRED   */ _encode_IntUnsignedLong(value.eventInvocationIdentification, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspThrowEventInvocation(value, elGetter);
}


/* eslint-enable */
