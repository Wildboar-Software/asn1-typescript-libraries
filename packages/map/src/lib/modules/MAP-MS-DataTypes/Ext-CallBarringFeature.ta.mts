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
// export { Ext_BasicServiceCode, _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";
import { Ext_SS_Status, _decode_Ext_SS_Status, _encode_Ext_SS_Status } from "../MAP-CommonDataTypes/Ext-SS-Status.ta.mjs";
// export { Ext_SS_Status, _decode_Ext_SS_Status, _encode_Ext_SS_Status } from "../MAP-CommonDataTypes/Ext-SS-Status.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary Ext_CallBarringFeature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-CallBarringFeature ::= SEQUENCE {
 *     basicService    Ext-BasicServiceCode    OPTIONAL,
 *     ss-Status    [4] Ext-SS-Status,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class Ext_CallBarringFeature {
    constructor (
        /**
         * @summary `basicService`.
         * @public
         * @readonly
         */
        readonly basicService: OPTIONAL<Ext_BasicServiceCode>,
        /**
         * @summary `ss_Status`.
         * @public
         * @readonly
         */
        readonly ss_Status: Ext_SS_Status,
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
     * @summary Restructures an object into a Ext_CallBarringFeature
     * @description
     * 
     * This takes an `object` and converts it to a `Ext_CallBarringFeature`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Ext_CallBarringFeature`.
     * @returns {Ext_CallBarringFeature}
     */
    public static _from_object (_o: { [_K in keyof (Ext_CallBarringFeature)]: (Ext_CallBarringFeature)[_K] }): Ext_CallBarringFeature {
        return new Ext_CallBarringFeature(_o.basicService, _o.ss_Status, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Ext_CallBarringFeature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Ext_CallBarringFeature: $.ComponentSpec[] = [
    new $.ComponentSpec("basicService", true, $.or($.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 3)), undefined, undefined),
    new $.ComponentSpec("ss-Status", false, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of Ext_CallBarringFeature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Ext_CallBarringFeature: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Ext_CallBarringFeature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Ext_CallBarringFeature: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Ext_CallBarringFeature: $.ASN1Decoder<Ext_CallBarringFeature> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_CallBarringFeature
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_CallBarringFeature (el: _Element): Ext_CallBarringFeature {
    if (!_cached_decoder_for_Ext_CallBarringFeature) { _cached_decoder_for_Ext_CallBarringFeature = function (el: _Element): Ext_CallBarringFeature {
    let basicService: OPTIONAL<Ext_BasicServiceCode>;
    let ss_Status!: Ext_SS_Status;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "basicService": (_el: _Element): void => { basicService = _decode_Ext_BasicServiceCode(_el); },
        "ss-Status": (_el: _Element): void => { ss_Status = $._decode_implicit<Ext_SS_Status>(() => _decode_Ext_SS_Status)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Ext_CallBarringFeature,
        _extension_additions_list_spec_for_Ext_CallBarringFeature,
        _root_component_type_list_2_spec_for_Ext_CallBarringFeature,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Ext_CallBarringFeature(
        basicService,
        ss_Status,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Ext_CallBarringFeature(el);
}

let _cached_encoder_for_Ext_CallBarringFeature: $.ASN1Encoder<Ext_CallBarringFeature> | null = null;

/**
 * @summary Encodes a(n) Ext_CallBarringFeature into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_CallBarringFeature, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_CallBarringFeature (value: Ext_CallBarringFeature, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_CallBarringFeature) { _cached_encoder_for_Ext_CallBarringFeature = function (value: Ext_CallBarringFeature, elGetter: $.ASN1Encoder<Ext_CallBarringFeature>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.basicService === undefined) ? undefined : _encode_Ext_BasicServiceCode(value.basicService, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Ext_SS_Status, $.BER)(value.ss_Status, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Ext_CallBarringFeature(value, elGetter);
}


/* eslint-enable */
