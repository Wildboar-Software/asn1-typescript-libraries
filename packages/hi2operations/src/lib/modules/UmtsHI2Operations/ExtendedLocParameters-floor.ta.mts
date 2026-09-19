/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedLocParameters_floor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedLocParameters-floor ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ExtendedLocParameters_floor {
    constructor (
        /**
         * @summary `floor_number`.
         * @public
         * @readonly
         */
        readonly floor_number: PrintableString,
        /**
         * @summary `floor_number_uncertainty`.
         * @public
         * @readonly
         */
        readonly floor_number_uncertainty: OPTIONAL<PrintableString>
    ) {}

    /**
     * @summary Restructures an object into a ExtendedLocParameters_floor
     * @description
     * 
     * This takes an `object` and converts it to a `ExtendedLocParameters_floor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtendedLocParameters_floor`.
     * @returns {ExtendedLocParameters_floor}
     */
    public static _from_object (_o: { [_K in keyof (ExtendedLocParameters_floor)]: (ExtendedLocParameters_floor)[_K] }): ExtendedLocParameters_floor {
        return new ExtendedLocParameters_floor(_o.floor_number, _o.floor_number_uncertainty);
    }


}

/**
 * @summary The Leading Root Component Types of ExtendedLocParameters_floor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExtendedLocParameters_floor: $.ComponentSpec[] = [
    new $.ComponentSpec("floor-number", false, $.hasTag(_TagClass.universal, 19)),
    new $.ComponentSpec("floor-number-uncertainty", true, $.hasTag(_TagClass.universal, 19))
];

/**
 * @summary The Trailing Root Component Types of ExtendedLocParameters_floor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExtendedLocParameters_floor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExtendedLocParameters_floor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExtendedLocParameters_floor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExtendedLocParameters_floor: $.ASN1Decoder<ExtendedLocParameters_floor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedLocParameters_floor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedLocParameters_floor (el: _Element): ExtendedLocParameters_floor {
    if (!_cached_decoder_for_ExtendedLocParameters_floor) { _cached_decoder_for_ExtendedLocParameters_floor = function (el: _Element): ExtendedLocParameters_floor {
    let floor_number!: PrintableString;
    let floor_number_uncertainty: OPTIONAL<PrintableString>;
    const callbacks: $.DecodingMap = {
        "floor-number": (_el: _Element): void => { floor_number = $._decodePrintableString(_el); },
        "floor-number-uncertainty": (_el: _Element): void => { floor_number_uncertainty = $._decodePrintableString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExtendedLocParameters_floor,
        _extension_additions_list_spec_for_ExtendedLocParameters_floor,
        _root_component_type_list_2_spec_for_ExtendedLocParameters_floor,
        undefined,
    );
    return new ExtendedLocParameters_floor(
        floor_number,
        floor_number_uncertainty
    );
}; }
    return _cached_decoder_for_ExtendedLocParameters_floor(el);
}

let _cached_encoder_for_ExtendedLocParameters_floor: $.ASN1Encoder<ExtendedLocParameters_floor> | null = null;

/**
 * @summary Encodes a(n) ExtendedLocParameters_floor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedLocParameters_floor, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedLocParameters_floor (value: ExtendedLocParameters_floor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedLocParameters_floor) { _cached_encoder_for_ExtendedLocParameters_floor = function (value: ExtendedLocParameters_floor, elGetter: $.ASN1Encoder<ExtendedLocParameters_floor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodePrintableString(value.floor_number, $.BER),
            /* IF_ABSENT  */ ((value.floor_number_uncertainty === undefined) ? undefined : $._encodePrintableString(value.floor_number_uncertainty, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ExtendedLocParameters_floor(value, elGetter);
}


/* eslint-enable */
