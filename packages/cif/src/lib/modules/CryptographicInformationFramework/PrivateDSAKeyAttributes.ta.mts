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
import { Path, _decode_Path, _encode_Path } from "../CryptographicInformationFramework/Path.ta.mjs";
// export { Path, _decode_Path, _encode_Path } from "../CryptographicInformationFramework/Path.ta.mjs";
import { KeyInfo, _get_decoder_for_KeyInfo, _get_encoder_for_KeyInfo } from "../CryptographicInformationFramework/KeyInfo.ta.mjs";
// export { KeyInfo, _get_decoder_for_KeyInfo, _get_encoder_for_KeyInfo } from "../CryptographicInformationFramework/KeyInfo.ta.mjs";
import { DomainParameters, _decode_DomainParameters, _encode_DomainParameters } from "../ANSI-X9-42/DomainParameters.ta.mjs";
// export { DomainParameters, _decode_DomainParameters, _encode_DomainParameters } from "../ANSI-X9-42/DomainParameters.ta.mjs";
import { PublicKeyOperations, _decode_PublicKeyOperations, _encode_PublicKeyOperations } from "../CryptographicInformationFramework/PublicKeyOperations.ta.mjs";
// export { PublicKeyOperations, _decode_PublicKeyOperations, _encode_PublicKeyOperations } from "../CryptographicInformationFramework/PublicKeyOperations.ta.mjs";


/**
 * @summary PrivateDSAKeyAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateDSAKeyAttributes ::= SEQUENCE {
 *     value   Path,
 *     keyInfo KeyInfo {DomainParameters, PublicKeyOperations} OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class PrivateDSAKeyAttributes {
    constructor (
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: Path,
        /**
         * @summary `keyInfo`.
         * @public
         * @readonly
         */
        readonly keyInfo: OPTIONAL<KeyInfo<DomainParameters, PublicKeyOperations>>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PrivateDSAKeyAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `PrivateDSAKeyAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivateDSAKeyAttributes`.
     * @returns {PrivateDSAKeyAttributes}
     */
    public static _from_object (_o: { [_K in keyof (PrivateDSAKeyAttributes)]: (PrivateDSAKeyAttributes)[_K] }): PrivateDSAKeyAttributes {
        return new PrivateDSAKeyAttributes(_o.value, _o.keyInfo, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PrivateDSAKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrivateDSAKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("keyInfo", true, $.or($.hasTag(_TagClass.universal, 16), $.hasAnyTag))
];

/**
 * @summary The Trailing Root Component Types of PrivateDSAKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrivateDSAKeyAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PrivateDSAKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PrivateDSAKeyAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PrivateDSAKeyAttributes: $.ASN1Decoder<PrivateDSAKeyAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateDSAKeyAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivateDSAKeyAttributes (el: _Element): PrivateDSAKeyAttributes {
    if (!_cached_decoder_for_PrivateDSAKeyAttributes) { _cached_decoder_for_PrivateDSAKeyAttributes = function (el: _Element): PrivateDSAKeyAttributes {
    let value!: Path;
    let keyInfo: OPTIONAL<KeyInfo<DomainParameters, PublicKeyOperations>>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "value": (_el: _Element): void => { value = _decode_Path(_el); },
        "keyInfo": (_el: _Element): void => { keyInfo = _get_decoder_for_KeyInfo<DomainParameters, PublicKeyOperations>(_decode_DomainParameters, _decode_PublicKeyOperations)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrivateDSAKeyAttributes,
        _extension_additions_list_spec_for_PrivateDSAKeyAttributes,
        _root_component_type_list_2_spec_for_PrivateDSAKeyAttributes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PrivateDSAKeyAttributes(
        value,
        keyInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PrivateDSAKeyAttributes(el);
}

let _cached_encoder_for_PrivateDSAKeyAttributes: $.ASN1Encoder<PrivateDSAKeyAttributes> | null = null;

/**
 * @summary Encodes a(n) PrivateDSAKeyAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateDSAKeyAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateDSAKeyAttributes (value: PrivateDSAKeyAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivateDSAKeyAttributes) { _cached_encoder_for_PrivateDSAKeyAttributes = function (value: PrivateDSAKeyAttributes, elGetter: $.ASN1Encoder<PrivateDSAKeyAttributes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Path(value.value, $.BER),
            /* IF_ABSENT  */ ((value.keyInfo === undefined) ? undefined : _get_encoder_for_KeyInfo<DomainParameters, PublicKeyOperations>(_encode_DomainParameters, _encode_PublicKeyOperations)(value.keyInfo, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PrivateDSAKeyAttributes(value, elGetter);
}


/* eslint-enable */
