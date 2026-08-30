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
import { PermittedIntegrityProtectionAlgorithms, _decode_PermittedIntegrityProtectionAlgorithms, _encode_PermittedIntegrityProtectionAlgorithms } from "../MAP-MS-DataTypes/PermittedIntegrityProtectionAlgorithms.ta.mjs";
// export { PermittedIntegrityProtectionAlgorithms, _decode_PermittedIntegrityProtectionAlgorithms, _encode_PermittedIntegrityProtectionAlgorithms } from "../MAP-MS-DataTypes/PermittedIntegrityProtectionAlgorithms.ta.mjs";
import { PermittedEncryptionAlgorithms, _decode_PermittedEncryptionAlgorithms, _encode_PermittedEncryptionAlgorithms } from "../MAP-MS-DataTypes/PermittedEncryptionAlgorithms.ta.mjs";
// export { PermittedEncryptionAlgorithms, _decode_PermittedEncryptionAlgorithms, _encode_PermittedEncryptionAlgorithms } from "../MAP-MS-DataTypes/PermittedEncryptionAlgorithms.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary AllowedUMTS_Algorithms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AllowedUMTS-Algorithms ::= SEQUENCE {
 *     integrityProtectionAlgorithms    [0]    PermittedIntegrityProtectionAlgorithms    OPTIONAL,
 *     encryptionAlgorithms    [1]    PermittedEncryptionAlgorithms    OPTIONAL,
 *     extensionContainer    [2]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class AllowedUMTS_Algorithms {
    constructor (
        /**
         * @summary `integrityProtectionAlgorithms`.
         * @public
         * @readonly
         */
        readonly integrityProtectionAlgorithms: OPTIONAL<PermittedIntegrityProtectionAlgorithms>,
        /**
         * @summary `encryptionAlgorithms`.
         * @public
         * @readonly
         */
        readonly encryptionAlgorithms: OPTIONAL<PermittedEncryptionAlgorithms>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AllowedUMTS_Algorithms
     * @description
     * 
     * This takes an `object` and converts it to a `AllowedUMTS_Algorithms`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AllowedUMTS_Algorithms`.
     * @returns {AllowedUMTS_Algorithms}
     */
    public static _from_object (_o: { [_K in keyof (AllowedUMTS_Algorithms)]: (AllowedUMTS_Algorithms)[_K] }): AllowedUMTS_Algorithms {
        return new AllowedUMTS_Algorithms(_o.integrityProtectionAlgorithms, _o.encryptionAlgorithms, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AllowedUMTS_Algorithms
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AllowedUMTS_Algorithms: $.ComponentSpec[] = [
    new $.ComponentSpec("integrityProtectionAlgorithms", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("encryptionAlgorithms", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AllowedUMTS_Algorithms
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AllowedUMTS_Algorithms: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AllowedUMTS_Algorithms
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AllowedUMTS_Algorithms: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AllowedUMTS_Algorithms: $.ASN1Decoder<AllowedUMTS_Algorithms> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AllowedUMTS_Algorithms
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AllowedUMTS_Algorithms (el: _Element): AllowedUMTS_Algorithms {
    if (!_cached_decoder_for_AllowedUMTS_Algorithms) { _cached_decoder_for_AllowedUMTS_Algorithms = function (el: _Element): AllowedUMTS_Algorithms {
    let integrityProtectionAlgorithms: OPTIONAL<PermittedIntegrityProtectionAlgorithms>;
    let encryptionAlgorithms: OPTIONAL<PermittedEncryptionAlgorithms>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "integrityProtectionAlgorithms": (_el: _Element): void => { integrityProtectionAlgorithms = $._decode_implicit<PermittedIntegrityProtectionAlgorithms>(() => _decode_PermittedIntegrityProtectionAlgorithms)(_el); },
        "encryptionAlgorithms": (_el: _Element): void => { encryptionAlgorithms = $._decode_implicit<PermittedEncryptionAlgorithms>(() => _decode_PermittedEncryptionAlgorithms)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AllowedUMTS_Algorithms,
        _extension_additions_list_spec_for_AllowedUMTS_Algorithms,
        _root_component_type_list_2_spec_for_AllowedUMTS_Algorithms,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AllowedUMTS_Algorithms(
        integrityProtectionAlgorithms,
        encryptionAlgorithms,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AllowedUMTS_Algorithms(el);
}

let _cached_encoder_for_AllowedUMTS_Algorithms: $.ASN1Encoder<AllowedUMTS_Algorithms> | null = null;

/**
 * @summary Encodes a(n) AllowedUMTS_Algorithms into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllowedUMTS_Algorithms, encoded as an ASN.1 Element.
 */
export
function _encode_AllowedUMTS_Algorithms (value: AllowedUMTS_Algorithms, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AllowedUMTS_Algorithms) { _cached_encoder_for_AllowedUMTS_Algorithms = function (value: AllowedUMTS_Algorithms, elGetter: $.ASN1Encoder<AllowedUMTS_Algorithms>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.integrityProtectionAlgorithms === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_PermittedIntegrityProtectionAlgorithms, $.BER)(value.integrityProtectionAlgorithms, $.BER)),
            /* IF_ABSENT  */ ((value.encryptionAlgorithms === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PermittedEncryptionAlgorithms, $.BER)(value.encryptionAlgorithms, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AllowedUMTS_Algorithms(value, elGetter);
}


/* eslint-enable */
