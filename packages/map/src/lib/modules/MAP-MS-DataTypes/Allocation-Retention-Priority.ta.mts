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
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary Allocation_Retention_Priority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Allocation-Retention-Priority ::= SEQUENCE {
 *     priority-level    [0] INTEGER,
 *     pre-emption-capability    [1] BOOLEAN    OPTIONAL,
 *     pre-emption-vulnerability    [2] BOOLEAN    OPTIONAL,
 *     extensionContainer    [3] ExtensionContainer    OPTIONAL,
 *     ... }
 * ```
 * 
 * @class
 */
export
class Allocation_Retention_Priority {
    constructor (
        /**
         * @summary `priority_level`.
         * @public
         * @readonly
         */
        readonly priority_level: INTEGER,
        /**
         * @summary `pre_emption_capability`.
         * @public
         * @readonly
         */
        readonly pre_emption_capability: OPTIONAL<BOOLEAN>,
        /**
         * @summary `pre_emption_vulnerability`.
         * @public
         * @readonly
         */
        readonly pre_emption_vulnerability: OPTIONAL<BOOLEAN>,
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
     * @summary Restructures an object into a Allocation_Retention_Priority
     * @description
     * 
     * This takes an `object` and converts it to a `Allocation_Retention_Priority`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Allocation_Retention_Priority`.
     * @returns {Allocation_Retention_Priority}
     */
    public static _from_object (_o: { [_K in keyof (Allocation_Retention_Priority)]: (Allocation_Retention_Priority)[_K] }): Allocation_Retention_Priority {
        return new Allocation_Retention_Priority(_o.priority_level, _o.pre_emption_capability, _o.pre_emption_vulnerability, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Allocation_Retention_Priority
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Allocation_Retention_Priority: $.ComponentSpec[] = [
    new $.ComponentSpec("priority-level", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("pre-emption-capability", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("pre-emption-vulnerability", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of Allocation_Retention_Priority
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Allocation_Retention_Priority: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Allocation_Retention_Priority
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Allocation_Retention_Priority: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Allocation_Retention_Priority: $.ASN1Decoder<Allocation_Retention_Priority> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Allocation_Retention_Priority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Allocation_Retention_Priority (el: _Element): Allocation_Retention_Priority {
    if (!_cached_decoder_for_Allocation_Retention_Priority) { _cached_decoder_for_Allocation_Retention_Priority = function (el: _Element): Allocation_Retention_Priority {
    let priority_level!: INTEGER;
    let pre_emption_capability: OPTIONAL<BOOLEAN>;
    let pre_emption_vulnerability: OPTIONAL<BOOLEAN>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "priority-level": (_el: _Element): void => { priority_level = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "pre-emption-capability": (_el: _Element): void => { pre_emption_capability = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "pre-emption-vulnerability": (_el: _Element): void => { pre_emption_vulnerability = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Allocation_Retention_Priority,
        _extension_additions_list_spec_for_Allocation_Retention_Priority,
        _root_component_type_list_2_spec_for_Allocation_Retention_Priority,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Allocation_Retention_Priority(
        priority_level,
        pre_emption_capability,
        pre_emption_vulnerability,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Allocation_Retention_Priority(el);
}

let _cached_encoder_for_Allocation_Retention_Priority: $.ASN1Encoder<Allocation_Retention_Priority> | null = null;

/**
 * @summary Encodes a(n) Allocation_Retention_Priority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Allocation_Retention_Priority, encoded as an ASN.1 Element.
 */
export
function _encode_Allocation_Retention_Priority (value: Allocation_Retention_Priority, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Allocation_Retention_Priority) { _cached_encoder_for_Allocation_Retention_Priority = function (value: Allocation_Retention_Priority, elGetter: $.ASN1Encoder<Allocation_Retention_Priority>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.priority_level, $.BER),
            /* IF_ABSENT  */ ((value.pre_emption_capability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.pre_emption_capability, $.BER)),
            /* IF_ABSENT  */ ((value.pre_emption_vulnerability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.pre_emption_vulnerability, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Allocation_Retention_Priority(value, elGetter);
}


/* eslint-enable */
