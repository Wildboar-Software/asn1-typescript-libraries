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



/**
 * @summary ImplementationIdent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ImplementationIdent ::= SEQUENCE {
 *     implementationIdentifier [0] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *     implementationName       [1] IMPLICIT PrintableString OPTIONAL,
 *     implementationVersion    [2] IMPLICIT PrintableString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ImplementationIdent {
    constructor (
        /**
         * @summary `implementationIdentifier`.
         * @public
         * @readonly
         */
        readonly implementationIdentifier: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `implementationName`.
         * @public
         * @readonly
         */
        readonly implementationName: OPTIONAL<PrintableString>,
        /**
         * @summary `implementationVersion`.
         * @public
         * @readonly
         */
        readonly implementationVersion: OPTIONAL<PrintableString>
    ) {}

    /**
     * @summary Restructures an object into a ImplementationIdent
     * @description
     * 
     * This takes an `object` and converts it to a `ImplementationIdent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ImplementationIdent`.
     * @returns {ImplementationIdent}
     */
    public static _from_object (_o: { [_K in keyof (ImplementationIdent)]: (ImplementationIdent)[_K] }): ImplementationIdent {
        return new ImplementationIdent(_o.implementationIdentifier, _o.implementationName, _o.implementationVersion);
    }


}

/**
 * @summary The Leading Root Component Types of ImplementationIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ImplementationIdent: $.ComponentSpec[] = [
    new $.ComponentSpec("implementationIdentifier", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("implementationName", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("implementationVersion", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ImplementationIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ImplementationIdent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ImplementationIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ImplementationIdent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ImplementationIdent: $.ASN1Decoder<ImplementationIdent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ImplementationIdent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ImplementationIdent (el: _Element): ImplementationIdent {
    if (!_cached_decoder_for_ImplementationIdent) { _cached_decoder_for_ImplementationIdent = function (el: _Element): ImplementationIdent {
    let implementationIdentifier: OPTIONAL<OBJECT_IDENTIFIER>;
    let implementationName: OPTIONAL<PrintableString>;
    let implementationVersion: OPTIONAL<PrintableString>;
    const callbacks: $.DecodingMap = {
        "implementationIdentifier": (_el: _Element): void => { implementationIdentifier = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "implementationName": (_el: _Element): void => { implementationName = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "implementationVersion": (_el: _Element): void => { implementationVersion = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ImplementationIdent,
        _extension_additions_list_spec_for_ImplementationIdent,
        _root_component_type_list_2_spec_for_ImplementationIdent,
        undefined,
    );
    return new ImplementationIdent(
        implementationIdentifier,
        implementationName,
        implementationVersion
    );
}; }
    return _cached_decoder_for_ImplementationIdent(el);
}

let _cached_encoder_for_ImplementationIdent: $.ASN1Encoder<ImplementationIdent> | null = null;

/**
 * @summary Encodes a(n) ImplementationIdent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ImplementationIdent, encoded as an ASN.1 Element.
 */
export
function _encode_ImplementationIdent (value: ImplementationIdent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ImplementationIdent) { _cached_encoder_for_ImplementationIdent = function (value: ImplementationIdent, elGetter: $.ASN1Encoder<ImplementationIdent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.implementationIdentifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.implementationIdentifier, $.BER)),
            /* IF_ABSENT  */ ((value.implementationName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodePrintableString, $.BER)(value.implementationName, $.BER)),
            /* IF_ABSENT  */ ((value.implementationVersion === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodePrintableString, $.BER)(value.implementationVersion, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ImplementationIdent(value, elGetter);
}


/* eslint-enable */
