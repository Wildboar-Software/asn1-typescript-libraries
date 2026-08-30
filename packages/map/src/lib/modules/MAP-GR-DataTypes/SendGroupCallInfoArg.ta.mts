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
import { RequestedInfo, _enum_for_RequestedInfo, RequestedInfo_anchorMSC_AddressAndASCI_CallReference /* IMPORTED_LONG_ENUMERATION_ITEM */, anchorMSC_AddressAndASCI_CallReference /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedInfo_imsiAndAdditionalInfoAndAdditionalSubscription /* IMPORTED_LONG_ENUMERATION_ITEM */, imsiAndAdditionalInfoAndAdditionalSubscription /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RequestedInfo, _encode_RequestedInfo } from "../MAP-GR-DataTypes/RequestedInfo.ta.mjs";
import { Long_GroupId, _decode_Long_GroupId, _encode_Long_GroupId } from "../MAP-MS-DataTypes/Long-GroupId.ta.mjs";
import { Ext_TeleserviceCode, _decode_Ext_TeleserviceCode, _encode_Ext_TeleserviceCode } from "../MAP-TS-Code/Ext-TeleserviceCode.ta.mjs";
import { GlobalCellId, _decode_GlobalCellId, _encode_GlobalCellId } from "../MAP-CommonDataTypes/GlobalCellId.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { TMSI, _decode_TMSI, _encode_TMSI } from "../MAP-CommonDataTypes/TMSI.ta.mjs";
import { AdditionalInfo, _decode_AdditionalInfo, _encode_AdditionalInfo } from "../MAP-MS-DataTypes/AdditionalInfo.ta.mjs";
import { TalkerPriority, _enum_for_TalkerPriority, TalkerPriority_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, TalkerPriority_privileged /* IMPORTED_LONG_ENUMERATION_ITEM */, privileged /* IMPORTED_SHORT_ENUMERATION_ITEM */, TalkerPriority_emergency /* IMPORTED_LONG_ENUMERATION_ITEM */, emergency /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TalkerPriority, _encode_TalkerPriority } from "../MAP-GR-DataTypes/TalkerPriority.ta.mjs";
import { Cksn, _decode_Cksn, _encode_Cksn } from "../MAP-MS-DataTypes/Cksn.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary SendGroupCallInfoArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendGroupCallInfoArg ::= SEQUENCE {
 *     requestedInfo    RequestedInfo,
 *     groupId    Long-GroupId, 
 *     teleservice    Ext-TeleserviceCode,
 *     cellId    [0] GlobalCellId    OPTIONAL,
 *     imsi    [1] IMSI    OPTIONAL,
 *     tmsi    [2] TMSI    OPTIONAL,
 *     additionalInfo    [3] AdditionalInfo    OPTIONAL,
 *     talkerPriority    [4] TalkerPriority    OPTIONAL,
 *     cksn    [5] Cksn    OPTIONAL,
 *     extensionContainer    [6] ExtensionContainer    OPTIONAL,
 *     ... }
 * ```
 * 
 * @class
 */
export
class SendGroupCallInfoArg {
    constructor (
        /**
         * @summary `requestedInfo`.
         * @public
         * @readonly
         */
        readonly requestedInfo: RequestedInfo,
        /**
         * @summary `groupId`.
         * @public
         * @readonly
         */
        readonly groupId: Long_GroupId,
        /**
         * @summary `teleservice`.
         * @public
         * @readonly
         */
        readonly teleservice: Ext_TeleserviceCode,
        /**
         * @summary `cellId`.
         * @public
         * @readonly
         */
        readonly cellId: OPTIONAL<GlobalCellId>,
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<IMSI>,
        /**
         * @summary `tmsi`.
         * @public
         * @readonly
         */
        readonly tmsi: OPTIONAL<TMSI>,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<AdditionalInfo>,
        /**
         * @summary `talkerPriority`.
         * @public
         * @readonly
         */
        readonly talkerPriority: OPTIONAL<TalkerPriority>,
        /**
         * @summary `cksn`.
         * @public
         * @readonly
         */
        readonly cksn: OPTIONAL<Cksn>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SendGroupCallInfoArg
     * @description
     * 
     * This takes an `object` and converts it to a `SendGroupCallInfoArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendGroupCallInfoArg`.
     * @returns {SendGroupCallInfoArg}
     */
    public static _from_object (_o: { [_K in keyof (SendGroupCallInfoArg)]: (SendGroupCallInfoArg)[_K] }): SendGroupCallInfoArg {
        return new SendGroupCallInfoArg(_o.requestedInfo, _o.groupId, _o.teleservice, _o.cellId, _o.imsi, _o.tmsi, _o.additionalInfo, _o.talkerPriority, _o.cksn, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `requestedInfo`
         * @public
         * @static
         */

    public static _enum_for_requestedInfo = _enum_for_RequestedInfo;        /**
         * @summary The enum used as the type of the component `talkerPriority`
         * @public
         * @static
         */

    public static _enum_for_talkerPriority = _enum_for_TalkerPriority;
}

/**
 * @summary The Leading Root Component Types of SendGroupCallInfoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendGroupCallInfoArg: $.ComponentSpec[] = [
    new $.ComponentSpec("requestedInfo", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("groupId", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("teleservice", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("cellId", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tmsi", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("additionalInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("talkerPriority", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("cksn", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of SendGroupCallInfoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendGroupCallInfoArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendGroupCallInfoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendGroupCallInfoArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SendGroupCallInfoArg: $.ASN1Decoder<SendGroupCallInfoArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendGroupCallInfoArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendGroupCallInfoArg (el: _Element): SendGroupCallInfoArg {
    if (!_cached_decoder_for_SendGroupCallInfoArg) { _cached_decoder_for_SendGroupCallInfoArg = function (el: _Element): SendGroupCallInfoArg {
    let requestedInfo!: RequestedInfo;
    let groupId!: Long_GroupId;
    let teleservice!: Ext_TeleserviceCode;
    let cellId: OPTIONAL<GlobalCellId> = undefined;
    let imsi: OPTIONAL<IMSI> = undefined;
    let tmsi: OPTIONAL<TMSI> = undefined;
    let additionalInfo: OPTIONAL<AdditionalInfo> = undefined;
    let talkerPriority: OPTIONAL<TalkerPriority> = undefined;
    let cksn: OPTIONAL<Cksn> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "requestedInfo": (_el: _Element): void => { requestedInfo = _decode_RequestedInfo(_el); },
        "groupId": (_el: _Element): void => { groupId = _decode_Long_GroupId(_el); },
        "teleservice": (_el: _Element): void => { teleservice = _decode_Ext_TeleserviceCode(_el); },
        "cellId": (_el: _Element): void => { cellId = $._decode_implicit<GlobalCellId>(() => _decode_GlobalCellId)(_el); },
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "tmsi": (_el: _Element): void => { tmsi = $._decode_implicit<TMSI>(() => _decode_TMSI)(_el); },
        "additionalInfo": (_el: _Element): void => { additionalInfo = $._decode_implicit<AdditionalInfo>(() => _decode_AdditionalInfo)(_el); },
        "talkerPriority": (_el: _Element): void => { talkerPriority = $._decode_implicit<TalkerPriority>(() => _decode_TalkerPriority)(_el); },
        "cksn": (_el: _Element): void => { cksn = $._decode_implicit<Cksn>(() => _decode_Cksn)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendGroupCallInfoArg,
        _extension_additions_list_spec_for_SendGroupCallInfoArg,
        _root_component_type_list_2_spec_for_SendGroupCallInfoArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SendGroupCallInfoArg(
        requestedInfo,
        groupId,
        teleservice,
        cellId,
        imsi,
        tmsi,
        additionalInfo,
        talkerPriority,
        cksn,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SendGroupCallInfoArg(el);
}

let _cached_encoder_for_SendGroupCallInfoArg: $.ASN1Encoder<SendGroupCallInfoArg> | null = null;

/**
 * @summary Encodes a(n) SendGroupCallInfoArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendGroupCallInfoArg, encoded as an ASN.1 Element.
 */
export
function _encode_SendGroupCallInfoArg (value: SendGroupCallInfoArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendGroupCallInfoArg) { _cached_encoder_for_SendGroupCallInfoArg = function (value: SendGroupCallInfoArg, elGetter: $.ASN1Encoder<SendGroupCallInfoArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RequestedInfo(value.requestedInfo, $.BER),
            /* REQUIRED   */ _encode_Long_GroupId(value.groupId, $.BER),
            /* REQUIRED   */ _encode_Ext_TeleserviceCode(value.teleservice, $.BER),
            /* IF_ABSENT  */ ((value.cellId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GlobalCellId, $.BER)(value.cellId, $.BER)),
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.imsi, $.BER)),
            /* IF_ABSENT  */ ((value.tmsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_TMSI, $.BER)(value.tmsi, $.BER)),
            /* IF_ABSENT  */ ((value.additionalInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AdditionalInfo, $.BER)(value.additionalInfo, $.BER)),
            /* IF_ABSENT  */ ((value.talkerPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_TalkerPriority, $.BER)(value.talkerPriority, $.BER)),
            /* IF_ABSENT  */ ((value.cksn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Cksn, $.BER)(value.cksn, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SendGroupCallInfoArg(value, elGetter);
}


/* eslint-enable */
