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
import { EASDiscoveryFilter, _decode_EASDiscoveryFilter, _encode_EASDiscoveryFilter } from "../TS33128Payloads/EASDiscoveryFilter.ta.mjs";
// export { EASDiscoveryFilter, _decode_EASDiscoveryFilter, _encode_EASDiscoveryFilter } from "../TS33128Payloads/EASDiscoveryFilter.ta.mjs";
import { ACRScenarios, _decode_ACRScenarios, _encode_ACRScenarios } from "../TS33128Payloads/ACRScenarios.ta.mjs";
// export { ACRScenarios, _decode_ACRScenarios, _encode_ACRScenarios } from "../TS33128Payloads/ACRScenarios.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { DNAIs, _decode_DNAIs, _encode_DNAIs } from "../TS33128Payloads/DNAIs.ta.mjs";
// export { DNAIs, _decode_DNAIs, _encode_DNAIs } from "../TS33128Payloads/DNAIs.ta.mjs";
import { DiscoveredEAS, _decode_DiscoveredEAS, _encode_DiscoveredEAS } from "../TS33128Payloads/DiscoveredEAS.ta.mjs";
// export { DiscoveredEAS, _decode_DiscoveredEAS, _encode_DiscoveredEAS } from "../TS33128Payloads/DiscoveredEAS.ta.mjs";
import { FailureResponse, _enum_for_FailureResponse, FailureResponse_error400 /* IMPORTED_LONG_ENUMERATION_ITEM */, error400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error401 /* IMPORTED_LONG_ENUMERATION_ITEM */, error401 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error403 /* IMPORTED_LONG_ENUMERATION_ITEM */, error403 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error404 /* IMPORTED_LONG_ENUMERATION_ITEM */, error404 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error406 /* IMPORTED_LONG_ENUMERATION_ITEM */, error406 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error411 /* IMPORTED_LONG_ENUMERATION_ITEM */, error411 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error413 /* IMPORTED_LONG_ENUMERATION_ITEM */, error413 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error415 /* IMPORTED_LONG_ENUMERATION_ITEM */, error415 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error429 /* IMPORTED_LONG_ENUMERATION_ITEM */, error429 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error500 /* IMPORTED_LONG_ENUMERATION_ITEM */, error500 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error503 /* IMPORTED_LONG_ENUMERATION_ITEM */, error503 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FailureResponse, _encode_FailureResponse } from "../TS33128Payloads/FailureResponse.ta.mjs";
// export { FailureResponse, _enum_for_FailureResponse, FailureResponse_error400 /* IMPORTED_LONG_ENUMERATION_ITEM */, error400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error401 /* IMPORTED_LONG_ENUMERATION_ITEM */, error401 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error403 /* IMPORTED_LONG_ENUMERATION_ITEM */, error403 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error404 /* IMPORTED_LONG_ENUMERATION_ITEM */, error404 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error406 /* IMPORTED_LONG_ENUMERATION_ITEM */, error406 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error411 /* IMPORTED_LONG_ENUMERATION_ITEM */, error411 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error413 /* IMPORTED_LONG_ENUMERATION_ITEM */, error413 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error415 /* IMPORTED_LONG_ENUMERATION_ITEM */, error415 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error429 /* IMPORTED_LONG_ENUMERATION_ITEM */, error429 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error500 /* IMPORTED_LONG_ENUMERATION_ITEM */, error500 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureResponse_error503 /* IMPORTED_LONG_ENUMERATION_ITEM */, error503 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FailureResponse, _encode_FailureResponse } from "../TS33128Payloads/FailureResponse.ta.mjs";


/**
 * @summary EESEASDiscovery
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EESEASDiscovery ::= SEQUENCE
 * {
 *     eECID                    [1] UTF8String,
 *     gPSI                     [2] GPSI OPTIONAL,
 *     eASDiscoveryFilter       [3] EASDiscoveryFilter OPTIONAL,
 *     eECServiceContSupport    [4] ACRScenarios OPTIONAL,
 *     uELocation               [5] Location OPTIONAL,
 *     eASTargetDNAIs           [6] DNAIs OPTIONAL,
 *     discoveredEAS            [7] DiscoveredEAS OPTIONAL,
 *     failureResponse          [8] FailureResponse OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EESEASDiscovery {
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
         * @summary `eASDiscoveryFilter`.
         * @public
         * @readonly
         */
        readonly eASDiscoveryFilter: OPTIONAL<EASDiscoveryFilter>,
        /**
         * @summary `eECServiceContSupport`.
         * @public
         * @readonly
         */
        readonly eECServiceContSupport: OPTIONAL<ACRScenarios>,
        /**
         * @summary `uELocation`.
         * @public
         * @readonly
         */
        readonly uELocation: OPTIONAL<Location>,
        /**
         * @summary `eASTargetDNAIs`.
         * @public
         * @readonly
         */
        readonly eASTargetDNAIs: OPTIONAL<DNAIs>,
        /**
         * @summary `discoveredEAS`.
         * @public
         * @readonly
         */
        readonly discoveredEAS: OPTIONAL<DiscoveredEAS>,
        /**
         * @summary `failureResponse`.
         * @public
         * @readonly
         */
        readonly failureResponse: OPTIONAL<FailureResponse>
    ) {}

    /**
     * @summary Restructures an object into a EESEASDiscovery
     * @description
     * 
     * This takes an `object` and converts it to a `EESEASDiscovery`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EESEASDiscovery`.
     * @returns {EESEASDiscovery}
     */
    public static _from_object (_o: { [_K in keyof (EESEASDiscovery)]: (EESEASDiscovery)[_K] }): EESEASDiscovery {
        return new EESEASDiscovery(_o.eECID, _o.gPSI, _o.eASDiscoveryFilter, _o.eECServiceContSupport, _o.uELocation, _o.eASTargetDNAIs, _o.discoveredEAS, _o.failureResponse);
    }

        /**
         * @summary The enum used as the type of the component `failureResponse`
         * @public
         * @static
         */

    public static _enum_for_failureResponse = _enum_for_FailureResponse;
}

/**
 * @summary The Leading Root Component Types of EESEASDiscovery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EESEASDiscovery: $.ComponentSpec[] = [
    new $.ComponentSpec("eECID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eASDiscoveryFilter", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("eECServiceContSupport", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("uELocation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("eASTargetDNAIs", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("discoveredEAS", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("failureResponse", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of EESEASDiscovery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EESEASDiscovery: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EESEASDiscovery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EESEASDiscovery: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EESEASDiscovery: $.ASN1Decoder<EESEASDiscovery> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EESEASDiscovery
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EESEASDiscovery (el: _Element): EESEASDiscovery {
    if (!_cached_decoder_for_EESEASDiscovery) { _cached_decoder_for_EESEASDiscovery = function (el: _Element): EESEASDiscovery {
    let eECID!: UTF8String;
    let gPSI: OPTIONAL<GPSI>;
    let eASDiscoveryFilter: OPTIONAL<EASDiscoveryFilter>;
    let eECServiceContSupport: OPTIONAL<ACRScenarios>;
    let uELocation: OPTIONAL<Location>;
    let eASTargetDNAIs: OPTIONAL<DNAIs>;
    let discoveredEAS: OPTIONAL<DiscoveredEAS>;
    let failureResponse: OPTIONAL<FailureResponse>;
    const callbacks: $.DecodingMap = {
        "eECID": (_el: _Element): void => { eECID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "eASDiscoveryFilter": (_el: _Element): void => { eASDiscoveryFilter = $._decode_explicit<EASDiscoveryFilter>(() => _decode_EASDiscoveryFilter)(_el); },
        "eECServiceContSupport": (_el: _Element): void => { eECServiceContSupport = $._decode_implicit<ACRScenarios>(() => _decode_ACRScenarios)(_el); },
        "uELocation": (_el: _Element): void => { uELocation = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "eASTargetDNAIs": (_el: _Element): void => { eASTargetDNAIs = $._decode_implicit<DNAIs>(() => _decode_DNAIs)(_el); },
        "discoveredEAS": (_el: _Element): void => { discoveredEAS = $._decode_implicit<DiscoveredEAS>(() => _decode_DiscoveredEAS)(_el); },
        "failureResponse": (_el: _Element): void => { failureResponse = $._decode_implicit<FailureResponse>(() => _decode_FailureResponse)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EESEASDiscovery,
        _extension_additions_list_spec_for_EESEASDiscovery,
        _root_component_type_list_2_spec_for_EESEASDiscovery,
        undefined,
    );
    return new EESEASDiscovery(
        eECID,
        gPSI,
        eASDiscoveryFilter,
        eECServiceContSupport,
        uELocation,
        eASTargetDNAIs,
        discoveredEAS,
        failureResponse
    );
}; }
    return _cached_decoder_for_EESEASDiscovery(el);
}

let _cached_encoder_for_EESEASDiscovery: $.ASN1Encoder<EESEASDiscovery> | null = null;

/**
 * @summary Encodes a(n) EESEASDiscovery into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EESEASDiscovery, encoded as an ASN.1 Element.
 */
export
function _encode_EESEASDiscovery (value: EESEASDiscovery, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EESEASDiscovery) { _cached_encoder_for_EESEASDiscovery = function (value: EESEASDiscovery, elGetter: $.ASN1Encoder<EESEASDiscovery>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.eECID, $.BER),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* IF_ABSENT  */ ((value.eASDiscoveryFilter === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_EASDiscoveryFilter, $.BER)(value.eASDiscoveryFilter, $.BER)),
            /* IF_ABSENT  */ ((value.eECServiceContSupport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ACRScenarios, $.BER)(value.eECServiceContSupport, $.BER)),
            /* IF_ABSENT  */ ((value.uELocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Location, $.BER)(value.uELocation, $.BER)),
            /* IF_ABSENT  */ ((value.eASTargetDNAIs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_DNAIs, $.BER)(value.eASTargetDNAIs, $.BER)),
            /* IF_ABSENT  */ ((value.discoveredEAS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_DiscoveredEAS, $.BER)(value.discoveredEAS, $.BER)),
            /* IF_ABSENT  */ ((value.failureResponse === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_FailureResponse, $.BER)(value.failureResponse, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EESEASDiscovery(value, elGetter);
}


/* eslint-enable */
