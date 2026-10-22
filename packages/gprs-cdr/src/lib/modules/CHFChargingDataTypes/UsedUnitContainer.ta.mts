/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Trigger, _decode_Trigger, _encode_Trigger } from "../CHFChargingDataTypes/Trigger.ta.mjs";
import { PDUContainerInformation, _decode_PDUContainerInformation, _encode_PDUContainerInformation } from "../CHFChargingDataTypes/PDUContainerInformation.ta.mjs";


/**
 * @summary UsedUnitContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UsedUnitContainer ::= SEQUENCE {
 *    serviceIdentifier          [0] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    time                       [1] IMPLICIT INTEGER OPTIONAL,
 *    triggers                   [2] IMPLICIT SEQUENCE  OF
 *       Trigger,
 *    triggerTimeStamp           [3] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    dataTotalVolume            [4] IMPLICIT INTEGER OPTIONAL,
 *    dataVolumeUplink           [5] IMPLICIT INTEGER OPTIONAL,
 *    dataVolumeDownlink         [6] IMPLICIT INTEGER OPTIONAL,
 *    serviceSpecificUnits       [7] IMPLICIT INTEGER OPTIONAL,
 *    eventTimeStamp             [8] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    localSequenceNumber        [9] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    ratingIndicator            [10] IMPLICIT BOOLEAN OPTIONAL,
 *    pDUContainerInformation    [11] IMPLICIT PDUContainerInformation OPTIONAL,
 *    quotaManagementIndicator   [12] IMPLICIT BOOLEAN OPTIONAL}
 * ```
 * 
 * @class
 */
export
class UsedUnitContainer {
    /**
     * @summary `serviceIdentifier`.
     * @public
     * @readonly
     */
    readonly serviceIdentifier: OPTIONAL<INTEGER>;
    /**
     * @summary `time`.
     * @public
     * @readonly
     */
    readonly time: OPTIONAL<INTEGER>;
    /**
     * @summary `triggers`.
     * @public
     * @readonly
     */
    readonly triggers: Trigger[];
    /**
     * @summary `triggerTimeStamp`.
     * @public
     * @readonly
     */
    readonly triggerTimeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `dataTotalVolume`.
     * @public
     * @readonly
     */
    readonly dataTotalVolume: OPTIONAL<INTEGER>;
    /**
     * @summary `dataVolumeUplink`.
     * @public
     * @readonly
     */
    readonly dataVolumeUplink: OPTIONAL<INTEGER>;
    /**
     * @summary `dataVolumeDownlink`.
     * @public
     * @readonly
     */
    readonly dataVolumeDownlink: OPTIONAL<INTEGER>;
    /**
     * @summary `serviceSpecificUnits`.
     * @public
     * @readonly
     */
    readonly serviceSpecificUnits: OPTIONAL<INTEGER>;
    /**
     * @summary `eventTimeStamp`.
     * @public
     * @readonly
     */
    readonly eventTimeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `localSequenceNumber`.
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `ratingIndicator`.
     * @public
     * @readonly
     */
    readonly ratingIndicator: OPTIONAL<BOOLEAN>;
    /**
     * @summary `pDUContainerInformation`.
     * @public
     * @readonly
     */
    readonly pDUContainerInformation: OPTIONAL<PDUContainerInformation>;
    /**
     * @summary `quotaManagementIndicator`.
     * @public
     * @readonly
     */
    readonly quotaManagementIndicator: OPTIONAL<BOOLEAN>;

    constructor (
        serviceIdentifier: OPTIONAL<INTEGER>,
        time: OPTIONAL<INTEGER>,
        triggers: Trigger[],
        triggerTimeStamp: OPTIONAL<OCTET_STRING>,
        dataTotalVolume: OPTIONAL<INTEGER>,
        dataVolumeUplink: OPTIONAL<INTEGER>,
        dataVolumeDownlink: OPTIONAL<INTEGER>,
        serviceSpecificUnits: OPTIONAL<INTEGER>,
        eventTimeStamp: OPTIONAL<OCTET_STRING>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        ratingIndicator: OPTIONAL<BOOLEAN>,
        pDUContainerInformation: OPTIONAL<PDUContainerInformation>,
        quotaManagementIndicator: OPTIONAL<BOOLEAN>
    ) {
        this.serviceIdentifier = serviceIdentifier;
        this.time = time;
        this.triggers = triggers;
        this.triggerTimeStamp = triggerTimeStamp;
        this.dataTotalVolume = dataTotalVolume;
        this.dataVolumeUplink = dataVolumeUplink;
        this.dataVolumeDownlink = dataVolumeDownlink;
        this.serviceSpecificUnits = serviceSpecificUnits;
        this.eventTimeStamp = eventTimeStamp;
        this.localSequenceNumber = localSequenceNumber;
        this.ratingIndicator = ratingIndicator;
        this.pDUContainerInformation = pDUContainerInformation;
        this.quotaManagementIndicator = quotaManagementIndicator;
    
        if (this.serviceIdentifier !== undefined && (this.serviceIdentifier < 0 || this.serviceIdentifier > 4294967295)) {
            throw new ASN1OverflowError("UsedUnitContainer.serviceIdentifier violates INTEGER range");
        }
        if (this.triggerTimeStamp !== undefined && (this.triggerTimeStamp.length !== 9)) {
            throw new ASN1SizeError("UsedUnitContainer.triggerTimeStamp violates SIZE constraint");
        }
        if (this.eventTimeStamp !== undefined && (this.eventTimeStamp.length !== 9)) {
            throw new ASN1SizeError("UsedUnitContainer.eventTimeStamp violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("UsedUnitContainer.localSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a UsedUnitContainer
     * @description
     * 
     * This takes an `object` and converts it to a `UsedUnitContainer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UsedUnitContainer`.
     * @returns {UsedUnitContainer}
     */
    public static _from_object (_o: { [_K in keyof (UsedUnitContainer)]: (UsedUnitContainer)[_K] }): UsedUnitContainer {
        return new UsedUnitContainer(_o.serviceIdentifier, _o.time, _o.triggers, _o.triggerTimeStamp, _o.dataTotalVolume, _o.dataVolumeUplink, _o.dataVolumeDownlink, _o.serviceSpecificUnits, _o.eventTimeStamp, _o.localSequenceNumber, _o.ratingIndicator, _o.pDUContainerInformation, _o.quotaManagementIndicator);
    }


}

/**
 * @summary The Leading Root Component Types of UsedUnitContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UsedUnitContainer: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceIdentifier", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("time", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("triggers", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("triggerTimeStamp", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("dataTotalVolume", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("dataVolumeUplink", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("dataVolumeDownlink", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("serviceSpecificUnits", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("eventTimeStamp", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("ratingIndicator", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("pDUContainerInformation", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("quotaManagementIndicator", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of UsedUnitContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UsedUnitContainer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UsedUnitContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UsedUnitContainer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UsedUnitContainer: $.ASN1Decoder<UsedUnitContainer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UsedUnitContainer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UsedUnitContainer (el: _Element): UsedUnitContainer {
    if (!_cached_decoder_for_UsedUnitContainer) { _cached_decoder_for_UsedUnitContainer = function (el: _Element): UsedUnitContainer {
    let serviceIdentifier: OPTIONAL<INTEGER>;
    let time: OPTIONAL<INTEGER>;
    let triggers!: Trigger[];
    let triggerTimeStamp: OPTIONAL<OCTET_STRING>;
    let dataTotalVolume: OPTIONAL<INTEGER>;
    let dataVolumeUplink: OPTIONAL<INTEGER>;
    let dataVolumeDownlink: OPTIONAL<INTEGER>;
    let serviceSpecificUnits: OPTIONAL<INTEGER>;
    let eventTimeStamp: OPTIONAL<OCTET_STRING>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let ratingIndicator: OPTIONAL<BOOLEAN>;
    let pDUContainerInformation: OPTIONAL<PDUContainerInformation>;
    let quotaManagementIndicator: OPTIONAL<BOOLEAN>;
    const callbacks: $.DecodingMap = {
        "serviceIdentifier": (_el: _Element): void => { serviceIdentifier = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "time": (_el: _Element): void => { time = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "triggers": (_el: _Element): void => { triggers = $._decode_implicit<Trigger[]>(() => $._decodeSequenceOf<Trigger>(() => _decode_Trigger))(_el); },
        "triggerTimeStamp": (_el: _Element): void => { triggerTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "dataTotalVolume": (_el: _Element): void => { dataTotalVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolumeUplink": (_el: _Element): void => { dataVolumeUplink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolumeDownlink": (_el: _Element): void => { dataVolumeDownlink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serviceSpecificUnits": (_el: _Element): void => { serviceSpecificUnits = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "eventTimeStamp": (_el: _Element): void => { eventTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "ratingIndicator": (_el: _Element): void => { ratingIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "pDUContainerInformation": (_el: _Element): void => { pDUContainerInformation = $._decode_implicit<PDUContainerInformation>(() => _decode_PDUContainerInformation)(_el); },
        "quotaManagementIndicator": (_el: _Element): void => { quotaManagementIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UsedUnitContainer,
        _extension_additions_list_spec_for_UsedUnitContainer,
        _root_component_type_list_2_spec_for_UsedUnitContainer,
        undefined,
    );
    return new UsedUnitContainer(
        serviceIdentifier,
        time,
        triggers,
        triggerTimeStamp,
        dataTotalVolume,
        dataVolumeUplink,
        dataVolumeDownlink,
        serviceSpecificUnits,
        eventTimeStamp,
        localSequenceNumber,
        ratingIndicator,
        pDUContainerInformation,
        quotaManagementIndicator
    );
}; }
    return _cached_decoder_for_UsedUnitContainer(el);
}

let _cached_encoder_for_UsedUnitContainer: $.ASN1Encoder<UsedUnitContainer> | null = null;

/**
 * @summary Encodes a(n) UsedUnitContainer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UsedUnitContainer, encoded as an ASN.1 Element.
 */
export
function _encode_UsedUnitContainer (value: UsedUnitContainer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UsedUnitContainer) { _cached_encoder_for_UsedUnitContainer = function (value: UsedUnitContainer, _elGetter: $.ASN1Encoder<UsedUnitContainer>): _Element {
    const _components: _Element[] = [];
    if (value.serviceIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.serviceIdentifier, $.BER));
    }
    if (value.time !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.time, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Trigger>(() => _encode_Trigger, $.BER), $.BER)(value.triggers, $.BER));
    if (value.triggerTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.triggerTimeStamp, $.BER));
    }
    if (value.dataTotalVolume !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.dataTotalVolume, $.BER));
    }
    if (value.dataVolumeUplink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.dataVolumeUplink, $.BER));
    }
    if (value.dataVolumeDownlink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.dataVolumeDownlink, $.BER));
    }
    if (value.serviceSpecificUnits !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.serviceSpecificUnits, $.BER));
    }
    if (value.eventTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.eventTimeStamp, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.ratingIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeBoolean, $.BER)(value.ratingIndicator, $.BER));
    }
    if (value.pDUContainerInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_PDUContainerInformation, $.BER)(value.pDUContainerInformation, $.BER));
    }
    if (value.quotaManagementIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeBoolean, $.BER)(value.quotaManagementIndicator, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_UsedUnitContainer(value, elGetter);
}


/* eslint-enable */
