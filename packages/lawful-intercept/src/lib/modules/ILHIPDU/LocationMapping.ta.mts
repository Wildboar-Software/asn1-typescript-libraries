/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { Location, _decode_Location, _encode_Location } from "../LI-PS-PDU/Location.ta.mjs";
import { NormalizedLocationData, _decode_NormalizedLocationData, _encode_NormalizedLocationData } from "../ILHIPDU/NormalizedLocationData.ta.mjs";
import * as LI_PS_PDU from "../LI-PS-PDU/index.mjs";
// export { NormalizedLocationData, _decode_NormalizedLocationData, _encode_NormalizedLocationData } from "../ILHIPDU/NormalizedLocationData.ta.mjs";


/**
 * @summary LocationMapping
 * @description
 *
 * One received location paired with the normalized location the mapping
 * function produced from it. Used for location already coded as geographical
 * coordinates. The mapped coordinates keep the resolution of the original.
 * Postal-address location is for further study.
 *
 * ETSI TS 103 462 V1.1.1 (2018-07), clause 7.3.3, annex B.
 * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationMapping ::= SEQUENCE
 * {
 *     originalLocation        [0] LI-PS-PDU.Location,
 *     normalizedLocation        [1] NormalizedLocationData,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class LocationMapping {
    /**
     * @summary `originalLocation`.
     * @description
     *
     * Location as received (`LI-PS-PDU.Location`), delivered with the mapped
     * result.
     *
     * ETSI TS 103 462 V1.1.1 (2018-07), clause 7.3.3.
     * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
     *
     * @public
     * @readonly
     */
    readonly originalLocation: LI_PS_PDU.Location;
    /**
     * @summary `normalizedLocation`.
     * @description
     *
     * WGS84 coordinates produced from `originalLocation`, at the same
     * resolution.
     *
     * ETSI TS 103 462 V1.1.1 (2018-07), clause 7.3.3.
     * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
     *
     * @public
     * @readonly
     */
    readonly normalizedLocation: NormalizedLocationData;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions this decoder did not recognize. V1.1.1 marks the
     * type extensible and does not say how a receiver treats unrecognized
     * additions.
     *
     * ETSI TS 103 462 V1.1.1 (2018-07), annex B.
     * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        originalLocation: LI_PS_PDU.Location,
        normalizedLocation: NormalizedLocationData,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.originalLocation = originalLocation;
        this.normalizedLocation = normalizedLocation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a LocationMapping
     * @description
     * 
     * This takes an `object` and converts it to a `LocationMapping`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationMapping`.
     * @returns {LocationMapping}
     */
    public static _from_object (_o: { [_K in keyof (LocationMapping)]: (LocationMapping)[_K] }): LocationMapping {
        return new LocationMapping(_o.originalLocation, _o.normalizedLocation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of LocationMapping
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationMapping: $.ComponentSpec[] = [
    new $.ComponentSpec("originalLocation", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("normalizedLocation", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of LocationMapping
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationMapping: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationMapping
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationMapping: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocationMapping: $.ASN1Decoder<LocationMapping> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationMapping
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationMapping (el: _Element): LocationMapping {
    if (!_cached_decoder_for_LocationMapping) { _cached_decoder_for_LocationMapping = function (el: _Element): LocationMapping {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("LocationMapping contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "originalLocation";
    sequence[1].name = "normalizedLocation";
    let originalLocation!: LI_PS_PDU.Location;
    let normalizedLocation!: NormalizedLocationData;
    originalLocation = $._decode_implicit<LI_PS_PDU.Location>(() => LI_PS_PDU._decode_Location)(sequence[0]);
    normalizedLocation = $._decode_implicit<NormalizedLocationData>(() => _decode_NormalizedLocationData)(sequence[1]);
    return new LocationMapping(
        originalLocation,
        normalizedLocation,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_LocationMapping(el);
}

let _cached_encoder_for_LocationMapping: $.ASN1Encoder<LocationMapping> | null = null;

/**
 * @summary Encodes a(n) LocationMapping into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationMapping, encoded as an ASN.1 Element.
 */
export
function _encode_LocationMapping (value: LocationMapping, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationMapping) { _cached_encoder_for_LocationMapping = function (value: LocationMapping, elGetter: $.ASN1Encoder<LocationMapping>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => LI_PS_PDU._encode_Location, $.BER)(value.originalLocation, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NormalizedLocationData, $.BER)(value.normalizedLocation, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LocationMapping(value, elGetter);
}


/* eslint-enable */
