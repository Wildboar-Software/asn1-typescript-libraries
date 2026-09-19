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
import { VersionType, _decode_VersionType, _encode_VersionType } from "../RSPDefinitions/VersionType.ta.mjs";
// export { VersionType, _decode_VersionType, _encode_VersionType } from "../RSPDefinitions/VersionType.ta.mjs";
import { ISDRProprietaryApplicationTemplate_lpaeSupport, ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingCat /* IMPORTED_LONG_NAMED_BIT */, lpaeUsingCat /* IMPORTED_SHORT_NAMED_BIT */, ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingScws /* IMPORTED_LONG_NAMED_BIT */, lpaeUsingScws /* IMPORTED_SHORT_NAMED_BIT */, _decode_ISDRProprietaryApplicationTemplate_lpaeSupport, _encode_ISDRProprietaryApplicationTemplate_lpaeSupport } from "../RSPDefinitions/ISDRProprietaryApplicationTemplate-lpaeSupport.ta.mjs";
// export { ISDRProprietaryApplicationTemplate_lpaeSupport, ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingCat /* IMPORTED_LONG_NAMED_BIT */, lpaeUsingCat /* IMPORTED_SHORT_NAMED_BIT */, ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingScws /* IMPORTED_LONG_NAMED_BIT */, lpaeUsingScws /* IMPORTED_SHORT_NAMED_BIT */, _decode_ISDRProprietaryApplicationTemplate_lpaeSupport, _encode_ISDRProprietaryApplicationTemplate_lpaeSupport } from "../RSPDefinitions/ISDRProprietaryApplicationTemplate-lpaeSupport.ta.mjs";


/**
 * @summary ISDRProprietaryApplicationTemplate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISDRProprietaryApplicationTemplate ::= [PRIVATE 0] SEQUENCE { -- Tag 'E0'
 *     svn [2] VersionType,     -- GSMA SGP.22 version supported (SVN)
 *     lpaeSupport BIT STRING {
 *         lpaeUsingCat(0), -- LPA in the eUICC using Card Application Toolkit 
 *         lpaeUsingScws(1) -- LPA in the eUICC using Smartcard Web Server
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ISDRProprietaryApplicationTemplate {
    constructor (
        /**
         * @summary `svn`.
         * @public
         * @readonly
         */
        readonly svn: VersionType,
        /**
         * @summary `lpaeSupport`.
         * @public
         * @readonly
         */
        readonly lpaeSupport: OPTIONAL<ISDRProprietaryApplicationTemplate_lpaeSupport>
    ) {}

    /**
     * @summary Restructures an object into a ISDRProprietaryApplicationTemplate
     * @description
     * 
     * This takes an `object` and converts it to a `ISDRProprietaryApplicationTemplate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ISDRProprietaryApplicationTemplate`.
     * @returns {ISDRProprietaryApplicationTemplate}
     */
    public static _from_object (_o: { [_K in keyof (ISDRProprietaryApplicationTemplate)]: (ISDRProprietaryApplicationTemplate)[_K] }): ISDRProprietaryApplicationTemplate {
        return new ISDRProprietaryApplicationTemplate(_o.svn, _o.lpaeSupport);
    }


}

/**
 * @summary The Leading Root Component Types of ISDRProprietaryApplicationTemplate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ISDRProprietaryApplicationTemplate: $.ComponentSpec[] = [
    new $.ComponentSpec("svn", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("lpaeSupport", true, $.hasTag(_TagClass.universal, 3))
];

/**
 * @summary The Trailing Root Component Types of ISDRProprietaryApplicationTemplate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ISDRProprietaryApplicationTemplate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ISDRProprietaryApplicationTemplate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ISDRProprietaryApplicationTemplate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ISDRProprietaryApplicationTemplate: $.ASN1Decoder<ISDRProprietaryApplicationTemplate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ISDRProprietaryApplicationTemplate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ISDRProprietaryApplicationTemplate (el: _Element): ISDRProprietaryApplicationTemplate {
    if (!_cached_decoder_for_ISDRProprietaryApplicationTemplate) { _cached_decoder_for_ISDRProprietaryApplicationTemplate = $._decode_implicit<ISDRProprietaryApplicationTemplate>(() => function (el: _Element): ISDRProprietaryApplicationTemplate {
    let svn!: VersionType;
    let lpaeSupport: OPTIONAL<ISDRProprietaryApplicationTemplate_lpaeSupport>;
    const callbacks: $.DecodingMap = {
        "svn": (_el: _Element): void => { svn = $._decode_implicit<VersionType>(() => _decode_VersionType)(_el); },
        "lpaeSupport": (_el: _Element): void => { lpaeSupport = _decode_ISDRProprietaryApplicationTemplate_lpaeSupport(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ISDRProprietaryApplicationTemplate,
        _extension_additions_list_spec_for_ISDRProprietaryApplicationTemplate,
        _root_component_type_list_2_spec_for_ISDRProprietaryApplicationTemplate,
        undefined,
    );
    return new ISDRProprietaryApplicationTemplate(
        svn,
        lpaeSupport
    );
}); }
    return _cached_decoder_for_ISDRProprietaryApplicationTemplate(el);
}

let _cached_encoder_for_ISDRProprietaryApplicationTemplate: $.ASN1Encoder<ISDRProprietaryApplicationTemplate> | null = null;

/**
 * @summary Encodes a(n) ISDRProprietaryApplicationTemplate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISDRProprietaryApplicationTemplate, encoded as an ASN.1 Element.
 */
export
function _encode_ISDRProprietaryApplicationTemplate (value: ISDRProprietaryApplicationTemplate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ISDRProprietaryApplicationTemplate) { _cached_encoder_for_ISDRProprietaryApplicationTemplate = $._encode_implicit(_TagClass.private, 0, () => function (value: ISDRProprietaryApplicationTemplate, elGetter: $.ASN1Encoder<ISDRProprietaryApplicationTemplate>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_VersionType, $.BER)(value.svn, $.BER),
            /* IF_ABSENT  */ ((value.lpaeSupport === undefined) ? undefined : _encode_ISDRProprietaryApplicationTemplate_lpaeSupport(value.lpaeSupport, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ISDRProprietaryApplicationTemplate(value, elGetter);
}


/* eslint-enable */
