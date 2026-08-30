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
import { ODB_Data, _decode_ODB_Data, _encode_ODB_Data } from "../MAP-MS-DataTypes/ODB-Data.ta.mjs";
// export { ODB_Data, _decode_ODB_Data, _encode_ODB_Data } from "../MAP-MS-DataTypes/ODB-Data.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary ODB_Info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ODB-Info ::= SEQUENCE {
 *     odb-Data    ODB-Data,
 *     notificationToCSE    NULL    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class ODB_Info {
    constructor (
        /**
         * @summary `odb_Data`.
         * @public
         * @readonly
         */
        readonly odb_Data: ODB_Data,
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
     * @summary Restructures an object into a ODB_Info
     * @description
     * 
     * This takes an `object` and converts it to a `ODB_Info`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ODB_Info`.
     * @returns {ODB_Info}
     */
    public static _from_object (_o: { [_K in keyof (ODB_Info)]: (ODB_Info)[_K] }): ODB_Info {
        return new ODB_Info(_o.odb_Data, _o.notificationToCSE, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ODB_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ODB_Info: $.ComponentSpec[] = [
    new $.ComponentSpec("odb-Data", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("notificationToCSE", true, $.hasTag(_TagClass.universal, 5), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ODB_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ODB_Info: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ODB_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ODB_Info: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ODB_Info: $.ASN1Decoder<ODB_Info> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ODB_Info
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ODB_Info (el: _Element): ODB_Info {
    if (!_cached_decoder_for_ODB_Info) { _cached_decoder_for_ODB_Info = function (el: _Element): ODB_Info {
    let odb_Data!: ODB_Data;
    let notificationToCSE: OPTIONAL<NULL>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "odb-Data": (_el: _Element): void => { odb_Data = _decode_ODB_Data(_el); },
        "notificationToCSE": (_el: _Element): void => { notificationToCSE = $._decodeNull(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ODB_Info,
        _extension_additions_list_spec_for_ODB_Info,
        _root_component_type_list_2_spec_for_ODB_Info,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ODB_Info(
        odb_Data,
        notificationToCSE,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ODB_Info(el);
}

let _cached_encoder_for_ODB_Info: $.ASN1Encoder<ODB_Info> | null = null;

/**
 * @summary Encodes a(n) ODB_Info into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ODB_Info, encoded as an ASN.1 Element.
 */
export
function _encode_ODB_Info (value: ODB_Info, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ODB_Info) { _cached_encoder_for_ODB_Info = function (value: ODB_Info, elGetter: $.ASN1Encoder<ODB_Info>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ODB_Data(value.odb_Data, $.BER),
            /* IF_ABSENT  */ ((value.notificationToCSE === undefined) ? undefined : $._encodeNull(value.notificationToCSE, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ODB_Info(value, elGetter);
}


/* eslint-enable */
