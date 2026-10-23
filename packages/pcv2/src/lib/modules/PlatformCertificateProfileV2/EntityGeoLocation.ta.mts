/* eslint-disable */
import {
    ASN1SizeError,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { strmax } from "../PlatformCertificateProfileV2/strmax.va.mjs";
import { ISO3166CountryCode, _decode_ISO3166CountryCode, _encode_ISO3166CountryCode } from "../PlatformCertificateProfileV2/ISO3166CountryCode.ta.mjs";
import { ISO3166AdminSubdivisionCode, _decode_ISO3166AdminSubdivisionCode, _encode_ISO3166AdminSubdivisionCode } from "../PlatformCertificateProfileV2/ISO3166AdminSubdivisionCode.ta.mjs";
import { OpenLocationCode, _decode_OpenLocationCode, _encode_OpenLocationCode } from "../PlatformCertificateProfileV2/OpenLocationCode.ta.mjs";


/**
 * @summary EntityGeoLocation
 * @description
 *
 * Geographic location of a supply-chain entity. `countryCode` is required; the
 * other components are optional. The profile assigns `postalCode` context tag 5
 * and does not define a component with tag 4. Carried by
 * `entityGeoLocationTrait`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.22.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntityGeoLocation ::= SEQUENCE {
 *     countryCode         ISO3166CountryCode,
 *     stateOrProvince     [0] IMPLICIT ISO3166AdminSubdivisionCode OPTIONAL,
 *     localityName        [1] IMPLICIT UTF8String (SIZE (1..strmax)) OPTIONAL,
 *     streetAddress       [2] IMPLICIT UTF8String (SIZE (1..strmax)) OPTIONAL,
 *     locationCoords      [3] IMPLICIT OpenLocationCode OPTIONAL,
 *     postalCode          [5] IMPLICIT UTF8String (SIZE (1..strmax)) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EntityGeoLocation {
    /**
     * @summary `countryCode`.
     * @description
     *
     * ISO 3166 country code, two or three characters.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.22.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly countryCode: ISO3166CountryCode;
    /**
     * @summary `stateOrProvince`.
     * @description
     *
     * ISO 3166 administrative subdivision, three to six characters.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.22.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly stateOrProvince: OPTIONAL<ISO3166AdminSubdivisionCode>;
    /**
     * @summary `localityName`.
     * @description
     *
     * Locality, length 1..`strmax`.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.22.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly localityName: OPTIONAL<UTF8String>;
    /**
     * @summary `streetAddress`.
     * @description
     *
     * Street address, length 1..`strmax`.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.22.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly streetAddress: OPTIONAL<UTF8String>;
    /**
     * @summary `locationCoords`.
     * @description
     *
     * Open Location Code for the coordinates.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.22.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly locationCoords: OPTIONAL<OpenLocationCode>;
    /**
     * @summary `postalCode`.
     * @description
     *
     * Postal code, length 1..`strmax`.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.22.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly postalCode: OPTIONAL<UTF8String>;

    constructor (
        countryCode: ISO3166CountryCode,
        stateOrProvince: OPTIONAL<ISO3166AdminSubdivisionCode>,
        localityName: OPTIONAL<UTF8String>,
        streetAddress: OPTIONAL<UTF8String>,
        locationCoords: OPTIONAL<OpenLocationCode>,
        postalCode: OPTIONAL<UTF8String>
    ) {
        this.countryCode = countryCode;
        this.stateOrProvince = stateOrProvince;
        this.localityName = localityName;
        this.streetAddress = streetAddress;
        this.locationCoords = locationCoords;
        this.postalCode = postalCode;
        if (localityName !== undefined && (localityName.length < 1 || localityName.length > strmax)) {
            throw new ASN1SizeError("EntityGeoLocation.localityName violates SIZE (1..strmax)");
        }
        if (streetAddress !== undefined && (streetAddress.length < 1 || streetAddress.length > strmax)) {
            throw new ASN1SizeError("EntityGeoLocation.streetAddress violates SIZE (1..strmax)");
        }
        if (postalCode !== undefined && (postalCode.length < 1 || postalCode.length > strmax)) {
            throw new ASN1SizeError("EntityGeoLocation.postalCode violates SIZE (1..strmax)");
        }
    }

    /**
     * @summary Restructures an object into a EntityGeoLocation
     * @description
     * 
     * This takes an `object` and converts it to a `EntityGeoLocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntityGeoLocation`.
     * @returns {EntityGeoLocation}
     */
    public static _from_object (_o: { [_K in keyof (EntityGeoLocation)]: (EntityGeoLocation)[_K] }): EntityGeoLocation {
        return new EntityGeoLocation(_o.countryCode, _o.stateOrProvince, _o.localityName, _o.streetAddress, _o.locationCoords, _o.postalCode);
    }


}

/**
 * @summary The Leading Root Component Types of EntityGeoLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EntityGeoLocation: $.ComponentSpec[] = [
    new $.ComponentSpec("countryCode", false, $.hasTag(_TagClass.universal, 19)),
    new $.ComponentSpec("stateOrProvince", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("localityName", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("streetAddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("locationCoords", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("postalCode", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of EntityGeoLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EntityGeoLocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EntityGeoLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EntityGeoLocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EntityGeoLocation: $.ASN1Decoder<EntityGeoLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntityGeoLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntityGeoLocation (el: _Element): EntityGeoLocation {
    if (!_cached_decoder_for_EntityGeoLocation) { _cached_decoder_for_EntityGeoLocation = function (el: _Element): EntityGeoLocation {
    let countryCode!: ISO3166CountryCode;
    let stateOrProvince: OPTIONAL<ISO3166AdminSubdivisionCode>;
    let localityName: OPTIONAL<UTF8String>;
    let streetAddress: OPTIONAL<UTF8String>;
    let locationCoords: OPTIONAL<OpenLocationCode>;
    let postalCode: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "countryCode": (_el: _Element): void => { countryCode = _decode_ISO3166CountryCode(_el); },
        "stateOrProvince": (_el: _Element): void => { stateOrProvince = $._decode_implicit<ISO3166AdminSubdivisionCode>(() => _decode_ISO3166AdminSubdivisionCode)(_el); },
        "localityName": (_el: _Element): void => { localityName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "streetAddress": (_el: _Element): void => { streetAddress = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "locationCoords": (_el: _Element): void => { locationCoords = $._decode_implicit<OpenLocationCode>(() => _decode_OpenLocationCode)(_el); },
        "postalCode": (_el: _Element): void => { postalCode = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EntityGeoLocation,
        _extension_additions_list_spec_for_EntityGeoLocation,
        _root_component_type_list_2_spec_for_EntityGeoLocation,
        undefined,
    );
    return new EntityGeoLocation(
        countryCode,
        stateOrProvince,
        localityName,
        streetAddress,
        locationCoords,
        postalCode
    );
}; }
    return _cached_decoder_for_EntityGeoLocation(el);
}

let _cached_encoder_for_EntityGeoLocation: $.ASN1Encoder<EntityGeoLocation> | null = null;

/**
 * @summary Encodes a(n) EntityGeoLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntityGeoLocation, encoded as an ASN.1 Element.
 */
export
function _encode_EntityGeoLocation (value: EntityGeoLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntityGeoLocation) { _cached_encoder_for_EntityGeoLocation = function (value: EntityGeoLocation): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_ISO3166CountryCode(value.countryCode, $.BER));
    if (value.stateOrProvince !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_ISO3166AdminSubdivisionCode, $.BER)(value.stateOrProvince, $.BER));
    }
    if (value.localityName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.localityName, $.BER));
    }
    if (value.streetAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.streetAddress, $.BER));
    }
    if (value.locationCoords !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_OpenLocationCode, $.BER)(value.locationCoords, $.BER));
    }
    if (value.postalCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.postalCode, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EntityGeoLocation(value, elGetter);
}


/* eslint-enable */
