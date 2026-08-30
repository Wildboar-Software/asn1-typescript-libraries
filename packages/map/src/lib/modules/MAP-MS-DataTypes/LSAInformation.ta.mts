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
import { LSAOnlyAccessIndicator, _enum_for_LSAOnlyAccessIndicator, LSAOnlyAccessIndicator_accessOutsideLSAsAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, accessOutsideLSAsAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, LSAOnlyAccessIndicator_accessOutsideLSAsRestricted /* IMPORTED_LONG_ENUMERATION_ITEM */, accessOutsideLSAsRestricted /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LSAOnlyAccessIndicator, _encode_LSAOnlyAccessIndicator } from "../MAP-MS-DataTypes/LSAOnlyAccessIndicator.ta.mjs";
import { LSADataList, _decode_LSADataList, _encode_LSADataList } from "../MAP-MS-DataTypes/LSADataList.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary LSAInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LSAInformation ::= SEQUENCE {
 *     completeDataListIncluded    NULL    OPTIONAL,
 * 
 *     -- If segmentation is used, completeDataListIncluded may only be present in the
 *     -- first segment.
 *     lsaOnlyAccessIndicator    [1]    LSAOnlyAccessIndicator    OPTIONAL,
 *     lsaDataList    [2]    LSADataList    OPTIONAL,
 *     extensionContainer    [3] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class LSAInformation {
    constructor (
        /**
         * @summary `completeDataListIncluded`.
         * @public
         * @readonly
         */
        readonly completeDataListIncluded: OPTIONAL<NULL>,
        /**
         * @summary `lsaOnlyAccessIndicator`.
         * @public
         * @readonly
         */
        readonly lsaOnlyAccessIndicator: OPTIONAL<LSAOnlyAccessIndicator>,
        /**
         * @summary `lsaDataList`.
         * @public
         * @readonly
         */
        readonly lsaDataList: OPTIONAL<LSADataList>,
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
     * @summary Restructures an object into a LSAInformation
     * @description
     * 
     * This takes an `object` and converts it to a `LSAInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LSAInformation`.
     * @returns {LSAInformation}
     */
    public static _from_object (_o: { [_K in keyof (LSAInformation)]: (LSAInformation)[_K] }): LSAInformation {
        return new LSAInformation(_o.completeDataListIncluded, _o.lsaOnlyAccessIndicator, _o.lsaDataList, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `lsaOnlyAccessIndicator`
         * @public
         * @static
         */

    public static _enum_for_lsaOnlyAccessIndicator = _enum_for_LSAOnlyAccessIndicator;
}

/**
 * @summary The Leading Root Component Types of LSAInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LSAInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("completeDataListIncluded", true, $.hasTag(_TagClass.universal, 5)),
    new $.ComponentSpec("lsaOnlyAccessIndicator", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lsaDataList", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of LSAInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LSAInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LSAInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LSAInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LSAInformation: $.ASN1Decoder<LSAInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LSAInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LSAInformation (el: _Element): LSAInformation {
    if (!_cached_decoder_for_LSAInformation) { _cached_decoder_for_LSAInformation = function (el: _Element): LSAInformation {
    let completeDataListIncluded: OPTIONAL<NULL> = undefined;
    let lsaOnlyAccessIndicator: OPTIONAL<LSAOnlyAccessIndicator> = undefined;
    let lsaDataList: OPTIONAL<LSADataList> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "completeDataListIncluded": (_el: _Element): void => { completeDataListIncluded = $._decodeNull(_el); },
        "lsaOnlyAccessIndicator": (_el: _Element): void => { lsaOnlyAccessIndicator = $._decode_implicit<LSAOnlyAccessIndicator>(() => _decode_LSAOnlyAccessIndicator)(_el); },
        "lsaDataList": (_el: _Element): void => { lsaDataList = $._decode_implicit<LSADataList>(() => _decode_LSADataList)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LSAInformation,
        _extension_additions_list_spec_for_LSAInformation,
        _root_component_type_list_2_spec_for_LSAInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LSAInformation(
        completeDataListIncluded,
        lsaOnlyAccessIndicator,
        lsaDataList,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LSAInformation(el);
}

let _cached_encoder_for_LSAInformation: $.ASN1Encoder<LSAInformation> | null = null;

/**
 * @summary Encodes a(n) LSAInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LSAInformation, encoded as an ASN.1 Element.
 */
export
function _encode_LSAInformation (value: LSAInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LSAInformation) { _cached_encoder_for_LSAInformation = function (value: LSAInformation, elGetter: $.ASN1Encoder<LSAInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.completeDataListIncluded === undefined) ? undefined : $._encodeNull(value.completeDataListIncluded, $.BER)),
            /* IF_ABSENT  */ ((value.lsaOnlyAccessIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_LSAOnlyAccessIndicator, $.BER)(value.lsaOnlyAccessIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.lsaDataList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_LSADataList, $.BER)(value.lsaDataList, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LSAInformation(value, elGetter);
}


/* eslint-enable */
