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
import { ConnectionListItems, _decode_ConnectionListItems, _encode_ConnectionListItems } from "../CSTA-send-message/ConnectionListItems.ta.mjs";
// export { ConnectionListItems, _decode_ConnectionListItems, _encode_ConnectionListItems } from "../CSTA-send-message/ConnectionListItems.ta.mjs";
import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";
// export { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";
import { CallLinkageDataListItems, _decode_CallLinkageDataListItems, _encode_CallLinkageDataListItems } from "../CSTA-send-message/CallLinkageDataListItems.ta.mjs";
// export { CallLinkageDataListItems, _decode_CallLinkageDataListItems, _encode_CallLinkageDataListItems } from "../CSTA-send-message/CallLinkageDataListItems.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary SendMessageResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendMessageResult ::= SEQUENCE
 * {     connectionList             ConnectionListItems,
 *     mediaCallCharacteristics    MediaCallCharacteristics            OPTIONAL,
 *     listOfCallLinkageData         [1] IMPLICIT CallLinkageDataListItems        OPTIONAL,
 *     extensions             CSTACommonArguments                 OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SendMessageResult {
    constructor (
        /**
         * @summary `connectionList`.
         * @public
         * @readonly
         */
        readonly connectionList: ConnectionListItems,
        /**
         * @summary `mediaCallCharacteristics`.
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
        /**
         * @summary `listOfCallLinkageData`.
         * @public
         * @readonly
         */
        readonly listOfCallLinkageData: OPTIONAL<CallLinkageDataListItems>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SendMessageResult
     * @description
     * 
     * This takes an `object` and converts it to a `SendMessageResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendMessageResult`.
     * @returns {SendMessageResult}
     */
    public static _from_object (_o: { [_K in keyof (SendMessageResult)]: (SendMessageResult)[_K] }): SendMessageResult {
        return new SendMessageResult(_o.connectionList, _o.mediaCallCharacteristics, _o.listOfCallLinkageData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SendMessageResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendMessageResult: $.ComponentSpec[] = [
    new $.ComponentSpec("connectionList", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("listOfCallLinkageData", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SendMessageResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendMessageResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendMessageResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendMessageResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SendMessageResult: $.ASN1Decoder<SendMessageResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendMessageResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendMessageResult (el: _Element): SendMessageResult {
    if (!_cached_decoder_for_SendMessageResult) { _cached_decoder_for_SendMessageResult = function (el: _Element): SendMessageResult {
    let connectionList!: ConnectionListItems;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let listOfCallLinkageData: OPTIONAL<CallLinkageDataListItems>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connectionList": (_el: _Element): void => { connectionList = _decode_ConnectionListItems(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = _decode_MediaCallCharacteristics(_el); },
        "listOfCallLinkageData": (_el: _Element): void => { listOfCallLinkageData = $._decode_implicit<CallLinkageDataListItems>(() => _decode_CallLinkageDataListItems)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendMessageResult,
        _extension_additions_list_spec_for_SendMessageResult,
        _root_component_type_list_2_spec_for_SendMessageResult,
        undefined,
    );
    return new SendMessageResult(
        connectionList,
        mediaCallCharacteristics,
        listOfCallLinkageData,
        extensions
    );
}; }
    return _cached_decoder_for_SendMessageResult(el);
}

let _cached_encoder_for_SendMessageResult: $.ASN1Encoder<SendMessageResult> | null = null;

/**
 * @summary Encodes a(n) SendMessageResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendMessageResult, encoded as an ASN.1 Element.
 */
export
function _encode_SendMessageResult (value: SendMessageResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendMessageResult) { _cached_encoder_for_SendMessageResult = function (value: SendMessageResult, elGetter: $.ASN1Encoder<SendMessageResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionListItems(value.connectionList, $.BER),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : _encode_MediaCallCharacteristics(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.listOfCallLinkageData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallLinkageDataListItems, $.BER)(value.listOfCallLinkageData, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SendMessageResult(value, elGetter);
}


/* eslint-enable */
