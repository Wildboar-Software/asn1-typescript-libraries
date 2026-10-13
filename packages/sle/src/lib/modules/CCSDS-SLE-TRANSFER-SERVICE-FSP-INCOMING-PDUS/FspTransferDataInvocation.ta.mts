/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { PacketIdentification, _decode_PacketIdentification, _encode_PacketIdentification } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/PacketIdentification.ta.mjs";
import { ProductionTime, _decode_ProductionTime, _encode_ProductionTime } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/ProductionTime.ta.mjs";
import { Duration, _decode_Duration, _encode_Duration } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Duration.ta.mjs";
import { TransmissionMode, _decode_TransmissionMode, _encode_TransmissionMode } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/TransmissionMode.ta.mjs";
import { Map, _decode_Map, _encode_Map } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/Map.ta.mjs";
import { BlockingUsage, _decode_BlockingUsage, _encode_BlockingUsage } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/BlockingUsage.ta.mjs";
import { SlduStatusNotification, _decode_SlduStatusNotification, _encode_SlduStatusNotification } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/SlduStatusNotification.ta.mjs";
import { FspData, _decode_FspData, _encode_FspData } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspData.ta.mjs";


/**
 * @summary FspTransferDataInvocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspTransferDataInvocation ::= SEQUENCE
 * {  invokerCredentials            Credentials
 * ,  invokeId                      InvokeId
 * ,  packetIdentification          PacketIdentification
 * ,  earliestProductionTime        ProductionTime
 * ,  latestProductionTime          ProductionTime
 * ,  delayTime                     Duration
 * ,  transmissionMode              TransmissionMode
 * ,  map                           Map
 * ,  blocking                      BlockingUsage
 * ,  processingStartedNotification SlduStatusNotification
 * ,  radiatedNotification          SlduStatusNotification
 * ,  acknowledgedNotification      SlduStatusNotification
 * ,  fspData                       FspData
 * }
 * ```
 * 
 * @class
 */
export
class FspTransferDataInvocation {
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
     * @summary `packetIdentification`.
     * @public
     * @readonly
     */
    readonly packetIdentification: PacketIdentification;
    /**
     * @summary `earliestProductionTime`.
     * @public
     * @readonly
     */
    readonly earliestProductionTime: ProductionTime;
    /**
     * @summary `latestProductionTime`.
     * @public
     * @readonly
     */
    readonly latestProductionTime: ProductionTime;
    /**
     * @summary `delayTime`.
     * @public
     * @readonly
     */
    readonly delayTime: Duration;
    /**
     * @summary `transmissionMode`.
     * @public
     * @readonly
     */
    readonly transmissionMode: TransmissionMode;
    /**
     * @summary `map`.
     * @public
     * @readonly
     */
    readonly map: Map;
    /**
     * @summary `blocking`.
     * @public
     * @readonly
     */
    readonly blocking: BlockingUsage;
    /**
     * @summary `processingStartedNotification`.
     * @public
     * @readonly
     */
    readonly processingStartedNotification: SlduStatusNotification;
    /**
     * @summary `radiatedNotification`.
     * @public
     * @readonly
     */
    readonly radiatedNotification: SlduStatusNotification;
    /**
     * @summary `acknowledgedNotification`.
     * @public
     * @readonly
     */
    readonly acknowledgedNotification: SlduStatusNotification;
    /**
     * @summary `fspData`.
     * @public
     * @readonly
     */
    readonly fspData: FspData;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId,
        packetIdentification: PacketIdentification,
        earliestProductionTime: ProductionTime,
        latestProductionTime: ProductionTime,
        delayTime: Duration,
        transmissionMode: TransmissionMode,
        map: Map,
        blocking: BlockingUsage,
        processingStartedNotification: SlduStatusNotification,
        radiatedNotification: SlduStatusNotification,
        acknowledgedNotification: SlduStatusNotification,
        fspData: FspData
    ) {
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
        this.packetIdentification = packetIdentification;
        this.earliestProductionTime = earliestProductionTime;
        this.latestProductionTime = latestProductionTime;
        this.delayTime = delayTime;
        this.transmissionMode = transmissionMode;
        this.map = map;
        this.blocking = blocking;
        this.processingStartedNotification = processingStartedNotification;
        this.radiatedNotification = radiatedNotification;
        this.acknowledgedNotification = acknowledgedNotification;
        this.fspData = fspData;
    }

    /**
     * @summary Restructures an object into a FspTransferDataInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `FspTransferDataInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspTransferDataInvocation`.
     * @returns {FspTransferDataInvocation}
     */
    public static _from_object (_o: { [_K in keyof (FspTransferDataInvocation)]: (FspTransferDataInvocation)[_K] }): FspTransferDataInvocation {
        return new FspTransferDataInvocation(_o.invokerCredentials, _o.invokeId, _o.packetIdentification, _o.earliestProductionTime, _o.latestProductionTime, _o.delayTime, _o.transmissionMode, _o.map, _o.blocking, _o.processingStartedNotification, _o.radiatedNotification, _o.acknowledgedNotification, _o.fspData);
    }


}

/**
 * @summary The Leading Root Component Types of FspTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspTransferDataInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("packetIdentification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("earliestProductionTime", false, $.hasAnyTag),
    new $.ComponentSpec("latestProductionTime", false, $.hasAnyTag),
    new $.ComponentSpec("delayTime", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("transmissionMode", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("map", false, $.hasAnyTag),
    new $.ComponentSpec("blocking", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("processingStartedNotification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("radiatedNotification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("acknowledgedNotification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("fspData", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of FspTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspTransferDataInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspTransferDataInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspTransferDataInvocation: $.ASN1Decoder<FspTransferDataInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspTransferDataInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspTransferDataInvocation (el: _Element): FspTransferDataInvocation {
    if (!_cached_decoder_for_FspTransferDataInvocation) { _cached_decoder_for_FspTransferDataInvocation = function (el: _Element): FspTransferDataInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 13) {
        throw new _ConstructionError("FspTransferDataInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "packetIdentification";
    sequence[3].name = "earliestProductionTime";
    sequence[4].name = "latestProductionTime";
    sequence[5].name = "delayTime";
    sequence[6].name = "transmissionMode";
    sequence[7].name = "map";
    sequence[8].name = "blocking";
    sequence[9].name = "processingStartedNotification";
    sequence[10].name = "radiatedNotification";
    sequence[11].name = "acknowledgedNotification";
    sequence[12].name = "fspData";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let packetIdentification!: PacketIdentification;
    let earliestProductionTime!: ProductionTime;
    let latestProductionTime!: ProductionTime;
    let delayTime!: Duration;
    let transmissionMode!: TransmissionMode;
    let map!: Map;
    let blocking!: BlockingUsage;
    let processingStartedNotification!: SlduStatusNotification;
    let radiatedNotification!: SlduStatusNotification;
    let acknowledgedNotification!: SlduStatusNotification;
    let fspData!: FspData;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    packetIdentification = _decode_PacketIdentification(sequence[2]);
    earliestProductionTime = _decode_ProductionTime(sequence[3]);
    latestProductionTime = _decode_ProductionTime(sequence[4]);
    delayTime = _decode_Duration(sequence[5]);
    transmissionMode = _decode_TransmissionMode(sequence[6]);
    map = _decode_Map(sequence[7]);
    blocking = _decode_BlockingUsage(sequence[8]);
    processingStartedNotification = _decode_SlduStatusNotification(sequence[9]);
    radiatedNotification = _decode_SlduStatusNotification(sequence[10]);
    acknowledgedNotification = _decode_SlduStatusNotification(sequence[11]);
    fspData = _decode_FspData(sequence[12]);
    return new FspTransferDataInvocation(
        invokerCredentials,
        invokeId,
        packetIdentification,
        earliestProductionTime,
        latestProductionTime,
        delayTime,
        transmissionMode,
        map,
        blocking,
        processingStartedNotification,
        radiatedNotification,
        acknowledgedNotification,
        fspData,

    );
}; }
    return _cached_decoder_for_FspTransferDataInvocation(el);
}

let _cached_encoder_for_FspTransferDataInvocation: $.ASN1Encoder<FspTransferDataInvocation> | null = null;

/**
 * @summary Encodes a(n) FspTransferDataInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspTransferDataInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_FspTransferDataInvocation (value: FspTransferDataInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspTransferDataInvocation) { _cached_encoder_for_FspTransferDataInvocation = function (value: FspTransferDataInvocation, _elGetter: $.ASN1Encoder<FspTransferDataInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_PacketIdentification(value.packetIdentification, $.BER),
        /* REQUIRED   */ _encode_ProductionTime(value.earliestProductionTime, $.BER),
        /* REQUIRED   */ _encode_ProductionTime(value.latestProductionTime, $.BER),
        /* REQUIRED   */ _encode_Duration(value.delayTime, $.BER),
        /* REQUIRED   */ _encode_TransmissionMode(value.transmissionMode, $.BER),
        /* REQUIRED   */ _encode_Map(value.map, $.BER),
        /* REQUIRED   */ _encode_BlockingUsage(value.blocking, $.BER),
        /* REQUIRED   */ _encode_SlduStatusNotification(value.processingStartedNotification, $.BER),
        /* REQUIRED   */ _encode_SlduStatusNotification(value.radiatedNotification, $.BER),
        /* REQUIRED   */ _encode_SlduStatusNotification(value.acknowledgedNotification, $.BER),
        /* REQUIRED   */ _encode_FspData(value.fspData, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspTransferDataInvocation(value, elGetter);
}


/* eslint-enable */
