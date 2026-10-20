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
 * @summary SGSNMBMSRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGSNMBMSRecord ::= SET {
 *    recordType             [0] IMPLICIT RecordType,
 *    ggsnAddress            [1] GSNAddress,
 *    chargingID             [2] IMPLICIT INTEGER ( 0 .. 4294967295 ),
 *    listofRAs              [3] IMPLICIT SEQUENCE  OF
 *       OCTET STRING ( SIZE( 6 ) ) OPTIONAL,
 *    accessPointNameNI      [4] IMPLICIT IA5String  ( SIZE( 1 .. 63 ) ) OPTIONAL,
 *    servedPDPAddress       [5] PDPAddress OPTIONAL,
 *    listOfTrafficVolumes   [6] IMPLICIT SEQUENCE  OF
 *       ChangeOfMBMSCondition OPTIONAL,
 *    recordOpeningTime      [7] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    duration               [8] IMPLICIT INTEGER,
 *    causeForRecClosing     [9] IMPLICIT CauseForRecClosing,
 *    diagnostics            [10] Diagnostics OPTIONAL,
 *    recordSequenceNumber   [11] IMPLICIT INTEGER OPTIONAL,
 *    nodeID                 [12] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordExtensions       [13] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    localSequenceNumber    [14] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    sgsnPLMNIdentifier     [15] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    numberofReceivingUE    [16] IMPLICIT INTEGER OPTIONAL,
 *    mbmsInformation        [17] IMPLICIT MBMSInformation OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SGSNMBMSRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `ggsnAddress`.
     * @public
     * @readonly
     */
    readonly ggsnAddress: GSNAddress;
    /**
     * @summary `chargingID`.
     * @public
     * @readonly
     */
    readonly chargingID: INTEGER;
    /**
     * @summary `listofRAs`.
     * @public
     * @readonly
     */
    readonly listofRAs: OPTIONAL<OCTET_STRING[]>;
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
     * @summary `sgsnPLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly sgsnPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `numberofReceivingUE`.
     * @public
     * @readonly
     */
    readonly numberofReceivingUE: OPTIONAL<INTEGER>;
    /**
     * @summary `mbmsInformation`.
     * @public
     * @readonly
     */
    readonly mbmsInformation: OPTIONAL<MBMSInformation>;

    constructor (
        recordType: RecordType,
        ggsnAddress: GSNAddress,
        chargingID: INTEGER,
        listofRAs: OPTIONAL<OCTET_STRING[]>,
        accessPointNameNI: OPTIONAL<IA5String>,
        servedPDPAddress: OPTIONAL<PDPAddress>,
        listOfTrafficVolumes: OPTIONAL<ChangeOfMBMSCondition[]>,
        recordOpeningTime: OCTET_STRING,
        duration: INTEGER,
        causeForRecClosing: CauseForRecClosing,
        diagnostics: OPTIONAL<Diagnostics>,
        recordSequenceNumber: OPTIONAL<INTEGER>,
        nodeID: OPTIONAL<IA5String>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        sgsnPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        numberofReceivingUE: OPTIONAL<INTEGER>,
        mbmsInformation: OPTIONAL<MBMSInformation>
    ) {
        this.recordType = recordType;
        this.ggsnAddress = ggsnAddress;
        this.chargingID = chargingID;
        this.listofRAs = listofRAs;
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
        this.sgsnPLMNIdentifier = sgsnPLMNIdentifier;
        this.numberofReceivingUE = numberofReceivingUE;
        this.mbmsInformation = mbmsInformation;
    
        if (((typeof this.chargingID === "bigint" ? Number(this.chargingID) : this.chargingID) < 0 || (typeof this.chargingID === "bigint" ? Number(this.chargingID) : this.chargingID) > 4294967295)) {
            throw new ASN1OverflowError("SGSNMBMSRecord.chargingID violates INTEGER range");
        }
        if (this.listofRAs !== undefined && this.listofRAs) {
            for (const _item of this.listofRAs) {
                if (_item.length !== 6) {
                    throw new ASN1SizeError("SGSNMBMSRecord.listofRAs element violates SIZE constraint");
                }
            }
        }
        if (this.accessPointNameNI !== undefined && (this.accessPointNameNI.length < 1 || this.accessPointNameNI.length > 63)) {
            throw new ASN1SizeError("SGSNMBMSRecord.accessPointNameNI violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("SGSNMBMSRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("SGSNMBMSRecord.nodeID violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && ((typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) < 0 || (typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) > 4294967295)) {
            throw new ASN1OverflowError("SGSNMBMSRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.sgsnPLMNIdentifier !== undefined && (this.sgsnPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("SGSNMBMSRecord.sgsnPLMNIdentifier violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a SGSNMBMSRecord
     * @description
     * 
     * This takes an `object` and converts it to a `SGSNMBMSRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SGSNMBMSRecord`.
     * @returns {SGSNMBMSRecord}
     */
    public static _from_object (_o: { [_K in keyof (SGSNMBMSRecord)]: (SGSNMBMSRecord)[_K] }): SGSNMBMSRecord {
        return new SGSNMBMSRecord(_o.recordType, _o.ggsnAddress, _o.chargingID, _o.listofRAs, _o.accessPointNameNI, _o.servedPDPAddress, _o.listOfTrafficVolumes, _o.recordOpeningTime, _o.duration, _o.causeForRecClosing, _o.diagnostics, _o.recordSequenceNumber, _o.nodeID, _o.recordExtensions, _o.localSequenceNumber, _o.sgsnPLMNIdentifier, _o.numberofReceivingUE, _o.mbmsInformation);
    }


}

/**
 * @summary The Leading Root Component Types of SGSNMBMSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SGSNMBMSRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("ggsnAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("chargingID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("listofRAs", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("accessPointNameNI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("servedPDPAddress", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("listOfTrafficVolumes", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("recordOpeningTime", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("duration", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("causeForRecClosing", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("recordSequenceNumber", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("sgsnPLMNIdentifier", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("numberofReceivingUE", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("mbmsInformation", true, $.hasTag(_TagClass.context, 17))
];

/**
 * @summary The Trailing Root Component Types of SGSNMBMSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SGSNMBMSRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SGSNMBMSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SGSNMBMSRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SGSNMBMSRecord: $.ASN1Decoder<SGSNMBMSRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SGSNMBMSRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SGSNMBMSRecord (el: _Element): SGSNMBMSRecord {
    if (!_cached_decoder_for_SGSNMBMSRecord) { _cached_decoder_for_SGSNMBMSRecord = function (el: _Element): SGSNMBMSRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let ggsnAddress!: GSNAddress;
    let chargingID!: INTEGER;
    let listofRAs: OPTIONAL<OCTET_STRING[]>;
    let accessPointNameNI: OPTIONAL<IA5String>;
    let servedPDPAddress: OPTIONAL<PDPAddress>;
    let listOfTrafficVolumes: OPTIONAL<ChangeOfMBMSCondition[]>;
    let recordOpeningTime!: OCTET_STRING;
    let duration!: INTEGER;
    let causeForRecClosing!: CauseForRecClosing;
    let diagnostics: OPTIONAL<Diagnostics>;
    let recordSequenceNumber: OPTIONAL<INTEGER>;
    let nodeID: OPTIONAL<IA5String>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let sgsnPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let numberofReceivingUE: OPTIONAL<INTEGER>;
    let mbmsInformation: OPTIONAL<MBMSInformation>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "ggsnAddress": (_el: _Element): void => { ggsnAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "chargingID": (_el: _Element): void => { chargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "listofRAs": (_el: _Element): void => { listofRAs = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString))(_el); },
        "accessPointNameNI": (_el: _Element): void => { accessPointNameNI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "servedPDPAddress": (_el: _Element): void => { servedPDPAddress = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "listOfTrafficVolumes": (_el: _Element): void => { listOfTrafficVolumes = $._decode_implicit<ChangeOfMBMSCondition[]>(() => $._decodeSequenceOf<ChangeOfMBMSCondition>(() => _decode_ChangeOfMBMSCondition))(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForRecClosing": (_el: _Element): void => { causeForRecClosing = $._decode_implicit<CauseForRecClosing>(() => _decode_CauseForRecClosing)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "recordSequenceNumber": (_el: _Element): void => { recordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sgsnPLMNIdentifier": (_el: _Element): void => { sgsnPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "numberofReceivingUE": (_el: _Element): void => { numberofReceivingUE = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mbmsInformation": (_el: _Element): void => { mbmsInformation = $._decode_implicit<MBMSInformation>(() => _decode_MBMSInformation)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SGSNMBMSRecord,
        _extension_additions_list_spec_for_SGSNMBMSRecord,
        _root_component_type_list_2_spec_for_SGSNMBMSRecord,
        undefined,
    );
    return new SGSNMBMSRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        ggsnAddress,
        chargingID,
        listofRAs,
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
        sgsnPLMNIdentifier,
        numberofReceivingUE,
        mbmsInformation
    );
}; }
    return _cached_decoder_for_SGSNMBMSRecord(el);
}

let _cached_encoder_for_SGSNMBMSRecord: $.ASN1Encoder<SGSNMBMSRecord> | null = null;

/**
 * @summary Encodes a(n) SGSNMBMSRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SGSNMBMSRecord, encoded as an ASN.1 Element.
 */
export
function _encode_SGSNMBMSRecord (value: SGSNMBMSRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SGSNMBMSRecord) { _cached_encoder_for_SGSNMBMSRecord = function (value: SGSNMBMSRecord, _elGetter: $.ASN1Encoder<SGSNMBMSRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GSNAddress, $.BER)(value.ggsnAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.chargingID, $.BER));
    if (value.listofRAs !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER)(value.listofRAs, $.BER));
    }
    if (value.accessPointNameNI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeIA5String, $.BER)(value.accessPointNameNI, $.BER));
    }
    if (value.servedPDPAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_PDPAddress, $.BER)(value.servedPDPAddress, $.BER));
    }
    if (value.listOfTrafficVolumes !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<ChangeOfMBMSCondition>(() => _encode_ChangeOfMBMSCondition, $.BER), $.BER)(value.listOfTrafficVolumes, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.duration, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_CauseForRecClosing, $.BER)(value.causeForRecClosing, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_Diagnostics, $.BER)(value.diagnostics, $.BER));
    }
    if (value.recordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.recordSequenceNumber, $.BER));
    }
    if (value.nodeID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeIA5String, $.BER)(value.nodeID, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.sgsnPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeOctetString, $.BER)(value.sgsnPLMNIdentifier, $.BER));
    }
    if (value.numberofReceivingUE !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER)(value.numberofReceivingUE, $.BER));
    }
    if (value.mbmsInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_MBMSInformation, $.BER)(value.mbmsInformation, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_SGSNMBMSRecord(value, elGetter);
}


/* eslint-enable */
