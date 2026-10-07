/* eslint-disable */
import {
    OPTIONAL,
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
import { ObjectValue, _get_decoder_for_ObjectValue, _get_encoder_for_ObjectValue } from "../CryptographicInformationFramework/ObjectValue.ta.mjs";
import { DSAPublicKeyChoice, _decode_DSAPublicKeyChoice, _encode_DSAPublicKeyChoice } from "../CryptographicInformationFramework/DSAPublicKeyChoice.ta.mjs";
import { KeyInfo, _get_decoder_for_KeyInfo, _get_encoder_for_KeyInfo } from "../CryptographicInformationFramework/KeyInfo.ta.mjs";
import { DomainParameters, _decode_DomainParameters, _encode_DomainParameters } from "../ANSI-X9-42/DomainParameters.ta.mjs";
import { PublicKeyOperations, _decode_PublicKeyOperations, _encode_PublicKeyOperations } from "../CryptographicInformationFramework/PublicKeyOperations.ta.mjs";


/**
 * @summary PublicDSAKeyAttributes
 * @description
 * 
 * DSA public-key attributes. ISO/IEC 7816-15:2016 §8.5.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicDSAKeyAttributes ::= SEQUENCE {
 *     value   ObjectValue {DSAPublicKeyChoice},
 *     keyInfo KeyInfo {DomainParameters, PublicKeyOperations} OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class PublicDSAKeyAttributes {
    constructor (
        /**
         * @summary `value`.
         * @description
         * `ObjectValue` of `DSAPublicKeyChoice` or a card-specific DSA public
         * key. ISO/IEC 7816-15:2016 §8.5.5.
         * @public
         * @readonly
         */
        readonly value: ObjectValue<DSAPublicKeyChoice>,
        /**
         * @summary `keyInfo`.
         * @description
         * If present, overrides `CIAInfo.supportedAlgorithms` referenced by
         * `CommonKeyAttributes.algReference`. Omit when available by other
         * means. ISO/IEC 7816-15:2016 §8.4.2.
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
     * @summary Restructures an object into a PublicDSAKeyAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `PublicDSAKeyAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PublicDSAKeyAttributes`.
     * @returns {PublicDSAKeyAttributes}
     */
    public static _from_object (_o: { [_K in keyof (PublicDSAKeyAttributes)]: (PublicDSAKeyAttributes)[_K] }): PublicDSAKeyAttributes {
        return new PublicDSAKeyAttributes(_o.value, _o.keyInfo, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PublicDSAKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PublicDSAKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag),
    new $.ComponentSpec("keyInfo", true, $.or($.hasTag(_TagClass.universal, 16), $.hasAnyTag))
];

/**
 * @summary The Trailing Root Component Types of PublicDSAKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PublicDSAKeyAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PublicDSAKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PublicDSAKeyAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PublicDSAKeyAttributes: $.ASN1Decoder<PublicDSAKeyAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PublicDSAKeyAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PublicDSAKeyAttributes (el: _Element): PublicDSAKeyAttributes {
    if (!_cached_decoder_for_PublicDSAKeyAttributes) { _cached_decoder_for_PublicDSAKeyAttributes = function (el: _Element): PublicDSAKeyAttributes {
    let value!: ObjectValue<DSAPublicKeyChoice>;
    let keyInfo: OPTIONAL<KeyInfo<DomainParameters, PublicKeyOperations>>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "value": (_el: _Element): void => { value = _get_decoder_for_ObjectValue<DSAPublicKeyChoice>(_decode_DSAPublicKeyChoice)(_el); },
        "keyInfo": (_el: _Element): void => { keyInfo = _get_decoder_for_KeyInfo<DomainParameters, PublicKeyOperations>(_decode_DomainParameters, _decode_PublicKeyOperations)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PublicDSAKeyAttributes,
        _extension_additions_list_spec_for_PublicDSAKeyAttributes,
        _root_component_type_list_2_spec_for_PublicDSAKeyAttributes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PublicDSAKeyAttributes(
        value,
        keyInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PublicDSAKeyAttributes(el);
}

let _cached_encoder_for_PublicDSAKeyAttributes: $.ASN1Encoder<PublicDSAKeyAttributes> | null = null;

/**
 * @summary Encodes a(n) PublicDSAKeyAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicDSAKeyAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_PublicDSAKeyAttributes (value: PublicDSAKeyAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PublicDSAKeyAttributes) { _cached_encoder_for_PublicDSAKeyAttributes = function (value: PublicDSAKeyAttributes): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _get_encoder_for_ObjectValue<DSAPublicKeyChoice>(_encode_DSAPublicKeyChoice)(value.value, $.BER),
            /* IF_ABSENT  */ ((value.keyInfo === undefined) ? undefined : _get_encoder_for_KeyInfo<DomainParameters, PublicKeyOperations>(_encode_DomainParameters, _encode_PublicKeyOperations)(value.keyInfo, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PublicDSAKeyAttributes(value, elGetter);
}


/* eslint-enable */
