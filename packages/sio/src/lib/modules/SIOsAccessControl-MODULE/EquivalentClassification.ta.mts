/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Applied,
    _decode_Applied,
    _encode_Applied,
} from "../SIOsAccessControl-MODULE/Applied.ta.mjs";
import {
    LabelAndCertValue,
    _decode_LabelAndCertValue,
    _encode_LabelAndCertValue,
} from "../SIOsAccessControl-MODULE/LabelAndCertValue.ta.mjs";

/**
 * @summary EquivalentClassification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EquivalentClassification ::= SEQUENCE {
 *   securityPolicyId   OBJECT IDENTIFIER,
 *   labelAndCertValue  LabelAndCertValue,
 *   applied            Applied
 * }
 * ```
 *
 * @class
 */
export class EquivalentClassification {
    constructor(
        /**
         * @summary `securityPolicyId`.
         * @public
         * @readonly
         */
        readonly securityPolicyId: OBJECT_IDENTIFIER,
        /**
         * @summary `labelAndCertValue`.
         * @public
         * @readonly
         */
        readonly labelAndCertValue: LabelAndCertValue,
        /**
         * @summary `applied`.
         * @public
         * @readonly
         */
        readonly applied: Applied
    ) {}

    /**
     * @summary Restructures an object into a EquivalentClassification
     * @description
     *
     * This takes an `object` and converts it to a `EquivalentClassification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EquivalentClassification`.
     * @returns {EquivalentClassification}
     */
    public static _from_object(
        _o: {
            [_K in keyof EquivalentClassification]: EquivalentClassification[_K];
        }
    ): EquivalentClassification {
        return new EquivalentClassification(
            _o.securityPolicyId,
            _o.labelAndCertValue,
            _o.applied
        );
    }
}


/**
 * @summary The Leading Root Component Types of EquivalentClassification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EquivalentClassification: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "securityPolicyId",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "labelAndCertValue",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "applied",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of EquivalentClassification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EquivalentClassification: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EquivalentClassification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EquivalentClassification: $.ComponentSpec[] = [];


let _cached_decoder_for_EquivalentClassification: $.ASN1Decoder<EquivalentClassification> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EquivalentClassification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EquivalentClassification} The decoded data structure.
 */
export function _decode_EquivalentClassification(el: _Element) {
    if (!_cached_decoder_for_EquivalentClassification) {
        _cached_decoder_for_EquivalentClassification = function (
            el: _Element
        ): EquivalentClassification {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "EquivalentClassification contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "securityPolicyId";
            sequence[1].name = "labelAndCertValue";
            sequence[2].name = "applied";
            let securityPolicyId!: OBJECT_IDENTIFIER;
            let labelAndCertValue!: LabelAndCertValue;
            let applied!: Applied;
            securityPolicyId = $._decodeObjectIdentifier(sequence[0]);
            labelAndCertValue = _decode_LabelAndCertValue(sequence[1]);
            applied = _decode_Applied(sequence[2]);
            return new EquivalentClassification(
                securityPolicyId,
                labelAndCertValue,
                applied
            );
        };
    }
    return _cached_decoder_for_EquivalentClassification(el);
}


let _cached_encoder_for_EquivalentClassification: $.ASN1Encoder<EquivalentClassification> | null = null;


/**
 * @summary Encodes a(n) EquivalentClassification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EquivalentClassification, encoded as an ASN.1 Element.
 */
export function _encode_EquivalentClassification(
    value: EquivalentClassification,
    elGetter: $.ASN1Encoder<EquivalentClassification>
) {
    if (!_cached_encoder_for_EquivalentClassification) {
        _cached_encoder_for_EquivalentClassification = function (
            value: EquivalentClassification        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.securityPolicyId,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_LabelAndCertValue(
                            value.labelAndCertValue,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Applied(value.applied, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EquivalentClassification(value, elGetter);
}


/* eslint-enable */
