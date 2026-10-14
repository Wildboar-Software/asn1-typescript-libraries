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
import { GvcId, _decode_GvcId, _encode_GvcId } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/GvcId.ta.mjs";
import { ControlWordType, _decode_ControlWordType, _encode_ControlWordType } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/ControlWordType.ta.mjs";
import { UpdateMode, _decode_UpdateMode, _encode_UpdateMode } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/UpdateMode.ta.mjs";


/**
 * @summary RocfStartInvocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfStartInvocation ::= SEQUENCE
 * {  invokerCredentials            Credentials
 * ,  invokeId                      InvokeId
 * ,  startTime                     ConditionalTime
 * ,  stopTime                      ConditionalTime
 * ,  requestedGvcid                GvcId
 * ,  controlWordType               ControlWordType
 * ,  updateMode                    UpdateMode
 * }
 * ```
 * 
 * @class
 */
export
class RocfStartInvocation {
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
    /**
     * @summary `controlWordType`.
     * @public
     * @readonly
     */
    readonly controlWordType: ControlWordType;
    /**
     * @summary `updateMode`.
     * @public
     * @readonly
     */
    readonly updateMode: UpdateMode;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId,
        startTime: ConditionalTime,
        stopTime: ConditionalTime,
        requestedGvcid: GvcId,
        controlWordType: ControlWordType,
        updateMode: UpdateMode
    ) {
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.requestedGvcid = requestedGvcid;
        this.controlWordType = controlWordType;
        this.updateMode = updateMode;
    }

    /**
     * @summary Restructures an object into a RocfStartInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `RocfStartInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfStartInvocation`.
     * @returns {RocfStartInvocation}
     */
    public static _from_object (_o: { [_K in keyof (RocfStartInvocation)]: (RocfStartInvocation)[_K] }): RocfStartInvocation {
        return new RocfStartInvocation(_o.invokerCredentials, _o.invokeId, _o.startTime, _o.stopTime, _o.requestedGvcid, _o.controlWordType, _o.updateMode);
    }


}

/**
 * @summary The Leading Root Component Types of RocfStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfStartInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("startTime", false, $.hasAnyTag),
    new $.ComponentSpec("stopTime", false, $.hasAnyTag),
    new $.ComponentSpec("requestedGvcid", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("controlWordType", false, $.hasAnyTag),
    new $.ComponentSpec("updateMode", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RocfStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfStartInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfStartInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfStartInvocation: $.ASN1Decoder<RocfStartInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfStartInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfStartInvocation (el: _Element): RocfStartInvocation {
    if (!_cached_decoder_for_RocfStartInvocation) { _cached_decoder_for_RocfStartInvocation = function (el: _Element): RocfStartInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 7) {
        throw new _ConstructionError("RocfStartInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "startTime";
    sequence[3].name = "stopTime";
    sequence[4].name = "requestedGvcid";
    sequence[5].name = "controlWordType";
    sequence[6].name = "updateMode";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let startTime!: ConditionalTime;
    let stopTime!: ConditionalTime;
    let requestedGvcid!: GvcId;
    let controlWordType!: ControlWordType;
    let updateMode!: UpdateMode;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    startTime = _decode_ConditionalTime(sequence[2]);
    stopTime = _decode_ConditionalTime(sequence[3]);
    requestedGvcid = _decode_GvcId(sequence[4]);
    controlWordType = _decode_ControlWordType(sequence[5]);
    updateMode = _decode_UpdateMode(sequence[6]);
    return new RocfStartInvocation(
        invokerCredentials,
        invokeId,
        startTime,
        stopTime,
        requestedGvcid,
        controlWordType,
        updateMode,

    );
}; }
    return _cached_decoder_for_RocfStartInvocation(el);
}

let _cached_encoder_for_RocfStartInvocation: $.ASN1Encoder<RocfStartInvocation> | null = null;

/**
 * @summary Encodes a(n) RocfStartInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfStartInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_RocfStartInvocation (value: RocfStartInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfStartInvocation) { _cached_encoder_for_RocfStartInvocation = function (value: RocfStartInvocation, _elGetter: $.ASN1Encoder<RocfStartInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_ConditionalTime(value.startTime, $.BER),
        /* REQUIRED   */ _encode_ConditionalTime(value.stopTime, $.BER),
        /* REQUIRED   */ _encode_GvcId(value.requestedGvcid, $.BER),
        /* REQUIRED   */ _encode_ControlWordType(value.controlWordType, $.BER),
        /* REQUIRED   */ _encode_UpdateMode(value.updateMode, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfStartInvocation(value, elGetter);
}


/* eslint-enable */
