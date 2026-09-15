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
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
import { Usage, _decode_Usage, _encode_Usage } from "../CryptographicInformationFramework/Usage.ta.mjs";
// export { Usage, _decode_Usage, _encode_Usage } from "../CryptographicInformationFramework/Usage.ta.mjs";
import { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../CertificateExtensions/GeneralNames.ta.mjs";
// export { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../CertificateExtensions/GeneralNames.ta.mjs";
import { CredentialIdentifier, _decode_CredentialIdentifier, _encode_CredentialIdentifier } from "../CryptographicInformationFramework/CredentialIdentifier.ta.mjs";
// export { CredentialIdentifier, _decode_CredentialIdentifier, _encode_CredentialIdentifier } from "../CryptographicInformationFramework/CredentialIdentifier.ta.mjs";


/**
 * @summary CommonPublicKeyAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonPublicKeyAttributes ::= SEQUENCE {
 *     name            Name OPTIONAL,
 *     trustedUsage    [0] Usage OPTIONAL,
 *     generalName     [1] GeneralNames OPTIONAL,
 *     keyIdentifiers  [2] SEQUENCE OF CredentialIdentifier {{KeyIdentifiers}} OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class CommonPublicKeyAttributes {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<Name>,
        /**
         * @summary `trustedUsage`.
         * @public
         * @readonly
         */
        readonly trustedUsage: OPTIONAL<Usage>,
        /**
         * @summary `generalName`.
         * @public
         * @readonly
         */
        readonly generalName: OPTIONAL<GeneralNames>,
        /**
         * @summary `keyIdentifiers`.
         * @public
         * @readonly
         */
        readonly keyIdentifiers: OPTIONAL<CredentialIdentifier[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CommonPublicKeyAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `CommonPublicKeyAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonPublicKeyAttributes`.
     * @returns {CommonPublicKeyAttributes}
     */
    public static _from_object (_o: { [_K in keyof (CommonPublicKeyAttributes)]: (CommonPublicKeyAttributes)[_K] }): CommonPublicKeyAttributes {
        return new CommonPublicKeyAttributes(_o.name, _o.trustedUsage, _o.generalName, _o.keyIdentifiers, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CommonPublicKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommonPublicKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("name", true, $.or($.hasTag(_TagClass.universal, 16), $.hasTag(_TagClass.universal, 12), $.hasTag(_TagClass.universal, 6))),
    new $.ComponentSpec("trustedUsage", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("generalName", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("keyIdentifiers", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CommonPublicKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommonPublicKeyAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommonPublicKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommonPublicKeyAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommonPublicKeyAttributes: $.ASN1Decoder<CommonPublicKeyAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonPublicKeyAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonPublicKeyAttributes (el: _Element): CommonPublicKeyAttributes {
    if (!_cached_decoder_for_CommonPublicKeyAttributes) { _cached_decoder_for_CommonPublicKeyAttributes = function (el: _Element): CommonPublicKeyAttributes {
    let name: OPTIONAL<Name>;
    let trustedUsage: OPTIONAL<Usage>;
    let generalName: OPTIONAL<GeneralNames>;
    let keyIdentifiers: OPTIONAL<CredentialIdentifier[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = _decode_Name(_el); },
        "trustedUsage": (_el: _Element): void => { trustedUsage = $._decode_implicit<Usage>(() => _decode_Usage)(_el); },
        "generalName": (_el: _Element): void => { generalName = $._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); },
        "keyIdentifiers": (_el: _Element): void => { keyIdentifiers = $._decode_implicit<CredentialIdentifier[]>(() => $._decodeSequenceOf<CredentialIdentifier>(() => _decode_CredentialIdentifier))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonPublicKeyAttributes,
        _extension_additions_list_spec_for_CommonPublicKeyAttributes,
        _root_component_type_list_2_spec_for_CommonPublicKeyAttributes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CommonPublicKeyAttributes(
        name,
        trustedUsage,
        generalName,
        keyIdentifiers,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CommonPublicKeyAttributes(el);
}

let _cached_encoder_for_CommonPublicKeyAttributes: $.ASN1Encoder<CommonPublicKeyAttributes> | null = null;

/**
 * @summary Encodes a(n) CommonPublicKeyAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonPublicKeyAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_CommonPublicKeyAttributes (value: CommonPublicKeyAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonPublicKeyAttributes) { _cached_encoder_for_CommonPublicKeyAttributes = function (value: CommonPublicKeyAttributes): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.name === undefined) ? undefined : _encode_Name(value.name, $.BER)),
            /* IF_ABSENT  */ ((value.trustedUsage === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Usage, $.BER)(value.trustedUsage, $.BER)),
            /* IF_ABSENT  */ ((value.generalName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_GeneralNames, $.BER)(value.generalName, $.BER)),
            /* IF_ABSENT  */ ((value.keyIdentifiers === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<CredentialIdentifier>(() => _encode_CredentialIdentifier, $.BER), $.BER)(value.keyIdentifiers, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CommonPublicKeyAttributes(value, elGetter);
}


/* eslint-enable */
