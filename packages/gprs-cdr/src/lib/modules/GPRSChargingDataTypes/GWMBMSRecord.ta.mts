/* eslint-disable */
import {
    IA5String,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../GPRSChargingDataTypes/RecordType.ta.mjs";
import { GSNAddress, _decode_GSNAddress, _encode_GSNAddress } from "../GPRSChargingDataTypes/GSNAddress.ta.mjs";
import { PDPAddress, _decode_PDPAddress, _encode_PDPAddress } from "../GPRSChargingDataTypes/PDPAddress.ta.mjs";
import { ChangeOfMBMSCondition, _decode_ChangeOfMBMSCondition, _encode_ChangeOfMBMSCondition } from "../GPRSChargingDataTypes/ChangeOfMBMSCondition.ta.mjs";
import { CauseForRecClosing, _decode_CauseForRecClosing, _encode_CauseForRecClosing } from "../GPRSChargingDataTypes/CauseForRecClosing.ta.mjs";
import { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../GPRSChargingDataTypes/Diagnostics.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../GPRSChargingDataTypes/ManagementExtension.ta.mjs";
import { MBMSInformation, _decode_MBMSInformation, _encode_MBMSInformation } from "../GPRSChargingDataTypes/MBMSInformation.ta.mjs";


/**
 * @summary GWMBMSRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GWMBMSRecord ::= SET {
 *    recordType                 [0] IMPLICIT RecordType,
 *    mbmsGWAddress              [1] GSNAddress,
 *    chargingID                 [2] IMPLICIT INTEGER ( 0 .. 4294967295 ),
 *    listofDownstreamNodes      [3] IMPLICIT SEQUENCE  OF
 *       GSNAddress,
 *    accessPointNameNI          [4] IMPLICIT IA5String  ( SIZE( 1 .. 63 ) ) OPTIONAL,
 *    pdpPDNType                 [5] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    servedPDPPDNAddress        [6] PDPAddress OPTIONAL,
 *    listOfTrafficVolumes       [7] IMPLICIT SEQUENCE  OF
 *       ChangeOfMBMSCondition OPTIONAL,
 *    recordOpeningTime          [8] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    duration                   [9] IMPLICIT INTEGER,
 *    causeForRecClosing         [10] IMPLICIT CauseForRecClosing,
 *    diagnostics                [11] Diagnostics OPTIONAL,
 *    recordSequenceNumber       [12] IMPLICIT INTEGER OPTIONAL,
 *    nodeID                     [13] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordExtensions           [14] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    localSequenceNumber        [15] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    mbmsInformation            [16] IMPLICIT MBMSInformation OPTIONAL,
 *    commonTeid                 [17] IMPLICIT OCTET STRING ( SIZE( 4 ) ) OPTIONAL,
 *    iPMulticastSourceAddress   [18] PDPAddress OPTIONAL}
 * ```
 * 
 * @class
 */
export
class GWMBMSRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `mbmsGWAddress`.
     * @public
     * @readonly
     */
    readonly mbmsGWAddress: GSNAddress;
    /**
     * @summary `chargingID`.
     * @public
     * @readonly
     */
    readonly chargingID: INTEGER;
    /**
     * @summary `listofDownstreamNodes`.
     * @public
     * @readonly
     */
    readonly listofDownstreamNodes: GSNAddress[];
    /**
     * @summary `accessPointNameNI`.
     * @public
     * @readonly
     */
    readonly accessPointNameNI: OPTIONAL<IA5String>;
    /**
     * @summary `pdpPDNType`.
     * @public
     * @readonly
     */
    readonly pdpPDNType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedPDPPDNAddress`.
     * @public
     * @readonly
     */
    readonly servedPDPPDNAddress: OPTIONAL<PDPAddress>;
    /**
     * @summary `listOfTrafficVolumes`.
     * @public
     * @readonly
     */
    readonly listOfTrafficVolumes: OPTIONAL<ChangeOfMBMSCondition[]>;
    /**
     * @summary `recordOpeningTime`.
     * @public
     * @readonly
     */
    readonly recordOpeningTime: OCTET_STRING;
    /**
     * @summary `duration`.
     * @public
     * @readonly
     */
    readonly duration: INTEGER;
    /**
     * @summary `causeForRecClosing`.
     * @public
     * @readonly
     */
    readonly causeForRecClosing: CauseForRecClosing;
    /**
     * @summary `diagnostics`.
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<Diagnostics>;
    /**
     * @summary `recordSequenceNumber`.
     * @public
     * @readonly
     */
    readonly recordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `nodeID`.
     * @public
     * @readonly
     */
    readonly nodeID: OPTIONAL<IA5String>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `localSequenceNumber`.
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `mbmsInformation`.
     * @public
     * @readonly
     */
    readonly mbmsInformation: OPTIONAL<MBMSInformation>;
    /**
     * @summary `commonTeid`.
     * @public
     * @readonly
     */
    readonly commonTeid: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iPMulticastSourceAddress`.
     * @public
     * @readonly
     */
    readonly iPMulticastSourceAddress: OPTIONAL<PDPAddress>;

    constructor (
        recordType: RecordType,
        mbmsGWAddress: GSNAddress,
        chargingID: INTEGER,
        listofDownstreamNodes: GSNAddress[],
        accessPointNameNI: OPTIONAL<IA5String>,
        pdpPDNType: OPTIONAL<OCTET_STRING>,
        servedPDPPDNAddress: OPTIONAL<PDPAddress>,
        listOfTrafficVolumes: OPTIONAL<ChangeOfMBMSCondition[]>,
        recordOpeningTime: OCTET_STRING,
        duration: INTEGER,
        causeForRecClosing: CauseForRecClosing,
        diagnostics: OPTIONAL<Diagnostics>,
        recordSequenceNumber: OPTIONAL<INTEGER>,
        nodeID: OPTIONAL<IA5String>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        mbmsInformation: OPTIONAL<MBMSInformation>,
        commonTeid: OPTIONAL<OCTET_STRING>,
        iPMulticastSourceAddress: OPTIONAL<PDPAddress>
    ) {
        this.recordType = recordType;
        this.mbmsGWAddress = mbmsGWAddress;
        this.chargingID = chargingID;
        this.listofDownstreamNodes = listofDownstreamNodes;
        this.accessPointNameNI = accessPointNameNI;
        this.pdpPDNType = pdpPDNType;
        this.servedPDPPDNAddress = servedPDPPDNAddress;
        this.listOfTrafficVolumes = listOfTrafficVolumes;
        this.recordOpeningTime = recordOpeningTime;
        this.duration = duration;
        this.causeForRecClosing = causeForRecClosing;
        this.diagnostics = diagnostics;
        this.recordSequenceNumber = recordSequenceNumber;
        this.nodeID = nodeID;
        this.recordExtensions = recordExtensions;
        this.localSequenceNumber = localSequenceNumber;
        this.mbmsInformation = mbmsInformation;
        this.commonTeid = commonTeid;
        this.iPMulticastSourceAddress = iPMulticastSourceAddress;
    
        if ((this.chargingID < 0 || this.chargingID > 4294967295)) {
            throw new ASN1OverflowError("GWMBMSRecord.chargingID violates INTEGER range");
        }
        if (this.accessPointNameNI !== undefined && (this.accessPointNameNI.length < 1 || this.accessPointNameNI.length > 63)) {
            throw new ASN1SizeError("GWMBMSRecord.accessPointNameNI violates SIZE constraint");
        }
        if (this.pdpPDNType !== undefined && (this.pdpPDNType.length !== 2)) {
            throw new ASN1SizeError("GWMBMSRecord.pdpPDNType violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("GWMBMSRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("GWMBMSRecord.nodeID violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("GWMBMSRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.commonTeid !== undefined && (this.commonTeid.length !== 4)) {
            throw new ASN1SizeError("GWMBMSRecord.commonTeid violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a GWMBMSRecord
     * @description
     * 
     * This takes an `object` and converts it to a `GWMBMSRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GWMBMSRecord`.
     * @returns {GWMBMSRecord}
     */
    public static _from_object (_o: { [_K in keyof (GWMBMSRecord)]: (GWMBMSRecord)[_K] }): GWMBMSRecord {
        return new GWMBMSRecord(_o.recordType, _o.mbmsGWAddress, _o.chargingID, _o.listofDownstreamNodes, _o.accessPointNameNI, _o.pdpPDNType, _o.servedPDPPDNAddress, _o.listOfTrafficVolumes, _o.recordOpeningTime, _o.duration, _o.causeForRecClosing, _o.diagnostics, _o.recordSequenceNumber, _o.nodeID, _o.recordExtensions, _o.localSequenceNumber, _o.mbmsInformation, _o.commonTeid, _o.iPMulticastSourceAddress);
    }


}

/**
 * @summary The Leading Root Component Types of GWMBMSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GWMBMSRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mbmsGWAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("chargingID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("listofDownstreamNodes", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("accessPointNameNI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pdpPDNType", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("servedPDPPDNAddress", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("listOfTrafficVolumes", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("recordOpeningTime", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("duration", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("causeForRecClosing", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("recordSequenceNumber", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("mbmsInformation", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("commonTeid", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("iPMulticastSourceAddress", true, $.hasTag(_TagClass.context, 18))
];

/**
 * @summary The Trailing Root Component Types of GWMBMSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GWMBMSRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GWMBMSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GWMBMSRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GWMBMSRecord: $.ASN1Decoder<GWMBMSRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GWMBMSRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GWMBMSRecord (el: _Element): GWMBMSRecord {
    if (!_cached_decoder_for_GWMBMSRecord) { _cached_decoder_for_GWMBMSRecord = function (el: _Element): GWMBMSRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let mbmsGWAddress!: GSNAddress;
    let chargingID!: INTEGER;
    let listofDownstreamNodes!: GSNAddress[];
    let accessPointNameNI: OPTIONAL<IA5String>;
    let pdpPDNType: OPTIONAL<OCTET_STRING>;
    let servedPDPPDNAddress: OPTIONAL<PDPAddress>;
    let listOfTrafficVolumes: OPTIONAL<ChangeOfMBMSCondition[]>;
    let recordOpeningTime!: OCTET_STRING;
    let duration!: INTEGER;
    let causeForRecClosing!: CauseForRecClosing;
    let diagnostics: OPTIONAL<Diagnostics>;
    let recordSequenceNumber: OPTIONAL<INTEGER>;
    let nodeID: OPTIONAL<IA5String>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let mbmsInformation: OPTIONAL<MBMSInformation>;
    let commonTeid: OPTIONAL<OCTET_STRING>;
    let iPMulticastSourceAddress: OPTIONAL<PDPAddress>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "mbmsGWAddress": (_el: _Element): void => { mbmsGWAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "chargingID": (_el: _Element): void => { chargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "listofDownstreamNodes": (_el: _Element): void => { listofDownstreamNodes = $._decode_implicit<GSNAddress[]>(() => $._decodeSequenceOf<GSNAddress>(() => _decode_GSNAddress))(_el); },
        "accessPointNameNI": (_el: _Element): void => { accessPointNameNI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "pdpPDNType": (_el: _Element): void => { pdpPDNType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedPDPPDNAddress": (_el: _Element): void => { servedPDPPDNAddress = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "listOfTrafficVolumes": (_el: _Element): void => { listOfTrafficVolumes = $._decode_implicit<ChangeOfMBMSCondition[]>(() => $._decodeSequenceOf<ChangeOfMBMSCondition>(() => _decode_ChangeOfMBMSCondition))(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForRecClosing": (_el: _Element): void => { causeForRecClosing = $._decode_implicit<CauseForRecClosing>(() => _decode_CauseForRecClosing)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "recordSequenceNumber": (_el: _Element): void => { recordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mbmsInformation": (_el: _Element): void => { mbmsInformation = $._decode_implicit<MBMSInformation>(() => _decode_MBMSInformation)(_el); },
        "commonTeid": (_el: _Element): void => { commonTeid = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "iPMulticastSourceAddress": (_el: _Element): void => { iPMulticastSourceAddress = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_GWMBMSRecord,
        _extension_additions_list_spec_for_GWMBMSRecord,
        _root_component_type_list_2_spec_for_GWMBMSRecord,
        undefined,
    );
    return new GWMBMSRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        mbmsGWAddress,
        chargingID,
        listofDownstreamNodes,
        accessPointNameNI,
        pdpPDNType,
        servedPDPPDNAddress,
        listOfTrafficVolumes,
        recordOpeningTime,
        duration,
        causeForRecClosing,
        diagnostics,
        recordSequenceNumber,
        nodeID,
        recordExtensions,
        localSequenceNumber,
        mbmsInformation,
        commonTeid,
        iPMulticastSourceAddress
    );
}; }
    return _cached_decoder_for_GWMBMSRecord(el);
}

let _cached_encoder_for_GWMBMSRecord: $.ASN1Encoder<GWMBMSRecord> | null = null;

/**
 * @summary Encodes a(n) GWMBMSRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GWMBMSRecord, encoded as an ASN.1 Element.
 */
export
function _encode_GWMBMSRecord (value: GWMBMSRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GWMBMSRecord) { _cached_encoder_for_GWMBMSRecord = function (value: GWMBMSRecord, _elGetter: $.ASN1Encoder<GWMBMSRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GSNAddress, $.BER)(value.mbmsGWAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.chargingID, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<GSNAddress>(() => _encode_GSNAddress, $.BER), $.BER)(value.listofDownstreamNodes, $.BER));
    if (value.accessPointNameNI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeIA5String, $.BER)(value.accessPointNameNI, $.BER));
    }
    if (value.pdpPDNType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.pdpPDNType, $.BER));
    }
    if (value.servedPDPPDNAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_PDPAddress, $.BER)(value.servedPDPPDNAddress, $.BER));
    }
    if (value.listOfTrafficVolumes !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<ChangeOfMBMSCondition>(() => _encode_ChangeOfMBMSCondition, $.BER), $.BER)(value.listOfTrafficVolumes, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.duration, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => _encode_CauseForRecClosing, $.BER)(value.causeForRecClosing, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 11, () => _encode_Diagnostics, $.BER)(value.diagnostics, $.BER));
    }
    if (value.recordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER)(value.recordSequenceNumber, $.BER));
    }
    if (value.nodeID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeIA5String, $.BER)(value.nodeID, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.mbmsInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_MBMSInformation, $.BER)(value.mbmsInformation, $.BER));
    }
    if (value.commonTeid !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.commonTeid, $.BER));
    }
    if (value.iPMulticastSourceAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 18, () => _encode_PDPAddress, $.BER)(value.iPMulticastSourceAddress, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_GWMBMSRecord(value, elGetter);
}


/* eslint-enable */
