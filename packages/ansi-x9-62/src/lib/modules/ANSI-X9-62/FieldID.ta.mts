/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
/**
 * @summary FieldID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FieldID { FIELD-ID:IOSet } ::= SEQUENCE {-- Finite field
 * fieldType        FIELD-ID.&id({IOSet}),
 * parameters        FIELD-ID.&Type({IOSet}{@fieldType})
 * }
 * ```
 *
 * @class
 */
export class FieldID {
    constructor(
        /**
         * @summary `fieldType`.
         * @public
         * @readonly
         */
        readonly fieldType: OBJECT_IDENTIFIER,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: _Element
    ) {}

    /**
     * @summary Restructures an object into a FieldID
     * @description
     *
     * This takes an `object` and converts it to a `FieldID`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FieldID`.
     * @returns {FieldID}
     */
    public static _from_object(
        _o: { [_K in keyof FieldID]: FieldID[_K] }
    ): FieldID {
        return new FieldID(_o.fieldType, _o.parameters);
    }
}

/**
 * @summary The Leading Root Component Types of FieldID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FieldID: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "fieldType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("parameters", false, $.hasAnyTag, undefined, undefined),
];

/**
 * @summary The Trailing Root Component Types of FieldID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FieldID: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of FieldID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FieldID: $.ComponentSpec[] = [];

let _cached_decoder_for_FieldID: $.ASN1Decoder<FieldID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FieldID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FieldID} The decoded data structure.
 */
export function _decode_FieldID(el: _Element) {
    if (!_cached_decoder_for_FieldID) {
        _cached_decoder_for_FieldID = function (el: _Element): FieldID {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "FieldID contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "fieldType";
            sequence[1].name = "parameters";
            let fieldType!: OBJECT_IDENTIFIER;
            let parameters!: _Element;
            fieldType = $._decodeObjectIdentifier(sequence[0]);
            parameters = $._decodeAny(sequence[1]);
            return new FieldID(fieldType, parameters);
        };
    }
    return _cached_decoder_for_FieldID(el);
}

let _cached_encoder_for_FieldID: $.ASN1Encoder<FieldID> | null = null;

/**
 * @summary Encodes a(n) FieldID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FieldID, encoded as an ASN.1 Element.
 */
export function _encode_FieldID(
    value: FieldID,
    elGetter: $.ASN1Encoder<FieldID>
) {
    if (!_cached_encoder_for_FieldID) {
        _cached_encoder_for_FieldID = function (
            value: FieldID        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.fieldType,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.parameters, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_FieldID(value, elGetter);
}


/* eslint-enable */
