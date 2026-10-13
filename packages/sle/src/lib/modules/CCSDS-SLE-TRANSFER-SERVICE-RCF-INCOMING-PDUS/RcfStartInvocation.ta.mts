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
import { GvcId, _decode_GvcId, _encode_GvcId } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/GvcId.ta.mjs";


/**
 * @summary RcfStartInvocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfStartInvocation ::= SEQUENCE
 * {   invokerCredentials               Credentials
 * ,   invokeId                         InvokeId
 * ,   startTime                        ConditionalTime
 * ,   stopTime                         ConditionalTime
 * ,   requestedGvcid                   GvcId
 * }
 * ```
 * 
 * @class
 */
export
class RcfStartInvocation {
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
     * @summary `requestedGvcid`.
     * @public
     * @readonly
     */
    readonly requestedGvcid: GvcId;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId,
        startTime: ConditionalTime,
        stopTime: ConditionalTime,
        requestedGvcid: GvcId
    ) {
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.requestedGvcid = requestedGvcid;
    }

    /**
     * @summary Restructures an object into a RcfStartInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `RcfStartInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RcfStartInvocation`.
     * @returns {RcfStartInvocation}
     */
    public static _from_object (_o: { [_K in keyof (RcfStartInvocation)]: (RcfStartInvocation)[_K] }): RcfStartInvocation {
        return new RcfStartInvocation(_o.invokerCredentials, _o.invokeId, _o.startTime, _o.stopTime, _o.requestedGvcid);
    }


}

/**
 * @summary The Leading Root Component Types of RcfStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RcfStartInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("startTime", false, $.hasAnyTag),
    new $.ComponentSpec("stopTime", false, $.hasAnyTag),
    new $.ComponentSpec("requestedGvcid", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of RcfStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RcfStartInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RcfStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RcfStartInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RcfStartInvocation: $.ASN1Decoder<RcfStartInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfStartInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfStartInvocation (el: _Element): RcfStartInvocation {
    if (!_cached_decoder_for_RcfStartInvocation) { _cached_decoder_for_RcfStartInvocation = function (el: _Element): RcfStartInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("RcfStartInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "startTime";
    sequence[3].name = "stopTime";
    sequence[4].name = "requestedGvcid";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let startTime!: ConditionalTime;
    let stopTime!: ConditionalTime;
    let requestedGvcid!: GvcId;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    startTime = _decode_ConditionalTime(sequence[2]);
    stopTime = _decode_ConditionalTime(sequence[3]);
    requestedGvcid = _decode_GvcId(sequence[4]);
    return new RcfStartInvocation(
        invokerCredentials,
        invokeId,
        startTime,
        stopTime,
        requestedGvcid,

    );
}; }
    return _cached_decoder_for_RcfStartInvocation(el);
}

let _cached_encoder_for_RcfStartInvocation: $.ASN1Encoder<RcfStartInvocation> | null = null;

/**
 * @summary Encodes a(n) RcfStartInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfStartInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_RcfStartInvocation (value: RcfStartInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfStartInvocation) { _cached_encoder_for_RcfStartInvocation = function (value: RcfStartInvocation, elGetter: $.ASN1Encoder<RcfStartInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_ConditionalTime(value.startTime, $.BER),
        /* REQUIRED   */ _encode_ConditionalTime(value.stopTime, $.BER),
        /* REQUIRED   */ _encode_GvcId(value.requestedGvcid, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RcfStartInvocation(value, elGetter);
}


/* eslint-enable */
