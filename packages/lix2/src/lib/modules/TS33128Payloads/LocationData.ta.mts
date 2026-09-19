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
import { GeographicArea, _decode_GeographicArea, _encode_GeographicArea } from "../TS33128Payloads/GeographicArea.ta.mjs";
// export { GeographicArea, _decode_GeographicArea, _encode_GeographicArea } from "../TS33128Payloads/GeographicArea.ta.mjs";
import { AccuracyFulfilmentIndicator, _enum_for_AccuracyFulfilmentIndicator, AccuracyFulfilmentIndicator_requestedAccuracyFulfilled /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedAccuracyFulfilled /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccuracyFulfilmentIndicator_requestedAccuracyNotFulfilled /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedAccuracyNotFulfilled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccuracyFulfilmentIndicator, _encode_AccuracyFulfilmentIndicator } from "../TS33128Payloads/AccuracyFulfilmentIndicator.ta.mjs";
// export { AccuracyFulfilmentIndicator, _enum_for_AccuracyFulfilmentIndicator, AccuracyFulfilmentIndicator_requestedAccuracyFulfilled /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedAccuracyFulfilled /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccuracyFulfilmentIndicator_requestedAccuracyNotFulfilled /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedAccuracyNotFulfilled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccuracyFulfilmentIndicator, _encode_AccuracyFulfilmentIndicator } from "../TS33128Payloads/AccuracyFulfilmentIndicator.ta.mjs";
import { AgeOfLocation, _decode_AgeOfLocation, _encode_AgeOfLocation } from "../TS33128Payloads/AgeOfLocation.ta.mjs";
// export { AgeOfLocation, _decode_AgeOfLocation, _encode_AgeOfLocation } from "../TS33128Payloads/AgeOfLocation.ta.mjs";
import { VelocityEstimate, _decode_VelocityEstimate, _encode_VelocityEstimate } from "../TS33128Payloads/VelocityEstimate.ta.mjs";
// export { VelocityEstimate, _decode_VelocityEstimate, _encode_VelocityEstimate } from "../TS33128Payloads/VelocityEstimate.ta.mjs";
import { CivicAddress, _decode_CivicAddress, _encode_CivicAddress } from "../TS33128Payloads/CivicAddress.ta.mjs";
// export { CivicAddress, _decode_CivicAddress, _encode_CivicAddress } from "../TS33128Payloads/CivicAddress.ta.mjs";
import { PositioningMethodAndUsage, _decode_PositioningMethodAndUsage, _encode_PositioningMethodAndUsage } from "../TS33128Payloads/PositioningMethodAndUsage.ta.mjs";
// export { PositioningMethodAndUsage, _decode_PositioningMethodAndUsage, _encode_PositioningMethodAndUsage } from "../TS33128Payloads/PositioningMethodAndUsage.ta.mjs";
import { GNSSPositioningMethodAndUsage, _decode_GNSSPositioningMethodAndUsage, _encode_GNSSPositioningMethodAndUsage } from "../TS33128Payloads/GNSSPositioningMethodAndUsage.ta.mjs";
// export { GNSSPositioningMethodAndUsage, _decode_GNSSPositioningMethodAndUsage, _encode_GNSSPositioningMethodAndUsage } from "../TS33128Payloads/GNSSPositioningMethodAndUsage.ta.mjs";
import { ECGI, _decode_ECGI, _encode_ECGI } from "../TS33128Payloads/ECGI.ta.mjs";
// export { ECGI, _decode_ECGI, _encode_ECGI } from "../TS33128Payloads/ECGI.ta.mjs";
import { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128Payloads/NCGI.ta.mjs";
// export { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128Payloads/NCGI.ta.mjs";
import { Altitude, _decode_Altitude, _encode_Altitude } from "../TS33128Payloads/Altitude.ta.mjs";
// export { Altitude, _decode_Altitude, _encode_Altitude } from "../TS33128Payloads/Altitude.ta.mjs";
import { BarometricPressure, _decode_BarometricPressure, _encode_BarometricPressure } from "../TS33128Payloads/BarometricPressure.ta.mjs";
// export { BarometricPressure, _decode_BarometricPressure, _encode_BarometricPressure } from "../TS33128Payloads/BarometricPressure.ta.mjs";


/**
 * @summary LocationData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationData ::= SEQUENCE
 * {
 *     locationEstimate            [1] GeographicArea,
 *     accuracyFulfilmentIndicator [2] AccuracyFulfilmentIndicator OPTIONAL,
 *     ageOfLocationEstimate       [3] AgeOfLocation OPTIONAL,
 *     velocityEstimate            [4] VelocityEstimate OPTIONAL,
 *     civicAddress                [5] CivicAddress OPTIONAL,
 *     positioningDataList         [6] SET OF PositioningMethodAndUsage OPTIONAL,
 *     gNSSPositioningDataList     [7] SET OF GNSSPositioningMethodAndUsage OPTIONAL,
 *     eCGI                        [8] ECGI OPTIONAL,
 *     nCGI                        [9] NCGI OPTIONAL,
 *     altitude                    [10] Altitude OPTIONAL,
 *     barometricPressure          [11] BarometricPressure OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LocationData {
    constructor (
        /**
         * @summary `locationEstimate`.
         * @public
         * @readonly
         */
        readonly locationEstimate: GeographicArea,
        /**
         * @summary `accuracyFulfilmentIndicator`.
         * @public
         * @readonly
         */
        readonly accuracyFulfilmentIndicator: OPTIONAL<AccuracyFulfilmentIndicator>,
        /**
         * @summary `ageOfLocationEstimate`.
         * @public
         * @readonly
         */
        readonly ageOfLocationEstimate: OPTIONAL<AgeOfLocation>,
        /**
         * @summary `velocityEstimate`.
         * @public
         * @readonly
         */
        readonly velocityEstimate: OPTIONAL<VelocityEstimate>,
        /**
         * @summary `civicAddress`.
         * @public
         * @readonly
         */
        readonly civicAddress: OPTIONAL<CivicAddress>,
        /**
         * @summary `positioningDataList`.
         * @public
         * @readonly
         */
        readonly positioningDataList: OPTIONAL<PositioningMethodAndUsage[]>,
        /**
         * @summary `gNSSPositioningDataList`.
         * @public
         * @readonly
         */
        readonly gNSSPositioningDataList: OPTIONAL<GNSSPositioningMethodAndUsage[]>,
        /**
         * @summary `eCGI`.
         * @public
         * @readonly
         */
        readonly eCGI: OPTIONAL<ECGI>,
        /**
         * @summary `nCGI`.
         * @public
         * @readonly
         */
        readonly nCGI: OPTIONAL<NCGI>,
        /**
         * @summary `altitude`.
         * @public
         * @readonly
         */
        readonly altitude: OPTIONAL<Altitude>,
        /**
         * @summary `barometricPressure`.
         * @public
         * @readonly
         */
        readonly barometricPressure: OPTIONAL<BarometricPressure>
    ) {}

    /**
     * @summary Restructures an object into a LocationData
     * @description
     * 
     * This takes an `object` and converts it to a `LocationData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationData`.
     * @returns {LocationData}
     */
    public static _from_object (_o: { [_K in keyof (LocationData)]: (LocationData)[_K] }): LocationData {
        return new LocationData(_o.locationEstimate, _o.accuracyFulfilmentIndicator, _o.ageOfLocationEstimate, _o.velocityEstimate, _o.civicAddress, _o.positioningDataList, _o.gNSSPositioningDataList, _o.eCGI, _o.nCGI, _o.altitude, _o.barometricPressure);
    }

        /**
         * @summary The enum used as the type of the component `accuracyFulfilmentIndicator`
         * @public
         * @static
         */

    public static _enum_for_accuracyFulfilmentIndicator = _enum_for_AccuracyFulfilmentIndicator;
}

/**
 * @summary The Leading Root Component Types of LocationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationData: $.ComponentSpec[] = [
    new $.ComponentSpec("locationEstimate", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("accuracyFulfilmentIndicator", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ageOfLocationEstimate", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("velocityEstimate", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("civicAddress", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("positioningDataList", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("gNSSPositioningDataList", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("eCGI", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("nCGI", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("altitude", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("barometricPressure", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of LocationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocationData: $.ASN1Decoder<LocationData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationData (el: _Element): LocationData {
    if (!_cached_decoder_for_LocationData) { _cached_decoder_for_LocationData = function (el: _Element): LocationData {
    let locationEstimate!: GeographicArea;
    let accuracyFulfilmentIndicator: OPTIONAL<AccuracyFulfilmentIndicator>;
    let ageOfLocationEstimate: OPTIONAL<AgeOfLocation>;
    let velocityEstimate: OPTIONAL<VelocityEstimate>;
    let civicAddress: OPTIONAL<CivicAddress>;
    let positioningDataList: OPTIONAL<PositioningMethodAndUsage[]>;
    let gNSSPositioningDataList: OPTIONAL<GNSSPositioningMethodAndUsage[]>;
    let eCGI: OPTIONAL<ECGI>;
    let nCGI: OPTIONAL<NCGI>;
    let altitude: OPTIONAL<Altitude>;
    let barometricPressure: OPTIONAL<BarometricPressure>;
    const callbacks: $.DecodingMap = {
        "locationEstimate": (_el: _Element): void => { locationEstimate = $._decode_explicit<GeographicArea>(() => _decode_GeographicArea)(_el); },
        "accuracyFulfilmentIndicator": (_el: _Element): void => { accuracyFulfilmentIndicator = $._decode_implicit<AccuracyFulfilmentIndicator>(() => _decode_AccuracyFulfilmentIndicator)(_el); },
        "ageOfLocationEstimate": (_el: _Element): void => { ageOfLocationEstimate = $._decode_implicit<AgeOfLocation>(() => _decode_AgeOfLocation)(_el); },
        "velocityEstimate": (_el: _Element): void => { velocityEstimate = $._decode_explicit<VelocityEstimate>(() => _decode_VelocityEstimate)(_el); },
        "civicAddress": (_el: _Element): void => { civicAddress = $._decode_implicit<CivicAddress>(() => _decode_CivicAddress)(_el); },
        "positioningDataList": (_el: _Element): void => { positioningDataList = $._decode_implicit<PositioningMethodAndUsage[]>(() => $._decodeSetOf<PositioningMethodAndUsage>(() => _decode_PositioningMethodAndUsage))(_el); },
        "gNSSPositioningDataList": (_el: _Element): void => { gNSSPositioningDataList = $._decode_implicit<GNSSPositioningMethodAndUsage[]>(() => $._decodeSetOf<GNSSPositioningMethodAndUsage>(() => _decode_GNSSPositioningMethodAndUsage))(_el); },
        "eCGI": (_el: _Element): void => { eCGI = $._decode_implicit<ECGI>(() => _decode_ECGI)(_el); },
        "nCGI": (_el: _Element): void => { nCGI = $._decode_implicit<NCGI>(() => _decode_NCGI)(_el); },
        "altitude": (_el: _Element): void => { altitude = $._decode_implicit<Altitude>(() => _decode_Altitude)(_el); },
        "barometricPressure": (_el: _Element): void => { barometricPressure = $._decode_implicit<BarometricPressure>(() => _decode_BarometricPressure)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocationData,
        _extension_additions_list_spec_for_LocationData,
        _root_component_type_list_2_spec_for_LocationData,
        undefined,
    );
    return new LocationData(
        locationEstimate,
        accuracyFulfilmentIndicator,
        ageOfLocationEstimate,
        velocityEstimate,
        civicAddress,
        positioningDataList,
        gNSSPositioningDataList,
        eCGI,
        nCGI,
        altitude,
        barometricPressure
    );
}; }
    return _cached_decoder_for_LocationData(el);
}

let _cached_encoder_for_LocationData: $.ASN1Encoder<LocationData> | null = null;

/**
 * @summary Encodes a(n) LocationData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationData, encoded as an ASN.1 Element.
 */
export
function _encode_LocationData (value: LocationData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationData) { _cached_encoder_for_LocationData = function (value: LocationData, elGetter: $.ASN1Encoder<LocationData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GeographicArea, $.BER)(value.locationEstimate, $.BER),
            /* IF_ABSENT  */ ((value.accuracyFulfilmentIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AccuracyFulfilmentIndicator, $.BER)(value.accuracyFulfilmentIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.ageOfLocationEstimate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AgeOfLocation, $.BER)(value.ageOfLocationEstimate, $.BER)),
            /* IF_ABSENT  */ ((value.velocityEstimate === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_VelocityEstimate, $.BER)(value.velocityEstimate, $.BER)),
            /* IF_ABSENT  */ ((value.civicAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CivicAddress, $.BER)(value.civicAddress, $.BER)),
            /* IF_ABSENT  */ ((value.positioningDataList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeSetOf<PositioningMethodAndUsage>(() => _encode_PositioningMethodAndUsage, $.BER), $.BER)(value.positioningDataList, $.BER)),
            /* IF_ABSENT  */ ((value.gNSSPositioningDataList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeSetOf<GNSSPositioningMethodAndUsage>(() => _encode_GNSSPositioningMethodAndUsage, $.BER), $.BER)(value.gNSSPositioningDataList, $.BER)),
            /* IF_ABSENT  */ ((value.eCGI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ECGI, $.BER)(value.eCGI, $.BER)),
            /* IF_ABSENT  */ ((value.nCGI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_NCGI, $.BER)(value.nCGI, $.BER)),
            /* IF_ABSENT  */ ((value.altitude === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_Altitude, $.BER)(value.altitude, $.BER)),
            /* IF_ABSENT  */ ((value.barometricPressure === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_BarometricPressure, $.BER)(value.barometricPressure, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LocationData(value, elGetter);
}


/* eslint-enable */
