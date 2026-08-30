/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallReferenceNumber, _decode_CallReferenceNumber, _encode_CallReferenceNumber } from "../MAP-CH-DataTypes/CallReferenceNumber.ta.mjs";
// export { CallReferenceNumber, _decode_CallReferenceNumber, _encode_CallReferenceNumber } from "../MAP-CH-DataTypes/CallReferenceNumber.ta.mjs";
import { Ext_BasicServiceCode, _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";
// export { Ext_BasicServiceCode, _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";
import { ForwardingData, _decode_ForwardingData, _encode_ForwardingData } from "../MAP-CH-DataTypes/ForwardingData.ta.mjs";
// export { ForwardingData, _decode_ForwardingData, _encode_ForwardingData } from "../MAP-CH-DataTypes/ForwardingData.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { CUG_CheckInfo, _decode_CUG_CheckInfo, _encode_CUG_CheckInfo } from "../MAP-CH-DataTypes/CUG-CheckInfo.ta.mjs";
// export { CUG_CheckInfo, _decode_CUG_CheckInfo, _encode_CUG_CheckInfo } from "../MAP-CH-DataTypes/CUG-CheckInfo.ta.mjs";
import { O_CSI, _decode_O_CSI, _encode_O_CSI } from "../MAP-MS-DataTypes/O-CSI.ta.mjs";
// export { O_CSI, _decode_O_CSI, _encode_O_CSI } from "../MAP-MS-DataTypes/O-CSI.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { UU_Data, _decode_UU_Data, _encode_UU_Data } from "../MAP-CH-DataTypes/UU-Data.ta.mjs";
// export { UU_Data, _decode_UU_Data, _encode_UU_Data } from "../MAP-CH-DataTypes/UU-Data.ta.mjs";
import { D_CSI, _decode_D_CSI, _encode_D_CSI } from "../MAP-MS-DataTypes/D-CSI.ta.mjs";
// export { D_CSI, _decode_D_CSI, _encode_D_CSI } from "../MAP-MS-DataTypes/D-CSI.ta.mjs";
import { O_BcsmCamelTDPCriteriaList, _decode_O_BcsmCamelTDPCriteriaList, _encode_O_BcsmCamelTDPCriteriaList } from "../MAP-MS-DataTypes/O-BcsmCamelTDPCriteriaList.ta.mjs";
// export { O_BcsmCamelTDPCriteriaList, _decode_O_BcsmCamelTDPCriteriaList, _encode_O_BcsmCamelTDPCriteriaList } from "../MAP-MS-DataTypes/O-BcsmCamelTDPCriteriaList.ta.mjs";


/**
 * @summary ResumeCallHandlingArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResumeCallHandlingArg ::= SEQUENCE {
 *     callReferenceNumber    [0] CallReferenceNumber    OPTIONAL,
 *     basicServiceGroup    [1] Ext-BasicServiceCode    OPTIONAL,
 *     forwardingData    [2] ForwardingData    OPTIONAL,
 *     imsi    [3] IMSI    OPTIONAL,
 *     cug-CheckInfo    [4] CUG-CheckInfo    OPTIONAL,
 *     o-CSI    [5] O-CSI    OPTIONAL,
 *     extensionContainer    [7] ExtensionContainer    OPTIONAL,
 *     ccbs-Possible    [8]    NULL    OPTIONAL,
 *     msisdn    [9]    ISDN-AddressString    OPTIONAL,
 *     uu-Data    [10] UU-Data    OPTIONAL,
 *     allInformationSent    [11] NULL    OPTIONAL,
 *     ...,
 *     d-csi    [12]    D-CSI    OPTIONAL,
 *     o-BcsmCamelTDPCriteriaList    [13]    O-BcsmCamelTDPCriteriaList    OPTIONAL,
 *     basicServiceGroup2    [14] Ext-BasicServiceCode    OPTIONAL,
 *     mtRoamingRetry    [15] NULL    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class ResumeCallHandlingArg {
    constructor (
        /**
         * @summary `callReferenceNumber`.
         * @public
         * @readonly
         */
        readonly callReferenceNumber: OPTIONAL<CallReferenceNumber>,
        /**
         * @summary `basicServiceGroup`.
         * @public
         * @readonly
         */
        readonly basicServiceGroup: OPTIONAL<Ext_BasicServiceCode>,
        /**
         * @summary `forwardingData`.
         * @public
         * @readonly
         */
        readonly forwardingData: OPTIONAL<ForwardingData>,
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<IMSI>,
        /**
         * @summary `cug_CheckInfo`.
         * @public
         * @readonly
         */
        readonly cug_CheckInfo: OPTIONAL<CUG_CheckInfo>,
        /**
         * @summary `o_CSI`.
         * @public
         * @readonly
         */
        readonly o_CSI: OPTIONAL<O_CSI>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `ccbs_Possible`.
         * @public
         * @readonly
         */
        readonly ccbs_Possible: OPTIONAL<NULL>,
        /**
         * @summary `msisdn`.
         * @public
         * @readonly
         */
        readonly msisdn: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `uu_Data`.
         * @public
         * @readonly
         */
        readonly uu_Data: OPTIONAL<UU_Data>,
        /**
         * @summary `allInformationSent`.
         * @public
         * @readonly
         */
        readonly allInformationSent: OPTIONAL<NULL>,
        /**
         * @summary `d_csi`.
         * @public
         * @readonly
         */
        readonly d_csi: OPTIONAL<D_CSI>,
        /**
         * @summary `o_BcsmCamelTDPCriteriaList`.
         * @public
         * @readonly
         */
        readonly o_BcsmCamelTDPCriteriaList: OPTIONAL<O_BcsmCamelTDPCriteriaList>,
        /**
         * @summary `basicServiceGroup2`.
         * @public
         * @readonly
         */
        readonly basicServiceGroup2: OPTIONAL<Ext_BasicServiceCode>,
        /**
         * @summary `mtRoamingRetry`.
         * @public
         * @readonly
         */
        readonly mtRoamingRetry: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ResumeCallHandlingArg
     * @description
     * 
     * This takes an `object` and converts it to a `ResumeCallHandlingArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResumeCallHandlingArg`.
     * @returns {ResumeCallHandlingArg}
     */
    public static _from_object (_o: { [_K in keyof (ResumeCallHandlingArg)]: (ResumeCallHandlingArg)[_K] }): ResumeCallHandlingArg {
        return new ResumeCallHandlingArg(_o.callReferenceNumber, _o.basicServiceGroup, _o.forwardingData, _o.imsi, _o.cug_CheckInfo, _o.o_CSI, _o.extensionContainer, _o.ccbs_Possible, _o.msisdn, _o.uu_Data, _o.allInformationSent, _o.d_csi, _o.o_BcsmCamelTDPCriteriaList, _o.basicServiceGroup2, _o.mtRoamingRetry, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ResumeCallHandlingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResumeCallHandlingArg: $.ComponentSpec[] = [
    new $.ComponentSpec("callReferenceNumber", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("basicServiceGroup", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("forwardingData", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("cug-CheckInfo", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("o-CSI", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("ccbs-Possible", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("msisdn", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("uu-Data", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("allInformationSent", true, $.hasTag(_TagClass.context, 11), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ResumeCallHandlingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResumeCallHandlingArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResumeCallHandlingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResumeCallHandlingArg: $.ComponentSpec[] = [
    new $.ComponentSpec("d-csi", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("o-BcsmCamelTDPCriteriaList", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("basicServiceGroup2", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("mtRoamingRetry", true, $.hasTag(_TagClass.context, 15), undefined, undefined)
];

let _cached_decoder_for_ResumeCallHandlingArg: $.ASN1Decoder<ResumeCallHandlingArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResumeCallHandlingArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResumeCallHandlingArg (el: _Element): ResumeCallHandlingArg {
    if (!_cached_decoder_for_ResumeCallHandlingArg) { _cached_decoder_for_ResumeCallHandlingArg = function (el: _Element): ResumeCallHandlingArg {
    let callReferenceNumber: OPTIONAL<CallReferenceNumber>;
    let basicServiceGroup: OPTIONAL<Ext_BasicServiceCode>;
    let forwardingData: OPTIONAL<ForwardingData>;
    let imsi: OPTIONAL<IMSI>;
    let cug_CheckInfo: OPTIONAL<CUG_CheckInfo>;
    let o_CSI: OPTIONAL<O_CSI>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let ccbs_Possible: OPTIONAL<NULL>;
    let msisdn: OPTIONAL<ISDN_AddressString>;
    let uu_Data: OPTIONAL<UU_Data>;
    let allInformationSent: OPTIONAL<NULL>;
    let d_csi: OPTIONAL<D_CSI>;
    let o_BcsmCamelTDPCriteriaList: OPTIONAL<O_BcsmCamelTDPCriteriaList>;
    let basicServiceGroup2: OPTIONAL<Ext_BasicServiceCode>;
    let mtRoamingRetry: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "callReferenceNumber": (_el: _Element): void => { callReferenceNumber = $._decode_implicit<CallReferenceNumber>(() => _decode_CallReferenceNumber)(_el); },
        "basicServiceGroup": (_el: _Element): void => { basicServiceGroup = $._decode_explicit<Ext_BasicServiceCode>(() => _decode_Ext_BasicServiceCode)(_el); },
        "forwardingData": (_el: _Element): void => { forwardingData = $._decode_implicit<ForwardingData>(() => _decode_ForwardingData)(_el); },
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "cug-CheckInfo": (_el: _Element): void => { cug_CheckInfo = $._decode_implicit<CUG_CheckInfo>(() => _decode_CUG_CheckInfo)(_el); },
        "o-CSI": (_el: _Element): void => { o_CSI = $._decode_implicit<O_CSI>(() => _decode_O_CSI)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "ccbs-Possible": (_el: _Element): void => { ccbs_Possible = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "msisdn": (_el: _Element): void => { msisdn = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "uu-Data": (_el: _Element): void => { uu_Data = $._decode_implicit<UU_Data>(() => _decode_UU_Data)(_el); },
        "allInformationSent": (_el: _Element): void => { allInformationSent = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "d-csi": (_el: _Element): void => { d_csi = $._decode_implicit<D_CSI>(() => _decode_D_CSI)(_el); },
        "o-BcsmCamelTDPCriteriaList": (_el: _Element): void => { o_BcsmCamelTDPCriteriaList = $._decode_implicit<O_BcsmCamelTDPCriteriaList>(() => _decode_O_BcsmCamelTDPCriteriaList)(_el); },
        "basicServiceGroup2": (_el: _Element): void => { basicServiceGroup2 = $._decode_explicit<Ext_BasicServiceCode>(() => _decode_Ext_BasicServiceCode)(_el); },
        "mtRoamingRetry": (_el: _Element): void => { mtRoamingRetry = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResumeCallHandlingArg,
        _extension_additions_list_spec_for_ResumeCallHandlingArg,
        _root_component_type_list_2_spec_for_ResumeCallHandlingArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ResumeCallHandlingArg(
        callReferenceNumber,
        basicServiceGroup,
        forwardingData,
        imsi,
        cug_CheckInfo,
        o_CSI,
        extensionContainer,
        ccbs_Possible,
        msisdn,
        uu_Data,
        allInformationSent,
        d_csi,
        o_BcsmCamelTDPCriteriaList,
        basicServiceGroup2,
        mtRoamingRetry,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ResumeCallHandlingArg(el);
}

let _cached_encoder_for_ResumeCallHandlingArg: $.ASN1Encoder<ResumeCallHandlingArg> | null = null;

/**
 * @summary Encodes a(n) ResumeCallHandlingArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResumeCallHandlingArg, encoded as an ASN.1 Element.
 */
export
function _encode_ResumeCallHandlingArg (value: ResumeCallHandlingArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResumeCallHandlingArg) { _cached_encoder_for_ResumeCallHandlingArg = function (value: ResumeCallHandlingArg, elGetter: $.ASN1Encoder<ResumeCallHandlingArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.callReferenceNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CallReferenceNumber, $.BER)(value.callReferenceNumber, $.BER)),
            /* IF_ABSENT  */ ((value.basicServiceGroup === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_Ext_BasicServiceCode, $.BER)(value.basicServiceGroup, $.BER)),
            /* IF_ABSENT  */ ((value.forwardingData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ForwardingData, $.BER)(value.forwardingData, $.BER)),
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_IMSI, $.BER)(value.imsi, $.BER)),
            /* IF_ABSENT  */ ((value.cug_CheckInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CUG_CheckInfo, $.BER)(value.cug_CheckInfo, $.BER)),
            /* IF_ABSENT  */ ((value.o_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_O_CSI, $.BER)(value.o_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER)),
            /* IF_ABSENT  */ ((value.ccbs_Possible === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER)(value.ccbs_Possible, $.BER)),
            /* IF_ABSENT  */ ((value.msisdn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_ISDN_AddressString, $.BER)(value.msisdn, $.BER)),
            /* IF_ABSENT  */ ((value.uu_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_UU_Data, $.BER)(value.uu_Data, $.BER)),
            /* IF_ABSENT  */ ((value.allInformationSent === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER)(value.allInformationSent, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.d_csi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_D_CSI, $.BER)(value.d_csi, $.BER)),
            /* IF_ABSENT  */ ((value.o_BcsmCamelTDPCriteriaList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_O_BcsmCamelTDPCriteriaList, $.BER)(value.o_BcsmCamelTDPCriteriaList, $.BER)),
            /* IF_ABSENT  */ ((value.basicServiceGroup2 === undefined) ? undefined : $._encode_explicit(_TagClass.context, 14, () => _encode_Ext_BasicServiceCode, $.BER)(value.basicServiceGroup2, $.BER)),
            /* IF_ABSENT  */ ((value.mtRoamingRetry === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => $._encodeNull, $.BER)(value.mtRoamingRetry, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ResumeCallHandlingArg(value, elGetter);
}


/* eslint-enable */
