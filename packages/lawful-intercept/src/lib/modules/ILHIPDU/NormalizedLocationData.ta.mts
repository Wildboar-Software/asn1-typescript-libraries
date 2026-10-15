/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GeocodedLocationData, _decode_GeocodedLocationData, _encode_GeocodedLocationData } from "../ILHIPDU/GeocodedLocationData.ta.mjs";
// export { GeocodedLocationData, _decode_GeocodedLocationData, _encode_GeocodedLocationData } from "../ILHIPDU/GeocodedLocationData.ta.mjs";
import { SupplementaryLocationData, _decode_SupplementaryLocationData, _encode_SupplementaryLocationData } from "../ILHIPDU/SupplementaryLocationData.ta.mjs";
// export { SupplementaryLocationData, _decode_SupplementaryLocationData, _encode_SupplementaryLocationData } from "../ILHIPDU/SupplementaryLocationData.ta.mjs";


/**
 * @summary NormalizedLocationData
 * @description
 *
 * Location after the mapping function has produced WGS84 coordinates.
 * Clause 7.3.3 requires those coordinates to keep the resolution of the
 * original.
 *
 * ETSI TS 103 462 V1.1.1 (2018-07), clause 7.3.3, annex B.
 * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NormalizedLocationData ::= SEQUENCE
 * {
 *     geocodedLocationData        [0] GeocodedLocationData,
 *     supplementaryLocationData    [1] SupplementaryLocationData OPTIONAL,
 *     -- any additional information for an improved presentation of location
 *     -- (e.g. details of the network elements like transmitter details) should 
 *     -- be inserted into this parameter
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class NormalizedLocationData {
    /**
     * @summary `geocodedLocationData`.
     * @description
     *
     * WGS84 coordinates from ETSI TS 103 280, in either the decimal or the
     * angular form. V1.1.1 does not say which form to choose. The resolution
     * of the original coordinates is kept.
     *
     * ETSI TS 103 462 V1.1.1 (2018-07), clause 7.3.3.
     * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
     *
     * @public
     * @readonly
     */
    readonly geocodedLocationData: GeocodedLocationData;
    /**
     * @summary `supplementaryLocationData`.
     * @description
     *
     * Further information that improves how the location is presented, such
     * as network-element details (the Annex B example is transmitter
     * details). Clause 7.3.3 does not define this parameter.
     *
     * ETSI TS 103 462 V1.1.1 (2018-07), annex B.
     * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
     *
     * @public
     * @readonly
     */
    readonly supplementaryLocationData: OPTIONAL<SupplementaryLocationData>;
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
        geocodedLocationData: GeocodedLocationData,
        supplementaryLocationData: OPTIONAL<SupplementaryLocationData>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.geocodedLocationData = geocodedLocationData;
        this.supplementaryLocationData = supplementaryLocationData;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NormalizedLocationData
     * @description
     * 
     * This takes an `object` and converts it to a `NormalizedLocationData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NormalizedLocationData`.
     * @returns {NormalizedLocationData}
     */
    public static _from_object (_o: { [_K in keyof (NormalizedLocationData)]: (NormalizedLocationData)[_K] }): NormalizedLocationData {
        return new NormalizedLocationData(_o.geocodedLocationData, _o.supplementaryLocationData, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NormalizedLocationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NormalizedLocationData: $.ComponentSpec[] = [
    new $.ComponentSpec("geocodedLocationData", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("supplementaryLocationData", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of NormalizedLocationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NormalizedLocationData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NormalizedLocationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NormalizedLocationData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NormalizedLocationData: $.ASN1Decoder<NormalizedLocationData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NormalizedLocationData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NormalizedLocationData (el: _Element): NormalizedLocationData {
    if (!_cached_decoder_for_NormalizedLocationData) { _cached_decoder_for_NormalizedLocationData = function (el: _Element): NormalizedLocationData {
    let geocodedLocationData!: GeocodedLocationData;
    let supplementaryLocationData: OPTIONAL<SupplementaryLocationData>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "geocodedLocationData": (_el: _Element): void => { geocodedLocationData = $._decode_explicit<GeocodedLocationData>(() => _decode_GeocodedLocationData)(_el); },
        "supplementaryLocationData": (_el: _Element): void => { supplementaryLocationData = $._decode_implicit<SupplementaryLocationData>(() => _decode_SupplementaryLocationData)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NormalizedLocationData,
        _extension_additions_list_spec_for_NormalizedLocationData,
        _root_component_type_list_2_spec_for_NormalizedLocationData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NormalizedLocationData(
        geocodedLocationData,
        supplementaryLocationData,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NormalizedLocationData(el);
}

let _cached_encoder_for_NormalizedLocationData: $.ASN1Encoder<NormalizedLocationData> | null = null;

/**
 * @summary Encodes a(n) NormalizedLocationData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NormalizedLocationData, encoded as an ASN.1 Element.
 */
export
function _encode_NormalizedLocationData (value: NormalizedLocationData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NormalizedLocationData) { _cached_encoder_for_NormalizedLocationData = function (value: NormalizedLocationData, elGetter: $.ASN1Encoder<NormalizedLocationData>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_GeocodedLocationData, $.BER)(value.geocodedLocationData, $.BER);
    if (value.supplementaryLocationData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_SupplementaryLocationData, $.BER)(value.supplementaryLocationData, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NormalizedLocationData(value, elGetter);
}


/* eslint-enable */
