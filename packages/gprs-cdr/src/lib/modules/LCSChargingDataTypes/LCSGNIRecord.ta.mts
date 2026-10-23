/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../LCSChargingDataTypes/RecordType.ta.mjs";
import { LCSClientType, _decode_LCSClientType, _encode_LCSClientType, _enum_for_LCSClientType } from "../LCSChargingDataTypes/LCSClientType.ta.mjs";
import { LCSClientIdentity, _decode_LCSClientIdentity, _encode_LCSClientIdentity } from "../LCSChargingDataTypes/LCSClientIdentity.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../LCSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary LCSGNIRecord
 * @description
 *
 * LCS GMLC Network Induced CDR (LCS-GNI-CDR). When this CDR type
 * is enabled, the GMLC produces one for each network induced
 * location request (NI-LR) performed via the GMLC.
 *
 * NI-LR positions the UE for an emergency service call. The GMLC
 * processes this CDR when it transfers the location information
 * to the LCS client.
 *
 * Categories: **M** always present; **C** present when the field's
 * conditions are met; **Om** and **Oc** are the operator
 * provisionable forms of those two. Clause 6.1.0 defines them.
 *
 * 3GPP TS 32.271 V12.1.0 clauses 5.2.3.3 and 6.1.3.3.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.2.0.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSGNIRecord ::= SET {
 *    recordType            [0] IMPLICIT RecordType,
 *    recordingEntity       [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    lcsClientType         [2] IMPLICIT LCSClientType OPTIONAL,
 *    lcsClientIdentity     [3] IMPLICIT LCSClientIdentity OPTIONAL,
 *    servedIMSI            [4] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedMSISDN          [5] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    servingEntity         [6] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    resultCode            [7] IMPLICIT INTEGER ( 0 .. MAX ) OPTIONAL,
 *    recordTimeStamp       [8] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    localSequenceNumber   [9] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions      [10] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * 
 * @class
 */
export
class LCSGNIRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * Category M. LCS GMLC Network Induced Record. Set this to
     * `lCSGNIRecord`.
     *
     * 3GPP TS 32.271 V12.1.0 clause 6.1.3.3.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `recordingEntity`.
     * @description
     *
     * Category M. The E.164 address of this GMLC.
     *
     * 3GPP TS 32.271 V12.1.0 clause 6.1.3.3.
     *
     * @public
     * @readonly
     */
    readonly recordingEntity: OCTET_STRING;
    /**
     * @summary `lcsClientType`.
     * @description
     *
     * Category C. The type of the LCS client that invoked the
     * location request, if it is available. The values are those
     * defined for the LCS client type in TS 29.002.
     *
     * 3GPP TS 32.271 V12.1.0 clause 6.1.3.3.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.2.3.
     *
     * @public
     * @readonly
     */
    readonly lcsClientType: OPTIONAL<LCSClientType>;
    /**
     * @summary `lcsClientIdentity`.
     * @description
     *
     * Category C. Further identification of the LCS client, if
     * available. TS 32.298 carries the LCS client identity from
     * TS 29.002: external ID, number dialled by the MS, and
     * internal ID.
     *
     * For online charging, the LCS Client ID information element
     * (category Oc in LCS Information) holds the ID of the LCS
     * client that invoked the location request, if available.
     *
     * 3GPP TS 32.271 V12.1.0 clauses 6.1.3.3 and 6.3.1.2.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.2.2.
     *
     * @public
     * @readonly
     */
    readonly lcsClientIdentity: OPTIONAL<LCSClientIdentity>;
    /**
     * @summary `servedIMSI`.
     * @description
     *
     * Category M. The IMSI of the subscriber that requests the
     * location. The structure of the IMSI is defined in TS 23.003.
     *
     * 3GPP TS 32.271 V12.1.0 clause 6.1.3.3.
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
     * Category Om. The primary MSISDN of the subscriber that
     * requests the location. The structure of the MSISDN is defined
     * in TS 23.003.
     *
     * 3GPP TS 32.271 V12.1.0 clause 6.1.3.3.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.80.
     *
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servingEntity`.
     * @description
     *
     * Category C. The E.164 address of the serving MSC for a
     * CS-NI-LR, or of the serving SGSN for a PS-NI-LR.
     *
     * 3GPP TS 32.271 V12.1.0 clause 6.1.3.3.
     *
     * @public
     * @readonly
     */
    readonly servingEntity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `resultCode`.
     * @description
     *
     * Category Om. Indicates the result of the location request or
     * of an individual positioning. TS 32.298 takes the result
     * code defined in the OMA Mobile Location Protocol.
     *
     * 3GPP TS 32.271 V12.1.0 clause 6.1.3.3.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.2.10.
     *
     * @public
     * @readonly
     */
    readonly resultCode: OPTIONAL<INTEGER>;
    /**
     * @summary `recordTimeStamp`.
     * @description
     *
     * Category Om. Time at which this CDR was generated.
     *
     * 3GPP TS 32.271 V12.1.0 clause 6.1.3.3.
     *
     * @public
     * @readonly
     */
    readonly recordTimeStamp: OCTET_STRING;
    /**
     * @summary `localSequenceNumber`.
     * @description
     *
     * Category Om. Consecutive record number created by this node.
     * The number is allocated sequentially across all CDR types
     * produced by the node, so a gap identifies a missing record.
     *
     * 3GPP TS 32.271 V12.1.0 clause 6.1.3.3.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.26.
     *
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * Category Oc. A set of network- or manufacturer-specific
     * extensions to the record. Present when an extension exists.
     * TS 32.298 encodes the set as X.721 management extensions.
     *
     * 3GPP TS 32.271 V12.1.0 clause 6.1.3.3.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.48.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;

    constructor (
        recordType: RecordType,
        recordingEntity: OCTET_STRING,
        lcsClientType: OPTIONAL<LCSClientType>,
        lcsClientIdentity: OPTIONAL<LCSClientIdentity>,
        servedIMSI: OCTET_STRING,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        servingEntity: OPTIONAL<OCTET_STRING>,
        resultCode: OPTIONAL<INTEGER>,
        recordTimeStamp: OCTET_STRING,
        localSequenceNumber?: OPTIONAL<INTEGER>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.recordingEntity = recordingEntity;
        this.lcsClientType = lcsClientType;
        this.lcsClientIdentity = lcsClientIdentity;
        this.servedIMSI = servedIMSI;
        this.servedMSISDN = servedMSISDN;
        this.servingEntity = servingEntity;
        this.resultCode = resultCode;
        this.recordTimeStamp = recordTimeStamp;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
    
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("LCSGNIRecord.recordingEntity violates SIZE constraint");
        }
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("LCSGNIRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("LCSGNIRecord.servedMSISDN violates SIZE constraint");
        }
        if (this.servingEntity !== undefined && (this.servingEntity.length < 1 || this.servingEntity.length > 20)) {
            throw new ASN1SizeError("LCSGNIRecord.servingEntity violates SIZE constraint");
        }
        if (this.resultCode !== undefined && (this.resultCode < 0)) {
            throw new ASN1OverflowError("LCSGNIRecord.resultCode violates INTEGER range");
        }
        if ((this.recordTimeStamp.length !== 9)) {
            throw new ASN1SizeError("LCSGNIRecord.recordTimeStamp violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("LCSGNIRecord.localSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a LCSGNIRecord
     * @description
     * 
     * This takes an `object` and converts it to a `LCSGNIRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LCSGNIRecord`.
     * @returns {LCSGNIRecord}
     */
    public static _from_object (_o: { [_K in keyof (LCSGNIRecord)]: (LCSGNIRecord)[_K] }): LCSGNIRecord {
        return new LCSGNIRecord(_o.recordType, _o.recordingEntity, _o.lcsClientType, _o.lcsClientIdentity, _o.servedIMSI, _o.servedMSISDN, _o.servingEntity, _o.resultCode, _o.recordTimeStamp, _o.localSequenceNumber, _o.recordExtensions);
    }

        /**
         * @summary The enum used as the type of the component `lcsClientType`
         * @public
         * @static
         */

    public static _enum_for_lcsClientType = _enum_for_LCSClientType;
}

/**
 * @summary The Leading Root Component Types of LCSGNIRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LCSGNIRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lcsClientType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("lcsClientIdentity", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("servingEntity", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("resultCode", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("recordTimeStamp", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of LCSGNIRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LCSGNIRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LCSGNIRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LCSGNIRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LCSGNIRecord: $.ASN1Decoder<LCSGNIRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCSGNIRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCSGNIRecord (el: _Element): LCSGNIRecord {
    if (!_cached_decoder_for_LCSGNIRecord) { _cached_decoder_for_LCSGNIRecord = function (el: _Element): LCSGNIRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let recordingEntity!: OCTET_STRING;
    let lcsClientType: OPTIONAL<LCSClientType>;
    let lcsClientIdentity: OPTIONAL<LCSClientIdentity>;
    let servedIMSI!: OCTET_STRING;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let servingEntity: OPTIONAL<OCTET_STRING>;
    let resultCode: OPTIONAL<INTEGER>;
    let recordTimeStamp!: OCTET_STRING;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lcsClientType": (_el: _Element): void => { lcsClientType = $._decode_implicit<LCSClientType>(() => _decode_LCSClientType)(_el); },
        "lcsClientIdentity": (_el: _Element): void => { lcsClientIdentity = $._decode_implicit<LCSClientIdentity>(() => _decode_LCSClientIdentity)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servingEntity": (_el: _Element): void => { servingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "resultCode": (_el: _Element): void => { resultCode = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordTimeStamp": (_el: _Element): void => { recordTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_LCSGNIRecord,
        _extension_additions_list_spec_for_LCSGNIRecord,
        _root_component_type_list_2_spec_for_LCSGNIRecord,
        undefined,
    );
    return new LCSGNIRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        recordingEntity,
        lcsClientType,
        lcsClientIdentity,
        servedIMSI,
        servedMSISDN,
        servingEntity,
        resultCode,
        recordTimeStamp,
        localSequenceNumber,
        recordExtensions
    );
}; }
    return _cached_decoder_for_LCSGNIRecord(el);
}

let _cached_encoder_for_LCSGNIRecord: $.ASN1Encoder<LCSGNIRecord> | null = null;

/**
 * @summary Encodes a(n) LCSGNIRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCSGNIRecord, encoded as an ASN.1 Element.
 */
export
function _encode_LCSGNIRecord (value: LCSGNIRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCSGNIRecord) { _cached_encoder_for_LCSGNIRecord = function (value: LCSGNIRecord, _elGetter: $.ASN1Encoder<LCSGNIRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.lcsClientType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_LCSClientType, $.BER)(value.lcsClientType, $.BER));
    }
    if (value.lcsClientIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_LCSClientIdentity, $.BER)(value.lcsClientIdentity, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    if (value.servingEntity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.servingEntity, $.BER));
    }
    if (value.resultCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.resultCode, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.recordTimeStamp, $.BER));
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_LCSGNIRecord(value, elGetter);
}


/* eslint-enable */
