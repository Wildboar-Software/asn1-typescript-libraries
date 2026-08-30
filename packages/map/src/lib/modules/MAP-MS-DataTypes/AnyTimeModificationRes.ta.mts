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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { Ext_SS_InfoFor_CSE, _decode_Ext_SS_InfoFor_CSE, _encode_Ext_SS_InfoFor_CSE } from "../MAP-MS-DataTypes/Ext-SS-InfoFor-CSE.ta.mjs";
// export { Ext_SS_InfoFor_CSE, _decode_Ext_SS_InfoFor_CSE, _encode_Ext_SS_InfoFor_CSE } from "../MAP-MS-DataTypes/Ext-SS-InfoFor-CSE.ta.mjs";
import { CAMEL_SubscriptionInfo, _decode_CAMEL_SubscriptionInfo, _encode_CAMEL_SubscriptionInfo } from "../MAP-MS-DataTypes/CAMEL-SubscriptionInfo.ta.mjs";
// export { CAMEL_SubscriptionInfo, _decode_CAMEL_SubscriptionInfo, _encode_CAMEL_SubscriptionInfo } from "../MAP-MS-DataTypes/CAMEL-SubscriptionInfo.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { ODB_Info, _decode_ODB_Info, _encode_ODB_Info } from "../MAP-MS-DataTypes/ODB-Info.ta.mjs";
// export { ODB_Info, _decode_ODB_Info, _encode_ODB_Info } from "../MAP-MS-DataTypes/ODB-Info.ta.mjs";
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
import { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";
// export { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";


/**
 * @summary AnyTimeModificationRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyTimeModificationRes ::= SEQUENCE {
 *     ss-InfoFor-CSE    [0]    Ext-SS-InfoFor-CSE    OPTIONAL,
 *     camel-SubscriptionInfo    [1]    CAMEL-SubscriptionInfo    OPTIONAL,
 *     extensionContainer    [2]    ExtensionContainer    OPTIONAL,
 *     ...,
 *     odb-Info    [3]    ODB-Info    OPTIONAL,
 *     cw-Data    [4]    CallWaitingData    OPTIONAL,
 *     ch-Data    [5]    CallHoldData    OPTIONAL,
 *     clip-Data    [6] ClipData    OPTIONAL,
 *     clir-Data    [7]    ClirData    OPTIONAL,
 *     ect-data    [8] EctData    OPTIONAL,
 *     serviceCentreAddress    [9] AddressString    OPTIONAL
 *  }
 * ```
 * 
 * @class
 */
export
class AnyTimeModificationRes {
    constructor (
        /**
         * @summary `ss_InfoFor_CSE`.
         * @public
         * @readonly
         */
        readonly ss_InfoFor_CSE: OPTIONAL<Ext_SS_InfoFor_CSE>,
        /**
         * @summary `camel_SubscriptionInfo`.
         * @public
         * @readonly
         */
        readonly camel_SubscriptionInfo: OPTIONAL<CAMEL_SubscriptionInfo>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `odb_Info`.
         * @public
         * @readonly
         */
        readonly odb_Info: OPTIONAL<ODB_Info>,
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
         * @summary `serviceCentreAddress`.
         * @public
         * @readonly
         */
        readonly serviceCentreAddress: OPTIONAL<AddressString>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AnyTimeModificationRes
     * @description
     * 
     * This takes an `object` and converts it to a `AnyTimeModificationRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AnyTimeModificationRes`.
     * @returns {AnyTimeModificationRes}
     */
    public static _from_object (_o: { [_K in keyof (AnyTimeModificationRes)]: (AnyTimeModificationRes)[_K] }): AnyTimeModificationRes {
        return new AnyTimeModificationRes(_o.ss_InfoFor_CSE, _o.camel_SubscriptionInfo, _o.extensionContainer, _o.odb_Info, _o.cw_Data, _o.ch_Data, _o.clip_Data, _o.clir_Data, _o.ect_data, _o.serviceCentreAddress, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AnyTimeModificationRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AnyTimeModificationRes: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-InfoFor-CSE", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("camel-SubscriptionInfo", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AnyTimeModificationRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AnyTimeModificationRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AnyTimeModificationRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AnyTimeModificationRes: $.ComponentSpec[] = [
    new $.ComponentSpec("odb-Info", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("cw-Data", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("ch-Data", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("clip-Data", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("clir-Data", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("ect-data", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("serviceCentreAddress", true, $.hasTag(_TagClass.context, 9), undefined, undefined)
];

let _cached_decoder_for_AnyTimeModificationRes: $.ASN1Decoder<AnyTimeModificationRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AnyTimeModificationRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AnyTimeModificationRes (el: _Element): AnyTimeModificationRes {
    if (!_cached_decoder_for_AnyTimeModificationRes) { _cached_decoder_for_AnyTimeModificationRes = function (el: _Element): AnyTimeModificationRes {
    let ss_InfoFor_CSE: OPTIONAL<Ext_SS_InfoFor_CSE>;
    let camel_SubscriptionInfo: OPTIONAL<CAMEL_SubscriptionInfo>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let odb_Info: OPTIONAL<ODB_Info>;
    let cw_Data: OPTIONAL<CallWaitingData>;
    let ch_Data: OPTIONAL<CallHoldData>;
    let clip_Data: OPTIONAL<ClipData>;
    let clir_Data: OPTIONAL<ClirData>;
    let ect_data: OPTIONAL<EctData>;
    let serviceCentreAddress: OPTIONAL<AddressString>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-InfoFor-CSE": (_el: _Element): void => { ss_InfoFor_CSE = $._decode_explicit<Ext_SS_InfoFor_CSE>(() => _decode_Ext_SS_InfoFor_CSE)(_el); },
        "camel-SubscriptionInfo": (_el: _Element): void => { camel_SubscriptionInfo = $._decode_implicit<CAMEL_SubscriptionInfo>(() => _decode_CAMEL_SubscriptionInfo)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "odb-Info": (_el: _Element): void => { odb_Info = $._decode_implicit<ODB_Info>(() => _decode_ODB_Info)(_el); },
        "cw-Data": (_el: _Element): void => { cw_Data = $._decode_implicit<CallWaitingData>(() => _decode_CallWaitingData)(_el); },
        "ch-Data": (_el: _Element): void => { ch_Data = $._decode_implicit<CallHoldData>(() => _decode_CallHoldData)(_el); },
        "clip-Data": (_el: _Element): void => { clip_Data = $._decode_implicit<ClipData>(() => _decode_ClipData)(_el); },
        "clir-Data": (_el: _Element): void => { clir_Data = $._decode_implicit<ClirData>(() => _decode_ClirData)(_el); },
        "ect-data": (_el: _Element): void => { ect_data = $._decode_implicit<EctData>(() => _decode_EctData)(_el); },
        "serviceCentreAddress": (_el: _Element): void => { serviceCentreAddress = $._decode_implicit<AddressString>(() => _decode_AddressString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AnyTimeModificationRes,
        _extension_additions_list_spec_for_AnyTimeModificationRes,
        _root_component_type_list_2_spec_for_AnyTimeModificationRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AnyTimeModificationRes(
        ss_InfoFor_CSE,
        camel_SubscriptionInfo,
        extensionContainer,
        odb_Info,
        cw_Data,
        ch_Data,
        clip_Data,
        clir_Data,
        ect_data,
        serviceCentreAddress,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AnyTimeModificationRes(el);
}

let _cached_encoder_for_AnyTimeModificationRes: $.ASN1Encoder<AnyTimeModificationRes> | null = null;

/**
 * @summary Encodes a(n) AnyTimeModificationRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnyTimeModificationRes, encoded as an ASN.1 Element.
 */
export
function _encode_AnyTimeModificationRes (value: AnyTimeModificationRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AnyTimeModificationRes) { _cached_encoder_for_AnyTimeModificationRes = function (value: AnyTimeModificationRes, elGetter: $.ASN1Encoder<AnyTimeModificationRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ss_InfoFor_CSE === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_Ext_SS_InfoFor_CSE, $.BER)(value.ss_InfoFor_CSE, $.BER)),
            /* IF_ABSENT  */ ((value.camel_SubscriptionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CAMEL_SubscriptionInfo, $.BER)(value.camel_SubscriptionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.odb_Info === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ODB_Info, $.BER)(value.odb_Info, $.BER)),
            /* IF_ABSENT  */ ((value.cw_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CallWaitingData, $.BER)(value.cw_Data, $.BER)),
            /* IF_ABSENT  */ ((value.ch_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CallHoldData, $.BER)(value.ch_Data, $.BER)),
            /* IF_ABSENT  */ ((value.clip_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ClipData, $.BER)(value.clip_Data, $.BER)),
            /* IF_ABSENT  */ ((value.clir_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ClirData, $.BER)(value.clir_Data, $.BER)),
            /* IF_ABSENT  */ ((value.ect_data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_EctData, $.BER)(value.ect_data, $.BER)),
            /* IF_ABSENT  */ ((value.serviceCentreAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_AddressString, $.BER)(value.serviceCentreAddress, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AnyTimeModificationRes(value, elGetter);
}


/* eslint-enable */
