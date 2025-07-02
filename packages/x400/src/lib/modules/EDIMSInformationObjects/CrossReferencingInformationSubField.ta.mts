/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ApplicationCrossReference,
    _decode_ApplicationCrossReference,
    _encode_ApplicationCrossReference,
} from '../EDIMSInformationObjects/ApplicationCrossReference.ta.mjs';
import {
    MessageReference,
    _decode_MessageReference,
    _encode_MessageReference,
} from '../EDIMSInformationObjects/MessageReference.ta.mjs';
import {
    BodyPartReference,
    _decode_BodyPartReference,
    _encode_BodyPartReference,
} from '../EDIMSInformationObjects/BodyPartReference.ta.mjs';
/**
 * @summary CrossReferencingInformationSubField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CrossReferencingInformationSubField ::= SEQUENCE {
 *   application-cross-reference  [0]  ApplicationCrossReference,
 *   message-reference            [1]  MessageReference OPTIONAL,
 *   body-part-reference          [2]  BodyPartReference
 * }
 * ```
 *
 */
export class CrossReferencingInformationSubField {
    constructor(
        /**
         * @summary `application_cross_reference`.
         * @public
         * @readonly
         */
        readonly application_cross_reference: ApplicationCrossReference,
        /**
         * @summary `message_reference`.
         * @public
         * @readonly
         */
        readonly message_reference: OPTIONAL<MessageReference>,
        /**
         * @summary `body_part_reference`.
         * @public
         * @readonly
         */
        readonly body_part_reference: BodyPartReference
    ) {}

    /**
     * @summary Restructures an object into a CrossReferencingInformationSubField
     * @description
     *
     * This takes an `object` and converts it to a `CrossReferencingInformationSubField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CrossReferencingInformationSubField`.
     * @returns {CrossReferencingInformationSubField}
     */
    public static _from_object(
        _o: {
            [_K in keyof CrossReferencingInformationSubField]: CrossReferencingInformationSubField[_K];
        }
    ): CrossReferencingInformationSubField {
        return new CrossReferencingInformationSubField(
            _o.application_cross_reference,
            _o.message_reference,
            _o.body_part_reference
        );
    }
}

/**
 * @summary The Leading Root Component Types of CrossReferencingInformationSubField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CrossReferencingInformationSubField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'application-cross-reference',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'message-reference',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'body-part-reference',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of CrossReferencingInformationSubField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CrossReferencingInformationSubField: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CrossReferencingInformationSubField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CrossReferencingInformationSubField: $.ComponentSpec[] = [];

let _cached_decoder_for_CrossReferencingInformationSubField: $.ASN1Decoder<CrossReferencingInformationSubField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CrossReferencingInformationSubField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CrossReferencingInformationSubField} The decoded data structure.
 */
export function _decode_CrossReferencingInformationSubField(el: _Element): CrossReferencingInformationSubField {
    if (!_cached_decoder_for_CrossReferencingInformationSubField) {
        _cached_decoder_for_CrossReferencingInformationSubField = function (
            el: _Element
        ): CrossReferencingInformationSubField {
            let application_cross_reference!: ApplicationCrossReference;
            let message_reference: OPTIONAL<MessageReference>;
            let body_part_reference!: BodyPartReference;
            const callbacks: $.DecodingMap = {
                'application-cross-reference': (_el: _Element): void => {
                    application_cross_reference = $._decode_implicit<ApplicationCrossReference>(
                        () => _decode_ApplicationCrossReference
                    )(_el);
                },
                'message-reference': (_el: _Element): void => {
                    message_reference = $._decode_implicit<MessageReference>(
                        () => _decode_MessageReference
                    )(_el);
                },
                'body-part-reference': (_el: _Element): void => {
                    body_part_reference = $._decode_implicit<BodyPartReference>(
                        () => _decode_BodyPartReference
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CrossReferencingInformationSubField,
                _extension_additions_list_spec_for_CrossReferencingInformationSubField,
                _root_component_type_list_2_spec_for_CrossReferencingInformationSubField,
                undefined
            );
            return new CrossReferencingInformationSubField (
                application_cross_reference,
                message_reference,
                body_part_reference
            );
        };
    }
    return _cached_decoder_for_CrossReferencingInformationSubField(el);
}

let _cached_encoder_for_CrossReferencingInformationSubField: $.ASN1Encoder<CrossReferencingInformationSubField> | null = null;

/**
 * @summary Encodes a(n) CrossReferencingInformationSubField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CrossReferencingInformationSubField, encoded as an ASN.1 Element.
 */
export function _encode_CrossReferencingInformationSubField(
    value: CrossReferencingInformationSubField,
    elGetter: $.ASN1Encoder<CrossReferencingInformationSubField>
): _Element {
    if (!_cached_encoder_for_CrossReferencingInformationSubField) {
        _cached_encoder_for_CrossReferencingInformationSubField = function (
            value: CrossReferencingInformationSubField        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_ApplicationCrossReference,
                            $.BER
                        )(value.application_cross_reference, $.BER),
                        /* IF_ABSENT  */ value.message_reference === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_MessageReference,
                                  $.BER
                              )(value.message_reference, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => _encode_BodyPartReference,
                            $.BER
                        )(value.body_part_reference, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CrossReferencingInformationSubField(
        value,
        elGetter
    );
}


/* eslint-enable */
