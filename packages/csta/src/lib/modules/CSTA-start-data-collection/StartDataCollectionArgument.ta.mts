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
import { CallObject, _decode_CallObject, _encode_CallObject } from "../CSTA-start-data-collection/CallObject.ta.mjs";
// export { CallObject, _decode_CallObject, _encode_CallObject } from "../CSTA-start-data-collection/CallObject.ta.mjs";
import { DataCollType, _enum_for_DataCollType, DataCollType_digits /* IMPORTED_LONG_ENUMERATION_ITEM */, digits /* IMPORTED_SHORT_ENUMERATION_ITEM */, DataCollType_telTones /* IMPORTED_LONG_ENUMERATION_ITEM */, telTones /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DataCollType, _encode_DataCollType } from "../CSTA-start-data-collection/DataCollType.ta.mjs";
// export { DataCollType, _enum_for_DataCollType, DataCollType_digits /* IMPORTED_LONG_ENUMERATION_ITEM */, digits /* IMPORTED_SHORT_ENUMERATION_ITEM */, DataCollType_telTones /* IMPORTED_LONG_ENUMERATION_ITEM */, telTones /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DataCollType, _encode_DataCollType } from "../CSTA-start-data-collection/DataCollType.ta.mjs";
import { DigitsReportingCriteria, _decode_DigitsReportingCriteria, _encode_DigitsReportingCriteria } from "../CSTA-start-data-collection/DigitsReportingCriteria.ta.mjs";
// export { DigitsReportingCriteria, _decode_DigitsReportingCriteria, _encode_DigitsReportingCriteria } from "../CSTA-start-data-collection/DigitsReportingCriteria.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary StartDataCollectionArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartDataCollectionArgument ::= SEQUENCE
 * {    object                CallObject,
 *     dataCollType            DataCollType                OPTIONAL,
 *     digitsReportingCriteria        DigitsReportingCriteria            OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class StartDataCollectionArgument {
    constructor (
        /**
         * @summary `object`.
         * @public
         * @readonly
         */
        readonly object: CallObject,
        /**
         * @summary `dataCollType`.
         * @public
         * @readonly
         */
        readonly dataCollType: OPTIONAL<DataCollType>,
        /**
         * @summary `digitsReportingCriteria`.
         * @public
         * @readonly
         */
        readonly digitsReportingCriteria: OPTIONAL<DigitsReportingCriteria>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a StartDataCollectionArgument
     * @description
     * 
     * This takes an `object` and converts it to a `StartDataCollectionArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StartDataCollectionArgument`.
     * @returns {StartDataCollectionArgument}
     */
    public static _from_object (_o: { [_K in keyof (StartDataCollectionArgument)]: (StartDataCollectionArgument)[_K] }): StartDataCollectionArgument {
        return new StartDataCollectionArgument(_o.object, _o.dataCollType, _o.digitsReportingCriteria, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `dataCollType`
         * @public
         * @static
         */

    public static _enum_for_dataCollType = _enum_for_DataCollType;
}

/**
 * @summary The Leading Root Component Types of StartDataCollectionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StartDataCollectionArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("object", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("dataCollType", true, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("digitsReportingCriteria", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of StartDataCollectionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StartDataCollectionArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StartDataCollectionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StartDataCollectionArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StartDataCollectionArgument: $.ASN1Decoder<StartDataCollectionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartDataCollectionArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartDataCollectionArgument (el: _Element): StartDataCollectionArgument {
    if (!_cached_decoder_for_StartDataCollectionArgument) { _cached_decoder_for_StartDataCollectionArgument = function (el: _Element): StartDataCollectionArgument {
    let object!: CallObject;
    let dataCollType: OPTIONAL<DataCollType>;
    let digitsReportingCriteria: OPTIONAL<DigitsReportingCriteria>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "object": (_el: _Element): void => { object = _decode_CallObject(_el); },
        "dataCollType": (_el: _Element): void => { dataCollType = _decode_DataCollType(_el); },
        "digitsReportingCriteria": (_el: _Element): void => { digitsReportingCriteria = _decode_DigitsReportingCriteria(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StartDataCollectionArgument,
        _extension_additions_list_spec_for_StartDataCollectionArgument,
        _root_component_type_list_2_spec_for_StartDataCollectionArgument,
        undefined,
    );
    return new StartDataCollectionArgument(
        object,
        dataCollType,
        digitsReportingCriteria,
        extensions
    );
}; }
    return _cached_decoder_for_StartDataCollectionArgument(el);
}

let _cached_encoder_for_StartDataCollectionArgument: $.ASN1Encoder<StartDataCollectionArgument> | null = null;

/**
 * @summary Encodes a(n) StartDataCollectionArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartDataCollectionArgument, encoded as an ASN.1 Element.
 */
export
function _encode_StartDataCollectionArgument (value: StartDataCollectionArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartDataCollectionArgument) { _cached_encoder_for_StartDataCollectionArgument = function (value: StartDataCollectionArgument, elGetter: $.ASN1Encoder<StartDataCollectionArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CallObject(value.object, $.BER),
            /* IF_ABSENT  */ ((value.dataCollType === undefined) ? undefined : _encode_DataCollType(value.dataCollType, $.BER)),
            /* IF_ABSENT  */ ((value.digitsReportingCriteria === undefined) ? undefined : _encode_DigitsReportingCriteria(value.digitsReportingCriteria, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StartDataCollectionArgument(value, elGetter);
}


/* eslint-enable */
