/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SupplementaryLocationData
 * @description
 *
 * Extra presentation data attached to a normalized location. Annex B gives
 * network-element details, for example transmitter details, as the kind of
 * information that belongs here. Azimuth is the only parameter defined.
 *
 * ETSI TS 103 462 V1.1.1 (2018-07), annex B.
 * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupplementaryLocationData ::= SEQUENCE
 * {
 *     azimuth        [0] INTEGER (0..359) OPTIONAL,
 *     -- The azimuth is the bearing, relative to true north 
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class SupplementaryLocationData {
    /**
     * @summary `azimuth`.
     * @description
     *
     * Bearing relative to true north, constrained to the integers 0 through
     * 359. V1.1.1 does not name a unit beyond that range and the Annex B
     * comment.
     *
     * ETSI TS 103 462 V1.1.1 (2018-07), annex B.
     * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
     *
     * @public
     * @readonly
     */
    readonly azimuth: OPTIONAL<INTEGER>;
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
        azimuth: OPTIONAL<INTEGER>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.azimuth = azimuth;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SupplementaryLocationData
     * @description
     * 
     * This takes an `object` and converts it to a `SupplementaryLocationData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SupplementaryLocationData`.
     * @returns {SupplementaryLocationData}
     */
    public static _from_object (_o: { [_K in keyof (SupplementaryLocationData)]: (SupplementaryLocationData)[_K] }): SupplementaryLocationData {
        return new SupplementaryLocationData(_o.azimuth, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SupplementaryLocationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SupplementaryLocationData: $.ComponentSpec[] = [
    new $.ComponentSpec("azimuth", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of SupplementaryLocationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SupplementaryLocationData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SupplementaryLocationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SupplementaryLocationData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SupplementaryLocationData: $.ASN1Decoder<SupplementaryLocationData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupplementaryLocationData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SupplementaryLocationData (el: _Element): SupplementaryLocationData {
    if (!_cached_decoder_for_SupplementaryLocationData) { _cached_decoder_for_SupplementaryLocationData = function (el: _Element): SupplementaryLocationData {
    let azimuth: OPTIONAL<INTEGER>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "azimuth": (_el: _Element): void => {
            azimuth = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof azimuth === "bigint" ? azimuth : BigInt(azimuth);
            if (_n < 0n || _n > 359n) {
                throw new ASN1OverflowError("SupplementaryLocationData.azimuth violates INTEGER range");
            }
        }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SupplementaryLocationData,
        _extension_additions_list_spec_for_SupplementaryLocationData,
        _root_component_type_list_2_spec_for_SupplementaryLocationData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SupplementaryLocationData(
        azimuth,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SupplementaryLocationData(el);
}

let _cached_encoder_for_SupplementaryLocationData: $.ASN1Encoder<SupplementaryLocationData> | null = null;

/**
 * @summary Encodes a(n) SupplementaryLocationData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupplementaryLocationData, encoded as an ASN.1 Element.
 */
export
function _encode_SupplementaryLocationData (value: SupplementaryLocationData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SupplementaryLocationData) { _cached_encoder_for_SupplementaryLocationData = function (value: SupplementaryLocationData, elGetter: $.ASN1Encoder<SupplementaryLocationData>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.azimuth !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.azimuth, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SupplementaryLocationData(value, elGetter);
}


/* eslint-enable */
