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
 * @summary CertBasedAuthenticationAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertBasedAuthenticationAttributes ::= SEQUENCE {
 *     cha             OCTET STRING,
 *     cioSecurityId   INTEGER OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class CertBasedAuthenticationAttributes {
    constructor (
        /**
         * @summary `cha`.
         * @public
         * @readonly
         */
        readonly cha: OCTET_STRING,
        /**
         * @summary `cioSecurityId`.
         * @public
         * @readonly
         */
        readonly cioSecurityId: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertBasedAuthenticationAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `CertBasedAuthenticationAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertBasedAuthenticationAttributes`.
     * @returns {CertBasedAuthenticationAttributes}
     */
    public static _from_object (_o: { [_K in keyof (CertBasedAuthenticationAttributes)]: (CertBasedAuthenticationAttributes)[_K] }): CertBasedAuthenticationAttributes {
        return new CertBasedAuthenticationAttributes(_o.cha, _o.cioSecurityId, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CertBasedAuthenticationAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CertBasedAuthenticationAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("cha", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("cioSecurityId", true, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CertBasedAuthenticationAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CertBasedAuthenticationAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CertBasedAuthenticationAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CertBasedAuthenticationAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CertBasedAuthenticationAttributes: $.ASN1Decoder<CertBasedAuthenticationAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertBasedAuthenticationAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertBasedAuthenticationAttributes (el: _Element): CertBasedAuthenticationAttributes {
    if (!_cached_decoder_for_CertBasedAuthenticationAttributes) { _cached_decoder_for_CertBasedAuthenticationAttributes = function (el: _Element): CertBasedAuthenticationAttributes {
    let cha!: OCTET_STRING;
    let cioSecurityId: OPTIONAL<INTEGER>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cha": (_el: _Element): void => { cha = $._decodeOctetString(_el); },
        "cioSecurityId": (_el: _Element): void => { cioSecurityId = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CertBasedAuthenticationAttributes,
        _extension_additions_list_spec_for_CertBasedAuthenticationAttributes,
        _root_component_type_list_2_spec_for_CertBasedAuthenticationAttributes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CertBasedAuthenticationAttributes(
        cha,
        cioSecurityId,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CertBasedAuthenticationAttributes(el);
}

let _cached_encoder_for_CertBasedAuthenticationAttributes: $.ASN1Encoder<CertBasedAuthenticationAttributes> | null = null;

/**
 * @summary Encodes a(n) CertBasedAuthenticationAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertBasedAuthenticationAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_CertBasedAuthenticationAttributes (value: CertBasedAuthenticationAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertBasedAuthenticationAttributes) { _cached_encoder_for_CertBasedAuthenticationAttributes = function (value: CertBasedAuthenticationAttributes, elGetter: $.ASN1Encoder<CertBasedAuthenticationAttributes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.cha, $.BER),
            /* IF_ABSENT  */ ((value.cioSecurityId === undefined) ? undefined : $._encodeInteger(value.cioSecurityId, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CertBasedAuthenticationAttributes(value, elGetter);
}


/* eslint-enable */
