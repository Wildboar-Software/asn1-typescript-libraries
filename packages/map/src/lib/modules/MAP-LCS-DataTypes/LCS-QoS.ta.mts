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
import { Horizontal_Accuracy, _decode_Horizontal_Accuracy, _encode_Horizontal_Accuracy } from "../MAP-LCS-DataTypes/Horizontal-Accuracy.ta.mjs";
// export { Horizontal_Accuracy, _decode_Horizontal_Accuracy, _encode_Horizontal_Accuracy } from "../MAP-LCS-DataTypes/Horizontal-Accuracy.ta.mjs";
import { Vertical_Accuracy, _decode_Vertical_Accuracy, _encode_Vertical_Accuracy } from "../MAP-LCS-DataTypes/Vertical-Accuracy.ta.mjs";
// export { Vertical_Accuracy, _decode_Vertical_Accuracy, _encode_Vertical_Accuracy } from "../MAP-LCS-DataTypes/Vertical-Accuracy.ta.mjs";
import { ResponseTime, _decode_ResponseTime, _encode_ResponseTime } from "../MAP-LCS-DataTypes/ResponseTime.ta.mjs";
// export { ResponseTime, _decode_ResponseTime, _encode_ResponseTime } from "../MAP-LCS-DataTypes/ResponseTime.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { LCS_QoS_Class, _enum_for_LCS_QoS_Class, LCS_QoS_Class_bestEffort /* IMPORTED_LONG_ENUMERATION_ITEM */, bestEffort /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCS_QoS_Class_assured /* IMPORTED_LONG_ENUMERATION_ITEM */, assured /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LCS_QoS_Class, _encode_LCS_QoS_Class } from "../MAP-LCS-DataTypes/LCS-QoS-Class.ta.mjs";
// export { LCS_QoS_Class, _enum_for_LCS_QoS_Class, LCS_QoS_Class_bestEffort /* IMPORTED_LONG_ENUMERATION_ITEM */, bestEffort /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCS_QoS_Class_assured /* IMPORTED_LONG_ENUMERATION_ITEM */, assured /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LCS_QoS_Class, _encode_LCS_QoS_Class } from "../MAP-LCS-DataTypes/LCS-QoS-Class.ta.mjs";


/**
 * @summary LCS_QoS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCS-QoS ::= SEQUENCE {
 *     horizontal-accuracy    [0] Horizontal-Accuracy    OPTIONAL,
 *     verticalCoordinateRequest    [1] NULL    OPTIONAL,
 *     vertical-accuracy    [2] Vertical-Accuracy    OPTIONAL,    responseTime    [3] ResponseTime    OPTIONAL,
 *     extensionContainer    [4] ExtensionContainer    OPTIONAL,
 *     ...,
 *     velocityRequest    [5] NULL    OPTIONAL,
 *     lcs-qos-class    [6] LCS-QoS-Class    OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LCS_QoS {
    constructor (
        /**
         * @summary `horizontal_accuracy`.
         * @public
         * @readonly
         */
        readonly horizontal_accuracy: OPTIONAL<Horizontal_Accuracy>,
        /**
         * @summary `verticalCoordinateRequest`.
         * @public
         * @readonly
         */
        readonly verticalCoordinateRequest: OPTIONAL<NULL>,
        /**
         * @summary `vertical_accuracy`.
         * @public
         * @readonly
         */
        readonly vertical_accuracy: OPTIONAL<Vertical_Accuracy>,
        /**
         * @summary `responseTime`.
         * @public
         * @readonly
         */
        readonly responseTime: OPTIONAL<ResponseTime>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `velocityRequest`.
         * @public
         * @readonly
         */
        readonly velocityRequest: OPTIONAL<NULL>,
        /**
         * @summary `lcs_qos_class`.
         * @public
         * @readonly
         */
        readonly lcs_qos_class: OPTIONAL<LCS_QoS_Class>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LCS_QoS
     * @description
     * 
     * This takes an `object` and converts it to a `LCS_QoS`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LCS_QoS`.
     * @returns {LCS_QoS}
     */
    public static _from_object (_o: { [_K in keyof (LCS_QoS)]: (LCS_QoS)[_K] }): LCS_QoS {
        return new LCS_QoS(_o.horizontal_accuracy, _o.verticalCoordinateRequest, _o.vertical_accuracy, _o.responseTime, _o.extensionContainer, _o.velocityRequest, _o.lcs_qos_class, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `lcs_qos_class`
         * @public
         * @static
         */

    public static _enum_for_lcs_qos_class = _enum_for_LCS_QoS_Class;
}

/**
 * @summary The Leading Root Component Types of LCS_QoS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LCS_QoS: $.ComponentSpec[] = [
    new $.ComponentSpec("horizontal-accuracy", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("verticalCoordinateRequest", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("vertical-accuracy", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("responseTime", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of LCS_QoS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LCS_QoS: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LCS_QoS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LCS_QoS: $.ComponentSpec[] = [
    new $.ComponentSpec("velocityRequest", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("lcs-qos-class", true, $.hasTag(_TagClass.context, 6), undefined, undefined)
];

let _cached_decoder_for_LCS_QoS: $.ASN1Decoder<LCS_QoS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCS_QoS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCS_QoS (el: _Element): LCS_QoS {
    if (!_cached_decoder_for_LCS_QoS) { _cached_decoder_for_LCS_QoS = function (el: _Element): LCS_QoS {
    let horizontal_accuracy: OPTIONAL<Horizontal_Accuracy>;
    let verticalCoordinateRequest: OPTIONAL<NULL>;
    let vertical_accuracy: OPTIONAL<Vertical_Accuracy>;
    let responseTime: OPTIONAL<ResponseTime>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let velocityRequest: OPTIONAL<NULL>;
    let lcs_qos_class: OPTIONAL<LCS_QoS_Class>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "horizontal-accuracy": (_el: _Element): void => { horizontal_accuracy = $._decode_implicit<Horizontal_Accuracy>(() => _decode_Horizontal_Accuracy)(_el); },
        "verticalCoordinateRequest": (_el: _Element): void => { verticalCoordinateRequest = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "vertical-accuracy": (_el: _Element): void => { vertical_accuracy = $._decode_implicit<Vertical_Accuracy>(() => _decode_Vertical_Accuracy)(_el); },
        "responseTime": (_el: _Element): void => { responseTime = $._decode_implicit<ResponseTime>(() => _decode_ResponseTime)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "velocityRequest": (_el: _Element): void => { velocityRequest = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "lcs-qos-class": (_el: _Element): void => { lcs_qos_class = $._decode_implicit<LCS_QoS_Class>(() => _decode_LCS_QoS_Class)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LCS_QoS,
        _extension_additions_list_spec_for_LCS_QoS,
        _root_component_type_list_2_spec_for_LCS_QoS,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LCS_QoS(
        horizontal_accuracy,
        verticalCoordinateRequest,
        vertical_accuracy,
        responseTime,
        extensionContainer,
        velocityRequest,
        lcs_qos_class,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LCS_QoS(el);
}

let _cached_encoder_for_LCS_QoS: $.ASN1Encoder<LCS_QoS> | null = null;

/**
 * @summary Encodes a(n) LCS_QoS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCS_QoS, encoded as an ASN.1 Element.
 */
export
function _encode_LCS_QoS (value: LCS_QoS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCS_QoS) { _cached_encoder_for_LCS_QoS = function (value: LCS_QoS, elGetter: $.ASN1Encoder<LCS_QoS>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.horizontal_accuracy === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Horizontal_Accuracy, $.BER)(value.horizontal_accuracy, $.BER)),
            /* IF_ABSENT  */ ((value.verticalCoordinateRequest === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.verticalCoordinateRequest, $.BER)),
            /* IF_ABSENT  */ ((value.vertical_accuracy === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Vertical_Accuracy, $.BER)(value.vertical_accuracy, $.BER)),
            /* IF_ABSENT  */ ((value.responseTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ResponseTime, $.BER)(value.responseTime, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.velocityRequest === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER)(value.velocityRequest, $.BER)),
            /* IF_ABSENT  */ ((value.lcs_qos_class === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_LCS_QoS_Class, $.BER)(value.lcs_qos_class, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LCS_QoS(value, elGetter);
}


/* eslint-enable */
