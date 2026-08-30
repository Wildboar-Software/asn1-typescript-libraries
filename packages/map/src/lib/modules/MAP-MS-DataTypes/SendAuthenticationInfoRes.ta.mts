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
import { AuthenticationSetList, _decode_AuthenticationSetList, _encode_AuthenticationSetList } from "../MAP-MS-DataTypes/AuthenticationSetList.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { EPS_AuthenticationSetList, _decode_EPS_AuthenticationSetList, _encode_EPS_AuthenticationSetList } from "../MAP-MS-DataTypes/EPS-AuthenticationSetList.ta.mjs";
import { UE_UsageType, _decode_UE_UsageType, _encode_UE_UsageType } from "../MAP-MS-DataTypes/UE-UsageType.ta.mjs";


/**
 * @summary SendAuthenticationInfoRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendAuthenticationInfoRes ::= [3] SEQUENCE {
 *     authenticationSetList    AuthenticationSetList    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     eps-AuthenticationSetList    [2] EPS-AuthenticationSetList    OPTIONAL,
 *     ueUsageType    [3] UE-UsageType    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SendAuthenticationInfoRes {
    constructor (
        /**
         * @summary `authenticationSetList`.
         * @public
         * @readonly
         */
        readonly authenticationSetList: OPTIONAL<AuthenticationSetList>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `eps_AuthenticationSetList`.
         * @public
         * @readonly
         */
        readonly eps_AuthenticationSetList: OPTIONAL<EPS_AuthenticationSetList>,
        /**
         * @summary `ueUsageType`.
         * @public
         * @readonly
         */
        readonly ueUsageType: OPTIONAL<UE_UsageType>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SendAuthenticationInfoRes
     * @description
     * 
     * This takes an `object` and converts it to a `SendAuthenticationInfoRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendAuthenticationInfoRes`.
     * @returns {SendAuthenticationInfoRes}
     */
    public static _from_object (_o: { [_K in keyof (SendAuthenticationInfoRes)]: (SendAuthenticationInfoRes)[_K] }): SendAuthenticationInfoRes {
        return new SendAuthenticationInfoRes(_o.authenticationSetList, _o.extensionContainer, _o.eps_AuthenticationSetList, _o.ueUsageType, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SendAuthenticationInfoRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendAuthenticationInfoRes: $.ComponentSpec[] = [
    new $.ComponentSpec("authenticationSetList", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1))),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of SendAuthenticationInfoRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendAuthenticationInfoRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendAuthenticationInfoRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendAuthenticationInfoRes: $.ComponentSpec[] = [
    new $.ComponentSpec("eps-AuthenticationSetList", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ueUsageType", true, $.hasTag(_TagClass.context, 3))
];

let _cached_decoder_for_SendAuthenticationInfoRes: $.ASN1Decoder<SendAuthenticationInfoRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendAuthenticationInfoRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendAuthenticationInfoRes (el: _Element): SendAuthenticationInfoRes {
    if (!_cached_decoder_for_SendAuthenticationInfoRes) { _cached_decoder_for_SendAuthenticationInfoRes = $._decode_implicit<SendAuthenticationInfoRes>(() => function (el: _Element): SendAuthenticationInfoRes {
    let authenticationSetList: OPTIONAL<AuthenticationSetList> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let eps_AuthenticationSetList: OPTIONAL<EPS_AuthenticationSetList> = undefined;
    let ueUsageType: OPTIONAL<UE_UsageType> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "authenticationSetList": (_el: _Element): void => { authenticationSetList = _decode_AuthenticationSetList(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "eps-AuthenticationSetList": (_el: _Element): void => { eps_AuthenticationSetList = $._decode_implicit<EPS_AuthenticationSetList>(() => _decode_EPS_AuthenticationSetList)(_el); },
        "ueUsageType": (_el: _Element): void => { ueUsageType = $._decode_implicit<UE_UsageType>(() => _decode_UE_UsageType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendAuthenticationInfoRes,
        _extension_additions_list_spec_for_SendAuthenticationInfoRes,
        _root_component_type_list_2_spec_for_SendAuthenticationInfoRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SendAuthenticationInfoRes(
        authenticationSetList,
        extensionContainer,
        eps_AuthenticationSetList,
        ueUsageType,
        _unrecognizedExtensionsList
    );
}); }
    return _cached_decoder_for_SendAuthenticationInfoRes(el);
}

let _cached_encoder_for_SendAuthenticationInfoRes: $.ASN1Encoder<SendAuthenticationInfoRes> | null = null;

/**
 * @summary Encodes a(n) SendAuthenticationInfoRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendAuthenticationInfoRes, encoded as an ASN.1 Element.
 */
export
function _encode_SendAuthenticationInfoRes (value: SendAuthenticationInfoRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendAuthenticationInfoRes) { _cached_encoder_for_SendAuthenticationInfoRes = $._encode_implicit(_TagClass.context, 3, () => function (value: SendAuthenticationInfoRes, elGetter: $.ASN1Encoder<SendAuthenticationInfoRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.authenticationSetList === undefined) ? undefined : _encode_AuthenticationSetList(value.authenticationSetList, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.eps_AuthenticationSetList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_EPS_AuthenticationSetList, $.BER)(value.eps_AuthenticationSetList, $.BER)),
            /* IF_ABSENT  */ ((value.ueUsageType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_UE_UsageType, $.BER)(value.ueUsageType, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_SendAuthenticationInfoRes(value, elGetter);
}


/* eslint-enable */
