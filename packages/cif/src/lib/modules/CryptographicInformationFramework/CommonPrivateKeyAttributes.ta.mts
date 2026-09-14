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
import { CredentialIdentifier, _decode_CredentialIdentifier, _encode_CredentialIdentifier } from "../CryptographicInformationFramework/CredentialIdentifier.ta.mjs";
// export { CredentialIdentifier, _decode_CredentialIdentifier, _encode_CredentialIdentifier } from "../CryptographicInformationFramework/CredentialIdentifier.ta.mjs";
import { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../CertificateExtensions/GeneralNames.ta.mjs";
// export { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../CertificateExtensions/GeneralNames.ta.mjs";
import { KeyUsageConstraints, _decode_KeyUsageConstraints, _encode_KeyUsageConstraints } from "../CryptographicInformationFramework/KeyUsageConstraints.ta.mjs";
// export { KeyUsageConstraints, _decode_KeyUsageConstraints, _encode_KeyUsageConstraints } from "../CryptographicInformationFramework/KeyUsageConstraints.ta.mjs";


/**
 * @summary CommonPrivateKeyAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonPrivateKeyAttributes ::= SEQUENCE {
 *     name                Name OPTIONAL,
 *     keyIdentifiers      [0] SEQUENCE OF CredentialIdentifier {{KeyIdentifiers}} OPTIONAL,
 *     generalName         [1] GeneralNames OPTIONAL,
 *     keyUsageConstraints [2] KeyUsageConstraints OPTIONAL,
 *     ... -- For future extensions
 * }
 * (CONSTRAINED BY {-- if keyUsageConstraints present, CommonObjectAttributes.userConsent should be set--})
 * ```
 * 
 * @class
 */
export
class CommonPrivateKeyAttributes {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<Name>,
        /**
         * @summary `keyIdentifiers`.
         * @public
         * @readonly
         */
        readonly keyIdentifiers: OPTIONAL<CredentialIdentifier[]>,
        /**
         * @summary `generalName`.
         * @public
         * @readonly
         */
        readonly generalName: OPTIONAL<GeneralNames>,
        /**
         * @summary `keyUsageConstraints`.
         * @public
         * @readonly
         */
        readonly keyUsageConstraints: OPTIONAL<KeyUsageConstraints>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CommonPrivateKeyAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `CommonPrivateKeyAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonPrivateKeyAttributes`.
     * @returns {CommonPrivateKeyAttributes}
     */
    public static _from_object (_o: { [_K in keyof (CommonPrivateKeyAttributes)]: (CommonPrivateKeyAttributes)[_K] }): CommonPrivateKeyAttributes {
        return new CommonPrivateKeyAttributes(_o.name, _o.keyIdentifiers, _o.generalName, _o.keyUsageConstraints, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CommonPrivateKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommonPrivateKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("name", true, $.or($.hasTag(_TagClass.universal, 16), $.hasTag(_TagClass.universal, 12), $.hasTag(_TagClass.universal, 6))),
    new $.ComponentSpec("keyIdentifiers", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("generalName", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("keyUsageConstraints", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CommonPrivateKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommonPrivateKeyAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommonPrivateKeyAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommonPrivateKeyAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommonPrivateKeyAttributes: $.ASN1Decoder<CommonPrivateKeyAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonPrivateKeyAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonPrivateKeyAttributes (el: _Element): CommonPrivateKeyAttributes {
    if (!_cached_decoder_for_CommonPrivateKeyAttributes) { _cached_decoder_for_CommonPrivateKeyAttributes = function (el: _Element): CommonPrivateKeyAttributes {
    let name: OPTIONAL<Name>;
    let keyIdentifiers: OPTIONAL<CredentialIdentifier[]>;
    let generalName: OPTIONAL<GeneralNames>;
    let keyUsageConstraints: OPTIONAL<KeyUsageConstraints>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = _decode_Name(_el); },
        "keyIdentifiers": (_el: _Element): void => { keyIdentifiers = $._decode_implicit<CredentialIdentifier[]>(() => $._decodeSequenceOf<CredentialIdentifier>(() => _decode_CredentialIdentifier))(_el); },
        "generalName": (_el: _Element): void => { generalName = $._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); },
        "keyUsageConstraints": (_el: _Element): void => { keyUsageConstraints = $._decode_implicit<KeyUsageConstraints>(() => _decode_KeyUsageConstraints)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonPrivateKeyAttributes,
        _extension_additions_list_spec_for_CommonPrivateKeyAttributes,
        _root_component_type_list_2_spec_for_CommonPrivateKeyAttributes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CommonPrivateKeyAttributes(
        name,
        keyIdentifiers,
        generalName,
        keyUsageConstraints,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CommonPrivateKeyAttributes(el);
}

let _cached_encoder_for_CommonPrivateKeyAttributes: $.ASN1Encoder<CommonPrivateKeyAttributes> | null = null;

/**
 * @summary Encodes a(n) CommonPrivateKeyAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonPrivateKeyAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_CommonPrivateKeyAttributes (value: CommonPrivateKeyAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonPrivateKeyAttributes) { _cached_encoder_for_CommonPrivateKeyAttributes = function (value: CommonPrivateKeyAttributes, elGetter: $.ASN1Encoder<CommonPrivateKeyAttributes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.name === undefined) ? undefined : _encode_Name(value.name, $.BER)),
            /* IF_ABSENT  */ ((value.keyIdentifiers === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<CredentialIdentifier>(() => _encode_CredentialIdentifier, $.BER), $.BER)(value.keyIdentifiers, $.BER)),
            /* IF_ABSENT  */ ((value.generalName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_GeneralNames, $.BER)(value.generalName, $.BER)),
            /* IF_ABSENT  */ ((value.keyUsageConstraints === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_KeyUsageConstraints, $.BER)(value.keyUsageConstraints, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CommonPrivateKeyAttributes(value, elGetter);
}


/* eslint-enable */
