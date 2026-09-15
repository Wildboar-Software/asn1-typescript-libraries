/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    NULL,
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
import { PublicKeyOperations, _decode_PublicKeyOperations, _encode_PublicKeyOperations } from "../CryptographicInformationFramework/PublicKeyOperations.ta.mjs";
// export { PublicKeyOperations, _decode_PublicKeyOperations, _encode_PublicKeyOperations } from "../CryptographicInformationFramework/PublicKeyOperations.ta.mjs";


/**
 * @summary PrivateRSAKeyAttributes
 * @description
 * 
 * RSA private-key type attributes. ISO/IEC 7816-15:2016 §8.4.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateRSAKeyAttributes ::= SEQUENCE {
 *     value           Path,
 *     modulusLength   INTEGER, -- modulus length in bits, e.g. 1024
 *     keyInfo         KeyInfo {NULL, PublicKeyOperations} OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class PrivateRSAKeyAttributes {
    constructor (
        /**
         * @summary `value`.
         * @description
         * Path to the file holding the private key; empty path if no file need
         * be specified. ISO/IEC 7816-15:2016 §8.4. RSA.
         * @public
         * @readonly
         */
        readonly value: Path,
        /**
         * @summary `modulusLength`.
         * @description
         * Modulus length in bits (e.g. 1024), required to format data before
         * sending it to the card. ISO/IEC 7816-15:2016 §8.4.2.
         * @public
         * @readonly
         */
        readonly modulusLength: INTEGER,
        /**
         * @summary `keyInfo`.
         * @description
         * If present, overrides `CIAInfo.supportedAlgorithms` referenced by
         * `CommonKeyAttributes.algReference`. Omit when available by other
         * means. ISO/IEC 7816-15:2016 §8.4.2.
         * @public
         * @readonly
         */
        readonly keyInfo: OPTIONAL<KeyInfo<NULL, PublicKeyOperations>>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PrivateRSAKeyAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `PrivateRSAKeyAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivateRSAKeyAttributes`.
     * @returns {PrivateRSAKeyAttributes}
     */
    public static _from_object (_o: { [_K in keyof (PrivateRSAKeyAttributes)]: (PrivateRSAKeyAttributes)[_K] }): PrivateRSAKeyAttributes {
        return new PrivateRSAKeyAttributes(_o.value, _o.modulusLength, _o.keyInfo, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PrivateRSAKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrivateRSAKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("modulusLength", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("keyInfo", true, $.or($.hasTag(_TagClass.universal, 16), $.hasAnyTag))
];

/**
 * @summary The Trailing Root Component Types of PrivateRSAKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrivateRSAKeyAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PrivateRSAKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PrivateRSAKeyAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PrivateRSAKeyAttributes: $.ASN1Decoder<PrivateRSAKeyAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateRSAKeyAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivateRSAKeyAttributes (el: _Element): PrivateRSAKeyAttributes {
    if (!_cached_decoder_for_PrivateRSAKeyAttributes) { _cached_decoder_for_PrivateRSAKeyAttributes = function (el: _Element): PrivateRSAKeyAttributes {
    let value!: Path;
    let modulusLength!: INTEGER;
    let keyInfo: OPTIONAL<KeyInfo<NULL, PublicKeyOperations>>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "value": (_el: _Element): void => { value = _decode_Path(_el); },
        "modulusLength": (_el: _Element): void => { modulusLength = $._decodeInteger(_el); },
        "keyInfo": (_el: _Element): void => { keyInfo = _get_decoder_for_KeyInfo<NULL, PublicKeyOperations>($._decodeNull, _decode_PublicKeyOperations)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrivateRSAKeyAttributes,
        _extension_additions_list_spec_for_PrivateRSAKeyAttributes,
        _root_component_type_list_2_spec_for_PrivateRSAKeyAttributes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PrivateRSAKeyAttributes(
        value,
        modulusLength,
        keyInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PrivateRSAKeyAttributes(el);
}

let _cached_encoder_for_PrivateRSAKeyAttributes: $.ASN1Encoder<PrivateRSAKeyAttributes> | null = null;

/**
 * @summary Encodes a(n) PrivateRSAKeyAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateRSAKeyAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateRSAKeyAttributes (value: PrivateRSAKeyAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivateRSAKeyAttributes) { _cached_encoder_for_PrivateRSAKeyAttributes = function (value: PrivateRSAKeyAttributes): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Path(value.value, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.modulusLength, $.BER),
            /* IF_ABSENT  */ ((value.keyInfo === undefined) ? undefined : _get_encoder_for_KeyInfo<NULL, PublicKeyOperations>($._encodeNull, _encode_PublicKeyOperations)(value.keyInfo, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PrivateRSAKeyAttributes(value, elGetter);
}


/* eslint-enable */
