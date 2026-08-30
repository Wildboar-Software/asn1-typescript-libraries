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
import { NR_CGI, _decode_NR_CGI, _encode_NR_CGI } from "../MAP-CommonDataTypes/NR-CGI.ta.mjs";
import { E_UTRAN_CGI, _decode_E_UTRAN_CGI, _encode_E_UTRAN_CGI } from "../MAP-CommonDataTypes/E-UTRAN-CGI.ta.mjs";
import { GeographicalInformation, _decode_GeographicalInformation, _encode_GeographicalInformation } from "../MAP-MS-DataTypes/GeographicalInformation.ta.mjs";
import { GeodeticInformation, _decode_GeodeticInformation, _encode_GeodeticInformation } from "../MAP-MS-DataTypes/GeodeticInformation.ta.mjs";
import { FQDN, _decode_FQDN, _encode_FQDN } from "../MAP-MS-DataTypes/FQDN.ta.mjs";
import { TA_Id, _decode_TA_Id, _encode_TA_Id } from "../MAP-CommonDataTypes/TA-Id.ta.mjs";
import { AgeOfLocationInformation, _decode_AgeOfLocationInformation, _encode_AgeOfLocationInformation } from "../MAP-CommonDataTypes/AgeOfLocationInformation.ta.mjs";
import { PLMN_Id, _decode_PLMN_Id, _encode_PLMN_Id } from "../MAP-CommonDataTypes/PLMN-Id.ta.mjs";
import { TimeZone, _decode_TimeZone, _encode_TimeZone } from "../MAP-MS-DataTypes/TimeZone.ta.mjs";
import { Used_RAT_Type, _enum_for_Used_RAT_Type, Used_RAT_Type_utran /* IMPORTED_LONG_ENUMERATION_ITEM */, utran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_geran /* IMPORTED_LONG_ENUMERATION_ITEM */, geran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_gan /* IMPORTED_LONG_ENUMERATION_ITEM */, gan /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_i_hspa_evolution /* IMPORTED_LONG_ENUMERATION_ITEM */, i_hspa_evolution /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_e_utran /* IMPORTED_LONG_ENUMERATION_ITEM */, e_utran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_nb_iot /* IMPORTED_LONG_ENUMERATION_ITEM */, nb_iot /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Used_RAT_Type, _encode_Used_RAT_Type } from "../MAP-MS-DataTypes/Used-RAT-Type.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { NR_TA_Id, _decode_NR_TA_Id, _encode_NR_TA_Id } from "../MAP-CommonDataTypes/NR-TA-Id.ta.mjs";


/**
 * @summary LocationInformation5GS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationInformation5GS ::= SEQUENCE {
 *     nrCellGlobalIdentity    [0] NR-CGI    OPTIONAL,
 *     e-utranCellGlobalIdentity    [1] E-UTRAN-CGI    OPTIONAL,
 *     geographicalInformation    [2] GeographicalInformation    OPTIONAL,
 *     geodeticInformation    [3] GeodeticInformation    OPTIONAL,
 *     amf-address    [4] FQDN    OPTIONAL,
 *     trackingAreaIdentity    [5] TA-Id    OPTIONAL,
 *     currentLocationRetrieved    [6] NULL    OPTIONAL,
 *     ageOfLocationInformation    [7] AgeOfLocationInformation    OPTIONAL,
 *     vplmnId    [8] PLMN-Id    OPTIONAL,
 *     localtimeZone    [9] TimeZone    OPTIONAL,
 *     rat-Type    [10] Used-RAT-Type    OPTIONAL,
 *     extensionContainer    [11] ExtensionContainer    OPTIONAL,
 *     ...,
 *     nrTrackingAreaIdentity    [12] NR-TA-Id    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class LocationInformation5GS {
    constructor (
        /**
         * @summary `nrCellGlobalIdentity`.
         * @public
         * @readonly
         */
        readonly nrCellGlobalIdentity: OPTIONAL<NR_CGI>,
        /**
         * @summary `e_utranCellGlobalIdentity`.
         * @public
         * @readonly
         */
        readonly e_utranCellGlobalIdentity: OPTIONAL<E_UTRAN_CGI>,
        /**
         * @summary `geographicalInformation`.
         * @public
         * @readonly
         */
        readonly geographicalInformation: OPTIONAL<GeographicalInformation>,
        /**
         * @summary `geodeticInformation`.
         * @public
         * @readonly
         */
        readonly geodeticInformation: OPTIONAL<GeodeticInformation>,
        /**
         * @summary `amf_address`.
         * @public
         * @readonly
         */
        readonly amf_address: OPTIONAL<FQDN>,
        /**
         * @summary `trackingAreaIdentity`.
         * @public
         * @readonly
         */
        readonly trackingAreaIdentity: OPTIONAL<TA_Id>,
        /**
         * @summary `currentLocationRetrieved`.
         * @public
         * @readonly
         */
        readonly currentLocationRetrieved: OPTIONAL<NULL>,
        /**
         * @summary `ageOfLocationInformation`.
         * @public
         * @readonly
         */
        readonly ageOfLocationInformation: OPTIONAL<AgeOfLocationInformation>,
        /**
         * @summary `vplmnId`.
         * @public
         * @readonly
         */
        readonly vplmnId: OPTIONAL<PLMN_Id>,
        /**
         * @summary `localtimeZone`.
         * @public
         * @readonly
         */
        readonly localtimeZone: OPTIONAL<TimeZone>,
        /**
         * @summary `rat_Type`.
         * @public
         * @readonly
         */
        readonly rat_Type: OPTIONAL<Used_RAT_Type>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `nrTrackingAreaIdentity`.
         * @public
         * @readonly
         */
        readonly nrTrackingAreaIdentity: OPTIONAL<NR_TA_Id>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LocationInformation5GS
     * @description
     * 
     * This takes an `object` and converts it to a `LocationInformation5GS`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationInformation5GS`.
     * @returns {LocationInformation5GS}
     */
    public static _from_object (_o: { [_K in keyof (LocationInformation5GS)]: (LocationInformation5GS)[_K] }): LocationInformation5GS {
        return new LocationInformation5GS(_o.nrCellGlobalIdentity, _o.e_utranCellGlobalIdentity, _o.geographicalInformation, _o.geodeticInformation, _o.amf_address, _o.trackingAreaIdentity, _o.currentLocationRetrieved, _o.ageOfLocationInformation, _o.vplmnId, _o.localtimeZone, _o.rat_Type, _o.extensionContainer, _o.nrTrackingAreaIdentity, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `rat_Type`
         * @public
         * @static
         */

    public static _enum_for_rat_Type = _enum_for_Used_RAT_Type;
}

/**
 * @summary The Leading Root Component Types of LocationInformation5GS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationInformation5GS: $.ComponentSpec[] = [
    new $.ComponentSpec("nrCellGlobalIdentity", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("e-utranCellGlobalIdentity", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("geographicalInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("geodeticInformation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("amf-address", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("trackingAreaIdentity", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("currentLocationRetrieved", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("ageOfLocationInformation", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("vplmnId", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("localtimeZone", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("rat-Type", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of LocationInformation5GS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationInformation5GS: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationInformation5GS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationInformation5GS: $.ComponentSpec[] = [
    new $.ComponentSpec("nrTrackingAreaIdentity", true, $.hasTag(_TagClass.context, 12))
];

let _cached_decoder_for_LocationInformation5GS: $.ASN1Decoder<LocationInformation5GS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationInformation5GS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationInformation5GS (el: _Element): LocationInformation5GS {
    if (!_cached_decoder_for_LocationInformation5GS) { _cached_decoder_for_LocationInformation5GS = function (el: _Element): LocationInformation5GS {
    let nrCellGlobalIdentity: OPTIONAL<NR_CGI> = undefined;
    let e_utranCellGlobalIdentity: OPTIONAL<E_UTRAN_CGI> = undefined;
    let geographicalInformation: OPTIONAL<GeographicalInformation> = undefined;
    let geodeticInformation: OPTIONAL<GeodeticInformation> = undefined;
    let amf_address: OPTIONAL<FQDN> = undefined;
    let trackingAreaIdentity: OPTIONAL<TA_Id> = undefined;
    let currentLocationRetrieved: OPTIONAL<NULL> = undefined;
    let ageOfLocationInformation: OPTIONAL<AgeOfLocationInformation> = undefined;
    let vplmnId: OPTIONAL<PLMN_Id> = undefined;
    let localtimeZone: OPTIONAL<TimeZone> = undefined;
    let rat_Type: OPTIONAL<Used_RAT_Type> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let nrTrackingAreaIdentity: OPTIONAL<NR_TA_Id> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "nrCellGlobalIdentity": (_el: _Element): void => { nrCellGlobalIdentity = $._decode_implicit<NR_CGI>(() => _decode_NR_CGI)(_el); },
        "e-utranCellGlobalIdentity": (_el: _Element): void => { e_utranCellGlobalIdentity = $._decode_implicit<E_UTRAN_CGI>(() => _decode_E_UTRAN_CGI)(_el); },
        "geographicalInformation": (_el: _Element): void => { geographicalInformation = $._decode_implicit<GeographicalInformation>(() => _decode_GeographicalInformation)(_el); },
        "geodeticInformation": (_el: _Element): void => { geodeticInformation = $._decode_implicit<GeodeticInformation>(() => _decode_GeodeticInformation)(_el); },
        "amf-address": (_el: _Element): void => { amf_address = $._decode_implicit<FQDN>(() => _decode_FQDN)(_el); },
        "trackingAreaIdentity": (_el: _Element): void => { trackingAreaIdentity = $._decode_implicit<TA_Id>(() => _decode_TA_Id)(_el); },
        "currentLocationRetrieved": (_el: _Element): void => { currentLocationRetrieved = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "ageOfLocationInformation": (_el: _Element): void => { ageOfLocationInformation = $._decode_implicit<AgeOfLocationInformation>(() => _decode_AgeOfLocationInformation)(_el); },
        "vplmnId": (_el: _Element): void => { vplmnId = $._decode_implicit<PLMN_Id>(() => _decode_PLMN_Id)(_el); },
        "localtimeZone": (_el: _Element): void => { localtimeZone = $._decode_implicit<TimeZone>(() => _decode_TimeZone)(_el); },
        "rat-Type": (_el: _Element): void => { rat_Type = $._decode_implicit<Used_RAT_Type>(() => _decode_Used_RAT_Type)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "nrTrackingAreaIdentity": (_el: _Element): void => { nrTrackingAreaIdentity = $._decode_implicit<NR_TA_Id>(() => _decode_NR_TA_Id)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocationInformation5GS,
        _extension_additions_list_spec_for_LocationInformation5GS,
        _root_component_type_list_2_spec_for_LocationInformation5GS,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LocationInformation5GS(
        nrCellGlobalIdentity,
        e_utranCellGlobalIdentity,
        geographicalInformation,
        geodeticInformation,
        amf_address,
        trackingAreaIdentity,
        currentLocationRetrieved,
        ageOfLocationInformation,
        vplmnId,
        localtimeZone,
        rat_Type,
        extensionContainer,
        nrTrackingAreaIdentity,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LocationInformation5GS(el);
}

let _cached_encoder_for_LocationInformation5GS: $.ASN1Encoder<LocationInformation5GS> | null = null;

/**
 * @summary Encodes a(n) LocationInformation5GS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationInformation5GS, encoded as an ASN.1 Element.
 */
export
function _encode_LocationInformation5GS (value: LocationInformation5GS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationInformation5GS) { _cached_encoder_for_LocationInformation5GS = function (value: LocationInformation5GS, elGetter: $.ASN1Encoder<LocationInformation5GS>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.nrCellGlobalIdentity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_NR_CGI, $.BER)(value.nrCellGlobalIdentity, $.BER)),
            /* IF_ABSENT  */ ((value.e_utranCellGlobalIdentity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_E_UTRAN_CGI, $.BER)(value.e_utranCellGlobalIdentity, $.BER)),
            /* IF_ABSENT  */ ((value.geographicalInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_GeographicalInformation, $.BER)(value.geographicalInformation, $.BER)),
            /* IF_ABSENT  */ ((value.geodeticInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_GeodeticInformation, $.BER)(value.geodeticInformation, $.BER)),
            /* IF_ABSENT  */ ((value.amf_address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_FQDN, $.BER)(value.amf_address, $.BER)),
            /* IF_ABSENT  */ ((value.trackingAreaIdentity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_TA_Id, $.BER)(value.trackingAreaIdentity, $.BER)),
            /* IF_ABSENT  */ ((value.currentLocationRetrieved === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER)(value.currentLocationRetrieved, $.BER)),
            /* IF_ABSENT  */ ((value.ageOfLocationInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_AgeOfLocationInformation, $.BER)(value.ageOfLocationInformation, $.BER)),
            /* IF_ABSENT  */ ((value.vplmnId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_PLMN_Id, $.BER)(value.vplmnId, $.BER)),
            /* IF_ABSENT  */ ((value.localtimeZone === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_TimeZone, $.BER)(value.localtimeZone, $.BER)),
            /* IF_ABSENT  */ ((value.rat_Type === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_Used_RAT_Type, $.BER)(value.rat_Type, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.nrTrackingAreaIdentity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_NR_TA_Id, $.BER)(value.nrTrackingAreaIdentity, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LocationInformation5GS(value, elGetter);
}


/* eslint-enable */
