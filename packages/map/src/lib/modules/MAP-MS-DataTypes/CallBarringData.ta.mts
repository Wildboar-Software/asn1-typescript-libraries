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
import { Ext_CallBarFeatureList, _decode_Ext_CallBarFeatureList, _encode_Ext_CallBarFeatureList } from "../MAP-MS-DataTypes/Ext-CallBarFeatureList.ta.mjs";
// export { Ext_CallBarFeatureList, _decode_Ext_CallBarFeatureList, _encode_Ext_CallBarFeatureList } from "../MAP-MS-DataTypes/Ext-CallBarFeatureList.ta.mjs";
import { Password, _decode_Password, _encode_Password } from "../MAP-SS-DataTypes/Password.ta.mjs";
// export { Password, _decode_Password, _encode_Password } from "../MAP-SS-DataTypes/Password.ta.mjs";
import { WrongPasswordAttemptsCounter, _decode_WrongPasswordAttemptsCounter, _encode_WrongPasswordAttemptsCounter } from "../MAP-MS-DataTypes/WrongPasswordAttemptsCounter.ta.mjs";
// export { WrongPasswordAttemptsCounter, _decode_WrongPasswordAttemptsCounter, _encode_WrongPasswordAttemptsCounter } from "../MAP-MS-DataTypes/WrongPasswordAttemptsCounter.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary CallBarringData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBarringData ::= SEQUENCE {
 *     callBarringFeatureList    Ext-CallBarFeatureList,
 *     password    Password    OPTIONAL,
 *     wrongPasswordAttemptsCounter    WrongPasswordAttemptsCounter    OPTIONAL,
 *     notificationToCSE    NULL    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class CallBarringData {
    constructor (
        /**
         * @summary `callBarringFeatureList`.
         * @public
         * @readonly
         */
        readonly callBarringFeatureList: Ext_CallBarFeatureList,
        /**
         * @summary `password`.
         * @public
         * @readonly
         */
        readonly password: OPTIONAL<Password>,
        /**
         * @summary `wrongPasswordAttemptsCounter`.
         * @public
         * @readonly
         */
        readonly wrongPasswordAttemptsCounter: OPTIONAL<WrongPasswordAttemptsCounter>,
        /**
         * @summary `notificationToCSE`.
         * @public
         * @readonly
         */
        readonly notificationToCSE: OPTIONAL<NULL>,
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
     * @summary Restructures an object into a CallBarringData
     * @description
     * 
     * This takes an `object` and converts it to a `CallBarringData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallBarringData`.
     * @returns {CallBarringData}
     */
    public static _from_object (_o: { [_K in keyof (CallBarringData)]: (CallBarringData)[_K] }): CallBarringData {
        return new CallBarringData(_o.callBarringFeatureList, _o.password, _o.wrongPasswordAttemptsCounter, _o.notificationToCSE, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CallBarringData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallBarringData: $.ComponentSpec[] = [
    new $.ComponentSpec("callBarringFeatureList", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("password", true, $.hasTag(_TagClass.universal, 18), undefined, undefined),
    new $.ComponentSpec("wrongPasswordAttemptsCounter", true, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("notificationToCSE", true, $.hasTag(_TagClass.universal, 5), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CallBarringData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallBarringData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallBarringData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallBarringData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallBarringData: $.ASN1Decoder<CallBarringData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBarringData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBarringData (el: _Element): CallBarringData {
    if (!_cached_decoder_for_CallBarringData) { _cached_decoder_for_CallBarringData = function (el: _Element): CallBarringData {
    let callBarringFeatureList!: Ext_CallBarFeatureList;
    let password: OPTIONAL<Password>;
    let wrongPasswordAttemptsCounter: OPTIONAL<WrongPasswordAttemptsCounter>;
    let notificationToCSE: OPTIONAL<NULL>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "callBarringFeatureList": (_el: _Element): void => { callBarringFeatureList = _decode_Ext_CallBarFeatureList(_el); },
        "password": (_el: _Element): void => { password = _decode_Password(_el); },
        "wrongPasswordAttemptsCounter": (_el: _Element): void => { wrongPasswordAttemptsCounter = _decode_WrongPasswordAttemptsCounter(_el); },
        "notificationToCSE": (_el: _Element): void => { notificationToCSE = $._decodeNull(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallBarringData,
        _extension_additions_list_spec_for_CallBarringData,
        _root_component_type_list_2_spec_for_CallBarringData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CallBarringData(
        callBarringFeatureList,
        password,
        wrongPasswordAttemptsCounter,
        notificationToCSE,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CallBarringData(el);
}

let _cached_encoder_for_CallBarringData: $.ASN1Encoder<CallBarringData> | null = null;

/**
 * @summary Encodes a(n) CallBarringData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBarringData, encoded as an ASN.1 Element.
 */
export
function _encode_CallBarringData (value: CallBarringData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBarringData) { _cached_encoder_for_CallBarringData = function (value: CallBarringData, elGetter: $.ASN1Encoder<CallBarringData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Ext_CallBarFeatureList(value.callBarringFeatureList, $.BER),
            /* IF_ABSENT  */ ((value.password === undefined) ? undefined : _encode_Password(value.password, $.BER)),
            /* IF_ABSENT  */ ((value.wrongPasswordAttemptsCounter === undefined) ? undefined : _encode_WrongPasswordAttemptsCounter(value.wrongPasswordAttemptsCounter, $.BER)),
            /* IF_ABSENT  */ ((value.notificationToCSE === undefined) ? undefined : $._encodeNull(value.notificationToCSE, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallBarringData(value, elGetter);
}


/* eslint-enable */
