/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../TS33128Payloads/GeographicalCoordinates.ta.mjs";
// export { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../TS33128Payloads/GeographicalCoordinates.ta.mjs";


/**
 * @summary CellSiteInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellSiteInformation ::= SEQUENCE
 * {
 *     geographicalCoordinates     [1] GeographicalCoordinates,
 *     azimuth                     [2] INTEGER (0..359) OPTIONAL,
 *     operatorSpecificInformation [3] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CellSiteInformation {
    /**
     * @summary `geographicalCoordinates`.
     * @description
     *
     * The coordinates for the cell site being reported.
     *
     * 3GPP TS 33.128, clause 7.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly geographicalCoordinates: GeographicalCoordinates;
    /**
     * @summary `azimuth`.
     * @description
     *
     * Contains the centre azimuth for the sector being reported. Shall be
     * present if known.
     *
     * 3GPP TS 33.128, clause 7.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly azimuth: OPTIONAL<INTEGER>;
    /**
     * @summary `operatorSpecificInformation`.
     * @description
     *
     * Information specific to the operator reporting the cell site information.
     *
     * 3GPP TS 33.128, clause 7.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly operatorSpecificInformation: OPTIONAL<UTF8String>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        geographicalCoordinates: GeographicalCoordinates,
        azimuth?: OPTIONAL<INTEGER>,
        operatorSpecificInformation?: OPTIONAL<UTF8String>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.geographicalCoordinates = geographicalCoordinates;
        this.azimuth = azimuth;
        this.operatorSpecificInformation = operatorSpecificInformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CellSiteInformation
     * @description
     * 
     * This takes an `object` and converts it to a `CellSiteInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CellSiteInformation`.
     * @returns {CellSiteInformation}
     */
    public static _from_object (_o: { [_K in keyof (CellSiteInformation)]: (CellSiteInformation)[_K] }): CellSiteInformation {
        return new CellSiteInformation(_o.geographicalCoordinates, _o.azimuth, _o.operatorSpecificInformation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CellSiteInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CellSiteInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("geographicalCoordinates", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("azimuth", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("operatorSpecificInformation", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of CellSiteInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CellSiteInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CellSiteInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CellSiteInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CellSiteInformation: $.ASN1Decoder<CellSiteInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CellSiteInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CellSiteInformation (el: _Element): CellSiteInformation {
    if (!_cached_decoder_for_CellSiteInformation) { _cached_decoder_for_CellSiteInformation = function (el: _Element): CellSiteInformation {
    let geographicalCoordinates!: GeographicalCoordinates;
    let azimuth: OPTIONAL<INTEGER>;
    let operatorSpecificInformation: OPTIONAL<UTF8String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "geographicalCoordinates": (_el: _Element): void => { geographicalCoordinates = $._decode_implicit<GeographicalCoordinates>(() => _decode_GeographicalCoordinates)(_el); },
        "azimuth": (_el: _Element): void => {
            azimuth = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof azimuth === "bigint" ? azimuth : BigInt(azimuth);
            if (_n < 0n || _n > 359n) {
                throw new ASN1OverflowError("CellSiteInformation.azimuth violates INTEGER range");
            }
        },
        "operatorSpecificInformation": (_el: _Element): void => { operatorSpecificInformation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CellSiteInformation,
        _extension_additions_list_spec_for_CellSiteInformation,
        _root_component_type_list_2_spec_for_CellSiteInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CellSiteInformation(
        geographicalCoordinates,
        azimuth,
        operatorSpecificInformation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CellSiteInformation(el);
}

let _cached_encoder_for_CellSiteInformation: $.ASN1Encoder<CellSiteInformation> | null = null;

/**
 * @summary Encodes a(n) CellSiteInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CellSiteInformation, encoded as an ASN.1 Element.
 */
export
function _encode_CellSiteInformation (value: CellSiteInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CellSiteInformation) { _cached_encoder_for_CellSiteInformation = function (value: CellSiteInformation, elGetter: $.ASN1Encoder<CellSiteInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GeographicalCoordinates, $.BER)(value.geographicalCoordinates, $.BER);
    if (value.azimuth !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.azimuth, $.BER);
    }
    if (value.operatorSpecificInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.operatorSpecificInformation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CellSiteInformation(value, elGetter);
}


/* eslint-enable */
