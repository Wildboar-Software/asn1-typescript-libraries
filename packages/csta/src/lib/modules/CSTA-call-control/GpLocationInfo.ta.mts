/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError
} from "@wildboar/asn1";
import { GpLocationInfo_civicLocGml, _decode_GpLocationInfo_civicLocGml, _encode_GpLocationInfo_civicLocGml } from "../CSTA-call-control/GpLocationInfo-civicLocGml.ta.mjs";



/**
 * @summary GpLocationInfo
 * @description
 *
 * One location chunk: GML 3.0 and/or civic address (RFC 4776
 * civic-address types). ECMA-269 §6.8.1.1, §12.2.18;
 * ECMA-285 §9.9.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GpLocationInfo ::= SEQUENCE 
 * {    civicLocGml    SEQUENCE
 *     {    gmlFormat OCTET STRING,    -- must conform xsd schemas of GML 3.0 
 *                                     -- http://www.opengeospatial.org/standards/gml#downloads
 *         civicLoc SEQUENCE
 *         {    country        IA5String (SIZE(0..2)),                   -- must conform the ISO 3166 country code
 *             a1        [ 0] IMPLICIT IA5String    OPTIONAL,              -- NationalSubdivisions
 *             a2        [ 1] IMPLICIT IA5String    OPTIONAL,              -- CountryOrParishOrDistrict
 *             a3        [ 2] IMPLICIT IA5String    OPTIONAL,              -- City
 *             a4        [ 3] IMPLICIT IA5String    OPTIONAL,              -- CityDivision
 *             a5        [ 4] IMPLICIT IA5String    OPTIONAL,              -- NeighborhoodOrBlock
 *             a6        [ 5] IMPLICIT IA5String    OPTIONAL,              -- Street
 *             prd        [ 6] IMPLICIT IA5String    OPTIONAL,              -- LeadingStreetDirection
 *             pod        [ 7] IMPLICIT IA5String    OPTIONAL,              -- TrailingStreetSuffix
 *             sts        [ 8] IMPLICIT IA5String    OPTIONAL,              -- StreetSuffix
 *             hno        [ 9] IMPLICIT IA5String    OPTIONAL,              -- HouseNumber
 *             hns        [10] IMPLICIT IA5String    OPTIONAL,              -- HouseNumberSuffix
 *             lmk        [11] IMPLICIT IA5String    OPTIONAL,              -- LandmarkVanity
 *             loc        [12] IMPLICIT IA5String    OPTIONAL,              -- AdditionalLocationInformation
 *             flr        [13] IMPLICIT IA5String    OPTIONAL,              -- Floor
 *             nam        [14] IMPLICIT IA5String    OPTIONAL,              -- ResidenceOrOfficeName
 *             pc        [15] IMPLICIT IA5String    OPTIONAL } OPTIONAL    -- PostalCode
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class GpLocationInfo {
    constructor (
        /**
         * @summary `civicLocGml`.
         * @description
         *
         * GML 3.0 payload and optional civic-address fields.
         * ECMA-285 §9.9.
         *
         * @public
         * @readonly
         */
        readonly civicLocGml: GpLocationInfo_civicLocGml
    ) {}

    /**
     * @summary Restructures an object into a GpLocationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `GpLocationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GpLocationInfo`.
     * @returns {GpLocationInfo}
     */
    public static _from_object (_o: { [_K in keyof (GpLocationInfo)]: (GpLocationInfo)[_K] }): GpLocationInfo {
        return new GpLocationInfo(_o.civicLocGml);
    }


}

/**
 * @summary The Leading Root Component Types of GpLocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GpLocationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("civicLocGml", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of GpLocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GpLocationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GpLocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GpLocationInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GpLocationInfo: $.ASN1Decoder<GpLocationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GpLocationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GpLocationInfo (el: _Element): GpLocationInfo {
    if (!_cached_decoder_for_GpLocationInfo) { _cached_decoder_for_GpLocationInfo = function (el: _Element): GpLocationInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("GpLocationInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "civicLocGml";
    let civicLocGml!: GpLocationInfo_civicLocGml;
    civicLocGml = _decode_GpLocationInfo_civicLocGml(sequence[0]);
    return new GpLocationInfo(
        civicLocGml,

    );
}; }
    return _cached_decoder_for_GpLocationInfo(el);
}

let _cached_encoder_for_GpLocationInfo: $.ASN1Encoder<GpLocationInfo> | null = null;

/**
 * @summary Encodes a(n) GpLocationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GpLocationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_GpLocationInfo (value: GpLocationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GpLocationInfo) { _cached_encoder_for_GpLocationInfo = function (value: GpLocationInfo, elGetter: $.ASN1Encoder<GpLocationInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GpLocationInfo_civicLocGml(value.civicLocGml, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GpLocationInfo(value, elGetter);
}


/* eslint-enable */
