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
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
// export { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
import { UserData, _decode_UserData, _encode_UserData } from "../CSTA-device-feature-types/UserData.ta.mjs";
// export { UserData, _decode_UserData, _encode_UserData } from "../CSTA-device-feature-types/UserData.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary SendUserInfoArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendUserInfoArgument ::= SEQUENCE
 * {    existingCall            ConnectionID,
 *     userData            UserData,
 *     extensions            CSTACommonArguments        OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SendUserInfoArgument {
    constructor (
        /**
         * @summary `existingCall`.
         * @public
         * @readonly
         */
        readonly existingCall: ConnectionID,
        /**
         * @summary `userData`.
         * @public
         * @readonly
         */
        readonly userData: UserData,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SendUserInfoArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SendUserInfoArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendUserInfoArgument`.
     * @returns {SendUserInfoArgument}
     */
    public static _from_object (_o: { [_K in keyof (SendUserInfoArgument)]: (SendUserInfoArgument)[_K] }): SendUserInfoArgument {
        return new SendUserInfoArgument(_o.existingCall, _o.userData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SendUserInfoArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendUserInfoArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("existingCall", false, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("userData", false, $.hasTag(_TagClass.application, 29), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SendUserInfoArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendUserInfoArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendUserInfoArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendUserInfoArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SendUserInfoArgument: $.ASN1Decoder<SendUserInfoArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendUserInfoArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendUserInfoArgument (el: _Element): SendUserInfoArgument {
    if (!_cached_decoder_for_SendUserInfoArgument) { _cached_decoder_for_SendUserInfoArgument = function (el: _Element): SendUserInfoArgument {
    let existingCall!: ConnectionID;
    let userData!: UserData;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "existingCall": (_el: _Element): void => { existingCall = _decode_ConnectionID(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendUserInfoArgument,
        _extension_additions_list_spec_for_SendUserInfoArgument,
        _root_component_type_list_2_spec_for_SendUserInfoArgument,
        undefined,
    );
    return new SendUserInfoArgument(
        existingCall,
        userData,
        extensions
    );
}; }
    return _cached_decoder_for_SendUserInfoArgument(el);
}

let _cached_encoder_for_SendUserInfoArgument: $.ASN1Encoder<SendUserInfoArgument> | null = null;

/**
 * @summary Encodes a(n) SendUserInfoArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendUserInfoArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SendUserInfoArgument (value: SendUserInfoArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendUserInfoArgument) { _cached_encoder_for_SendUserInfoArgument = function (value: SendUserInfoArgument, elGetter: $.ASN1Encoder<SendUserInfoArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.existingCall, $.BER),
            /* REQUIRED   */ _encode_UserData(value.userData, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SendUserInfoArgument(value, elGetter);
}


/* eslint-enable */
