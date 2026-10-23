/* eslint-disable */
import {
    BOOLEAN,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MBMSInformation_mBMSServiceType, _decode_MBMSInformation_mBMSServiceType, _encode_MBMSInformation_mBMSServiceType, _enum_for_MBMSInformation_mBMSServiceType } from "../MBMSChargingDataTypes/MBMSInformation-mBMSServiceType.ta.mjs";
import { MBMSInformation_mBMSUserServiceType, _decode_MBMSInformation_mBMSUserServiceType, _encode_MBMSInformation_mBMSUserServiceType, _enum_for_MBMSInformation_mBMSUserServiceType } from "../MBMSChargingDataTypes/MBMSInformation-mBMSUserServiceType.ta.mjs";
import { MBMSInformation_mBMS2G3GIndicator, _decode_MBMSInformation_mBMS2G3GIndicator, _encode_MBMSInformation_mBMS2G3GIndicator, _enum_for_MBMSInformation_mBMS2G3GIndicator } from "../MBMSChargingDataTypes/MBMSInformation-mBMS2G3GIndicator.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../MBMSChargingDataTypes/IPAddress.ta.mjs";
import { MBMSInformation_cNIPMulticastDistribution, _decode_MBMSInformation_cNIPMulticastDistribution, _encode_MBMSInformation_cNIPMulticastDistribution, _enum_for_MBMSInformation_cNIPMulticastDistribution } from "../MBMSChargingDataTypes/MBMSInformation-cNIPMulticastDistribution.ta.mjs";


/**
 * @summary MBMSInformation
 * @description
 *
 * MBMS-specific charging parameters carried in Service Information.
 * The same information is category OM on the S-BMSC-CDR, the
 * C-BMSC-CDR, and the online Debit / Reserve Units request. This
 * ASN.1 is the CDR encoding. Charging-event parameters are
 * specified in TS 32.299.
 *
 * Table 6.3.1.2.1 also lists MBMS Access Indicator, MBMS Charged
 * Party, and Recipient Address. Access Indicator is not a component
 * of this SET; a change of access indicator closes a partial
 * C-BMSC-CDR (clause 5.2.3.2.3). Charged Party is bound to the CDR
 * record type (table 6.4.1). Recipient Address is
 * `recipientAddressList` on `CONTENTBMSCRecord`.
 *
 * Field categories follow TS 32.240 clause 5.4.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 6.2.1.2.1, 6.3.1, and 6.3.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSInformation ::= SET {
 *    tMGI                        [1] IMPLICIT OCTET STRING OPTIONAL,
 *    mBMSSessionIdentity         [2] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    mBMSServiceType             [3] IMPLICIT ENUMERATED {
 *       mULTICAST    ( 0 ),
 *       bROADCAST    ( 1 ) } OPTIONAL,
 *    mBMSUserServiceType         [4] IMPLICIT ENUMERATED {
 *       dOWNLOAD     ( 0 ),
 *       sTREAMING    ( 1 ) } OPTIONAL,
 *    mBMS2G3GIndicator           [5] IMPLICIT ENUMERATED {
 *       twoG               ( 0 ),
 *       threeG             ( 1 ),
 *       twoG-AND-threeG    ( 2 ) } OPTIONAL,
 *    fileRepairSupported         [6] IMPLICIT BOOLEAN OPTIONAL,
 *    rAI                         [7] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    mBMSServiceArea             [8] IMPLICIT OCTET STRING OPTIONAL,
 *    requiredMBMSBearerCaps      [9] IMPLICIT OCTET STRING ( SIZE( 3 .. 14 ) ) OPTIONAL,
 *    mBMSGWAddress               [10] IPAddress OPTIONAL,
 *    cNIPMulticastDistribution   [11] IMPLICIT ENUMERATED {
 *       nO-IP-MULTICAST    ( 0 ),
 *       iP-MULTICAST       ( 1 ) } OPTIONAL,
 *    mBMSDataTransferStart       [12] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    mBMSDataTransferStop        [13] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MBMSInformation {
    /**
     * @summary `tMGI`.
     * @description
     *
     * Temporary Mobile Group Identifier. Category OM. Used as
     * defined in TS 29.061.
     *
     * 3GPP TS 32.273 V19.0.0 clause 3.3 and table 6.3.1.2.1.
     *
     * @public
     * @readonly
     */
    readonly tMGI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mBMSSessionIdentity`.
     * @description
     *
     * With `tMGI`, identifies one transmission of a specific MBMS
     * session. Category OC. Used as defined in TS 29.061.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.3.1.2.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.4.6.
     *
     * @public
     * @readonly
     */
    readonly mBMSSessionIdentity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mBMSServiceType`.
     * @description
     *
     * Bearer service type: multicast or broadcast. Category OM. Used
     * as defined in TS 29.061.
     *
     * For GPRS, user-service content is charged to the receiving
     * subscriber for either type. Bearer transport for broadcast is
     * charged to the content provider. For multicast it is charged
     * to the content provider and/or the receiving subscriber.
     * Session duration and session volume apply to both types.
     * Duration and volume while a subscriber is registered apply
     * to multicast.
     *
     * For EPS, tables 5.1.1A.1 and 5.1.1A.2 cover broadcast and
     * enhanced broadcast. Transport is charged to the content
     * provider. The measurements are session duration, session
     * volume, and data-transfer time. This enumeration contains
     * multicast and broadcast. TS 32.273 does not say how enhanced
     * broadcast is encoded in it.
     *
     * 3GPP TS 32.273 V19.0.0 tables 5.1.1.1, 5.1.1.2, 5.1.1A.1,
     * 5.1.1A.2, and 6.3.1.2.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.4.5.
     *
     * @public
     * @readonly
     */
    readonly mBMSServiceType: OPTIONAL<MBMSInformation_mBMSServiceType>;
    /**
     * @summary `mBMSUserServiceType`.
     * @description
     *
     * Type of MBMS user service being delivered. Category OC.
     * Available only in the BM-SC. Clause 5.1.1 also names carousel
     * service, which is out of scope of this release; this
     * enumeration has download and streaming only.
     *
     * Online credit-control depends on this type, the bearer type,
     * and whether delivery notification is required (table 5.3.1).
     * Streaming over multicast uses session charging with unit
     * reservation (SCUR). The other streaming and download rows are
     * operator configurable among immediate event charging (IEC),
     * SCUR, and event charging with unit reservation (ECUR).
     *
     * 3GPP TS 32.273 V19.0.0 clause 5.1.1, table 5.3.1, and
     * table 6.3.1.2.1.
     *
     * @public
     * @readonly
     */
    readonly mBMSUserServiceType: OPTIONAL<MBMSInformation_mBMSUserServiceType>;
    /**
     * @summary `mBMS2G3GIndicator`.
     * @description
     *
     * Category OC. Used as defined in TS 29.061. TS 32.273 does not
     * define the enumerated values.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.3.1.2.1.
     *
     * @public
     * @readonly
     */
    readonly mBMS2G3GIndicator: OPTIONAL<MBMSInformation_mBMS2G3GIndicator>;
    /**
     * @summary `fileRepairSupported`.
     * @description
     *
     * Whether the MBMS user service supports point-to-point file
     * repair. Category OC. Available only in the BM-SC.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.3.1.2.1.
     *
     * @public
     * @readonly
     */
    readonly fileRepairSupported: OPTIONAL<BOOLEAN>;
    /**
     * @summary `rAI`.
     * @description
     *
     * Category OC. Used as defined in TS 29.061. Available only in
     * the BM-SC. TS 32.273 does not define the encoding.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.3.1.2.1.
     *
     * @public
     * @readonly
     */
    readonly rAI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mBMSServiceArea`.
     * @description
     *
     * Area over which the MBMS bearer service has to be distributed.
     * Category OC. Used as defined in TS 29.061. Bearer charging may
     * be based on the service area. A change of MBMS service area
     * closes a partial C-BMSC-CDR; that trigger has no named
     * cause-for-closing value.
     *
     * 3GPP TS 32.273 V19.0.0 clauses 5.1.1 and 5.2.3.2.3, and
     * table 6.3.1.2.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.4.4.
     *
     * @public
     * @readonly
     */
    readonly mBMSServiceArea: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `requiredMBMSBearerCaps`.
     * @description
     *
     * Category OC. Used as defined in TS 29.061. TS 32.273 does not
     * define the contents.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.3.1.2.1.
     *
     * @public
     * @readonly
     */
    readonly requiredMBMSBearerCaps: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mBMSGWAddress`.
     * @description
     *
     * IP address of the MBMS GW that generated the Charging Id, when
     * the MBMS GW is stand-alone. Category OC.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.3.1.2.1.
     *
     * @public
     * @readonly
     */
    readonly mBMSGWAddress: OPTIONAL<IPAddress>;
    /**
     * @summary `cNIPMulticastDistribution`.
     * @description
     *
     * Category OC. Used as defined in TS 29.061. TS 32.273 does not
     * define the enumerated values.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.3.1.2.1.
     *
     * @public
     * @readonly
     */
    readonly cNIPMulticastDistribution: OPTIONAL<MBMSInformation_cNIPMulticastDistribution>;
    /**
     * @summary `mBMSDataTransferStart`.
     * @description
     *
     * Absolute time stamp of the start of data delivery. Category OC.
     * For EPS, bearer charging may use the interval from this time to
     * `mBMSDataTransferStop`. That measurement applies to broadcast
     * and to enhanced broadcast.
     *
     * The value is seconds, relative to 00:00:00 on 1 January 1900
     * (continuous time, without leap seconds, from a common time
     * reference), at which radio resources were set up. The first 32
     * bits are the integer part. The last 32 bits are the fraction,
     * in units of 1/2^32 second. Valid only for E-UTRAN.
     *
     * 3GPP TS 32.273 V19.0.0 clause 5.1.1A, table 5.1.1A.2, and
     * table 6.3.1.2.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.4.2A.
     *
     * @public
     * @readonly
     */
    readonly mBMSDataTransferStart: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mBMSDataTransferStop`.
     * @description
     *
     * Absolute time stamp of the end of data delivery. Category OC.
     * For EPS, bearer charging may use the interval from
     * `mBMSDataTransferStart` to this time. That measurement applies
     * to broadcast and to enhanced broadcast.
     *
     * The value is seconds, relative to 00:00:00 on 1 January 1900
     * (continuous time, without leap seconds, from a common time
     * reference), at which radio resources were released. The first
     * 32 bits are the integer part. The last 32 bits are the
     * fraction, in units of 1/2^32 second. Valid only for E-UTRAN.
     *
     * 3GPP TS 32.273 V19.0.0 clause 5.1.1A, table 5.1.1A.2, and
     * table 6.3.1.2.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.4.2B.
     *
     * @public
     * @readonly
     */
    readonly mBMSDataTransferStop: OPTIONAL<OCTET_STRING>;

    constructor (
        tMGI?: OPTIONAL<OCTET_STRING>,
        mBMSSessionIdentity?: OPTIONAL<OCTET_STRING>,
        mBMSServiceType?: OPTIONAL<MBMSInformation_mBMSServiceType>,
        mBMSUserServiceType?: OPTIONAL<MBMSInformation_mBMSUserServiceType>,
        mBMS2G3GIndicator?: OPTIONAL<MBMSInformation_mBMS2G3GIndicator>,
        fileRepairSupported?: OPTIONAL<BOOLEAN>,
        rAI?: OPTIONAL<OCTET_STRING>,
        mBMSServiceArea?: OPTIONAL<OCTET_STRING>,
        requiredMBMSBearerCaps?: OPTIONAL<OCTET_STRING>,
        mBMSGWAddress?: OPTIONAL<IPAddress>,
        cNIPMulticastDistribution?: OPTIONAL<MBMSInformation_cNIPMulticastDistribution>,
        mBMSDataTransferStart?: OPTIONAL<OCTET_STRING>,
        mBMSDataTransferStop?: OPTIONAL<OCTET_STRING>
    ) {
        this.tMGI = tMGI;
        this.mBMSSessionIdentity = mBMSSessionIdentity;
        this.mBMSServiceType = mBMSServiceType;
        this.mBMSUserServiceType = mBMSUserServiceType;
        this.mBMS2G3GIndicator = mBMS2G3GIndicator;
        this.fileRepairSupported = fileRepairSupported;
        this.rAI = rAI;
        this.mBMSServiceArea = mBMSServiceArea;
        this.requiredMBMSBearerCaps = requiredMBMSBearerCaps;
        this.mBMSGWAddress = mBMSGWAddress;
        this.cNIPMulticastDistribution = cNIPMulticastDistribution;
        this.mBMSDataTransferStart = mBMSDataTransferStart;
        this.mBMSDataTransferStop = mBMSDataTransferStop;
    
        if (this.mBMSSessionIdentity !== undefined && (this.mBMSSessionIdentity.length !== 1)) {
            throw new ASN1SizeError("MBMSInformation.mBMSSessionIdentity violates SIZE constraint");
        }
        if (this.rAI !== undefined && (this.rAI.length !== 1)) {
            throw new ASN1SizeError("MBMSInformation.rAI violates SIZE constraint");
        }
        if (this.requiredMBMSBearerCaps !== undefined && (this.requiredMBMSBearerCaps.length < 3 || this.requiredMBMSBearerCaps.length > 14)) {
            throw new ASN1SizeError("MBMSInformation.requiredMBMSBearerCaps violates SIZE constraint");
        }
        if (this.mBMSDataTransferStart !== undefined && (this.mBMSDataTransferStart.length !== 8)) {
            throw new ASN1SizeError("MBMSInformation.mBMSDataTransferStart violates SIZE constraint");
        }
        if (this.mBMSDataTransferStop !== undefined && (this.mBMSDataTransferStop.length !== 8)) {
            throw new ASN1SizeError("MBMSInformation.mBMSDataTransferStop violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MBMSInformation
     * @description
     * 
     * This takes an `object` and converts it to a `MBMSInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MBMSInformation`.
     * @returns {MBMSInformation}
     */
    public static _from_object (_o: { [_K in keyof (MBMSInformation)]: (MBMSInformation)[_K] }): MBMSInformation {
        return new MBMSInformation(_o.tMGI, _o.mBMSSessionIdentity, _o.mBMSServiceType, _o.mBMSUserServiceType, _o.mBMS2G3GIndicator, _o.fileRepairSupported, _o.rAI, _o.mBMSServiceArea, _o.requiredMBMSBearerCaps, _o.mBMSGWAddress, _o.cNIPMulticastDistribution, _o.mBMSDataTransferStart, _o.mBMSDataTransferStop);
    }

        /**
         * @summary The enum used as the type of the component `mBMSServiceType`
         * @public
         * @static
         */

    public static _enum_for_mBMSServiceType = _enum_for_MBMSInformation_mBMSServiceType;        /**
         * @summary The enum used as the type of the component `mBMSUserServiceType`
         * @public
         * @static
         */

    public static _enum_for_mBMSUserServiceType = _enum_for_MBMSInformation_mBMSUserServiceType;        /**
         * @summary The enum used as the type of the component `mBMS2G3GIndicator`
         * @public
         * @static
         */

    public static _enum_for_mBMS2G3GIndicator = _enum_for_MBMSInformation_mBMS2G3GIndicator;        /**
         * @summary The enum used as the type of the component `cNIPMulticastDistribution`
         * @public
         * @static
         */

    public static _enum_for_cNIPMulticastDistribution = _enum_for_MBMSInformation_cNIPMulticastDistribution;
}

/**
 * @summary The Leading Root Component Types of MBMSInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MBMSInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("tMGI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mBMSSessionIdentity", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mBMSServiceType", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mBMSUserServiceType", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mBMS2G3GIndicator", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("fileRepairSupported", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("rAI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("mBMSServiceArea", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("requiredMBMSBearerCaps", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("mBMSGWAddress", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("cNIPMulticastDistribution", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("mBMSDataTransferStart", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("mBMSDataTransferStop", true, $.hasTag(_TagClass.context, 13))
];

/**
 * @summary The Trailing Root Component Types of MBMSInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MBMSInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MBMSInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MBMSInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MBMSInformation: $.ASN1Decoder<MBMSInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MBMSInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MBMSInformation (el: _Element): MBMSInformation {
    if (!_cached_decoder_for_MBMSInformation) { _cached_decoder_for_MBMSInformation = function (el: _Element): MBMSInformation {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let tMGI: OPTIONAL<OCTET_STRING>;
    let mBMSSessionIdentity: OPTIONAL<OCTET_STRING>;
    let mBMSServiceType: OPTIONAL<MBMSInformation_mBMSServiceType>;
    let mBMSUserServiceType: OPTIONAL<MBMSInformation_mBMSUserServiceType>;
    let mBMS2G3GIndicator: OPTIONAL<MBMSInformation_mBMS2G3GIndicator>;
    let fileRepairSupported: OPTIONAL<BOOLEAN>;
    let rAI: OPTIONAL<OCTET_STRING>;
    let mBMSServiceArea: OPTIONAL<OCTET_STRING>;
    let requiredMBMSBearerCaps: OPTIONAL<OCTET_STRING>;
    let mBMSGWAddress: OPTIONAL<IPAddress>;
    let cNIPMulticastDistribution: OPTIONAL<MBMSInformation_cNIPMulticastDistribution>;
    let mBMSDataTransferStart: OPTIONAL<OCTET_STRING>;
    let mBMSDataTransferStop: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "tMGI": (_el: _Element): void => { tMGI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mBMSSessionIdentity": (_el: _Element): void => { mBMSSessionIdentity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mBMSServiceType": (_el: _Element): void => { mBMSServiceType = $._decode_implicit<MBMSInformation_mBMSServiceType>(() => _decode_MBMSInformation_mBMSServiceType)(_el); },
        "mBMSUserServiceType": (_el: _Element): void => { mBMSUserServiceType = $._decode_implicit<MBMSInformation_mBMSUserServiceType>(() => _decode_MBMSInformation_mBMSUserServiceType)(_el); },
        "mBMS2G3GIndicator": (_el: _Element): void => { mBMS2G3GIndicator = $._decode_implicit<MBMSInformation_mBMS2G3GIndicator>(() => _decode_MBMSInformation_mBMS2G3GIndicator)(_el); },
        "fileRepairSupported": (_el: _Element): void => { fileRepairSupported = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "rAI": (_el: _Element): void => { rAI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mBMSServiceArea": (_el: _Element): void => { mBMSServiceArea = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "requiredMBMSBearerCaps": (_el: _Element): void => { requiredMBMSBearerCaps = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mBMSGWAddress": (_el: _Element): void => { mBMSGWAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "cNIPMulticastDistribution": (_el: _Element): void => { cNIPMulticastDistribution = $._decode_implicit<MBMSInformation_cNIPMulticastDistribution>(() => _decode_MBMSInformation_cNIPMulticastDistribution)(_el); },
        "mBMSDataTransferStart": (_el: _Element): void => { mBMSDataTransferStart = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mBMSDataTransferStop": (_el: _Element): void => { mBMSDataTransferStop = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MBMSInformation,
        _extension_additions_list_spec_for_MBMSInformation,
        _root_component_type_list_2_spec_for_MBMSInformation,
        undefined,
    );
    return new MBMSInformation( /* SET_CONSTRUCTOR_CALL */
        tMGI,
        mBMSSessionIdentity,
        mBMSServiceType,
        mBMSUserServiceType,
        mBMS2G3GIndicator,
        fileRepairSupported,
        rAI,
        mBMSServiceArea,
        requiredMBMSBearerCaps,
        mBMSGWAddress,
        cNIPMulticastDistribution,
        mBMSDataTransferStart,
        mBMSDataTransferStop
    );
}; }
    return _cached_decoder_for_MBMSInformation(el);
}

let _cached_encoder_for_MBMSInformation: $.ASN1Encoder<MBMSInformation> | null = null;

/**
 * @summary Encodes a(n) MBMSInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MBMSInformation, encoded as an ASN.1 Element.
 */
export
function _encode_MBMSInformation (value: MBMSInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MBMSInformation) { _cached_encoder_for_MBMSInformation = function (value: MBMSInformation, _elGetter: $.ASN1Encoder<MBMSInformation>): _Element {
    const _components: _Element[] = [];
    if (value.tMGI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.tMGI, $.BER));
    }
    if (value.mBMSSessionIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.mBMSSessionIdentity, $.BER));
    }
    if (value.mBMSServiceType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_MBMSInformation_mBMSServiceType, $.BER)(value.mBMSServiceType, $.BER));
    }
    if (value.mBMSUserServiceType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_MBMSInformation_mBMSUserServiceType, $.BER)(value.mBMSUserServiceType, $.BER));
    }
    if (value.mBMS2G3GIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_MBMSInformation_mBMS2G3GIndicator, $.BER)(value.mBMS2G3GIndicator, $.BER));
    }
    if (value.fileRepairSupported !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.fileRepairSupported, $.BER));
    }
    if (value.rAI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.rAI, $.BER));
    }
    if (value.mBMSServiceArea !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.mBMSServiceArea, $.BER));
    }
    if (value.requiredMBMSBearerCaps !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.requiredMBMSBearerCaps, $.BER));
    }
    if (value.mBMSGWAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_IPAddress, $.BER)(value.mBMSGWAddress, $.BER));
    }
    if (value.cNIPMulticastDistribution !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_MBMSInformation_cNIPMulticastDistribution, $.BER)(value.cNIPMulticastDistribution, $.BER));
    }
    if (value.mBMSDataTransferStart !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.mBMSDataTransferStart, $.BER));
    }
    if (value.mBMSDataTransferStop !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.mBMSDataTransferStop, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MBMSInformation(value, elGetter);
}


/* eslint-enable */
