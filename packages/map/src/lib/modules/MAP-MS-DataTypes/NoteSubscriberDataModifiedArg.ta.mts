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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { Ext_ForwardingInfoFor_CSE, _decode_Ext_ForwardingInfoFor_CSE, _encode_Ext_ForwardingInfoFor_CSE } from "../MAP-MS-DataTypes/Ext-ForwardingInfoFor-CSE.ta.mjs";
// export { Ext_ForwardingInfoFor_CSE, _decode_Ext_ForwardingInfoFor_CSE, _encode_Ext_ForwardingInfoFor_CSE } from "../MAP-MS-DataTypes/Ext-ForwardingInfoFor-CSE.ta.mjs";
import { Ext_CallBarringInfoFor_CSE, _decode_Ext_CallBarringInfoFor_CSE, _encode_Ext_CallBarringInfoFor_CSE } from "../MAP-MS-DataTypes/Ext-CallBarringInfoFor-CSE.ta.mjs";
// export { Ext_CallBarringInfoFor_CSE, _decode_Ext_CallBarringInfoFor_CSE, _encode_Ext_CallBarringInfoFor_CSE } from "../MAP-MS-DataTypes/Ext-CallBarringInfoFor-CSE.ta.mjs";
import { ODB_Info, _decode_ODB_Info, _encode_ODB_Info } from "../MAP-MS-DataTypes/ODB-Info.ta.mjs";
// export { ODB_Info, _decode_ODB_Info, _encode_ODB_Info } from "../MAP-MS-DataTypes/ODB-Info.ta.mjs";
import { CAMEL_SubscriptionInfo, _decode_CAMEL_SubscriptionInfo, _encode_CAMEL_SubscriptionInfo } from "../MAP-MS-DataTypes/CAMEL-SubscriptionInfo.ta.mjs";
// export { CAMEL_SubscriptionInfo, _decode_CAMEL_SubscriptionInfo, _encode_CAMEL_SubscriptionInfo } from "../MAP-MS-DataTypes/CAMEL-SubscriptionInfo.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { ServingNode, ServingNode_mme /* IMPORTED_LONG_NAMED_BIT */, mme /* IMPORTED_SHORT_NAMED_BIT */, ServingNode_sgsn /* IMPORTED_LONG_NAMED_BIT */, sgsn /* IMPORTED_SHORT_NAMED_BIT */, _decode_ServingNode, _encode_ServingNode } from "../MAP-MS-DataTypes/ServingNode.ta.mjs";
// export { ServingNode, ServingNode_mme /* IMPORTED_LONG_NAMED_BIT */, mme /* IMPORTED_SHORT_NAMED_BIT */, ServingNode_sgsn /* IMPORTED_LONG_NAMED_BIT */, sgsn /* IMPORTED_SHORT_NAMED_BIT */, _decode_ServingNode, _encode_ServingNode } from "../MAP-MS-DataTypes/ServingNode.ta.mjs";
import { CSG_SubscriptionDataList, _decode_CSG_SubscriptionDataList, _encode_CSG_SubscriptionDataList } from "../MAP-MS-DataTypes/CSG-SubscriptionDataList.ta.mjs";
// export { CSG_SubscriptionDataList, _decode_CSG_SubscriptionDataList, _encode_CSG_SubscriptionDataList } from "../MAP-MS-DataTypes/CSG-SubscriptionDataList.ta.mjs";
import { CallWaitingData, _decode_CallWaitingData, _encode_CallWaitingData } from "../MAP-MS-DataTypes/CallWaitingData.ta.mjs";
// export { CallWaitingData, _decode_CallWaitingData, _encode_CallWaitingData } from "../MAP-MS-DataTypes/CallWaitingData.ta.mjs";
import { CallHoldData, _decode_CallHoldData, _encode_CallHoldData } from "../MAP-MS-DataTypes/CallHoldData.ta.mjs";
// export { CallHoldData, _decode_CallHoldData, _encode_CallHoldData } from "../MAP-MS-DataTypes/CallHoldData.ta.mjs";
import { ClipData, _decode_ClipData, _encode_ClipData } from "../MAP-MS-DataTypes/ClipData.ta.mjs";
// export { ClipData, _decode_ClipData, _encode_ClipData } from "../MAP-MS-DataTypes/ClipData.ta.mjs";
import { ClirData, _decode_ClirData, _encode_ClirData } from "../MAP-MS-DataTypes/ClirData.ta.mjs";
// export { ClirData, _decode_ClirData, _encode_ClirData } from "../MAP-MS-DataTypes/ClirData.ta.mjs";
import { EctData, _decode_EctData, _encode_EctData } from "../MAP-MS-DataTypes/EctData.ta.mjs";
// export { EctData, _decode_EctData, _encode_EctData } from "../MAP-MS-DataTypes/EctData.ta.mjs";


/**
 * @summary NoteSubscriberDataModifiedArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NoteSubscriberDataModifiedArg ::= SEQUENCE {
 *     imsi    IMSI,
 *     msisdn    ISDN-AddressString,
 *     forwardingInfoFor-CSE    [0] Ext-ForwardingInfoFor-CSE    OPTIONAL,
 *     callBarringInfoFor-CSE    [1] Ext-CallBarringInfoFor-CSE    OPTIONAL,
 *     odb-Info    [2] ODB-Info    OPTIONAL,
 *     camel-SubscriptionInfo    [3] CAMEL-SubscriptionInfo    OPTIONAL,
 *     allInformationSent    [4] NULL    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     ue-reachable    [5] ServingNode    OPTIONAL,
 *     csg-SubscriptionDataList    [6] CSG-SubscriptionDataList    OPTIONAL,
 *     cw-Data    [7]    CallWaitingData    OPTIONAL,
 *     ch-Data    [8]    CallHoldData    OPTIONAL,
 *     clip-Data    [9] ClipData    OPTIONAL,
 *     clir-Data    [10]    ClirData    OPTIONAL,
 *     ect-data    [11] EctData    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class NoteSubscriberDataModifiedArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `msisdn`.
         * @public
         * @readonly
         */
        readonly msisdn: ISDN_AddressString,
        /**
         * @summary `forwardingInfoFor_CSE`.
         * @public
         * @readonly
         */
        readonly forwardingInfoFor_CSE: OPTIONAL<Ext_ForwardingInfoFor_CSE>,
        /**
         * @summary `callBarringInfoFor_CSE`.
         * @public
         * @readonly
         */
        readonly callBarringInfoFor_CSE: OPTIONAL<Ext_CallBarringInfoFor_CSE>,
        /**
         * @summary `odb_Info`.
         * @public
         * @readonly
         */
        readonly odb_Info: OPTIONAL<ODB_Info>,
        /**
         * @summary `camel_SubscriptionInfo`.
         * @public
         * @readonly
         */
        readonly camel_SubscriptionInfo: OPTIONAL<CAMEL_SubscriptionInfo>,
        /**
         * @summary `allInformationSent`.
         * @public
         * @readonly
         */
        readonly allInformationSent: OPTIONAL<NULL>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `ue_reachable`.
         * @public
         * @readonly
         */
        readonly ue_reachable: OPTIONAL<ServingNode>,
        /**
         * @summary `csg_SubscriptionDataList`.
         * @public
         * @readonly
         */
        readonly csg_SubscriptionDataList: OPTIONAL<CSG_SubscriptionDataList>,
        /**
         * @summary `cw_Data`.
         * @public
         * @readonly
         */
        readonly cw_Data: OPTIONAL<CallWaitingData>,
        /**
         * @summary `ch_Data`.
         * @public
         * @readonly
         */
        readonly ch_Data: OPTIONAL<CallHoldData>,
        /**
         * @summary `clip_Data`.
         * @public
         * @readonly
         */
        readonly clip_Data: OPTIONAL<ClipData>,
        /**
         * @summary `clir_Data`.
         * @public
         * @readonly
         */
        readonly clir_Data: OPTIONAL<ClirData>,
        /**
         * @summary `ect_data`.
         * @public
         * @readonly
         */
        readonly ect_data: OPTIONAL<EctData>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NoteSubscriberDataModifiedArg
     * @description
     * 
     * This takes an `object` and converts it to a `NoteSubscriberDataModifiedArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NoteSubscriberDataModifiedArg`.
     * @returns {NoteSubscriberDataModifiedArg}
     */
    public static _from_object (_o: { [_K in keyof (NoteSubscriberDataModifiedArg)]: (NoteSubscriberDataModifiedArg)[_K] }): NoteSubscriberDataModifiedArg {
        return new NoteSubscriberDataModifiedArg(_o.imsi, _o.msisdn, _o.forwardingInfoFor_CSE, _o.callBarringInfoFor_CSE, _o.odb_Info, _o.camel_SubscriptionInfo, _o.allInformationSent, _o.extensionContainer, _o.ue_reachable, _o.csg_SubscriptionDataList, _o.cw_Data, _o.ch_Data, _o.clip_Data, _o.clir_Data, _o.ect_data, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NoteSubscriberDataModifiedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NoteSubscriberDataModifiedArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("msisdn", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("forwardingInfoFor-CSE", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("callBarringInfoFor-CSE", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("odb-Info", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("camel-SubscriptionInfo", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("allInformationSent", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of NoteSubscriberDataModifiedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NoteSubscriberDataModifiedArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NoteSubscriberDataModifiedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NoteSubscriberDataModifiedArg: $.ComponentSpec[] = [
    new $.ComponentSpec("ue-reachable", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("csg-SubscriptionDataList", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("cw-Data", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("ch-Data", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("clip-Data", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("clir-Data", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("ect-data", true, $.hasTag(_TagClass.context, 11), undefined, undefined)
];

let _cached_decoder_for_NoteSubscriberDataModifiedArg: $.ASN1Decoder<NoteSubscriberDataModifiedArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NoteSubscriberDataModifiedArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NoteSubscriberDataModifiedArg (el: _Element): NoteSubscriberDataModifiedArg {
    if (!_cached_decoder_for_NoteSubscriberDataModifiedArg) { _cached_decoder_for_NoteSubscriberDataModifiedArg = function (el: _Element): NoteSubscriberDataModifiedArg {
    let imsi!: IMSI;
    let msisdn!: ISDN_AddressString;
    let forwardingInfoFor_CSE: OPTIONAL<Ext_ForwardingInfoFor_CSE>;
    let callBarringInfoFor_CSE: OPTIONAL<Ext_CallBarringInfoFor_CSE>;
    let odb_Info: OPTIONAL<ODB_Info>;
    let camel_SubscriptionInfo: OPTIONAL<CAMEL_SubscriptionInfo>;
    let allInformationSent: OPTIONAL<NULL>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let ue_reachable: OPTIONAL<ServingNode>;
    let csg_SubscriptionDataList: OPTIONAL<CSG_SubscriptionDataList>;
    let cw_Data: OPTIONAL<CallWaitingData>;
    let ch_Data: OPTIONAL<CallHoldData>;
    let clip_Data: OPTIONAL<ClipData>;
    let clir_Data: OPTIONAL<ClirData>;
    let ect_data: OPTIONAL<EctData>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = _decode_IMSI(_el); },
        "msisdn": (_el: _Element): void => { msisdn = _decode_ISDN_AddressString(_el); },
        "forwardingInfoFor-CSE": (_el: _Element): void => { forwardingInfoFor_CSE = $._decode_implicit<Ext_ForwardingInfoFor_CSE>(() => _decode_Ext_ForwardingInfoFor_CSE)(_el); },
        "callBarringInfoFor-CSE": (_el: _Element): void => { callBarringInfoFor_CSE = $._decode_implicit<Ext_CallBarringInfoFor_CSE>(() => _decode_Ext_CallBarringInfoFor_CSE)(_el); },
        "odb-Info": (_el: _Element): void => { odb_Info = $._decode_implicit<ODB_Info>(() => _decode_ODB_Info)(_el); },
        "camel-SubscriptionInfo": (_el: _Element): void => { camel_SubscriptionInfo = $._decode_implicit<CAMEL_SubscriptionInfo>(() => _decode_CAMEL_SubscriptionInfo)(_el); },
        "allInformationSent": (_el: _Element): void => { allInformationSent = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "ue-reachable": (_el: _Element): void => { ue_reachable = $._decode_implicit<ServingNode>(() => _decode_ServingNode)(_el); },
        "csg-SubscriptionDataList": (_el: _Element): void => { csg_SubscriptionDataList = $._decode_implicit<CSG_SubscriptionDataList>(() => _decode_CSG_SubscriptionDataList)(_el); },
        "cw-Data": (_el: _Element): void => { cw_Data = $._decode_implicit<CallWaitingData>(() => _decode_CallWaitingData)(_el); },
        "ch-Data": (_el: _Element): void => { ch_Data = $._decode_implicit<CallHoldData>(() => _decode_CallHoldData)(_el); },
        "clip-Data": (_el: _Element): void => { clip_Data = $._decode_implicit<ClipData>(() => _decode_ClipData)(_el); },
        "clir-Data": (_el: _Element): void => { clir_Data = $._decode_implicit<ClirData>(() => _decode_ClirData)(_el); },
        "ect-data": (_el: _Element): void => { ect_data = $._decode_implicit<EctData>(() => _decode_EctData)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NoteSubscriberDataModifiedArg,
        _extension_additions_list_spec_for_NoteSubscriberDataModifiedArg,
        _root_component_type_list_2_spec_for_NoteSubscriberDataModifiedArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NoteSubscriberDataModifiedArg(
        imsi,
        msisdn,
        forwardingInfoFor_CSE,
        callBarringInfoFor_CSE,
        odb_Info,
        camel_SubscriptionInfo,
        allInformationSent,
        extensionContainer,
        ue_reachable,
        csg_SubscriptionDataList,
        cw_Data,
        ch_Data,
        clip_Data,
        clir_Data,
        ect_data,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NoteSubscriberDataModifiedArg(el);
}

let _cached_encoder_for_NoteSubscriberDataModifiedArg: $.ASN1Encoder<NoteSubscriberDataModifiedArg> | null = null;

/**
 * @summary Encodes a(n) NoteSubscriberDataModifiedArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoteSubscriberDataModifiedArg, encoded as an ASN.1 Element.
 */
export
function _encode_NoteSubscriberDataModifiedArg (value: NoteSubscriberDataModifiedArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NoteSubscriberDataModifiedArg) { _cached_encoder_for_NoteSubscriberDataModifiedArg = function (value: NoteSubscriberDataModifiedArg, elGetter: $.ASN1Encoder<NoteSubscriberDataModifiedArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IMSI(value.imsi, $.BER),
            /* REQUIRED   */ _encode_ISDN_AddressString(value.msisdn, $.BER),
            /* IF_ABSENT  */ ((value.forwardingInfoFor_CSE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Ext_ForwardingInfoFor_CSE, $.BER)(value.forwardingInfoFor_CSE, $.BER)),
            /* IF_ABSENT  */ ((value.callBarringInfoFor_CSE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Ext_CallBarringInfoFor_CSE, $.BER)(value.callBarringInfoFor_CSE, $.BER)),
            /* IF_ABSENT  */ ((value.odb_Info === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ODB_Info, $.BER)(value.odb_Info, $.BER)),
            /* IF_ABSENT  */ ((value.camel_SubscriptionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CAMEL_SubscriptionInfo, $.BER)(value.camel_SubscriptionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.allInformationSent === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.allInformationSent, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.ue_reachable === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ServingNode, $.BER)(value.ue_reachable, $.BER)),
            /* IF_ABSENT  */ ((value.csg_SubscriptionDataList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_CSG_SubscriptionDataList, $.BER)(value.csg_SubscriptionDataList, $.BER)),
            /* IF_ABSENT  */ ((value.cw_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_CallWaitingData, $.BER)(value.cw_Data, $.BER)),
            /* IF_ABSENT  */ ((value.ch_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_CallHoldData, $.BER)(value.ch_Data, $.BER)),
            /* IF_ABSENT  */ ((value.clip_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_ClipData, $.BER)(value.clip_Data, $.BER)),
            /* IF_ABSENT  */ ((value.clir_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_ClirData, $.BER)(value.clir_Data, $.BER)),
            /* IF_ABSENT  */ ((value.ect_data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_EctData, $.BER)(value.ect_data, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NoteSubscriberDataModifiedArg(value, elGetter);
}


/* eslint-enable */
