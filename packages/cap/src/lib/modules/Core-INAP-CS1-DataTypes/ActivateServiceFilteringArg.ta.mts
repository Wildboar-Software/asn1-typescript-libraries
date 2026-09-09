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
import { FilteredCallTreatment, _decode_FilteredCallTreatment, _encode_FilteredCallTreatment } from "../Core-INAP-CS1-DataTypes/FilteredCallTreatment.ta.mjs";
// export { FilteredCallTreatment, _decode_FilteredCallTreatment, _encode_FilteredCallTreatment } from "../Core-INAP-CS1-DataTypes/FilteredCallTreatment.ta.mjs";
import { FilteringCharacteristics, _decode_FilteringCharacteristics, _encode_FilteringCharacteristics } from "../Core-INAP-CS1-DataTypes/FilteringCharacteristics.ta.mjs";
// export { FilteringCharacteristics, _decode_FilteringCharacteristics, _encode_FilteringCharacteristics } from "../Core-INAP-CS1-DataTypes/FilteringCharacteristics.ta.mjs";
import { FilteringTimeOut, _decode_FilteringTimeOut, _encode_FilteringTimeOut } from "../Core-INAP-CS1-DataTypes/FilteringTimeOut.ta.mjs";
// export { FilteringTimeOut, _decode_FilteringTimeOut, _encode_FilteringTimeOut } from "../Core-INAP-CS1-DataTypes/FilteringTimeOut.ta.mjs";
import { FilteringCriteria, _decode_FilteringCriteria, _encode_FilteringCriteria } from "../Core-INAP-CS1-DataTypes/FilteringCriteria.ta.mjs";
// export { FilteringCriteria, _decode_FilteringCriteria, _encode_FilteringCriteria } from "../Core-INAP-CS1-DataTypes/FilteringCriteria.ta.mjs";
import { DateAndTime, _decode_DateAndTime, _encode_DateAndTime } from "../Core-INAP-CS1-DataTypes/DateAndTime.ta.mjs";
// export { DateAndTime, _decode_DateAndTime, _encode_DateAndTime } from "../Core-INAP-CS1-DataTypes/DateAndTime.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";


/**
 * @summary ActivateServiceFilteringArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivateServiceFilteringArg ::= SEQUENCE {
 *      filteredCallTreatment     [0] FilteredCallTreatment,
 *      filteringCharacteristics     [1] FilteringCharacteristics,
 *      filteringTimeOut     [2] FilteringTimeOut,
 *      filteringCriteria     [3] FilteringCriteria,
 *      startTime     [4] DateAndTime     OPTIONAL,
 *      extensions     [5] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField     OPTIONAL
 * --  ...
 *      }
 * ```
 * 
 * @class
 */
export
class ActivateServiceFilteringArg {
    constructor (
        /**
         * @summary `filteredCallTreatment`.
         * @public
         * @readonly
         */
        readonly filteredCallTreatment: FilteredCallTreatment,
        /**
         * @summary `filteringCharacteristics`.
         * @public
         * @readonly
         */
        readonly filteringCharacteristics: FilteringCharacteristics,
        /**
         * @summary `filteringTimeOut`.
         * @public
         * @readonly
         */
        readonly filteringTimeOut: FilteringTimeOut,
        /**
         * @summary `filteringCriteria`.
         * @public
         * @readonly
         */
        readonly filteringCriteria: FilteringCriteria,
        /**
         * @summary `startTime`.
         * @public
         * @readonly
         */
        readonly startTime: OPTIONAL<DateAndTime>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a ActivateServiceFilteringArg
     * @description
     * 
     * This takes an `object` and converts it to a `ActivateServiceFilteringArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ActivateServiceFilteringArg`.
     * @returns {ActivateServiceFilteringArg}
     */
    public static _from_object (_o: { [_K in keyof (ActivateServiceFilteringArg)]: (ActivateServiceFilteringArg)[_K] }): ActivateServiceFilteringArg {
        return new ActivateServiceFilteringArg(_o.filteredCallTreatment, _o.filteringCharacteristics, _o.filteringTimeOut, _o.filteringCriteria, _o.startTime, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of ActivateServiceFilteringArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ActivateServiceFilteringArg: $.ComponentSpec[] = [
    new $.ComponentSpec("filteredCallTreatment", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("filteringCharacteristics", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("filteringTimeOut", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("filteringCriteria", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 5), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ActivateServiceFilteringArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ActivateServiceFilteringArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ActivateServiceFilteringArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ActivateServiceFilteringArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ActivateServiceFilteringArg: $.ASN1Decoder<ActivateServiceFilteringArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActivateServiceFilteringArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ActivateServiceFilteringArg (el: _Element): ActivateServiceFilteringArg {
    if (!_cached_decoder_for_ActivateServiceFilteringArg) { _cached_decoder_for_ActivateServiceFilteringArg = function (el: _Element): ActivateServiceFilteringArg {
    let filteredCallTreatment!: FilteredCallTreatment;
    let filteringCharacteristics!: FilteringCharacteristics;
    let filteringTimeOut!: FilteringTimeOut;
    let filteringCriteria!: FilteringCriteria;
    let startTime: OPTIONAL<DateAndTime>;
    let extensions: OPTIONAL<ExtensionField[]>;
    const callbacks: $.DecodingMap = {
        "filteredCallTreatment": (_el: _Element): void => { filteredCallTreatment = $._decode_implicit<FilteredCallTreatment>(() => _decode_FilteredCallTreatment)(_el); },
        "filteringCharacteristics": (_el: _Element): void => { filteringCharacteristics = $._decode_explicit<FilteringCharacteristics>(() => _decode_FilteringCharacteristics)(_el); },
        "filteringTimeOut": (_el: _Element): void => { filteringTimeOut = $._decode_explicit<FilteringTimeOut>(() => _decode_FilteringTimeOut)(_el); },
        "filteringCriteria": (_el: _Element): void => { filteringCriteria = $._decode_explicit<FilteringCriteria>(() => _decode_FilteringCriteria)(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<DateAndTime>(() => _decode_DateAndTime)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ActivateServiceFilteringArg,
        _extension_additions_list_spec_for_ActivateServiceFilteringArg,
        _root_component_type_list_2_spec_for_ActivateServiceFilteringArg,
        undefined,
    );
    return new ActivateServiceFilteringArg(
        filteredCallTreatment,
        filteringCharacteristics,
        filteringTimeOut,
        filteringCriteria,
        startTime,
        extensions
    );
}; }
    return _cached_decoder_for_ActivateServiceFilteringArg(el);
}

let _cached_encoder_for_ActivateServiceFilteringArg: $.ASN1Encoder<ActivateServiceFilteringArg> | null = null;

/**
 * @summary Encodes a(n) ActivateServiceFilteringArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivateServiceFilteringArg, encoded as an ASN.1 Element.
 */
export
function _encode_ActivateServiceFilteringArg (value: ActivateServiceFilteringArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ActivateServiceFilteringArg) { _cached_encoder_for_ActivateServiceFilteringArg = function (value: ActivateServiceFilteringArg, elGetter: $.ASN1Encoder<ActivateServiceFilteringArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_FilteredCallTreatment, $.BER)(value.filteredCallTreatment, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_FilteringCharacteristics, $.BER)(value.filteringCharacteristics, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_FilteringTimeOut, $.BER)(value.filteringTimeOut, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_FilteringCriteria, $.BER)(value.filteringCriteria, $.BER),
            /* IF_ABSENT  */ ((value.startTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_DateAndTime, $.BER)(value.startTime, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ActivateServiceFilteringArg(value, elGetter);
}


/* eslint-enable */
