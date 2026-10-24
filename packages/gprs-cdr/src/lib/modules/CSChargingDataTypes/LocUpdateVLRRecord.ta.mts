/* eslint-disable */
import {
    type BIT_STRING,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { Location_info, _decode_Location_info, _encode_Location_info } from "../CSChargingDataTypes/Location-info.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary LocUpdateVLRRecord
 * @description
 *
 * VLR location-update CDR. When enabled, the VLR produces one for each
 * location registration or location update it receives. `oldLocation` is
 * absent for a registration. On an E-UTRAN location update over SGs,
 * `newLocation` carries the recording entity as the MSC number, the tracking
 * area code in the location-area field, and the 16 least significant bits of
 * the E-UTRAN cell identity as the cell identity. The 12 most significant
 * bits are `locationExtension`. `msClassmark` is then the default classmark
 * 1 value 0x7F.
 *
 * SMS over SGs and CS fallback are specified in TS 23.272. Call charging
 * after CS fallback follows GSM and UMTS procedures (clause 5.1.3.16).
 *
 * The table gives two or three category codes for the old and new location
 * because those fields have several components. This module does not say
 * which code belongs to which component beyond the description in clause
 * 6.1.3.11.
 *
 * Categories are M, C, OM, and OC as in TS 32.240 clause 5.4.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.16 and 6.1.3.11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocUpdateVLRRecord ::= SET {
 *    recordType          [0] IMPLICIT RecordType,
 *    servedIMSI          [1] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedMSISDN        [2] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    recordingEntity     [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    oldLocation         [4] IMPLICIT Location-info OPTIONAL,
 *    newLocation         [5] IMPLICIT Location-info,
 *    msClassmark         [6] IMPLICIT OCTET STRING,
 *    updateTime          [7] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    updateResult        [8] HLRIntResult OPTIONAL,
 *    recordExtensions    [9] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    locationExtension   [10] IMPLICIT BIT STRING ( SIZE( 12 ) ) OPTIONAL}
 * ```
 * @class
 */
export
class LocUpdateVLRRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * 2G, 3G, and Loc Upd over SGs mandatory. Location update.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.11.
     *
     * The field identifies the type of the record e.g. mobile originated,
     * mobile terminated etc.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.72.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `servedIMSI`.
     * @description
     *
     * 2G, 3G, and Loc Upd over SGs mandatory. IMSI of the served MS.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.11.
     *
     * This fields contains the international mobile subscriber identity (IMSI)
     * of the served party. The term "served" party is used to describe the
     * mobile subscriber involved in the transaction recorded e.g. the calling
     * subscriber in case of an MOC record. The structure of the IMSI is defined
     * in TS 23.003 [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.79.
     *
     * @public
     * @readonly
     */
    readonly servedIMSI: OCTET_STRING;
    /**
     * @summary `servedMSISDN`.
     * @description
     *
     * 2G, 3G, and Loc Upd over SGs operator-provisionable mandatory. The
     * primary MSISDN of the party performing the location update.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.11.
     *
     * This fields contains the mobile station ISDN number (MSISDN) of the
     * served party. The term "served" party is used to describe the mobile
     * subscriber involved in the transaction recorded e.g. the called
     * subscriber in case of an MTC record. In case of multi-numbering the
     * MSISDN stored in a MOC record will be the primary MSISDN of the calling
     * party. The structure of the MSISDN is defined in TS 23.003 [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.80.
     *
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordingEntity`.
     * @description
     *
     * 2G, 3G, and Loc Upd over SGs mandatory. The E.164 number of the entity
     * (VLR or MSC/VLR) generating the record.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.11.
     *
     * This field contains the E.164 [308] number assigned to the entity (MSC,
     * VLR, HLR etc.) that produced the record. For further details concerning
     * the structure of MSC and location register numbers see TS 23.003 [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.73.
     *
     * @public
     * @readonly
     */
    readonly recordingEntity: OCTET_STRING;
    /**
     * @summary `oldLocation`.
     * @description
     *
     * Absent for a registration. Otherwise the previous VMSC E.164
     * number, location area, and MCC+MNC. The table writes two
     * category codes for 2G and 3G and "- C" for a location update
     * over SGs, and does not say which component each code applies to.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.11.
     *
     * @public
     * @readonly
     */
    readonly oldLocation: OPTIONAL<Location_info>;
    /**
     * @summary `newLocation`.
     * @description
     *
     * VMSC E.164 number, location area code, cell identity or service
     * area code, and MCC+MNC. On an E-UTRAN location update over SGs
     * the MSC number is the recording entity, the tracking area code
     * is placed in the location area, and the cell identity holds the
     * 16 least significant bits of the E-UTRAN cell identity. The
     * table writes three category codes (mandatory, mandatory,
     * operator-provisionable mandatory) and does not say which
     * component each code applies to.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.11.
     *
     * @public
     * @readonly
     */
    readonly newLocation: Location_info;
    /**
     * @summary `msClassmark`.
     * @description
     *
     * 2G, 3G, and location update over SGs: mandatory. On an E-UTRAN
     * location update over SGs this is default classmark 1, value
     * 0x7F.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.11.
     *
     * @public
     * @readonly
     */
    readonly msClassmark: OCTET_STRING;
    /**
     * @summary `updateTime`.
     * @description
     *
     * 2G, 3G, and Loc Upd over SGs mandatory. Time at which the update was
     * invoked.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.11.
     *
     * @public
     * @readonly
     */
    readonly updateTime: OCTET_STRING;
    /**
     * @summary `updateResult`.
     * @description
     *
     * 2G, 3G, and Loc Upd over SGs conditional. The result of the location
     * update if unsuccessful.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.11.
     *
     * This field contains the result of the location update request as defined
     * in the MAP (TS 29.002 [214]). Note that this field is only provided if
     * the attempted update was unsuccessful.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.93.
     *
     * @public
     * @readonly
     */
    readonly updateResult: OPTIONAL<HLRIntResult>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * 2G, 3G, and Loc Upd over SGs operator-provisionable conditional. A set of
     * network/ manufacturer specific extensions to the record, when available.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.11.
     *
     * The field enables network operators and/ or manufacturers to add their
     * own extensions to the standard record definitions.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.71.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `locationExtension`.
     * @description
     *
     * 2G not applicable, 3G not applicable, Loc Upd over SGs
     * operator-provisionable mandatory. The 12 most significant bits of the
     * E-UTRAN Cell Identity are included if E-UTRAN location update.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.11.
     *
     * The Location Extension field contains the 12 most significant bits from
     * the Cell Identity field. This is used when SMS over SGs (defined in TS
     * 36.413 [226]) is applied and the access is E-UTRAN.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.46.
     *
     * @public
     * @readonly
     */
    readonly locationExtension: OPTIONAL<BIT_STRING>;

    constructor (
        recordType: RecordType,
        servedIMSI: OCTET_STRING,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        recordingEntity: OCTET_STRING,
        oldLocation: OPTIONAL<Location_info>,
        newLocation: Location_info,
        msClassmark: OCTET_STRING,
        updateTime: OCTET_STRING,
        updateResult?: OPTIONAL<HLRIntResult>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        locationExtension?: OPTIONAL<BIT_STRING>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.servedMSISDN = servedMSISDN;
        this.recordingEntity = recordingEntity;
        this.oldLocation = oldLocation;
        this.newLocation = newLocation;
        this.msClassmark = msClassmark;
        this.updateTime = updateTime;
        this.updateResult = updateResult;
        this.recordExtensions = recordExtensions;
        this.locationExtension = locationExtension;
    
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("LocUpdateVLRRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("LocUpdateVLRRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("LocUpdateVLRRecord.recordingEntity violates SIZE constraint");
        }
        if ((this.updateTime.length !== 9)) {
            throw new ASN1SizeError("LocUpdateVLRRecord.updateTime violates SIZE constraint");
        }
        if (this.locationExtension !== undefined && (this.locationExtension.length !== 12)) {
            throw new ASN1SizeError("LocUpdateVLRRecord.locationExtension violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a LocUpdateVLRRecord
     * @description
     *
     * This takes an `object` and converts it to a `LocUpdateVLRRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocUpdateVLRRecord`.
     * @returns {LocUpdateVLRRecord}
     */
    public static _from_object (_o: { [_K in keyof (LocUpdateVLRRecord)]: (LocUpdateVLRRecord)[_K] }): LocUpdateVLRRecord {
        return new LocUpdateVLRRecord(_o.recordType, _o.servedIMSI, _o.servedMSISDN, _o.recordingEntity, _o.oldLocation, _o.newLocation, _o.msClassmark, _o.updateTime, _o.updateResult, _o.recordExtensions, _o.locationExtension);
    }


}

/**
 * @summary The Leading Root Component Types of LocUpdateVLRRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocUpdateVLRRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("oldLocation", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("newLocation", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("msClassmark", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("updateTime", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("updateResult", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("locationExtension", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of LocUpdateVLRRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocUpdateVLRRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocUpdateVLRRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_LocUpdateVLRRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocUpdateVLRRecord: $.ASN1Decoder<LocUpdateVLRRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocUpdateVLRRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocUpdateVLRRecord (el: _Element): LocUpdateVLRRecord {
    if (!_cached_decoder_for_LocUpdateVLRRecord) { _cached_decoder_for_LocUpdateVLRRecord = function (el: _Element): LocUpdateVLRRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI!: OCTET_STRING;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let recordingEntity!: OCTET_STRING;
    let oldLocation: OPTIONAL<Location_info>;
    let newLocation!: Location_info;
    let msClassmark!: OCTET_STRING;
    let updateTime!: OCTET_STRING;
    let updateResult: OPTIONAL<HLRIntResult>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let locationExtension: OPTIONAL<BIT_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "oldLocation": (_el: _Element): void => { oldLocation = $._decode_implicit<Location_info>(() => _decode_Location_info)(_el); },
        "newLocation": (_el: _Element): void => { newLocation = $._decode_implicit<Location_info>(() => _decode_Location_info)(_el); },
        "msClassmark": (_el: _Element): void => { msClassmark = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "updateTime": (_el: _Element): void => { updateTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "updateResult": (_el: _Element): void => { updateResult = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "locationExtension": (_el: _Element): void => { locationExtension = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_LocUpdateVLRRecord,
        _extension_additions_list_spec_for_LocUpdateVLRRecord,
        _root_component_type_list_2_spec_for_LocUpdateVLRRecord,
        undefined,
    );
    return new LocUpdateVLRRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        servedMSISDN,
        recordingEntity,
        oldLocation,
        newLocation,
        msClassmark,
        updateTime,
        updateResult,
        recordExtensions,
        locationExtension
    );
}; }
    return _cached_decoder_for_LocUpdateVLRRecord(el);
}

let _cached_encoder_for_LocUpdateVLRRecord: $.ASN1Encoder<LocUpdateVLRRecord> | null = null;

/**
 * @summary Encodes a(n) LocUpdateVLRRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocUpdateVLRRecord, encoded as an ASN.1 Element.
 */
export
function _encode_LocUpdateVLRRecord (value: LocUpdateVLRRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocUpdateVLRRecord) { _cached_encoder_for_LocUpdateVLRRecord = function (value: LocUpdateVLRRecord, _elGetter: $.ASN1Encoder<LocUpdateVLRRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.oldLocation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Location_info, $.BER)(value.oldLocation, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_Location_info, $.BER)(value.newLocation, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.msClassmark, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.updateTime, $.BER));
    if (value.updateResult !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_HLRIntResult, $.BER)(value.updateResult, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.locationExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeBitString, $.BER)(value.locationExtension, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_LocUpdateVLRRecord(value, elGetter);
}


/* eslint-enable */
