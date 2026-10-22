/* eslint-disable */
import {
    BIT_STRING,
    GraphicString,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { Location_info, _decode_Location_info, _encode_Location_info } from "../CSChargingDataTypes/Location-info.ta.mjs";
import { InterOperatorIdentifiers, _decode_InterOperatorIdentifiers, _encode_InterOperatorIdentifiers } from "../CSChargingDataTypes/InterOperatorIdentifiers.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary ICSregisterRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ICSregisterRecord ::= SET {
 *    recordType                 [0] IMPLICIT RecordType,
 *    servedIMSI                 [1] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedMSISDN               [2] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ),
 *    privateUserID              [3] IMPLICIT GraphicString OPTIONAL,
 *    recordingEntity            [4] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    newLocation                [5] IMPLICIT Location-info,
 *    locationExtension          [6] IMPLICIT BIT STRING ( SIZE( 12 ) ) OPTIONAL,
 *    updateTime                 [7] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    iMS-Charging-Identifier    [8] IMPLICIT OCTET STRING OPTIONAL,
 *    interOperatorIdentifiers   [9] IMPLICIT SEQUENCE  OF
 *       InterOperatorIdentifiers OPTIONAL,
 *    transit-IOI-Lists          [10] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL,
 *    updateResult               [11] HLRIntResult OPTIONAL,
 *    recordExtensions           [12] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ICSregisterRecord {
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
     * @summary `servedMSISDN`.
     * @public
     * @readonly
     */
    readonly servedMSISDN: OCTET_STRING;
    /**
     * @summary `privateUserID`.
     * @public
     * @readonly
     */
    readonly privateUserID: OPTIONAL<GraphicString>;
    /**
     * @summary `recordingEntity`.
     * @public
     * @readonly
     */
    readonly recordingEntity: OCTET_STRING;
    /**
     * @summary `newLocation`.
     * @public
     * @readonly
     */
    readonly newLocation: Location_info;
    /**
     * @summary `locationExtension`.
     * @public
     * @readonly
     */
    readonly locationExtension: OPTIONAL<BIT_STRING>;
    /**
     * @summary `updateTime`.
     * @public
     * @readonly
     */
    readonly updateTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iMS_Charging_Identifier`.
     * @public
     * @readonly
     */
    readonly iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `interOperatorIdentifiers`.
     * @public
     * @readonly
     */
    readonly interOperatorIdentifiers: OPTIONAL<InterOperatorIdentifiers[]>;
    /**
     * @summary `transit_IOI_Lists`.
     * @public
     * @readonly
     */
    readonly transit_IOI_Lists: OPTIONAL<GraphicString[]>;
    /**
     * @summary `updateResult`.
     * @public
     * @readonly
     */
    readonly updateResult: OPTIONAL<HLRIntResult>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;

    constructor (
        recordType: RecordType,
        servedIMSI: OCTET_STRING,
        servedMSISDN: OCTET_STRING,
        privateUserID: OPTIONAL<GraphicString>,
        recordingEntity: OCTET_STRING,
        newLocation: Location_info,
        locationExtension: OPTIONAL<BIT_STRING>,
        updateTime: OPTIONAL<OCTET_STRING>,
        iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>,
        interOperatorIdentifiers: OPTIONAL<InterOperatorIdentifiers[]>,
        transit_IOI_Lists: OPTIONAL<GraphicString[]>,
        updateResult: OPTIONAL<HLRIntResult>,
        recordExtensions: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.servedMSISDN = servedMSISDN;
        this.privateUserID = privateUserID;
        this.recordingEntity = recordingEntity;
        this.newLocation = newLocation;
        this.locationExtension = locationExtension;
        this.updateTime = updateTime;
        this.iMS_Charging_Identifier = iMS_Charging_Identifier;
        this.interOperatorIdentifiers = interOperatorIdentifiers;
        this.transit_IOI_Lists = transit_IOI_Lists;
        this.updateResult = updateResult;
        this.recordExtensions = recordExtensions;
    
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("ICSregisterRecord.servedIMSI violates SIZE constraint");
        }
        if ((this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("ICSregisterRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("ICSregisterRecord.recordingEntity violates SIZE constraint");
        }
        if (this.locationExtension !== undefined && (this.locationExtension.length !== 12)) {
            throw new ASN1SizeError("ICSregisterRecord.locationExtension violates SIZE constraint");
        }
        if (this.updateTime !== undefined && (this.updateTime.length !== 9)) {
            throw new ASN1SizeError("ICSregisterRecord.updateTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a ICSregisterRecord
     * @description
     * 
     * This takes an `object` and converts it to a `ICSregisterRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ICSregisterRecord`.
     * @returns {ICSregisterRecord}
     */
    public static _from_object (_o: { [_K in keyof (ICSregisterRecord)]: (ICSregisterRecord)[_K] }): ICSregisterRecord {
        return new ICSregisterRecord(_o.recordType, _o.servedIMSI, _o.servedMSISDN, _o.privateUserID, _o.recordingEntity, _o.newLocation, _o.locationExtension, _o.updateTime, _o.iMS_Charging_Identifier, _o.interOperatorIdentifiers, _o.transit_IOI_Lists, _o.updateResult, _o.recordExtensions);
    }


}

/**
 * @summary The Leading Root Component Types of ICSregisterRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ICSregisterRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedMSISDN", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("privateUserID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("newLocation", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("locationExtension", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("updateTime", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("iMS-Charging-Identifier", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("interOperatorIdentifiers", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("transit-IOI-Lists", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("updateResult", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of ICSregisterRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ICSregisterRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ICSregisterRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ICSregisterRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ICSregisterRecord: $.ASN1Decoder<ICSregisterRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ICSregisterRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ICSregisterRecord (el: _Element): ICSregisterRecord {
    if (!_cached_decoder_for_ICSregisterRecord) { _cached_decoder_for_ICSregisterRecord = function (el: _Element): ICSregisterRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI!: OCTET_STRING;
    let servedMSISDN!: OCTET_STRING;
    let privateUserID: OPTIONAL<GraphicString>;
    let recordingEntity!: OCTET_STRING;
    let newLocation!: Location_info;
    let locationExtension: OPTIONAL<BIT_STRING>;
    let updateTime: OPTIONAL<OCTET_STRING>;
    let iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    let interOperatorIdentifiers: OPTIONAL<InterOperatorIdentifiers[]>;
    let transit_IOI_Lists: OPTIONAL<GraphicString[]>;
    let updateResult: OPTIONAL<HLRIntResult>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "privateUserID": (_el: _Element): void => { privateUserID = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "newLocation": (_el: _Element): void => { newLocation = $._decode_implicit<Location_info>(() => _decode_Location_info)(_el); },
        "locationExtension": (_el: _Element): void => { locationExtension = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(_el); },
        "updateTime": (_el: _Element): void => { updateTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "iMS-Charging-Identifier": (_el: _Element): void => { iMS_Charging_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "interOperatorIdentifiers": (_el: _Element): void => { interOperatorIdentifiers = $._decode_implicit<InterOperatorIdentifiers[]>(() => $._decodeSequenceOf<InterOperatorIdentifiers>(() => _decode_InterOperatorIdentifiers))(_el); },
        "transit-IOI-Lists": (_el: _Element): void => { transit_IOI_Lists = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); },
        "updateResult": (_el: _Element): void => { updateResult = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ICSregisterRecord,
        _extension_additions_list_spec_for_ICSregisterRecord,
        _root_component_type_list_2_spec_for_ICSregisterRecord,
        undefined,
    );
    return new ICSregisterRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        servedMSISDN,
        privateUserID,
        recordingEntity,
        newLocation,
        locationExtension,
        updateTime,
        iMS_Charging_Identifier,
        interOperatorIdentifiers,
        transit_IOI_Lists,
        updateResult,
        recordExtensions
    );
}; }
    return _cached_decoder_for_ICSregisterRecord(el);
}

let _cached_encoder_for_ICSregisterRecord: $.ASN1Encoder<ICSregisterRecord> | null = null;

/**
 * @summary Encodes a(n) ICSregisterRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ICSregisterRecord, encoded as an ASN.1 Element.
 */
export
function _encode_ICSregisterRecord (value: ICSregisterRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ICSregisterRecord) { _cached_encoder_for_ICSregisterRecord = function (value: ICSregisterRecord, _elGetter: $.ASN1Encoder<ICSregisterRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    if (value.privateUserID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeGraphicString, $.BER)(value.privateUserID, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_Location_info, $.BER)(value.newLocation, $.BER));
    if (value.locationExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeBitString, $.BER)(value.locationExtension, $.BER));
    }
    if (value.updateTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.updateTime, $.BER));
    }
    if (value.iMS_Charging_Identifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.iMS_Charging_Identifier, $.BER));
    }
    if (value.interOperatorIdentifiers !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<InterOperatorIdentifiers>(() => _encode_InterOperatorIdentifiers, $.BER), $.BER)(value.interOperatorIdentifiers, $.BER));
    }
    if (value.transit_IOI_Lists !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.transit_IOI_Lists, $.BER));
    }
    if (value.updateResult !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 11, () => _encode_HLRIntResult, $.BER)(value.updateResult, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_ICSregisterRecord(value, elGetter);
}


/* eslint-enable */
