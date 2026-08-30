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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { ExternalSignalInfo, _decode_ExternalSignalInfo, _encode_ExternalSignalInfo } from "../MAP-CommonDataTypes/ExternalSignalInfo.ta.mjs";
// export { ExternalSignalInfo, _decode_ExternalSignalInfo, _encode_ExternalSignalInfo } from "../MAP-CommonDataTypes/ExternalSignalInfo.ta.mjs";
import { CCBS_Feature, _decode_CCBS_Feature, _encode_CCBS_Feature } from "../MAP-SS-DataTypes/CCBS-Feature.ta.mjs";
// export { CCBS_Feature, _decode_CCBS_Feature, _encode_CCBS_Feature } from "../MAP-SS-DataTypes/CCBS-Feature.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../MAP-CommonDataTypes/AlertingPattern.ta.mjs";
// export { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../MAP-CommonDataTypes/AlertingPattern.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary RemoteUserFreeArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUserFreeArg ::= SEQUENCE{
 *     imsi    [0]    IMSI,
 *     callInfo    [1]    ExternalSignalInfo,
 *     ccbs-Feature    [2]    CCBS-Feature,
 *     translatedB-Number    [3]    ISDN-AddressString,
 *     replaceB-Number    [4]    NULL    OPTIONAL,
 *     alertingPattern    [5]    AlertingPattern    OPTIONAL,
 *     extensionContainer    [6]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class RemoteUserFreeArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `callInfo`.
         * @public
         * @readonly
         */
        readonly callInfo: ExternalSignalInfo,
        /**
         * @summary `ccbs_Feature`.
         * @public
         * @readonly
         */
        readonly ccbs_Feature: CCBS_Feature,
        /**
         * @summary `translatedB_Number`.
         * @public
         * @readonly
         */
        readonly translatedB_Number: ISDN_AddressString,
        /**
         * @summary `replaceB_Number`.
         * @public
         * @readonly
         */
        readonly replaceB_Number: OPTIONAL<NULL>,
        /**
         * @summary `alertingPattern`.
         * @public
         * @readonly
         */
        readonly alertingPattern: OPTIONAL<AlertingPattern>,
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
     * @summary Restructures an object into a RemoteUserFreeArg
     * @description
     * 
     * This takes an `object` and converts it to a `RemoteUserFreeArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RemoteUserFreeArg`.
     * @returns {RemoteUserFreeArg}
     */
    public static _from_object (_o: { [_K in keyof (RemoteUserFreeArg)]: (RemoteUserFreeArg)[_K] }): RemoteUserFreeArg {
        return new RemoteUserFreeArg(_o.imsi, _o.callInfo, _o.ccbs_Feature, _o.translatedB_Number, _o.replaceB_Number, _o.alertingPattern, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RemoteUserFreeArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RemoteUserFreeArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("callInfo", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("ccbs-Feature", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("translatedB-Number", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("replaceB-Number", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 6), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RemoteUserFreeArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RemoteUserFreeArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RemoteUserFreeArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RemoteUserFreeArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RemoteUserFreeArg: $.ASN1Decoder<RemoteUserFreeArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoteUserFreeArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoteUserFreeArg (el: _Element): RemoteUserFreeArg {
    if (!_cached_decoder_for_RemoteUserFreeArg) { _cached_decoder_for_RemoteUserFreeArg = function (el: _Element): RemoteUserFreeArg {
    let imsi!: IMSI;
    let callInfo!: ExternalSignalInfo;
    let ccbs_Feature!: CCBS_Feature;
    let translatedB_Number!: ISDN_AddressString;
    let replaceB_Number: OPTIONAL<NULL>;
    let alertingPattern: OPTIONAL<AlertingPattern>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "callInfo": (_el: _Element): void => { callInfo = $._decode_implicit<ExternalSignalInfo>(() => _decode_ExternalSignalInfo)(_el); },
        "ccbs-Feature": (_el: _Element): void => { ccbs_Feature = $._decode_implicit<CCBS_Feature>(() => _decode_CCBS_Feature)(_el); },
        "translatedB-Number": (_el: _Element): void => { translatedB_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "replaceB-Number": (_el: _Element): void => { replaceB_Number = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RemoteUserFreeArg,
        _extension_additions_list_spec_for_RemoteUserFreeArg,
        _root_component_type_list_2_spec_for_RemoteUserFreeArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RemoteUserFreeArg(
        imsi,
        callInfo,
        ccbs_Feature,
        translatedB_Number,
        replaceB_Number,
        alertingPattern,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RemoteUserFreeArg(el);
}

let _cached_encoder_for_RemoteUserFreeArg: $.ASN1Encoder<RemoteUserFreeArg> | null = null;

/**
 * @summary Encodes a(n) RemoteUserFreeArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteUserFreeArg, encoded as an ASN.1 Element.
 */
export
function _encode_RemoteUserFreeArg (value: RemoteUserFreeArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoteUserFreeArg) { _cached_encoder_for_RemoteUserFreeArg = function (value: RemoteUserFreeArg, elGetter: $.ASN1Encoder<RemoteUserFreeArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER)(value.imsi, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ExternalSignalInfo, $.BER)(value.callInfo, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_CCBS_Feature, $.BER)(value.ccbs_Feature, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_ISDN_AddressString, $.BER)(value.translatedB_Number, $.BER),
            /* IF_ABSENT  */ ((value.replaceB_Number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.replaceB_Number, $.BER)),
            /* IF_ABSENT  */ ((value.alertingPattern === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_AlertingPattern, $.BER)(value.alertingPattern, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RemoteUserFreeArg(value, elGetter);
}


/* eslint-enable */
