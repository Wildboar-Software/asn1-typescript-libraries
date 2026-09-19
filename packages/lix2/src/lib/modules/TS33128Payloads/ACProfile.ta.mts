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
import { ACID, _decode_ACID, _encode_ACID } from "../TS33128Payloads/ACID.ta.mjs";
// export { ACID, _decode_ACID, _encode_ACID } from "../TS33128Payloads/ACID.ta.mjs";
import { Daytime, _decode_Daytime, _encode_Daytime } from "../TS33128Payloads/Daytime.ta.mjs";
// export { Daytime, _decode_Daytime, _encode_Daytime } from "../TS33128Payloads/Daytime.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { EASsInfo, _decode_EASsInfo, _encode_EASsInfo } from "../TS33128Payloads/EASsInfo.ta.mjs";
// export { EASsInfo, _decode_EASsInfo, _encode_EASsInfo } from "../TS33128Payloads/EASsInfo.ta.mjs";
import { ACRScenarios, _decode_ACRScenarios, _encode_ACRScenarios } from "../TS33128Payloads/ACRScenarios.ta.mjs";
// export { ACRScenarios, _decode_ACRScenarios, _encode_ACRScenarios } from "../TS33128Payloads/ACRScenarios.ta.mjs";


/**
 * @summary ACProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACProfile ::= SEQUENCE
 * {
 *     aCID                  [1] ACID,
 *     aCType                [2] UTF8String OPTIONAL,
 *     aCSchedule            [3] Daytime OPTIONAL,
 *     expACGeoServArea      [4] Location OPTIONAL,
 *     eASsInfo              [5] EASsInfo OPTIONAL,
 *     aCServiceContSupport  [6] ACRScenarios OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ACProfile {
    constructor (
        /**
         * @summary `aCID`.
         * @public
         * @readonly
         */
        readonly aCID: ACID,
        /**
         * @summary `aCType`.
         * @public
         * @readonly
         */
        readonly aCType: OPTIONAL<UTF8String>,
        /**
         * @summary `aCSchedule`.
         * @public
         * @readonly
         */
        readonly aCSchedule: OPTIONAL<Daytime>,
        /**
         * @summary `expACGeoServArea`.
         * @public
         * @readonly
         */
        readonly expACGeoServArea: OPTIONAL<Location>,
        /**
         * @summary `eASsInfo`.
         * @public
         * @readonly
         */
        readonly eASsInfo: OPTIONAL<EASsInfo>,
        /**
         * @summary `aCServiceContSupport`.
         * @public
         * @readonly
         */
        readonly aCServiceContSupport: OPTIONAL<ACRScenarios>
    ) {}

    /**
     * @summary Restructures an object into a ACProfile
     * @description
     * 
     * This takes an `object` and converts it to a `ACProfile`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ACProfile`.
     * @returns {ACProfile}
     */
    public static _from_object (_o: { [_K in keyof (ACProfile)]: (ACProfile)[_K] }): ACProfile {
        return new ACProfile(_o.aCID, _o.aCType, _o.aCSchedule, _o.expACGeoServArea, _o.eASsInfo, _o.aCServiceContSupport);
    }


}

/**
 * @summary The Leading Root Component Types of ACProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ACProfile: $.ComponentSpec[] = [
    new $.ComponentSpec("aCID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aCType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("aCSchedule", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("expACGeoServArea", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("eASsInfo", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("aCServiceContSupport", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of ACProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ACProfile: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ACProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ACProfile: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ACProfile: $.ASN1Decoder<ACProfile> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACProfile
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACProfile (el: _Element): ACProfile {
    if (!_cached_decoder_for_ACProfile) { _cached_decoder_for_ACProfile = function (el: _Element): ACProfile {
    let aCID!: ACID;
    let aCType: OPTIONAL<UTF8String>;
    let aCSchedule: OPTIONAL<Daytime>;
    let expACGeoServArea: OPTIONAL<Location>;
    let eASsInfo: OPTIONAL<EASsInfo>;
    let aCServiceContSupport: OPTIONAL<ACRScenarios>;
    const callbacks: $.DecodingMap = {
        "aCID": (_el: _Element): void => { aCID = $._decode_implicit<ACID>(() => _decode_ACID)(_el); },
        "aCType": (_el: _Element): void => { aCType = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "aCSchedule": (_el: _Element): void => { aCSchedule = $._decode_implicit<Daytime>(() => _decode_Daytime)(_el); },
        "expACGeoServArea": (_el: _Element): void => { expACGeoServArea = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "eASsInfo": (_el: _Element): void => { eASsInfo = $._decode_implicit<EASsInfo>(() => _decode_EASsInfo)(_el); },
        "aCServiceContSupport": (_el: _Element): void => { aCServiceContSupport = $._decode_implicit<ACRScenarios>(() => _decode_ACRScenarios)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ACProfile,
        _extension_additions_list_spec_for_ACProfile,
        _root_component_type_list_2_spec_for_ACProfile,
        undefined,
    );
    return new ACProfile(
        aCID,
        aCType,
        aCSchedule,
        expACGeoServArea,
        eASsInfo,
        aCServiceContSupport
    );
}; }
    return _cached_decoder_for_ACProfile(el);
}

let _cached_encoder_for_ACProfile: $.ASN1Encoder<ACProfile> | null = null;

/**
 * @summary Encodes a(n) ACProfile into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACProfile, encoded as an ASN.1 Element.
 */
export
function _encode_ACProfile (value: ACProfile, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACProfile) { _cached_encoder_for_ACProfile = function (value: ACProfile, elGetter: $.ASN1Encoder<ACProfile>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ACID, $.BER)(value.aCID, $.BER),
            /* IF_ABSENT  */ ((value.aCType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.aCType, $.BER)),
            /* IF_ABSENT  */ ((value.aCSchedule === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Daytime, $.BER)(value.aCSchedule, $.BER)),
            /* IF_ABSENT  */ ((value.expACGeoServArea === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Location, $.BER)(value.expACGeoServArea, $.BER)),
            /* IF_ABSENT  */ ((value.eASsInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_EASsInfo, $.BER)(value.eASsInfo, $.BER)),
            /* IF_ABSENT  */ ((value.aCServiceContSupport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ACRScenarios, $.BER)(value.aCServiceContSupport, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ACProfile(value, elGetter);
}


/* eslint-enable */
