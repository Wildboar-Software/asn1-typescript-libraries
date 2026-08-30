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
import { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
// export { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
import { Ext_CallBarFeatureList, _decode_Ext_CallBarFeatureList, _encode_Ext_CallBarFeatureList } from "../MAP-MS-DataTypes/Ext-CallBarFeatureList.ta.mjs";
// export { Ext_CallBarFeatureList, _decode_Ext_CallBarFeatureList, _encode_Ext_CallBarFeatureList } from "../MAP-MS-DataTypes/Ext-CallBarFeatureList.ta.mjs";
import { Password, _decode_Password, _encode_Password } from "../MAP-SS-DataTypes/Password.ta.mjs";
// export { Password, _decode_Password, _encode_Password } from "../MAP-SS-DataTypes/Password.ta.mjs";
import { WrongPasswordAttemptsCounter, _decode_WrongPasswordAttemptsCounter, _encode_WrongPasswordAttemptsCounter } from "../MAP-MS-DataTypes/WrongPasswordAttemptsCounter.ta.mjs";
// export { WrongPasswordAttemptsCounter, _decode_WrongPasswordAttemptsCounter, _encode_WrongPasswordAttemptsCounter } from "../MAP-MS-DataTypes/WrongPasswordAttemptsCounter.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary Ext_CallBarringInfoFor_CSE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-CallBarringInfoFor-CSE ::= SEQUENCE {
 *     ss-Code    [0]    SS-Code,
 *     callBarringFeatureList    [1]    Ext-CallBarFeatureList,
 *     password    [2]    Password    OPTIONAL,
 *     wrongPasswordAttemptsCounter    [3]    WrongPasswordAttemptsCounter    OPTIONAL,
 *     notificationToCSE    [4]    NULL    OPTIONAL,
 *     extensionContainer    [5]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class Ext_CallBarringInfoFor_CSE {
    constructor (
        /**
         * @summary `ss_Code`.
         * @public
         * @readonly
         */
        readonly ss_Code: SS_Code,
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
     * @summary Restructures an object into a Ext_CallBarringInfoFor_CSE
     * @description
     * 
     * This takes an `object` and converts it to a `Ext_CallBarringInfoFor_CSE`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Ext_CallBarringInfoFor_CSE`.
     * @returns {Ext_CallBarringInfoFor_CSE}
     */
    public static _from_object (_o: { [_K in keyof (Ext_CallBarringInfoFor_CSE)]: (Ext_CallBarringInfoFor_CSE)[_K] }): Ext_CallBarringInfoFor_CSE {
        return new Ext_CallBarringInfoFor_CSE(_o.ss_Code, _o.callBarringFeatureList, _o.password, _o.wrongPasswordAttemptsCounter, _o.notificationToCSE, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Ext_CallBarringInfoFor_CSE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Ext_CallBarringInfoFor_CSE: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Code", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("callBarringFeatureList", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("password", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("wrongPasswordAttemptsCounter", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("notificationToCSE", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 5), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of Ext_CallBarringInfoFor_CSE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Ext_CallBarringInfoFor_CSE: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Ext_CallBarringInfoFor_CSE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Ext_CallBarringInfoFor_CSE: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Ext_CallBarringInfoFor_CSE: $.ASN1Decoder<Ext_CallBarringInfoFor_CSE> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_CallBarringInfoFor_CSE
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_CallBarringInfoFor_CSE (el: _Element): Ext_CallBarringInfoFor_CSE {
    if (!_cached_decoder_for_Ext_CallBarringInfoFor_CSE) { _cached_decoder_for_Ext_CallBarringInfoFor_CSE = function (el: _Element): Ext_CallBarringInfoFor_CSE {
    let ss_Code!: SS_Code;
    let callBarringFeatureList!: Ext_CallBarFeatureList;
    let password: OPTIONAL<Password>;
    let wrongPasswordAttemptsCounter: OPTIONAL<WrongPasswordAttemptsCounter>;
    let notificationToCSE: OPTIONAL<NULL>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Code": (_el: _Element): void => { ss_Code = $._decode_implicit<SS_Code>(() => _decode_SS_Code)(_el); },
        "callBarringFeatureList": (_el: _Element): void => { callBarringFeatureList = $._decode_implicit<Ext_CallBarFeatureList>(() => _decode_Ext_CallBarFeatureList)(_el); },
        "password": (_el: _Element): void => { password = $._decode_implicit<Password>(() => _decode_Password)(_el); },
        "wrongPasswordAttemptsCounter": (_el: _Element): void => { wrongPasswordAttemptsCounter = $._decode_implicit<WrongPasswordAttemptsCounter>(() => _decode_WrongPasswordAttemptsCounter)(_el); },
        "notificationToCSE": (_el: _Element): void => { notificationToCSE = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Ext_CallBarringInfoFor_CSE,
        _extension_additions_list_spec_for_Ext_CallBarringInfoFor_CSE,
        _root_component_type_list_2_spec_for_Ext_CallBarringInfoFor_CSE,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Ext_CallBarringInfoFor_CSE(
        ss_Code,
        callBarringFeatureList,
        password,
        wrongPasswordAttemptsCounter,
        notificationToCSE,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Ext_CallBarringInfoFor_CSE(el);
}

let _cached_encoder_for_Ext_CallBarringInfoFor_CSE: $.ASN1Encoder<Ext_CallBarringInfoFor_CSE> | null = null;

/**
 * @summary Encodes a(n) Ext_CallBarringInfoFor_CSE into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_CallBarringInfoFor_CSE, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_CallBarringInfoFor_CSE (value: Ext_CallBarringInfoFor_CSE, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_CallBarringInfoFor_CSE) { _cached_encoder_for_Ext_CallBarringInfoFor_CSE = function (value: Ext_CallBarringInfoFor_CSE, elGetter: $.ASN1Encoder<Ext_CallBarringInfoFor_CSE>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SS_Code, $.BER)(value.ss_Code, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Ext_CallBarFeatureList, $.BER)(value.callBarringFeatureList, $.BER),
            /* IF_ABSENT  */ ((value.password === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Password, $.BER)(value.password, $.BER)),
            /* IF_ABSENT  */ ((value.wrongPasswordAttemptsCounter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_WrongPasswordAttemptsCounter, $.BER)(value.wrongPasswordAttemptsCounter, $.BER)),
            /* IF_ABSENT  */ ((value.notificationToCSE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.notificationToCSE, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Ext_CallBarringInfoFor_CSE(value, elGetter);
}


/* eslint-enable */
