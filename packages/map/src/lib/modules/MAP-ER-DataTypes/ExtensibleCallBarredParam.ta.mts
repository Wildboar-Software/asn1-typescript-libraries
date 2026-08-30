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
import { CallBarringCause, _enum_for_CallBarringCause, CallBarringCause_barringServiceActive /* IMPORTED_LONG_ENUMERATION_ITEM */, barringServiceActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, CallBarringCause_operatorBarring /* IMPORTED_LONG_ENUMERATION_ITEM */, operatorBarring /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CallBarringCause, _encode_CallBarringCause } from "../MAP-ER-DataTypes/CallBarringCause.ta.mjs";
// export { CallBarringCause, _enum_for_CallBarringCause, CallBarringCause_barringServiceActive /* IMPORTED_LONG_ENUMERATION_ITEM */, barringServiceActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, CallBarringCause_operatorBarring /* IMPORTED_LONG_ENUMERATION_ITEM */, operatorBarring /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CallBarringCause, _encode_CallBarringCause } from "../MAP-ER-DataTypes/CallBarringCause.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary ExtensibleCallBarredParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensibleCallBarredParam ::= SEQUENCE {
 *     callBarringCause    CallBarringCause    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ... ,
 *     unauthorisedMessageOriginator    [1] NULL    OPTIONAL,
 *     anonymousCallRejection    [2] NULL    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ExtensibleCallBarredParam {
    constructor (
        /**
         * @summary `callBarringCause`.
         * @public
         * @readonly
         */
        readonly callBarringCause: OPTIONAL<CallBarringCause>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `unauthorisedMessageOriginator`.
         * @public
         * @readonly
         */
        readonly unauthorisedMessageOriginator: OPTIONAL<NULL>,
        /**
         * @summary `anonymousCallRejection`.
         * @public
         * @readonly
         */
        readonly anonymousCallRejection: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ExtensibleCallBarredParam
     * @description
     * 
     * This takes an `object` and converts it to a `ExtensibleCallBarredParam`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtensibleCallBarredParam`.
     * @returns {ExtensibleCallBarredParam}
     */
    public static _from_object (_o: { [_K in keyof (ExtensibleCallBarredParam)]: (ExtensibleCallBarredParam)[_K] }): ExtensibleCallBarredParam {
        return new ExtensibleCallBarredParam(_o.callBarringCause, _o.extensionContainer, _o.unauthorisedMessageOriginator, _o.anonymousCallRejection, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `callBarringCause`
         * @public
         * @static
         */

    public static _enum_for_callBarringCause = _enum_for_CallBarringCause;
}

/**
 * @summary The Leading Root Component Types of ExtensibleCallBarredParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExtensibleCallBarredParam: $.ComponentSpec[] = [
    new $.ComponentSpec("callBarringCause", true, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ExtensibleCallBarredParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExtensibleCallBarredParam: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExtensibleCallBarredParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExtensibleCallBarredParam: $.ComponentSpec[] = [
    new $.ComponentSpec("unauthorisedMessageOriginator", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("anonymousCallRejection", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

let _cached_decoder_for_ExtensibleCallBarredParam: $.ASN1Decoder<ExtensibleCallBarredParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensibleCallBarredParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtensibleCallBarredParam (el: _Element): ExtensibleCallBarredParam {
    if (!_cached_decoder_for_ExtensibleCallBarredParam) { _cached_decoder_for_ExtensibleCallBarredParam = function (el: _Element): ExtensibleCallBarredParam {
    let callBarringCause: OPTIONAL<CallBarringCause>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let unauthorisedMessageOriginator: OPTIONAL<NULL>;
    let anonymousCallRejection: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "callBarringCause": (_el: _Element): void => { callBarringCause = _decode_CallBarringCause(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "unauthorisedMessageOriginator": (_el: _Element): void => { unauthorisedMessageOriginator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "anonymousCallRejection": (_el: _Element): void => { anonymousCallRejection = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExtensibleCallBarredParam,
        _extension_additions_list_spec_for_ExtensibleCallBarredParam,
        _root_component_type_list_2_spec_for_ExtensibleCallBarredParam,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ExtensibleCallBarredParam(
        callBarringCause,
        extensionContainer,
        unauthorisedMessageOriginator,
        anonymousCallRejection,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ExtensibleCallBarredParam(el);
}

let _cached_encoder_for_ExtensibleCallBarredParam: $.ASN1Encoder<ExtensibleCallBarredParam> | null = null;

/**
 * @summary Encodes a(n) ExtensibleCallBarredParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensibleCallBarredParam, encoded as an ASN.1 Element.
 */
export
function _encode_ExtensibleCallBarredParam (value: ExtensibleCallBarredParam, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtensibleCallBarredParam) { _cached_encoder_for_ExtensibleCallBarredParam = function (value: ExtensibleCallBarredParam, elGetter: $.ASN1Encoder<ExtensibleCallBarredParam>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.callBarringCause === undefined) ? undefined : _encode_CallBarringCause(value.callBarringCause, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.unauthorisedMessageOriginator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.unauthorisedMessageOriginator, $.BER)),
            /* IF_ABSENT  */ ((value.anonymousCallRejection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.anonymousCallRejection, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ExtensibleCallBarredParam(value, elGetter);
}


/* eslint-enable */
