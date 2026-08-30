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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";
// export { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { Additional_Number, _decode_Additional_Number, _encode_Additional_Number } from "../MAP-SM-DataTypes/Additional-Number.ta.mjs";
// export { Additional_Number, _decode_Additional_Number, _encode_Additional_Number } from "../MAP-SM-DataTypes/Additional-Number.ta.mjs";
import { SupportedLCS_CapabilitySets, SupportedLCS_CapabilitySets_lcsCapabilitySet1 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedLCS_CapabilitySets_lcsCapabilitySet2 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedLCS_CapabilitySets_lcsCapabilitySet3 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedLCS_CapabilitySets_lcsCapabilitySet4 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet4 /* IMPORTED_SHORT_NAMED_BIT */, SupportedLCS_CapabilitySets_lcsCapabilitySet5 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet5 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedLCS_CapabilitySets, _encode_SupportedLCS_CapabilitySets } from "../MAP-MS-DataTypes/SupportedLCS-CapabilitySets.ta.mjs";
// export { SupportedLCS_CapabilitySets, SupportedLCS_CapabilitySets_lcsCapabilitySet1 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedLCS_CapabilitySets_lcsCapabilitySet2 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedLCS_CapabilitySets_lcsCapabilitySet3 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedLCS_CapabilitySets_lcsCapabilitySet4 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet4 /* IMPORTED_SHORT_NAMED_BIT */, SupportedLCS_CapabilitySets_lcsCapabilitySet5 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet5 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedLCS_CapabilitySets, _encode_SupportedLCS_CapabilitySets } from "../MAP-MS-DataTypes/SupportedLCS-CapabilitySets.ta.mjs";
import { DiameterIdentity, _decode_DiameterIdentity, _encode_DiameterIdentity } from "../MAP-CommonDataTypes/DiameterIdentity.ta.mjs";
// export { DiameterIdentity, _decode_DiameterIdentity, _encode_DiameterIdentity } from "../MAP-CommonDataTypes/DiameterIdentity.ta.mjs";


/**
 * @summary LCSLocationInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSLocationInfo ::= SEQUENCE {
 *     networkNode-Number    ISDN-AddressString,
 *     -- NetworkNode-number can be msc-number, sgsn-number or a dummy value of "0"
 *     lmsi    [0] LMSI    OPTIONAL,
 *     extensionContainer    [1] ExtensionContainer    OPTIONAL,
 *     ... ,
 *     gprsNodeIndicator    [2] NULL    OPTIONAL,
 *     -- gprsNodeIndicator is set only if the SGSN number is sent as the Network Node Number
 *     additional-Number    [3] Additional-Number    OPTIONAL,
 *     supportedLCS-CapabilitySets    [4]    SupportedLCS-CapabilitySets    OPTIONAL,
 *     additional-LCS-CapabilitySets    [5]    SupportedLCS-CapabilitySets    OPTIONAL,
 *     mme-Name    [6]    DiameterIdentity    OPTIONAL,
 *     aaa-Server-Name    [8]    DiameterIdentity    OPTIONAL,
 *     sgsn-Name    [9]    DiameterIdentity    OPTIONAL,
 *     sgsn-Realm    [10]    DiameterIdentity    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class LCSLocationInfo {
    constructor (
        /**
         * @summary `networkNode_Number`.
         * @public
         * @readonly
         */
        readonly networkNode_Number: ISDN_AddressString,
        /**
         * @summary `lmsi`.
         * @public
         * @readonly
         */
        readonly lmsi: OPTIONAL<LMSI>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `gprsNodeIndicator`.
         * @public
         * @readonly
         */
        readonly gprsNodeIndicator: OPTIONAL<NULL>,
        /**
         * @summary `additional_Number`.
         * @public
         * @readonly
         */
        readonly additional_Number: OPTIONAL<Additional_Number>,
        /**
         * @summary `supportedLCS_CapabilitySets`.
         * @public
         * @readonly
         */
        readonly supportedLCS_CapabilitySets: OPTIONAL<SupportedLCS_CapabilitySets>,
        /**
         * @summary `additional_LCS_CapabilitySets`.
         * @public
         * @readonly
         */
        readonly additional_LCS_CapabilitySets: OPTIONAL<SupportedLCS_CapabilitySets>,
        /**
         * @summary `mme_Name`.
         * @public
         * @readonly
         */
        readonly mme_Name: OPTIONAL<DiameterIdentity>,
        /**
         * @summary `aaa_Server_Name`.
         * @public
         * @readonly
         */
        readonly aaa_Server_Name: OPTIONAL<DiameterIdentity>,
        /**
         * @summary `sgsn_Name`.
         * @public
         * @readonly
         */
        readonly sgsn_Name: OPTIONAL<DiameterIdentity>,
        /**
         * @summary `sgsn_Realm`.
         * @public
         * @readonly
         */
        readonly sgsn_Realm: OPTIONAL<DiameterIdentity>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LCSLocationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `LCSLocationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LCSLocationInfo`.
     * @returns {LCSLocationInfo}
     */
    public static _from_object (_o: { [_K in keyof (LCSLocationInfo)]: (LCSLocationInfo)[_K] }): LCSLocationInfo {
        return new LCSLocationInfo(_o.networkNode_Number, _o.lmsi, _o.extensionContainer, _o.gprsNodeIndicator, _o.additional_Number, _o.supportedLCS_CapabilitySets, _o.additional_LCS_CapabilitySets, _o.mme_Name, _o.aaa_Server_Name, _o.sgsn_Name, _o.sgsn_Realm, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of LCSLocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LCSLocationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("networkNode-Number", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("lmsi", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of LCSLocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LCSLocationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LCSLocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LCSLocationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("gprsNodeIndicator", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("additional-Number", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("supportedLCS-CapabilitySets", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("additional-LCS-CapabilitySets", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("mme-Name", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("aaa-Server-Name", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("sgsn-Name", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("sgsn-Realm", true, $.hasTag(_TagClass.context, 10), undefined, undefined)
];

let _cached_decoder_for_LCSLocationInfo: $.ASN1Decoder<LCSLocationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCSLocationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCSLocationInfo (el: _Element): LCSLocationInfo {
    if (!_cached_decoder_for_LCSLocationInfo) { _cached_decoder_for_LCSLocationInfo = function (el: _Element): LCSLocationInfo {
    let networkNode_Number!: ISDN_AddressString;
    let lmsi: OPTIONAL<LMSI>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let gprsNodeIndicator: OPTIONAL<NULL>;
    let additional_Number: OPTIONAL<Additional_Number>;
    let supportedLCS_CapabilitySets: OPTIONAL<SupportedLCS_CapabilitySets>;
    let additional_LCS_CapabilitySets: OPTIONAL<SupportedLCS_CapabilitySets>;
    let mme_Name: OPTIONAL<DiameterIdentity>;
    let aaa_Server_Name: OPTIONAL<DiameterIdentity>;
    let sgsn_Name: OPTIONAL<DiameterIdentity>;
    let sgsn_Realm: OPTIONAL<DiameterIdentity>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "networkNode-Number": (_el: _Element): void => { networkNode_Number = _decode_ISDN_AddressString(_el); },
        "lmsi": (_el: _Element): void => { lmsi = $._decode_implicit<LMSI>(() => _decode_LMSI)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "gprsNodeIndicator": (_el: _Element): void => { gprsNodeIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "additional-Number": (_el: _Element): void => { additional_Number = $._decode_explicit<Additional_Number>(() => _decode_Additional_Number)(_el); },
        "supportedLCS-CapabilitySets": (_el: _Element): void => { supportedLCS_CapabilitySets = $._decode_implicit<SupportedLCS_CapabilitySets>(() => _decode_SupportedLCS_CapabilitySets)(_el); },
        "additional-LCS-CapabilitySets": (_el: _Element): void => { additional_LCS_CapabilitySets = $._decode_implicit<SupportedLCS_CapabilitySets>(() => _decode_SupportedLCS_CapabilitySets)(_el); },
        "mme-Name": (_el: _Element): void => { mme_Name = $._decode_implicit<DiameterIdentity>(() => _decode_DiameterIdentity)(_el); },
        "aaa-Server-Name": (_el: _Element): void => { aaa_Server_Name = $._decode_implicit<DiameterIdentity>(() => _decode_DiameterIdentity)(_el); },
        "sgsn-Name": (_el: _Element): void => { sgsn_Name = $._decode_implicit<DiameterIdentity>(() => _decode_DiameterIdentity)(_el); },
        "sgsn-Realm": (_el: _Element): void => { sgsn_Realm = $._decode_implicit<DiameterIdentity>(() => _decode_DiameterIdentity)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LCSLocationInfo,
        _extension_additions_list_spec_for_LCSLocationInfo,
        _root_component_type_list_2_spec_for_LCSLocationInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LCSLocationInfo(
        networkNode_Number,
        lmsi,
        extensionContainer,
        gprsNodeIndicator,
        additional_Number,
        supportedLCS_CapabilitySets,
        additional_LCS_CapabilitySets,
        mme_Name,
        aaa_Server_Name,
        sgsn_Name,
        sgsn_Realm,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LCSLocationInfo(el);
}

let _cached_encoder_for_LCSLocationInfo: $.ASN1Encoder<LCSLocationInfo> | null = null;

/**
 * @summary Encodes a(n) LCSLocationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCSLocationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_LCSLocationInfo (value: LCSLocationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCSLocationInfo) { _cached_encoder_for_LCSLocationInfo = function (value: LCSLocationInfo, elGetter: $.ASN1Encoder<LCSLocationInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ISDN_AddressString(value.networkNode_Number, $.BER),
            /* IF_ABSENT  */ ((value.lmsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_LMSI, $.BER)(value.lmsi, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.gprsNodeIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.gprsNodeIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.additional_Number === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_Additional_Number, $.BER)(value.additional_Number, $.BER)),
            /* IF_ABSENT  */ ((value.supportedLCS_CapabilitySets === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SupportedLCS_CapabilitySets, $.BER)(value.supportedLCS_CapabilitySets, $.BER)),
            /* IF_ABSENT  */ ((value.additional_LCS_CapabilitySets === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SupportedLCS_CapabilitySets, $.BER)(value.additional_LCS_CapabilitySets, $.BER)),
            /* IF_ABSENT  */ ((value.mme_Name === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_DiameterIdentity, $.BER)(value.mme_Name, $.BER)),
            /* IF_ABSENT  */ ((value.aaa_Server_Name === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_DiameterIdentity, $.BER)(value.aaa_Server_Name, $.BER)),
            /* IF_ABSENT  */ ((value.sgsn_Name === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_DiameterIdentity, $.BER)(value.sgsn_Name, $.BER)),
            /* IF_ABSENT  */ ((value.sgsn_Realm === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_DiameterIdentity, $.BER)(value.sgsn_Realm, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LCSLocationInfo(value, elGetter);
}


/* eslint-enable */
