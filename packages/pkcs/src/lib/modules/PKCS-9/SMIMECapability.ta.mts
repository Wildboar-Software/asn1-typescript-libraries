/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SMIMECapability
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SMIMECapability ::= SEQUENCE {
 *         algorithm  ALGORITHM.&id ({SMIMEv3Algorithms}),
 *         parameters ALGORITHM.&Type ({SMIMEv3Algorithms}{@algorithm})
 * }
 * ```
 *
 */
export class SMIMECapability {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: OBJECT_IDENTIFIER,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: _Element
    ) {}

    /**
     * @summary Restructures an object into a SMIMECapability
     * @description
     *
     * This takes an `object` and converts it to a `SMIMECapability`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMIMECapability`.
     * @returns {SMIMECapability}
     */
    public static _from_object(
        _o: { [_K in keyof SMIMECapability]: SMIMECapability[_K] }
    ): SMIMECapability {
        return new SMIMECapability(_o.algorithm, _o.parameters);
    }
}


/**
 * @summary The Leading Root Component Types of SMIMECapability
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SMIMECapability: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec("parameters", false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of SMIMECapability
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SMIMECapability: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SMIMECapability
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SMIMECapability: $.ComponentSpec[] = [];


let _cached_decoder_for_SMIMECapability: $.ASN1Decoder<SMIMECapability> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SMIMECapability
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SMIMECapability} The decoded data structure.
 */
export function _decode_SMIMECapability(el: _Element): SMIMECapability {
    if (!_cached_decoder_for_SMIMECapability) {
        _cached_decoder_for_SMIMECapability = function (
            el: _Element
        ): SMIMECapability {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SMIMECapability contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "algorithm";
            sequence[1].name = "parameters";
            let algorithm!: OBJECT_IDENTIFIER;
            let parameters!: _Element;
            algorithm = $._decodeObjectIdentifier(sequence[0]);
            parameters = $._decodeAny(sequence[1]);
            return new SMIMECapability(algorithm, parameters);
        };
    }
    return _cached_decoder_for_SMIMECapability(el);
}


let _cached_encoder_for_SMIMECapability: $.ASN1Encoder<SMIMECapability> | null = null;


/**
 * @summary Encodes a(n) SMIMECapability into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMIMECapability, encoded as an ASN.1 Element.
 */
export function _encode_SMIMECapability(
    value: SMIMECapability,
    elGetter: $.ASN1Encoder<SMIMECapability>
): _Element {
    if (!_cached_encoder_for_SMIMECapability) {
        _cached_encoder_for_SMIMECapability = function (
            value: SMIMECapability        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.algorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.parameters, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SMIMECapability(value, elGetter);
}


/* eslint-enable */
