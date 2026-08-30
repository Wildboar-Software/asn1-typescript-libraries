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
import { CUG_RejectCause, _enum_for_CUG_RejectCause, CUG_RejectCause_incomingCallsBarredWithinCUG /* IMPORTED_LONG_ENUMERATION_ITEM */, incomingCallsBarredWithinCUG /* IMPORTED_SHORT_ENUMERATION_ITEM */, CUG_RejectCause_subscriberNotMemberOfCUG /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriberNotMemberOfCUG /* IMPORTED_SHORT_ENUMERATION_ITEM */, CUG_RejectCause_requestedBasicServiceViolatesCUG_Constraints /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedBasicServiceViolatesCUG_Constraints /* IMPORTED_SHORT_ENUMERATION_ITEM */, CUG_RejectCause_calledPartySS_InteractionViolation /* IMPORTED_LONG_ENUMERATION_ITEM */, calledPartySS_InteractionViolation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CUG_RejectCause, _encode_CUG_RejectCause } from "../MAP-ER-DataTypes/CUG-RejectCause.ta.mjs";
// export { CUG_RejectCause, _enum_for_CUG_RejectCause, CUG_RejectCause_incomingCallsBarredWithinCUG /* IMPORTED_LONG_ENUMERATION_ITEM */, incomingCallsBarredWithinCUG /* IMPORTED_SHORT_ENUMERATION_ITEM */, CUG_RejectCause_subscriberNotMemberOfCUG /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriberNotMemberOfCUG /* IMPORTED_SHORT_ENUMERATION_ITEM */, CUG_RejectCause_requestedBasicServiceViolatesCUG_Constraints /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedBasicServiceViolatesCUG_Constraints /* IMPORTED_SHORT_ENUMERATION_ITEM */, CUG_RejectCause_calledPartySS_InteractionViolation /* IMPORTED_LONG_ENUMERATION_ITEM */, calledPartySS_InteractionViolation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CUG_RejectCause, _encode_CUG_RejectCause } from "../MAP-ER-DataTypes/CUG-RejectCause.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary CUG_RejectParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUG-RejectParam ::= SEQUENCE {
 *     cug-RejectCause    CUG-RejectCause    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class CUG_RejectParam {
    constructor (
        /**
         * @summary `cug_RejectCause`.
         * @public
         * @readonly
         */
        readonly cug_RejectCause: OPTIONAL<CUG_RejectCause>,
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
     * @summary Restructures an object into a CUG_RejectParam
     * @description
     * 
     * This takes an `object` and converts it to a `CUG_RejectParam`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CUG_RejectParam`.
     * @returns {CUG_RejectParam}
     */
    public static _from_object (_o: { [_K in keyof (CUG_RejectParam)]: (CUG_RejectParam)[_K] }): CUG_RejectParam {
        return new CUG_RejectParam(_o.cug_RejectCause, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `cug_RejectCause`
         * @public
         * @static
         */

    public static _enum_for_cug_RejectCause = _enum_for_CUG_RejectCause;
}

/**
 * @summary The Leading Root Component Types of CUG_RejectParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CUG_RejectParam: $.ComponentSpec[] = [
    new $.ComponentSpec("cug-RejectCause", true, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CUG_RejectParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CUG_RejectParam: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CUG_RejectParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CUG_RejectParam: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CUG_RejectParam: $.ASN1Decoder<CUG_RejectParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CUG_RejectParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CUG_RejectParam (el: _Element): CUG_RejectParam {
    if (!_cached_decoder_for_CUG_RejectParam) { _cached_decoder_for_CUG_RejectParam = function (el: _Element): CUG_RejectParam {
    let cug_RejectCause: OPTIONAL<CUG_RejectCause>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cug-RejectCause": (_el: _Element): void => { cug_RejectCause = _decode_CUG_RejectCause(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CUG_RejectParam,
        _extension_additions_list_spec_for_CUG_RejectParam,
        _root_component_type_list_2_spec_for_CUG_RejectParam,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CUG_RejectParam(
        cug_RejectCause,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CUG_RejectParam(el);
}

let _cached_encoder_for_CUG_RejectParam: $.ASN1Encoder<CUG_RejectParam> | null = null;

/**
 * @summary Encodes a(n) CUG_RejectParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CUG_RejectParam, encoded as an ASN.1 Element.
 */
export
function _encode_CUG_RejectParam (value: CUG_RejectParam, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CUG_RejectParam) { _cached_encoder_for_CUG_RejectParam = function (value: CUG_RejectParam, elGetter: $.ASN1Encoder<CUG_RejectParam>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.cug_RejectCause === undefined) ? undefined : _encode_CUG_RejectCause(value.cug_RejectCause, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CUG_RejectParam(value, elGetter);
}


/* eslint-enable */
