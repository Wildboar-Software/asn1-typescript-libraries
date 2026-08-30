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
import { Identity, _decode_Identity, _encode_Identity } from "../MAP-CommonDataTypes/Identity.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary CancelVcsgLocationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelVcsgLocationArg ::= SEQUENCE {
 *     identity    Identity,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class CancelVcsgLocationArg {
    constructor (
        /**
         * @summary `identity`.
         * @public
         * @readonly
         */
        readonly identity: Identity,
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
     * @summary Restructures an object into a CancelVcsgLocationArg
     * @description
     * 
     * This takes an `object` and converts it to a `CancelVcsgLocationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CancelVcsgLocationArg`.
     * @returns {CancelVcsgLocationArg}
     */
    public static _from_object (_o: { [_K in keyof (CancelVcsgLocationArg)]: (CancelVcsgLocationArg)[_K] }): CancelVcsgLocationArg {
        return new CancelVcsgLocationArg(_o.identity, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CancelVcsgLocationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CancelVcsgLocationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("identity", false, $.hasAnyTag),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of CancelVcsgLocationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CancelVcsgLocationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CancelVcsgLocationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CancelVcsgLocationArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CancelVcsgLocationArg: $.ASN1Decoder<CancelVcsgLocationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelVcsgLocationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelVcsgLocationArg (el: _Element): CancelVcsgLocationArg {
    if (!_cached_decoder_for_CancelVcsgLocationArg) { _cached_decoder_for_CancelVcsgLocationArg = function (el: _Element): CancelVcsgLocationArg {
    let identity!: Identity;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "identity": (_el: _Element): void => { identity = _decode_Identity(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CancelVcsgLocationArg,
        _extension_additions_list_spec_for_CancelVcsgLocationArg,
        _root_component_type_list_2_spec_for_CancelVcsgLocationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CancelVcsgLocationArg(
        identity,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CancelVcsgLocationArg(el);
}

let _cached_encoder_for_CancelVcsgLocationArg: $.ASN1Encoder<CancelVcsgLocationArg> | null = null;

/**
 * @summary Encodes a(n) CancelVcsgLocationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelVcsgLocationArg, encoded as an ASN.1 Element.
 */
export
function _encode_CancelVcsgLocationArg (value: CancelVcsgLocationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelVcsgLocationArg) { _cached_encoder_for_CancelVcsgLocationArg = function (value: CancelVcsgLocationArg, elGetter: $.ASN1Encoder<CancelVcsgLocationArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Identity(value.identity, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CancelVcsgLocationArg(value, elGetter);
}


/* eslint-enable */
