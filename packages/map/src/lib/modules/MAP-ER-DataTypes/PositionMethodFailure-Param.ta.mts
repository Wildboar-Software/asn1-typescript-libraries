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
import { PositionMethodFailure_Diagnostic, _enum_for_PositionMethodFailure_Diagnostic, PositionMethodFailure_Diagnostic_congestion /* IMPORTED_LONG_ENUMERATION_ITEM */, congestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_insufficientResources /* IMPORTED_LONG_ENUMERATION_ITEM */, insufficientResources /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_insufficientMeasurementData /* IMPORTED_LONG_ENUMERATION_ITEM */, insufficientMeasurementData /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_inconsistentMeasurementData /* IMPORTED_LONG_ENUMERATION_ITEM */, inconsistentMeasurementData /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_locationProcedureNotCompleted /* IMPORTED_LONG_ENUMERATION_ITEM */, locationProcedureNotCompleted /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_locationProcedureNotSupportedByTargetMS /* IMPORTED_LONG_ENUMERATION_ITEM */, locationProcedureNotSupportedByTargetMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_qoSNotAttainable /* IMPORTED_LONG_ENUMERATION_ITEM */, qoSNotAttainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_positionMethodNotAvailableInNetwork /* IMPORTED_LONG_ENUMERATION_ITEM */, positionMethodNotAvailableInNetwork /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_positionMethodNotAvailableInLocationArea /* IMPORTED_LONG_ENUMERATION_ITEM */, positionMethodNotAvailableInLocationArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PositionMethodFailure_Diagnostic, _encode_PositionMethodFailure_Diagnostic } from "../MAP-ER-DataTypes/PositionMethodFailure-Diagnostic.ta.mjs";
// export { PositionMethodFailure_Diagnostic, _enum_for_PositionMethodFailure_Diagnostic, PositionMethodFailure_Diagnostic_congestion /* IMPORTED_LONG_ENUMERATION_ITEM */, congestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_insufficientResources /* IMPORTED_LONG_ENUMERATION_ITEM */, insufficientResources /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_insufficientMeasurementData /* IMPORTED_LONG_ENUMERATION_ITEM */, insufficientMeasurementData /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_inconsistentMeasurementData /* IMPORTED_LONG_ENUMERATION_ITEM */, inconsistentMeasurementData /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_locationProcedureNotCompleted /* IMPORTED_LONG_ENUMERATION_ITEM */, locationProcedureNotCompleted /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_locationProcedureNotSupportedByTargetMS /* IMPORTED_LONG_ENUMERATION_ITEM */, locationProcedureNotSupportedByTargetMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_qoSNotAttainable /* IMPORTED_LONG_ENUMERATION_ITEM */, qoSNotAttainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_positionMethodNotAvailableInNetwork /* IMPORTED_LONG_ENUMERATION_ITEM */, positionMethodNotAvailableInNetwork /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositionMethodFailure_Diagnostic_positionMethodNotAvailableInLocationArea /* IMPORTED_LONG_ENUMERATION_ITEM */, positionMethodNotAvailableInLocationArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PositionMethodFailure_Diagnostic, _encode_PositionMethodFailure_Diagnostic } from "../MAP-ER-DataTypes/PositionMethodFailure-Diagnostic.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary PositionMethodFailure_Param
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositionMethodFailure-Param ::= SEQUENCE {
 *     positionMethodFailure-Diagnostic    [0] PositionMethodFailure-Diagnostic    OPTIONAL,
 *     extensionContainer    [1] ExtensionContainer    OPTIONAL,
 *     ... }
 * ```
 * 
 * @class
 */
export
class PositionMethodFailure_Param {
    constructor (
        /**
         * @summary `positionMethodFailure_Diagnostic`.
         * @public
         * @readonly
         */
        readonly positionMethodFailure_Diagnostic: OPTIONAL<PositionMethodFailure_Diagnostic>,
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
     * @summary Restructures an object into a PositionMethodFailure_Param
     * @description
     * 
     * This takes an `object` and converts it to a `PositionMethodFailure_Param`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PositionMethodFailure_Param`.
     * @returns {PositionMethodFailure_Param}
     */
    public static _from_object (_o: { [_K in keyof (PositionMethodFailure_Param)]: (PositionMethodFailure_Param)[_K] }): PositionMethodFailure_Param {
        return new PositionMethodFailure_Param(_o.positionMethodFailure_Diagnostic, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `positionMethodFailure_Diagnostic`
         * @public
         * @static
         */

    public static _enum_for_positionMethodFailure_Diagnostic = _enum_for_PositionMethodFailure_Diagnostic;
}

/**
 * @summary The Leading Root Component Types of PositionMethodFailure_Param
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PositionMethodFailure_Param: $.ComponentSpec[] = [
    new $.ComponentSpec("positionMethodFailure-Diagnostic", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of PositionMethodFailure_Param
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PositionMethodFailure_Param: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PositionMethodFailure_Param
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PositionMethodFailure_Param: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PositionMethodFailure_Param: $.ASN1Decoder<PositionMethodFailure_Param> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PositionMethodFailure_Param
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PositionMethodFailure_Param (el: _Element): PositionMethodFailure_Param {
    if (!_cached_decoder_for_PositionMethodFailure_Param) { _cached_decoder_for_PositionMethodFailure_Param = function (el: _Element): PositionMethodFailure_Param {
    let positionMethodFailure_Diagnostic: OPTIONAL<PositionMethodFailure_Diagnostic>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "positionMethodFailure-Diagnostic": (_el: _Element): void => { positionMethodFailure_Diagnostic = $._decode_implicit<PositionMethodFailure_Diagnostic>(() => _decode_PositionMethodFailure_Diagnostic)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PositionMethodFailure_Param,
        _extension_additions_list_spec_for_PositionMethodFailure_Param,
        _root_component_type_list_2_spec_for_PositionMethodFailure_Param,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PositionMethodFailure_Param(
        positionMethodFailure_Diagnostic,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PositionMethodFailure_Param(el);
}

let _cached_encoder_for_PositionMethodFailure_Param: $.ASN1Encoder<PositionMethodFailure_Param> | null = null;

/**
 * @summary Encodes a(n) PositionMethodFailure_Param into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PositionMethodFailure_Param, encoded as an ASN.1 Element.
 */
export
function _encode_PositionMethodFailure_Param (value: PositionMethodFailure_Param, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PositionMethodFailure_Param) { _cached_encoder_for_PositionMethodFailure_Param = function (value: PositionMethodFailure_Param, elGetter: $.ASN1Encoder<PositionMethodFailure_Param>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.positionMethodFailure_Diagnostic === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_PositionMethodFailure_Diagnostic, $.BER)(value.positionMethodFailure_Diagnostic, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PositionMethodFailure_Param(value, elGetter);
}


/* eslint-enable */
