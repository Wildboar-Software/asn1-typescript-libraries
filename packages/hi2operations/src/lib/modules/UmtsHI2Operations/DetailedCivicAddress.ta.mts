/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DetailedCivicAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DetailedCivicAddress ::= SEQUENCE {
 *  building [1] UTF8String OPTIONAL,
 *  -- Building (structure), for example Hope Theatre
 *  room [2] UTF8String OPTIONAL,
 *  -- Unit (apartment, suite), for example 12a
 *  placeType [3] UTF8String OPTIONAL,
 *  -- Place-type, for example office
 *  postalCommunityName [4] UTF8String OPTIONAL,
 *  -- Postal Community Name, for example Leonia
 *  additionalCode [5] UTF8String OPTIONAL,
 *  -- Additional Code, for example 13203000003
 *  seat [6] UTF8String OPTIONAL,
 *  -- Seat, desk, or cubicle, workstation, for example WS 181
 *  primaryRoad [7] UTF8String OPTIONAL,
 *  -- RD is the primary road name, for example Broadway
 *  primaryRoadDirection [8] UTF8String OPTIONAL,
 *  -- PRD is the leading road direction, for example N or North
 *  trailingStreetSuffix [9] UTF8String OPTIONAL,
 *  -- POD or trailing street suffix, for example SW or South West
 *  streetSuffix [10] UTF8String OPTIONAL,
 *  -- Street suffix or type, for example Avenue or Platz or Road
 *  houseNumber [11] UTF8String OPTIONAL,
 *  -- House number, for example 123
 *  houseNumberSuffix [12] UTF8String OPTIONAL,
 *  -- House number suffix, for example A or Ter
 *  landmarkAddress [13] UTF8String OPTIONAL,
 *  -- Landmark or vanity address, for example Columbia University
 *  additionalLocation [114] UTF8String OPTIONAL,
 *  -- Additional location, for example South Wing
 *  name [15] UTF8String OPTIONAL,
 *  -- Residence and office occupant, for example Joe's Barbershop
 *  floor [16] UTF8String OPTIONAL,
 *  -- Floor, for example 4th floor
 *  primaryStreet [17] UTF8String OPTIONAL,
 *  -- Primary street name, for example Broadway
 *  primaryStreetDirection [18] UTF8String OPTIONAL,
 *  -- PSD is the leading street direction, for example N or North
 *  roadSection [19] UTF8String OPTIONAL,
 *  -- Road section, for example 14
 *  roadBranch [20] UTF8String OPTIONAL,
 *  -- Road branch, for example Lane 7
 *  roadSubBranch [21] UTF8String OPTIONAL,
 *  -- Road sub-branch, for example Alley 8
 *  roadPreModifier [22] UTF8String OPTIONAL,
 *  -- Road pre-modifier, for example Old
 *  roadPostModifier [23] UTF8String OPTIONAL,
 *  -- Road post-modifier, for example Extended
 *  postalCode [24]UTF8String OPTIONAL,
 *  -- Postal/zip code, for example 10027-1234
 *  town [25] UTF8String OPTIONAL,
 *  county [26] UTF8String OPTIONAL,
 *  -- An administrative sub-section, often defined in ISO.3166-2[74] International
 *  -- Organization for Standardization, "Codes for the representation of names of
 *  -- countries and their subdivisions - Part 2: Country subdivision code"
 *  country [27] UTF8String,
 *  -- Defined in ISO.3166-1 [39] International Organization for Standardization, "Codes for
 *  -- the representation of names of countries and their subdivisions - Part 1: Country
 *  -- codes". Such definition is not optional in case of civic address. It is the
 *  -- minimum information needed to qualify and describe a civic address, when a
 *  -- regulation of a specific country requires such information
 *  language [28] UTF8String,
 *  -- Language defined in the IANA registry according to the assignments found
 *  -- in the standard ISO 639 Part 1, "ISO 639-1:2002[75], Codes for the representation of
 *  -- names of languages - Part 1: Alpha-2 code" or using assignments subsequently made
 *  -- by the ISO 639 Part 1 maintenance agency
 *  ...
 * }
 * ```
 * 
 * @class
 */
export
class DetailedCivicAddress {
    constructor (
        /**
         * @summary `building`.
         * @public
         * @readonly
         */
        readonly building: OPTIONAL<UTF8String>,
        /**
         * @summary `room`.
         * @public
         * @readonly
         */
        readonly room: OPTIONAL<UTF8String>,
        /**
         * @summary `placeType`.
         * @public
         * @readonly
         */
        readonly placeType: OPTIONAL<UTF8String>,
        /**
         * @summary `postalCommunityName`.
         * @public
         * @readonly
         */
        readonly postalCommunityName: OPTIONAL<UTF8String>,
        /**
         * @summary `additionalCode`.
         * @public
         * @readonly
         */
        readonly additionalCode: OPTIONAL<UTF8String>,
        /**
         * @summary `seat`.
         * @public
         * @readonly
         */
        readonly seat: OPTIONAL<UTF8String>,
        /**
         * @summary `primaryRoad`.
         * @public
         * @readonly
         */
        readonly primaryRoad: OPTIONAL<UTF8String>,
        /**
         * @summary `primaryRoadDirection`.
         * @public
         * @readonly
         */
        readonly primaryRoadDirection: OPTIONAL<UTF8String>,
        /**
         * @summary `trailingStreetSuffix`.
         * @public
         * @readonly
         */
        readonly trailingStreetSuffix: OPTIONAL<UTF8String>,
        /**
         * @summary `streetSuffix`.
         * @public
         * @readonly
         */
        readonly streetSuffix: OPTIONAL<UTF8String>,
        /**
         * @summary `houseNumber`.
         * @public
         * @readonly
         */
        readonly houseNumber: OPTIONAL<UTF8String>,
        /**
         * @summary `houseNumberSuffix`.
         * @public
         * @readonly
         */
        readonly houseNumberSuffix: OPTIONAL<UTF8String>,
        /**
         * @summary `landmarkAddress`.
         * @public
         * @readonly
         */
        readonly landmarkAddress: OPTIONAL<UTF8String>,
        /**
         * @summary `additionalLocation`.
         * @public
         * @readonly
         */
        readonly additionalLocation: OPTIONAL<UTF8String>,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<UTF8String>,
        /**
         * @summary `floor`.
         * @public
         * @readonly
         */
        readonly floor: OPTIONAL<UTF8String>,
        /**
         * @summary `primaryStreet`.
         * @public
         * @readonly
         */
        readonly primaryStreet: OPTIONAL<UTF8String>,
        /**
         * @summary `primaryStreetDirection`.
         * @public
         * @readonly
         */
        readonly primaryStreetDirection: OPTIONAL<UTF8String>,
        /**
         * @summary `roadSection`.
         * @public
         * @readonly
         */
        readonly roadSection: OPTIONAL<UTF8String>,
        /**
         * @summary `roadBranch`.
         * @public
         * @readonly
         */
        readonly roadBranch: OPTIONAL<UTF8String>,
        /**
         * @summary `roadSubBranch`.
         * @public
         * @readonly
         */
        readonly roadSubBranch: OPTIONAL<UTF8String>,
        /**
         * @summary `roadPreModifier`.
         * @public
         * @readonly
         */
        readonly roadPreModifier: OPTIONAL<UTF8String>,
        /**
         * @summary `roadPostModifier`.
         * @public
         * @readonly
         */
        readonly roadPostModifier: OPTIONAL<UTF8String>,
        /**
         * @summary `postalCode`.
         * @public
         * @readonly
         */
        readonly postalCode: OPTIONAL<UTF8String>,
        /**
         * @summary `town`.
         * @public
         * @readonly
         */
        readonly town: OPTIONAL<UTF8String>,
        /**
         * @summary `county`.
         * @public
         * @readonly
         */
        readonly county: OPTIONAL<UTF8String>,
        /**
         * @summary `country`.
         * @public
         * @readonly
         */
        readonly country: UTF8String,
        /**
         * @summary `language`.
         * @public
         * @readonly
         */
        readonly language: UTF8String,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DetailedCivicAddress
     * @description
     * 
     * This takes an `object` and converts it to a `DetailedCivicAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DetailedCivicAddress`.
     * @returns {DetailedCivicAddress}
     */
    public static _from_object (_o: { [_K in keyof (DetailedCivicAddress)]: (DetailedCivicAddress)[_K] }): DetailedCivicAddress {
        return new DetailedCivicAddress(_o.building, _o.room, _o.placeType, _o.postalCommunityName, _o.additionalCode, _o.seat, _o.primaryRoad, _o.primaryRoadDirection, _o.trailingStreetSuffix, _o.streetSuffix, _o.houseNumber, _o.houseNumberSuffix, _o.landmarkAddress, _o.additionalLocation, _o.name, _o.floor, _o.primaryStreet, _o.primaryStreetDirection, _o.roadSection, _o.roadBranch, _o.roadSubBranch, _o.roadPreModifier, _o.roadPostModifier, _o.postalCode, _o.town, _o.county, _o.country, _o.language, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DetailedCivicAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DetailedCivicAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("building", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("room", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("placeType", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("postalCommunityName", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("additionalCode", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("seat", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("primaryRoad", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("primaryRoadDirection", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("trailingStreetSuffix", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("streetSuffix", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("houseNumber", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("houseNumberSuffix", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("landmarkAddress", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("additionalLocation", true, $.hasTag(_TagClass.context, 114)),
    new $.ComponentSpec("name", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("floor", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("primaryStreet", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("primaryStreetDirection", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("roadSection", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("roadBranch", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("roadSubBranch", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("roadPreModifier", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("roadPostModifier", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("postalCode", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("town", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("county", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("country", false, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("language", false, $.hasTag(_TagClass.context, 28))
];

/**
 * @summary The Trailing Root Component Types of DetailedCivicAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DetailedCivicAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DetailedCivicAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DetailedCivicAddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DetailedCivicAddress: $.ASN1Decoder<DetailedCivicAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DetailedCivicAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DetailedCivicAddress (el: _Element): DetailedCivicAddress {
    if (!_cached_decoder_for_DetailedCivicAddress) { _cached_decoder_for_DetailedCivicAddress = function (el: _Element): DetailedCivicAddress {
    let building: OPTIONAL<UTF8String>;
    let room: OPTIONAL<UTF8String>;
    let placeType: OPTIONAL<UTF8String>;
    let postalCommunityName: OPTIONAL<UTF8String>;
    let additionalCode: OPTIONAL<UTF8String>;
    let seat: OPTIONAL<UTF8String>;
    let primaryRoad: OPTIONAL<UTF8String>;
    let primaryRoadDirection: OPTIONAL<UTF8String>;
    let trailingStreetSuffix: OPTIONAL<UTF8String>;
    let streetSuffix: OPTIONAL<UTF8String>;
    let houseNumber: OPTIONAL<UTF8String>;
    let houseNumberSuffix: OPTIONAL<UTF8String>;
    let landmarkAddress: OPTIONAL<UTF8String>;
    let additionalLocation: OPTIONAL<UTF8String>;
    let name: OPTIONAL<UTF8String>;
    let floor: OPTIONAL<UTF8String>;
    let primaryStreet: OPTIONAL<UTF8String>;
    let primaryStreetDirection: OPTIONAL<UTF8String>;
    let roadSection: OPTIONAL<UTF8String>;
    let roadBranch: OPTIONAL<UTF8String>;
    let roadSubBranch: OPTIONAL<UTF8String>;
    let roadPreModifier: OPTIONAL<UTF8String>;
    let roadPostModifier: OPTIONAL<UTF8String>;
    let postalCode: OPTIONAL<UTF8String>;
    let town: OPTIONAL<UTF8String>;
    let county: OPTIONAL<UTF8String>;
    let country!: UTF8String;
    let language!: UTF8String;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "building": (_el: _Element): void => { building = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "room": (_el: _Element): void => { room = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "placeType": (_el: _Element): void => { placeType = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "postalCommunityName": (_el: _Element): void => { postalCommunityName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "additionalCode": (_el: _Element): void => { additionalCode = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "seat": (_el: _Element): void => { seat = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "primaryRoad": (_el: _Element): void => { primaryRoad = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "primaryRoadDirection": (_el: _Element): void => { primaryRoadDirection = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "trailingStreetSuffix": (_el: _Element): void => { trailingStreetSuffix = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "streetSuffix": (_el: _Element): void => { streetSuffix = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "houseNumber": (_el: _Element): void => { houseNumber = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "houseNumberSuffix": (_el: _Element): void => { houseNumberSuffix = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "landmarkAddress": (_el: _Element): void => { landmarkAddress = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "additionalLocation": (_el: _Element): void => { additionalLocation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "name": (_el: _Element): void => { name = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "floor": (_el: _Element): void => { floor = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "primaryStreet": (_el: _Element): void => { primaryStreet = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "primaryStreetDirection": (_el: _Element): void => { primaryStreetDirection = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "roadSection": (_el: _Element): void => { roadSection = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "roadBranch": (_el: _Element): void => { roadBranch = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "roadSubBranch": (_el: _Element): void => { roadSubBranch = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "roadPreModifier": (_el: _Element): void => { roadPreModifier = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "roadPostModifier": (_el: _Element): void => { roadPostModifier = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "postalCode": (_el: _Element): void => { postalCode = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "town": (_el: _Element): void => { town = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "county": (_el: _Element): void => { county = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "country": (_el: _Element): void => { country = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "language": (_el: _Element): void => { language = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DetailedCivicAddress,
        _extension_additions_list_spec_for_DetailedCivicAddress,
        _root_component_type_list_2_spec_for_DetailedCivicAddress,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DetailedCivicAddress(
        building,
        room,
        placeType,
        postalCommunityName,
        additionalCode,
        seat,
        primaryRoad,
        primaryRoadDirection,
        trailingStreetSuffix,
        streetSuffix,
        houseNumber,
        houseNumberSuffix,
        landmarkAddress,
        additionalLocation,
        name,
        floor,
        primaryStreet,
        primaryStreetDirection,
        roadSection,
        roadBranch,
        roadSubBranch,
        roadPreModifier,
        roadPostModifier,
        postalCode,
        town,
        county,
        country,
        language,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DetailedCivicAddress(el);
}

let _cached_encoder_for_DetailedCivicAddress: $.ASN1Encoder<DetailedCivicAddress> | null = null;

/**
 * @summary Encodes a(n) DetailedCivicAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DetailedCivicAddress, encoded as an ASN.1 Element.
 */
export
function _encode_DetailedCivicAddress (value: DetailedCivicAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DetailedCivicAddress) { _cached_encoder_for_DetailedCivicAddress = function (value: DetailedCivicAddress, elGetter: $.ASN1Encoder<DetailedCivicAddress>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.building === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.building, $.BER)),
            /* IF_ABSENT  */ ((value.room === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.room, $.BER)),
            /* IF_ABSENT  */ ((value.placeType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.placeType, $.BER)),
            /* IF_ABSENT  */ ((value.postalCommunityName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeUTF8String, $.BER)(value.postalCommunityName, $.BER)),
            /* IF_ABSENT  */ ((value.additionalCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.additionalCode, $.BER)),
            /* IF_ABSENT  */ ((value.seat === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.seat, $.BER)),
            /* IF_ABSENT  */ ((value.primaryRoad === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeUTF8String, $.BER)(value.primaryRoad, $.BER)),
            /* IF_ABSENT  */ ((value.primaryRoadDirection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeUTF8String, $.BER)(value.primaryRoadDirection, $.BER)),
            /* IF_ABSENT  */ ((value.trailingStreetSuffix === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeUTF8String, $.BER)(value.trailingStreetSuffix, $.BER)),
            /* IF_ABSENT  */ ((value.streetSuffix === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeUTF8String, $.BER)(value.streetSuffix, $.BER)),
            /* IF_ABSENT  */ ((value.houseNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeUTF8String, $.BER)(value.houseNumber, $.BER)),
            /* IF_ABSENT  */ ((value.houseNumberSuffix === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeUTF8String, $.BER)(value.houseNumberSuffix, $.BER)),
            /* IF_ABSENT  */ ((value.landmarkAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeUTF8String, $.BER)(value.landmarkAddress, $.BER)),
            /* IF_ABSENT  */ ((value.additionalLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 114, () => $._encodeUTF8String, $.BER)(value.additionalLocation, $.BER)),
            /* IF_ABSENT  */ ((value.name === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => $._encodeUTF8String, $.BER)(value.name, $.BER)),
            /* IF_ABSENT  */ ((value.floor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => $._encodeUTF8String, $.BER)(value.floor, $.BER)),
            /* IF_ABSENT  */ ((value.primaryStreet === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeUTF8String, $.BER)(value.primaryStreet, $.BER)),
            /* IF_ABSENT  */ ((value.primaryStreetDirection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => $._encodeUTF8String, $.BER)(value.primaryStreetDirection, $.BER)),
            /* IF_ABSENT  */ ((value.roadSection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => $._encodeUTF8String, $.BER)(value.roadSection, $.BER)),
            /* IF_ABSENT  */ ((value.roadBranch === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => $._encodeUTF8String, $.BER)(value.roadBranch, $.BER)),
            /* IF_ABSENT  */ ((value.roadSubBranch === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => $._encodeUTF8String, $.BER)(value.roadSubBranch, $.BER)),
            /* IF_ABSENT  */ ((value.roadPreModifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => $._encodeUTF8String, $.BER)(value.roadPreModifier, $.BER)),
            /* IF_ABSENT  */ ((value.roadPostModifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => $._encodeUTF8String, $.BER)(value.roadPostModifier, $.BER)),
            /* IF_ABSENT  */ ((value.postalCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => $._encodeUTF8String, $.BER)(value.postalCode, $.BER)),
            /* IF_ABSENT  */ ((value.town === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => $._encodeUTF8String, $.BER)(value.town, $.BER)),
            /* IF_ABSENT  */ ((value.county === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => $._encodeUTF8String, $.BER)(value.county, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 27, () => $._encodeUTF8String, $.BER)(value.country, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 28, () => $._encodeUTF8String, $.BER)(value.language, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DetailedCivicAddress(value, elGetter);
}


/* eslint-enable */
