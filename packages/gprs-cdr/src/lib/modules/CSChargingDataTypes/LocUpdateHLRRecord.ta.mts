/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { Visited_Location_info, _decode_Visited_Location_info, _encode_Visited_Location_info } from "../CSChargingDataTypes/Visited-Location-info.ta.mjs";
import { type HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary LocUpdateHLRRecord
 * @description
 *
 * HLR location-update CDR. When enabled, the HLR produces one for each
 * location registration or location update it receives, including updates
 * from subscribers roaming in a foreign PLMN. `oldLocation` and
 * `newLocation` each carry the VMSC and VLR E.164 numbers. `updateResult` is
 * present when the update is unsuccessful.
 *
 * Categories are M, C, OM, and OC as in TS 32.240 clause 5.4.
 *
 * 3GPP TS 32.250 V19.0.0 clause 6.1.3.12.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocUpdateHLRRecord ::= SET {
 *    recordType         [0] IMPLICIT RecordType,
 *    servedIMSI         [1] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    recordingEntity    [2] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    oldLocation        [3] IMPLICIT Visited-Location-info OPTIONAL,
 *    newLocation        [4] IMPLICIT Visited-Location-info,
 *    updateTime         [5] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    updateResult       [6] HLRIntResult OPTIONAL,
 *    recordExtensions   [7] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * 
 * @class
 */
export
class LocUpdateHLRRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * 2G and 3G mandatory. Location update.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.12.
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
     * 2G and 3G mandatory. IMSI of the served MS.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.12.
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
     * @summary `recordingEntity`.
     * @description
     *
     * 2G and 3G mandatory. The E.164 Number of the HLR.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.12.
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
     * Previous VMSC and VLR E.164 numbers. Operator-provisionable
     * conditional. The table writes the category twice, once for each
     * number.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.12.
     *
     * @public
     * @readonly
     */
    readonly oldLocation: OPTIONAL<Visited_Location_info>;
    /**
     * @summary `newLocation`.
     * @description
     *
     * New VMSC and VLR E.164 numbers. Both are mandatory. The table
     * writes the category twice, once for each number.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.12.
     *
     * @public
     * @readonly
     */
    readonly newLocation: Visited_Location_info;
    /**
     * @summary `updateTime`.
     * @description
     *
     * 2G and 3G mandatory. Time at which the update was invoked.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.12.
     *
     * @public
     * @readonly
     */
    readonly updateTime: OCTET_STRING;
    /**
     * @summary `updateResult`.
     * @description
     *
     * 2G and 3G conditional. The result of the location update if unsuccessful.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.12.
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
     * 2G and 3G operator-provisionable conditional. A set of network/
     * manufacturer specific extensions to the record, when available.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.12.
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

    constructor (
        recordType: RecordType,
        servedIMSI: OCTET_STRING,
        recordingEntity: OCTET_STRING,
        oldLocation: OPTIONAL<Visited_Location_info>,
        newLocation: Visited_Location_info,
        updateTime: OCTET_STRING,
        updateResult?: OPTIONAL<HLRIntResult>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.recordingEntity = recordingEntity;
        this.oldLocation = oldLocation;
        this.newLocation = newLocation;
        this.updateTime = updateTime;
        this.updateResult = updateResult;
        this.recordExtensions = recordExtensions;
    
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("LocUpdateHLRRecord.servedIMSI violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("LocUpdateHLRRecord.recordingEntity violates SIZE constraint");
        }
        if ((this.updateTime.length !== 9)) {
            throw new ASN1SizeError("LocUpdateHLRRecord.updateTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a LocUpdateHLRRecord
     * @description
     *
     * This takes an `object` and converts it to a `LocUpdateHLRRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocUpdateHLRRecord`.
     * @returns {LocUpdateHLRRecord}
     */
    public static _from_object (_o: { [_K in keyof (LocUpdateHLRRecord)]: (LocUpdateHLRRecord)[_K] }): LocUpdateHLRRecord {
        return new LocUpdateHLRRecord(_o.recordType, _o.servedIMSI, _o.recordingEntity, _o.oldLocation, _o.newLocation, _o.updateTime, _o.updateResult, _o.recordExtensions);
    }


}

/**
 * @summary The Leading Root Component Types of LocUpdateHLRRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocUpdateHLRRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("oldLocation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("newLocation", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("updateTime", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("updateResult", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of LocUpdateHLRRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocUpdateHLRRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocUpdateHLRRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_LocUpdateHLRRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocUpdateHLRRecord: $.ASN1Decoder<LocUpdateHLRRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocUpdateHLRRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocUpdateHLRRecord (el: _Element): LocUpdateHLRRecord {
    if (!_cached_decoder_for_LocUpdateHLRRecord) { _cached_decoder_for_LocUpdateHLRRecord = function (el: _Element): LocUpdateHLRRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI!: OCTET_STRING;
    let recordingEntity!: OCTET_STRING;
    let oldLocation: OPTIONAL<Visited_Location_info>;
    let newLocation!: Visited_Location_info;
    let updateTime!: OCTET_STRING;
    let updateResult: OPTIONAL<HLRIntResult>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "oldLocation": (_el: _Element): void => { oldLocation = $._decode_implicit<Visited_Location_info>(() => _decode_Visited_Location_info)(_el); },
        "newLocation": (_el: _Element): void => { newLocation = $._decode_implicit<Visited_Location_info>(() => _decode_Visited_Location_info)(_el); },
        "updateTime": (_el: _Element): void => { updateTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "updateResult": (_el: _Element): void => { updateResult = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_LocUpdateHLRRecord,
        _extension_additions_list_spec_for_LocUpdateHLRRecord,
        _root_component_type_list_2_spec_for_LocUpdateHLRRecord,
        undefined,
    );
    return new LocUpdateHLRRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        recordingEntity,
        oldLocation,
        newLocation,
        updateTime,
        updateResult,
        recordExtensions
    );
}; }
    return _cached_decoder_for_LocUpdateHLRRecord(el);
}

let _cached_encoder_for_LocUpdateHLRRecord: $.ASN1Encoder<LocUpdateHLRRecord> | null = null;

/**
 * @summary Encodes a(n) LocUpdateHLRRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocUpdateHLRRecord, encoded as an ASN.1 Element.
 */
export
function _encode_LocUpdateHLRRecord (value: LocUpdateHLRRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocUpdateHLRRecord) { _cached_encoder_for_LocUpdateHLRRecord = function (value: LocUpdateHLRRecord, _elGetter: $.ASN1Encoder<LocUpdateHLRRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.oldLocation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Visited_Location_info, $.BER)(value.oldLocation, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Visited_Location_info, $.BER)(value.newLocation, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.updateTime, $.BER));
    if (value.updateResult !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_HLRIntResult, $.BER)(value.updateResult, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_LocUpdateHLRRecord(value, elGetter);
}


/* eslint-enable */
