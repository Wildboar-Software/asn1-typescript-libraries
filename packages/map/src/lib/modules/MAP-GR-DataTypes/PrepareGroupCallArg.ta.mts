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
import { Ext_TeleserviceCode, _decode_Ext_TeleserviceCode, _encode_Ext_TeleserviceCode } from "../MAP-TS-Code/Ext-TeleserviceCode.ta.mjs";
// export { Ext_TeleserviceCode, _decode_Ext_TeleserviceCode, _encode_Ext_TeleserviceCode } from "../MAP-TS-Code/Ext-TeleserviceCode.ta.mjs";
import { ASCI_CallReference, _decode_ASCI_CallReference, _encode_ASCI_CallReference } from "../MAP-CommonDataTypes/ASCI-CallReference.ta.mjs";
// export { ASCI_CallReference, _decode_ASCI_CallReference, _encode_ASCI_CallReference } from "../MAP-CommonDataTypes/ASCI-CallReference.ta.mjs";
import { CODEC_Info, _decode_CODEC_Info, _encode_CODEC_Info } from "../MAP-GR-DataTypes/CODEC-Info.ta.mjs";
// export { CODEC_Info, _decode_CODEC_Info, _encode_CODEC_Info } from "../MAP-GR-DataTypes/CODEC-Info.ta.mjs";
import { CipheringAlgorithm, _decode_CipheringAlgorithm, _encode_CipheringAlgorithm } from "../MAP-GR-DataTypes/CipheringAlgorithm.ta.mjs";
// export { CipheringAlgorithm, _decode_CipheringAlgorithm, _encode_CipheringAlgorithm } from "../MAP-GR-DataTypes/CipheringAlgorithm.ta.mjs";
import { GroupKeyNumber, _decode_GroupKeyNumber, _encode_GroupKeyNumber } from "../MAP-GR-DataTypes/GroupKeyNumber.ta.mjs";
// export { GroupKeyNumber, _decode_GroupKeyNumber, _encode_GroupKeyNumber } from "../MAP-GR-DataTypes/GroupKeyNumber.ta.mjs";
import { Kc, _decode_Kc, _encode_Kc } from "../MAP-MS-DataTypes/Kc.ta.mjs";
// export { Kc, _decode_Kc, _encode_Kc } from "../MAP-MS-DataTypes/Kc.ta.mjs";
import { EMLPP_Priority, _decode_EMLPP_Priority, _encode_EMLPP_Priority } from "../MAP-CommonDataTypes/EMLPP-Priority.ta.mjs";
// export { EMLPP_Priority, _decode_EMLPP_Priority, _encode_EMLPP_Priority } from "../MAP-CommonDataTypes/EMLPP-Priority.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { VSTK, _decode_VSTK, _encode_VSTK } from "../MAP-GR-DataTypes/VSTK.ta.mjs";
// export { VSTK, _decode_VSTK, _encode_VSTK } from "../MAP-GR-DataTypes/VSTK.ta.mjs";
import { VSTK_RAND, _decode_VSTK_RAND, _encode_VSTK_RAND } from "../MAP-GR-DataTypes/VSTK-RAND.ta.mjs";
// export { VSTK_RAND, _decode_VSTK_RAND, _encode_VSTK_RAND } from "../MAP-GR-DataTypes/VSTK-RAND.ta.mjs";


/**
 * @summary PrepareGroupCallArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrepareGroupCallArg ::= SEQUENCE {
 *     teleservice    Ext-TeleserviceCode,
 *     asciCallReference    ASCI-CallReference,
 *     codec-Info    CODEC-Info,
 *     cipheringAlgorithm    CipheringAlgorithm,
 *     groupKeyNumber-Vk-Id    [0] GroupKeyNumber    OPTIONAL,
 *     groupKey    [1] Kc    OPTIONAL, 
 *     -- this parameter shall not be sent and shall be discarded if received
 *     priority    [2] EMLPP-Priority    OPTIONAL,
 *     uplinkFree    [3] NULL    OPTIONAL,
 *     extensionContainer    [4] ExtensionContainer    OPTIONAL,
 *     ...,
 *     vstk    [5] VSTK    OPTIONAL,
 *     vstk-rand    [6] VSTK-RAND    OPTIONAL,
 *     talkerChannelParameter    [7] NULL    OPTIONAL,
 *     uplinkReplyIndicator    [8] NULL    OPTIONAL}
 * ```
 * 
 * @class
 */
export
class PrepareGroupCallArg {
    constructor (
        /**
         * @summary `teleservice`.
         * @public
         * @readonly
         */
        readonly teleservice: Ext_TeleserviceCode,
        /**
         * @summary `asciCallReference`.
         * @public
         * @readonly
         */
        readonly asciCallReference: ASCI_CallReference,
        /**
         * @summary `codec_Info`.
         * @public
         * @readonly
         */
        readonly codec_Info: CODEC_Info,
        /**
         * @summary `cipheringAlgorithm`.
         * @public
         * @readonly
         */
        readonly cipheringAlgorithm: CipheringAlgorithm,
        /**
         * @summary `groupKeyNumber_Vk_Id`.
         * @public
         * @readonly
         */
        readonly groupKeyNumber_Vk_Id: OPTIONAL<GroupKeyNumber>,
        /**
         * @summary `groupKey`.
         * @public
         * @readonly
         */
        readonly groupKey: OPTIONAL<Kc>,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<EMLPP_Priority>,
        /**
         * @summary `uplinkFree`.
         * @public
         * @readonly
         */
        readonly uplinkFree: OPTIONAL<NULL>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `vstk`.
         * @public
         * @readonly
         */
        readonly vstk: OPTIONAL<VSTK>,
        /**
         * @summary `vstk_rand`.
         * @public
         * @readonly
         */
        readonly vstk_rand: OPTIONAL<VSTK_RAND>,
        /**
         * @summary `talkerChannelParameter`.
         * @public
         * @readonly
         */
        readonly talkerChannelParameter: OPTIONAL<NULL>,
        /**
         * @summary `uplinkReplyIndicator`.
         * @public
         * @readonly
         */
        readonly uplinkReplyIndicator: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PrepareGroupCallArg
     * @description
     * 
     * This takes an `object` and converts it to a `PrepareGroupCallArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrepareGroupCallArg`.
     * @returns {PrepareGroupCallArg}
     */
    public static _from_object (_o: { [_K in keyof (PrepareGroupCallArg)]: (PrepareGroupCallArg)[_K] }): PrepareGroupCallArg {
        return new PrepareGroupCallArg(_o.teleservice, _o.asciCallReference, _o.codec_Info, _o.cipheringAlgorithm, _o.groupKeyNumber_Vk_Id, _o.groupKey, _o.priority, _o.uplinkFree, _o.extensionContainer, _o.vstk, _o.vstk_rand, _o.talkerChannelParameter, _o.uplinkReplyIndicator, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PrepareGroupCallArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrepareGroupCallArg: $.ComponentSpec[] = [
    new $.ComponentSpec("teleservice", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("asciCallReference", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("codec-Info", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("cipheringAlgorithm", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("groupKeyNumber-Vk-Id", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("groupKey", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("uplinkFree", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of PrepareGroupCallArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrepareGroupCallArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PrepareGroupCallArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PrepareGroupCallArg: $.ComponentSpec[] = [
    new $.ComponentSpec("vstk", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("vstk-rand", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("talkerChannelParameter", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("uplinkReplyIndicator", true, $.hasTag(_TagClass.context, 8), undefined, undefined)
];

let _cached_decoder_for_PrepareGroupCallArg: $.ASN1Decoder<PrepareGroupCallArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrepareGroupCallArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrepareGroupCallArg (el: _Element): PrepareGroupCallArg {
    if (!_cached_decoder_for_PrepareGroupCallArg) { _cached_decoder_for_PrepareGroupCallArg = function (el: _Element): PrepareGroupCallArg {
    let teleservice!: Ext_TeleserviceCode;
    let asciCallReference!: ASCI_CallReference;
    let codec_Info!: CODEC_Info;
    let cipheringAlgorithm!: CipheringAlgorithm;
    let groupKeyNumber_Vk_Id: OPTIONAL<GroupKeyNumber>;
    let groupKey: OPTIONAL<Kc>;
    let priority: OPTIONAL<EMLPP_Priority>;
    let uplinkFree: OPTIONAL<NULL>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let vstk: OPTIONAL<VSTK>;
    let vstk_rand: OPTIONAL<VSTK_RAND>;
    let talkerChannelParameter: OPTIONAL<NULL>;
    let uplinkReplyIndicator: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "teleservice": (_el: _Element): void => { teleservice = _decode_Ext_TeleserviceCode(_el); },
        "asciCallReference": (_el: _Element): void => { asciCallReference = _decode_ASCI_CallReference(_el); },
        "codec-Info": (_el: _Element): void => { codec_Info = _decode_CODEC_Info(_el); },
        "cipheringAlgorithm": (_el: _Element): void => { cipheringAlgorithm = _decode_CipheringAlgorithm(_el); },
        "groupKeyNumber-Vk-Id": (_el: _Element): void => { groupKeyNumber_Vk_Id = $._decode_implicit<GroupKeyNumber>(() => _decode_GroupKeyNumber)(_el); },
        "groupKey": (_el: _Element): void => { groupKey = $._decode_implicit<Kc>(() => _decode_Kc)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<EMLPP_Priority>(() => _decode_EMLPP_Priority)(_el); },
        "uplinkFree": (_el: _Element): void => { uplinkFree = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "vstk": (_el: _Element): void => { vstk = $._decode_implicit<VSTK>(() => _decode_VSTK)(_el); },
        "vstk-rand": (_el: _Element): void => { vstk_rand = $._decode_implicit<VSTK_RAND>(() => _decode_VSTK_RAND)(_el); },
        "talkerChannelParameter": (_el: _Element): void => { talkerChannelParameter = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "uplinkReplyIndicator": (_el: _Element): void => { uplinkReplyIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrepareGroupCallArg,
        _extension_additions_list_spec_for_PrepareGroupCallArg,
        _root_component_type_list_2_spec_for_PrepareGroupCallArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PrepareGroupCallArg(
        teleservice,
        asciCallReference,
        codec_Info,
        cipheringAlgorithm,
        groupKeyNumber_Vk_Id,
        groupKey,
        priority,
        uplinkFree,
        extensionContainer,
        vstk,
        vstk_rand,
        talkerChannelParameter,
        uplinkReplyIndicator,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PrepareGroupCallArg(el);
}

let _cached_encoder_for_PrepareGroupCallArg: $.ASN1Encoder<PrepareGroupCallArg> | null = null;

/**
 * @summary Encodes a(n) PrepareGroupCallArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrepareGroupCallArg, encoded as an ASN.1 Element.
 */
export
function _encode_PrepareGroupCallArg (value: PrepareGroupCallArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrepareGroupCallArg) { _cached_encoder_for_PrepareGroupCallArg = function (value: PrepareGroupCallArg, elGetter: $.ASN1Encoder<PrepareGroupCallArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Ext_TeleserviceCode(value.teleservice, $.BER),
            /* REQUIRED   */ _encode_ASCI_CallReference(value.asciCallReference, $.BER),
            /* REQUIRED   */ _encode_CODEC_Info(value.codec_Info, $.BER),
            /* REQUIRED   */ _encode_CipheringAlgorithm(value.cipheringAlgorithm, $.BER),
            /* IF_ABSENT  */ ((value.groupKeyNumber_Vk_Id === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GroupKeyNumber, $.BER)(value.groupKeyNumber_Vk_Id, $.BER)),
            /* IF_ABSENT  */ ((value.groupKey === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Kc, $.BER)(value.groupKey, $.BER)),
            /* IF_ABSENT  */ ((value.priority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_EMLPP_Priority, $.BER)(value.priority, $.BER)),
            /* IF_ABSENT  */ ((value.uplinkFree === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.uplinkFree, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.vstk === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_VSTK, $.BER)(value.vstk, $.BER)),
            /* IF_ABSENT  */ ((value.vstk_rand === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_VSTK_RAND, $.BER)(value.vstk_rand, $.BER)),
            /* IF_ABSENT  */ ((value.talkerChannelParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value.talkerChannelParameter, $.BER)),
            /* IF_ABSENT  */ ((value.uplinkReplyIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER)(value.uplinkReplyIndicator, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PrepareGroupCallArg(value, elGetter);
}


/* eslint-enable */
