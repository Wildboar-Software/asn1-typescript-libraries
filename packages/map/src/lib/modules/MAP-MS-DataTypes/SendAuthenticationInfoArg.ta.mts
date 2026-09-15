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
import { NumberOfRequestedVectors, _decode_NumberOfRequestedVectors, _encode_NumberOfRequestedVectors } from "../MAP-MS-DataTypes/NumberOfRequestedVectors.ta.mjs";
import { Re_synchronisationInfo, _decode_Re_synchronisationInfo, _encode_Re_synchronisationInfo } from "../MAP-MS-DataTypes/Re-synchronisationInfo.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { RequestingNodeType, _enum_for_RequestingNodeType, RequestingNodeType_vlr /* IMPORTED_LONG_ENUMERATION_ITEM */, vlr /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestingNodeType_sgsn /* IMPORTED_LONG_ENUMERATION_ITEM */, sgsn /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestingNodeType_s_cscf /* IMPORTED_LONG_ENUMERATION_ITEM */, s_cscf /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestingNodeType_bsf /* IMPORTED_LONG_ENUMERATION_ITEM */, bsf /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestingNodeType_gan_aaa_server /* IMPORTED_LONG_ENUMERATION_ITEM */, gan_aaa_server /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestingNodeType_wlan_aaa_server /* IMPORTED_LONG_ENUMERATION_ITEM */, wlan_aaa_server /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestingNodeType_mme /* IMPORTED_LONG_ENUMERATION_ITEM */, mme /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestingNodeType_mme_sgsn /* IMPORTED_LONG_ENUMERATION_ITEM */, mme_sgsn /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RequestingNodeType, _encode_RequestingNodeType } from "../MAP-MS-DataTypes/RequestingNodeType.ta.mjs";
import { PLMN_Id, _decode_PLMN_Id, _encode_PLMN_Id } from "../MAP-CommonDataTypes/PLMN-Id.ta.mjs";


/**
 * @summary SendAuthenticationInfoArg
 * @description
 *
 * MAP_SEND_AUTHENTICATION_INFO request. VLR, SGSN, BSF, or IWF retrieves up to
 * five authentication vectors from HLR/HSS. BSF shall request only one vector.
 * IMSI, number of vectors, requesting node type, and requesting PLMN Id shall
 * be in the first request of a dialogue only.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 8.5.2 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendAuthenticationInfoArg ::= SEQUENCE {
 *     imsi    [0] IMSI,
 *     numberOfRequestedVectors    NumberOfRequestedVectors,
 *     segmentationProhibited    NULL    OPTIONAL,
 *     immediateResponsePreferred    [1] NULL    OPTIONAL,
 *     re-synchronisationInfo    Re-synchronisationInfo    OPTIONAL,
 *     extensionContainer    [2] ExtensionContainer    OPTIONAL,
 *     ...,
 *     requestingNodeType    [3] RequestingNodeType    OPTIONAL,
 *     requestingPLMN-Id    [4] PLMN-Id    OPTIONAL,
 *     numberOfRequestedAdditional-Vectors    [5] NumberOfRequestedVectors    OPTIONAL,
 *     additionalVectorsAreForEPS    [6] NULL    OPTIONAL,
 *     ueUsageTypeRequestIndication    [7] NULL    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SendAuthenticationInfoArg {
    constructor (
        /**
         * @summary `imsi`.
         * @description
         *
         * IMSI of the subscriber. Present in the first (or only) request of the
         * dialogue; absent in subsequent requests.
         *
         * (3GPP TS 29.002 V19.1.0 clauses 7.6.2.1 and 8.5.2.3).
         *
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `numberOfRequestedVectors`.
         * @description
         *
         * How many authentication vectors (1..5) the requester is prepared to
         * receive. HLR shall not return more. Present in the first request of a
         * dialogue only.
         *
         * (3GPP TS 29.002 V19.1.0 clauses 8.5.2.3 and 8.1.4).
         *
         * @public
         * @readonly
         */
        readonly numberOfRequestedVectors: NumberOfRequestedVectors,
        /**
         * @summary `segmentationProhibited`.
         * @description
         *
         * If present, the requester does not allow MAP-user segmentation of the
         * response. May be present only in the first request of a dialogue.
         *
         * (3GPP TS 29.002 V19.1.0 clause 8.5.2.3).
         *
         * @public
         * @readonly
         */
        readonly segmentationProhibited: OPTIONAL<NULL>,
        /**
         * @summary `immediateResponsePreferred`.
         * @description
         *
         * One requested vector is for immediate use. HLR may use this with
         * vector counts to decide how many to obtain from the AuC. Ignored if
         * available vectors exceed the requested number. First request of a
         * dialogue only.
         *
         * (3GPP TS 29.002 V19.1.0 clause 8.5.2.3).
         *
         * @public
         * @readonly
         */
        readonly immediateResponsePreferred: OPTIONAL<NULL>,
        /**
         * @summary `re_synchronisationInfo`.
         * @description
         *
         * RAND and AUTS for UMTS/EPS resynchronisation (3GPP TS 33.200). First
         * request of a dialogue only.
         *
         * (3GPP TS 29.002 V19.1.0 clause 8.5.2.3).
         *
         * @public
         * @readonly
         */
        readonly re_synchronisationInfo: OPTIONAL<Re_synchronisationInfo>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `requestingNodeType`.
         * @description
         *
         * SGSN, MME, combined MME/SGSN, VLR, or BSF. First request of a
         * dialogue only. If MME, HSS returns EPS vectors; if not MME, triplets
         * or quintuplets by subscription.
         *
         * (3GPP TS 29.002 V19.1.0 clauses 8.5.2.1 and 8.5.2.3).
         *
         * @public
         * @readonly
         */
        readonly requestingNodeType: OPTIONAL<RequestingNodeType>,
        /**
         * @summary `requestingPLMN_Id`.
         * @description
         *
         * PLMN-ID of the requesting node (3GPP TS 23.003). First request of a
         * dialogue only.
         *
         * (3GPP TS 29.002 V19.1.0 clause 8.5.2.3).
         *
         * @public
         * @readonly
         */
        readonly requestingPLMN_Id: OPTIONAL<PLMN_Id>,
        /**
         * @summary `numberOfRequestedAdditional_Vectors`.
         * @description
         *
         * Additional vectors a combined MME/SGSN or IWF will accept. Present
         * only if requesting node type is combined MME/SGSN. First request of a
         * dialogue only.
         *
         * (3GPP TS 29.002 V19.1.0 clause 8.5.2.3).
         *
         * @public
         * @readonly
         */
        readonly numberOfRequestedAdditional_Vectors: OPTIONAL<NumberOfRequestedVectors>,
        /**
         * @summary `additionalVectorsAreForEPS`.
         * @description
         *
         * Additional (not immediate) vectors are for EPS. Absent if number of
         * additional vectors is absent. First request of a dialogue only.
         *
         * (3GPP TS 29.002 V19.1.0 clause 8.5.2.3).
         *
         * @public
         * @readonly
         */
        readonly additionalVectorsAreForEPS: OPTIONAL<NULL>,
        /**
         * @summary `ueUsageTypeRequestIndication`.
         * @description
         *
         * HLR that supports Dedicated Core Network shall include UE Usage Type
         * in the response. Not applicable for VLRs.
         *
         * (3GPP TS 29.002 V19.1.0 clause 8.5.2.3).
         *
         * @public
         * @readonly
         */
        readonly ueUsageTypeRequestIndication: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SendAuthenticationInfoArg
     * @description
     * 
     * This takes an `object` and converts it to a `SendAuthenticationInfoArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendAuthenticationInfoArg`.
     * @returns {SendAuthenticationInfoArg}
     */
    public static _from_object (_o: { [_K in keyof (SendAuthenticationInfoArg)]: (SendAuthenticationInfoArg)[_K] }): SendAuthenticationInfoArg {
        return new SendAuthenticationInfoArg(_o.imsi, _o.numberOfRequestedVectors, _o.segmentationProhibited, _o.immediateResponsePreferred, _o.re_synchronisationInfo, _o.extensionContainer, _o.requestingNodeType, _o.requestingPLMN_Id, _o.numberOfRequestedAdditional_Vectors, _o.additionalVectorsAreForEPS, _o.ueUsageTypeRequestIndication, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `requestingNodeType`
         * @public
         * @static
         */

    public static _enum_for_requestingNodeType = _enum_for_RequestingNodeType;
}

/**
 * @summary The Leading Root Component Types of SendAuthenticationInfoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendAuthenticationInfoArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numberOfRequestedVectors", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("segmentationProhibited", true, $.hasTag(_TagClass.universal, 5)),
    new $.ComponentSpec("immediateResponsePreferred", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("re-synchronisationInfo", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SendAuthenticationInfoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendAuthenticationInfoArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendAuthenticationInfoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendAuthenticationInfoArg: $.ComponentSpec[] = [
    new $.ComponentSpec("requestingNodeType", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("requestingPLMN-Id", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("numberOfRequestedAdditional-Vectors", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("additionalVectorsAreForEPS", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("ueUsageTypeRequestIndication", true, $.hasTag(_TagClass.context, 7))
];

let _cached_decoder_for_SendAuthenticationInfoArg: $.ASN1Decoder<SendAuthenticationInfoArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendAuthenticationInfoArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendAuthenticationInfoArg (el: _Element): SendAuthenticationInfoArg {
    if (!_cached_decoder_for_SendAuthenticationInfoArg) { _cached_decoder_for_SendAuthenticationInfoArg = function (el: _Element): SendAuthenticationInfoArg {
    let imsi!: IMSI;
    let numberOfRequestedVectors!: NumberOfRequestedVectors;
    let segmentationProhibited: OPTIONAL<NULL> = undefined;
    let immediateResponsePreferred: OPTIONAL<NULL> = undefined;
    let re_synchronisationInfo: OPTIONAL<Re_synchronisationInfo> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let requestingNodeType: OPTIONAL<RequestingNodeType> = undefined;
    let requestingPLMN_Id: OPTIONAL<PLMN_Id> = undefined;
    let numberOfRequestedAdditional_Vectors: OPTIONAL<NumberOfRequestedVectors> = undefined;
    let additionalVectorsAreForEPS: OPTIONAL<NULL> = undefined;
    let ueUsageTypeRequestIndication: OPTIONAL<NULL> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "numberOfRequestedVectors": (_el: _Element): void => { numberOfRequestedVectors = _decode_NumberOfRequestedVectors(_el); },
        "segmentationProhibited": (_el: _Element): void => { segmentationProhibited = $._decodeNull(_el); },
        "immediateResponsePreferred": (_el: _Element): void => { immediateResponsePreferred = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "re-synchronisationInfo": (_el: _Element): void => { re_synchronisationInfo = _decode_Re_synchronisationInfo(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "requestingNodeType": (_el: _Element): void => { requestingNodeType = $._decode_implicit<RequestingNodeType>(() => _decode_RequestingNodeType)(_el); },
        "requestingPLMN-Id": (_el: _Element): void => { requestingPLMN_Id = $._decode_implicit<PLMN_Id>(() => _decode_PLMN_Id)(_el); },
        "numberOfRequestedAdditional-Vectors": (_el: _Element): void => { numberOfRequestedAdditional_Vectors = $._decode_implicit<NumberOfRequestedVectors>(() => _decode_NumberOfRequestedVectors)(_el); },
        "additionalVectorsAreForEPS": (_el: _Element): void => { additionalVectorsAreForEPS = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "ueUsageTypeRequestIndication": (_el: _Element): void => { ueUsageTypeRequestIndication = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendAuthenticationInfoArg,
        _extension_additions_list_spec_for_SendAuthenticationInfoArg,
        _root_component_type_list_2_spec_for_SendAuthenticationInfoArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SendAuthenticationInfoArg(
        imsi,
        numberOfRequestedVectors,
        segmentationProhibited,
        immediateResponsePreferred,
        re_synchronisationInfo,
        extensionContainer,
        requestingNodeType,
        requestingPLMN_Id,
        numberOfRequestedAdditional_Vectors,
        additionalVectorsAreForEPS,
        ueUsageTypeRequestIndication,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SendAuthenticationInfoArg(el);
}

let _cached_encoder_for_SendAuthenticationInfoArg: $.ASN1Encoder<SendAuthenticationInfoArg> | null = null;

/**
 * @summary Encodes a(n) SendAuthenticationInfoArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendAuthenticationInfoArg, encoded as an ASN.1 Element.
 */
export
function _encode_SendAuthenticationInfoArg (value: SendAuthenticationInfoArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendAuthenticationInfoArg) { _cached_encoder_for_SendAuthenticationInfoArg = function (value: SendAuthenticationInfoArg, elGetter: $.ASN1Encoder<SendAuthenticationInfoArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER)(value.imsi, $.BER),
            /* REQUIRED   */ _encode_NumberOfRequestedVectors(value.numberOfRequestedVectors, $.BER),
            /* IF_ABSENT  */ ((value.segmentationProhibited === undefined) ? undefined : $._encodeNull(value.segmentationProhibited, $.BER)),
            /* IF_ABSENT  */ ((value.immediateResponsePreferred === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.immediateResponsePreferred, $.BER)),
            /* IF_ABSENT  */ ((value.re_synchronisationInfo === undefined) ? undefined : _encode_Re_synchronisationInfo(value.re_synchronisationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.requestingNodeType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_RequestingNodeType, $.BER)(value.requestingNodeType, $.BER)),
            /* IF_ABSENT  */ ((value.requestingPLMN_Id === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_PLMN_Id, $.BER)(value.requestingPLMN_Id, $.BER)),
            /* IF_ABSENT  */ ((value.numberOfRequestedAdditional_Vectors === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_NumberOfRequestedVectors, $.BER)(value.numberOfRequestedAdditional_Vectors, $.BER)),
            /* IF_ABSENT  */ ((value.additionalVectorsAreForEPS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER)(value.additionalVectorsAreForEPS, $.BER)),
            /* IF_ABSENT  */ ((value.ueUsageTypeRequestIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value.ueUsageTypeRequestIndication, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SendAuthenticationInfoArg(value, elGetter);
}


/* eslint-enable */
