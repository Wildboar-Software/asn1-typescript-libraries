/* eslint-disable */
import {
    BIT_STRING,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { LocationAreaAndCell, _decode_LocationAreaAndCell, _encode_LocationAreaAndCell } from "../CSChargingDataTypes/LocationAreaAndCell.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { CAMELSMSInformation, _decode_CAMELSMSInformation, _encode_CAMELSMSInformation } from "../CSChargingDataTypes/CAMELSMSInformation.ta.mjs";
import { SystemType, _decode_SystemType, _encode_SystemType, _enum_for_SystemType } from "../CSChargingDataTypes/SystemType.ta.mjs";


/**
 * @summary MOSMSRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MOSMSRecord ::= SET {
 *    recordType            [0] IMPLICIT RecordType,
 *    servedIMSI            [1] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedIMEI            [2] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    servedMSISDN          [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    msClassmark           [4] IMPLICIT OCTET STRING,
 *    serviceCentre         [5] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    recordingEntity       [6] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    location              [7] IMPLICIT LocationAreaAndCell OPTIONAL,
 *    messageReference      [8] IMPLICIT OCTET STRING,
 *    originationTime       [9] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    smsResult             [10] HLRIntResult OPTIONAL,
 *    recordExtensions      [11] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    destinationNumber     [12] IMPLICIT OCTET STRING OPTIONAL,
 *    cAMELSMSInformation   [13] IMPLICIT CAMELSMSInformation OPTIONAL,
 *    systemType            [14] IMPLICIT SystemType OPTIONAL,
 *    locationExtension     [15] IMPLICIT BIT STRING ( SIZE( 12 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MOSMSRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `servedIMSI`.
     * @public
     * @readonly
     */
    readonly servedIMSI: OCTET_STRING;
    /**
     * @summary `servedIMEI`.
     * @public
     * @readonly
     */
    readonly servedIMEI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedMSISDN`.
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `msClassmark`.
     * @public
     * @readonly
     */
    readonly msClassmark: OCTET_STRING;
    /**
     * @summary `serviceCentre`.
     * @public
     * @readonly
     */
    readonly serviceCentre: OCTET_STRING;
    /**
     * @summary `recordingEntity`.
     * @public
     * @readonly
     */
    readonly recordingEntity: OCTET_STRING;
    /**
     * @summary `location`.
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<LocationAreaAndCell>;
    /**
     * @summary `messageReference`.
     * @public
     * @readonly
     */
    readonly messageReference: OCTET_STRING;
    /**
     * @summary `originationTime`.
     * @public
     * @readonly
     */
    readonly originationTime: OCTET_STRING;
    /**
     * @summary `smsResult`.
     * @public
     * @readonly
     */
    readonly smsResult: OPTIONAL<HLRIntResult>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `destinationNumber`.
     * @public
     * @readonly
     */
    readonly destinationNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cAMELSMSInformation`.
     * @public
     * @readonly
     */
    readonly cAMELSMSInformation: OPTIONAL<CAMELSMSInformation>;
    /**
     * @summary `systemType`.
     * @public
     * @readonly
     */
    readonly systemType: OPTIONAL<SystemType>;
    /**
     * @summary `locationExtension`.
     * @public
     * @readonly
     */
    readonly locationExtension: OPTIONAL<BIT_STRING>;

    constructor (
        recordType: RecordType,
        servedIMSI: OCTET_STRING,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        msClassmark: OCTET_STRING,
        serviceCentre: OCTET_STRING,
        recordingEntity: OCTET_STRING,
        location: OPTIONAL<LocationAreaAndCell>,
        messageReference: OCTET_STRING,
        originationTime: OCTET_STRING,
        smsResult: OPTIONAL<HLRIntResult>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        destinationNumber: OPTIONAL<OCTET_STRING>,
        cAMELSMSInformation: OPTIONAL<CAMELSMSInformation>,
        systemType: OPTIONAL<SystemType>,
        locationExtension: OPTIONAL<BIT_STRING>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.servedIMEI = servedIMEI;
        this.servedMSISDN = servedMSISDN;
        this.msClassmark = msClassmark;
        this.serviceCentre = serviceCentre;
        this.recordingEntity = recordingEntity;
        this.location = location;
        this.messageReference = messageReference;
        this.originationTime = originationTime;
        this.smsResult = smsResult;
        this.recordExtensions = recordExtensions;
        this.destinationNumber = destinationNumber;
        this.cAMELSMSInformation = cAMELSMSInformation;
        this.systemType = systemType;
        this.locationExtension = locationExtension;
    
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("MOSMSRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("MOSMSRecord.servedIMEI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("MOSMSRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.serviceCentre.length < 1 || this.serviceCentre.length > 20)) {
            throw new ASN1SizeError("MOSMSRecord.serviceCentre violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("MOSMSRecord.recordingEntity violates SIZE constraint");
        }
        if ((this.originationTime.length !== 9)) {
            throw new ASN1SizeError("MOSMSRecord.originationTime violates SIZE constraint");
        }
        if (this.locationExtension !== undefined && (this.locationExtension.length !== 12)) {
            throw new ASN1SizeError("MOSMSRecord.locationExtension violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MOSMSRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MOSMSRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MOSMSRecord`.
     * @returns {MOSMSRecord}
     */
    public static _from_object (_o: { [_K in keyof (MOSMSRecord)]: (MOSMSRecord)[_K] }): MOSMSRecord {
        return new MOSMSRecord(_o.recordType, _o.servedIMSI, _o.servedIMEI, _o.servedMSISDN, _o.msClassmark, _o.serviceCentre, _o.recordingEntity, _o.location, _o.messageReference, _o.originationTime, _o.smsResult, _o.recordExtensions, _o.destinationNumber, _o.cAMELSMSInformation, _o.systemType, _o.locationExtension);
    }

        /**
         * @summary The enum used as the type of the component `systemType`
         * @public
         * @static
         */

    public static _enum_for_systemType = _enum_for_SystemType;
}

/**
 * @summary The Leading Root Component Types of MOSMSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MOSMSRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("msClassmark", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("serviceCentre", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("messageReference", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("originationTime", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("smsResult", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("destinationNumber", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("cAMELSMSInformation", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("systemType", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("locationExtension", true, $.hasTag(_TagClass.context, 15))
];

/**
 * @summary The Trailing Root Component Types of MOSMSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MOSMSRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MOSMSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MOSMSRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MOSMSRecord: $.ASN1Decoder<MOSMSRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MOSMSRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MOSMSRecord (el: _Element): MOSMSRecord {
    if (!_cached_decoder_for_MOSMSRecord) { _cached_decoder_for_MOSMSRecord = function (el: _Element): MOSMSRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI!: OCTET_STRING;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let msClassmark!: OCTET_STRING;
    let serviceCentre!: OCTET_STRING;
    let recordingEntity!: OCTET_STRING;
    let location: OPTIONAL<LocationAreaAndCell>;
    let messageReference!: OCTET_STRING;
    let originationTime!: OCTET_STRING;
    let smsResult: OPTIONAL<HLRIntResult>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let destinationNumber: OPTIONAL<OCTET_STRING>;
    let cAMELSMSInformation: OPTIONAL<CAMELSMSInformation>;
    let systemType: OPTIONAL<SystemType>;
    let locationExtension: OPTIONAL<BIT_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "msClassmark": (_el: _Element): void => { msClassmark = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceCentre": (_el: _Element): void => { serviceCentre = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<LocationAreaAndCell>(() => _decode_LocationAreaAndCell)(_el); },
        "messageReference": (_el: _Element): void => { messageReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "originationTime": (_el: _Element): void => { originationTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "smsResult": (_el: _Element): void => { smsResult = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "destinationNumber": (_el: _Element): void => { destinationNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cAMELSMSInformation": (_el: _Element): void => { cAMELSMSInformation = $._decode_implicit<CAMELSMSInformation>(() => _decode_CAMELSMSInformation)(_el); },
        "systemType": (_el: _Element): void => { systemType = $._decode_implicit<SystemType>(() => _decode_SystemType)(_el); },
        "locationExtension": (_el: _Element): void => { locationExtension = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MOSMSRecord,
        _extension_additions_list_spec_for_MOSMSRecord,
        _root_component_type_list_2_spec_for_MOSMSRecord,
        undefined,
    );
    return new MOSMSRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        servedIMEI,
        servedMSISDN,
        msClassmark,
        serviceCentre,
        recordingEntity,
        location,
        messageReference,
        originationTime,
        smsResult,
        recordExtensions,
        destinationNumber,
        cAMELSMSInformation,
        systemType,
        locationExtension
    );
}; }
    return _cached_decoder_for_MOSMSRecord(el);
}

let _cached_encoder_for_MOSMSRecord: $.ASN1Encoder<MOSMSRecord> | null = null;

/**
 * @summary Encodes a(n) MOSMSRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MOSMSRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MOSMSRecord (value: MOSMSRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MOSMSRecord) { _cached_encoder_for_MOSMSRecord = function (value: MOSMSRecord, _elGetter: $.ASN1Encoder<MOSMSRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.msClassmark, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.serviceCentre, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.location !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_LocationAreaAndCell, $.BER)(value.location, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.messageReference, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.originationTime, $.BER));
    if (value.smsResult !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_HLRIntResult, $.BER)(value.smsResult, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.destinationNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.destinationNumber, $.BER));
    }
    if (value.cAMELSMSInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_CAMELSMSInformation, $.BER)(value.cAMELSMSInformation, $.BER));
    }
    if (value.systemType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_SystemType, $.BER)(value.systemType, $.BER));
    }
    if (value.locationExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeBitString, $.BER)(value.locationExtension, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MOSMSRecord(value, elGetter);
}


/* eslint-enable */
