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
import { GeneralSubtrees, _decode_GeneralSubtrees, _encode_GeneralSubtrees } from "../CertificateExtensions/GeneralSubtrees.ta.mjs";
// export { GeneralSubtrees, _decode_GeneralSubtrees, _encode_GeneralSubtrees } from "../CertificateExtensions/GeneralSubtrees.ta.mjs";


/**
 * @summary NameConstraintsSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameConstraintsSyntax ::= SEQUENCE {
 *   permittedSubtrees  [0]  GeneralSubtrees OPTIONAL,
 *   excludedSubtrees   [1]  GeneralSubtrees OPTIONAL,
 *   ... }
 *   (WITH COMPONENTS {..., permittedSubtrees  PRESENT } |
 *    WITH COMPONENTS {..., excludedSubtrees   PRESENT } )
 * ```
 * 
 * @class
 */
export
class NameConstraintsSyntax {
    constructor (
        /**
         * @summary `permittedSubtrees`.
         * @public
         * @readonly
         */
        readonly permittedSubtrees: OPTIONAL<GeneralSubtrees>,
        /**
         * @summary `excludedSubtrees`.
         * @public
         * @readonly
         */
        readonly excludedSubtrees: OPTIONAL<GeneralSubtrees>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NameConstraintsSyntax
     * @description
     * 
     * This takes an `object` and converts it to a `NameConstraintsSyntax`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NameConstraintsSyntax`.
     * @returns {NameConstraintsSyntax}
     */
    public static _from_object (_o: { [_K in keyof (NameConstraintsSyntax)]: (NameConstraintsSyntax)[_K] }): NameConstraintsSyntax {
        return new NameConstraintsSyntax(_o.permittedSubtrees, _o.excludedSubtrees, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NameConstraintsSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NameConstraintsSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec("permittedSubtrees", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("excludedSubtrees", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of NameConstraintsSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NameConstraintsSyntax: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NameConstraintsSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NameConstraintsSyntax: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NameConstraintsSyntax: $.ASN1Decoder<NameConstraintsSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NameConstraintsSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NameConstraintsSyntax (el: _Element): NameConstraintsSyntax {
    if (!_cached_decoder_for_NameConstraintsSyntax) { _cached_decoder_for_NameConstraintsSyntax = function (el: _Element): NameConstraintsSyntax {
    let permittedSubtrees: OPTIONAL<GeneralSubtrees>;
    let excludedSubtrees: OPTIONAL<GeneralSubtrees>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "permittedSubtrees": (_el: _Element): void => { permittedSubtrees = $._decode_implicit<GeneralSubtrees>(() => _decode_GeneralSubtrees)(_el); },
        "excludedSubtrees": (_el: _Element): void => { excludedSubtrees = $._decode_implicit<GeneralSubtrees>(() => _decode_GeneralSubtrees)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NameConstraintsSyntax,
        _extension_additions_list_spec_for_NameConstraintsSyntax,
        _root_component_type_list_2_spec_for_NameConstraintsSyntax,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NameConstraintsSyntax(
        permittedSubtrees,
        excludedSubtrees,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NameConstraintsSyntax(el);
}

let _cached_encoder_for_NameConstraintsSyntax: $.ASN1Encoder<NameConstraintsSyntax> | null = null;

/**
 * @summary Encodes a(n) NameConstraintsSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameConstraintsSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_NameConstraintsSyntax (value: NameConstraintsSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NameConstraintsSyntax) { _cached_encoder_for_NameConstraintsSyntax = function (value: NameConstraintsSyntax, elGetter: $.ASN1Encoder<NameConstraintsSyntax>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.permittedSubtrees === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GeneralSubtrees, $.BER)(value.permittedSubtrees, $.BER)),
            /* IF_ABSENT  */ ((value.excludedSubtrees === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_GeneralSubtrees, $.BER)(value.excludedSubtrees, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NameConstraintsSyntax(value, elGetter);
}


/* eslint-enable */
