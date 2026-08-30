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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ChosenIntegrityProtectionAlgorithm, _decode_ChosenIntegrityProtectionAlgorithm, _encode_ChosenIntegrityProtectionAlgorithm } from "../MAP-MS-DataTypes/ChosenIntegrityProtectionAlgorithm.ta.mjs";
// export { ChosenIntegrityProtectionAlgorithm, _decode_ChosenIntegrityProtectionAlgorithm, _encode_ChosenIntegrityProtectionAlgorithm } from "../MAP-MS-DataTypes/ChosenIntegrityProtectionAlgorithm.ta.mjs";
import { ChosenEncryptionAlgorithm, _decode_ChosenEncryptionAlgorithm, _encode_ChosenEncryptionAlgorithm } from "../MAP-MS-DataTypes/ChosenEncryptionAlgorithm.ta.mjs";
// export { ChosenEncryptionAlgorithm, _decode_ChosenEncryptionAlgorithm, _encode_ChosenEncryptionAlgorithm } from "../MAP-MS-DataTypes/ChosenEncryptionAlgorithm.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary SelectedUMTS_Algorithms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SelectedUMTS-Algorithms ::= SEQUENCE {
 *     integrityProtectionAlgorithm    [0]    ChosenIntegrityProtectionAlgorithm    OPTIONAL,
 *     encryptionAlgorithm    [1]    ChosenEncryptionAlgorithm    OPTIONAL,
 *     extensionContainer    [2]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class SelectedUMTS_Algorithms {
    constructor (
        /**
         * @summary `integrityProtectionAlgorithm`.
         * @public
         * @readonly
         */
        readonly integrityProtectionAlgorithm: OPTIONAL<ChosenIntegrityProtectionAlgorithm>,
        /**
         * @summary `encryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly encryptionAlgorithm: OPTIONAL<ChosenEncryptionAlgorithm>,
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
     * @summary Restructures an object into a SelectedUMTS_Algorithms
     * @description
     * 
     * This takes an `object` and converts it to a `SelectedUMTS_Algorithms`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SelectedUMTS_Algorithms`.
     * @returns {SelectedUMTS_Algorithms}
     */
    public static _from_object (_o: { [_K in keyof (SelectedUMTS_Algorithms)]: (SelectedUMTS_Algorithms)[_K] }): SelectedUMTS_Algorithms {
        return new SelectedUMTS_Algorithms(_o.integrityProtectionAlgorithm, _o.encryptionAlgorithm, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SelectedUMTS_Algorithms
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SelectedUMTS_Algorithms: $.ComponentSpec[] = [
    new $.ComponentSpec("integrityProtectionAlgorithm", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("encryptionAlgorithm", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SelectedUMTS_Algorithms
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SelectedUMTS_Algorithms: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SelectedUMTS_Algorithms
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SelectedUMTS_Algorithms: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SelectedUMTS_Algorithms: $.ASN1Decoder<SelectedUMTS_Algorithms> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SelectedUMTS_Algorithms
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SelectedUMTS_Algorithms (el: _Element): SelectedUMTS_Algorithms {
    if (!_cached_decoder_for_SelectedUMTS_Algorithms) { _cached_decoder_for_SelectedUMTS_Algorithms = function (el: _Element): SelectedUMTS_Algorithms {
    let integrityProtectionAlgorithm: OPTIONAL<ChosenIntegrityProtectionAlgorithm>;
    let encryptionAlgorithm: OPTIONAL<ChosenEncryptionAlgorithm>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "integrityProtectionAlgorithm": (_el: _Element): void => { integrityProtectionAlgorithm = $._decode_implicit<ChosenIntegrityProtectionAlgorithm>(() => _decode_ChosenIntegrityProtectionAlgorithm)(_el); },
        "encryptionAlgorithm": (_el: _Element): void => { encryptionAlgorithm = $._decode_implicit<ChosenEncryptionAlgorithm>(() => _decode_ChosenEncryptionAlgorithm)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SelectedUMTS_Algorithms,
        _extension_additions_list_spec_for_SelectedUMTS_Algorithms,
        _root_component_type_list_2_spec_for_SelectedUMTS_Algorithms,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SelectedUMTS_Algorithms(
        integrityProtectionAlgorithm,
        encryptionAlgorithm,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SelectedUMTS_Algorithms(el);
}

let _cached_encoder_for_SelectedUMTS_Algorithms: $.ASN1Encoder<SelectedUMTS_Algorithms> | null = null;

/**
 * @summary Encodes a(n) SelectedUMTS_Algorithms into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SelectedUMTS_Algorithms, encoded as an ASN.1 Element.
 */
export
function _encode_SelectedUMTS_Algorithms (value: SelectedUMTS_Algorithms, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SelectedUMTS_Algorithms) { _cached_encoder_for_SelectedUMTS_Algorithms = function (value: SelectedUMTS_Algorithms, elGetter: $.ASN1Encoder<SelectedUMTS_Algorithms>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.integrityProtectionAlgorithm === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ChosenIntegrityProtectionAlgorithm, $.BER)(value.integrityProtectionAlgorithm, $.BER)),
            /* IF_ABSENT  */ ((value.encryptionAlgorithm === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ChosenEncryptionAlgorithm, $.BER)(value.encryptionAlgorithm, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SelectedUMTS_Algorithms(value, elGetter);
}


/* eslint-enable */
