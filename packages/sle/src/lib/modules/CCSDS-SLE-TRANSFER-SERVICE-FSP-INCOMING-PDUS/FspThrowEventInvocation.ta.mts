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
import { IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


/**
 * @summary FspThrowEventInvocation
 * @description
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
    /**
     * @summary `eventInvocationIdentification`.
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
    if (!_cached_encoder_for_FspThrowEventInvocation) { _cached_encoder_for_FspThrowEventInvocation = function (value: FspThrowEventInvocation, elGetter: $.ASN1Encoder<FspThrowEventInvocation>): _Element {
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
