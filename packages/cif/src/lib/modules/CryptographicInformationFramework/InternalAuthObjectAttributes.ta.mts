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
import { AuthKeyAttributes, _decode_AuthKeyAttributes, _encode_AuthKeyAttributes } from "../CryptographicInformationFramework/AuthKeyAttributes.ta.mjs";
// export { AuthKeyAttributes, _decode_AuthKeyAttributes, _encode_AuthKeyAttributes } from "../CryptographicInformationFramework/AuthKeyAttributes.ta.mjs";


/**
 * @summary InternalAuthObjectAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InternalAuthObjectAttributes ::= SEQUENCE {
 *     cioSecurityId       INTEGER OPTIONAL,
 *     authKeyAttributes   AuthKeyAttributes,
 * ... -- For future extensions
 * } (CONSTRAINED BY {-- at least one out of protocol and description attributes shall be present --})
 * ```
 * 
 * @class
 */
export
class InternalAuthObjectAttributes {
    constructor (
        /**
         * @summary `cioSecurityId`.
         * @public
         * @readonly
         */
        readonly cioSecurityId: OPTIONAL<INTEGER>,
        /**
         * @summary `authKeyAttributes`.
         * @public
         * @readonly
         */
        readonly authKeyAttributes: AuthKeyAttributes,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InternalAuthObjectAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `InternalAuthObjectAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InternalAuthObjectAttributes`.
     * @returns {InternalAuthObjectAttributes}
     */
    public static _from_object (_o: { [_K in keyof (InternalAuthObjectAttributes)]: (InternalAuthObjectAttributes)[_K] }): InternalAuthObjectAttributes {
        return new InternalAuthObjectAttributes(_o.cioSecurityId, _o.authKeyAttributes, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of InternalAuthObjectAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InternalAuthObjectAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("cioSecurityId", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("authKeyAttributes", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of InternalAuthObjectAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InternalAuthObjectAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InternalAuthObjectAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InternalAuthObjectAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InternalAuthObjectAttributes: $.ASN1Decoder<InternalAuthObjectAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InternalAuthObjectAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InternalAuthObjectAttributes (el: _Element): InternalAuthObjectAttributes {
    if (!_cached_decoder_for_InternalAuthObjectAttributes) { _cached_decoder_for_InternalAuthObjectAttributes = function (el: _Element): InternalAuthObjectAttributes {
    let cioSecurityId: OPTIONAL<INTEGER>;
    let authKeyAttributes!: AuthKeyAttributes;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cioSecurityId": (_el: _Element): void => { cioSecurityId = $._decodeInteger(_el); },
        "authKeyAttributes": (_el: _Element): void => { authKeyAttributes = _decode_AuthKeyAttributes(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InternalAuthObjectAttributes,
        _extension_additions_list_spec_for_InternalAuthObjectAttributes,
        _root_component_type_list_2_spec_for_InternalAuthObjectAttributes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InternalAuthObjectAttributes(
        cioSecurityId,
        authKeyAttributes,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InternalAuthObjectAttributes(el);
}

let _cached_encoder_for_InternalAuthObjectAttributes: $.ASN1Encoder<InternalAuthObjectAttributes> | null = null;

/**
 * @summary Encodes a(n) InternalAuthObjectAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InternalAuthObjectAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_InternalAuthObjectAttributes (value: InternalAuthObjectAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InternalAuthObjectAttributes) { _cached_encoder_for_InternalAuthObjectAttributes = function (value: InternalAuthObjectAttributes, elGetter: $.ASN1Encoder<InternalAuthObjectAttributes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.cioSecurityId === undefined) ? undefined : $._encodeInteger(value.cioSecurityId, $.BER)),
            /* REQUIRED   */ _encode_AuthKeyAttributes(value.authKeyAttributes, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InternalAuthObjectAttributes(value, elGetter);
}


/* eslint-enable */
