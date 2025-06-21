/* eslint-disable */
import {
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
    BodyPartNumber,
    _decode_BodyPartNumber,
    _encode_BodyPartNumber,
} from '../IPMSHeadingExtensions/BodyPartNumber.ta.mjs';
import {
    SignatureStatus,
    _decode_SignatureStatus,
    _encode_SignatureStatus,
} from '../MSGeneralAttributeTypes/SignatureStatus.ta.mjs';
/**
 * @summary BodyPartSignatureVerification_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartSignatureVerification-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class BodyPartSignatureVerification_Item {
    constructor(
        /**
         * @summary `body_part_sequence_number`.
         * @public
         * @readonly
         */
        readonly body_part_sequence_number: BodyPartNumber,
        /**
         * @summary `body_part_signature`.
         * @public
         * @readonly
         */
        readonly body_part_signature: SignatureStatus
    ) {}

    /**
     * @summary Restructures an object into a BodyPartSignatureVerification_Item
     * @description
     *
     * This takes an `object` and converts it to a `BodyPartSignatureVerification_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BodyPartSignatureVerification_Item`.
     * @returns {BodyPartSignatureVerification_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof BodyPartSignatureVerification_Item]: BodyPartSignatureVerification_Item[_K];
        }
    ): BodyPartSignatureVerification_Item {
        return new BodyPartSignatureVerification_Item(
            _o.body_part_sequence_number,
            _o.body_part_signature
        );
    }
}

/**
 * @summary The Leading Root Component Types of BodyPartSignatureVerification_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BodyPartSignatureVerification_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'body-part-sequence-number',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'body-part-signature',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of BodyPartSignatureVerification_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BodyPartSignatureVerification_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of BodyPartSignatureVerification_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BodyPartSignatureVerification_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_BodyPartSignatureVerification_Item: $.ASN1Decoder<BodyPartSignatureVerification_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartSignatureVerification_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartSignatureVerification_Item} The decoded data structure.
 */
export function _decode_BodyPartSignatureVerification_Item(el: _Element) {
    if (!_cached_decoder_for_BodyPartSignatureVerification_Item) {
        _cached_decoder_for_BodyPartSignatureVerification_Item = function (
            el: _Element
        ): BodyPartSignatureVerification_Item {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let body_part_sequence_number!: BodyPartNumber;
            let body_part_signature!: SignatureStatus;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'body-part-sequence-number': (_el: _Element): void => {
                    body_part_sequence_number = $._decode_implicit<BodyPartNumber>(
                        () => _decode_BodyPartNumber
                    )(_el);
                },
                'body-part-signature': (_el: _Element): void => {
                    body_part_signature = $._decode_implicit<SignatureStatus>(
                        () => _decode_SignatureStatus
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BodyPartSignatureVerification_Item,
                _extension_additions_list_spec_for_BodyPartSignatureVerification_Item,
                _root_component_type_list_2_spec_for_BodyPartSignatureVerification_Item,
                undefined
            );
            return new BodyPartSignatureVerification_Item /* SET_CONSTRUCTOR_CALL */(
                body_part_sequence_number,
                body_part_signature
            );
        };
    }
    return _cached_decoder_for_BodyPartSignatureVerification_Item(el);
}

let _cached_encoder_for_BodyPartSignatureVerification_Item: $.ASN1Encoder<BodyPartSignatureVerification_Item> | null = null;

/**
 * @summary Encodes a(n) BodyPartSignatureVerification_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartSignatureVerification_Item, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartSignatureVerification_Item(
    value: BodyPartSignatureVerification_Item,
    elGetter: $.ASN1Encoder<BodyPartSignatureVerification_Item>
) {
    if (!_cached_encoder_for_BodyPartSignatureVerification_Item) {
        _cached_encoder_for_BodyPartSignatureVerification_Item = function (
            value: BodyPartSignatureVerification_Item        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_BodyPartNumber,
                            $.BER
                        )(value.body_part_sequence_number, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_SignatureStatus,
                            $.BER
                        )(value.body_part_signature, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BodyPartSignatureVerification_Item(
        value,
        elGetter
    );
}


/* eslint-enable */
