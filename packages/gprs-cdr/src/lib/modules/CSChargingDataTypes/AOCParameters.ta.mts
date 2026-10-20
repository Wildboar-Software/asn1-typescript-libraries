/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AOCParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AOCParameters ::= SEQUENCE {
 *    e1         [1] IMPLICIT INTEGER OPTIONAL,
 *    e2         [2] IMPLICIT INTEGER OPTIONAL,
 *    e3         [3] IMPLICIT INTEGER OPTIONAL,
 *    e4         [4] IMPLICIT INTEGER OPTIONAL,
 *    e5         [5] IMPLICIT INTEGER OPTIONAL,
 *    e6         [6] IMPLICIT INTEGER OPTIONAL,
 *    e7         [7] IMPLICIT INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class AOCParameters {
    /**
     * @summary `e1`.
     * @public
     * @readonly
     */
    readonly e1: OPTIONAL<INTEGER>;
    /**
     * @summary `e2`.
     * @public
     * @readonly
     */
    readonly e2: OPTIONAL<INTEGER>;
    /**
     * @summary `e3`.
     * @public
     * @readonly
     */
    readonly e3: OPTIONAL<INTEGER>;
    /**
     * @summary `e4`.
     * @public
     * @readonly
     */
    readonly e4: OPTIONAL<INTEGER>;
    /**
     * @summary `e5`.
     * @public
     * @readonly
     */
    readonly e5: OPTIONAL<INTEGER>;
    /**
     * @summary `e6`.
     * @public
     * @readonly
     */
    readonly e6: OPTIONAL<INTEGER>;
    /**
     * @summary `e7`.
     * @public
     * @readonly
     */
    readonly e7: OPTIONAL<INTEGER>;

    constructor (
        e1: OPTIONAL<INTEGER>,
        e2: OPTIONAL<INTEGER>,
        e3: OPTIONAL<INTEGER>,
        e4: OPTIONAL<INTEGER>,
        e5: OPTIONAL<INTEGER>,
        e6: OPTIONAL<INTEGER>,
        e7: OPTIONAL<INTEGER>
    ) {
        this.e1 = e1;
        this.e2 = e2;
        this.e3 = e3;
        this.e4 = e4;
        this.e5 = e5;
        this.e6 = e6;
        this.e7 = e7;
    }

    /**
     * @summary Restructures an object into a AOCParameters
     * @description
     * 
     * This takes an `object` and converts it to a `AOCParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AOCParameters`.
     * @returns {AOCParameters}
     */
    public static _from_object (_o: { [_K in keyof (AOCParameters)]: (AOCParameters)[_K] }): AOCParameters {
        return new AOCParameters(_o.e1, _o.e2, _o.e3, _o.e4, _o.e5, _o.e6, _o.e7);
    }


}

/**
 * @summary The Leading Root Component Types of AOCParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AOCParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("e1", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("e2", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("e3", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("e4", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("e5", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("e6", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("e7", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of AOCParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AOCParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AOCParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AOCParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AOCParameters: $.ASN1Decoder<AOCParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AOCParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AOCParameters (el: _Element): AOCParameters {
    if (!_cached_decoder_for_AOCParameters) { _cached_decoder_for_AOCParameters = function (el: _Element): AOCParameters {
    let e1: OPTIONAL<INTEGER>;
    let e2: OPTIONAL<INTEGER>;
    let e3: OPTIONAL<INTEGER>;
    let e4: OPTIONAL<INTEGER>;
    let e5: OPTIONAL<INTEGER>;
    let e6: OPTIONAL<INTEGER>;
    let e7: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "e1": (_el: _Element): void => { e1 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "e2": (_el: _Element): void => { e2 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "e3": (_el: _Element): void => { e3 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "e4": (_el: _Element): void => { e4 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "e5": (_el: _Element): void => { e5 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "e6": (_el: _Element): void => { e6 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "e7": (_el: _Element): void => { e7 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AOCParameters,
        _extension_additions_list_spec_for_AOCParameters,
        _root_component_type_list_2_spec_for_AOCParameters,
        undefined,
    );
    return new AOCParameters(
        e1,
        e2,
        e3,
        e4,
        e5,
        e6,
        e7
    );
}; }
    return _cached_decoder_for_AOCParameters(el);
}

let _cached_encoder_for_AOCParameters: $.ASN1Encoder<AOCParameters> | null = null;

/**
 * @summary Encodes a(n) AOCParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AOCParameters, encoded as an ASN.1 Element.
 */
export
function _encode_AOCParameters (value: AOCParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AOCParameters) { _cached_encoder_for_AOCParameters = function (value: AOCParameters, elGetter: $.ASN1Encoder<AOCParameters>): _Element {
    const _components: _Element[] = [];
    if (value.e1 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.e1, $.BER));
    }
    if (value.e2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.e2, $.BER));
    }
    if (value.e3 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.e3, $.BER));
    }
    if (value.e4 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.e4, $.BER));
    }
    if (value.e5 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.e5, $.BER));
    }
    if (value.e6 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.e6, $.BER));
    }
    if (value.e7 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.e7, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AOCParameters(value, elGetter);
}


/* eslint-enable */
