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
import { Ext_BasicServiceCode, _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";
import { CUG_Index, _decode_CUG_Index, _encode_CUG_Index } from "../MAP-MS-DataTypes/CUG-Index.ta.mjs";
import { InterCUG_Restrictions, _decode_InterCUG_Restrictions, _encode_InterCUG_Restrictions } from "../MAP-MS-DataTypes/InterCUG-Restrictions.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary CUG_Feature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUG-Feature ::= SEQUENCE {
 *     basicService    Ext-BasicServiceCode    OPTIONAL,
 *     preferentialCUG-Indicator    CUG-Index    OPTIONAL,
 *     interCUG-Restrictions    InterCUG-Restrictions,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class CUG_Feature {
    constructor (
        /**
         * @summary `basicService`.
         * @public
         * @readonly
         */
        readonly basicService: OPTIONAL<Ext_BasicServiceCode>,
        /**
         * @summary `preferentialCUG_Indicator`.
         * @public
         * @readonly
         */
        readonly preferentialCUG_Indicator: OPTIONAL<CUG_Index>,
        /**
         * @summary `interCUG_Restrictions`.
         * @public
         * @readonly
         */
        readonly interCUG_Restrictions: InterCUG_Restrictions,
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
     * @summary Restructures an object into a CUG_Feature
     * @description
     * 
     * This takes an `object` and converts it to a `CUG_Feature`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CUG_Feature`.
     * @returns {CUG_Feature}
     */
    public static _from_object (_o: { [_K in keyof (CUG_Feature)]: (CUG_Feature)[_K] }): CUG_Feature {
        return new CUG_Feature(_o.basicService, _o.preferentialCUG_Indicator, _o.interCUG_Restrictions, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CUG_Feature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CUG_Feature: $.ComponentSpec[] = [
    new $.ComponentSpec("basicService", true, $.or($.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 3))),
    new $.ComponentSpec("preferentialCUG-Indicator", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("interCUG-Restrictions", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of CUG_Feature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CUG_Feature: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CUG_Feature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CUG_Feature: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CUG_Feature: $.ASN1Decoder<CUG_Feature> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CUG_Feature
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CUG_Feature (el: _Element): CUG_Feature {
    if (!_cached_decoder_for_CUG_Feature) { _cached_decoder_for_CUG_Feature = function (el: _Element): CUG_Feature {
    let basicService: OPTIONAL<Ext_BasicServiceCode> = undefined;
    let preferentialCUG_Indicator: OPTIONAL<CUG_Index> = undefined;
    let interCUG_Restrictions!: InterCUG_Restrictions;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "basicService": (_el: _Element): void => { basicService = _decode_Ext_BasicServiceCode(_el); },
        "preferentialCUG-Indicator": (_el: _Element): void => { preferentialCUG_Indicator = _decode_CUG_Index(_el); },
        "interCUG-Restrictions": (_el: _Element): void => { interCUG_Restrictions = _decode_InterCUG_Restrictions(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CUG_Feature,
        _extension_additions_list_spec_for_CUG_Feature,
        _root_component_type_list_2_spec_for_CUG_Feature,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CUG_Feature(
        basicService,
        preferentialCUG_Indicator,
        interCUG_Restrictions,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CUG_Feature(el);
}

let _cached_encoder_for_CUG_Feature: $.ASN1Encoder<CUG_Feature> | null = null;

/**
 * @summary Encodes a(n) CUG_Feature into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CUG_Feature, encoded as an ASN.1 Element.
 */
export
function _encode_CUG_Feature (value: CUG_Feature, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CUG_Feature) { _cached_encoder_for_CUG_Feature = function (value: CUG_Feature, elGetter: $.ASN1Encoder<CUG_Feature>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.basicService === undefined) ? undefined : _encode_Ext_BasicServiceCode(value.basicService, $.BER)),
            /* IF_ABSENT  */ ((value.preferentialCUG_Indicator === undefined) ? undefined : _encode_CUG_Index(value.preferentialCUG_Indicator, $.BER)),
            /* REQUIRED   */ _encode_InterCUG_Restrictions(value.interCUG_Restrictions, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CUG_Feature(value, elGetter);
}


/* eslint-enable */
