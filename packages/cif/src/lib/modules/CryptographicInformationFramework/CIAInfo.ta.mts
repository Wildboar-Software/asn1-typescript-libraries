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
import { CIAInfo_version, CIAInfo_version_v1 /* IMPORTED_LONG_NAMED_INTEGER */, v1 /* IMPORTED_SHORT_NAMED_INTEGER */, CIAInfo_version_v2 /* IMPORTED_LONG_NAMED_INTEGER */, v2 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CIAInfo_version, _encode_CIAInfo_version } from "../CryptographicInformationFramework/CIAInfo-version.ta.mjs";
// export { CIAInfo_version, CIAInfo_version_v1 /* IMPORTED_LONG_NAMED_INTEGER */, v1 /* IMPORTED_SHORT_NAMED_INTEGER */, CIAInfo_version_v2 /* IMPORTED_LONG_NAMED_INTEGER */, v2 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CIAInfo_version, _encode_CIAInfo_version } from "../CryptographicInformationFramework/CIAInfo-version.ta.mjs";
import { Label, _decode_Label, _encode_Label } from "../CryptographicInformationFramework/Label.ta.mjs";
// export { Label, _decode_Label, _encode_Label } from "../CryptographicInformationFramework/Label.ta.mjs";
import { CardFlags, CardFlags_readonly /* IMPORTED_LONG_NAMED_BIT */, readonly /* IMPORTED_SHORT_NAMED_BIT */, CardFlags_authRequired /* IMPORTED_LONG_NAMED_BIT */, authRequired /* IMPORTED_SHORT_NAMED_BIT */, CardFlags_prnGeneration /* IMPORTED_LONG_NAMED_BIT */, prnGeneration /* IMPORTED_SHORT_NAMED_BIT */, _decode_CardFlags, _encode_CardFlags } from "../CryptographicInformationFramework/CardFlags.ta.mjs";
// export { CardFlags, CardFlags_readonly /* IMPORTED_LONG_NAMED_BIT */, readonly /* IMPORTED_SHORT_NAMED_BIT */, CardFlags_authRequired /* IMPORTED_LONG_NAMED_BIT */, authRequired /* IMPORTED_SHORT_NAMED_BIT */, CardFlags_prnGeneration /* IMPORTED_LONG_NAMED_BIT */, prnGeneration /* IMPORTED_SHORT_NAMED_BIT */, _decode_CardFlags, _encode_CardFlags } from "../CryptographicInformationFramework/CardFlags.ta.mjs";
import { SecurityEnvironmentInfo, _decode_SecurityEnvironmentInfo, _encode_SecurityEnvironmentInfo } from "../CryptographicInformationFramework/SecurityEnvironmentInfo.ta.mjs";
// export { SecurityEnvironmentInfo, _decode_SecurityEnvironmentInfo, _encode_SecurityEnvironmentInfo } from "../CryptographicInformationFramework/SecurityEnvironmentInfo.ta.mjs";
import { RecordInfo, _decode_RecordInfo, _encode_RecordInfo } from "../CryptographicInformationFramework/RecordInfo.ta.mjs";
// export { RecordInfo, _decode_RecordInfo, _encode_RecordInfo } from "../CryptographicInformationFramework/RecordInfo.ta.mjs";
import { AlgorithmInfo, _decode_AlgorithmInfo, _encode_AlgorithmInfo } from "../CryptographicInformationFramework/AlgorithmInfo.ta.mjs";
// export { AlgorithmInfo, _decode_AlgorithmInfo, _encode_AlgorithmInfo } from "../CryptographicInformationFramework/AlgorithmInfo.ta.mjs";
import { LastUpdate, _decode_LastUpdate, _encode_LastUpdate } from "../CryptographicInformationFramework/LastUpdate.ta.mjs";
// export { LastUpdate, _decode_LastUpdate, _encode_LastUpdate } from "../CryptographicInformationFramework/LastUpdate.ta.mjs";
import { ProfileIndication, _decode_ProfileIndication, _encode_ProfileIndication } from "../CryptographicInformationFramework/ProfileIndication.ta.mjs";
// export { ProfileIndication, _decode_ProfileIndication, _encode_ProfileIndication } from "../CryptographicInformationFramework/ProfileIndication.ta.mjs";


/**
 * @summary CIAInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CIAInfo ::= SEQUENCE {
 *     version             INTEGER {v1(0),v2(1)} (v1|v2,...),
 *     serialNumber        OCTET STRING OPTIONAL,
 *     manufacturerID      Label OPTIONAL,
 *     label               [0] Label OPTIONAL,
 *     cardflags           CardFlags,
 *     seInfo              SEQUENCE OF SecurityEnvironmentInfo OPTIONAL,
 *     recordInfo          [1] RecordInfo OPTIONAL,
 *     supportedAlgorithms [2] SEQUENCE OF AlgorithmInfo OPTIONAL,
 *     issuerId            [3] Label OPTIONAL,
 *     holderId            [4] Label OPTIONAL,
 *     lastUpdate          [5] LastUpdate OPTIONAL,
 *     preferredLanguage   PrintableString OPTIONAL, -- In accordance with IETF RFC 5646
 *     profileIndication   [6] SEQUENCE OF ProfileIndication OPTIONAL,
 *     ... -- For future extensions
 * } (CONSTRAINED BY { -- Each AlgorithmInfo.reference value shall be unique --})
 * ```
 * 
 * @class
 */
export
class CIAInfo {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CIAInfo_version,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `manufacturerID`.
         * @public
         * @readonly
         */
        readonly manufacturerID: OPTIONAL<Label>,
        /**
         * @summary `label`.
         * @public
         * @readonly
         */
        readonly label: OPTIONAL<Label>,
        /**
         * @summary `cardflags`.
         * @public
         * @readonly
         */
        readonly cardflags: CardFlags,
        /**
         * @summary `seInfo`.
         * @public
         * @readonly
         */
        readonly seInfo: OPTIONAL<SecurityEnvironmentInfo[]>,
        /**
         * @summary `recordInfo`.
         * @public
         * @readonly
         */
        readonly recordInfo: OPTIONAL<RecordInfo>,
        /**
         * @summary `supportedAlgorithms`.
         * @public
         * @readonly
         */
        readonly supportedAlgorithms: OPTIONAL<AlgorithmInfo[]>,
        /**
         * @summary `issuerId`.
         * @public
         * @readonly
         */
        readonly issuerId: OPTIONAL<Label>,
        /**
         * @summary `holderId`.
         * @public
         * @readonly
         */
        readonly holderId: OPTIONAL<Label>,
        /**
         * @summary `lastUpdate`.
         * @public
         * @readonly
         */
        readonly lastUpdate: OPTIONAL<LastUpdate>,
        /**
         * @summary `preferredLanguage`.
         * @public
         * @readonly
         */
        readonly preferredLanguage: OPTIONAL<PrintableString>,
        /**
         * @summary `profileIndication`.
         * @public
         * @readonly
         */
        readonly profileIndication: OPTIONAL<ProfileIndication[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CIAInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CIAInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CIAInfo`.
     * @returns {CIAInfo}
     */
    public static _from_object (_o: { [_K in keyof (CIAInfo)]: (CIAInfo)[_K] }): CIAInfo {
        return new CIAInfo(_o.version, _o.serialNumber, _o.manufacturerID, _o.label, _o.cardflags, _o.seInfo, _o.recordInfo, _o.supportedAlgorithms, _o.issuerId, _o.holderId, _o.lastUpdate, _o.preferredLanguage, _o.profileIndication, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CIAInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CIAInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("serialNumber", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("manufacturerID", true, $.hasTag(_TagClass.universal, 12)),
    new $.ComponentSpec("label", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cardflags", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("seInfo", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("recordInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("supportedAlgorithms", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("issuerId", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("holderId", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("lastUpdate", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("preferredLanguage", true, $.hasTag(_TagClass.universal, 19)),
    new $.ComponentSpec("profileIndication", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of CIAInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CIAInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CIAInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CIAInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CIAInfo: $.ASN1Decoder<CIAInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CIAInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CIAInfo (el: _Element): CIAInfo {
    if (!_cached_decoder_for_CIAInfo) { _cached_decoder_for_CIAInfo = function (el: _Element): CIAInfo {
    let version!: CIAInfo_version;
    let serialNumber: OPTIONAL<OCTET_STRING>;
    let manufacturerID: OPTIONAL<Label>;
    let label: OPTIONAL<Label>;
    let cardflags!: CardFlags;
    let seInfo: OPTIONAL<SecurityEnvironmentInfo[]>;
    let recordInfo: OPTIONAL<RecordInfo>;
    let supportedAlgorithms: OPTIONAL<AlgorithmInfo[]>;
    let issuerId: OPTIONAL<Label>;
    let holderId: OPTIONAL<Label>;
    let lastUpdate: OPTIONAL<LastUpdate>;
    let preferredLanguage: OPTIONAL<PrintableString>;
    let profileIndication: OPTIONAL<ProfileIndication[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_CIAInfo_version(_el); },
        "serialNumber": (_el: _Element): void => { serialNumber = $._decodeOctetString(_el); },
        "manufacturerID": (_el: _Element): void => { manufacturerID = _decode_Label(_el); },
        "label": (_el: _Element): void => { label = $._decode_implicit<Label>(() => _decode_Label)(_el); },
        "cardflags": (_el: _Element): void => { cardflags = _decode_CardFlags(_el); },
        "seInfo": (_el: _Element): void => { seInfo = $._decodeSequenceOf<SecurityEnvironmentInfo>(() => _decode_SecurityEnvironmentInfo)(_el); },
        "recordInfo": (_el: _Element): void => { recordInfo = $._decode_implicit<RecordInfo>(() => _decode_RecordInfo)(_el); },
        "supportedAlgorithms": (_el: _Element): void => { supportedAlgorithms = $._decode_implicit<AlgorithmInfo[]>(() => $._decodeSequenceOf<AlgorithmInfo>(() => _decode_AlgorithmInfo))(_el); },
        "issuerId": (_el: _Element): void => { issuerId = $._decode_implicit<Label>(() => _decode_Label)(_el); },
        "holderId": (_el: _Element): void => { holderId = $._decode_implicit<Label>(() => _decode_Label)(_el); },
        "lastUpdate": (_el: _Element): void => { lastUpdate = $._decode_explicit<LastUpdate>(() => _decode_LastUpdate)(_el); },
        "preferredLanguage": (_el: _Element): void => { preferredLanguage = $._decodePrintableString(_el); },
        "profileIndication": (_el: _Element): void => { profileIndication = $._decode_implicit<ProfileIndication[]>(() => $._decodeSequenceOf<ProfileIndication>(() => _decode_ProfileIndication))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CIAInfo,
        _extension_additions_list_spec_for_CIAInfo,
        _root_component_type_list_2_spec_for_CIAInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CIAInfo(
        version,
        serialNumber,
        manufacturerID,
        label,
        cardflags,
        seInfo,
        recordInfo,
        supportedAlgorithms,
        issuerId,
        holderId,
        lastUpdate,
        preferredLanguage,
        profileIndication,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CIAInfo(el);
}

let _cached_encoder_for_CIAInfo: $.ASN1Encoder<CIAInfo> | null = null;

/**
 * @summary Encodes a(n) CIAInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CIAInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CIAInfo (value: CIAInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CIAInfo) { _cached_encoder_for_CIAInfo = function (value: CIAInfo, elGetter: $.ASN1Encoder<CIAInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CIAInfo_version(value.version, $.BER),
            /* IF_ABSENT  */ ((value.serialNumber === undefined) ? undefined : $._encodeOctetString(value.serialNumber, $.BER)),
            /* IF_ABSENT  */ ((value.manufacturerID === undefined) ? undefined : _encode_Label(value.manufacturerID, $.BER)),
            /* IF_ABSENT  */ ((value.label === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Label, $.BER)(value.label, $.BER)),
            /* REQUIRED   */ _encode_CardFlags(value.cardflags, $.BER),
            /* IF_ABSENT  */ ((value.seInfo === undefined) ? undefined : $._encodeSequenceOf<SecurityEnvironmentInfo>(() => _encode_SecurityEnvironmentInfo, $.BER)(value.seInfo, $.BER)),
            /* IF_ABSENT  */ ((value.recordInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_RecordInfo, $.BER)(value.recordInfo, $.BER)),
            /* IF_ABSENT  */ ((value.supportedAlgorithms === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<AlgorithmInfo>(() => _encode_AlgorithmInfo, $.BER), $.BER)(value.supportedAlgorithms, $.BER)),
            /* IF_ABSENT  */ ((value.issuerId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Label, $.BER)(value.issuerId, $.BER)),
            /* IF_ABSENT  */ ((value.holderId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Label, $.BER)(value.holderId, $.BER)),
            /* IF_ABSENT  */ ((value.lastUpdate === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_LastUpdate, $.BER)(value.lastUpdate, $.BER)),
            /* IF_ABSENT  */ ((value.preferredLanguage === undefined) ? undefined : $._encodePrintableString(value.preferredLanguage, $.BER)),
            /* IF_ABSENT  */ ((value.profileIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<ProfileIndication>(() => _encode_ProfileIndication, $.BER), $.BER)(value.profileIndication, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CIAInfo(value, elGetter);
}


/* eslint-enable */
