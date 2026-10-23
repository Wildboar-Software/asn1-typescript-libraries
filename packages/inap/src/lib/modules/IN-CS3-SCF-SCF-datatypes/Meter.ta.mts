/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Meter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Meter ::= SEQUENCE {
 *   meternum    [1]  INTEGER(0..nbrOfMeters) OPTIONAL,
 *   metervalue  [2]  INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class Meter {
    /**
     * @summary `meternum`.
     * @public
     * @readonly
     */
    readonly meternum: OPTIONAL<INTEGER>;
    /**
     * @summary `metervalue`.
     * @public
     * @readonly
     */
    readonly metervalue: INTEGER;

    constructor (
        meternum: OPTIONAL<INTEGER>,
        metervalue: INTEGER
    ) {
        this.meternum = meternum;
        this.metervalue = metervalue;
    }

    /**
     * @summary Restructures an object into a Meter
     * @description
     * 
     * This takes an `object` and converts it to a `Meter`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Meter`.
     * @returns {Meter}
     */
    public static _from_object (_o: { [_K in keyof (Meter)]: (Meter)[_K] }): Meter {
        return new Meter(_o.meternum, _o.metervalue);
    }


}

/**
 * @summary The Leading Root Component Types of Meter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Meter: $.ComponentSpec[] = [
    new $.ComponentSpec("meternum", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("metervalue", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Meter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Meter: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Meter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Meter: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Meter: $.ASN1Decoder<Meter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Meter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Meter (el: _Element): Meter {
    if (!_cached_decoder_for_Meter) { _cached_decoder_for_Meter = function (el: _Element): Meter {
    let meternum: OPTIONAL<INTEGER>;
    let metervalue!: INTEGER;
    const callbacks: $.DecodingMap = {
        "meternum": (_el: _Element): void => { meternum = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "metervalue": (_el: _Element): void => { metervalue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Meter,
        _extension_additions_list_spec_for_Meter,
        _root_component_type_list_2_spec_for_Meter,
        undefined,
    );
    return new Meter(
        meternum,
        metervalue
    );
}; }
    return _cached_decoder_for_Meter(el);
}

let _cached_encoder_for_Meter: $.ASN1Encoder<Meter> | null = null;

/**
 * @summary Encodes a(n) Meter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Meter, encoded as an ASN.1 Element.
 */
export
function _encode_Meter (value: Meter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Meter) { _cached_encoder_for_Meter = function (value: Meter, elGetter: $.ASN1Encoder<Meter>): _Element {
    const _components: _Element[] = [];
    if (value.meternum !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.meternum, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.metervalue, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Meter(value, elGetter);
}


/* eslint-enable */
