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
import { AuthenticationSetList, _decode_AuthenticationSetList, _encode_AuthenticationSetList } from "../MAP-MS-DataTypes/AuthenticationSetList.ta.mjs";
import { CurrentSecurityContext, _decode_CurrentSecurityContext, _encode_CurrentSecurityContext } from "../MAP-MS-DataTypes/CurrentSecurityContext.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { PLMN_Id, _decode_PLMN_Id, _encode_PLMN_Id } from "../MAP-CommonDataTypes/PLMN-Id.ta.mjs";


/**
 * @summary SendIdentificationRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendIdentificationRes ::= [3] SEQUENCE {
 *     imsi    IMSI    OPTIONAL,
 *     -- IMSI shall be present in the first (or only) service response of a dialogue.
 *     -- If multiple service requests are present in a dialogue then IMSI
 *     -- shall not be present in any service response other than the first one.
 *     authenticationSetList    AuthenticationSetList    OPTIONAL,
 *     currentSecurityContext    [2]CurrentSecurityContext    OPTIONAL,
 *     extensionContainer    [3] ExtensionContainer    OPTIONAL,
 *     ...,
 *     lastUsedLtePLMN-Id    [4] PLMN-Id    OPTIONAL,
 *     mtCallPendingFlag    [5]    NULL    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SendIdentificationRes {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<IMSI>,
        /**
         * @summary `authenticationSetList`.
         * @public
         * @readonly
         */
        readonly authenticationSetList: OPTIONAL<AuthenticationSetList>,
        /**
         * @summary `currentSecurityContext`.
         * @public
         * @readonly
         */
        readonly currentSecurityContext: OPTIONAL<CurrentSecurityContext>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `lastUsedLtePLMN_Id`.
         * @public
         * @readonly
         */
        readonly lastUsedLtePLMN_Id: OPTIONAL<PLMN_Id>,
        /**
         * @summary `mtCallPendingFlag`.
         * @public
         * @readonly
         */
        readonly mtCallPendingFlag: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SendIdentificationRes
     * @description
     * 
     * This takes an `object` and converts it to a `SendIdentificationRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendIdentificationRes`.
     * @returns {SendIdentificationRes}
     */
    public static _from_object (_o: { [_K in keyof (SendIdentificationRes)]: (SendIdentificationRes)[_K] }): SendIdentificationRes {
        return new SendIdentificationRes(_o.imsi, _o.authenticationSetList, _o.currentSecurityContext, _o.extensionContainer, _o.lastUsedLtePLMN_Id, _o.mtCallPendingFlag, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SendIdentificationRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendIdentificationRes: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("authenticationSetList", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1))),
    new $.ComponentSpec("currentSecurityContext", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of SendIdentificationRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendIdentificationRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendIdentificationRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendIdentificationRes: $.ComponentSpec[] = [
    new $.ComponentSpec("lastUsedLtePLMN-Id", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mtCallPendingFlag", true, $.hasTag(_TagClass.context, 5))
];

let _cached_decoder_for_SendIdentificationRes: $.ASN1Decoder<SendIdentificationRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendIdentificationRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendIdentificationRes (el: _Element): SendIdentificationRes {
    if (!_cached_decoder_for_SendIdentificationRes) { _cached_decoder_for_SendIdentificationRes = $._decode_implicit<SendIdentificationRes>(() => function (el: _Element): SendIdentificationRes {
    let imsi: OPTIONAL<IMSI> = undefined;
    let authenticationSetList: OPTIONAL<AuthenticationSetList> = undefined;
    let currentSecurityContext: OPTIONAL<CurrentSecurityContext> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let lastUsedLtePLMN_Id: OPTIONAL<PLMN_Id> = undefined;
    let mtCallPendingFlag: OPTIONAL<NULL> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = _decode_IMSI(_el); },
        "authenticationSetList": (_el: _Element): void => { authenticationSetList = _decode_AuthenticationSetList(_el); },
        "currentSecurityContext": (_el: _Element): void => { currentSecurityContext = $._decode_explicit<CurrentSecurityContext>(() => _decode_CurrentSecurityContext)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "lastUsedLtePLMN-Id": (_el: _Element): void => { lastUsedLtePLMN_Id = $._decode_implicit<PLMN_Id>(() => _decode_PLMN_Id)(_el); },
        "mtCallPendingFlag": (_el: _Element): void => { mtCallPendingFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendIdentificationRes,
        _extension_additions_list_spec_for_SendIdentificationRes,
        _root_component_type_list_2_spec_for_SendIdentificationRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SendIdentificationRes(
        imsi,
        authenticationSetList,
        currentSecurityContext,
        extensionContainer,
        lastUsedLtePLMN_Id,
        mtCallPendingFlag,
        _unrecognizedExtensionsList
    );
}); }
    return _cached_decoder_for_SendIdentificationRes(el);
}

let _cached_encoder_for_SendIdentificationRes: $.ASN1Encoder<SendIdentificationRes> | null = null;

/**
 * @summary Encodes a(n) SendIdentificationRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendIdentificationRes, encoded as an ASN.1 Element.
 */
export
function _encode_SendIdentificationRes (value: SendIdentificationRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendIdentificationRes) { _cached_encoder_for_SendIdentificationRes = $._encode_implicit(_TagClass.context, 3, () => function (value: SendIdentificationRes, elGetter: $.ASN1Encoder<SendIdentificationRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : _encode_IMSI(value.imsi, $.BER)),
            /* IF_ABSENT  */ ((value.authenticationSetList === undefined) ? undefined : _encode_AuthenticationSetList(value.authenticationSetList, $.BER)),
            /* IF_ABSENT  */ ((value.currentSecurityContext === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_CurrentSecurityContext, $.BER)(value.currentSecurityContext, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.lastUsedLtePLMN_Id === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_PLMN_Id, $.BER)(value.lastUsedLtePLMN_Id, $.BER)),
            /* IF_ABSENT  */ ((value.mtCallPendingFlag === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER)(value.mtCallPendingFlag, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_SendIdentificationRes(value, elGetter);
}


/* eslint-enable */
