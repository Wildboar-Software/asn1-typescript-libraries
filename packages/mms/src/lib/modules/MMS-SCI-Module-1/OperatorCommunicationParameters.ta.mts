/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OperatorCommunicationParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperatorCommunicationParameters ::= SEQUENCE {
 *    input-time-out         [0] IMPLICIT INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class OperatorCommunicationParameters {
    constructor (
        /**
         * @summary `input_time_out`.
         * @public
         * @readonly
         */
        readonly input_time_out: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a OperatorCommunicationParameters
     * @description
     * 
     * This takes an `object` and converts it to a `OperatorCommunicationParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OperatorCommunicationParameters`.
     * @returns {OperatorCommunicationParameters}
     */
    public static _from_object (_o: { [_K in keyof (OperatorCommunicationParameters)]: (OperatorCommunicationParameters)[_K] }): OperatorCommunicationParameters {
        return new OperatorCommunicationParameters(_o.input_time_out);
    }


}

/**
 * @summary The Leading Root Component Types of OperatorCommunicationParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OperatorCommunicationParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("input-time-out", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of OperatorCommunicationParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OperatorCommunicationParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OperatorCommunicationParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OperatorCommunicationParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OperatorCommunicationParameters: $.ASN1Decoder<OperatorCommunicationParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OperatorCommunicationParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OperatorCommunicationParameters (el: _Element): OperatorCommunicationParameters {
    if (!_cached_decoder_for_OperatorCommunicationParameters) { _cached_decoder_for_OperatorCommunicationParameters = function (el: _Element): OperatorCommunicationParameters {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("OperatorCommunicationParameters contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "input-time-out";
    let input_time_out!: INTEGER;
    input_time_out = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    return new OperatorCommunicationParameters(
        input_time_out,

    );
}; }
    return _cached_decoder_for_OperatorCommunicationParameters(el);
}

let _cached_encoder_for_OperatorCommunicationParameters: $.ASN1Encoder<OperatorCommunicationParameters> | null = null;

/**
 * @summary Encodes a(n) OperatorCommunicationParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperatorCommunicationParameters, encoded as an ASN.1 Element.
 */
export
function _encode_OperatorCommunicationParameters (value: OperatorCommunicationParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OperatorCommunicationParameters) { _cached_encoder_for_OperatorCommunicationParameters = function (value: OperatorCommunicationParameters): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.input_time_out, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OperatorCommunicationParameters(value, elGetter);
}


/* eslint-enable */
