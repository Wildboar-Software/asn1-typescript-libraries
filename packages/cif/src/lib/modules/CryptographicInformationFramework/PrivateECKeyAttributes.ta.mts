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
import { Parameters, _decode_Parameters, _encode_Parameters } from "../ANSI-X9-62/Parameters.ta.mjs";
// export { Parameters, _decode_Parameters, _encode_Parameters } from "../ANSI-X9-62/Parameters.ta.mjs";
import { PublicKeyOperations, _decode_PublicKeyOperations, _encode_PublicKeyOperations } from "../CryptographicInformationFramework/PublicKeyOperations.ta.mjs";
// export { PublicKeyOperations, _decode_PublicKeyOperations, _encode_PublicKeyOperations } from "../CryptographicInformationFramework/PublicKeyOperations.ta.mjs";


/**
 * @summary PrivateECKeyAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateECKeyAttributes ::= SEQUENCE {
 *     value   Path,
 *     keyInfo KeyInfo {Parameters, PublicKeyOperations} OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class PrivateECKeyAttributes {
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
        readonly keyInfo: OPTIONAL<KeyInfo<Parameters, PublicKeyOperations>>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PrivateECKeyAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `PrivateECKeyAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivateECKeyAttributes`.
     * @returns {PrivateECKeyAttributes}
     */
    public static _from_object (_o: { [_K in keyof (PrivateECKeyAttributes)]: (PrivateECKeyAttributes)[_K] }): PrivateECKeyAttributes {
        return new PrivateECKeyAttributes(_o.value, _o.keyInfo, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PrivateECKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrivateECKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("keyInfo", true, $.or($.hasTag(_TagClass.universal, 16), $.hasAnyTag))
];

/**
 * @summary The Trailing Root Component Types of PrivateECKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrivateECKeyAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PrivateECKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PrivateECKeyAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PrivateECKeyAttributes: $.ASN1Decoder<PrivateECKeyAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateECKeyAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivateECKeyAttributes (el: _Element): PrivateECKeyAttributes {
    if (!_cached_decoder_for_PrivateECKeyAttributes) { _cached_decoder_for_PrivateECKeyAttributes = function (el: _Element): PrivateECKeyAttributes {
    let value!: Path;
    let keyInfo: OPTIONAL<KeyInfo<Parameters, PublicKeyOperations>>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "value": (_el: _Element): void => { value = _decode_Path(_el); },
        "keyInfo": (_el: _Element): void => { keyInfo = _get_decoder_for_KeyInfo<Parameters, PublicKeyOperations>(_decode_Parameters, _decode_PublicKeyOperations)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrivateECKeyAttributes,
        _extension_additions_list_spec_for_PrivateECKeyAttributes,
        _root_component_type_list_2_spec_for_PrivateECKeyAttributes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PrivateECKeyAttributes(
        value,
        keyInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PrivateECKeyAttributes(el);
}

let _cached_encoder_for_PrivateECKeyAttributes: $.ASN1Encoder<PrivateECKeyAttributes> | null = null;

/**
 * @summary Encodes a(n) PrivateECKeyAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateECKeyAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateECKeyAttributes (value: PrivateECKeyAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivateECKeyAttributes) { _cached_encoder_for_PrivateECKeyAttributes = function (value: PrivateECKeyAttributes, elGetter: $.ASN1Encoder<PrivateECKeyAttributes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Path(value.value, $.BER),
            /* IF_ABSENT  */ ((value.keyInfo === undefined) ? undefined : _get_encoder_for_KeyInfo<Parameters, PublicKeyOperations>(_encode_Parameters, _encode_PublicKeyOperations)(value.keyInfo, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PrivateECKeyAttributes(value, elGetter);
}


/* eslint-enable */
