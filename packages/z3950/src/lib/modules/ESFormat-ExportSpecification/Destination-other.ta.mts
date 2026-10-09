/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary Destination_other
 * @description
 * 
 * A destination that is not one of the enumerated vehicles. The standard
 * does not define this form beyond an optional vehicle and a destination.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.6.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Destination-other ::= SEQUENCE {
 *     vehicle [1] IMPLICIT InternationalString OPTIONAL,
 *     destination [2] IMPLICIT InternationalString
 * }
 * ```
 * 
 * @class
 */
export
class Destination_other {
    /**
     * @summary `vehicle`.
     * @description
     * 
     * Optional name of the delivery vehicle. The standard does not define the
     * vocabulary.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.6.
     * 
     * @public
     * @readonly
     */
    readonly vehicle: OPTIONAL<InternationalString>;
    /**
     * @summary `destination`.
     * @description
     * 
     * Destination address for that vehicle. The standard does not define the
     * format.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.6.
     * 
     * @public
     * @readonly
     */
    readonly destination: InternationalString;

    constructor (
        vehicle: OPTIONAL<InternationalString>,
        destination: InternationalString
    ) {
        this.vehicle = vehicle;
        this.destination = destination;
    }

    /**
     * @summary Restructures an object into a Destination_other
     * @description
     * 
     * This takes an `object` and converts it to a `Destination_other`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Destination_other`.
     * @returns {Destination_other}
     */
    public static _from_object (_o: { [_K in keyof (Destination_other)]: (Destination_other)[_K] }): Destination_other {
        return new Destination_other(_o.vehicle, _o.destination);
    }


}

/**
 * @summary The Leading Root Component Types of Destination_other
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Destination_other: $.ComponentSpec[] = [
    new $.ComponentSpec("vehicle", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("destination", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Destination_other
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Destination_other: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Destination_other
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Destination_other: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Destination_other: $.ASN1Decoder<Destination_other> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Destination_other
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Destination_other (el: _Element): Destination_other {
    if (!_cached_decoder_for_Destination_other) { _cached_decoder_for_Destination_other = function (el: _Element): Destination_other {
    let vehicle: OPTIONAL<InternationalString>;
    let destination!: InternationalString;
    const callbacks: $.DecodingMap = {
        "vehicle": (_el: _Element): void => { vehicle = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "destination": (_el: _Element): void => { destination = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Destination_other,
        _extension_additions_list_spec_for_Destination_other,
        _root_component_type_list_2_spec_for_Destination_other,
        undefined,
    );
    return new Destination_other(
        vehicle,
        destination
    );
}; }
    return _cached_decoder_for_Destination_other(el);
}

let _cached_encoder_for_Destination_other: $.ASN1Encoder<Destination_other> | null = null;

/**
 * @summary Encodes a(n) Destination_other into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Destination_other, encoded as an ASN.1 Element.
 */
export
function _encode_Destination_other (value: Destination_other, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Destination_other) { _cached_encoder_for_Destination_other = function (value: Destination_other, elGetter: $.ASN1Encoder<Destination_other>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.vehicle !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.vehicle, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.destination, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Destination_other(value, elGetter);
}


/* eslint-enable */
