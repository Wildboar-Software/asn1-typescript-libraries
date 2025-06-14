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
    MessageSubmissionEnvelope,
    _decode_MessageSubmissionEnvelope,
    _encode_MessageSubmissionEnvelope,
} from '../MTSAbstractService/MessageSubmissionEnvelope.ta.mjs';
import { ON, _decode_ON, _encode_ON } from '../IPMSInformationObjects/ON.ta.mjs';
/* START_OF_SYMBOL_DEFINITION originate_on_ArgumentType */
/**
 * @summary originate_on_ArgumentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originate-on-ArgumentType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class originate_on_ArgumentType {
    constructor(
        /**
         * @summary `envelope`.
         * @public
         * @readonly
         */
        readonly envelope: MessageSubmissionEnvelope,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: ON
    ) {}

    /**
     * @summary Restructures an object into a originate_on_ArgumentType
     * @description
     *
     * This takes an `object` and converts it to a `originate_on_ArgumentType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `originate_on_ArgumentType`.
     * @returns {originate_on_ArgumentType}
     */
    public static _from_object(
        _o: {
            [_K in keyof originate_on_ArgumentType]: originate_on_ArgumentType[_K];
        }
    ): originate_on_ArgumentType {
        return new originate_on_ArgumentType(_o.envelope, _o.content);
    }
}
/* END_OF_SYMBOL_DEFINITION originate_on_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_originate_on_ArgumentType */
/**
 * @summary The Leading Root Component Types of originate_on_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_originate_on_ArgumentType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'envelope',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'content',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_originate_on_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_originate_on_ArgumentType */
/**
 * @summary The Trailing Root Component Types of originate_on_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_originate_on_ArgumentType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_originate_on_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_originate_on_ArgumentType */
/**
 * @summary The Extension Addition Component Types of originate_on_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_originate_on_ArgumentType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_originate_on_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_originate_on_ArgumentType */
let _cached_decoder_for_originate_on_ArgumentType: $.ASN1Decoder<originate_on_ArgumentType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_originate_on_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _decode_originate_on_ArgumentType */
/**
 * @summary Decodes an ASN.1 element into a(n) originate_on_ArgumentType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {originate_on_ArgumentType} The decoded data structure.
 */
export function _decode_originate_on_ArgumentType(el: _Element) {
    if (!_cached_decoder_for_originate_on_ArgumentType) {
        _cached_decoder_for_originate_on_ArgumentType = function (
            el: _Element
        ): originate_on_ArgumentType {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let envelope!: MessageSubmissionEnvelope;
            let content!: ON;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                envelope: (_el: _Element): void => {
                    envelope = $._decode_implicit<MessageSubmissionEnvelope>(
                        () => _decode_MessageSubmissionEnvelope
                    )(_el);
                },
                content: (_el: _Element): void => {
                    content = $._decode_implicit<ON>(() => _decode_ON)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_originate_on_ArgumentType,
                _extension_additions_list_spec_for_originate_on_ArgumentType,
                _root_component_type_list_2_spec_for_originate_on_ArgumentType,
                undefined
            );
            return new originate_on_ArgumentType /* SET_CONSTRUCTOR_CALL */(
                envelope,
                content
            );
        };
    }
    return _cached_decoder_for_originate_on_ArgumentType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_originate_on_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_originate_on_ArgumentType */
let _cached_encoder_for_originate_on_ArgumentType: $.ASN1Encoder<originate_on_ArgumentType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_originate_on_ArgumentType */

/* START_OF_SYMBOL_DEFINITION _encode_originate_on_ArgumentType */
/**
 * @summary Encodes a(n) originate_on_ArgumentType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The originate_on_ArgumentType, encoded as an ASN.1 Element.
 */
export function _encode_originate_on_ArgumentType(
    value: originate_on_ArgumentType,
    elGetter: $.ASN1Encoder<originate_on_ArgumentType>
) {
    if (!_cached_encoder_for_originate_on_ArgumentType) {
        _cached_encoder_for_originate_on_ArgumentType = function (
            value: originate_on_ArgumentType        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_MessageSubmissionEnvelope,
                            $.BER
                        )(value.envelope, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_ON,
                            $.BER
                        )(value.content, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_originate_on_ArgumentType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_originate_on_ArgumentType */

/* eslint-enable */
