/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OPTIONAL,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedLocParameters_altitude
 * @description
 * 
 * Altitude of a LALS fix, mapped from the OMA MLP pos element. TS 33.108 cites
 * MLP clause 5.3.5 for the altitude and clause 5.3.7 for its uncertainty, and
 * does not restate that syntax.
 * 
 * 3GPP TS 33.108, annex B.3. MLP is reference [88] of that specification.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedLocParameters-altitude ::= SEQUENCE     {
 *     alt PrintableString, -- clause 5.3.5
 *     alt-uncertainty PrintableString OPTIONAL -- clause 5.3.7
 * }
 * ```
 * 
 * @class
 */
export
class ExtendedLocParameters_altitude {
    /**
     * @summary `alt`.
     * @description
     * 
     * Altitude of the LALS fix, from OMA MLP clause 5.3.5. TS 33.108 does not
     * restate that syntax.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly alt: PrintableString;
    /**
     * @summary `alt_uncertainty`.
     * @description
     * 
     * Uncertainty of that altitude, from OMA MLP clause 5.3.7. Include it when
     * the MLP response has it. TS 33.108 does not restate that syntax.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly alt_uncertainty: OPTIONAL<PrintableString>;

    constructor (
        alt: PrintableString,
        alt_uncertainty?: OPTIONAL<PrintableString>
    ) {
        this.alt = alt;
        this.alt_uncertainty = alt_uncertainty;
    }

    /**
     * @summary Restructures an object into a ExtendedLocParameters_altitude
     * @description
     * 
     * This takes an `object` and converts it to a `ExtendedLocParameters_altitude`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtendedLocParameters_altitude`.
     * @returns {ExtendedLocParameters_altitude}
     */
    public static _from_object (_o: { [_K in keyof (ExtendedLocParameters_altitude)]: (ExtendedLocParameters_altitude)[_K] }): ExtendedLocParameters_altitude {
        return new ExtendedLocParameters_altitude(_o.alt, _o.alt_uncertainty);
    }


}

/**
 * @summary The Leading Root Component Types of ExtendedLocParameters_altitude
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExtendedLocParameters_altitude: $.ComponentSpec[] = [
    new $.ComponentSpec("alt", false, $.hasTag(_TagClass.universal, 19)),
    new $.ComponentSpec("alt-uncertainty", true, $.hasTag(_TagClass.universal, 19))
];

/**
 * @summary The Trailing Root Component Types of ExtendedLocParameters_altitude
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExtendedLocParameters_altitude: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExtendedLocParameters_altitude
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExtendedLocParameters_altitude: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExtendedLocParameters_altitude: $.ASN1Decoder<ExtendedLocParameters_altitude> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedLocParameters_altitude
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedLocParameters_altitude (el: _Element): ExtendedLocParameters_altitude {
    if (!_cached_decoder_for_ExtendedLocParameters_altitude) { _cached_decoder_for_ExtendedLocParameters_altitude = function (el: _Element): ExtendedLocParameters_altitude {
    let alt!: PrintableString;
    let alt_uncertainty: OPTIONAL<PrintableString>;
    const callbacks: $.DecodingMap = {
        "alt": (_el: _Element): void => { alt = $._decodePrintableString(_el); },
        "alt-uncertainty": (_el: _Element): void => { alt_uncertainty = $._decodePrintableString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExtendedLocParameters_altitude,
        _extension_additions_list_spec_for_ExtendedLocParameters_altitude,
        _root_component_type_list_2_spec_for_ExtendedLocParameters_altitude,
        undefined,
    );
    return new ExtendedLocParameters_altitude(
        alt,
        alt_uncertainty
    );
}; }
    return _cached_decoder_for_ExtendedLocParameters_altitude(el);
}

let _cached_encoder_for_ExtendedLocParameters_altitude: $.ASN1Encoder<ExtendedLocParameters_altitude> | null = null;

/**
 * @summary Encodes a(n) ExtendedLocParameters_altitude into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedLocParameters_altitude, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedLocParameters_altitude (value: ExtendedLocParameters_altitude, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedLocParameters_altitude) { _cached_encoder_for_ExtendedLocParameters_altitude = function (value: ExtendedLocParameters_altitude, elGetter: $.ASN1Encoder<ExtendedLocParameters_altitude>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encodePrintableString(value.alt, $.BER);
    if (value.alt_uncertainty !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encodePrintableString(value.alt_uncertainty, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ExtendedLocParameters_altitude(value, elGetter);
}


/* eslint-enable */
