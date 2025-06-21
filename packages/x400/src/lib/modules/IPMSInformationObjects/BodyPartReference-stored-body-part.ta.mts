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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
/**
 * @summary BodyPartReference_stored_body_part
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartReference-stored-body-part ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class BodyPartReference_stored_body_part {
    constructor(
        /**
         * @summary `message_entry`.
         * @public
         * @readonly
         */
        readonly message_entry: SequenceNumber,
        /**
         * @summary `body_part_number`.
         * @public
         * @readonly
         */
        readonly body_part_number: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a BodyPartReference_stored_body_part
     * @description
     *
     * This takes an `object` and converts it to a `BodyPartReference_stored_body_part`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BodyPartReference_stored_body_part`.
     * @returns {BodyPartReference_stored_body_part}
     */
    public static _from_object(
        _o: {
            [_K in keyof BodyPartReference_stored_body_part]: BodyPartReference_stored_body_part[_K];
        }
    ): BodyPartReference_stored_body_part {
        return new BodyPartReference_stored_body_part(
            _o.message_entry,
            _o.body_part_number
        );
    }
}

/**
 * @summary The Leading Root Component Types of BodyPartReference_stored_body_part
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BodyPartReference_stored_body_part: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'message-entry',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        'body-part-number',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of BodyPartReference_stored_body_part
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BodyPartReference_stored_body_part: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of BodyPartReference_stored_body_part
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BodyPartReference_stored_body_part: $.ComponentSpec[] = [];

let _cached_decoder_for_BodyPartReference_stored_body_part: $.ASN1Decoder<BodyPartReference_stored_body_part> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartReference_stored_body_part
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartReference_stored_body_part} The decoded data structure.
 */
export function _decode_BodyPartReference_stored_body_part(el: _Element) {
    if (!_cached_decoder_for_BodyPartReference_stored_body_part) {
        _cached_decoder_for_BodyPartReference_stored_body_part = function (
            el: _Element
        ): BodyPartReference_stored_body_part {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'BodyPartReference-stored-body-part contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'message-entry';
            sequence[1].name = 'body-part-number';
            let message_entry!: SequenceNumber;
            let body_part_number!: INTEGER;
            message_entry = _decode_SequenceNumber(sequence[0]);
            body_part_number = $._decodeInteger(sequence[1]);
            return new BodyPartReference_stored_body_part(
                message_entry,
                body_part_number
            );
        };
    }
    return _cached_decoder_for_BodyPartReference_stored_body_part(el);
}

let _cached_encoder_for_BodyPartReference_stored_body_part: $.ASN1Encoder<BodyPartReference_stored_body_part> | null = null;

/**
 * @summary Encodes a(n) BodyPartReference_stored_body_part into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartReference_stored_body_part, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartReference_stored_body_part(
    value: BodyPartReference_stored_body_part,
    elGetter: $.ASN1Encoder<BodyPartReference_stored_body_part>
) {
    if (!_cached_encoder_for_BodyPartReference_stored_body_part) {
        _cached_encoder_for_BodyPartReference_stored_body_part = function (
            value: BodyPartReference_stored_body_part        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SequenceNumber(
                            value.message_entry,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeInteger(
                            value.body_part_number,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BodyPartReference_stored_body_part(
        value,
        elGetter
    );
}


/* eslint-enable */
