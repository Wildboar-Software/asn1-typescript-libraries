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
import { AC_CAP_IDENTITY } from '../AccessControl-ASN1Module/AC-CAP-IDENTITY.oca';
export { AC_CAP_IDENTITY } from '../AccessControl-ASN1Module/AC-CAP-IDENTITY.oca';
import { CapabilityIdentitiesSet } from '../AccessControl-ASN1Module/CapabilityIdentitiesSet.osa';
export { CapabilityIdentitiesSet } from '../AccessControl-ASN1Module/CapabilityIdentitiesSet.osa';

/* START_OF_SYMBOL_DEFINITION CapabilityIdentitiesList_Item_unknownForm */
/**
 * @summary CapabilityIdentitiesList_Item_unknownForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CapabilityIdentitiesList-Item-unknownForm ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CapabilityIdentitiesList_Item_unknownForm {
    constructor(
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OBJECT_IDENTIFIER,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: _Element
    ) {}

    /**
     * @summary Restructures an object into a CapabilityIdentitiesList_Item_unknownForm
     * @description
     *
     * This takes an `object` and converts it to a `CapabilityIdentitiesList_Item_unknownForm`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CapabilityIdentitiesList_Item_unknownForm`.
     * @returns {CapabilityIdentitiesList_Item_unknownForm}
     */
    public static _from_object(
        _o: {
            [_K in keyof CapabilityIdentitiesList_Item_unknownForm]: CapabilityIdentitiesList_Item_unknownForm[_K];
        }
    ): CapabilityIdentitiesList_Item_unknownForm {
        return new CapabilityIdentitiesList_Item_unknownForm(
            _o.identifier,
            _o.value
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CapabilityIdentitiesList_Item_unknownForm */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CapabilityIdentitiesList_Item_unknownForm */
/**
 * @summary The Leading Root Component Types of CapabilityIdentitiesList_Item_unknownForm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CapabilityIdentitiesList_Item_unknownForm: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'identifier',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec('value', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CapabilityIdentitiesList_Item_unknownForm */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CapabilityIdentitiesList_Item_unknownForm */
/**
 * @summary The Trailing Root Component Types of CapabilityIdentitiesList_Item_unknownForm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CapabilityIdentitiesList_Item_unknownForm: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CapabilityIdentitiesList_Item_unknownForm */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CapabilityIdentitiesList_Item_unknownForm */
/**
 * @summary The Extension Addition Component Types of CapabilityIdentitiesList_Item_unknownForm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CapabilityIdentitiesList_Item_unknownForm: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CapabilityIdentitiesList_Item_unknownForm */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CapabilityIdentitiesList_Item_unknownForm */
let _cached_decoder_for_CapabilityIdentitiesList_Item_unknownForm: $.ASN1Decoder<CapabilityIdentitiesList_Item_unknownForm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CapabilityIdentitiesList_Item_unknownForm */

/* START_OF_SYMBOL_DEFINITION _decode_CapabilityIdentitiesList_Item_unknownForm */
/**
 * @summary Decodes an ASN.1 element into a(n) CapabilityIdentitiesList_Item_unknownForm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CapabilityIdentitiesList_Item_unknownForm} The decoded data structure.
 */
export function _decode_CapabilityIdentitiesList_Item_unknownForm(
    el: _Element
) {
    if (!_cached_decoder_for_CapabilityIdentitiesList_Item_unknownForm) {
        _cached_decoder_for_CapabilityIdentitiesList_Item_unknownForm = function (
            el: _Element
        ): CapabilityIdentitiesList_Item_unknownForm {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'CapabilityIdentitiesList-Item-unknownForm contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'identifier';
            sequence[1].name = 'value';
            let identifier!: OBJECT_IDENTIFIER;
            let value!: _Element;
            identifier = $._decodeObjectIdentifier(sequence[0]);
            value = $._decodeAny(sequence[1]);
            return new CapabilityIdentitiesList_Item_unknownForm(
                identifier,
                value
            );
        };
    }
    return _cached_decoder_for_CapabilityIdentitiesList_Item_unknownForm(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CapabilityIdentitiesList_Item_unknownForm */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CapabilityIdentitiesList_Item_unknownForm */
let _cached_encoder_for_CapabilityIdentitiesList_Item_unknownForm: $.ASN1Encoder<CapabilityIdentitiesList_Item_unknownForm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CapabilityIdentitiesList_Item_unknownForm */

/* START_OF_SYMBOL_DEFINITION _encode_CapabilityIdentitiesList_Item_unknownForm */
/**
 * @summary Encodes a(n) CapabilityIdentitiesList_Item_unknownForm into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CapabilityIdentitiesList_Item_unknownForm, encoded as an ASN.1 Element.
 */
export function _encode_CapabilityIdentitiesList_Item_unknownForm(
    value: CapabilityIdentitiesList_Item_unknownForm,
    elGetter: $.ASN1Encoder<CapabilityIdentitiesList_Item_unknownForm>
) {
    if (!_cached_encoder_for_CapabilityIdentitiesList_Item_unknownForm) {
        _cached_encoder_for_CapabilityIdentitiesList_Item_unknownForm = function (
            value: CapabilityIdentitiesList_Item_unknownForm,
            elGetter: $.ASN1Encoder<CapabilityIdentitiesList_Item_unknownForm>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.value, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CapabilityIdentitiesList_Item_unknownForm(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_CapabilityIdentitiesList_Item_unknownForm */

/* eslint-enable */
