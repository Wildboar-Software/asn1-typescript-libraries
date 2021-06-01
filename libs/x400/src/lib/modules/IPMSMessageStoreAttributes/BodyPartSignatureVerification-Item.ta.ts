/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    BodyPartNumber,
    _decode_BodyPartNumber,
    _encode_BodyPartNumber,
} from '../IPMSHeadingExtensions/BodyPartNumber.ta';
export {
    BodyPartNumber,
    _decode_BodyPartNumber,
    _encode_BodyPartNumber,
} from '../IPMSHeadingExtensions/BodyPartNumber.ta';
import {
    SignatureStatus,
    SignatureStatus_signature_absent /* IMPORTED_LONG_NAMED_INTEGER */,
    signature_absent /* IMPORTED_SHORT_NAMED_INTEGER */,
    SignatureStatus_verification_in_progress /* IMPORTED_LONG_NAMED_INTEGER */,
    verification_in_progress /* IMPORTED_SHORT_NAMED_INTEGER */,
    SignatureStatus_verification_succeeded /* IMPORTED_LONG_NAMED_INTEGER */,
    verification_succeeded /* IMPORTED_SHORT_NAMED_INTEGER */,
    SignatureStatus_verification_not_possible /* IMPORTED_LONG_NAMED_INTEGER */,
    verification_not_possible /* IMPORTED_SHORT_NAMED_INTEGER */,
    SignatureStatus_content_converted /* IMPORTED_LONG_NAMED_INTEGER */,
    content_converted /* IMPORTED_SHORT_NAMED_INTEGER */,
    SignatureStatus_signature_encrypted /* IMPORTED_LONG_NAMED_INTEGER */,
    signature_encrypted /* IMPORTED_SHORT_NAMED_INTEGER */,
    SignatureStatus_algorithm_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    algorithm_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    SignatureStatus_certificate_not_obtainable /* IMPORTED_LONG_NAMED_INTEGER */,
    certificate_not_obtainable /* IMPORTED_SHORT_NAMED_INTEGER */,
    SignatureStatus_verification_failed /* IMPORTED_LONG_NAMED_INTEGER */,
    verification_failed /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_SignatureStatus,
    _encode_SignatureStatus,
} from '../MSGeneralAttributeTypes/SignatureStatus.ta';
export {
    SignatureStatus,
    SignatureStatus_signature_absent /* IMPORTED_LONG_NAMED_INTEGER */,
    signature_absent /* IMPORTED_SHORT_NAMED_INTEGER */,
    SignatureStatus_verification_in_progress /* IMPORTED_LONG_NAMED_INTEGER */,
    verification_in_progress /* IMPORTED_SHORT_NAMED_INTEGER */,
    SignatureStatus_verification_succeeded /* IMPORTED_LONG_NAMED_INTEGER */,
    verification_succeeded /* IMPORTED_SHORT_NAMED_INTEGER */,
    SignatureStatus_verification_not_possible /* IMPORTED_LONG_NAMED_INTEGER */,
    verification_not_possible /* IMPORTED_SHORT_NAMED_INTEGER */,
    SignatureStatus_content_converted /* IMPORTED_LONG_NAMED_INTEGER */,
    content_converted /* IMPORTED_SHORT_NAMED_INTEGER */,
    SignatureStatus_signature_encrypted /* IMPORTED_LONG_NAMED_INTEGER */,
    signature_encrypted /* IMPORTED_SHORT_NAMED_INTEGER */,
    SignatureStatus_algorithm_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    algorithm_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    SignatureStatus_certificate_not_obtainable /* IMPORTED_LONG_NAMED_INTEGER */,
    certificate_not_obtainable /* IMPORTED_SHORT_NAMED_INTEGER */,
    SignatureStatus_verification_failed /* IMPORTED_LONG_NAMED_INTEGER */,
    verification_failed /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_SignatureStatus,
    _encode_SignatureStatus,
} from '../MSGeneralAttributeTypes/SignatureStatus.ta';

/* START_OF_SYMBOL_DEFINITION BodyPartSignatureVerification_Item */
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
/* END_OF_SYMBOL_DEFINITION BodyPartSignatureVerification_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BodyPartSignatureVerification_Item */
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
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'body-part-signature',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BodyPartSignatureVerification_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BodyPartSignatureVerification_Item */
/**
 * @summary The Trailing Root Component Types of BodyPartSignatureVerification_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BodyPartSignatureVerification_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BodyPartSignatureVerification_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BodyPartSignatureVerification_Item */
/**
 * @summary The Extension Addition Component Types of BodyPartSignatureVerification_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BodyPartSignatureVerification_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BodyPartSignatureVerification_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartSignatureVerification_Item */
let _cached_decoder_for_BodyPartSignatureVerification_Item: $.ASN1Decoder<BodyPartSignatureVerification_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartSignatureVerification_Item */

/* START_OF_SYMBOL_DEFINITION _decode_BodyPartSignatureVerification_Item */
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
/* END_OF_SYMBOL_DEFINITION _decode_BodyPartSignatureVerification_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartSignatureVerification_Item */
let _cached_encoder_for_BodyPartSignatureVerification_Item: $.ASN1Encoder<BodyPartSignatureVerification_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartSignatureVerification_Item */

/* START_OF_SYMBOL_DEFINITION _encode_BodyPartSignatureVerification_Item */
/**
 * @summary Encodes a(n) BodyPartSignatureVerification_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartSignatureVerification_Item, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartSignatureVerification_Item(
    value: BodyPartSignatureVerification_Item,
    elGetter: $.ASN1Encoder<BodyPartSignatureVerification_Item>
) {
    if (!_cached_encoder_for_BodyPartSignatureVerification_Item) {
        _cached_encoder_for_BodyPartSignatureVerification_Item = function (
            value: BodyPartSignatureVerification_Item,
            elGetter: $.ASN1Encoder<BodyPartSignatureVerification_Item>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_BodyPartSignatureVerification_Item */

/* eslint-enable */
