/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
// export { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";


/**
 * @summary UDMProSeTargetIdentifierDeconcealment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMProSeTargetIdentifierDeconcealment ::= SEQUENCE
 * {
 *     sUPI                        [1] SUPI,
 *     sUCI                        [2] SUCI
 * }
 * ```
 * 
 * @class
 */
export
class UDMProSeTargetIdentifierDeconcealment {
    /**
     * @summary `sUPI`.
     * @public
     * @readonly
     */
    readonly sUPI: SUPI;
    /**
     * @summary `sUCI`.
     * @public
     * @readonly
     */
    readonly sUCI: SUCI;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sUPI: SUPI,
        sUCI: SUCI,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.sUCI = sUCI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a UDMProSeTargetIdentifierDeconcealment
     * @description
     * 
     * This takes an `object` and converts it to a `UDMProSeTargetIdentifierDeconcealment`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UDMProSeTargetIdentifierDeconcealment`.
     * @returns {UDMProSeTargetIdentifierDeconcealment}
     */
    public static _from_object (_o: { [_K in keyof (UDMProSeTargetIdentifierDeconcealment)]: (UDMProSeTargetIdentifierDeconcealment)[_K] }): UDMProSeTargetIdentifierDeconcealment {
        return new UDMProSeTargetIdentifierDeconcealment(_o.sUPI, _o.sUCI, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of UDMProSeTargetIdentifierDeconcealment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UDMProSeTargetIdentifierDeconcealment: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sUCI", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of UDMProSeTargetIdentifierDeconcealment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UDMProSeTargetIdentifierDeconcealment: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UDMProSeTargetIdentifierDeconcealment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UDMProSeTargetIdentifierDeconcealment: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UDMProSeTargetIdentifierDeconcealment: $.ASN1Decoder<UDMProSeTargetIdentifierDeconcealment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMProSeTargetIdentifierDeconcealment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMProSeTargetIdentifierDeconcealment (el: _Element): UDMProSeTargetIdentifierDeconcealment {
    if (!_cached_decoder_for_UDMProSeTargetIdentifierDeconcealment) { _cached_decoder_for_UDMProSeTargetIdentifierDeconcealment = function (el: _Element): UDMProSeTargetIdentifierDeconcealment {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("UDMProSeTargetIdentifierDeconcealment contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sUPI";
    sequence[1].name = "sUCI";
    let sUPI!: SUPI;
    let sUCI!: SUCI;
    sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(sequence[0]);
    sUCI = $._decode_implicit<SUCI>(() => _decode_SUCI)(sequence[1]);
    return new UDMProSeTargetIdentifierDeconcealment(
        sUPI,
        sUCI,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_UDMProSeTargetIdentifierDeconcealment(el);
}

let _cached_encoder_for_UDMProSeTargetIdentifierDeconcealment: $.ASN1Encoder<UDMProSeTargetIdentifierDeconcealment> | null = null;

/**
 * @summary Encodes a(n) UDMProSeTargetIdentifierDeconcealment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMProSeTargetIdentifierDeconcealment, encoded as an ASN.1 Element.
 */
export
function _encode_UDMProSeTargetIdentifierDeconcealment (value: UDMProSeTargetIdentifierDeconcealment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMProSeTargetIdentifierDeconcealment) { _cached_encoder_for_UDMProSeTargetIdentifierDeconcealment = function (value: UDMProSeTargetIdentifierDeconcealment, elGetter: $.ASN1Encoder<UDMProSeTargetIdentifierDeconcealment>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SUCI, $.BER)(value.sUCI, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_UDMProSeTargetIdentifierDeconcealment(value, elGetter);
}


/* eslint-enable */
