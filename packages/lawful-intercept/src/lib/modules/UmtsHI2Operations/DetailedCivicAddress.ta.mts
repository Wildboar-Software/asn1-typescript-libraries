/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OPTIONAL,
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DetailedCivicAddress
 * @description
 * 
 * One detailed civic address used to enrich an HI2 location, typically the cell
 * site or hotspot rather than the target's coordinates.
 * 
 * Country and language are required. Country is the minimum that qualifies the
 * address when national regulation requires a civic address. The other elements
 * are included when known. Tokens such as RD, PRD, POD, and PSD are the
 * civic-address labels from the annex B.3 comments.
 * 
 * 3GPP TS 33.108, annex B.3 and clause 16.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DetailedCivicAddress ::= SEQUENCE {
 *     building            [1] UTF8String OPTIONAL,
 *         -- Building (structure), for example Hope Theatre
 *     room                [2] UTF8String OPTIONAL,
 *         -- Unit (apartment, suite), for example 12a
 *     placeType            [3] UTF8String OPTIONAL,
 *         -- Place-type, for example office
 *     postalCommunityName    [4] UTF8String OPTIONAL,
 *         -- Postal Community Name, for example Leonia
 *     additionalCode    [5] UTF8String OPTIONAL,
 *         -- Additional Code, for example 13203000003
 *     seat                [6] UTF8String OPTIONAL,
 *         -- Seat, desk, or cubicle, workstation, for example WS 181
 *     primaryRoad        [7] UTF8String OPTIONAL,
 *         -- RD is the primary road name, for example Broadway
 *     primaryRoadDirection   [8] UTF8String OPTIONAL,
 *         -- PRD is the leading road direction, for example N or North
 *     trailingStreetSuffix [9] UTF8String OPTIONAL,
 *         -- POD or trailing street suffix, for example SW or South West
 *     streetSuffix        [10] UTF8String OPTIONAL,
 *         -- Street suffix or type, for example Avenue or Platz or Road
 *     houseNumber            [11] UTF8String OPTIONAL,
 *         -- House number, for example 123
 *     houseNumberSuffix    [12] UTF8String OPTIONAL,
 *         -- House number suffix, for example A or Ter
 *     landmarkAddress        [13] UTF8String OPTIONAL,
 *         -- Landmark or vanity address, for example Columbia University
 *     additionalLocation    [114] UTF8String OPTIONAL,
 *         -- Additional location, for example South Wing
 *     name             [15] UTF8String OPTIONAL,
 *         -- Residence and office occupant, for example Joe's Barbershop
 *     floor             [16] UTF8String OPTIONAL,
 *         -- Floor, for example 4th floor
 *     primaryStreet    [17] UTF8String OPTIONAL,
 *         -- Primary street name, for example Broadway
 *     primaryStreetDirection   [18] UTF8String OPTIONAL,
 *         -- PSD is the leading street direction, for example N or North
 *     roadSection        [19] UTF8String OPTIONAL,
 *         -- Road section, for example 14
 *     roadBranch        [20] UTF8String OPTIONAL,
 *         -- Road branch, for example Lane 7
 *     roadSubBranch      [21] UTF8String OPTIONAL,
 *         -- Road sub-branch, for example Alley 8
 *     roadPreModifier [22] UTF8String OPTIONAL,
 *         -- Road pre-modifier, for example Old
 *     roadPostModifier [23] UTF8String OPTIONAL,
 *         -- Road post-modifier, for example Extended
 *     postalCode        [24]UTF8String OPTIONAL,
 *         -- Postal/zip code, for example 10027-1234
 *     town            [25] UTF8String OPTIONAL,
 *     county            [26] UTF8String OPTIONAL,
 *         -- An administrative sub-section, often defined in ISO.3166-2[74]  International
 *         -- Organization for Standardization, "Codes for the representation of names of
 *         -- countries and their subdivisions -  Part 2: Country subdivision code"
 *     country            [27] UTF8String,
 *         -- Defined in ISO.3166-1 [39] International Organization for Standardization, "Codes for
 *         -- the representation of names of countries and their subdivisions - Part 1: Country
 *         -- codes". Such definition is not optional in case of civic address. It is the
 *         -- minimum information needed to qualify and describe a civic address, when a
 *         -- regulation of a specific country requires such information
 *     language        [28] UTF8String,
 *         -- Language defined in the IANA registry according to the assignments found
 *         -- in the standard ISO 639 Part 1, "ISO 639-1:2002[75], Codes for the representation of
 *         -- names of languages - Part 1: Alpha-2 code" or using assignments subsequently made
 *         -- by the ISO 639 Part 1 maintenance agency
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class DetailedCivicAddress {
    /**
     * @summary `building`.
     * @description
     * 
     * Building or structure, for example Hope Theatre. Include it when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly building: OPTIONAL<UTF8String>;
    /**
     * @summary `room`.
     * @description
     * 
     * Unit, apartment, or suite, for example 12a. Include it when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly room: OPTIONAL<UTF8String>;
    /**
     * @summary `placeType`.
     * @description
     * 
     * Kind of place, for example office. Include it when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly placeType: OPTIONAL<UTF8String>;
    /**
     * @summary `postalCommunityName`.
     * @description
     * 
     * Postal community name, for example Leonia. Include it when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly postalCommunityName: OPTIONAL<UTF8String>;
    /**
     * @summary `additionalCode`.
     * @description
     * 
     * Additional location code, for example 13203000003. Include it when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly additionalCode: OPTIONAL<UTF8String>;
    /**
     * @summary `seat`.
     * @description
     * 
     * Seat, desk, cubicle, or workstation, for example WS 181. Include it when
     * known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly seat: OPTIONAL<UTF8String>;
    /**
     * @summary `primaryRoad`.
     * @description
     * 
     * Primary road name (RD), for example Broadway. Include it when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly primaryRoad: OPTIONAL<UTF8String>;
    /**
     * @summary `primaryRoadDirection`.
     * @description
     * 
     * Leading road direction (PRD), for example N or North. Include it when
     * known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly primaryRoadDirection: OPTIONAL<UTF8String>;
    /**
     * @summary `trailingStreetSuffix`.
     * @description
     * 
     * Trailing street suffix (POD), for example SW or South West. Include it
     * when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly trailingStreetSuffix: OPTIONAL<UTF8String>;
    /**
     * @summary `streetSuffix`.
     * @description
     * 
     * Street suffix or type, for example Avenue, Platz, or Road. Include it
     * when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly streetSuffix: OPTIONAL<UTF8String>;
    /**
     * @summary `houseNumber`.
     * @description
     * 
     * House number, for example 123. Include it when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly houseNumber: OPTIONAL<UTF8String>;
    /**
     * @summary `houseNumberSuffix`.
     * @description
     * 
     * House-number suffix, for example A or Ter. Include it when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly houseNumberSuffix: OPTIONAL<UTF8String>;
    /**
     * @summary `landmarkAddress`.
     * @description
     * 
     * Landmark or vanity address, for example Columbia University. Include it
     * when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly landmarkAddress: OPTIONAL<UTF8String>;
    /**
     * @summary `additionalLocation`.
     * @description
     * 
     * Additional location, for example South Wing. Include it when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly additionalLocation: OPTIONAL<UTF8String>;
    /**
     * @summary `name`.
     * @description
     * 
     * Residence or office occupant, for example Joe's Barbershop. Include it
     * when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly name: OPTIONAL<UTF8String>;
    /**
     * @summary `floor`.
     * @description
     * 
     * Floor, for example 4th floor. Include it when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly floor: OPTIONAL<UTF8String>;
    /**
     * @summary `primaryStreet`.
     * @description
     * 
     * Primary street name, for example Broadway. Include it when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly primaryStreet: OPTIONAL<UTF8String>;
    /**
     * @summary `primaryStreetDirection`.
     * @description
     * 
     * Leading street direction (PSD), for example N or North. Include it when
     * known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly primaryStreetDirection: OPTIONAL<UTF8String>;
    /**
     * @summary `roadSection`.
     * @description
     * 
     * Road section, for example 14. Include it when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly roadSection: OPTIONAL<UTF8String>;
    /**
     * @summary `roadBranch`.
     * @description
     * 
     * Road branch, for example Lane 7. Include it when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly roadBranch: OPTIONAL<UTF8String>;
    /**
     * @summary `roadSubBranch`.
     * @description
     * 
     * Road sub-branch, for example Alley 8. Include it when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly roadSubBranch: OPTIONAL<UTF8String>;
    /**
     * @summary `roadPreModifier`.
     * @description
     * 
     * Road pre-modifier, for example Old. Include it when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly roadPreModifier: OPTIONAL<UTF8String>;
    /**
     * @summary `roadPostModifier`.
     * @description
     * 
     * Road post-modifier, for example Extended. Include it when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly roadPostModifier: OPTIONAL<UTF8String>;
    /**
     * @summary `postalCode`.
     * @description
     * 
     * Postal or ZIP code, for example 10027-1234. Include it when known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly postalCode: OPTIONAL<UTF8String>;
    /**
     * @summary `town`.
     * @description
     * 
     * Town of the civic address. Annex B.3 gives no example and no further
     * definition.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly town: OPTIONAL<UTF8String>;
    /**
     * @summary `county`.
     * @description
     * 
     * Administrative subdivision, often an ISO 3166-2 code. Include it when
     * known.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly county: OPTIONAL<UTF8String>;
    /**
     * @summary `country`.
     * @description
     * 
     * Country, as an ISO 3166-1 code. Annex B.3 requires it: it is the minimum
     * that qualifies a civic address when national regulation demands one.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly country: UTF8String;
    /**
     * @summary `language`.
     * @description
     * 
     * Language of this civic address. An ISO 639-1 alpha-2 code from the IANA
     * registry, including later assignments by the ISO 639-1 maintenance
     * agency. Required with the country.
     * 
     * 3GPP TS 33.108, annex B.3 and clause 16.3.
     * @public
     * @readonly
     */
    readonly language: UTF8String;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of annex B.3 does not define. They
     * are retained so a later addition on HI2 is not dropped.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        building: OPTIONAL<UTF8String>,
        room: OPTIONAL<UTF8String>,
        placeType: OPTIONAL<UTF8String>,
        postalCommunityName: OPTIONAL<UTF8String>,
        additionalCode: OPTIONAL<UTF8String>,
        seat: OPTIONAL<UTF8String>,
        primaryRoad: OPTIONAL<UTF8String>,
        primaryRoadDirection: OPTIONAL<UTF8String>,
        trailingStreetSuffix: OPTIONAL<UTF8String>,
        streetSuffix: OPTIONAL<UTF8String>,
        houseNumber: OPTIONAL<UTF8String>,
        houseNumberSuffix: OPTIONAL<UTF8String>,
        landmarkAddress: OPTIONAL<UTF8String>,
        additionalLocation: OPTIONAL<UTF8String>,
        name: OPTIONAL<UTF8String>,
        floor: OPTIONAL<UTF8String>,
        primaryStreet: OPTIONAL<UTF8String>,
        primaryStreetDirection: OPTIONAL<UTF8String>,
        roadSection: OPTIONAL<UTF8String>,
        roadBranch: OPTIONAL<UTF8String>,
        roadSubBranch: OPTIONAL<UTF8String>,
        roadPreModifier: OPTIONAL<UTF8String>,
        roadPostModifier: OPTIONAL<UTF8String>,
        postalCode: OPTIONAL<UTF8String>,
        town: OPTIONAL<UTF8String>,
        county: OPTIONAL<UTF8String>,
        country: UTF8String,
        language: UTF8String,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.building = building;
        this.room = room;
        this.placeType = placeType;
        this.postalCommunityName = postalCommunityName;
        this.additionalCode = additionalCode;
        this.seat = seat;
        this.primaryRoad = primaryRoad;
        this.primaryRoadDirection = primaryRoadDirection;
        this.trailingStreetSuffix = trailingStreetSuffix;
        this.streetSuffix = streetSuffix;
        this.houseNumber = houseNumber;
        this.houseNumberSuffix = houseNumberSuffix;
        this.landmarkAddress = landmarkAddress;
        this.additionalLocation = additionalLocation;
        this.name = name;
        this.floor = floor;
        this.primaryStreet = primaryStreet;
        this.primaryStreetDirection = primaryStreetDirection;
        this.roadSection = roadSection;
        this.roadBranch = roadBranch;
        this.roadSubBranch = roadSubBranch;
        this.roadPreModifier = roadPreModifier;
        this.roadPostModifier = roadPostModifier;
        this.postalCode = postalCode;
        this.town = town;
        this.county = county;
        this.country = country;
        this.language = language;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
    const _unrecognizedExtensionsList: _Element[] = [];
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(28 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.building !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.building, $.BER);
    }
    if (value.room !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.room, $.BER);
    }
    if (value.placeType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.placeType, $.BER);
    }
    if (value.postalCommunityName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeUTF8String, $.BER)(value.postalCommunityName, $.BER);
    }
    if (value.additionalCode !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.additionalCode, $.BER);
    }
    if (value.seat !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.seat, $.BER);
    }
    if (value.primaryRoad !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeUTF8String, $.BER)(value.primaryRoad, $.BER);
    }
    if (value.primaryRoadDirection !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeUTF8String, $.BER)(value.primaryRoadDirection, $.BER);
    }
    if (value.trailingStreetSuffix !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeUTF8String, $.BER)(value.trailingStreetSuffix, $.BER);
    }
    if (value.streetSuffix !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeUTF8String, $.BER)(value.streetSuffix, $.BER);
    }
    if (value.houseNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeUTF8String, $.BER)(value.houseNumber, $.BER);
    }
    if (value.houseNumberSuffix !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeUTF8String, $.BER)(value.houseNumberSuffix, $.BER);
    }
    if (value.landmarkAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeUTF8String, $.BER)(value.landmarkAddress, $.BER);
    }
    if (value.additionalLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 114, () => $._encodeUTF8String, $.BER)(value.additionalLocation, $.BER);
    }
    if (value.name !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeUTF8String, $.BER)(value.name, $.BER);
    }
    if (value.floor !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeUTF8String, $.BER)(value.floor, $.BER);
    }
    if (value.primaryStreet !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeUTF8String, $.BER)(value.primaryStreet, $.BER);
    }
    if (value.primaryStreetDirection !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeUTF8String, $.BER)(value.primaryStreetDirection, $.BER);
    }
    if (value.roadSection !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeUTF8String, $.BER)(value.roadSection, $.BER);
    }
    if (value.roadBranch !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeUTF8String, $.BER)(value.roadBranch, $.BER);
    }
    if (value.roadSubBranch !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeUTF8String, $.BER)(value.roadSubBranch, $.BER);
    }
    if (value.roadPreModifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeUTF8String, $.BER)(value.roadPreModifier, $.BER);
    }
    if (value.roadPostModifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeUTF8String, $.BER)(value.roadPostModifier, $.BER);
    }
    if (value.postalCode !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeUTF8String, $.BER)(value.postalCode, $.BER);
    }
    if (value.town !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeUTF8String, $.BER)(value.town, $.BER);
    }
    if (value.county !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeUTF8String, $.BER)(value.county, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 27, () => $._encodeUTF8String, $.BER)(value.country, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 28, () => $._encodeUTF8String, $.BER)(value.language, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DetailedCivicAddress(value, elGetter);
}


/* eslint-enable */
