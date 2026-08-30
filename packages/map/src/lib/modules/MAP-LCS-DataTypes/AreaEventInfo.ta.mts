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
import { AreaDefinition, _decode_AreaDefinition, _encode_AreaDefinition } from "../MAP-LCS-DataTypes/AreaDefinition.ta.mjs";
// export { AreaDefinition, _decode_AreaDefinition, _encode_AreaDefinition } from "../MAP-LCS-DataTypes/AreaDefinition.ta.mjs";
import { OccurrenceInfo, _enum_for_OccurrenceInfo, OccurrenceInfo_oneTimeEvent /* IMPORTED_LONG_ENUMERATION_ITEM */, oneTimeEvent /* IMPORTED_SHORT_ENUMERATION_ITEM */, OccurrenceInfo_multipleTimeEvent /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleTimeEvent /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_OccurrenceInfo, _encode_OccurrenceInfo } from "../MAP-LCS-DataTypes/OccurrenceInfo.ta.mjs";
// export { OccurrenceInfo, _enum_for_OccurrenceInfo, OccurrenceInfo_oneTimeEvent /* IMPORTED_LONG_ENUMERATION_ITEM */, oneTimeEvent /* IMPORTED_SHORT_ENUMERATION_ITEM */, OccurrenceInfo_multipleTimeEvent /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleTimeEvent /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_OccurrenceInfo, _encode_OccurrenceInfo } from "../MAP-LCS-DataTypes/OccurrenceInfo.ta.mjs";
import { IntervalTime, _decode_IntervalTime, _encode_IntervalTime } from "../MAP-LCS-DataTypes/IntervalTime.ta.mjs";
// export { IntervalTime, _decode_IntervalTime, _encode_IntervalTime } from "../MAP-LCS-DataTypes/IntervalTime.ta.mjs";


/**
 * @summary AreaEventInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AreaEventInfo ::= SEQUENCE {
 *     areaDefinition    [0]    AreaDefinition,
 *     occurrenceInfo    [1]    OccurrenceInfo    OPTIONAL,
 *     intervalTime    [2]    IntervalTime    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class AreaEventInfo {
    constructor (
        /**
         * @summary `areaDefinition`.
         * @public
         * @readonly
         */
        readonly areaDefinition: AreaDefinition,
        /**
         * @summary `occurrenceInfo`.
         * @public
         * @readonly
         */
        readonly occurrenceInfo: OPTIONAL<OccurrenceInfo>,
        /**
         * @summary `intervalTime`.
         * @public
         * @readonly
         */
        readonly intervalTime: OPTIONAL<IntervalTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AreaEventInfo
     * @description
     * 
     * This takes an `object` and converts it to a `AreaEventInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AreaEventInfo`.
     * @returns {AreaEventInfo}
     */
    public static _from_object (_o: { [_K in keyof (AreaEventInfo)]: (AreaEventInfo)[_K] }): AreaEventInfo {
        return new AreaEventInfo(_o.areaDefinition, _o.occurrenceInfo, _o.intervalTime, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `occurrenceInfo`
         * @public
         * @static
         */

    public static _enum_for_occurrenceInfo = _enum_for_OccurrenceInfo;
}

/**
 * @summary The Leading Root Component Types of AreaEventInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AreaEventInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("areaDefinition", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("occurrenceInfo", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("intervalTime", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AreaEventInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AreaEventInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AreaEventInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AreaEventInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AreaEventInfo: $.ASN1Decoder<AreaEventInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AreaEventInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AreaEventInfo (el: _Element): AreaEventInfo {
    if (!_cached_decoder_for_AreaEventInfo) { _cached_decoder_for_AreaEventInfo = function (el: _Element): AreaEventInfo {
    let areaDefinition!: AreaDefinition;
    let occurrenceInfo: OPTIONAL<OccurrenceInfo>;
    let intervalTime: OPTIONAL<IntervalTime>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "areaDefinition": (_el: _Element): void => { areaDefinition = $._decode_implicit<AreaDefinition>(() => _decode_AreaDefinition)(_el); },
        "occurrenceInfo": (_el: _Element): void => { occurrenceInfo = $._decode_implicit<OccurrenceInfo>(() => _decode_OccurrenceInfo)(_el); },
        "intervalTime": (_el: _Element): void => { intervalTime = $._decode_implicit<IntervalTime>(() => _decode_IntervalTime)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AreaEventInfo,
        _extension_additions_list_spec_for_AreaEventInfo,
        _root_component_type_list_2_spec_for_AreaEventInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AreaEventInfo(
        areaDefinition,
        occurrenceInfo,
        intervalTime,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AreaEventInfo(el);
}

let _cached_encoder_for_AreaEventInfo: $.ASN1Encoder<AreaEventInfo> | null = null;

/**
 * @summary Encodes a(n) AreaEventInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AreaEventInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AreaEventInfo (value: AreaEventInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AreaEventInfo) { _cached_encoder_for_AreaEventInfo = function (value: AreaEventInfo, elGetter: $.ASN1Encoder<AreaEventInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AreaDefinition, $.BER)(value.areaDefinition, $.BER),
            /* IF_ABSENT  */ ((value.occurrenceInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_OccurrenceInfo, $.BER)(value.occurrenceInfo, $.BER)),
            /* IF_ABSENT  */ ((value.intervalTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_IntervalTime, $.BER)(value.intervalTime, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AreaEventInfo(value, elGetter);
}


/* eslint-enable */
