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
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { ACProfiles, _decode_ACProfiles, _encode_ACProfiles } from "../TS33128Payloads/ACProfiles.ta.mjs";
// export { ACProfiles, _decode_ACProfiles, _encode_ACProfiles } from "../TS33128Payloads/ACProfiles.ta.mjs";
import { ACRScenarios, _decode_ACRScenarios, _encode_ACRScenarios } from "../TS33128Payloads/ACRScenarios.ta.mjs";
// export { ACRScenarios, _decode_ACRScenarios, _encode_ACRScenarios } from "../TS33128Payloads/ACRScenarios.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { UnfulfilledACProfiles, _decode_UnfulfilledACProfiles, _encode_UnfulfilledACProfiles } from "../TS33128Payloads/UnfulfilledACProfiles.ta.mjs";
// export { UnfulfilledACProfiles, _decode_UnfulfilledACProfiles, _encode_UnfulfilledACProfiles } from "../TS33128Payloads/UnfulfilledACProfiles.ta.mjs";


/**
 * @summary EESStartOfInterceptionWithRegisteredEEC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EESStartOfInterceptionWithRegisteredEEC ::= SEQUENCE
 * {
 *     eECID                    [1] UTF8String,
 *     gPSI                     [2] GPSI OPTIONAL,
 *     aCProfiles               [3] ACProfiles OPTIONAL,
 *     eECServiceContSupport    [4] ACRScenarios OPTIONAL,
 *     expirationTime           [5] Timestamp OPTIONAL,
 *     eECContextID             [6] UTF8String OPTIONAL,
 *     srcEESID                 [7] UTF8String OPTIONAL,
 *     unfulfilledACProfiles    [8] UnfulfilledACProfiles OPTIONAL,
 *     timeOfRegistration       [9] Timestamp OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EESStartOfInterceptionWithRegisteredEEC {
    constructor (
        /**
         * @summary `eECID`.
         * @public
         * @readonly
         */
        readonly eECID: UTF8String,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `aCProfiles`.
         * @public
         * @readonly
         */
        readonly aCProfiles: OPTIONAL<ACProfiles>,
        /**
         * @summary `eECServiceContSupport`.
         * @public
         * @readonly
         */
        readonly eECServiceContSupport: OPTIONAL<ACRScenarios>,
        /**
         * @summary `expirationTime`.
         * @public
         * @readonly
         */
        readonly expirationTime: OPTIONAL<Timestamp>,
        /**
         * @summary `eECContextID`.
         * @public
         * @readonly
         */
        readonly eECContextID: OPTIONAL<UTF8String>,
        /**
         * @summary `srcEESID`.
         * @public
         * @readonly
         */
        readonly srcEESID: OPTIONAL<UTF8String>,
        /**
         * @summary `unfulfilledACProfiles`.
         * @public
         * @readonly
         */
        readonly unfulfilledACProfiles: OPTIONAL<UnfulfilledACProfiles>,
        /**
         * @summary `timeOfRegistration`.
         * @public
         * @readonly
         */
        readonly timeOfRegistration: OPTIONAL<Timestamp>
    ) {}

    /**
     * @summary Restructures an object into a EESStartOfInterceptionWithRegisteredEEC
     * @description
     * 
     * This takes an `object` and converts it to a `EESStartOfInterceptionWithRegisteredEEC`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EESStartOfInterceptionWithRegisteredEEC`.
     * @returns {EESStartOfInterceptionWithRegisteredEEC}
     */
    public static _from_object (_o: { [_K in keyof (EESStartOfInterceptionWithRegisteredEEC)]: (EESStartOfInterceptionWithRegisteredEEC)[_K] }): EESStartOfInterceptionWithRegisteredEEC {
        return new EESStartOfInterceptionWithRegisteredEEC(_o.eECID, _o.gPSI, _o.aCProfiles, _o.eECServiceContSupport, _o.expirationTime, _o.eECContextID, _o.srcEESID, _o.unfulfilledACProfiles, _o.timeOfRegistration);
    }


}

/**
 * @summary The Leading Root Component Types of EESStartOfInterceptionWithRegisteredEEC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EESStartOfInterceptionWithRegisteredEEC: $.ComponentSpec[] = [
    new $.ComponentSpec("eECID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("aCProfiles", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("eECServiceContSupport", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("expirationTime", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("eECContextID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("srcEESID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("unfulfilledACProfiles", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("timeOfRegistration", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of EESStartOfInterceptionWithRegisteredEEC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EESStartOfInterceptionWithRegisteredEEC: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EESStartOfInterceptionWithRegisteredEEC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EESStartOfInterceptionWithRegisteredEEC: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EESStartOfInterceptionWithRegisteredEEC: $.ASN1Decoder<EESStartOfInterceptionWithRegisteredEEC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EESStartOfInterceptionWithRegisteredEEC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EESStartOfInterceptionWithRegisteredEEC (el: _Element): EESStartOfInterceptionWithRegisteredEEC {
    if (!_cached_decoder_for_EESStartOfInterceptionWithRegisteredEEC) { _cached_decoder_for_EESStartOfInterceptionWithRegisteredEEC = function (el: _Element): EESStartOfInterceptionWithRegisteredEEC {
    let eECID!: UTF8String;
    let gPSI: OPTIONAL<GPSI>;
    let aCProfiles: OPTIONAL<ACProfiles>;
    let eECServiceContSupport: OPTIONAL<ACRScenarios>;
    let expirationTime: OPTIONAL<Timestamp>;
    let eECContextID: OPTIONAL<UTF8String>;
    let srcEESID: OPTIONAL<UTF8String>;
    let unfulfilledACProfiles: OPTIONAL<UnfulfilledACProfiles>;
    let timeOfRegistration: OPTIONAL<Timestamp>;
    const callbacks: $.DecodingMap = {
        "eECID": (_el: _Element): void => { eECID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "aCProfiles": (_el: _Element): void => { aCProfiles = $._decode_implicit<ACProfiles>(() => _decode_ACProfiles)(_el); },
        "eECServiceContSupport": (_el: _Element): void => { eECServiceContSupport = $._decode_implicit<ACRScenarios>(() => _decode_ACRScenarios)(_el); },
        "expirationTime": (_el: _Element): void => { expirationTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "eECContextID": (_el: _Element): void => { eECContextID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "srcEESID": (_el: _Element): void => { srcEESID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "unfulfilledACProfiles": (_el: _Element): void => { unfulfilledACProfiles = $._decode_implicit<UnfulfilledACProfiles>(() => _decode_UnfulfilledACProfiles)(_el); },
        "timeOfRegistration": (_el: _Element): void => { timeOfRegistration = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EESStartOfInterceptionWithRegisteredEEC,
        _extension_additions_list_spec_for_EESStartOfInterceptionWithRegisteredEEC,
        _root_component_type_list_2_spec_for_EESStartOfInterceptionWithRegisteredEEC,
        undefined,
    );
    return new EESStartOfInterceptionWithRegisteredEEC(
        eECID,
        gPSI,
        aCProfiles,
        eECServiceContSupport,
        expirationTime,
        eECContextID,
        srcEESID,
        unfulfilledACProfiles,
        timeOfRegistration
    );
}; }
    return _cached_decoder_for_EESStartOfInterceptionWithRegisteredEEC(el);
}

let _cached_encoder_for_EESStartOfInterceptionWithRegisteredEEC: $.ASN1Encoder<EESStartOfInterceptionWithRegisteredEEC> | null = null;

/**
 * @summary Encodes a(n) EESStartOfInterceptionWithRegisteredEEC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EESStartOfInterceptionWithRegisteredEEC, encoded as an ASN.1 Element.
 */
export
function _encode_EESStartOfInterceptionWithRegisteredEEC (value: EESStartOfInterceptionWithRegisteredEEC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EESStartOfInterceptionWithRegisteredEEC) { _cached_encoder_for_EESStartOfInterceptionWithRegisteredEEC = function (value: EESStartOfInterceptionWithRegisteredEEC, elGetter: $.ASN1Encoder<EESStartOfInterceptionWithRegisteredEEC>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.eECID, $.BER),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* IF_ABSENT  */ ((value.aCProfiles === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ACProfiles, $.BER)(value.aCProfiles, $.BER)),
            /* IF_ABSENT  */ ((value.eECServiceContSupport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ACRScenarios, $.BER)(value.eECServiceContSupport, $.BER)),
            /* IF_ABSENT  */ ((value.expirationTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Timestamp, $.BER)(value.expirationTime, $.BER)),
            /* IF_ABSENT  */ ((value.eECContextID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.eECContextID, $.BER)),
            /* IF_ABSENT  */ ((value.srcEESID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeUTF8String, $.BER)(value.srcEESID, $.BER)),
            /* IF_ABSENT  */ ((value.unfulfilledACProfiles === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_UnfulfilledACProfiles, $.BER)(value.unfulfilledACProfiles, $.BER)),
            /* IF_ABSENT  */ ((value.timeOfRegistration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_Timestamp, $.BER)(value.timeOfRegistration, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EESStartOfInterceptionWithRegisteredEEC(value, elGetter);
}


/* eslint-enable */
