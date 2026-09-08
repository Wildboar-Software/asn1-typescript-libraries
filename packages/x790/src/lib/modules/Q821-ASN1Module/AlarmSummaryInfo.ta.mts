/* eslint-disable */
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PerceivedSeverity,
    _enum_for_PerceivedSeverity,
    _decode_PerceivedSeverity,
    _encode_PerceivedSeverity,
} from "../Attribute-ASN1Module/PerceivedSeverity.ta.mjs";

import {
    AlarmStatus,
    _enum_for_AlarmStatus,
    _decode_AlarmStatus,
    _encode_AlarmStatus,
} from "../ASN1DefinedTypesModule/AlarmStatus.ta.mjs";

import {
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from "../Attribute-ASN1Module/ProbableCause.ta.mjs";



/**
 * @summary AlarmSummaryInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlarmSummaryInfo ::= SEQUENCE {
 *   perceivedSeverity  [0]  PerceivedSeverity OPTIONAL,
 *   alarmStatus        [1]  AlarmStatus OPTIONAL,
 *   probableCause      [2]  ProbableCause OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AlarmSummaryInfo {
    constructor (
        /**
         * @summary `perceivedSeverity`.
         * @public
         * @readonly
         */
        readonly perceivedSeverity: OPTIONAL<PerceivedSeverity>,
        /**
         * @summary `alarmStatus`.
         * @public
         * @readonly
         */
        readonly alarmStatus: OPTIONAL<AlarmStatus>,
        /**
         * @summary `probableCause`.
         * @public
         * @readonly
         */
        readonly probableCause: OPTIONAL<ProbableCause>
    ) {}

    /**
     * @summary Restructures an object into a AlarmSummaryInfo
     * @description
     * 
     * This takes an `object` and converts it to a `AlarmSummaryInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlarmSummaryInfo`.
     * @returns {AlarmSummaryInfo}
     */
    public static _from_object (_o: { [_K in keyof (AlarmSummaryInfo)]: (AlarmSummaryInfo)[_K] }): AlarmSummaryInfo {
        return new AlarmSummaryInfo(_o.perceivedSeverity, _o.alarmStatus, _o.probableCause);
    }

        /**
         * @summary The enum used as the type of the component `perceivedSeverity`
         * @public
         * @static
         */

    public static _enum_for_perceivedSeverity = _enum_for_PerceivedSeverity;        /**
         * @summary The enum used as the type of the component `alarmStatus`
         * @public
         * @static
         */

    public static _enum_for_alarmStatus = _enum_for_AlarmStatus;
}

/**
 * @summary The Leading Root Component Types of AlarmSummaryInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AlarmSummaryInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("perceivedSeverity", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("alarmStatus", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("probableCause", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AlarmSummaryInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AlarmSummaryInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AlarmSummaryInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AlarmSummaryInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AlarmSummaryInfo: $.ASN1Decoder<AlarmSummaryInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlarmSummaryInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlarmSummaryInfo (el: _Element): AlarmSummaryInfo {
    if (!_cached_decoder_for_AlarmSummaryInfo) { _cached_decoder_for_AlarmSummaryInfo = function (el: _Element): AlarmSummaryInfo {
    let perceivedSeverity: OPTIONAL<PerceivedSeverity>;
    let alarmStatus: OPTIONAL<AlarmStatus>;
    let probableCause: OPTIONAL<ProbableCause>;
    const callbacks: $.DecodingMap = {
        "perceivedSeverity": (_el: _Element): void => { perceivedSeverity = $._decode_explicit<PerceivedSeverity>(() => _decode_PerceivedSeverity)(_el); },
        "alarmStatus": (_el: _Element): void => { alarmStatus = $._decode_explicit<AlarmStatus>(() => _decode_AlarmStatus)(_el); },
        "probableCause": (_el: _Element): void => { probableCause = $._decode_explicit<ProbableCause>(() => _decode_ProbableCause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AlarmSummaryInfo,
        _extension_additions_list_spec_for_AlarmSummaryInfo,
        _root_component_type_list_2_spec_for_AlarmSummaryInfo,
        undefined,
    );
    return new AlarmSummaryInfo(
        perceivedSeverity,
        alarmStatus,
        probableCause
    );
}; }
    return _cached_decoder_for_AlarmSummaryInfo(el);
}

let _cached_encoder_for_AlarmSummaryInfo: $.ASN1Encoder<AlarmSummaryInfo> | null = null;

/**
 * @summary Encodes a(n) AlarmSummaryInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmSummaryInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AlarmSummaryInfo (value: AlarmSummaryInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlarmSummaryInfo) { _cached_encoder_for_AlarmSummaryInfo = function (value: AlarmSummaryInfo, elGetter: $.ASN1Encoder<AlarmSummaryInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.perceivedSeverity === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_PerceivedSeverity, $.BER)(value.perceivedSeverity, $.BER)),
            /* IF_ABSENT  */ ((value.alarmStatus === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_AlarmStatus, $.BER)(value.alarmStatus, $.BER)),
            /* IF_ABSENT  */ ((value.probableCause === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_ProbableCause, $.BER)(value.probableCause, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AlarmSummaryInfo(value, elGetter);
}


/* eslint-enable */
