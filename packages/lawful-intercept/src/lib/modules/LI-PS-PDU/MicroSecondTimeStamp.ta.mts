/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MicroSecondTimeStamp
 * @description
 * 
 * Timestamp with a microsecond fraction. Used, by national agreement, instead
 * of or as well as GeneralizedTime. The specification does not say the two
 * forms are exclusive.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MicroSecondTimeStamp ::= SEQUENCE
 * {
 *     seconds         [0] INTEGER (0..18446744073709551615),
 *         -- number of seconds since 1970-1-1 00:00Z also known as unix time epoch
 *     microSeconds    [1] INTEGER (0..999999),
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MicroSecondTimeStamp {
    /**
     * @summary `seconds`.
     * @description
     *
     * Seconds since 1970-01-01 00:00Z (Unix epoch). The module allows
     * 0..18446744073709551615.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly seconds: INTEGER;
    /**
     * @summary `microSeconds`.
     * @description
     *
     * Microsecond fraction, 0..999999.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly microSeconds: INTEGER;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions this version of the module does not name.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.6.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        seconds: INTEGER,
        microSeconds: INTEGER,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.seconds = seconds;
        this.microSeconds = microSeconds;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MicroSecondTimeStamp
     * @description
     * 
     * This takes an `object` and converts it to a `MicroSecondTimeStamp`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MicroSecondTimeStamp`.
     * @returns {MicroSecondTimeStamp}
     */
    public static _from_object (_o: { [_K in keyof (MicroSecondTimeStamp)]: (MicroSecondTimeStamp)[_K] }): MicroSecondTimeStamp {
        return new MicroSecondTimeStamp(_o.seconds, _o.microSeconds, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MicroSecondTimeStamp
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MicroSecondTimeStamp: $.ComponentSpec[] = [
    new $.ComponentSpec("seconds", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("microSeconds", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MicroSecondTimeStamp
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MicroSecondTimeStamp: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MicroSecondTimeStamp
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MicroSecondTimeStamp: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MicroSecondTimeStamp: $.ASN1Decoder<MicroSecondTimeStamp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MicroSecondTimeStamp
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MicroSecondTimeStamp (el: _Element): MicroSecondTimeStamp {
    if (!_cached_decoder_for_MicroSecondTimeStamp) { _cached_decoder_for_MicroSecondTimeStamp = function (el: _Element): MicroSecondTimeStamp {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MicroSecondTimeStamp contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "seconds";
    sequence[1].name = "microSeconds";
    let seconds!: INTEGER;
    let microSeconds!: INTEGER;
    seconds = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    {
        const _n = typeof seconds === "bigint" ? seconds : BigInt(seconds);
        if (_n < 0n || _n > 18446744073709551615n) {
            throw new ASN1OverflowError("MicroSecondTimeStamp.seconds violates INTEGER range");
        }
    }
    microSeconds = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    {
        const _n = typeof microSeconds === "bigint" ? microSeconds : BigInt(microSeconds);
        if (_n < 0n || _n > 999999n) {
            throw new ASN1OverflowError("MicroSecondTimeStamp.microSeconds violates INTEGER range");
        }
    }
    return new MicroSecondTimeStamp(
        seconds,
        microSeconds,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_MicroSecondTimeStamp(el);
}

let _cached_encoder_for_MicroSecondTimeStamp: $.ASN1Encoder<MicroSecondTimeStamp> | null = null;

/**
 * @summary Encodes a(n) MicroSecondTimeStamp into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MicroSecondTimeStamp, encoded as an ASN.1 Element.
 */
export
function _encode_MicroSecondTimeStamp (value: MicroSecondTimeStamp, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MicroSecondTimeStamp) { _cached_encoder_for_MicroSecondTimeStamp = function (value: MicroSecondTimeStamp, elGetter: $.ASN1Encoder<MicroSecondTimeStamp>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.seconds, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.microSeconds, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MicroSecondTimeStamp(value, elGetter);
}


/* eslint-enable */
