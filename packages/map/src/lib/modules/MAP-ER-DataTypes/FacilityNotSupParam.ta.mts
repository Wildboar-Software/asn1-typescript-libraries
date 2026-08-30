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
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary FacilityNotSupParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FacilityNotSupParam ::= SEQUENCE {
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     shapeOfLocationEstimateNotSupported [0]    NULL    OPTIONAL,
 *     neededLcsCapabilityNotSupportedInServingNode [1] NULL    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class FacilityNotSupParam {
    constructor (
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `shapeOfLocationEstimateNotSupported`.
         * @public
         * @readonly
         */
        readonly shapeOfLocationEstimateNotSupported: OPTIONAL<NULL>,
        /**
         * @summary `neededLcsCapabilityNotSupportedInServingNode`.
         * @public
         * @readonly
         */
        readonly neededLcsCapabilityNotSupportedInServingNode: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a FacilityNotSupParam
     * @description
     * 
     * This takes an `object` and converts it to a `FacilityNotSupParam`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FacilityNotSupParam`.
     * @returns {FacilityNotSupParam}
     */
    public static _from_object (_o: { [_K in keyof (FacilityNotSupParam)]: (FacilityNotSupParam)[_K] }): FacilityNotSupParam {
        return new FacilityNotSupParam(_o.extensionContainer, _o.shapeOfLocationEstimateNotSupported, _o.neededLcsCapabilityNotSupportedInServingNode, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of FacilityNotSupParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FacilityNotSupParam: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of FacilityNotSupParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FacilityNotSupParam: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FacilityNotSupParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FacilityNotSupParam: $.ComponentSpec[] = [
    new $.ComponentSpec("shapeOfLocationEstimateNotSupported", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("neededLcsCapabilityNotSupportedInServingNode", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

let _cached_decoder_for_FacilityNotSupParam: $.ASN1Decoder<FacilityNotSupParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FacilityNotSupParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FacilityNotSupParam (el: _Element): FacilityNotSupParam {
    if (!_cached_decoder_for_FacilityNotSupParam) { _cached_decoder_for_FacilityNotSupParam = function (el: _Element): FacilityNotSupParam {
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let shapeOfLocationEstimateNotSupported: OPTIONAL<NULL>;
    let neededLcsCapabilityNotSupportedInServingNode: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "shapeOfLocationEstimateNotSupported": (_el: _Element): void => { shapeOfLocationEstimateNotSupported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "neededLcsCapabilityNotSupportedInServingNode": (_el: _Element): void => { neededLcsCapabilityNotSupportedInServingNode = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FacilityNotSupParam,
        _extension_additions_list_spec_for_FacilityNotSupParam,
        _root_component_type_list_2_spec_for_FacilityNotSupParam,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new FacilityNotSupParam(
        extensionContainer,
        shapeOfLocationEstimateNotSupported,
        neededLcsCapabilityNotSupportedInServingNode,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_FacilityNotSupParam(el);
}

let _cached_encoder_for_FacilityNotSupParam: $.ASN1Encoder<FacilityNotSupParam> | null = null;

/**
 * @summary Encodes a(n) FacilityNotSupParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FacilityNotSupParam, encoded as an ASN.1 Element.
 */
export
function _encode_FacilityNotSupParam (value: FacilityNotSupParam, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FacilityNotSupParam) { _cached_encoder_for_FacilityNotSupParam = function (value: FacilityNotSupParam, elGetter: $.ASN1Encoder<FacilityNotSupParam>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.shapeOfLocationEstimateNotSupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.shapeOfLocationEstimateNotSupported, $.BER)),
            /* IF_ABSENT  */ ((value.neededLcsCapabilityNotSupportedInServingNode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.neededLcsCapabilityNotSupportedInServingNode, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FacilityNotSupParam(value, elGetter);
}


/* eslint-enable */
