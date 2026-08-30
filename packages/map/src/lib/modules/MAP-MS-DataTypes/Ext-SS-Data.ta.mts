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
import { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
import { Ext_SS_Status, _decode_Ext_SS_Status, _encode_Ext_SS_Status } from "../MAP-CommonDataTypes/Ext-SS-Status.ta.mjs";
import { SS_SubscriptionOption, _decode_SS_SubscriptionOption, _encode_SS_SubscriptionOption } from "../MAP-SS-DataTypes/SS-SubscriptionOption.ta.mjs";
import { Ext_BasicServiceGroupList, _decode_Ext_BasicServiceGroupList, _encode_Ext_BasicServiceGroupList } from "../MAP-MS-DataTypes/Ext-BasicServiceGroupList.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary Ext_SS_Data
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-SS-Data ::= SEQUENCE {
 *     ss-Code    SS-Code,
 *     ss-Status    [4] Ext-SS-Status,
 *     ss-SubscriptionOption    SS-SubscriptionOption    OPTIONAL,
 *     basicServiceGroupList    Ext-BasicServiceGroupList    OPTIONAL,
 *     extensionContainer    [5] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class Ext_SS_Data {
    constructor (
        /**
         * @summary `ss_Code`.
         * @public
         * @readonly
         */
        readonly ss_Code: SS_Code,
        /**
         * @summary `ss_Status`.
         * @public
         * @readonly
         */
        readonly ss_Status: Ext_SS_Status,
        /**
         * @summary `ss_SubscriptionOption`.
         * @public
         * @readonly
         */
        readonly ss_SubscriptionOption: OPTIONAL<SS_SubscriptionOption>,
        /**
         * @summary `basicServiceGroupList`.
         * @public
         * @readonly
         */
        readonly basicServiceGroupList: OPTIONAL<Ext_BasicServiceGroupList>,
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
     * @summary Restructures an object into a Ext_SS_Data
     * @description
     * 
     * This takes an `object` and converts it to a `Ext_SS_Data`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Ext_SS_Data`.
     * @returns {Ext_SS_Data}
     */
    public static _from_object (_o: { [_K in keyof (Ext_SS_Data)]: (Ext_SS_Data)[_K] }): Ext_SS_Data {
        return new Ext_SS_Data(_o.ss_Code, _o.ss_Status, _o.ss_SubscriptionOption, _o.basicServiceGroupList, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Ext_SS_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Ext_SS_Data: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Code", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("ss-Status", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("ss-SubscriptionOption", true, $.or($.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 1))),
    new $.ComponentSpec("basicServiceGroupList", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of Ext_SS_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Ext_SS_Data: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Ext_SS_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Ext_SS_Data: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Ext_SS_Data: $.ASN1Decoder<Ext_SS_Data> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_SS_Data
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_SS_Data (el: _Element): Ext_SS_Data {
    if (!_cached_decoder_for_Ext_SS_Data) { _cached_decoder_for_Ext_SS_Data = function (el: _Element): Ext_SS_Data {
    let ss_Code!: SS_Code;
    let ss_Status!: Ext_SS_Status;
    let ss_SubscriptionOption: OPTIONAL<SS_SubscriptionOption> = undefined;
    let basicServiceGroupList: OPTIONAL<Ext_BasicServiceGroupList> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Code": (_el: _Element): void => { ss_Code = _decode_SS_Code(_el); },
        "ss-Status": (_el: _Element): void => { ss_Status = $._decode_implicit<Ext_SS_Status>(() => _decode_Ext_SS_Status)(_el); },
        "ss-SubscriptionOption": (_el: _Element): void => { ss_SubscriptionOption = _decode_SS_SubscriptionOption(_el); },
        "basicServiceGroupList": (_el: _Element): void => { basicServiceGroupList = _decode_Ext_BasicServiceGroupList(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Ext_SS_Data,
        _extension_additions_list_spec_for_Ext_SS_Data,
        _root_component_type_list_2_spec_for_Ext_SS_Data,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Ext_SS_Data(
        ss_Code,
        ss_Status,
        ss_SubscriptionOption,
        basicServiceGroupList,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Ext_SS_Data(el);
}

let _cached_encoder_for_Ext_SS_Data: $.ASN1Encoder<Ext_SS_Data> | null = null;

/**
 * @summary Encodes a(n) Ext_SS_Data into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_SS_Data, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_SS_Data (value: Ext_SS_Data, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_SS_Data) { _cached_encoder_for_Ext_SS_Data = function (value: Ext_SS_Data, elGetter: $.ASN1Encoder<Ext_SS_Data>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SS_Code(value.ss_Code, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Ext_SS_Status, $.BER)(value.ss_Status, $.BER),
            /* IF_ABSENT  */ ((value.ss_SubscriptionOption === undefined) ? undefined : _encode_SS_SubscriptionOption(value.ss_SubscriptionOption, $.BER)),
            /* IF_ABSENT  */ ((value.basicServiceGroupList === undefined) ? undefined : _encode_Ext_BasicServiceGroupList(value.basicServiceGroupList, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Ext_SS_Data(value, elGetter);
}


/* eslint-enable */
