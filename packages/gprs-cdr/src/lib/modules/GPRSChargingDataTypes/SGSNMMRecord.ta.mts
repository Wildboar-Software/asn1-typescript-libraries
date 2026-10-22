/* eslint-disable */
import {
    BOOLEAN,
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
import { ChangeLocation, _decode_ChangeLocation, _encode_ChangeLocation } from "../GPRSChargingDataTypes/ChangeLocation.ta.mjs";
import { CauseForRecClosing, _decode_CauseForRecClosing, _encode_CauseForRecClosing } from "../GPRSChargingDataTypes/CauseForRecClosing.ta.mjs";
import { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../GPRSChargingDataTypes/Diagnostics.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../GPRSChargingDataTypes/ManagementExtension.ta.mjs";
import { CAMELInformationMM, _decode_CAMELInformationMM, _encode_CAMELInformationMM } from "../GPRSChargingDataTypes/CAMELInformationMM.ta.mjs";
import { ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../GPRSChargingDataTypes/ChChSelectionMode.ta.mjs";
import { CNOperatorSelectionEntity, _decode_CNOperatorSelectionEntity, _encode_CNOperatorSelectionEntity, _enum_for_CNOperatorSelectionEntity } from "../GPRSChargingDataTypes/CNOperatorSelectionEntity.ta.mjs";


/**
 * @summary SGSNMMRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGSNMMRecord ::= SET {
 *    recordType                  [0] IMPLICIT RecordType,
 *    servedIMSI                  [1] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedIMEI                  [2] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    sgsnAddress                 [3] GSNAddress OPTIONAL,
 *    msNetworkCapability         [4] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ) OPTIONAL,
 *    routingArea                 [5] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    locationAreaCode            [6] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    cellIdentifier              [7] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    changeLocation              [8] IMPLICIT SEQUENCE  OF
 *       ChangeLocation OPTIONAL,
 *    recordOpeningTime           [9] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    duration                    [10] IMPLICIT INTEGER OPTIONAL,
 *    sgsnChange                  [11] IMPLICIT BOOLEAN OPTIONAL,
 *    causeForRecClosing          [12] IMPLICIT CauseForRecClosing,
 *    diagnostics                 [13] Diagnostics OPTIONAL,
 *    recordSequenceNumber        [14] IMPLICIT INTEGER OPTIONAL,
 *    nodeID                      [15] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordExtensions            [16] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    localSequenceNumber         [17] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    servedMSISDN                [18] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    chargingCharacteristics     [19] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    cAMELInformationMM          [20] IMPLICIT CAMELInformationMM OPTIONAL,
 *    rATType                     [21] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    chChSelectionMode           [22] IMPLICIT ChChSelectionMode OPTIONAL,
 *    cellPLMNId                  [23] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    servingNodePLMNIdentifier   [24] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    cNOperatorSelectionEnt      [25] IMPLICIT CNOperatorSelectionEntity OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SGSNMMRecord {
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
     * @summary `sgsnAddress`.
     * @public
     * @readonly
     */
    readonly sgsnAddress: OPTIONAL<GSNAddress>;
    /**
     * @summary `msNetworkCapability`.
     * @public
     * @readonly
     */
    readonly msNetworkCapability: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `routingArea`.
     * @public
     * @readonly
     */
    readonly routingArea: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `locationAreaCode`.
     * @public
     * @readonly
     */
    readonly locationAreaCode: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cellIdentifier`.
     * @public
     * @readonly
     */
    readonly cellIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `changeLocation`.
     * @public
     * @readonly
     */
    readonly changeLocation: OPTIONAL<ChangeLocation[]>;
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
    readonly duration: OPTIONAL<INTEGER>;
    /**
     * @summary `sgsnChange`.
     * @public
     * @readonly
     */
    readonly sgsnChange: OPTIONAL<BOOLEAN>;
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
     * @summary `servedMSISDN`.
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `chargingCharacteristics`.
     * @public
     * @readonly
     */
    readonly chargingCharacteristics: OCTET_STRING;
    /**
     * @summary `cAMELInformationMM`.
     * @public
     * @readonly
     */
    readonly cAMELInformationMM: OPTIONAL<CAMELInformationMM>;
    /**
     * @summary `rATType`.
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `chChSelectionMode`.
     * @public
     * @readonly
     */
    readonly chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    /**
     * @summary `cellPLMNId`.
     * @public
     * @readonly
     */
    readonly cellPLMNId: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servingNodePLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cNOperatorSelectionEnt`.
     * @public
     * @readonly
     */
    readonly cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>;

    constructor (
        recordType: RecordType,
        servedIMSI: OCTET_STRING,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        sgsnAddress: OPTIONAL<GSNAddress>,
        msNetworkCapability: OPTIONAL<OCTET_STRING>,
        routingArea: OPTIONAL<OCTET_STRING>,
        locationAreaCode: OPTIONAL<OCTET_STRING>,
        cellIdentifier: OPTIONAL<OCTET_STRING>,
        changeLocation: OPTIONAL<ChangeLocation[]>,
        recordOpeningTime: OCTET_STRING,
        duration: OPTIONAL<INTEGER>,
        sgsnChange: OPTIONAL<BOOLEAN>,
        causeForRecClosing: CauseForRecClosing,
        diagnostics: OPTIONAL<Diagnostics>,
        recordSequenceNumber: OPTIONAL<INTEGER>,
        nodeID: OPTIONAL<IA5String>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        chargingCharacteristics: OCTET_STRING,
        cAMELInformationMM: OPTIONAL<CAMELInformationMM>,
        rATType: OPTIONAL<INTEGER>,
        chChSelectionMode: OPTIONAL<ChChSelectionMode>,
        cellPLMNId: OPTIONAL<OCTET_STRING>,
        servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>,
        cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.servedIMEI = servedIMEI;
        this.sgsnAddress = sgsnAddress;
        this.msNetworkCapability = msNetworkCapability;
        this.routingArea = routingArea;
        this.locationAreaCode = locationAreaCode;
        this.cellIdentifier = cellIdentifier;
        this.changeLocation = changeLocation;
        this.recordOpeningTime = recordOpeningTime;
        this.duration = duration;
        this.sgsnChange = sgsnChange;
        this.causeForRecClosing = causeForRecClosing;
        this.diagnostics = diagnostics;
        this.recordSequenceNumber = recordSequenceNumber;
        this.nodeID = nodeID;
        this.recordExtensions = recordExtensions;
        this.localSequenceNumber = localSequenceNumber;
        this.servedMSISDN = servedMSISDN;
        this.chargingCharacteristics = chargingCharacteristics;
        this.cAMELInformationMM = cAMELInformationMM;
        this.rATType = rATType;
        this.chChSelectionMode = chChSelectionMode;
        this.cellPLMNId = cellPLMNId;
        this.servingNodePLMNIdentifier = servingNodePLMNIdentifier;
        this.cNOperatorSelectionEnt = cNOperatorSelectionEnt;
    
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("SGSNMMRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("SGSNMMRecord.servedIMEI violates SIZE constraint");
        }
        if (this.msNetworkCapability !== undefined && (this.msNetworkCapability.length < 1 || this.msNetworkCapability.length > 8)) {
            throw new ASN1SizeError("SGSNMMRecord.msNetworkCapability violates SIZE constraint");
        }
        if (this.routingArea !== undefined && (this.routingArea.length !== 1)) {
            throw new ASN1SizeError("SGSNMMRecord.routingArea violates SIZE constraint");
        }
        if (this.locationAreaCode !== undefined && (this.locationAreaCode.length !== 2)) {
            throw new ASN1SizeError("SGSNMMRecord.locationAreaCode violates SIZE constraint");
        }
        if (this.cellIdentifier !== undefined && (this.cellIdentifier.length !== 2)) {
            throw new ASN1SizeError("SGSNMMRecord.cellIdentifier violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("SGSNMMRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("SGSNMMRecord.nodeID violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("SGSNMMRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("SGSNMMRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("SGSNMMRecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("SGSNMMRecord.rATType violates INTEGER range");
        }
        if (this.cellPLMNId !== undefined && (this.cellPLMNId.length !== 3)) {
            throw new ASN1SizeError("SGSNMMRecord.cellPLMNId violates SIZE constraint");
        }
        if (this.servingNodePLMNIdentifier !== undefined && (this.servingNodePLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("SGSNMMRecord.servingNodePLMNIdentifier violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a SGSNMMRecord
     * @description
     * 
     * This takes an `object` and converts it to a `SGSNMMRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SGSNMMRecord`.
     * @returns {SGSNMMRecord}
     */
    public static _from_object (_o: { [_K in keyof (SGSNMMRecord)]: (SGSNMMRecord)[_K] }): SGSNMMRecord {
        return new SGSNMMRecord(_o.recordType, _o.servedIMSI, _o.servedIMEI, _o.sgsnAddress, _o.msNetworkCapability, _o.routingArea, _o.locationAreaCode, _o.cellIdentifier, _o.changeLocation, _o.recordOpeningTime, _o.duration, _o.sgsnChange, _o.causeForRecClosing, _o.diagnostics, _o.recordSequenceNumber, _o.nodeID, _o.recordExtensions, _o.localSequenceNumber, _o.servedMSISDN, _o.chargingCharacteristics, _o.cAMELInformationMM, _o.rATType, _o.chChSelectionMode, _o.cellPLMNId, _o.servingNodePLMNIdentifier, _o.cNOperatorSelectionEnt);
    }

        /**
         * @summary The enum used as the type of the component `chChSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_chChSelectionMode = _enum_for_ChChSelectionMode;        /**
         * @summary The enum used as the type of the component `cNOperatorSelectionEnt`
         * @public
         * @static
         */

    public static _enum_for_cNOperatorSelectionEnt = _enum_for_CNOperatorSelectionEntity;
}

/**
 * @summary The Leading Root Component Types of SGSNMMRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SGSNMMRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sgsnAddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("msNetworkCapability", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("routingArea", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("locationAreaCode", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("cellIdentifier", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("changeLocation", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("recordOpeningTime", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("duration", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("sgsnChange", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("causeForRecClosing", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("recordSequenceNumber", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("chargingCharacteristics", false, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("cAMELInformationMM", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("chChSelectionMode", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("cellPLMNId", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("servingNodePLMNIdentifier", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("cNOperatorSelectionEnt", true, $.hasTag(_TagClass.context, 25))
];

/**
 * @summary The Trailing Root Component Types of SGSNMMRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SGSNMMRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SGSNMMRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SGSNMMRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SGSNMMRecord: $.ASN1Decoder<SGSNMMRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SGSNMMRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SGSNMMRecord (el: _Element): SGSNMMRecord {
    if (!_cached_decoder_for_SGSNMMRecord) { _cached_decoder_for_SGSNMMRecord = function (el: _Element): SGSNMMRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI!: OCTET_STRING;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let sgsnAddress: OPTIONAL<GSNAddress>;
    let msNetworkCapability: OPTIONAL<OCTET_STRING>;
    let routingArea: OPTIONAL<OCTET_STRING>;
    let locationAreaCode: OPTIONAL<OCTET_STRING>;
    let cellIdentifier: OPTIONAL<OCTET_STRING>;
    let changeLocation: OPTIONAL<ChangeLocation[]>;
    let recordOpeningTime!: OCTET_STRING;
    let duration: OPTIONAL<INTEGER>;
    let sgsnChange: OPTIONAL<BOOLEAN>;
    let causeForRecClosing!: CauseForRecClosing;
    let diagnostics: OPTIONAL<Diagnostics>;
    let recordSequenceNumber: OPTIONAL<INTEGER>;
    let nodeID: OPTIONAL<IA5String>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let chargingCharacteristics!: OCTET_STRING;
    let cAMELInformationMM: OPTIONAL<CAMELInformationMM>;
    let rATType: OPTIONAL<INTEGER>;
    let chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    let cellPLMNId: OPTIONAL<OCTET_STRING>;
    let servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sgsnAddress": (_el: _Element): void => { sgsnAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "msNetworkCapability": (_el: _Element): void => { msNetworkCapability = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "routingArea": (_el: _Element): void => { routingArea = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "locationAreaCode": (_el: _Element): void => { locationAreaCode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cellIdentifier": (_el: _Element): void => { cellIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "changeLocation": (_el: _Element): void => { changeLocation = $._decode_implicit<ChangeLocation[]>(() => $._decodeSequenceOf<ChangeLocation>(() => _decode_ChangeLocation))(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sgsnChange": (_el: _Element): void => { sgsnChange = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "causeForRecClosing": (_el: _Element): void => { causeForRecClosing = $._decode_implicit<CauseForRecClosing>(() => _decode_CauseForRecClosing)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "recordSequenceNumber": (_el: _Element): void => { recordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chargingCharacteristics": (_el: _Element): void => { chargingCharacteristics = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cAMELInformationMM": (_el: _Element): void => { cAMELInformationMM = $._decode_implicit<CAMELInformationMM>(() => _decode_CAMELInformationMM)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "chChSelectionMode": (_el: _Element): void => { chChSelectionMode = $._decode_implicit<ChChSelectionMode>(() => _decode_ChChSelectionMode)(_el); },
        "cellPLMNId": (_el: _Element): void => { cellPLMNId = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servingNodePLMNIdentifier": (_el: _Element): void => { servingNodePLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cNOperatorSelectionEnt": (_el: _Element): void => { cNOperatorSelectionEnt = $._decode_implicit<CNOperatorSelectionEntity>(() => _decode_CNOperatorSelectionEntity)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SGSNMMRecord,
        _extension_additions_list_spec_for_SGSNMMRecord,
        _root_component_type_list_2_spec_for_SGSNMMRecord,
        undefined,
    );
    return new SGSNMMRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        servedIMEI,
        sgsnAddress,
        msNetworkCapability,
        routingArea,
        locationAreaCode,
        cellIdentifier,
        changeLocation,
        recordOpeningTime,
        duration,
        sgsnChange,
        causeForRecClosing,
        diagnostics,
        recordSequenceNumber,
        nodeID,
        recordExtensions,
        localSequenceNumber,
        servedMSISDN,
        chargingCharacteristics,
        cAMELInformationMM,
        rATType,
        chChSelectionMode,
        cellPLMNId,
        servingNodePLMNIdentifier,
        cNOperatorSelectionEnt
    );
}; }
    return _cached_decoder_for_SGSNMMRecord(el);
}

let _cached_encoder_for_SGSNMMRecord: $.ASN1Encoder<SGSNMMRecord> | null = null;

/**
 * @summary Encodes a(n) SGSNMMRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SGSNMMRecord, encoded as an ASN.1 Element.
 */
export
function _encode_SGSNMMRecord (value: SGSNMMRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SGSNMMRecord) { _cached_encoder_for_SGSNMMRecord = function (value: SGSNMMRecord, _elGetter: $.ASN1Encoder<SGSNMMRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.sgsnAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_GSNAddress, $.BER)(value.sgsnAddress, $.BER));
    }
    if (value.msNetworkCapability !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.msNetworkCapability, $.BER));
    }
    if (value.routingArea !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.routingArea, $.BER));
    }
    if (value.locationAreaCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.locationAreaCode, $.BER));
    }
    if (value.cellIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.cellIdentifier, $.BER));
    }
    if (value.changeLocation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<ChangeLocation>(() => _encode_ChangeLocation, $.BER), $.BER)(value.changeLocation, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    if (value.duration !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.duration, $.BER));
    }
    if (value.sgsnChange !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeBoolean, $.BER)(value.sgsnChange, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => _encode_CauseForRecClosing, $.BER)(value.causeForRecClosing, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 13, () => _encode_Diagnostics, $.BER)(value.diagnostics, $.BER));
    }
    if (value.recordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.recordSequenceNumber, $.BER));
    }
    if (value.nodeID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeIA5String, $.BER)(value.nodeID, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER)(value.chargingCharacteristics, $.BER));
    if (value.cAMELInformationMM !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_CAMELInformationMM, $.BER)(value.cAMELInformationMM, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.chChSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_ChChSelectionMode, $.BER)(value.chChSelectionMode, $.BER));
    }
    if (value.cellPLMNId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.cellPLMNId, $.BER));
    }
    if (value.servingNodePLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER)(value.servingNodePLMNIdentifier, $.BER));
    }
    if (value.cNOperatorSelectionEnt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => _encode_CNOperatorSelectionEntity, $.BER)(value.cNOperatorSelectionEnt, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_SGSNMMRecord(value, elGetter);
}


/* eslint-enable */
