/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { ConditionalTime, _decode_ConditionalTime, _encode_ConditionalTime } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ConditionalTime.ta.mjs";
import { RequestedFrameQuality, _decode_RequestedFrameQuality, _encode_RequestedFrameQuality } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RequestedFrameQuality.ta.mjs";


/**
 * @summary RafStartInvocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafStartInvocation ::= SEQUENCE
 * {   invokerCredentials                Credentials
 * ,   invokeId                          InvokeId
 * ,   startTime                         ConditionalTime
 * ,   stopTime                          ConditionalTime
 * ,   requestedFrameQuality             RequestedFrameQuality
 * }
 * ```
 * 
 * @class
 */
export
class RafStartInvocation {
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
     * @summary `startTime`.
     * @public
     * @readonly
     */
    readonly startTime: ConditionalTime;
    /**
     * @summary `stopTime`.
     * @public
     * @readonly
     */
    readonly stopTime: ConditionalTime;
    /**
     * @summary `requestedFrameQuality`.
     * @public
     * @readonly
     */
    readonly requestedFrameQuality: RequestedFrameQuality;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId,
        startTime: ConditionalTime,
        stopTime: ConditionalTime,
        requestedFrameQuality: RequestedFrameQuality
    ) {
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.requestedFrameQuality = requestedFrameQuality;
    }

    /**
     * @summary Restructures an object into a RafStartInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `RafStartInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RafStartInvocation`.
     * @returns {RafStartInvocation}
     */
    public static _from_object (_o: { [_K in keyof (RafStartInvocation)]: (RafStartInvocation)[_K] }): RafStartInvocation {
        return new RafStartInvocation(_o.invokerCredentials, _o.invokeId, _o.startTime, _o.stopTime, _o.requestedFrameQuality);
    }


}

/**
 * @summary The Leading Root Component Types of RafStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RafStartInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("startTime", false, $.hasAnyTag),
    new $.ComponentSpec("stopTime", false, $.hasAnyTag),
    new $.ComponentSpec("requestedFrameQuality", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RafStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RafStartInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RafStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RafStartInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RafStartInvocation: $.ASN1Decoder<RafStartInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafStartInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafStartInvocation (el: _Element): RafStartInvocation {
    if (!_cached_decoder_for_RafStartInvocation) { _cached_decoder_for_RafStartInvocation = function (el: _Element): RafStartInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("RafStartInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "startTime";
    sequence[3].name = "stopTime";
    sequence[4].name = "requestedFrameQuality";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let startTime!: ConditionalTime;
    let stopTime!: ConditionalTime;
    let requestedFrameQuality!: RequestedFrameQuality;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    startTime = _decode_ConditionalTime(sequence[2]);
    stopTime = _decode_ConditionalTime(sequence[3]);
    requestedFrameQuality = _decode_RequestedFrameQuality(sequence[4]);
    return new RafStartInvocation(
        invokerCredentials,
        invokeId,
        startTime,
        stopTime,
        requestedFrameQuality,

    );
}; }
    return _cached_decoder_for_RafStartInvocation(el);
}

let _cached_encoder_for_RafStartInvocation: $.ASN1Encoder<RafStartInvocation> | null = null;

/**
 * @summary Encodes a(n) RafStartInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafStartInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_RafStartInvocation (value: RafStartInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafStartInvocation) { _cached_encoder_for_RafStartInvocation = function (value: RafStartInvocation, elGetter: $.ASN1Encoder<RafStartInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_ConditionalTime(value.startTime, $.BER),
        /* REQUIRED   */ _encode_ConditionalTime(value.stopTime, $.BER),
        /* REQUIRED   */ _encode_RequestedFrameQuality(value.requestedFrameQuality, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RafStartInvocation(value, elGetter);
}


/* eslint-enable */
