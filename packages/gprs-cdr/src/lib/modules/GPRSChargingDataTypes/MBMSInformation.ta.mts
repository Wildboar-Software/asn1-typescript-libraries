/* eslint-disable */
import {
    type BOOLEAN,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MBMSInformation_mBMSServiceType, _decode_MBMSInformation_mBMSServiceType, _encode_MBMSInformation_mBMSServiceType, _enum_for_MBMSInformation_mBMSServiceType } from "../GPRSChargingDataTypes/MBMSInformation-mBMSServiceType.ta.mjs";
import { type MBMSInformation_mBMSUserServiceType, _decode_MBMSInformation_mBMSUserServiceType, _encode_MBMSInformation_mBMSUserServiceType, _enum_for_MBMSInformation_mBMSUserServiceType } from "../GPRSChargingDataTypes/MBMSInformation-mBMSUserServiceType.ta.mjs";
import { type MBMSInformation_mBMS2G3GIndicator, _decode_MBMSInformation_mBMS2G3GIndicator, _encode_MBMSInformation_mBMS2G3GIndicator, _enum_for_MBMSInformation_mBMS2G3GIndicator } from "../GPRSChargingDataTypes/MBMSInformation-mBMS2G3GIndicator.ta.mjs";
import { type GSNAddress, _decode_GSNAddress, _encode_GSNAddress } from "../GPRSChargingDataTypes/GSNAddress.ta.mjs";
import { type MBMSInformation_cNIPMulticastDistribution, _decode_MBMSInformation_cNIPMulticastDistribution, _encode_MBMSInformation_cNIPMulticastDistribution, _enum_for_MBMSInformation_cNIPMulticastDistribution } from "../GPRSChargingDataTypes/MBMSInformation-cNIPMulticastDistribution.ta.mjs";


/**
 * @summary MBMSInformation
 * @description
 * 
 * MBMS bearer information for the bearer context being charged (tables
 * 6.1.10.1, 6.1.11.1, and 6.1.12.1). TS 32.251 states that the contents
 * are defined in TS 32.273 and does not reproduce them.
 * 
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
 *    mBMSGWAddress               [10] GSNAddress OPTIONAL,
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
     * @public
     * @readonly
     */
    readonly tMGI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mBMSSessionIdentity`.
     * @public
     * @readonly
     */
    readonly mBMSSessionIdentity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mBMSServiceType`.
     * @public
     * @readonly
     */
    readonly mBMSServiceType: OPTIONAL<MBMSInformation_mBMSServiceType>;
    /**
     * @summary `mBMSUserServiceType`.
     * @public
     * @readonly
     */
    readonly mBMSUserServiceType: OPTIONAL<MBMSInformation_mBMSUserServiceType>;
    /**
     * @summary `mBMS2G3GIndicator`.
     * @public
     * @readonly
     */
    readonly mBMS2G3GIndicator: OPTIONAL<MBMSInformation_mBMS2G3GIndicator>;
    /**
     * @summary `fileRepairSupported`.
     * @public
     * @readonly
     */
    readonly fileRepairSupported: OPTIONAL<BOOLEAN>;
    /**
     * @summary `rAI`.
     * @public
     * @readonly
     */
    readonly rAI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mBMSServiceArea`.
     * @public
     * @readonly
     */
    readonly mBMSServiceArea: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `requiredMBMSBearerCaps`.
     * @public
     * @readonly
     */
    readonly requiredMBMSBearerCaps: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mBMSGWAddress`.
     * @public
     * @readonly
     */
    readonly mBMSGWAddress: OPTIONAL<GSNAddress>;
    /**
     * @summary `cNIPMulticastDistribution`.
     * @public
     * @readonly
     */
    readonly cNIPMulticastDistribution: OPTIONAL<MBMSInformation_cNIPMulticastDistribution>;
    /**
     * @summary `mBMSDataTransferStart`.
     * @public
     * @readonly
     */
    readonly mBMSDataTransferStart: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mBMSDataTransferStop`.
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
        mBMSGWAddress?: OPTIONAL<GSNAddress>,
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
    let mBMSGWAddress: OPTIONAL<GSNAddress>;
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
        "mBMSGWAddress": (_el: _Element): void => { mBMSGWAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
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
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_GSNAddress, $.BER)(value.mBMSGWAddress, $.BER));
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
