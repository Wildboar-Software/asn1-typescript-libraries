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
import { SS_EventList, _decode_SS_EventList, _encode_SS_EventList } from "../MAP-MS-DataTypes/SS-EventList.ta.mjs";
// export { SS_EventList, _decode_SS_EventList, _encode_SS_EventList } from "../MAP-MS-DataTypes/SS-EventList.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary SS_CamelData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SS-CamelData ::= SEQUENCE {
 *     ss-EventList    SS-EventList,
 *     gsmSCF-Address    ISDN-AddressString,
 *     extensionContainer    [0] ExtensionContainer    OPTIONAL, 
 *     ...}
 * ```
 * 
 * @class
 */
export
class SS_CamelData {
    constructor (
        /**
         * @summary `ss_EventList`.
         * @public
         * @readonly
         */
        readonly ss_EventList: SS_EventList,
        /**
         * @summary `gsmSCF_Address`.
         * @public
         * @readonly
         */
        readonly gsmSCF_Address: ISDN_AddressString,
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
     * @summary Restructures an object into a SS_CamelData
     * @description
     * 
     * This takes an `object` and converts it to a `SS_CamelData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SS_CamelData`.
     * @returns {SS_CamelData}
     */
    public static _from_object (_o: { [_K in keyof (SS_CamelData)]: (SS_CamelData)[_K] }): SS_CamelData {
        return new SS_CamelData(_o.ss_EventList, _o.gsmSCF_Address, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SS_CamelData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SS_CamelData: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-EventList", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("gsmSCF-Address", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SS_CamelData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SS_CamelData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SS_CamelData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SS_CamelData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SS_CamelData: $.ASN1Decoder<SS_CamelData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SS_CamelData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SS_CamelData (el: _Element): SS_CamelData {
    if (!_cached_decoder_for_SS_CamelData) { _cached_decoder_for_SS_CamelData = function (el: _Element): SS_CamelData {
    let ss_EventList!: SS_EventList;
    let gsmSCF_Address!: ISDN_AddressString;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-EventList": (_el: _Element): void => { ss_EventList = _decode_SS_EventList(_el); },
        "gsmSCF-Address": (_el: _Element): void => { gsmSCF_Address = _decode_ISDN_AddressString(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SS_CamelData,
        _extension_additions_list_spec_for_SS_CamelData,
        _root_component_type_list_2_spec_for_SS_CamelData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SS_CamelData(
        ss_EventList,
        gsmSCF_Address,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SS_CamelData(el);
}

let _cached_encoder_for_SS_CamelData: $.ASN1Encoder<SS_CamelData> | null = null;

/**
 * @summary Encodes a(n) SS_CamelData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SS_CamelData, encoded as an ASN.1 Element.
 */
export
function _encode_SS_CamelData (value: SS_CamelData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SS_CamelData) { _cached_encoder_for_SS_CamelData = function (value: SS_CamelData, elGetter: $.ASN1Encoder<SS_CamelData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SS_EventList(value.ss_EventList, $.BER),
            /* REQUIRED   */ _encode_ISDN_AddressString(value.gsmSCF_Address, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SS_CamelData(value, elGetter);
}


/* eslint-enable */
