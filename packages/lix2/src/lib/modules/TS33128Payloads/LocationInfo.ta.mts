/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserLocation, _decode_UserLocation, _encode_UserLocation } from "../TS33128Payloads/UserLocation.ta.mjs";
import { GeographicArea, _decode_GeographicArea, _encode_GeographicArea } from "../TS33128Payloads/GeographicArea.ta.mjs";
import { RATType, _decode_RATType, _encode_RATType, _enum_for_RATType } from "../TS33128Payloads/RATType.ta.mjs";
import { TimeZone, _decode_TimeZone, _encode_TimeZone } from "../TS33128Payloads/TimeZone.ta.mjs";
import { CellInformation, _decode_CellInformation, _encode_CellInformation } from "../TS33128Payloads/CellInformation.ta.mjs";


/**
 * @summary LocationInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationInfo ::= SEQUENCE
 * {
 *     userLocation                [1] UserLocation OPTIONAL,
 *     currentLoc                  [2] BOOLEAN OPTIONAL,
 *     geoInfo                     [3] GeographicArea OPTIONAL,
 *     rATType                     [4] RATType OPTIONAL,
 *     timeZone                    [5] TimeZone OPTIONAL,
 *     additionalCellIDs           [6] SEQUENCE OF CellInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LocationInfo {
    constructor (
        /**
         * @summary `userLocation`.
         * @public
         * @readonly
         */
        readonly userLocation: OPTIONAL<UserLocation>,
        /**
         * @summary `currentLoc`.
         * @public
         * @readonly
         */
        readonly currentLoc: OPTIONAL<BOOLEAN>,
        /**
         * @summary `geoInfo`.
         * @public
         * @readonly
         */
        readonly geoInfo: OPTIONAL<GeographicArea>,
        /**
         * @summary `rATType`.
         * @public
         * @readonly
         */
        readonly rATType: OPTIONAL<RATType>,
        /**
         * @summary `timeZone`.
         * @public
         * @readonly
         */
        readonly timeZone: OPTIONAL<TimeZone>,
        /**
         * @summary `additionalCellIDs`.
         * @public
         * @readonly
         */
        readonly additionalCellIDs: OPTIONAL<CellInformation[]>
    ) {}

    /**
     * @summary Restructures an object into a LocationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `LocationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationInfo`.
     * @returns {LocationInfo}
     */
    public static _from_object (_o: { [_K in keyof (LocationInfo)]: (LocationInfo)[_K] }): LocationInfo {
        return new LocationInfo(_o.userLocation, _o.currentLoc, _o.geoInfo, _o.rATType, _o.timeZone, _o.additionalCellIDs);
    }

        /**
         * @summary The enum used as the type of the component `rATType`
         * @public
         * @static
         */

    public static _enum_for_rATType = _enum_for_RATType;
}

/**
 * @summary The Leading Root Component Types of LocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("userLocation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("currentLoc", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("geoInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("timeZone", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("additionalCellIDs", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of LocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocationInfo: $.ASN1Decoder<LocationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationInfo (el: _Element): LocationInfo {
    if (!_cached_decoder_for_LocationInfo) { _cached_decoder_for_LocationInfo = function (el: _Element): LocationInfo {
    let userLocation: OPTIONAL<UserLocation>;
    let currentLoc: OPTIONAL<BOOLEAN>;
    let geoInfo: OPTIONAL<GeographicArea>;
    let rATType: OPTIONAL<RATType>;
    let timeZone: OPTIONAL<TimeZone>;
    let additionalCellIDs: OPTIONAL<CellInformation[]>;
    const callbacks: $.DecodingMap = {
        "userLocation": (_el: _Element): void => { userLocation = $._decode_implicit<UserLocation>(() => _decode_UserLocation)(_el); },
        "currentLoc": (_el: _Element): void => { currentLoc = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "geoInfo": (_el: _Element): void => { geoInfo = $._decode_explicit<GeographicArea>(() => _decode_GeographicArea)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<RATType>(() => _decode_RATType)(_el); },
        "timeZone": (_el: _Element): void => { timeZone = $._decode_implicit<TimeZone>(() => _decode_TimeZone)(_el); },
        "additionalCellIDs": (_el: _Element): void => { additionalCellIDs = $._decode_implicit<CellInformation[]>(() => $._decodeSequenceOf<CellInformation>(() => _decode_CellInformation))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocationInfo,
        _extension_additions_list_spec_for_LocationInfo,
        _root_component_type_list_2_spec_for_LocationInfo,
        undefined,
    );
    return new LocationInfo(
        userLocation,
        currentLoc,
        geoInfo,
        rATType,
        timeZone,
        additionalCellIDs
    );
}; }
    return _cached_decoder_for_LocationInfo(el);
}

let _cached_encoder_for_LocationInfo: $.ASN1Encoder<LocationInfo> | null = null;

/**
 * @summary Encodes a(n) LocationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_LocationInfo (value: LocationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationInfo) { _cached_encoder_for_LocationInfo = function (value: LocationInfo, elGetter: $.ASN1Encoder<LocationInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.userLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_UserLocation, $.BER)(value.userLocation, $.BER)),
            /* IF_ABSENT  */ ((value.currentLoc === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.currentLoc, $.BER)),
            /* IF_ABSENT  */ ((value.geoInfo === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_GeographicArea, $.BER)(value.geoInfo, $.BER)),
            /* IF_ABSENT  */ ((value.rATType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_RATType, $.BER)(value.rATType, $.BER)),
            /* IF_ABSENT  */ ((value.timeZone === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_TimeZone, $.BER)(value.timeZone, $.BER)),
            /* IF_ABSENT  */ ((value.additionalCellIDs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<CellInformation>(() => _encode_CellInformation, $.BER), $.BER)(value.additionalCellIDs, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LocationInfo(value, elGetter);
}


/* eslint-enable */
