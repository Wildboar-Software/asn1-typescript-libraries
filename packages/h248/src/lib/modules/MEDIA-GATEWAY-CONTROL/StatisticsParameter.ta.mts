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
import { PkgdName, _decode_PkgdName, _encode_PkgdName } from "../MEDIA-GATEWAY-CONTROL/PkgdName.ta.mjs";
// export { PkgdName, _decode_PkgdName, _encode_PkgdName } from "../MEDIA-GATEWAY-CONTROL/PkgdName.ta.mjs";
import { Value, _decode_Value, _encode_Value } from "../MEDIA-GATEWAY-CONTROL/Value.ta.mjs";
// export { Value, _decode_Value, _encode_Value } from "../MEDIA-GATEWAY-CONTROL/Value.ta.mjs";


/**
 * @summary StatisticsParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatisticsParameter ::= SEQUENCE
 *     {
 *         statName                    [0] PkgdName,
 *         statValue                    [1] Value OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class StatisticsParameter {
    constructor (
        /**
         * @summary `statName`.
         * @public
         * @readonly
         */
        readonly statName: PkgdName,
        /**
         * @summary `statValue`.
         * @public
         * @readonly
         */
        readonly statValue: OPTIONAL<Value>
    ) {}

    /**
     * @summary Restructures an object into a StatisticsParameter
     * @description
     * 
     * This takes an `object` and converts it to a `StatisticsParameter`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StatisticsParameter`.
     * @returns {StatisticsParameter}
     */
    public static _from_object (_o: { [_K in keyof (StatisticsParameter)]: (StatisticsParameter)[_K] }): StatisticsParameter {
        return new StatisticsParameter(_o.statName, _o.statValue);
    }


}

/**
 * @summary The Leading Root Component Types of StatisticsParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StatisticsParameter: $.ComponentSpec[] = [
    new $.ComponentSpec("statName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("statValue", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of StatisticsParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StatisticsParameter: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StatisticsParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StatisticsParameter: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StatisticsParameter: $.ASN1Decoder<StatisticsParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatisticsParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StatisticsParameter (el: _Element): StatisticsParameter {
    if (!_cached_decoder_for_StatisticsParameter) { _cached_decoder_for_StatisticsParameter = function (el: _Element): StatisticsParameter {
    let statName!: PkgdName;
    let statValue: OPTIONAL<Value>;
    const callbacks: $.DecodingMap = {
        "statName": (_el: _Element): void => { statName = $._decode_implicit<PkgdName>(() => _decode_PkgdName)(_el); },
        "statValue": (_el: _Element): void => { statValue = $._decode_implicit<Value>(() => _decode_Value)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StatisticsParameter,
        _extension_additions_list_spec_for_StatisticsParameter,
        _root_component_type_list_2_spec_for_StatisticsParameter,
        undefined,
    );
    return new StatisticsParameter(
        statName,
        statValue
    );
}; }
    return _cached_decoder_for_StatisticsParameter(el);
}

let _cached_encoder_for_StatisticsParameter: $.ASN1Encoder<StatisticsParameter> | null = null;

/**
 * @summary Encodes a(n) StatisticsParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatisticsParameter, encoded as an ASN.1 Element.
 */
export
function _encode_StatisticsParameter (value: StatisticsParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StatisticsParameter) { _cached_encoder_for_StatisticsParameter = function (value: StatisticsParameter, elGetter: $.ASN1Encoder<StatisticsParameter>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_PkgdName, $.BER)(value.statName, $.BER),
            /* IF_ABSENT  */ ((value.statValue === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Value, $.BER)(value.statValue, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StatisticsParameter(value, elGetter);
}


/* eslint-enable */
