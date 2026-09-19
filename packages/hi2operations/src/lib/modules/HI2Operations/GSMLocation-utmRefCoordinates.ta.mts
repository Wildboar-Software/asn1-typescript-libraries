/* eslint-disable */
import {
    OPTIONAL,
    PrintableString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MapDatum, _decode_MapDatum, _encode_MapDatum, _enum_for_MapDatum, wGS84 /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../HI2Operations/MapDatum.ta.mjs";
// export { MapDatum, _enum_for_MapDatum, MapDatum_wGS84 /* IMPORTED_LONG_ENUMERATION_ITEM */, wGS84 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MapDatum_wGS72 /* IMPORTED_LONG_ENUMERATION_ITEM */, wGS72 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MapDatum_eD50 /* IMPORTED_LONG_ENUMERATION_ITEM */, eD50 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MapDatum, _encode_MapDatum } from "../HI2Operations/MapDatum.ta.mjs";


/**
 * @summary GSMLocation_utmRefCoordinates
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GSMLocation-utmRefCoordinates ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class GSMLocation_utmRefCoordinates {
    constructor (
        /**
         * @summary `utmref_string`.
         * @public
         * @readonly
         */
        readonly utmref_string: PrintableString,
        /**
         * @summary `mapDatum`.
         * @public
         * @readonly
         */
        readonly mapDatum: OPTIONAL<MapDatum>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a GSMLocation_utmRefCoordinates
     * @description
     * 
     * This takes an `object` and converts it to a `GSMLocation_utmRefCoordinates`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GSMLocation_utmRefCoordinates`.
     * @returns {GSMLocation_utmRefCoordinates}
     */
    public static _from_object (_o: { [_K in keyof (GSMLocation_utmRefCoordinates)]: (GSMLocation_utmRefCoordinates)[_K] }): GSMLocation_utmRefCoordinates {
        return new GSMLocation_utmRefCoordinates(_o.utmref_string, _o.mapDatum, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `mapDatum`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_mapDatum () { return wGS84; }        /**
         * @summary The enum used as the type of the component `mapDatum`
         * @public
         * @static
         */

    public static _enum_for_mapDatum = _enum_for_MapDatum;
}

/**
 * @summary The Leading Root Component Types of GSMLocation_utmRefCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GSMLocation_utmRefCoordinates: $.ComponentSpec[] = [
    new $.ComponentSpec("utmref-string", false, $.hasTag(_TagClass.universal, 19)),
    new $.ComponentSpec("mapDatum", true, $.hasTag(_TagClass.universal, 10))
];

/**
 * @summary The Trailing Root Component Types of GSMLocation_utmRefCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GSMLocation_utmRefCoordinates: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GSMLocation_utmRefCoordinates
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GSMLocation_utmRefCoordinates: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GSMLocation_utmRefCoordinates: $.ASN1Decoder<GSMLocation_utmRefCoordinates> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GSMLocation_utmRefCoordinates
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GSMLocation_utmRefCoordinates (el: _Element): GSMLocation_utmRefCoordinates {
    if (!_cached_decoder_for_GSMLocation_utmRefCoordinates) { _cached_decoder_for_GSMLocation_utmRefCoordinates = function (el: _Element): GSMLocation_utmRefCoordinates {
    let utmref_string!: PrintableString;
    let mapDatum: OPTIONAL<MapDatum> = GSMLocation_utmRefCoordinates._default_value_for_mapDatum;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "utmref-string": (_el: _Element): void => { utmref_string = $._decodePrintableString(_el); },
        "mapDatum": (_el: _Element): void => { mapDatum = _decode_MapDatum(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GSMLocation_utmRefCoordinates,
        _extension_additions_list_spec_for_GSMLocation_utmRefCoordinates,
        _root_component_type_list_2_spec_for_GSMLocation_utmRefCoordinates,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GSMLocation_utmRefCoordinates(
        utmref_string,
        mapDatum,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GSMLocation_utmRefCoordinates(el);
}

let _cached_encoder_for_GSMLocation_utmRefCoordinates: $.ASN1Encoder<GSMLocation_utmRefCoordinates> | null = null;

/**
 * @summary Encodes a(n) GSMLocation_utmRefCoordinates into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GSMLocation_utmRefCoordinates, encoded as an ASN.1 Element.
 */
export
function _encode_GSMLocation_utmRefCoordinates (value: GSMLocation_utmRefCoordinates, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GSMLocation_utmRefCoordinates) { _cached_encoder_for_GSMLocation_utmRefCoordinates = function (value: GSMLocation_utmRefCoordinates, elGetter: $.ASN1Encoder<GSMLocation_utmRefCoordinates>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodePrintableString(value.utmref_string, $.BER),
            /* IF_DEFAULT */ (value.mapDatum === undefined || $.deepEq(value.mapDatum, GSMLocation_utmRefCoordinates._default_value_for_mapDatum) ? undefined : _encode_MapDatum(value.mapDatum, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GSMLocation_utmRefCoordinates(value, elGetter);
}


/* eslint-enable */
