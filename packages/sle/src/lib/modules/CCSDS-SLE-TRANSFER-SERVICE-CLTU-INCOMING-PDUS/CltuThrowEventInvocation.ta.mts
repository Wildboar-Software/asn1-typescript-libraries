/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { EventInvocationId, _decode_EventInvocationId, _encode_EventInvocationId } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/EventInvocationId.ta.mjs";
import { IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";


/**
 * @summary CltuThrowEventInvocation
 * @description
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
     * @summary `eventInvocationIdentification`.
     * @public
     * @readonly
     */
    readonly eventInvocationIdentification: EventInvocationId;
    /**
     * @summary `eventIdentifier`.
     * @public
     * @readonly
     */
    readonly eventIdentifier: IntPosShort;
    /**
     * @summary `eventQualifier`.
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
    if (!_cached_encoder_for_CltuThrowEventInvocation) { _cached_encoder_for_CltuThrowEventInvocation = function (value: CltuThrowEventInvocation, elGetter: $.ASN1Encoder<CltuThrowEventInvocation>): _Element {
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
