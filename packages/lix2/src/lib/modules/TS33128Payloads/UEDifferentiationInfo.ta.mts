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
import { PeriodicCommunicationIndicator, _enum_for_PeriodicCommunicationIndicator, PeriodicCommunicationIndicator_periodic /* IMPORTED_LONG_ENUMERATION_ITEM */, periodic /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodicCommunicationIndicator_nonPeriodic /* IMPORTED_LONG_ENUMERATION_ITEM */, nonPeriodic /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PeriodicCommunicationIndicator, _encode_PeriodicCommunicationIndicator } from "../TS33128Payloads/PeriodicCommunicationIndicator.ta.mjs";
// export { PeriodicCommunicationIndicator, _enum_for_PeriodicCommunicationIndicator, PeriodicCommunicationIndicator_periodic /* IMPORTED_LONG_ENUMERATION_ITEM */, periodic /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodicCommunicationIndicator_nonPeriodic /* IMPORTED_LONG_ENUMERATION_ITEM */, nonPeriodic /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PeriodicCommunicationIndicator, _encode_PeriodicCommunicationIndicator } from "../TS33128Payloads/PeriodicCommunicationIndicator.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary UEDifferentiationInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UEDifferentiationInfo ::= SEQUENCE
 * {
 *     periodicCommunicationIndicator [1] PeriodicCommunicationIndicator OPTIONAL,
 *     periodicTime                   [2] INTEGER OPTIONAL,
 *     scheduledCommunicationTime     [3] SBIType OPTIONAL,
 *     stationaryIndication           [4] SBIType OPTIONAL,
 *     trafficProfile                 [5] SBIType OPTIONAL,
 *     batteryIndication              [6] SBIType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UEDifferentiationInfo {
    constructor (
        /**
         * @summary `periodicCommunicationIndicator`.
         * @public
         * @readonly
         */
        readonly periodicCommunicationIndicator: OPTIONAL<PeriodicCommunicationIndicator>,
        /**
         * @summary `periodicTime`.
         * @public
         * @readonly
         */
        readonly periodicTime: OPTIONAL<INTEGER>,
        /**
         * @summary `scheduledCommunicationTime`.
         * @public
         * @readonly
         */
        readonly scheduledCommunicationTime: OPTIONAL<SBIType>,
        /**
         * @summary `stationaryIndication`.
         * @public
         * @readonly
         */
        readonly stationaryIndication: OPTIONAL<SBIType>,
        /**
         * @summary `trafficProfile`.
         * @public
         * @readonly
         */
        readonly trafficProfile: OPTIONAL<SBIType>,
        /**
         * @summary `batteryIndication`.
         * @public
         * @readonly
         */
        readonly batteryIndication: OPTIONAL<SBIType>
    ) {}

    /**
     * @summary Restructures an object into a UEDifferentiationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `UEDifferentiationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UEDifferentiationInfo`.
     * @returns {UEDifferentiationInfo}
     */
    public static _from_object (_o: { [_K in keyof (UEDifferentiationInfo)]: (UEDifferentiationInfo)[_K] }): UEDifferentiationInfo {
        return new UEDifferentiationInfo(_o.periodicCommunicationIndicator, _o.periodicTime, _o.scheduledCommunicationTime, _o.stationaryIndication, _o.trafficProfile, _o.batteryIndication);
    }

        /**
         * @summary The enum used as the type of the component `periodicCommunicationIndicator`
         * @public
         * @static
         */

    public static _enum_for_periodicCommunicationIndicator = _enum_for_PeriodicCommunicationIndicator;
}

/**
 * @summary The Leading Root Component Types of UEDifferentiationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UEDifferentiationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("periodicCommunicationIndicator", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("periodicTime", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("scheduledCommunicationTime", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("stationaryIndication", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("trafficProfile", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("batteryIndication", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of UEDifferentiationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UEDifferentiationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UEDifferentiationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UEDifferentiationInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UEDifferentiationInfo: $.ASN1Decoder<UEDifferentiationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UEDifferentiationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UEDifferentiationInfo (el: _Element): UEDifferentiationInfo {
    if (!_cached_decoder_for_UEDifferentiationInfo) { _cached_decoder_for_UEDifferentiationInfo = function (el: _Element): UEDifferentiationInfo {
    let periodicCommunicationIndicator: OPTIONAL<PeriodicCommunicationIndicator>;
    let periodicTime: OPTIONAL<INTEGER>;
    let scheduledCommunicationTime: OPTIONAL<SBIType>;
    let stationaryIndication: OPTIONAL<SBIType>;
    let trafficProfile: OPTIONAL<SBIType>;
    let batteryIndication: OPTIONAL<SBIType>;
    const callbacks: $.DecodingMap = {
        "periodicCommunicationIndicator": (_el: _Element): void => { periodicCommunicationIndicator = $._decode_implicit<PeriodicCommunicationIndicator>(() => _decode_PeriodicCommunicationIndicator)(_el); },
        "periodicTime": (_el: _Element): void => { periodicTime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "scheduledCommunicationTime": (_el: _Element): void => { scheduledCommunicationTime = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "stationaryIndication": (_el: _Element): void => { stationaryIndication = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "trafficProfile": (_el: _Element): void => { trafficProfile = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "batteryIndication": (_el: _Element): void => { batteryIndication = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UEDifferentiationInfo,
        _extension_additions_list_spec_for_UEDifferentiationInfo,
        _root_component_type_list_2_spec_for_UEDifferentiationInfo,
        undefined,
    );
    return new UEDifferentiationInfo(
        periodicCommunicationIndicator,
        periodicTime,
        scheduledCommunicationTime,
        stationaryIndication,
        trafficProfile,
        batteryIndication
    );
}; }
    return _cached_decoder_for_UEDifferentiationInfo(el);
}

let _cached_encoder_for_UEDifferentiationInfo: $.ASN1Encoder<UEDifferentiationInfo> | null = null;

/**
 * @summary Encodes a(n) UEDifferentiationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UEDifferentiationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_UEDifferentiationInfo (value: UEDifferentiationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UEDifferentiationInfo) { _cached_encoder_for_UEDifferentiationInfo = function (value: UEDifferentiationInfo, elGetter: $.ASN1Encoder<UEDifferentiationInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.periodicCommunicationIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PeriodicCommunicationIndicator, $.BER)(value.periodicCommunicationIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.periodicTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.periodicTime, $.BER)),
            /* IF_ABSENT  */ ((value.scheduledCommunicationTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SBIType, $.BER)(value.scheduledCommunicationTime, $.BER)),
            /* IF_ABSENT  */ ((value.stationaryIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SBIType, $.BER)(value.stationaryIndication, $.BER)),
            /* IF_ABSENT  */ ((value.trafficProfile === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SBIType, $.BER)(value.trafficProfile, $.BER)),
            /* IF_ABSENT  */ ((value.batteryIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_SBIType, $.BER)(value.batteryIndication, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UEDifferentiationInfo(value, elGetter);
}


/* eslint-enable */
