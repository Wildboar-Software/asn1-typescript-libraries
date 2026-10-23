/* eslint-disable */
import {
    GraphicString,
    IA5String,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../MBMSChargingDataTypes/RecordType.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../MBMSChargingDataTypes/IPAddress.ta.mjs";
import { PDPAddress, _decode_PDPAddress, _encode_PDPAddress } from "../MBMSChargingDataTypes/PDPAddress.ta.mjs";
import { ListOfTrafficVolumes, _decode_ListOfTrafficVolumes, _encode_ListOfTrafficVolumes } from "../MBMSChargingDataTypes/ListOfTrafficVolumes.ta.mjs";
import { CONTENTBMSCRecord_causeForRecClosing, _decode_CONTENTBMSCRecord_causeForRecClosing, _encode_CONTENTBMSCRecord_causeForRecClosing } from "../MBMSChargingDataTypes/CONTENTBMSCRecord-causeForRecClosing.ta.mjs";
import { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../MBMSChargingDataTypes/Diagnostics.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MBMSChargingDataTypes/ManagementExtension.ta.mjs";
import { BearerServiceDescription, _decode_BearerServiceDescription, _encode_BearerServiceDescription } from "../MBMSChargingDataTypes/BearerServiceDescription.ta.mjs";
import { MBMSInformation, _decode_MBMSInformation, _encode_MBMSInformation } from "../MBMSChargingDataTypes/MBMSInformation.ta.mjs";


/**
 * @summary CONTENTBMSCRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CONTENTBMSCRecord ::= SET {
 *    recordType                 [0] IMPLICIT RecordType,
 *    contentProviderId          [1] IMPLICIT GraphicString,
 *    listofDownstreamNodes      [2] IMPLICIT SEQUENCE  OF
 *       IPAddress,
 *    accessPointNameNI          [3] IMPLICIT IA5String  ( SIZE( 1 .. 63 ) ) OPTIONAL,
 *    servedPDPAddress           [4] PDPAddress OPTIONAL,
 *    listOfTrafficVolumes       [5] IMPLICIT SEQUENCE  OF
 *       ListOfTrafficVolumes OPTIONAL,
 *    recordOpeningTime          [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    duration                   [7] IMPLICIT INTEGER,
 *    causeForRecClosing         [8] IMPLICIT INTEGER {
 *       normalRelease                 ( 0 ),
 *       abnormalRelease               ( 4 ),
 *       volumeLimit                   ( 16 ),
 *       timeLimit                     ( 17 ),
 *       maxChangeCond                 ( 19 ),
 *       managementIntervention        ( 20 ),
 *       listofDownstreamNodeChange    ( 59 )},
 *    diagnostics                [9] Diagnostics OPTIONAL,
 *    recordSequenceNumber       [10] IMPLICIT INTEGER OPTIONAL,
 *    nodeID                     [11] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordExtensions           [12] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    localSequenceNumber        [13] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recipientAddressList       [14] IMPLICIT SEQUENCE  OF
 *       OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ),
 *    bearerServiceDescription   [15] IMPLICIT BearerServiceDescription OPTIONAL,
 *    mbmsInformation            [16] IMPLICIT MBMSInformation OPTIONAL,
 *    serviceContextID           [17] IMPLICIT UTF8String OPTIONAL,
 *    servedpdpPDNType           [18] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class CONTENTBMSCRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `contentProviderId`.
     * @public
     * @readonly
     */
    readonly contentProviderId: GraphicString;
    /**
     * @summary `listofDownstreamNodes`.
     * @public
     * @readonly
     */
    readonly listofDownstreamNodes: IPAddress[];
    /**
     * @summary `accessPointNameNI`.
     * @public
     * @readonly
     */
    readonly accessPointNameNI: OPTIONAL<IA5String>;
    /**
     * @summary `servedPDPAddress`.
     * @public
     * @readonly
     */
    readonly servedPDPAddress: OPTIONAL<PDPAddress>;
    /**
     * @summary `listOfTrafficVolumes`.
     * @public
     * @readonly
     */
    readonly listOfTrafficVolumes: OPTIONAL<ListOfTrafficVolumes[]>;
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
    readonly causeForRecClosing: CONTENTBMSCRecord_causeForRecClosing;
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
     * @summary `recipientAddressList`.
     * @public
     * @readonly
     */
    readonly recipientAddressList: OCTET_STRING[];
    /**
     * @summary `bearerServiceDescription`.
     * @public
     * @readonly
     */
    readonly bearerServiceDescription: OPTIONAL<BearerServiceDescription>;
    /**
     * @summary `mbmsInformation`.
     * @public
     * @readonly
     */
    readonly mbmsInformation: OPTIONAL<MBMSInformation>;
    /**
     * @summary `serviceContextID`.
     * @public
     * @readonly
     */
    readonly serviceContextID: OPTIONAL<UTF8String>;
    /**
     * @summary `servedpdpPDNType`.
     * @public
     * @readonly
     */
    readonly servedpdpPDNType: OPTIONAL<OCTET_STRING>;

    constructor (
        recordType: RecordType,
        contentProviderId: GraphicString,
        listofDownstreamNodes: IPAddress[],
        accessPointNameNI: OPTIONAL<IA5String>,
        servedPDPAddress: OPTIONAL<PDPAddress>,
        listOfTrafficVolumes: OPTIONAL<ListOfTrafficVolumes[]>,
        recordOpeningTime: OCTET_STRING,
        duration: INTEGER,
        causeForRecClosing: CONTENTBMSCRecord_causeForRecClosing,
        diagnostics: OPTIONAL<Diagnostics>,
        recordSequenceNumber: OPTIONAL<INTEGER>,
        nodeID: OPTIONAL<IA5String>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        recipientAddressList: OCTET_STRING[],
        bearerServiceDescription: OPTIONAL<BearerServiceDescription>,
        mbmsInformation: OPTIONAL<MBMSInformation>,
        serviceContextID: OPTIONAL<UTF8String>,
        servedpdpPDNType: OPTIONAL<OCTET_STRING>
    ) {
        this.recordType = recordType;
        this.contentProviderId = contentProviderId;
        this.listofDownstreamNodes = listofDownstreamNodes;
        this.accessPointNameNI = accessPointNameNI;
        this.servedPDPAddress = servedPDPAddress;
        this.listOfTrafficVolumes = listOfTrafficVolumes;
        this.recordOpeningTime = recordOpeningTime;
        this.duration = duration;
        this.causeForRecClosing = causeForRecClosing;
        this.diagnostics = diagnostics;
        this.recordSequenceNumber = recordSequenceNumber;
        this.nodeID = nodeID;
        this.recordExtensions = recordExtensions;
        this.localSequenceNumber = localSequenceNumber;
        this.recipientAddressList = recipientAddressList;
        this.bearerServiceDescription = bearerServiceDescription;
        this.mbmsInformation = mbmsInformation;
        this.serviceContextID = serviceContextID;
        this.servedpdpPDNType = servedpdpPDNType;
    
        if (this.accessPointNameNI !== undefined && (this.accessPointNameNI.length < 1 || this.accessPointNameNI.length > 63)) {
            throw new ASN1SizeError("CONTENTBMSCRecord.accessPointNameNI violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("CONTENTBMSCRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("CONTENTBMSCRecord.nodeID violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("CONTENTBMSCRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.recipientAddressList) {
            for (const _item of this.recipientAddressList) {
                if (_item.length < 1 || _item.length > 9) {
                    throw new ASN1SizeError("CONTENTBMSCRecord.recipientAddressList element violates SIZE constraint");
                }
            }
        }
        if (this.servedpdpPDNType !== undefined && (this.servedpdpPDNType.length !== 2)) {
            throw new ASN1SizeError("CONTENTBMSCRecord.servedpdpPDNType violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a CONTENTBMSCRecord
     * @description
     * 
     * This takes an `object` and converts it to a `CONTENTBMSCRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CONTENTBMSCRecord`.
     * @returns {CONTENTBMSCRecord}
     */
    public static _from_object (_o: { [_K in keyof (CONTENTBMSCRecord)]: (CONTENTBMSCRecord)[_K] }): CONTENTBMSCRecord {
        return new CONTENTBMSCRecord(_o.recordType, _o.contentProviderId, _o.listofDownstreamNodes, _o.accessPointNameNI, _o.servedPDPAddress, _o.listOfTrafficVolumes, _o.recordOpeningTime, _o.duration, _o.causeForRecClosing, _o.diagnostics, _o.recordSequenceNumber, _o.nodeID, _o.recordExtensions, _o.localSequenceNumber, _o.recipientAddressList, _o.bearerServiceDescription, _o.mbmsInformation, _o.serviceContextID, _o.servedpdpPDNType);
    }


}

/**
 * @summary The Leading Root Component Types of CONTENTBMSCRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CONTENTBMSCRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("contentProviderId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("listofDownstreamNodes", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("accessPointNameNI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("servedPDPAddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("listOfTrafficVolumes", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("recordOpeningTime", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("duration", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("causeForRecClosing", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("recordSequenceNumber", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("recipientAddressList", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("bearerServiceDescription", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("mbmsInformation", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("serviceContextID", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("servedpdpPDNType", true, $.hasTag(_TagClass.context, 18))
];

/**
 * @summary The Trailing Root Component Types of CONTENTBMSCRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CONTENTBMSCRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CONTENTBMSCRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CONTENTBMSCRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CONTENTBMSCRecord: $.ASN1Decoder<CONTENTBMSCRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CONTENTBMSCRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CONTENTBMSCRecord (el: _Element): CONTENTBMSCRecord {
    if (!_cached_decoder_for_CONTENTBMSCRecord) { _cached_decoder_for_CONTENTBMSCRecord = function (el: _Element): CONTENTBMSCRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let contentProviderId!: GraphicString;
    let listofDownstreamNodes!: IPAddress[];
    let accessPointNameNI: OPTIONAL<IA5String>;
    let servedPDPAddress: OPTIONAL<PDPAddress>;
    let listOfTrafficVolumes: OPTIONAL<ListOfTrafficVolumes[]>;
    let recordOpeningTime!: OCTET_STRING;
    let duration!: INTEGER;
    let causeForRecClosing!: CONTENTBMSCRecord_causeForRecClosing;
    let diagnostics: OPTIONAL<Diagnostics>;
    let recordSequenceNumber: OPTIONAL<INTEGER>;
    let nodeID: OPTIONAL<IA5String>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recipientAddressList!: OCTET_STRING[];
    let bearerServiceDescription: OPTIONAL<BearerServiceDescription>;
    let mbmsInformation: OPTIONAL<MBMSInformation>;
    let serviceContextID: OPTIONAL<UTF8String>;
    let servedpdpPDNType: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "contentProviderId": (_el: _Element): void => { contentProviderId = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "listofDownstreamNodes": (_el: _Element): void => { listofDownstreamNodes = $._decode_implicit<IPAddress[]>(() => $._decodeSequenceOf<IPAddress>(() => _decode_IPAddress))(_el); },
        "accessPointNameNI": (_el: _Element): void => { accessPointNameNI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "servedPDPAddress": (_el: _Element): void => { servedPDPAddress = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "listOfTrafficVolumes": (_el: _Element): void => { listOfTrafficVolumes = $._decode_implicit<ListOfTrafficVolumes[]>(() => $._decodeSequenceOf<ListOfTrafficVolumes>(() => _decode_ListOfTrafficVolumes))(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForRecClosing": (_el: _Element): void => { causeForRecClosing = $._decode_implicit<CONTENTBMSCRecord_causeForRecClosing>(() => _decode_CONTENTBMSCRecord_causeForRecClosing)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "recordSequenceNumber": (_el: _Element): void => { recordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recipientAddressList": (_el: _Element): void => { recipientAddressList = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString))(_el); },
        "bearerServiceDescription": (_el: _Element): void => { bearerServiceDescription = $._decode_implicit<BearerServiceDescription>(() => _decode_BearerServiceDescription)(_el); },
        "mbmsInformation": (_el: _Element): void => { mbmsInformation = $._decode_implicit<MBMSInformation>(() => _decode_MBMSInformation)(_el); },
        "serviceContextID": (_el: _Element): void => { serviceContextID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "servedpdpPDNType": (_el: _Element): void => { servedpdpPDNType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_CONTENTBMSCRecord,
        _extension_additions_list_spec_for_CONTENTBMSCRecord,
        _root_component_type_list_2_spec_for_CONTENTBMSCRecord,
        undefined,
    );
    return new CONTENTBMSCRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        contentProviderId,
        listofDownstreamNodes,
        accessPointNameNI,
        servedPDPAddress,
        listOfTrafficVolumes,
        recordOpeningTime,
        duration,
        causeForRecClosing,
        diagnostics,
        recordSequenceNumber,
        nodeID,
        recordExtensions,
        localSequenceNumber,
        recipientAddressList,
        bearerServiceDescription,
        mbmsInformation,
        serviceContextID,
        servedpdpPDNType
    );
}; }
    return _cached_decoder_for_CONTENTBMSCRecord(el);
}

let _cached_encoder_for_CONTENTBMSCRecord: $.ASN1Encoder<CONTENTBMSCRecord> | null = null;

/**
 * @summary Encodes a(n) CONTENTBMSCRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CONTENTBMSCRecord, encoded as an ASN.1 Element.
 */
export
function _encode_CONTENTBMSCRecord (value: CONTENTBMSCRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CONTENTBMSCRecord) { _cached_encoder_for_CONTENTBMSCRecord = function (value: CONTENTBMSCRecord, _elGetter: $.ASN1Encoder<CONTENTBMSCRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeGraphicString, $.BER)(value.contentProviderId, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<IPAddress>(() => _encode_IPAddress, $.BER), $.BER)(value.listofDownstreamNodes, $.BER));
    if (value.accessPointNameNI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeIA5String, $.BER)(value.accessPointNameNI, $.BER));
    }
    if (value.servedPDPAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_PDPAddress, $.BER)(value.servedPDPAddress, $.BER));
    }
    if (value.listOfTrafficVolumes !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<ListOfTrafficVolumes>(() => _encode_ListOfTrafficVolumes, $.BER), $.BER)(value.listOfTrafficVolumes, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.duration, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_CONTENTBMSCRecord_causeForRecClosing, $.BER)(value.causeForRecClosing, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 9, () => _encode_Diagnostics, $.BER)(value.diagnostics, $.BER));
    }
    if (value.recordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.recordSequenceNumber, $.BER));
    }
    if (value.nodeID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeIA5String, $.BER)(value.nodeID, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER)(value.recipientAddressList, $.BER));
    if (value.bearerServiceDescription !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_BearerServiceDescription, $.BER)(value.bearerServiceDescription, $.BER));
    }
    if (value.mbmsInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_MBMSInformation, $.BER)(value.mbmsInformation, $.BER));
    }
    if (value.serviceContextID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeUTF8String, $.BER)(value.serviceContextID, $.BER));
    }
    if (value.servedpdpPDNType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.servedpdpPDNType, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_CONTENTBMSCRecord(value, elGetter);
}


/* eslint-enable */
