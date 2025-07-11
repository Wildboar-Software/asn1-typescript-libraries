/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DSS_Parms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSS-Parms ::= SEQUENCE {
 *   p   INTEGER,
 *   q   INTEGER,
 *   g   INTEGER,
 *   ... }
 * ```
 *
 */
export class DSS_Parms {
    constructor(
        /**
         * @summary `p`.
         * @public
         * @readonly
         */
        readonly p: INTEGER,
        /**
         * @summary `q`.
         * @public
         * @readonly
         */
        readonly q: INTEGER,
        /**
         * @summary `g`.
         * @public
         * @readonly
         */
        readonly g: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DSS_Parms
     * @description
     *
     * This takes an `object` and converts it to a `DSS_Parms`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DSS_Parms`.
     * @returns {DSS_Parms}
     */
    public static _from_object(
        _o: { [_K in keyof DSS_Parms]: DSS_Parms[_K] }
    ): DSS_Parms {
        return new DSS_Parms(_o.p, _o.q, _o.g, _o._unrecognizedExtensionsList);
    }
}

/**
 * @summary The Leading Root Component Types of DSS_Parms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DSS_Parms: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "p",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "q",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "g",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of DSS_Parms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DSS_Parms: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DSS_Parms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DSS_Parms: $.ComponentSpec[] = [];

let _cached_decoder_for_DSS_Parms: $.ASN1Decoder<DSS_Parms> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DSS_Parms
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSS_Parms} The decoded data structure.
 */
export function _decode_DSS_Parms(el: _Element): DSS_Parms {
    if (!_cached_decoder_for_DSS_Parms) {
        _cached_decoder_for_DSS_Parms = function (el: _Element): DSS_Parms {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "DSS-Parms contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "p";
            sequence[1].name = "q";
            sequence[2].name = "g";
            let p!: INTEGER;
            let q!: INTEGER;
            let g!: INTEGER;
            p = $._decodeInteger(sequence[0]);
            q = $._decodeInteger(sequence[1]);
            g = $._decodeInteger(sequence[2]);
            return new DSS_Parms(p, q, g, sequence.slice(3));
        };
    }
    return _cached_decoder_for_DSS_Parms(el);
}

let _cached_encoder_for_DSS_Parms: $.ASN1Encoder<DSS_Parms> | null = null;

/**
 * @summary Encodes a(n) DSS_Parms into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSS_Parms, encoded as an ASN.1 Element.
 */
export function _encode_DSS_Parms(
    value: DSS_Parms,
    elGetter: $.ASN1Encoder<DSS_Parms>
): _Element {
    if (!_cached_encoder_for_DSS_Parms) {
        _cached_encoder_for_DSS_Parms = function (
            value: DSS_Parms        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(value.p, $.DER),
                            /* REQUIRED   */ $._encodeInteger(value.q, $.DER),
                            /* REQUIRED   */ $._encodeInteger(value.g, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_DSS_Parms(value, elGetter);
}


/* eslint-enable */
