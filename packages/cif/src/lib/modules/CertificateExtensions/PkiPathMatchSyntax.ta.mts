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
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";


/**
 * @summary PkiPathMatchSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PkiPathMatchSyntax ::= SEQUENCE {
 *   firstIssuer  Name,
 *   lastSubject  Name,
 *   ... }
 * ```
 * 
 * @class
 */
export
class PkiPathMatchSyntax {
    constructor (
        /**
         * @summary `firstIssuer`.
         * @public
         * @readonly
         */
        readonly firstIssuer: Name,
        /**
         * @summary `lastSubject`.
         * @public
         * @readonly
         */
        readonly lastSubject: Name,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PkiPathMatchSyntax
     * @description
     * 
     * This takes an `object` and converts it to a `PkiPathMatchSyntax`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PkiPathMatchSyntax`.
     * @returns {PkiPathMatchSyntax}
     */
    public static _from_object (_o: { [_K in keyof (PkiPathMatchSyntax)]: (PkiPathMatchSyntax)[_K] }): PkiPathMatchSyntax {
        return new PkiPathMatchSyntax(_o.firstIssuer, _o.lastSubject, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PkiPathMatchSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PkiPathMatchSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec("firstIssuer", false, $.hasAnyTag),
    new $.ComponentSpec("lastSubject", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of PkiPathMatchSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PkiPathMatchSyntax: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PkiPathMatchSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PkiPathMatchSyntax: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PkiPathMatchSyntax: $.ASN1Decoder<PkiPathMatchSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PkiPathMatchSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PkiPathMatchSyntax (el: _Element): PkiPathMatchSyntax {
    if (!_cached_decoder_for_PkiPathMatchSyntax) { _cached_decoder_for_PkiPathMatchSyntax = function (el: _Element): PkiPathMatchSyntax {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PkiPathMatchSyntax contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "firstIssuer";
    sequence[1].name = "lastSubject";
    let firstIssuer!: Name;
    let lastSubject!: Name;
    firstIssuer = _decode_Name(sequence[0]);
    lastSubject = _decode_Name(sequence[1]);
    return new PkiPathMatchSyntax(
        firstIssuer,
        lastSubject,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_PkiPathMatchSyntax(el);
}

let _cached_encoder_for_PkiPathMatchSyntax: $.ASN1Encoder<PkiPathMatchSyntax> | null = null;

/**
 * @summary Encodes a(n) PkiPathMatchSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PkiPathMatchSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_PkiPathMatchSyntax (value: PkiPathMatchSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PkiPathMatchSyntax) { _cached_encoder_for_PkiPathMatchSyntax = function (value: PkiPathMatchSyntax, elGetter: $.ASN1Encoder<PkiPathMatchSyntax>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Name(value.firstIssuer, $.BER),
            /* REQUIRED   */ _encode_Name(value.lastSubject, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PkiPathMatchSyntax(value, elGetter);
}


/* eslint-enable */
